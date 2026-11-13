import { useState, type FormEvent } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Bag, Close, Menu, Search, User } from '../icons'
import { useCart } from '../../store/cart-context'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Our Story', to: '/#story' },
  { label: 'Collections', to: '/#collections' },
  { label: 'Join', to: '/#join' },
]

export default function Header() {
  const { count } = useCart()
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')

  function closePanels() {
    setMobileOpen(false)
    setSearchOpen(false)
  }

  function submitSearch(event: FormEvent) {
    event.preventDefault()
    const trimmed = query.trim()
    closePanels()
    navigate(trimmed ? `/shop?q=${encodeURIComponent(trimmed)}` : '/shop')
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link
          to="/"
          onClick={closePanels}
          className="font-heading text-xl tracking-[0.3em] text-ink sm:text-2xl"
          aria-label="VOGIA home"
        >
          VOGIA
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === '/'}
              onClick={closePanels}
              className={({ isActive }) =>
                `relative text-sm tracking-wide transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-ink after:transition-all after:duration-300 hover:after:w-full ${
                  isActive && link.to === '/shop'
                    ? 'text-ink after:w-full'
                    : 'text-muted hover:text-ink'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            onClick={() => {
              setSearchOpen((open) => !open)
              setMobileOpen(false)
            }}
            aria-label={searchOpen ? 'Close search' : 'Search'}
            aria-expanded={searchOpen}
            className="rounded-full p-2.5 text-ink transition hover:bg-sand"
          >
            {searchOpen ? <Close /> : <Search />}
          </button>

          <button
            type="button"
            aria-label="Account"
            className="hidden rounded-full p-2.5 text-ink transition hover:bg-sand sm:block"
          >
            <User />
          </button>

          <Link
            to="/shop"
            onClick={closePanels}
            aria-label={`Shopping bag, ${count} items`}
            className="relative rounded-full p-2.5 text-ink transition hover:bg-sand"
          >
            <Bag />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-semibold text-ink">
                {count}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={() => {
              setMobileOpen((open) => !open)
              setSearchOpen(false)
            }}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="rounded-full p-2.5 text-ink transition hover:bg-sand lg:hidden"
          >
            {mobileOpen ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <form
          onSubmit={submitSearch}
          className="border-t border-line bg-white px-4 py-3 sm:px-6 lg:px-8"
        >
          <div className="mx-auto flex max-w-7xl items-center gap-3">
            <Search className="h-4 w-4 shrink-0 text-muted" />
            <input
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search silk, linen, leather…"
              className="h-10 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-muted"
            />
            <button
              type="submit"
              className="rounded-full bg-ink px-5 py-2 text-xs font-medium tracking-wide text-white transition hover:bg-ink-soft"
            >
              Search
            </button>
          </div>
        </form>
      )}

      {mobileOpen && (
        <nav
          className="border-t border-line bg-white px-4 py-4 sm:px-6 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  onClick={closePanels}
                  className="block rounded-lg px-3 py-3 text-sm tracking-wide text-ink transition hover:bg-sand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <form onSubmit={submitSearch} className="mt-3 flex gap-2 px-3">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search products…"
              className="h-10 flex-1 rounded-full border border-line px-4 text-sm outline-none focus:border-ink"
            />
            <button
              type="submit"
              className="rounded-full bg-ink px-4 text-xs font-medium text-white"
            >
              Go
            </button>
          </form>
        </nav>
      )}
    </header>
  )
}
