import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import MenuTop from '../../components/MenuTop'
import Viva from 'vivagraphjs'
import networkBig from '../../data/network-forma.json'
import networkApi from '../../data/network-forma-api.json'
import groupBy from 'lodash/groupBy'
import uniqBy from 'lodash/uniqBy'
import truncate from 'lodash/truncate'
import { countBy, orderBy } from 'lodash'
import classNames from 'classnames'
import SearchResults from './SearchResults'
import SelectedCard from './SelectedCard'
import { X } from 'react-bootstrap-icons'
import ZoomControls from './ZoomControls'
import './Forma.css'

function buildCircleNodeShader() {
  // For each primitive we need 6 attributes: x, y, size, fill, stroke, strokeSize.
  const ATTRIBUTES_PER_PRIMITIVE = 6,
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
      const idx = nodeUI.id
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

const DRAW_LABEL_LINKS_COUNT = 18
const LABEL_BASE_FONT = 16
const LABEL_FONT_MUL = 0.3
const LINKS_COUNT_PROGRESSIVE_MULLER = 8
const MAX_FONT_SIZE = 25

export default function Forma() {
  const graphDomRef = useRef()
  const graphRef = useRef()
  const rerenderRef = useRef()
  const [dataType, setDataType] = useState('normal')

  const network = dataType === 'normal' ? networkBig : networkApi

  // NOTE: Maybe calculate them inside react component
  // The downside to have this here is that memory is always used
  // ... also in other page ... but for now is ok
  // .. on the other hand .. have stuff here speed up inital rendering
  const eventi = uniqBy(network, 'Evento')
  const attori = uniqBy(network, 'Attore')
  const eventiWithAttori = groupBy(network, 'Evento')
  const attoriWithEventi = groupBy(network, 'Attore')
  const relazioniCount = countBy(network, 'Relazione')

  const [relazioneState, setRelazione] = useState(null)

  const filterRelazione = (relazione) => {
    setRelazione(relazione)
    filterGraphRelation(relazione)
  }

  useEffect(() => {
    document.querySelectorAll('.node-label').forEach((label) => {
      label.style.display = 'none'
    })
  }, [dataType, relazioneState])

  useEffect(() => {
    const graph = Viva.Graph.graph()
    graphRef.current = graph

    eventi.forEach((evento) => {
      graph.addNode(evento.Evento, { __glType: 'evento' })
    })
    attori.forEach((attore) => {
      graph.addNode(attore.Attore, { __glType: 'attore' })
    })

    Object.keys(eventiWithAttori).forEach((evento) => {
      const attori = eventiWithAttori[evento]
      const attoriLinksSet = new Set()
      attori.forEach((attore) => {
        const nomeAttore = attore.Attore
        if (!attoriLinksSet.has(nomeAttore)) {
          graph.addLink(evento, nomeAttore)
          attoriLinksSet.add(nomeAttore)
        }
      })
    })

    const containerHeight = graphDomRef.current.clientHeight
    const containerWidth = graphDomRef.current.clientWidth

    var graphicsOptions = {
      clearColor: true, // we want to avoid rendering artifacts
      clearColorValue: {
        // use black color to erase background
        r: 0,
        g: 0,
        b: 0,
        a: 1,
      },
    }

    const graphics = Viva.Graph.View.webglGraphics(graphicsOptions)

    const circleNode = buildCircleNodeShader()
    graphics.setNodeProgram(circleNode)
    graphics.node(function (node) {
      const size = 10 + (node.links ?? []).length * 2
      if (node.data.__glType === 'attore') {
        return {
          size,
          fill: 0xd92100,
          stroke: 0x000000,
          strokeSize: 0.0,
        }
      } else {
        return {
          size,
          fill: 0x000000,
          stroke: 0xd92100,
          strokeSize: 5.0,
        }
      }
    })
    graphics.link(function (link) {
      return Viva.Graph.View.webglLine(0x6c757d99)
    })

    const renderer = Viva.Graph.View.renderer(graph, {
      container: graphDomRef.current,
      graphics: graphics,
      // interactive: 'scroll,drag',
    })
    rerenderRef.current = renderer

    const domLabels = generateDOMLabels(graph)

    // Welcome Back Spaghetti code! (i'm also italian)
    const forceLabelsToShow = new Set()

    graphics.placeNode(function (ui, pos) {
      // This callback is called by the renderer before it updates
      // node coordinate. We can use it to update corresponding DOM
      // label position;
      const zoom = renderer.getTransform().scale
      const showLinksCount = Math.ceil(
        DRAW_LABEL_LINKS_COUNT +
          (1 - Math.max(1, zoom)) * LINKS_COUNT_PROGRESSIVE_MULLER
      )

      if (
        forceLabelsToShow.has(ui.node.id) ||
        (ui.node.links ?? []).length > showLinksCount
      ) {
        // we create a copy of layout position
        const domPos = {
          x: pos.x,
          y: pos.y,
        }

        // And ask graphics to transform it to DOM coordinates:
        graphics.transformGraphToClientCoordinates(domPos)

        // then move corresponding dom label to its own position:
        const nodeId = ui.node.id

        const labelStyle = domLabels[nodeId].style

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

    const events = Viva.Graph.webglInputEvents(graphics, graph)

    // Click Node Function
    events.click(function (node) {
      const nodeUI = graphics.getNodeUI(node.id)
      onItemSelectFromSearch({
        title: nodeUI.node.id,
        type: nodeUI.node.data.__glType,
      })
    })

    // Enter Mouse Node Function
    events.mouseEnter(function (node) {
      document.body.style.cursor = 'pointer'
      const graphics = rerenderRef.current.getGraphics()
      const nodeUI = graphics.getNodeUI(node.id)
      const size = 10 + (nodeUI.node.links ?? []).length * 2
      nodeUI.size = size
      if (node.data.__glType === 'attore') {
        nodeUI.fill = 0xd92100
        nodeUI.stroke = 0x000000
      } else {
        nodeUI.fill = 0x000000
        nodeUI.stroke = 0xd92100
      }

      forceLabelsToShow.add(nodeUI.node.id)

      graph.forEachLinkedNode(node.id, function (node, link) {
        const graphics = rerenderRef.current.getGraphics()
        const nodeUI = graphics.getNodeUI(node.id)
        const size = 10 + (nodeUI.node.links ?? []).length * 2
        if (node.data.__glType === 'attore') {
          nodeUI.fill = 0xd92100
          nodeUI.stroke = 0x000000
        } else {
          nodeUI.fill = 0x000000
          nodeUI.stroke = 0xd92100
        }
        nodeUI.size = size
        const linkUI = graphics.getLinkUI(link.id)
        linkUI.color = 0xffffffff
      })
      renderer.rerender()
    })

    events.mouseLeave(function (node) {
      document.body.style.cursor = 'auto'
      const graphics = rerenderRef.current.getGraphics()
      graph.forEachNode((node) => {
        const nodeUI = graphics.getNodeUI(node.id)
        const size = 10 + (nodeUI.node.links ?? []).length * 2
        if (node.data.__glType === 'attore') {
          nodeUI.fill = 0xd92100
          nodeUI.stroke = 0x000000
        } else {
          nodeUI.fill = 0x000000
          nodeUI.stroke = 0xd92100
        }
        nodeUI.size = size
      })

      forceLabelsToShow.delete(node.id)

      graph.forEachLinkedNode(node.id, function (node, link) {
        const graphics = rerenderRef.current.getGraphics()
        const linkUI = graphics.getLinkUI(link.id)
        linkUI.color = 0x6c757d99
      })
      renderer.rerender()
    })

    function generateDOMLabels(graph) {
      // this will map node id into DOM element
      const labels = {}
      graph.forEachNode(function (node) {
        const label = document.createElement('span')
        label.classList.add('node-label')
        label.id = `ma-graph-label-${node.id}`
        label.innerText = truncate(node.id)
        labels[node.id] = label
        graphDomRef.current.appendChild(label)
      })
      return labels
    }
    renderer.run()
    return () => {
      renderer.dispose()
    }
  }, [dataType])

  useEffect(() => {
    const renderer = rerenderRef.current
    if (relazioneState || !relazioneState) {
      renderer.resume()
    }
    setTimeout(() => {
      renderer.pause()
    }, 30000)
  }, [relazioneState])

  const [nodeScreenSet, setNodeScreenSet] = useState(null)

  function filterGraphRelation(filterRelazione) {
    const graph = graphRef.current
    if (graph) {
      // Calculate the new output that should go to screen
      const attoriScreenSet = new Set()
      const eventiScreenSet = new Set()
      const linksScreenSet = new Set()

      Object.keys(eventiWithAttori).forEach((evento) => {
        const attori = eventiWithAttori[evento]
        let added = false
        attori.forEach((attore) => {
          const nomeAttore = attore.Attore
          if (attore.Relazione === filterRelazione || !filterRelazione) {
            attoriScreenSet.add(nomeAttore)
            linksScreenSet.add(evento + '👉 ' + nomeAttore)
            added = true
          }
        })
        if (added) {
          eventiScreenSet.add(evento)
        }
      })

      // Calcute the set of diffs to avoid useless screens operations
      const addAttoriSet = new Set(attoriScreenSet)
      const removeAttoriSet = new Set()

      const addEventiSet = new Set(eventiScreenSet)
      const removeEventiSet = new Set()

      const addLinksSet = new Set(linksScreenSet)
      const removeLinksSet = new Set(linksScreenSet)

      graph.forEachNode((node) => {
        if (node.data.__glType === 'attore') {
          if (attoriScreenSet.has(node.id)) {
            addAttoriSet.delete(node.id)
          } else {
            removeAttoriSet.add(node.id)
          }
        } else if (node.data.__glType === 'evento') {
          if (eventiScreenSet.has(node.id)) {
            addEventiSet.delete(node.id)
          } else {
            removeEventiSet.add(node.id)
          }
        }
        node.links.forEach((link) => {
          if (linksScreenSet.has(link.id)) {
            addLinksSet.delete(link.id)
          } else {
            removeLinksSet.add(link)
          }
        })
      })

      // Apply the diff on WebGel screen
      removeLinksSet.forEach((link) => {
        graph.removeLink(link)
      })
      removeEventiSet.forEach((evento) => {
        graph.removeNode(evento)
      })
      removeAttoriSet.forEach((attore) => {
        graph.removeNode(attore)
      })
      attoriScreenSet.forEach((attore) => {
        graph.addNode(attore, { __glType: 'attore' })
      })
      eventiScreenSet.forEach((evento) => {
        graph.addNode(evento, { __glType: 'evento' })
      })
      addLinksSet.forEach((linkId) => {
        const [evento, attore] = linkId.split('👉 ')
        graph.addLink(evento, attore)
      })

      const graphics = rerenderRef.current.getGraphics()

      attoriScreenSet.forEach((attore) => {
        const nodeUI = graphics.getNodeUI(attore)
        const links = graph.getLinks(attore)
        const size = 10 + (links ?? []).length * 2
        nodeUI.size = size
      })

      // Hide display
      document.querySelectorAll('.node-label').forEach((label) => {
        label.style.display = 'none'
      })
      eventiScreenSet.forEach((evento) => {
        const nodeUI = graphics.getNodeUI(evento)
        const size = 10 + (nodeUI.node.links ?? []).length * 2
        nodeUI.size = size
        const label = document.getElementById(
          `ma-graph-label-${nodeUI.node.id}`
        )
        if (label) {
          label.style.display = 'initial'
        }
      })
      if (filterRelazione) {
        const onScreenSet = new Set(
          Array.from(eventiScreenSet).concat(Array.from(attoriScreenSet))
        )
        setNodeScreenSet(onScreenSet)
      } else {
        setNodeScreenSet(null)
      }
      rerenderRef.current.rerender()
    }
  }

  const [search, setSearch] = useState('')

  const searchResults = useMemo(() => {
    let results = []
    if (search === '') {
      return results
    }
    eventi
      .filter((evento) => {
        return evento.Evento.toLowerCase().indexOf(search) !== -1
      })
      .forEach((evento) =>
        results.push({
          title: evento.Evento,
          type: 'evento',
        })
      )
    attori
      .filter((attore) => {
        return attore.Attore.toLowerCase().indexOf(search) !== -1
      })
      .forEach((evento) =>
        results.push({
          title: evento.Attore,
          type: 'attore',
        })
      )
    if (nodeScreenSet !== null) {
      results = results.filter((r) => nodeScreenSet.has(r.title))
    }
    return orderBy(results.slice(0, 100), 'title')
  }, [nodeScreenSet, search])

  const [selectedItem, setSelectedItem] = useState(null)

  function enterItem(item, type) {
    const renderer = rerenderRef.current
    const nodeId = type === 'attore' ? item.Attore : item.Evento
    const nodeUI = renderer.getGraphics().getNodeUI(nodeId)
    if (nodeUI) {
      renderer.moveTo(nodeUI.position.x, nodeUI.position.y)
      let zoom = renderer.getTransform().scale
      const toZoom = 3
      while (zoom < toZoom) {
        zoom = renderer.zoomIn()
      }
      setLightNode(nodeId)
    }
    // Yazzy!
    setTimeout(() => {
      renderer.pause()
    }, 400)
  }

  const [lightNode, setLightNode] = useState(null)
  useEffect(() => {
    const label = document.getElementById(`ma-graph-label-${lightNode}`)
    if (label) {
      label.classList.add('ligh-selected-label-graph')
      return () => {
        label.classList.remove('ligh-selected-label-graph')
      }
    }
  }, [lightNode])

  const selectedRelations = useMemo(() => {
    if (!selectedItem) {
      return null
    }
    const relations =
      selectedItem.type === 'attore'
        ? attoriWithEventi[selectedItem.title]
        : eventiWithAttori[selectedItem.title]
    if (relazioneState) {
      return relations.filter((relation) => {
        return relation.Relazione === relazioneState
      })
    }
    return relations
  }, [relazioneState, selectedItem])

  const onItemSelectFromSearch = useCallback((item) => {
    const renderer = rerenderRef.current
    const nodeUI = renderer.getGraphics().getNodeUI(item.title)
    if (nodeUI) {
      renderer.moveTo(nodeUI.position.x, nodeUI.position.y)
      let zoom = renderer.getTransform().scale
      const toZoom = 3
      while (zoom < toZoom) {
        zoom = renderer.zoomIn()
      }
      // setLightNode(item.title)
    }
    // Yazzy!
    setTimeout(() => {
      renderer.pause()
    }, 200)
    setSelectedItem(item)
  }, [])

  return (
    <div style={{ overflow: 'hidden' }}>
      <MenuTop />
      <div className="d-flex">
        <div
          style={{
            background: 'black',
            width: '21.7%',
            minWidth: '275px',
            zIndex: 1000,
            borderRight: '1px solid #555555',
            overflow: 'auto',
            height: 'calc(100vh - var(--topbar-height))',
          }}
          className="position-relative"
        >
          {selectedItem && (
            <div
              onClick={() => {
                const renderer = rerenderRef.current
                setSelectedItem(null)
                setLightNode(null)
                renderer.resume()
              }}
              style={{ top: 5, right: 5 }}
              className="position-absolute pointer"
            >
              <X color="white" size={30} />
            </div>
          )}
          <div className="ml-4 mr-4" style={{ marginTop: 30, minHeight:500, }}>
            {!selectedItem && (
              <SearchResults
                search={search}
                onTextChange={setSearch}
                searchResults={searchResults}
                onSelect={onItemSelectFromSearch}
              />
            )}
            {selectedItem && (
              <SelectedCard
                onSelected={enterItem}
                selectedNode={lightNode}
                item={selectedItem}
                relations={selectedRelations}
              />
            )}

            {searchResults.length === 0 && !selectedItem && (
              <div style={{ marginTop: 100 }}>
                <u>Filter by relation</u>
                <div>
                  {Object.keys(relazioniCount).sort().map((relazione) => (
                    <div
                      onClick={() =>
                        relazione === relazioneState
                          ? filterRelazione(null)
                          : filterRelazione(relazione)
                      }
                      key={relazione}
                      className={classNames(
                        'mt-2 d-flex justify-content-between pointer',
                        {
                          'text-secondary':
                            relazioneState && relazioneState !== relazione,
                        }
                      )}
                    >
                      <div>{relazione}</div>
                      <div>{relazioniCount[relazione]}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div
            className="mt-5 ml-4 pointer"
            style={{ opacity: dataType === 'api' ? 1 : 0.5}}
            onClick={() => {
              setDataType('api')
              setRelazione(null)
            }}
          >
            Show Incommon network
          </div>
          <div
            className="mt-2 ml-4 mb-4 pointer"
            style={{ opacity: dataType === 'normal' ? 1 : 0.5}}
            onClick={() => {
              setDataType('normal')
              setRelazione(null)
            }}
          >
            Show theatrographic network
          </div>
        </div>
        <ZoomControls
          onZoomIn={() => {
            const renderer = rerenderRef.current
            renderer.zoomIn()
          }}
          onZoomReset={() => {
            const renderer = rerenderRef.current
            let zoom = renderer.getTransform().scale
            const toZoom = 1
            if (zoom > toZoom) {
              while (zoom > toZoom) {
                zoom = renderer.zoomOut()
              }
            } else if (zoom < toZoom) {
              while (zoom < toZoom) {
                zoom = renderer.zoomIn()
              }
            }
          }}
          onZoomOut={() => {
            const renderer = rerenderRef.current
            renderer.zoomOut()
          }}
        />
        <div
          ref={graphDomRef}

          style={{
            position: 'relative',
            height: 'calc(100vh - var(--topbar-height))',
            flex: 1,
            // background: 'purple',
          }}
        ></div>
      </div>
    </div>
  )
}
