import { Link } from 'react-router-dom'
import Placeholder from './Placeholder'
import type { Product } from '../data/products'

export default function ProductCard({ product }: { product: Product }) {
  const soldOut = product.tag === 'Sold Out'

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="relative aspect-3/4 overflow-hidden rounded-2xl border border-line">
        <Placeholder
          kind="product"
          label={product.name}
          className={`h-full w-full transition duration-500 ${
            soldOut ? 'opacity-80' : 'group-hover:scale-105'
          }`}
        />
        {product.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-[10px] font-semibold tracking-[0.14em] text-ink uppercase">
            {product.tag}
          </span>
        )}
        {soldOut && (
          <div className="absolute inset-0 bg-white/45" aria-hidden="true" />
        )}
        <span className="absolute inset-x-3 bottom-3 translate-y-3 rounded-full bg-ink/90 py-2.5 text-center text-[11px] font-medium tracking-[0.16em] text-white uppercase opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {soldOut ? 'Notify me' : 'View piece'}
        </span>
      </div>

      <div className="mt-3 flex items-baseline justify-between gap-3">
        <h3 className="font-heading text-base text-ink">{product.name}</h3>
        <p className="shrink-0 text-sm text-ink">
          ${product.price}
          {product.oldPrice && (
            <span className="ml-2 text-xs text-muted line-through">
              ${product.oldPrice}
            </span>
          )}
        </p>
      </div>
      <p className="mt-0.5 truncate text-xs text-muted">{product.blurb}</p>
    </Link>
  )
}
