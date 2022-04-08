import request from 'superagent'
import rimraf from 'rimraf'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs/promises'
import PQueue from 'p-queue'

const PAGE_SIZE = 200
async function fetchDocs(page = 1) {
  const docs = await request
    .get(
      `https://archivio.in-common.org/api/documents?page=${page}&pagesize=${PAGE_SIZE}`
    )
    .then((r) => r.body)
  return docs
}

const BASE_DIR = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../sparagmos'
)

async function grabAllImagesData() {
  let page = 1
  let fetchCount = 0
  let count = 0
  let allImages = []

  // Grab images data
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
  return allImages
}

function sleep(n) {
  return new Promise(resolve => {
    setTimeout(resolve, n)
  })
}

const MAX_RETRY = 5
const SLEEP_RETRY = 1000
async function downloadImage(imageUrl, retry = 0) {
  console.log(`Downloading ${imageUrl}`)
  try {
    return await request
      .get(imageUrl)
      .responseType('blob')
      .then((r) => r.body)
  } catch (e) {
    if ((e.status >= 500 || e.code === 'ECONNRESET') && retry < MAX_RETRY) {
      console.log(`Retry ${imageUrl} for status ${e.status} in ${SLEEP_RETRY}ms ...`)
      await sleep(SLEEP_RETRY)
      return downloadImage(imageUrl, retry + 1)
    }
    console.log(`Error downloading image: ${imageUrl}`, e.status)
    throw e
  }
}

async function downloadAndSaveImage(imageUrl, fileName) {
  try {
    const imageBlob = await downloadImage(imageUrl)
    await fs.writeFile(path.resolve(BASE_DIR, `images/${fileName}`), imageBlob)
  } catch (e) {
    console.log(`Error while downloading and saving image: ${imageUrl}`, e)
  }
}

async function makeSparagmosData() {
  const allImages = await grabAllImagesData()
  // Cleanup folders
  rimraf.sync(path.resolve(BASE_DIR, 'images'))
  await fs.mkdir(path.resolve(BASE_DIR, 'images'))
  rimraf.sync(path.resolve(BASE_DIR, 'data'))
  await fs.mkdir(path.resolve(BASE_DIR, 'data'))

  // Run Download in parallel
  const queue = new PQueue({ concurrency: 5 })

  const n = allImages.length
  let done = 0
  queue.on('active', () => {
    console.log(`Start downloading ${++done}/${n}`)
  })
  // Grab images files!
  for (const image of allImages) {
    const imageUrl = image.preview
    const fileName = image.id.replace('/', '__')
    image.localName = fileName
    queue.add(() => downloadAndSaveImage(imageUrl, fileName))
  }
  await queue.onIdle()

  await fs.writeFile(
    path.resolve(BASE_DIR, 'data/incommonImages.json'),
    JSON.stringify(allImages, null, 2)
  )
}

makeSparagmosData().then(
  () => {
    console.log('Data For Sparagoms Done!!!')
  },
  (e) => {
    console.log('Something went wrong')
    console.error(e)
  }
)
