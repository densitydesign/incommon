import React, { useEffect, useRef } from 'react'
import MenuTop from '../../components/MenuTop'
import Viva from 'vivagraphjs'
import networkBig from '../../data/network-forma.json'
import groupBy from 'lodash/groupBy'
import uniqBy from 'lodash/uniqBy'
import truncate from 'lodash/truncate'

const network = networkBig //slice(0, 1)
const eventi = uniqBy(network, 'Evento')
const attori = uniqBy(network, 'Attore')
const eventiWithAttori = groupBy(network, 'Evento')

const graph = Viva.Graph.graph()
eventi.forEach((evento) => {
  graph.addNode(evento.Evento, { __glType: 'evento' })
})

attori.forEach((attore) => {
  graph.addNode(attore.Attore, { __glType: 'attore' })
})

Object.keys(eventiWithAttori).forEach((evento) => {
  const attori = eventiWithAttori[evento]
  attori.forEach((attore) => {
    graph.addLink(evento, attore.Attore)
  })
})

function buildCircleNodeShader() {
  // For each primitive we need 6 attributes: x, y, size, fill, stroke, strokeSize.
  var ATTRIBUTES_PER_PRIMITIVE = 6,
    nodesFS = [
      'precision mediump float;',
      'varying vec4 color;',
      'varying vec4 border;',
      'varying float radius;',

      'void main(void) {',
      '   if ((gl_PointCoord.x - 0.5) * (gl_PointCoord.x - 0.5) + (gl_PointCoord.y - 0.5) * (gl_PointCoord.y - 0.5) < 0.25 && (gl_PointCoord.x - 0.5) * (gl_PointCoord.x - 0.5) + (gl_PointCoord.y - 0.5) * (gl_PointCoord.y - 0.5) > radius) {',
      '     gl_FragColor = border;',
      '   } else if ((gl_PointCoord.x - 0.5) * (gl_PointCoord.x - 0.5) + (gl_PointCoord.y - 0.5) * (gl_PointCoord.y - 0.5) < radius) {',
      '     gl_FragColor = color;',
      '   } else {',
      '     gl_FragColor = vec4(0);',
      '   }',
      '}',
    ].join('\n'),
    nodesVS = [
      'precision mediump float;',
      'attribute vec2 a_vertexPos;',
      'attribute vec4 a_customAttributes;',
      'uniform vec2 u_screenSize;',
      'uniform mat4 u_transform;',
      'varying vec4 color;',
      'varying vec4 border;',
      'varying float radius;',

      'void main(void) {',
      '   gl_Position = u_transform * vec4(a_vertexPos/u_screenSize, 0, 1);',
      '   gl_PointSize = a_customAttributes[0] * u_transform[0][0];',
      '   float c = a_customAttributes[1];',
      '   color.b = mod(c, 256.0); c = floor(c/256.0);',
      '   color.g = mod(c, 256.0); c = floor(c/256.0);',
      '   color.r = mod(c, 256.0); c = floor(c/256.0);',
      '   color.a = 255.0;',
      '   color /= 255.0;',
      '   float b = a_customAttributes[2];',
      '   border.b = mod(b, 256.0); b = floor(b/256.0);',
      '   border.g = mod(b, 256.0); b = floor(b/256.0);',
      '   border.r = mod(b, 256.0); b = floor(b/256.0);',
      '   border.a = 255.0;',
      '   border /= 255.0;',
      '   radius = 0.25 * (a_customAttributes[0] - a_customAttributes[3]) / a_customAttributes[0];',
      '}',
    ].join('\n')

  let program,
    buffer,
    locations,
    nodes = new Float32Array(64),
    webglUtils,
    nodesCount = 0,
    canvasWidth,
    canvasHeight,
    transform,
    isCanvasDirty

  /**
   * @type {WebGLRenderingContext}
   */
  let gl

  return {
    /**
     * Called by webgl renderer to load the shader into gl context.
     */
    load: function (glContext) {
      gl = glContext
      webglUtils = Viva.Graph.webgl(glContext)

      program = webglUtils.createProgram(nodesVS, nodesFS)
      gl.useProgram(program)
      locations = webglUtils.getLocations(program, [
        'a_vertexPos',
        'a_customAttributes',
        'u_screenSize',
        'u_transform',
      ])

      gl.enableVertexAttribArray(locations.vertexPos)
      gl.enableVertexAttribArray(locations.customAttributes)

      buffer = gl.createBuffer()
    },

    /**
     * Called by webgl renderer to update node position in the buffer array
     *
     * @param nodeUI - data model for the rendered node (WebGLCircle in this case)
     * @param pos - {x, y} coordinates of the node.
     */
    position: function (nodeUI, pos) {
      var idx = nodeUI.id
      nodes[idx * ATTRIBUTES_PER_PRIMITIVE] = pos.x
      nodes[idx * ATTRIBUTES_PER_PRIMITIVE + 1] = -pos.y
      nodes[idx * ATTRIBUTES_PER_PRIMITIVE + 2] = nodeUI.size
      nodes[idx * ATTRIBUTES_PER_PRIMITIVE + 3] = nodeUI.fill
      nodes[idx * ATTRIBUTES_PER_PRIMITIVE + 4] = nodeUI.stroke
      nodes[idx * ATTRIBUTES_PER_PRIMITIVE + 5] = nodeUI.strokeSize
    },

    /**
     * Request from webgl renderer to actually draw our stuff into the
     * gl context. This is the core of our shader.
     */
    render: function () {
      gl.useProgram(program)
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
      gl.bufferData(gl.ARRAY_BUFFER, nodes, gl.DYNAMIC_DRAW)

      if (isCanvasDirty) {
        isCanvasDirty = false
        gl.uniformMatrix4fv(locations.transform, false, transform)
        gl.uniform2f(locations.screenSize, canvasWidth, canvasHeight)
      }

      gl.vertexAttribPointer(
        locations.vertexPos,
        2,
        gl.FLOAT,
        false,
        ATTRIBUTES_PER_PRIMITIVE * Float32Array.BYTES_PER_ELEMENT,
        0
      )
      gl.vertexAttribPointer(
        locations.customAttributes,
        ATTRIBUTES_PER_PRIMITIVE - 2,
        gl.FLOAT,
        false,
        ATTRIBUTES_PER_PRIMITIVE * Float32Array.BYTES_PER_ELEMENT,
        2 * 4
      )

      gl.drawArrays(gl.POINTS, 0, nodesCount)
    },

    /**
     * Called by webgl renderer when user scales/pans the canvas with nodes.
     */
    updateTransform: function (newTransform) {
      transform = newTransform
      isCanvasDirty = true
    },

    /**
     * Called by webgl renderer when user resizes the canvas with nodes.
     */
    updateSize: function (newCanvasWidth, newCanvasHeight) {
      canvasWidth = newCanvasWidth
      canvasHeight = newCanvasHeight
      isCanvasDirty = true
    },

    /**
     * Called by webgl renderer to notify us that the new node was created in the graph
     */
    createNode: function (node) {
      nodes = webglUtils.extendArray(
        nodes,
        nodesCount,
        ATTRIBUTES_PER_PRIMITIVE
      )
      nodesCount += 1
    },

    /**
     * Called by webgl renderer to notify us that the node was removed from the graph
     */
    removeNode: function (node) {
      if (nodesCount > 0) {
        nodesCount -= 1
      }

      if (node.id < nodesCount && nodesCount > 0) {
        // we do not really delete anything from the buffer.
        // Instead we swap deleted node with the "last" node in the
        // buffer and decrease marker of the "last" node. Gives nice O(1)
        // performance, but make code slightly harder than it could be:
        webglUtils.copyArrayPart(
          nodes,
          node.id * ATTRIBUTES_PER_PRIMITIVE,
          nodesCount * ATTRIBUTES_PER_PRIMITIVE,
          ATTRIBUTES_PER_PRIMITIVE
        )
      }
    },

    /**
     * This method is called by webgl renderer when it changes parts of its
     * buffers. We don't use it here, but it's needed by API (see the comment
     * in the removeNode() method)
     */
    replaceProperties: function (replacedNode, newNode) {},
  }
}

const DRAW_LABEL_LINKS_COUNT = 20
const LABEL_BASE_FONT = 16
const LABEL_FONT_MUL = 0.3
const LINKS_COUNT_PROGRESSIVE_MULLER = 6
const MAX_FONT_SIZE = 25

export default function Forma() {
  const graphRef = useRef()

  useEffect(() => {
    const containerHeight = graphRef.current.clientHeight
    const containerWidth = graphRef.current.clientWidth

    var graphics = Viva.Graph.View.webglGraphics()

    var circleNode = buildCircleNodeShader()
    graphics.setNodeProgram(circleNode)
    graphics.node(function (node) {
      // The function is called every time renderer needs a ui to display node
      const size = 10 + (node.links ?? []).length * 2
      // Each node has 4 attributes
      // - size = full circle radius (including border)
      // - fill = color to use for the center of the circle
      // - stroke = color to use for the border of the circle
      // - strokeSize = thickness of the border (MUST be < size)

      // To draw a hollow circle, set fill to the same color of the background
      // To draw a filled circle without border, just set strokeSize to 0 and stroke to an arbitrary color
      //    In this case, stroke will be ignored, but it is required to set it to mantain the fixed size
      //    of the webgl node structure

      if (node.data.__glType === 'attore') {
        return {
          size,
          fill: 0xff0000,
          stroke: 0x000000,
          strokeSize: 0.0,
        }
      } else {
        // node.data.__glType === "evento"
        return {
          size,
          fill: 0x000000,
          stroke: 0xff0000,
          strokeSize: 6.0,
        }
      }
    })
    const renderer = Viva.Graph.View.renderer(graph, {
      container: graphRef.current,
      graphics: graphics,
      // interactive: 'scroll,drag',
    })
    var events = Viva.Graph.webglInputEvents(graphics, graph)
    events.click(function (node) {
      // alert('Click ' + node.id)
      // console.log('Single click on node: ', node)
    })
    var domLabels = generateDOMLabels(graph)

    graphics.placeNode(function (ui, pos) {
      // This callback is called by the renderer before it updates
      // node coordinate. We can use it to update corresponding DOM
      // label position;
      const zoom = renderer.getTransform().scale
      const showLinksCount = Math.ceil(
        DRAW_LABEL_LINKS_COUNT +
          (1 - Math.max(1, zoom)) * LINKS_COUNT_PROGRESSIVE_MULLER
      )

      if ((ui.node.links ?? []).length > showLinksCount) {
        // we create a copy of layout position
        const domPos = {
          x: pos.x,
          y: pos.y,
        }

        // var domLabels = generateDOMLabels(graph)
        // And ask graphics to transform it to DOM coordinates:
        graphics.transformGraphToClientCoordinates(domPos)

        // then move corresponding dom label to its own position:
        const nodeId = ui.node.id

        //console.log(zoom)

        const labelStyle = domLabels[nodeId].style

        //console.log(zoom, labelStyle.fontSize)

        // if(ui.node.links.length > 50){
        //   labelStyle.fontSize = '50px'
        //   labelStyle.left = (domPos.x - 100) + 'px'
        // } else {
        //   labelStyle.fontSize = ui.node.links.length - 5 + 'px'
        //   labelStyle.left = (domPos.x - 50) + 'px'
        // }

        if (
          domPos.y <= 0 ||
          domPos.x <= 0 ||
          domPos.y >= containerHeight ||
          domPos.x >= containerWidth
        ) {
          labelStyle.display = 'none'
        } else {
          labelStyle.display = 'initial'
          labelStyle.left = domPos.x + 'px'
          labelStyle.top = domPos.y - 10 + 'px'
          labelStyle.fontSize =
            Math.min(
              (LABEL_BASE_FONT +
                (ui.node.links.length - showLinksCount) * LABEL_FONT_MUL) *
                zoom,
              MAX_FONT_SIZE
            ) + 'px'
          labelStyle.left = domPos.x - domLabels[nodeId].clientWidth / 2 + 'px'
        }
      } else {
        const nodeId = ui.node.id
        const labelStyle = domLabels[nodeId].style
        labelStyle.display = 'none'
      }
    })

    function generateDOMLabels(graph) {
      // this will map node id into DOM element
      var labels = {}
      graph.forEachNode(function (node) {
        //if ((node.links ?? []).length > DRAW_LABEL_LINKS_COUNT) {
        var label = document.createElement('span')
        label.classList.add('node-label')
        label.innerText = truncate(node.id)
        labels[node.id] = label
        graphRef.current.appendChild(label)
        //}
      })
      // NOTE: If your graph changes over time you will need to
      // monitor graph changes and update DOM elements accordingly
      return labels
    }

    renderer.run()
  }, [])

  return (
    <div style={{ overflow: 'hidden' }}>
      <MenuTop />
      <div className="d-flex">
        <div
          style={{
            background: 'black',
            width: '25%',
            zIndex: 100000,
            borderRight: '1px solid red',
          }}
        >
          xxxx
        </div>
        <div
          ref={graphRef}
          style={{
            position: 'relative',
            height: 'calc(100vh - 58px)',
            flex: 1,
            // background: 'purple',
          }}
        ></div>
      </div>
    </div>
  )
}
