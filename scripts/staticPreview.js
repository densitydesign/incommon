const request = require("superagent")
const sharp = require("sharp")
const path = require("path")
const mkdirp = require("mkdirp")
const rimraf = require("rimraf")
const fs = require("fs")

const PAGE_SIZE = 650
async function fetchDocs(page = 1) {
  const docs = await request
    .get(
      `https://archivio.in-common.org/api/documents?page=${page}&pagesize=${PAGE_SIZE}`
    )
    .then((r) => r.body)
  return docs
}

const VALID_RESIZE_EXTS = [".jpg", ".jpeg", ".png"]

const SIZES = {
  small: {
    height: 120,
  },
  medium: {
    height: 500,
  },
}

async function makeImagePreview(image, clean) {
  const ext = path.extname(image.image)
  // Invalid ext to resize
  if (!VALID_RESIZE_EXTS.includes(ext.toLowerCase())) {
    return
  }
  const fileName = path.basename(image.image)

  let doSizes
  if (clean) {
    doSizes = Object.keys(SIZES)
  } else {
    doSizes = Object.keys(SIZES).filter((size) => {
      const outFile = path.join(
        __dirname,
        `../public/preview/${size}/${fileName}`
      )
      return !fs.existsSync(outFile)
    })
  }

  // No need to download image
  if (doSizes.length === 0) {
    return
  }

  const imageBlob = await request
    .get(image.image)
    .responseType("blob")
    .then((r) => r.body)

  for (const size of doSizes) {
    await mkdirp(path.join(__dirname, `../public/preview/${size}`))
    const outFile = path.join(
      __dirname,
      `../public/preview/${size}/${fileName}`
    )
    try {
      await sharp(imageBlob).resize(SIZES[size]).toFile(outFile)
    } catch (e) {
      console.log(`Error in resizing ${image.image}, skipping.`)
      console.log(e)
    }
  }
}

async function resizeAllImages(clean) {
  // Remove previuous preview (when needed)
  if (clean) {
    rimraf.sync(path.join(__dirname, `../public/preview`))
  }

  let page = 1
  let fetchCount = 0
  let count = 0
  let resizedDocs = 0

  do {
    const data = await fetchDocs(page)
    const { results } = data
    count = data.count
    fetchCount += results.length

    for (const doc of results) {
      for (const image of doc.images) {
        await makeImagePreview(image, clean)
        console.log(`${image.image} resized!`)
      }
      console.log(`Doc resized: ${resizedDocs}/${count}`)
      resizedDocs++
    }
    page++
  } while (fetchCount < count)
}

const { program } = require("commander")

program.option("-c, --clean", "Clean previous preview")

program.parse(process.argv)

const options = program.opts()

resizeAllImages(!!options.clean).then(
  () => {
    console.log("Done!")
  },
  (e) => {
    console.log("Something went wrong")
    console.error(e)
  }
)
