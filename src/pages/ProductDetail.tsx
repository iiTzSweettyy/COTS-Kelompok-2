import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Placeholder from '../components/Placeholder'
import ProductCard from '../components/ProductCard'
import { ArrowLeft, Check, Minus, Plus } from '../components/icons'
import { categoryList, products } from '../data/products'
import { useCart } from '../store/cart-context'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((entry) => entry.slug === slug)
  const { add } = useCart()

  const [view, setView] = useState(0)
  const [color, setColor] = useState(product?.colors[0]?.name ?? '')
  const [size, setSize] = useState(product?.sizes[0] ?? '')
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  const related = useMemo(() => {
    if (!product) return []
    return products
      .filter(
        (entry) => entry.category === product.category && entry.id !== product.id,
      )
      .slice(0, 4)
  }, [product])

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <p className="font-heading text-3xl text-ink">Piece not found</p>
        <p className="mt-3 text-sm text-muted">
          This product may have sold out or the link is broken.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-white transition hover:bg-ink-soft"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Shop
        </Link>
      </div>
    )
  }

  const soldOut = product.tag === 'Sold Out'
  const categoryName =
    categoryList.find((entry) => entry.slug === product.category)?.label ??
    product.category

  function handleAdd() {
    if (soldOut) return
    add(
      {
        slug: product!.slug,
        name: product!.name,
        price: product!.price,
        size,
        color,
      },
      qty,
    )
    setAdded(true)
    window.setTimeout(() => setAdded(false), 2200)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <nav className="flex items-center gap-2 text-xs text-muted" aria-label="Breadcrumb">
        <Link to="/" className="transition hover:text-ink">
          Home
        </Link>
        <span aria-hidden="true">/</span>
        <Link to="/shop" className="transition hover:text-ink">
          Shop
        </Link>
        <span aria-hidden="true">/</span>
        <Link to={`/shop?category=${product.category}`} className="transition hover:text-ink">
          {categoryName}
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <Placeholder
            kind="product"
            label={product.name}
            variant={view}
            className="aspect-4/5 w-full rounded-3xl border border-line"
          />
          <div className="mt-4 grid grid-cols-4 gap-3">
            {[0, 1, 2, 3].map((index) => (
              <button
                key={index}
                type="button"
                onClick={() => setView(index)}
                aria-label={`View image ${index + 1}`}
                aria-pressed={view === index}
                className={`overflow-hidden rounded-xl border-2 transition ${
                  view === index ? 'border-ink' : 'border-transparent hover:border-line'
                }`}
              >
                <Placeholder
                  kind="product"
                  label={`0${index + 1}`}
                  variant={index}
                  className="aspect-square w-full"
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3">
            <p className="text-[11px] font-medium tracking-[0.25em] text-earth uppercase">
              {categoryName}
            </p>
            {product.tag && (
              <span className="rounded-full bg-gold px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.12em] text-ink uppercase">
                {product.tag}
              </span>
            )}
          </div>

          <h1 className="mt-3 font-heading text-3xl text-ink sm:text-4xl">
            {product.name}
          </h1>

          <p className="mt-4 flex items-baseline gap-3">
            <span className="text-2xl text-ink">${product.price}</span>
            {product.oldPrice && (
              <span className="text-base text-muted line-through">
                ${product.oldPrice}
              </span>
            )}
            {product.oldPrice && (
              <span className="text-xs font-medium text-earth">
                Save ${product.oldPrice - product.price}
              </span>
            )}
          </p>

          <p className="mt-5 text-sm leading-relaxed text-ink-soft sm:text-base">
            {product.description}
          </p>

          <ul className="mt-6 space-y-1.5">
            {product.details.map((detail) => (
              <li key={detail} className="flex items-start gap-2 text-xs text-muted sm:text-sm">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-forest" />
                {detail}
              </li>
            ))}
          </ul>

          <div className="mt-8 border-t border-line pt-6">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-ink uppercase">
                Colour
              </p>
              <p className="text-xs text-muted">{color}</p>
            </div>
            <div className="mt-3 flex gap-3">
              {product.colors.map((option) => (
                <button
                  key={option.name}
                  type="button"
                  onClick={() => setColor(option.name)}
                  aria-label={option.name}
                  aria-pressed={color === option.name}
                  title={option.name}
                  className={`h-8 w-8 rounded-full border-2 transition ${
                    color === option.name
                      ? 'border-ink ring-2 ring-ink/20'
                      : 'border-line hover:border-muted'
                  }`}
                  style={{ backgroundColor: option.hex }}
                />
              ))}
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-ink uppercase">
                Size
              </p>
              <p className="text-xs text-muted">Size guide</p>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.sizes.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setSize(option)}
                  aria-pressed={size === option}
                  className={`min-w-11 rounded-lg border px-3.5 py-2 text-xs font-medium transition ${
                    size === option
                      ? 'border-ink bg-ink text-white'
                      : 'border-line bg-white text-ink-soft hover:border-ink'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="flex h-12 items-center rounded-full border border-line">
              <button
                type="button"
                onClick={() => setQty((value) => Math.max(1, value - 1))}
                aria-label="Decrease quantity"
                className="flex h-12 w-11 items-center justify-center rounded-full text-ink transition hover:bg-sand"
              >
                <Minus />
              </button>
              <span className="w-8 text-center text-sm font-medium text-ink" aria-live="polite">
                {qty}
              </span>
              <button
                type="button"
                onClick={() => setQty((value) => Math.min(9, value + 1))}
                aria-label="Increase quantity"
                className="flex h-12 w-11 items-center justify-center rounded-full text-ink transition hover:bg-sand"
              >
                <Plus />
              </button>
            </div>

            <button
              type="button"
              onClick={handleAdd}
              disabled={soldOut}
              className={`h-12 flex-1 min-w-48 rounded-full px-8 text-sm font-medium transition ${
                soldOut
                  ? 'cursor-not-allowed bg-sand-dark text-muted'
                  : added
                    ? 'bg-forest text-white'
                    : 'bg-ink text-white hover:bg-ink-soft'
              }`}
            >
              {soldOut
                ? 'Sold Out — Notify Me'
                : added
                  ? 'Added to Bag ✓'
                  : `Add to Bag — $${product.price * qty}`}
            </button>
          </div>

          <div className="mt-6 rounded-2xl border border-line bg-sand px-5 py-4 text-xs leading-relaxed text-muted sm:text-sm">
            Free shipping on orders over $150 · 30-day returns · Arrives in
            recycled packaging within 3–5 business days.
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20 border-t border-line pt-12">
          <h2 className="font-heading text-2xl text-ink sm:text-3xl">
            You May Also Like
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
            {related.map((entry) => (
              <ProductCard key={entry.id} product={entry} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
