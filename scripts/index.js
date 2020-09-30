const NodeGeocoder = require('node-geocoder')
const { geocodeCitiesWithRetry } = require('./geocoding')
const compact = require('lodash/compact')
const fs = require('fs')
const path = require('path')
const { uniqBy, uniq } = require('lodash')

function readJson(fileName){
    const text = fs.readFileSync(fileName,'utf8')
    return JSON.parse(text)
}

function writeJson(fileName, data){
    fs.writeFileSync(fileName,JSON.stringify(data))
}

async function parser() {
  const geocoder = NodeGeocoder({
    provider: "openstreetmap",
    // provider: 'google',
    // apiKey: 'AIzaSyD7Chzl4Tw8wRHEymRtvzgzHx8B4yE7Zb4',
  })

  const dataSet = readJson(path.join(__dirname,'/network-luoghi.json'))

  const cities = uniq(compact(uniqBy(dataSet,'città_CORRETTA').map(d => d['città_CORRETTA'])))
  //const cityGeocoded = await geocodeCitiesWithRetry(geocoder, ['Bergamo'])

  const newDataset = cities.map(data => {
      return (
      {
          [data]: { cords: []}

          //cords: cityGeocoded[data['città_CORRETTA']].value
      }
  )})

  writeJson(path.join(__dirname,'/luoghi.json'), newDataset)
}

parser()