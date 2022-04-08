import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const BASE_DIR = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../sparagmos'
)

async function main() {
  const images = JSON.parse(
    await fs.readFile(
      path.resolve(BASE_DIR, 'data/incommonImages.json'),
      'utf-8'
    )
  )

  const min = images.map((img) => ({
    content_provider: img.content_provider,
    localName: img.localName,
  }))

  fs.writeFile(
    path.resolve(BASE_DIR, 'data/incommonImagesMini.json'),
    JSON.stringify(min)
  )
}

main()
