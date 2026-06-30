// Update content.ts to add gallery arrays and gallery URLs to each project.
import fs from 'fs'

const contentPath = '/home/z/my-project/src/lib/content.ts'
let content = fs.readFileSync(contentPath, 'utf8')

const galleryData = JSON.parse(fs.readFileSync('/tmp/gallery-data.json', 'utf8'))

// Map of slugs to postimg.cc gallery URLs
const galleryUrls = {
  palmyra: 'https://postimg.cc/gallery/Vky7sG5',
  cherokee: 'https://postimg.cc/gallery/Hr1sysY',
  erlwood: 'https://postimg.cc/gallery/phmgC7G',
  south: 'https://postimg.cc/gallery/jnj8hkb',
  york: 'https://postimg.cc/gallery/pxHJK4b',
  cragmont: 'https://postimg.cc/gallery/jqfmRXM',
  lexington: 'https://postimg.cc/gallery/vdxJkFb',
  custis: 'https://postimg.cc/gallery/vyg9bkb',
  oxford: 'https://postimg.cc/gallery/rrswJTm',
  laburnum: 'https://postimg.cc/gallery/wR4rKkq',
  'laburnum-craftsman': 'https://postimg.cc/gallery/kMhvjjj',
  carriage: 'https://postimg.cc/gallery/wT1jFnG',
  charles: 'https://postimg.cc/gallery/fMNdfnG',
  'cragmont-circle': 'https://postimg.cc/gallery/25GssFg',
}

// For each slug, add gallery and galleryUrl after the image line
for (const [slug, images] of Object.entries(galleryData)) {
  const galleryUrl = galleryUrls[slug]
  const galleryStr = JSON.stringify(images)

  // Find the project block by its slug and add gallery + galleryUrl after the image line
  // Pattern: slug: 'slug-name', ... image: '/images/projects/slug-real.jpg',
  const imageLine = `image: '/images/projects/${slug}-real.jpg',`

  if (content.includes(imageLine)) {
    // Check if gallery already exists (skip if so)
    if (!content.includes(`gallery: ${galleryStr.substring(0, 40)}`)) {
      content = content.replace(
        imageLine,
        `${imageLine}\n    gallery: ${galleryStr},\n    galleryUrl: '${galleryUrl}',`
      )
      console.log(`Updated ${slug}: +${images.length} gallery images + galleryUrl`)
    } else {
      console.log(`Skipped ${slug}: gallery already exists`)
    }
  } else {
    console.log(`WARNING: ${slug} image line not found`)
  }
}

// Also add galleryUrl to the Project interface
if (!content.includes('galleryUrl?')) {
  content = content.replace(
    'gallery?: string[]',
    'gallery?: string[]\n  galleryUrl?: string'
  )
  console.log('Added galleryUrl to Project interface')
}

fs.writeFileSync(contentPath, content)
console.log('\nDone. content.ts updated.')
