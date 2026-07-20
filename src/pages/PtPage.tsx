import { Reveal } from "../components/Reveal"
import { Button } from "../components/Button"
import { ptCoaching, site } from "../data"

const heroImage = "/pt-katariina.png"
const aboutImage = "/pt-katariina.png"

const sections = [
  { id: "valmentaja", label: "Valmentaja" },
  { id: "valmennus", label: "Valmennus" },
  { id: "hinnasto", label: "Hinnasto" },
  { id: "koulutukset", label: "Koulutukset" },
]

export function PtPage() {
  const { trainer } = ptCoaching

  return (
    <>
      <section className="relative overflow-hidden bg-ink pt-32 pb-20 text-cream lg:pt-40 lg:pb-28">
        <img
          src={heroImage}
          alt="Personal training - askelkyykky kahvakuulalla Liikkeessä"
          className="absolute inset-0 h-full w-full object-cover object-[center_20%] opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />

        <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime">
            PT-valmennus
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold text-balance sm:text-5xl lg:text-6xl">
            Henkilökohtaista valmennusta tavoitteidesi mukaan
          </h1>
          <p className="mt-5 max-w-xl text-lg text-cream/75">
            Personal Training Katariinan kanssa – liikuntaneuvontaa, harjoitusohjelmia ja
            ravintoneuvontaa, juuri sinulle räätälöitynä.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={`mailto:${trainer.email}`}>Ota yhteyttä</Button>
            <Button href="#hinnasto" variant="ghost">
              Katso hinnat
            </Button>
          </div>
        </div>
      </section>

      <nav
        className="sticky top-[4.5rem] z-30 border-b border-ink/10 bg-cream/90 backdrop-blur-md"
        aria-label="PT-sivun osiot"
      >
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-5 py-3 lg:px-8">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="shrink-0 rounded-full px-3.5 py-1.5 text-sm font-medium text-ink/70 transition hover:bg-ink hover:text-cream"
            >
              {section.label}
            </a>
          ))}
        </div>
      </nav>

      <section id="valmentaja" className="scroll-mt-36 bg-cream py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-stretch gap-0 lg:grid-cols-2">
          <Reveal className="relative min-h-[20rem] sm:min-h-[24rem] lg:min-h-[32rem]">
            <img
              src={aboutImage}
              alt="Personal training - askelkyykky 14 kg kahvakuulalla Liikkeessä"
              className="absolute inset-0 h-full w-full object-cover object-[center_15%]"
            />
          </Reveal>
          <Reveal delay={80} className="flex flex-col justify-center px-5 py-12 lg:px-12 lg:py-16">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime-dim">
              Valmentaja esittely
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{trainer.name}</h2>
            <p className="mt-5 text-muted leading-relaxed">{trainer.intro}</p>
            <p className="mt-4 text-muted leading-relaxed">{trainer.background}</p>
            <p className="mt-4 text-muted leading-relaxed">{trainer.style}</p>
          </Reveal>
        </div>
      </section>

      <section id="valmennus" className="scroll-mt-36 bg-mist/60 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime-dim">
                Miten valmennus toimii
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                Sinulle räätälöity kokonaisuus
              </h2>
              <p className="mt-5 text-muted leading-relaxed">{ptCoaching.about}</p>
              <p className="mt-4 text-muted leading-relaxed">{ptCoaching.goals}</p>
              <p className="mt-6 font-medium text-ink">{ptCoaching.closing}</p>
            </Reveal>

            <Reveal delay={100}>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-lime-dim">
                Valmennus sisältää
              </p>
              <ul className="mt-5 space-y-3">
                {ptCoaching.includes.map((item) => (
                  <li key={item} className="flex gap-3 border-b border-ink/10 pb-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-lime" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="mt-14 border-t border-ink/10 pt-12">
              <h3 className="font-display text-2xl font-bold">
                Terveys ja hyvinvointi on kokonaisvaltainen paketti
              </h3>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {ptCoaching.wellness.map((item) => (
                  <li key={item} className="border-l-2 border-lime pl-4 py-1">
                    <p className="font-semibold text-ink">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="hinnasto" className="scroll-mt-36 bg-ink py-16 text-cream lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime">Hinnasto</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Valmennuksen hintaesimerkkejä
            </h2>
            <p className="mt-4 max-w-2xl text-cream/70">{ptCoaching.pricingNote}</p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {ptCoaching.pricing.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 80}>
                <div
                  className={`flex h-full flex-col border px-6 py-8 ${
                    "featured" in plan && plan.featured
                      ? "border-lime bg-lime/10"
                      : "border-cream/15 bg-cream/5"
                  }`}
                >
                  <h3 className="font-display text-xl font-bold">{plan.name}</h3>
                  <p className="mt-4 font-display text-4xl font-extrabold tracking-tight text-lime">
                    {plan.price}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-cream/70">{plan.note}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <p className="mt-10 text-sm text-cream/55">
              Yritystunnit, tilaustunnit, tyky-päivät ja kehonkoostumusmittaukset – ota yhteyttä:{" "}
              <a className="text-lime hover:text-white" href={`mailto:${trainer.email}`}>
                {trainer.email}
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      <section id="koulutukset" className="scroll-mt-36 bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime-dim">
              Koulutukset
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Katariinan pätevyydet
            </h2>
          </Reveal>

          <ul className="mt-10 grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {ptCoaching.certifications.map((cert, i) => (
              <Reveal key={cert} delay={i * 40}>
                <li className="flex gap-3 border-b border-ink/10 pb-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-lime" />
                  <span>{cert}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-forest py-16 text-cream lg:py-20">
        <div className="mx-auto max-w-6xl px-5 text-center lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Räätälöidään juuri sinulle sopiva paketti
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-cream/75">
              Ota yhteyttä, niin suunnitellaan valmennus tavoitteidesi mukaan.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href={`mailto:${trainer.email}`}>Lähetä sähköposti</Button>
              <Button href={`tel:${trainer.phone.replace(/\s/g, "")}`} variant="ghost">
                Soita {trainer.phone}
              </Button>
            </div>
            <p className="mt-6 text-sm text-cream/55">
              {trainer.fullName} · {site.address}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
