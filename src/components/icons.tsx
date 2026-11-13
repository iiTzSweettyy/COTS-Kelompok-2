import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

export function Search({ className = 'h-5 w-5', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <circle cx="11" cy="11" r="7" {...stroke} />
      <path d="M20.5 20.5 16 16" {...stroke} />
    </svg>
  )
}

export function User({ className = 'h-5 w-5', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" {...stroke} />
      <circle cx="12" cy="7" r="4" {...stroke} />
    </svg>
  )
}

export function Bag({ className = 'h-5 w-5', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6Z" {...stroke} />
      <path d="M3 6h18" {...stroke} />
      <path d="M16 10a4 4 0 0 1-8 0" {...stroke} />
    </svg>
  )
}

export function Menu({ className = 'h-5 w-5', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" {...stroke} />
    </svg>
  )
}

export function Close({ className = 'h-5 w-5', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <path d="m6 6 12 12M18 6 6 18" {...stroke} />
    </svg>
  )
}

export function Play({ className = 'h-4 w-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor" />
    </svg>
  )
}

export function Check({ className = 'h-4 w-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <path d="m5 12.5 4.5 4.5L19 7" {...stroke} />
    </svg>
  )
}

export function ArrowRight({ className = 'h-4 w-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <path d="M4 12h16m-6-6 6 6-6 6" {...stroke} />
    </svg>
  )
}

export function ArrowLeft({ className = 'h-4 w-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <path d="M20 12H4m6-6-6 6 6 6" {...stroke} />
    </svg>
  )
}

export function Plus({ className = 'h-4 w-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <path d="M12 5v14M5 12h14" {...stroke} />
    </svg>
  )
}

export function Minus({ className = 'h-4 w-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <path d="M5 12h14" {...stroke} />
    </svg>
  )
}

export function Instagram({ className = 'h-4 w-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" {...stroke} />
      <circle cx="12" cy="12" r="4" {...stroke} />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function Facebook({ className = 'h-4 w-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <path
        d="M14 8.5V6.8c0-.8.5-1.3 1.4-1.3H17V2.6h-2.3c-2.3 0-3.7 1.5-3.7 3.8v2.1H9V11h2v10.4h3V11h2.2l.4-2.5H14Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  )
}

export function X({ className = 'h-4 w-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <path
        d="M3.5 3.5h4.2l4.1 5.6 4.7-5.6h3.2l-6.4 7.5 6.9 9.5h-4.2l-4.5-6.2-5.1 6.2H3.9l6.9-8.1L3.5 3.5Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  )
}

export function Youtube({ className = 'h-4 w-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" {...stroke} />
      <path d="m10.5 9.5 5 2.5-5 2.5v-5Z" fill="currentColor" stroke="none" />
    </svg>
  )
}
