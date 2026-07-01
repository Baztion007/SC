// Update each project's gallery to exclude the cover image (which is now /2.jpg).
// Gallery will be: 1.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg (7 unique images)
import fs from 'fs'

const contentPath = '/home/z/my-project/src/lib/content.ts'
let content = fs.readFileSync(contentPath, 'utf8')

const slugs = [
  'palmyra', 'cherokee', 'erlwood', 'south', 'york', 'cragmont', 'lexington',
  'custis', 'oxford', 'laburnum', 'laburnum-craftsman', 'carriage', 'charles', 'cragmont-circle'
]

for (const slug of slugs) {
  // New gallery: 1, 3, 4, 5, 6, 7, 8 (skip 2 since it's now the cover)
  const newGallery = [
    `/images/projects/${slug}/1.jpg`,
    `/images/projects/${slug}/3.jpg`,
    `/images/projects/${slug}/4.jpg`,
    `/images/projects/${slug}/5.jpg`,
    `/images/projects/${slug}/6.jpg`,
    `/images/projects/${slug}/7.jpg`,
    `/images/projects/${slug}/8.jpg`,
  ]

  // Build the gallery JSON string to match the format in content.ts
  const galleryStr = JSON.stringify(newGallery, null, 6).replace(/\n/g, '\n    ')

  // Replace the existing gallery array for this slug
  // Pattern: gallery: [ ... ], (multi-line)
  const galleryRegex = new RegExp(`(slug: '${slug}',[\\s\\S]*?image: '[^']*?',\\n    )gallery: \\[[\\s\\S]*?\\],`)
  const match = content.match(galleryRegex)
  if (match) {
    content = content.replace(galleryRegex, `$1gallery: ${galleryStr},`)
    console.log(`Updated ${slug}: 7 gallery images (1,3,4,5,6,7,8) — cover is now 2.jpg`)
  } else {
    console.log(`WARNING: could not find gallery for ${slug}`)
  }
}

fs.writeFileSync(contentPath, content)
console.log('\nDone.')
