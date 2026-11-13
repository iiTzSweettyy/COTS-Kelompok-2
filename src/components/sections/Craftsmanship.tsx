import { useState } from 'react'
import Placeholder from '../Placeholder'

const stats = [
  { value: '30+', label: 'Years of Dedication' },
  { value: '100%', label: 'Handcrafted' },
  { value: '120+', label: 'Skilled Artisans' },
]

export default function Craftsmanship() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="story" className="scroll-mt-24 border-y border-line bg-sand">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        <div className="relative">
          <Placeholder
            kind="artisan"
            label="Artisan at Work"
            className="aspect-4/5 w-full rounded-3xl border border-line"
          />
          <div className="absolute -bottom-5 left-5 rounded-2xl border border-line bg-white/90 px-6 py-4 shadow-xl backdrop-blur">
            <p className="font-heading text-2xl text-ink">1994</p>
            <p className="text-[10px] tracking-[0.25em] text-muted uppercase">
              Established
            </p>
          </div>
        </div>

        <div>
          <p className="text-[11px] font-medium tracking-[0.35em] text-earth uppercase">
            Our Craft
          </p>
          <h2 className="mt-3 font-heading text-3xl text-ink sm:text-4xl">
            A Legacy of Craftsmanship
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-base">
            VOGIA began in 1994 as a two-room atelier with a single cutting
            table. Three decades on, we still finish every hem by hand and still
            know the people who make our clothes.
          </p>

          {expanded && (
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-ink-soft sm:text-base">
              <p>
                We work with a network of family-run workshops in Portugal,
                Italy and Indonesia — partners we have collaborated with for
                years, visited every season, and pay above market rate so that
                skill can be a livelihood rather than a sacrifice.
              </p>
              <p>
                Nothing is rushed. A single overcoat takes four days from first
                cut to final press, and every piece is inspected by the same
                hands that sewed it.
              </p>
            </div>
          )}

          <div className="mt-8 grid grid-cols-3 gap-4 border-y border-line py-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-2xl text-ink sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] leading-tight tracking-[0.12em] text-muted uppercase sm:text-[11px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            className="mt-8 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-white transition hover:bg-ink-soft"
          >
            {expanded ? 'Show Less' : 'Discover Our Story'}
          </button>
        </div>
      </div>
    </section>
  )
}
