// Parallel image generation script for Spruce Construction
// Generates images in batches of 4 using the z-ai-web-dev-sdk directly.
import ZAI from 'z-ai-web-dev-sdk'
import fs from 'fs'
import path from 'path'

const IMG_DIR = '/home/z/my-project/public/images'
const VALID_SIZE = '1344x768' // both 1344 and 768 are multiples of 32

const jobs = [
  { prompt: "Architectural photograph of a stunning custom luxury home exterior at golden hour, warm sunlight on stone and wood facade, manicured landscaping, professional real estate photography, Virginia style, high quality, detailed", out: `${IMG_DIR}/hero.jpg` },
  { prompt: "Historic Tudor style home exterior, brick and stucco facade with half-timbering, mature trees, professional architecture photography, autumn afternoon light, high quality", out: `${IMG_DIR}/projects/palmyra.jpg` },
  { prompt: "Scandinavian modern new build home, white clapboard siding, black roof, large windows, minimalist landscaping, bright daylight, architectural photography, high quality", out: `${IMG_DIR}/projects/cherokee.jpg` },
  { prompt: "Elegant renovated traditional home interior, designer kitchen with white shaker cabinets, marble waterfall island, brass fixtures, hardwood floors, professional interior photography, high quality", out: `${IMG_DIR}/projects/erlwood.jpg` },
  { prompt: "Mid-century modern living room renovation, vaulted wood ceiling, large stone fireplace, floor to ceiling windows, iconic modern furniture, warm natural light, architectural digest style, high quality", out: `${IMG_DIR}/projects/south.jpg` },
  { prompt: "Designer showcase whole-home renovation, elegant dining room with coffered ceiling, wainscoting, crystal chandelier, custom built-ins, sophisticated neutral palette, professional interior photography, high quality", out: `${IMG_DIR}/projects/york.jpg` },
  { prompt: "Modern French Provincial home exterior, white painted brick, steep slate roof, dormer windows, symmetrical facade, manicured garden, soft morning light, architectural photography, high quality", out: `${IMG_DIR}/projects/cragmont.jpg` },
  { prompt: "Historic cottage whole-home renovation, charming white clapboard cottage with black shutters, stone path, cottage garden, warm afternoon light, professional photography, high quality", out: `${IMG_DIR}/projects/lexington.jpg` },
  { prompt: "Colonial style brick home renovation, classic Georgian symmetry, white columns, dormer windows, manicured lawn, golden hour, professional architecture photography, high quality", out: `${IMG_DIR}/projects/custis.jpg` },
  { prompt: "Classic traditional home living room renovation, neutral palette, custom built-in bookcases, marble fireplace, elegant moldings, refined furniture, magazine quality interior photography, high quality", out: `${IMG_DIR}/projects/oxford.jpg` },
  { prompt: "Historic Dutch Colonial home exterior renovation, gambrel roof, cedar shingle siding, dormer windows, brick chimney, mature trees, late afternoon light, architectural photography, high quality", out: `${IMG_DIR}/projects/laburnum.jpg` },
  { prompt: "Designer new build home exterior, modern farmhouse style, white board and batten siding, black metal roof, large picture windows, evening twilight with warm interior lights, architectural photography, high quality", out: `${IMG_DIR}/projects/charles.jpg` },
  { prompt: "Richmond traditional new build home exterior, red brick facade, white columns, gabled roof, southern colonial style, magnolia tree, soft morning light, architectural photography, high quality", out: `${IMG_DIR}/projects/cragmont-circle.jpg` },
  { prompt: "Traditional whole-home renovation kitchen, custom white cabinetry, large center island, farmhouse sink, subway tile, pendant lights, hardwood floors, professional interior photography, high quality", out: `${IMG_DIR}/projects/carriage.jpg` },
  { prompt: "Craftsman style home renovation exterior, tapered stone columns, deep porch, exposed rafters, cedar shingles, craftsman landscaping, golden hour, professional architecture photography, high quality", out: `${IMG_DIR}/projects/laburnum-craftsman.jpg` },
  { prompt: "Skilled craftsman carpenter working on custom home woodwork, hands using chisel on detailed trim, warm workshop lighting, shallow depth of field, documentary photography style, high quality, detailed", out: `${IMG_DIR}/scenes/about-craftsman.jpg` },
  { prompt: "Virginia countryside landscape, rolling hills, James River, golden hour, lush green trees, soft warm light, scenic photography, high quality", out: `${IMG_DIR}/scenes/service-area.jpg` },
  { prompt: "Elegant custom home community entrance, brick pillars with iron gates, tree lined street, manicured landscaping, warm afternoon light, real estate photography, high quality", out: `${IMG_DIR}/scenes/boscobel.jpg` },
  { prompt: "Architectural blueprint and tools on wooden desk, drafting pencils, measuring tape, house plans rolled up, warm natural light, top down flat lay, professional photography, high quality", out: `${IMG_DIR}/scenes/process.jpg` },
  { prompt: "Professional construction team group photo, diverse group of construction professionals in business casual attire, standing in front of custom home, natural daylight, professional corporate photography, high quality", out: `${IMG_DIR}/scenes/team.jpg` },
]

async function generateOne(zai, job) {
  if (fs.existsSync(job.out) && fs.statSync(job.out).size > 0) {
    return { ...job, status: 'skip' }
  }
  // Retry with exponential backoff to handle 429s gracefully.
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      const res = await zai.images.generations.create({
        prompt: job.prompt,
        size: VALID_SIZE,
      })
      const b64 = res.data[0].base64
      fs.mkdirSync(path.dirname(job.out), { recursive: true })
      fs.writeFileSync(job.out, Buffer.from(b64, 'base64'))
      return { ...job, status: 'ok' }
    } catch (err) {
      const isRate = err.message && err.message.includes('429')
      if (!isRate || attempt === 4) {
        return { ...job, status: 'err', error: err.message }
      }
      // backoff: 5s, 12s, 25s
      const wait = 5000 * attempt * attempt
      console.log(`  [retry ${attempt}/4] ${path.basename(job.out)} after ${wait}ms`)
      await new Promise(r => setTimeout(r, wait))
    }
  }
  return { ...job, status: 'err', error: 'exhausted retries' }
}

async function main() {
  console.log(`[gen] starting ${jobs.length} images, batch size 2, size ${VALID_SIZE}`)
  const zai = await ZAI.create()

  const batchSize = 2
  const results = []
  for (let i = 0; i < jobs.length; i += batchSize) {
    const batch = jobs.slice(i, i + batchSize)
    console.log(`[gen] batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(jobs.length / batchSize)}: ${batch.map(b => path.basename(b.out)).join(', ')}`)
    const batchResults = await Promise.all(batch.map(j => generateOne(zai, j)))
    for (const r of batchResults) {
      console.log(`  [${r.status.toUpperCase()}] ${path.basename(r.out)}${r.error ? ' :: ' + r.error.slice(0, 120) : ''}`)
    }
    results.push(...batchResults)
    // small delay between batches to avoid 429s
    if (i + batchSize < jobs.length) {
      await new Promise(r => setTimeout(r, 2000))
    }
  }

  const ok = results.filter(r => r.status === 'ok').length
  const skip = results.filter(r => r.status === 'skip').length
  const err = results.filter(r => r.status === 'err').length
  console.log(`[gen] done. ok=${ok} skip=${skip} err=${err}`)
}

main().catch(e => {
  console.error('[gen] fatal:', e)
  process.exit(1)
})
