import paleRiverPendant from '../assets/generated-jade/pale-river-pendant.png'
import inkGardenBangle from '../assets/generated-jade/ink-garden-bangle.png'
import mistSealRing from '../assets/generated-jade/mist-seal-ring.png'
import linenLightEarrings from '../assets/generated-jade/linen-light-earrings.png'
import cloudFieldNecklace from '../assets/generated-jade/cloud-field-necklace.png'
import stillWaterPendant from '../assets/generated-jade/still-water-pendant.png'

export const products = [
  {
    id: 'pale-river-pendant',
    title: 'Pale River Pendant',
    image: paleRiverPendant,
    category: 'Pendant',
    materialType: 'Jadeite',
    material: 'Natural jadeite',
    origin: 'Myanmar material, Los Angeles setting',
    treatment: 'No dye. No polymer.',
    status: 'Available for viewing',
    dimensions: '32 mm x 18 mm',
    note: 'Soft translucency with a quiet oval profile.',
    story:
      'A balanced everyday pendant selected for its gentle green body, low visual noise, and clean polish.',
    care:
      'Wipe with a soft dry cloth after wear. Avoid perfume, ultrasonic cleaners, and sudden temperature changes.',
    certificate: 'Treatment notes prepared for studio review.',
  },
  {
    id: 'ink-garden-bangle',
    title: 'Ink Garden Bangle',
    image: inkGardenBangle,
    category: 'Bangle',
    materialType: 'Nephrite',
    material: 'Hetian nephrite',
    origin: 'Xinjiang origin notes available',
    treatment: 'Untreated surface',
    status: 'Available for viewing',
    dimensions: 'Inner diameter 56 mm',
    note: 'A low-sheen piece selected for daily wear.',
    story:
      'A grounded bangle with deep green saturation and a calm surface, intended to feel steady rather than decorative.',
    care:
      'Store separately from metal jewelry. Clean with warm water and a lint-free cloth when needed.',
    certificate: 'Origin notes and condition images available before reservation.',
  },
  {
    id: 'mist-seal-ring',
    title: 'Mist Seal Ring',
    image: mistSealRing,
    category: 'Ring',
    materialType: 'Jadeite',
    material: 'Jadeite and 18k gold',
    origin: 'Private atelier setting',
    treatment: 'Independent lab review',
    status: 'Studio hold available',
    dimensions: 'Stone face 18 mm',
    note: 'A small sculptural ring with balanced saturation.',
    story:
      'A compact ring built around a soft mist-green stone, framed with restrained gold and a clean silhouette.',
    care:
      'Remove before handwashing, heavy work, or lotion. Keep the setting dry before storage.',
    certificate: 'Independent treatment review can be shared on request.',
  },
  {
    id: 'linen-light-earrings',
    title: 'Linen Light Earrings',
    image: linenLightEarrings,
    category: 'Earrings',
    materialType: 'Jadeite',
    material: 'Pale jadeite pair',
    origin: 'Studio matched',
    treatment: 'Treatment notes available',
    status: 'Available for viewing',
    dimensions: 'Drop length 42 mm',
    note: 'Muted pair designed for soft reflection.',
    story:
      'A matched pair with light movement and pale green translucency, photographed without heavy styling.',
    care:
      'Store flat in a soft pouch. Avoid moisture around hooks and joints.',
    certificate: 'Pair matching notes available before purchase conversation.',
  },
  {
    id: 'cloud-field-necklace',
    title: 'Cloud Field Necklace',
    image: cloudFieldNecklace,
    category: 'Necklace',
    materialType: 'Nephrite',
    material: 'Nephrite and silk cord',
    origin: 'Hand-finished cordwork',
    treatment: 'Untreated stone',
    status: 'Available for viewing',
    dimensions: 'Pendant height 35 mm',
    note: 'Soft white-green body with textile balance.',
    story:
      'A quiet corded piece that keeps the jade object close to textile craft and daily wear.',
    care:
      'Keep the silk cord dry. Let it air fully before returning it to storage.',
    certificate: 'Treatment and cordwork notes available in the viewing packet.',
  },
  {
    id: 'still-water-pendant',
    title: 'Still Water Pendant',
    image: stillWaterPendant,
    category: 'Pendant',
    materialType: 'Jadeite',
    material: 'Natural jadeite',
    origin: 'Collector release',
    treatment: 'Lab report pending',
    status: 'Documentation pending',
    dimensions: '36 mm x 21 mm',
    note: 'Reserved tone with a clean polished edge.',
    story:
      'A slightly deeper pendant with a calm edge profile, held until its documentation packet is complete.',
    care:
      'Handle over a soft surface and avoid impact against stone, tile, or metal trays.',
    certificate: 'Lab report pending; reservation remains inquiry-only until complete.',
  },
]

export function getProductById(id) {
  return products.find((product) => product.id === id)
}
