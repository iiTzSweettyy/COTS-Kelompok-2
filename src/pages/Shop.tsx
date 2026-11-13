import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { categoryList, products, type Category } from '../data/products'

type Filter = Category | 'all'

const filters: { slug: Filter; label: string }[] = [
  { slug: 'all', label: 'All' },
  ...categoryList,
]

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const active = (params.get('category') ?? 'all') as Filter
  const query = (params.get('q') ?? '').trim()

  const visible = useMemo(() => {
    const needle = query.toLowerCase()
    return products.filter((product) => {
      const matchesCategory = active === 'all' || product.category === active
      const matchesQuery =
        !needle ||
        product.name.toLowerCase().includes(needle) ||
        product.blurb.toLowerCase().includes(needle) ||
        product.category.includes(needle)
      return matchesCategory && matchesQuery
    })
  }, [active, query])

  function setFilter(slug: Filter) {
    const next = new URLSearchParams(params)
    if (slug === 'all') next.delete('category')
    else next.set('category', slug)
    setParams(next, { replace: true })
  }

  function clearQuery() {
    const next = new URLSearchParams(params)
    next.delete('q')
    setParams(next, { replace: true })
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <p className="text-[11px] font-medium tracking-[0.35em] text-earth uppercase">
        The Collection
      </p>
      <h1 className="mt-3 font-heading text-4xl text-ink sm:text-5xl">
        Shop VOGIA
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
        Small-batch pieces in silk, linen, wool and leather — made to be worn
        for years, not seasons.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-5">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {filters.map((filter) => (
            <button
              key={filter.slug}
              type="button"
              onClick={() => setFilter(filter.slug)}
              aria-pressed={active === filter.slug}
              className={`rounded-full border px-5 py-2 text-xs font-medium tracking-wide transition ${
                active === filter.slug
                  ? 'border-ink bg-ink text-white'
                  : 'border-line bg-white text-ink-soft hover:border-ink'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <p className="text-xs text-muted" role="status">
          {query ? (
            <>
              {visible.length} result{visible.length === 1 ? '' : 's'} for
              &ldquo;{query}&rdquo;{' '}
              <button
                type="button"
                onClick={clearQuery}
                className="text-ink underline underline-offset-2 hover:no-underline"
              >
                clear
              </button>
            </>
          ) : (
            <>
              {visible.length} piece{visible.length === 1 ? '' : 's'}
            </>
          )}
        </p>
      </div>

      {visible.length > 0 ? (
        <div className="mt-8 grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-16 rounded-3xl border border-dashed border-line bg-sand px-6 py-16 text-center">
          <p className="font-heading text-2xl text-ink">Nothing here yet</p>
          <p className="mx-auto mt-2 max-w-sm text-sm text-muted">
            We couldn&rsquo;t find a piece matching your search. Try another
            word, or browse the full collection.
          </p>
          <button
            type="button"
            onClick={() => setParams(new URLSearchParams(), { replace: true })}
            className="mt-6 rounded-full bg-ink px-7 py-3 text-sm font-medium text-white transition hover:bg-ink-soft"
          >
            Browse all products
          </button>
        </div>
      )}

      <p className="mt-16 border-t border-line pt-6 text-center text-xs text-muted">
        Can&rsquo;t find your size?{' '}
        <Link to="/#join" className="text-ink underline underline-offset-2">
          Join the Inner Circle
        </Link>{' '}
        for restock alerts.
      </p>
    </div>
  )
}
