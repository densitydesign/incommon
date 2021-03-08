const request = require('superagent')
const sharp = require('sharp')
const path = require('path')
const mkdirp = require('mkdirp')
const rimraf = require('rimraf')

const PAGE_SIZE = 200
async function fetchDocs(page = 1) {
  const docs = await request
    .get(
      `https://archivio.in-common.org/api/documents?page=1&pagesize=${PAGE_SIZE}`
    )
    .then((r) => r.body)
  return docs
}

const VALID_RESIZE_EXTS = ['.jpg', '.jpeg', '.png']

const SIZES = {
  'small': {
    height: 100
  },
  'medium': {
    height: 400
  }
}

async function makeImagePreview(image) {
  const ext = path.extname(image.image)
  // Invalid ext to resize
  if (!VALID_RESIZE_EXTS.includes(ext.toLowerCase())) {
    return
  }

  const imageBlob = await request
    .get(image.image)
    .responseType('blob')
    .then((r) => r.body)

  const fileName = path.basename(image.image)

  for (const size of Object.keys(SIZES)) {
    await mkdirp(path.join(__dirname, `../public/preview/${size}`))
    const outFile = path.join(__dirname, `../public/preview/${size}/${fileName}`)
    await sharp(imageBlob).resize(SIZES[size]).toFile(outFile)
  }
  console.log(`${image.image} resized!`)
}

async function resizeAllImages() {
  // Remove previuous preview
  rimraf.sync(path.join(__dirname, `../public/preview`))

  let page = 1
  let fetchCount = 0
  let count = 0

  do {
    const data = await fetchDocs(page)
    const { results } = data
    count = data.count
    fetchCount += results.length

    for (const doc of results) {
      for (const image of doc.images) {
        await makeImagePreview(image)
      }
    }
    page++
  } while (fetchCount < count)
}

resizeAllImages().then(
  () => {
    console.log('Done!')
  },
  (e) => {
    console.log('Something went wrong')
    console.error(e)
  }
)
