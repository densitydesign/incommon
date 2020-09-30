const zipObject = require('lodash/zipObject')
const reduce = require('lodash/reduce')

const geocodeCities = (geocoder, cities) => {
  return new Promise((resolve, reject) => {
    geocoder.batchGeocode(cities, (err, results) => {
      if (err) {
        return reject(err)
      }
      const citiesGeocoded = zipObject(cities, results)
      const cityAndResults = reduce(citiesGeocoded, (all, city, key) => {
        if (city.error) {
          return {
            ...all,
            failed: {
              ...all.failed,
              [key]: city
            }
          }
        }
        if (city.value.length > 0) {
          return {
            ...all,
            ok: {
              ...all.ok,
              [key]: city
            }
          }
        } else {
          return {
            ...all,
            noresults: {
              ...all.noresults,
              [key]: city
            }
          }
        }
      }, { ok: {}, failed: {}, noresults: {} })
      resolve(cityAndResults)
    })
  })
}

const sleep = time => new Promise(resolve => setTimeout(resolve, time))

module.exports.geocodeCitiesWithRetry = async (geocoder, cities, retryTimes = 10) => {
  let times = 0
  let all = {}
  let geoCities = [...cities]
  while (times < retryTimes) {
    const { ok, failed, noresults } = await geocodeCities(geocoder, geoCities)
    all = { ...all, ...ok, ...failed, ...noresults }
    const failedCount = Object.keys(failed).length
    if (failedCount > 0) {
      console.log(`Failed ${failedCount} geocoding just retry!`)
      geoCities = Object.keys(failed)
    } else {
      return all
    }
    times++
    await sleep(Math.min(times * 200, 1000))
  }
}
