// Upscale and enhance all team photos to a consistent 500x625 (4:5) size.
// Uses sharp with Lanczos3 resampling for the best upscaling quality,
// then applies mild sharpening to recover detail lost in upscaling.
import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const TEAM_DIR = '/home/z/my-project/public/images/team'
const TARGET_WIDTH = 500
const TARGET_HEIGHT = 625 // 4:5 aspect ratio for the team grid

const files = fs.readdirSync(TEAM_DIR).filter(f => f.endsWith('.png') && f !== 'team-spruce.png')

console.log(`Processing ${files.length} team photos...`)

for (const file of files) {
  const input = path.join(TEAM_DIR, file)
  const output = path.join(TEAM_DIR, file.replace('.png', '.jpg'))

  try {
    const meta = await sharp(input).metadata()
    const origSize = `${meta.width}x${meta.height}`
    const needsUpscale = meta.width < TARGET_WIDTH

    await sharp(input)
      .resize(TARGET_WIDTH, TARGET_HEIGHT, {
        fit: 'cover',
        position: 'attention', // smart crop to focus on faces/important areas
        kernel: 'lanczos3', // best quality for upscaling
      })
      .sharpen({
        sigma: needsUpscale ? 1.2 : 0.6, // stronger sharpening for upscaled images
        m1: 1,
        m2: 2,
      })
      .jpeg({ quality: 90, mozjpeg: true })
      .toFile(output)

    // Remove the old PNG now that we have the JPG
    fs.unlinkSync(input)

    const newSize = fs.statSync(output).size
    console.log(`  ${file} -> ${path.basename(output)}: ${origSize} -> ${TARGET_WIDTH}x${TARGET_HEIGHT} (${needsUpscale ? 'upscaled' : 'resized'}, ${Math.round(newSize / 1024)}KB)`)
  } catch (err) {
    console.error(`  ${file}: FAILED - ${err.message}`)
  }
}

// Handle team-spruce.png separately (it's a group photo, different aspect)
const groupInput = path.join(TEAM_DIR, 'team-spruce.png')
if (fs.existsSync(groupInput)) {
  const groupOutput = path.join(TEAM_DIR, 'team-spruce.jpg')
  try {
    const meta = await sharp(groupInput).metadata()
    await sharp(groupInput)
      .resize(800, 600, { fit: 'cover', kernel: 'lanczos3' })
      .sharpen({ sigma: 0.8 })
      .jpeg({ quality: 90, mozjpeg: true })
      .toFile(groupOutput)
    fs.unlinkSync(groupInput)
    console.log(`  team-spruce.png -> team-spruce.jpg: ${meta.width}x${meta.height} -> 800x600`)
  } catch (err) {
    console.error(`  team-spruce: FAILED - ${err.message}`)
  }
}

console.log('\nDone. Final files:')
fs.readdirSync(TEAM_DIR).forEach(f => {
  const s = fs.statSync(path.join(TEAM_DIR, f))
  console.log(`  ${f}: ${Math.round(s.size / 1024)}KB`)
})
