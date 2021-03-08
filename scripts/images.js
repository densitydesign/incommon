const request = require('superagent')
const path = require('path')
const fs = require('fs').promises

const PAGE_SIZE = 200
async function fetchDocs(page = 1) {
  const docs = await request
    .get(
      `https://archivio.in-common.org/api/documents?page=${page}&pagesize=${PAGE_SIZE}`
    )
    .then((r) => r.body)
  return docs
}

async function grabAllImages() {
  let page = 1
  let fetchCount = 0
  let count = 0
  let allImages = []

  do {
    const data = await fetchDocs(page)
    const { results } = data
    count = data.count
    fetchCount += results.length

    results.forEach((doc) => {
      allImages.push(...doc.images)
    })
    page++
  } while (fetchCount < count)

  await fs.writeFile(
    path.join(__dirname, '../images.json'),
    JSON.stringify(allImages, null, 2)
  )
}

grabAllImages().then(
  () => {
    console.log('Done!')
  },
  (e) => {
    console.log('Something went wrong')
    console.error(e)
  }
)
