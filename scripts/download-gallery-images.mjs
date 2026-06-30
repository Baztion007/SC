// Download up to 8 images per gallery for the portfolio gallery viewer.
// Extracts unique image URLs from each postimg.cc gallery page and downloads them.
import fs from 'fs'
import path from 'path'
import https from 'https'

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
const OUT_DIR = '/home/z/my-project/public/images/projects'

function extractImageUrls(html) {
  // Match unique i.postimg.cc image URLs (deduplicate by the code part)
  const seen = new Set()
  const urls = []
  const matches = [...html.matchAll(/https:\/\/i\.postimg\.cc\/([A-Za-z0-9]+)\/([^"'?\s]+\.(?:jpg|jpeg|png|webp))/gi)]
  for (const m of matches) {
    const code = m[1]
    const filename = m[2]
    // Skip thumbnails (postimg uses same URL for thumb + full, but with ?format= param)
    // We want the full-size version (no query string)
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
        // Follow redirect
        download(res.headers.location, outPath).then(resolve)
        return
      }
      res.pipe(file)
      file.on('finish', () => { file.close(); resolve(true) })
      file.on('error', () => { fs.unlinkSync(outPath); resolve(false) })
    }).on('error', () => { fs.unlinkSync(outPath, () => {}); resolve(false) })
  })
}

const galleryData = {}

for (const { slug, file } of GALLERIES) {
  if (!fs.existsSync(file)) {
    console.log(`${slug}: gallery page missing`)
    continue
  }
  const html = fs.readFileSync(file, 'utf8')
  const urls = extractImageUrls(html)
  const top = urls.slice(0, MAX_IMAGES)

  console.log(`${slug}: ${urls.length} unique images, downloading ${top.length}`)

  const dir = path.join(OUT_DIR, slug)
  fs.mkdirSync(dir, { recursive: true })

  const downloadedPaths = []

  for (let i = 0; i < top.length; i++) {
    const { url, filename } = top[i]
    const ext = path.extname(filename).toLowerCase()
    const outPath = path.join(dir, `${i + 1}${ext}`)

    if (fs.existsSync(outPath) && fs.statSync(outPath).size > 0) {
      downloadedPaths.push(`${i + 1}${ext}`)
      continue
    }

    const ok = await download(url, outPath)
    if (ok && fs.existsSync(outPath) && fs.statSync(outPath).size > 0) {
      downloadedPaths.push(`${i + 1}${ext}`)
    } else {
      console.log(`  FAILED: ${url}`)
    }
  }

  galleryData[slug] = downloadedPaths.map(f => `/images/projects/${slug}/${f}`)
  console.log(`  Downloaded ${downloadedPaths.length} images`)
}

// Save the gallery data for use in content.ts
fs.writeFileSync('/tmp/gallery-data.json', JSON.stringify(galleryData, null, 2))
console.log('\n=== Gallery data saved to /tmp/gallery-data.json ===')
console.log(JSON.stringify(galleryData, null, 2))
