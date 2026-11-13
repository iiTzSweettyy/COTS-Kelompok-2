import Placeholder from '../Placeholder'
import { Check } from '../icons'

const benefits = [
  'Early access to every new drop',
  'Members-only pricing, up to 20% off',
  'Free shipping and 30-day returns',
  'Invitations to private atelier events',
]

export default function InnerCircle() {
  function joinNow() {
    document
      .getElementById('newsletter')
      ?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    window.setTimeout(
      () => document.getElementById('newsletter-email')?.focus(),
      450,
    )
  }

  return (
    <section
      id="join"
      className="mx-auto max-w-7xl scroll-mt-24 px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24"
    >
      <div className="grid overflow-hidden rounded-3xl bg-ink text-white lg:grid-cols-2">
        <div className="px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
          <p className="text-[11px] font-medium tracking-[0.35em] text-gold uppercase">
            Membership
          </p>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl">
            Join the Inner Circle
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65">
            A quiet corner of VOGIA for the people who wear our pieces hardest.
            No spam, no daily blasts — just the good stuff, before anyone else.
          </p>

          <ul className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest/20 text-forest">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm text-white/85">{benefit}</span>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={joinNow}
            className="mt-10 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-gold-deep"
          >
            Become a Member
          </button>
        </div>

        <div className="relative min-h-64 lg:min-h-full">
          <Placeholder
            kind="membership"
            label="Earth Tone Edit"
            className="absolute inset-0 h-full w-full"
          />
        </div>      </div>
    </section>
  )
}
