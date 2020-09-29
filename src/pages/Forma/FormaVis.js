import React, { useEffect, useRef } from 'react'
import MenuTop from '../../components/MenuTop'
import { DataSet } from 'vis-data/esnext'
import { Network } from 'vis-network/esnext'
import 'vis-network/styles/vis-network.css'
import networkRawData from './network.json'
import groupBy from 'lodash/groupBy'

export default function Forma() {
  const graphRef = useRef()

  useEffect(() => {
    const options = {
      nodes: {
        shape: 'dot',
        scaling: {
          min: 1,
          max: 30,
          label: {
            min: 8,
            max: 30,
            drawThreshold: 12,
            maxVisible: 20,
          },
        },
        font: {
          color: 'white',
        },
      },
      layout: {
        improvedLayout: false,
      },
      edges: { smooth: { type: 'continuous' } },
      // physics: false,
      physics: { stabilization: false },
    }
    const edgesData = []
    const attoriMap = {}
    const eventiMap = {}

    const eventiWithAttori = groupBy(networkRawData, 'Evento')
    Object.keys(eventiWithAttori).forEach((evento) => {
      const attori = eventiWithAttori[evento]
      attori.forEach((attore) => {
        edgesData.push({
          from: attore.Attore,
          to: evento,
        })
        if (!eventiMap[evento]) {
          eventiMap[evento] = {
            id: evento,
            label: evento,
            value: 0,
          }
        }
        eventiMap[evento].value++

        if (!attoriMap[attore.Attore]) {
          attoriMap[attore.Attore] = {
            id: attore.Attore,
            label: attore.Attore,
            value: 0,
          }
        }
        attoriMap[attore.Attore].value++
      })
    })
    const nodesData = []
    Object.keys(eventiMap).forEach((k) => {
      nodesData.push(eventiMap[k])
    })
    Object.keys(attoriMap).forEach((k) => {
      nodesData.push(attoriMap[k])
    })
    // console.log(edges, nodes)

    const nodes = new DataSet(nodesData)
    const edges = new DataSet(edgesData)
    const data = {
      nodes,
      edges,
    }
    const network = new Network(graphRef.current, data, options)
  }, [])

  return (
    <div>
      <MenuTop />
      <div
        ref={graphRef}
        style={{
          height: 'calc(100vh - 58px)',
        }}
      ></div>
    </div>
  )
}
