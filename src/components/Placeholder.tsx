import { useId } from 'react'

export type PlaceholderKind =
  | 'hero'
  | 'artisan'
  | 'membership'
  | 'product'
  | 'menswear'
  | 'accessories'
  | 'womenswear'

const palettes: Record<
  PlaceholderKind,
  { from: string; to: string; ink: string }
> = {
  hero: { from: '#efeae2', to: '#d6cfc3', ink: '#8a7a66' },
  artisan: { from: '#ddd2c1', to: '#b2a087', ink: '#6b5b47' },
  membership: { from: '#e9e5de', to: '#c6bfb2', ink: '#7a7161' },
  product: { from: '#f3f2ef', to: '#dedcd6', ink: '#9a958c' },
  menswear: { from: '#dedbd5', to: '#a8a39a', ink: '#5f5b54' },
  accessories: { from: '#e9dfd2', to: '#c3ab8e', ink: '#7c6647' },
  womenswear: { from: '#ebe4dc', to: '#cbb9a8', ink: '#8a7261' },
}

type PlaceholderProps = {
  kind?: PlaceholderKind
  label: string
  className?: string
  /** 0-3, shifts the gradient so gallery views look different */
  variant?: number
}

export default function Placeholder({
  kind = 'product',
  label,
  className = '',
  variant = 0,
}: PlaceholderProps) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, '')
  const { from, to, ink } = palettes[kind]
  const directions = [
    { x1: '0', y1: '0', x2: '1', y2: '1' },
    { x1: '1', y1: '0', x2: '0', y2: '1' },
    { x1: '0', y1: '1', x2: '1', y2: '0' },
    { x1: '1', y1: '1', x2: '0', y2: '0' },
  ]
  const dir = directions[variant % directions.length]

  return (
    <div className={`relative overflow-hidden bg-sand ${className}`}>
      <svg
        viewBox="0 0 400 500"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`g-${id}`} {...dir}>
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
          <pattern
            id={`p-${id}`}
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M28 0H0v28"
              fill="none"
              stroke={ink}
              strokeOpacity="0.1"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="400" height="500" fill={`url(#g-${id})`} />
        <rect width="400" height="500" fill={`url(#p-${id})`} />
        <circle
          cx={variant % 2 === 0 ? 300 : 100}
          cy="140"
          r="110"
          fill="#ffffff"
          fillOpacity="0.22"
        />
        <circle
          cx={variant % 2 === 0 ? 90 : 320}
          cy="390"
          r="140"
          fill="#ffffff"
          fillOpacity="0.14"
        />
        <path
          d="M40 430 Q200 330 360 430"
          fill="none"
          stroke={ink}
          strokeOpacity="0.25"
          strokeWidth="1.5"
        />
        <text
          x="200"
          y="255"
          textAnchor="middle"
          fill={ink}
          fillOpacity="0.85"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="15"
          letterSpacing="4"
        >
          {label.toUpperCase()}
        </text>
      </svg>
    </div>
  )
}
