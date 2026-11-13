import { Link } from 'react-router-dom'
import Placeholder, { type PlaceholderKind } from '../Placeholder'
import { ArrowRight } from '../icons'
import { collectionCards } from '../../data/products'

const art: Record<string, PlaceholderKind> = {
  menswear: 'menswear',
  accessories: 'accessories',
  womenswear: 'womenswear',
}

export default function Collections() {
  return (
    <section id="collections" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-medium tracking-[0.35em] text-earth uppercase">
            Explore
          </p>
          <h2 className="mt-3 font-heading text-3xl text-ink sm:text-4xl">
            Our Collections
          </h2>
        </div>
        <Link
          to="/shop"
          className="group inline-flex items-center gap-2 text-sm text-ink transition hover:gap-3"
        >
          Browse everything
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {collectionCards.map((card) => (
          <Link
            key={card.slug}
            to={`/shop?category=${card.slug}`}
            className="group relative aspect-4/5 overflow-hidden rounded-3xl border border-line"
          >
            <Placeholder
              kind={art[card.slug]}
              label={card.label}
              className="absolute inset-0 h-full w-full transition duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
              aria-hidden="true"
            />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="font-heading text-2xl text-white">{card.label}</h3>
              <p className="mt-1 text-sm text-white/75">{card.subtitle}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] text-white uppercase">
                Shop now
                <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
