// Re-download all portfolio gallery images from postimg.cc galleries,
// filtering to only keep images that are at least 400px wide (skip tiny thumbnails).
import fs from 'fs'
import path from 'path'
import https from 'https'
import sharp from 'sharp'

const GALLERIES = [
  { slug: 'palmyra', file: '/tmp/galleries/palmyra.html' },
  { slug: 'cherokee', file: '/tmp/galleries/cherokee.html' },
  { slug: 'erlwood', file: '/tmp/galleries/erlwood.html' },
  { slug: 'south', file: '/tmp/galleries/south.html' },
  { slug: 'york', file: '/tmp/galleries/york.html' },
  { slug: 'cragmont', file: '/tmp/galleries/cragmont.html' },
  { slug: 'lexington', file: '/tmp/galleries/lexington.html' },
  { slug: 'custis', file: '/tmp/galleries/custis.html' },
  { slug: 'oxford', file: '/tmp/galleries/oxford.html' },
  { slug: 'laburnum', file: '/tmp/galleries/laburnum.html' },
  { slug: 'laburnum-craftsman', file: '/tmp/galleries/laburnum-craftsman.html' },
  { slug: 'carriage', file: '/tmp/galleries/carriage.html' },
  { slug: 'charles', file: '/tmp/galleries/charles.html' },
  { slug: 'cragmont-circle', file: '/tmp/galleries/cragmont-circle.html' },
]

const MAX_IMAGES = 8
const MIN_WIDTH = 400
const OUT_DIR = '/home/z/my-project/public/images/projects'

function extractImageUrls(html) {
  const seen = new Set()
  const urls = []
  const matches = [...html.matchAll(/https:\/\/i\.postimg\.cc\/([A-Za-z0-9]+)\/([^"'?\s]+\.(?:jpg|jpeg|png|webp))/gi)]
  for (const m of matches) {
    const code = m[1]
    const filename = m[2]
    if (!seen.has(code)) {
      seen.add(code)
      urls.push({ code, filename, url: `https://i.postimg.cc/${code}/${filename}` })
    }
  }
  return urls
}

function download(url, outPath) {
  return new Promise((resolve) => {
    const file = fs.createWriteStream(outPath)
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        download(res.headers.location, outPath).then(resolve)
        return
      }
      res.pipe(file)
      file.on('finish', () => { file.close(); resolve(true) })
      file.on('error', () => { try { fs.unlinkSync(outPath) } catch {} resolve(false) })
    }).on('error', () => { try { fs.unlinkSync(outPath) } catch {} resolve(false) })
  })
}

async function getImageWidth(filePath) {
  try {
    const meta = await sharp(filePath).metadata()
    return meta.width || 0
  } catch {
    return 0
  }
}

const galleryData = {}

for (const { slug, file } of GALLERIES) {
  if (!fs.existsSync(file)) {
    console.log(`${slug}: gallery page missing, skipping`)
    continue
  }
  const html = fs.readFileSync(file, 'utf8')
  const urls = extractImageUrls(html)

  // Clear old gallery folder
  const dir = path.join(OUT_DIR, slug)
  fs.rmSync(dir, { recursive: true, force: true })
  fs.mkdirSync(dir, { recursive: true })

  const keptPaths = []
  let keptCount = 0

  for (const { url } of urls) {
    if (keptCount >= MAX_IMAGES) break
    const tmpPath = path.join(dir, `_tmp_${keptCount}.jpg`)
    const ok = await download(url, tmpPath)
    if (!ok || !fs.existsSync(tmpPath) || fs.statSync(tmpPath).size < 5000) {
      try { fs.unlinkSync(tmpPath) } catch {}
      continue
    }
    const width = await getImageWidth(tmpPath)
    if (width < MIN_WIDTH) {
      // Too small — skip this image
      try { fs.unlinkSync(tmpPath) } catch {}
      continue
    }
    // Keep it — rename to final name
    const finalPath = path.join(dir, `${keptCount + 1}.jpg`)
    fs.renameSync(tmpPath, finalPath)
    keptPaths.push(`/images/projects/${slug}/${keptCount + 1}.jpg`)
    keptCount++
  }

  galleryData[slug] = keptPaths
  console.log(`${slug}: kept ${keptCount} images (filtered from ${urls.length} URLs, min ${MIN_WIDTH}px wide)`)
}

fs.writeFileSync('/tmp/gallery-data-clean.json', JSON.stringify(galleryData, null, 2))
console.log('\n=== Clean gallery data saved ===')
