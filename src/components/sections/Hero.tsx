import { Link } from 'react-router-dom'
import Placeholder from '../Placeholder'
import { Play } from '../icons'

const stats = [
  { value: '2K+', label: 'Pieces Crafted' },
  { value: '10K+', label: 'Happy Clients' },
  { value: '15M+', label: 'Social Reach' },
]

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-line">
        <Placeholder
          kind="hero"
          label="Boutique Interior"
          className="absolute inset-0 h-full w-full"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/25"
          aria-hidden="true"
        />

        <div className="relative px-6 py-14 sm:px-10 lg:px-16 lg:py-24">
          <p className="text-[11px] font-medium tracking-[0.35em] text-earth uppercase">
            Autumn Edit · New Season
          </p>
          <h1 className="mt-5 max-w-2xl font-heading text-4xl leading-[1.06] text-ink sm:text-5xl lg:text-6xl">
            The Art of <span className="italic">Timeless</span> Elegance
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-soft sm:text-base">
            Considered silhouettes in natural fabrics — made slowly, worn for
            years. Discover the pieces our atelier keeps coming back to.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/shop"
              className="rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-white transition hover:bg-ink-soft"
            >
              Explore Collection
            </Link>
            <button
              type="button"
              className="group flex items-center gap-3 rounded-full border border-ink/15 bg-white/70 px-6 py-3 text-sm font-medium text-ink backdrop-blur transition hover:border-ink/40"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white transition group-hover:bg-ink-soft">
                <Play className="h-3.5 w-3.5" />
              </span>
              Watch Video
            </button>
          </div>
        </div>

        <div className="relative grid grid-cols-3 border-t border-ink/10 bg-white/70 backdrop-blur">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-4 py-5 text-center sm:py-6 ${
                index > 0 ? 'border-l border-ink/10' : ''
              }`}
            >
              <p className="font-heading text-2xl text-ink sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[10px] tracking-[0.16em] text-muted uppercase sm:text-[11px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
