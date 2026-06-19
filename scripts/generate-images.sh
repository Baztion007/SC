#!/bin/bash
# Generate all images for Spruce Construction site - robust version
IMG_DIR="/home/z/my-project/public/images"
LOG="/home/z/my-project/image-gen.log"
echo "=== Starting image generation $(date) ===" > "$LOG"

generate() {
  local prompt="$1"
  local out="$2"
  local size="${3:-1344x768}"
  if [ -f "$out" ] && [ -s "$out" ]; then
    echo "[SKIP] exists: $out" >> "$LOG"
    return 0
  fi
  echo "[GEN] $out" >> "$LOG"
  if z-ai image -p "$prompt" -o "$out" -s "$size" >> "$LOG" 2>&1; then
    echo "[OK]  $out" >> "$LOG"
  else
    echo "[ERR] failed: $out" >> "$LOG"
  fi
}

# Hero (wide) - 1344x768 (1440x720 rejected by API; not multiple of 32)
generate "Architectural photograph of a stunning custom luxury home exterior at golden hour, warm sunlight on stone and wood facade, manicured landscaping, professional real estate photography, Virginia style, high quality, detailed" "$IMG_DIR/hero.jpg" "1344x768"

# Projects (landscape)
generate "Historic Tudor style home exterior, brick and stucco facade with half-timbering, mature trees, professional architecture photography, autumn afternoon light, high quality" "$IMG_DIR/projects/palmyra.jpg" "1344x768"
generate "Scandinavian modern new build home, white clapboard siding, black roof, large windows, minimalist landscaping, bright daylight, architectural photography, high quality" "$IMG_DIR/projects/cherokee.jpg" "1344x768"
generate "Elegant renovated traditional home interior, designer kitchen with white shaker cabinets, marble waterfall island, brass fixtures, hardwood floors, professional interior photography, high quality" "$IMG_DIR/projects/erlwood.jpg" "1344x768"
generate "Mid-century modern living room renovation, vaulted wood ceiling, large stone fireplace, floor to ceiling windows, iconic modern furniture, warm natural light, architectural digest style, high quality" "$IMG_DIR/projects/south.jpg" "1344x768"
generate "Designer showcase whole-home renovation, elegant dining room with coffered ceiling, wainscoting, crystal chandelier, custom built-ins, sophisticated neutral palette, professional interior photography, high quality" "$IMG_DIR/projects/york.jpg" "1344x768"
generate "Modern French Provincial home exterior, white painted brick, steep slate roof, dormer windows, symmetrical facade, manicured garden, soft morning light, architectural photography, high quality" "$IMG_DIR/projects/cragmont.jpg" "1344x768"
generate "Historic cottage whole-home renovation, charming white clapboard cottage with black shutters, stone path, cottage garden, warm afternoon light, professional photography, high quality" "$IMG_DIR/projects/lexington.jpg" "1344x768"
generate "Colonial style brick home renovation, classic Georgian symmetry, white columns, dormer windows, manicured lawn, golden hour, professional architecture photography, high quality" "$IMG_DIR/projects/custis.jpg" "1344x768"
generate "Classic traditional home living room renovation, neutral palette, custom built-in bookcases, marble fireplace, elegant moldings, refined furniture, magazine quality interior photography, high quality" "$IMG_DIR/projects/oxford.jpg" "1344x768"
generate "Historic Dutch Colonial home exterior renovation, gambrel roof, cedar shingle siding, dormer windows, brick chimney, mature trees, late afternoon light, architectural photography, high quality" "$IMG_DIR/projects/laburnum.jpg" "1344x768"
generate "Designer new build home exterior, modern farmhouse style, white board and batten siding, black metal roof, large picture windows, evening twilight with warm interior lights, architectural photography, high quality" "$IMG_DIR/projects/charles.jpg" "1344x768"
generate "Richmond traditional new build home exterior, red brick facade, white columns, gabled roof, southern colonial style, magnolia tree, soft morning light, architectural photography, high quality" "$IMG_DIR/projects/cragmont-circle.jpg" "1344x768"
generate "Traditional whole-home renovation kitchen, custom white cabinetry, large center island, farmhouse sink, subway tile, pendant lights, hardwood floors, professional interior photography, high quality" "$IMG_DIR/projects/carriage.jpg" "1344x768"
generate "Craftsman style home renovation exterior, tapered stone columns, deep porch, exposed rafters, cedar shingles, craftsman landscaping, golden hour, professional architecture photography, high quality" "$IMG_DIR/projects/laburnum-craftsman.jpg" "1344x768"

# Scenes
generate "Skilled craftsman carpenter working on custom home woodwork, hands using chisel on detailed trim, warm workshop lighting, shallow depth of field, documentary photography style, high quality, detailed" "$IMG_DIR/scenes/about-craftsman.jpg" "1344x768"
generate "Virginia countryside landscape, rolling hills, James River, golden hour, lush green trees, soft warm light, scenic photography, high quality" "$IMG_DIR/scenes/service-area.jpg" "1344x768"
generate "Elegant custom home community entrance, brick pillars with iron gates, tree lined street, manicured landscaping, warm afternoon light, real estate photography, high quality" "$IMG_DIR/scenes/boscobel.jpg" "1344x768"
generate "Architectural blueprint and tools on wooden desk, drafting pencils, measuring tape, house plans rolled up, warm natural light, top down flat lay, professional photography, high quality" "$IMG_DIR/scenes/process.jpg" "1344x768"
generate "Professional construction team group photo, diverse group of construction professionals in business casual attire, standing in front of custom home, natural daylight, professional corporate photography, high quality" "$IMG_DIR/scenes/team.jpg" "1344x768"

echo "=== DONE $(date) ===" >> "$LOG"
ls -la "$IMG_DIR" "$IMG_DIR/projects" "$IMG_DIR/scenes" >> "$LOG" 2>&1
