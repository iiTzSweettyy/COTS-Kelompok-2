export type Category = 'womenswear' | 'menswear' | 'accessories'

export type Product = {
  id: string
  slug: string
  name: string
  price: number
  oldPrice?: number
  category: Category
  tag?: 'Sale' | 'Sold Out' | 'New'
  blurb: string
  description: string
  details: string[]
  colors: { name: string; hex: string }[]
  sizes: string[]
  featured?: boolean
}

export const categoryList: { slug: Category; label: string }[] = [
  { slug: 'womenswear', label: 'Womenswear' },
  { slug: 'menswear', label: 'Menswear' },
  { slug: 'accessories', label: 'Accessories' },
]

export const products: Product[] = [
  {
    id: 'p1',
    slug: 'silk-maxi-dress',
    name: 'Silk Maxi Dress',
    price: 189,
    oldPrice: 240,
    category: 'womenswear',
    tag: 'Sale',
    featured: true,
    blurb: 'Bias-cut mulberry silk that moves like water.',
    description:
      'A fluid column of mulberry silk cut on the bias so it skims rather than clings. The softly draped neckline and French seams make it a piece you will reach for season after season.',
    details: [
      '100% mulberry silk, 19 momme',
      'Bias cut with French seams',
      'Dry clean only',
      'Made in Porto, Portugal',
    ],
    colors: [
      { name: 'Ivory', hex: '#f5f0e6' },
      { name: 'Champagne', hex: '#e6d5b8' },
      { name: 'Black', hex: '#1a1a1a' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 'p2',
    slug: 'leather-handbag',
    name: 'Leather Handbag',
    price: 320,
    category: 'accessories',
    featured: true,
    blurb: 'Vegetable-tanned leather that ages beautifully.',
    description:
      'Hand-cut from full-grain, vegetable-tanned leather and stitched by a single artisan from start to finish. The patina it develops over the years is the whole point.',
    details: [
      'Full-grain vegetable-tanned leather',
      'Solid brass hardware',
      'Cotton twill lining, one inner pocket',
      'Lifetime repairs included',
    ],
    colors: [
      { name: 'Tan', hex: '#b08968' },
      { name: 'Espresso', hex: '#4a3728' },
      { name: 'Black', hex: '#1a1a1a' },
    ],
    sizes: ['One Size'],
  },
  {
    id: 'p3',
    slug: 'cashmere-overcoat',
    name: 'Cashmere Overcoat',
    price: 480,
    category: 'menswear',
    tag: 'Sold Out',
    featured: true,
    blurb: 'Double-faced cashmere, unlined and featherlight.',
    description:
      'A relaxed, unlined overcoat in double-faced Mongolian cashmere. Warm without weight, structured without stiffness — the kind of coat that quietly improves every outfit underneath it.',
    details: [
      '100% Mongolian cashmere',
      'Double-faced, unlined construction',
      'Corozo nut buttons',
      'Special order — restocks in 4 weeks',
    ],
    colors: [
      { name: 'Camel', hex: '#c8a882' },
      { name: 'Charcoal', hex: '#3b3b3b' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'p4',
    slug: 'satin-midi-skirt',
    name: 'Satin Midi Skirt',
    price: 145,
    category: 'womenswear',
    featured: true,
    blurb: 'A liquid midi with a softly gathered waist.',
    description:
      'Cut from washed satin with a matte finish, this midi falls in a clean A-line from a softly gathered waistband. Dress it up with heels or down with a knitted tee.',
    details: [
      'Recycled satin with matte finish',
      'Elasticated back waistband',
      'Midi length, 82 cm',
      'Machine wash cold',
    ],
    colors: [
      { name: 'Pearl', hex: '#efe9e1' },
      { name: 'Sage', hex: '#a9b8a2' },
      { name: 'Ink', hex: '#232a35' },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 'p5',
    slug: 'linen-relaxed-shirt',
    name: 'Linen Relaxed Shirt',
    price: 120,
    category: 'menswear',
    tag: 'New',
    blurb: 'Garment-washed European linen, made for heat.',
    description:
      'A relaxed camp-collar shirt in garment-washed European linen. It arrives soft, breathes in humidity and only gets better with every wash.',
    details: [
      '100% European flax linen',
      'Garment washed for softness',
      'Camp collar, coconut buttons',
      'Machine washable',
    ],
    colors: [
      { name: 'Sand', hex: '#ded2bd' },
      { name: 'White', hex: '#f7f7f5' },
      { name: 'Olive', hex: '#6f7355' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'p6',
    slug: 'gold-hoop-earrings',
    name: 'Gold Hoop Earrings',
    price: 85,
    category: 'accessories',
    blurb: '18k gold-plated hoops with a hammered finish.',
    description:
      'Medium hoops with a hand-hammered texture that catches the light without shouting. Light enough for all-day wear, substantial enough to notice.',
    details: [
      '18k gold plated over recycled brass',
      'Hand-hammered texture',
      'Hypoallergenic post backing',
      'Diameter 32 mm',
    ],
    colors: [
      { name: 'Gold', hex: '#d4af37' },
      { name: 'Silver', hex: '#c9ccd1' },
    ],
    sizes: ['One Size'],
  },
  {
    id: 'p7',
    slug: 'tailored-wool-trouser',
    name: 'Tailored Wool Trouser',
    price: 210,
    category: 'menswear',
    blurb: 'A soft-shouldered trouser in Italian wool.',
    description:
      'A single-pleat trouser cut from lightweight Italian wool with a gentle taper. Half-lined to the knee so it drapes cleanly over any shoe.',
    details: [
      'Italian virgin wool, 260 g',
      'Single pleat, half-lined to knee',
      'Hook-and-bar closure',
      'Dry clean only',
    ],
    colors: [
      { name: 'Graphite', hex: '#4a4d52' },
      { name: 'Navy', hex: '#2b3445' },
      { name: 'Stone', hex: '#b8b0a2' },
    ],
    sizes: ['28', '30', '32', '34', '36'],
  },
  {
    id: 'p8',
    slug: 'woven-silk-scarf',
    name: 'Woven Silk Scarf',
    price: 95,
    oldPrice: 130,
    category: 'accessories',
    tag: 'Sale',
    blurb: 'Hand-rolled square in a muted archive print.',
    description:
      'A 90 cm square printed from our 1994 archive and finished with a hand-rolled hem. Wear it at the neck, in the hair, or tied to a bag handle.',
    details: [
      '100% silk twill',
      'Hand-rolled and hand-stitched hem',
      '90 × 90 cm',
      'Dry clean only',
    ],
    colors: [
      { name: 'Ochre', hex: '#c99a4b' },
      { name: 'Dove', hex: '#cfcac2' },
    ],
    sizes: ['One Size'],
  },
  {
    id: 'p9',
    slug: 'merino-knit-cardigan',
    name: 'Merino Knit Cardigan',
    price: 165,
    category: 'womenswear',
    tag: 'New',
    blurb: 'Fine-gauge merino with shell buttons.',
    description:
      'A fine-gauge merino cardigan with a neat ribbed trim and mother-of-pearl buttons. Wear it buttoned as a top or open over a slip dress.',
    details: [
      'Extra-fine merino wool',
      'Mother-of-pearl buttons',
      'Ribbed collar, cuffs and hem',
      'Hand wash cold, dry flat',
    ],
    colors: [
      { name: 'Cream', hex: '#efe8dc' },
      { name: 'Camel', hex: '#c6a883' },
      { name: 'Black', hex: '#1a1a1a' },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
  },
]

export const featuredProducts = products.filter((product) => product.featured)

export const collectionCards = [
  {
    slug: 'menswear' as Category,
    label: 'Menswear',
    subtitle: 'Tailored staples in natural fibres',
  },
  {
    slug: 'accessories' as Category,
    label: 'Accessories',
    subtitle: 'Leather, silk and small metal things',
  },
  {
    slug: 'womenswear' as Category,
    label: 'Womenswear',
    subtitle: 'Fluid silhouettes for every day',
  },
]
