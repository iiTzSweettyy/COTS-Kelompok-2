import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, X, Youtube } from '../icons'

const columns = [
  {
    title: 'Shop',
    links: ['New Arrivals', 'Womenswear', 'Menswear', 'Accessories', 'Sale'],
  },
  {
    title: 'Company',
    links: ['Our Story', 'Craftsmanship', 'Sustainability', 'Careers'],
  },
  {
    title: 'Support',
    links: ['Shipping & Returns', 'Size Guide', 'Care Instructions', 'Contact'],
  },
  {
    title: 'Legal',
    links: ['Terms of Service', 'Privacy Policy', 'Cookie Settings'],
  },
]

const socials = [
  { label: 'Instagram', href: 'https://instagram.com', Icon: Instagram },
  { label: 'Facebook', href: 'https://facebook.com', Icon: Facebook },
  { label: 'X', href: 'https://x.com', Icon: X },
  { label: 'YouTube', href: 'https://youtube.com', Icon: Youtube },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function subscribe(event: FormEvent) {
    event.preventDefault()
    if (!email.trim()) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto max-w-7xl px-4 pt-14 pb-8 sm:px-6 lg:px-8">
        <div
          id="newsletter"
          className="flex flex-col gap-6 rounded-3xl border border-line bg-sand px-6 py-8 sm:px-10 lg:flex-row lg:items-center lg:justify-between"
        >
          <div>
            <h2 className="font-heading text-2xl text-ink">Stay in Touch</h2>
            <p className="mt-1.5 max-w-md text-sm text-muted">
              New arrivals, private sales and stories from the atelier — once a
              week, no noise.
            </p>
          </div>
          <form onSubmit={subscribe} className="w-full lg:max-w-md">
            <div className="flex gap-2">
              <input
                type="email"
                required
                id="newsletter-email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="your@email.com"
                aria-label="Email address"
                className="h-12 flex-1 rounded-full border border-line bg-white px-5 text-sm text-ink outline-none transition focus:border-ink"
              />
              <button
                type="submit"
                className="h-12 shrink-0 rounded-full bg-ink px-6 text-sm font-medium text-white transition hover:bg-ink-soft"
              >
                Subscribe
              </button>
            </div>
            <p
              className={`mt-2 pl-1 text-xs transition-opacity duration-300 ${
                subscribed ? 'text-ink opacity-100' : 'opacity-0'
              }`}
              role="status"
            >
              Thanks — you&rsquo;re on the list.
            </p>
          </form>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-heading text-2xl tracking-[0.3em] text-ink"
            >
              VOGIA
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Timeless pieces for a considered life. Designed in Jakarta,
              crafted in small batches by artisans we know by name.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-[11px] font-semibold tracking-[0.18em] text-ink uppercase">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((label) => (
                  <li key={label}>
                    <Link
                      to="/shop"
                      className="text-sm text-muted transition hover:text-ink"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:px-6 lg:flex-row lg:px-8">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} VOGIA. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="rounded-full border border-line p-2.5 text-ink transition hover:border-ink hover:bg-sand"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
