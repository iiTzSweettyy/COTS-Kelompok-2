import { Link } from 'react-router-dom'
import ProductCard from '../ProductCard'
import { featuredProducts } from '../../data/products'

export default function FeaturedPieces() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-2xl">
        <p className="text-[11px] font-medium tracking-[0.35em] text-earth uppercase">
          Curated for You
        </p>
        <h2 className="mt-3 font-heading text-3xl text-ink sm:text-4xl">
          Featured Pieces
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
          Four pieces our stylists reach for first — from liquid silk to
          vegetable-tanned leather.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          to="/shop"
          className="rounded-full border border-ink px-8 py-3.5 text-sm font-medium text-ink transition hover:bg-ink hover:text-white"
        >
          View All Products
        </Link>
      </div>
    </section>
  )
}
