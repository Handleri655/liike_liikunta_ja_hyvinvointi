import { Reveal } from "../components/Reveal"
import { Button } from "../components/Button"
import { pricing, site } from "../data"

function formatEuro(n: number) {
  return n % 1 === 0 ? `${n} €` : `${n.toFixed(2).replace(".", ",")} €`
}

const heroImage =
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=80"

const sections = [
  { id: "aikakortit", label: "Aikakortit" },
  { id: "kertamaksut", label: "Kertamaksut" },
  { id: "monikortit", label: "Monikortit" },
  { id: "ehdot", label: "Ehdot" },
]

export function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink pt-32 pb-20 text-cream lg:pt-40 lg:pb-28">
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[center_35%] opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />

        <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime">Hinnasto</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold text-balance sm:text-5xl lg:text-6xl">
            Ota liikunta elämäntavaksi
          </h1>
          <p className="mt-5 max-w-xl text-lg text-cream/75">
            Valitse aikakortti, kertakäynti tai monikortti. Erityishinnat opiskelijoille,
            eläkeläisille, työttömille, kotiäideille, varusmiehille ja junioreille.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={site.shopUrl}>Avaa kauppa</Button>
            <Button href="#aikakortit" variant="ghost">
              Vertaa kortteja
            </Button>
          </div>
        </div>
      </section>

      <nav
        className="sticky top-[4.5rem] z-30 border-b border-ink/10 bg-cream/90 backdrop-blur-md"
        aria-label="Hinnaston osiot"
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

      <section className="bg-cream py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal>
            <div className="grid overflow-hidden bg-forest text-cream lg:grid-cols-[1.1fr_1fr]">
              <div className="px-6 py-10 sm:px-10 lg:py-12">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-lime">
                  Aloita tästä
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                  Kulkukortti {pricing.accessCard} €
                </h2>
                <p className="mt-4 max-w-md text-cream/75">
                  Ladatulla kortilla kuljet keskukseen joustavasti – treenaa silloin kun sinulle
                  sopii.
                </p>
                <ul className="mt-7 space-y-3">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-lime" />
                    Käynti keskukseen ma–su klo 04.30–24.00
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-lime" />
                    Ilmainen lapsiparkki
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-lime" />
                    Uudesta kortista 7 € (kortin uusinta)
                  </li>
                </ul>
                <div className="mt-8">
                  <Button href={site.shopUrl}>Osta kulkukortti</Button>
                </div>
              </div>
              <div className="relative min-h-[16rem] lg:min-h-full">
                <img
                  src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-forest/25" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="aikakortit" className="scroll-mt-36 bg-mist py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime-dim">
              Aikakortit
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Valitse sinulle sopiva jakso
            </h2>
            <p className="mt-3 max-w-xl text-muted">
              Kuukausi- ja vuosisopimukset. Erityishinnat ja juniorhinnat merkitty erikseen.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {pricing.monthly.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 80}>
                <div
                  className={`flex h-full flex-col p-6 sm:p-7 ${
                    plan.featured
                      ? "bg-ink text-cream ring-2 ring-lime"
                      : "border border-ink/10 bg-cream text-ink"
                  }`}
                >
                  {plan.featured && (
                    <span className="mb-4 w-fit bg-lime px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink">
                      Suosituin
                    </span>
                  )}
                  <h3 className="font-display text-xl font-bold sm:text-2xl">{plan.name}</h3>
                  <p className={`mt-1 text-sm ${plan.featured ? "text-cream/55" : "text-muted"}`}>
                    {plan.period}
                  </p>
                  <p className="mt-6 font-display text-5xl font-extrabold tracking-tight">
                    {plan.price}
                    <span className="ml-1 text-2xl font-bold">€</span>
                  </p>

                  <div
                    className={`mt-5 space-y-1.5 border-t pt-5 text-sm ${
                      plan.featured ? "border-cream/15 text-cream/70" : "border-ink/10 text-muted"
                    }`}
                  >
                    {plan.special != null && (
                      <p className="flex justify-between gap-3">
                        <span>Erityishinta</span>
                        <span className="font-semibold text-inherit">{plan.special} €</span>
                      </p>
                    )}
                    {plan.junior != null && (
                      <p className="flex justify-between gap-3">
                        <span>Junior</span>
                        <span className="font-semibold text-inherit">{plan.junior} €</span>
                      </p>
                    )}
                  </div>

                  <ul
                    className={`mt-6 flex-1 space-y-2.5 text-sm ${
                      plan.featured ? "text-cream/75" : "text-muted"
                    }`}
                  >
                    {plan.features.map((f) => (
                      <li key={f} className="flex gap-3">
                        <span
                          className={`mt-2 h-1.5 w-1.5 shrink-0 ${
                            plan.featured ? "bg-lime" : "bg-lime-dim"
                          }`}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Button
                    href={site.shopUrl}
                    variant={plan.featured ? "primary" : "dark"}
                    className="mt-8 w-full"
                  >
                    Osta kaupasta
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div id="kertamaksut" className="scroll-mt-36">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime-dim">
                Kertamaksut
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold">Kokeile kerralla</h2>
              <p className="mt-3 text-muted">
                Sopii satunnaiseen käyntiin – myös erityis- ja juniorhinnat.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
                {[
                  { label: "Kuntosali", price: pricing.single.gym },
                  { label: "Ryhmäliikunta", price: pricing.single.group },
                  { label: "Erityishinta", price: pricing.single.special },
                  { label: "Junior", price: pricing.single.junior },
                ].map((row) => (
                  <div key={row.label} className="flex items-baseline justify-between gap-4 py-4">
                    <span className="font-medium">{row.label}</span>
                    <span className="font-display text-2xl font-bold">{formatEuro(row.price)}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div id="monikortit" className="scroll-mt-36">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime-dim">
                Monikortit
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold">Joustava vaihtoehto</h2>
              <p className="mt-3 text-muted">
                5×-kortti voimassa 3 kk, 10×-kortti 6 kk ostohetkestä.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
                {pricing.multi.map((row) => (
                  <div key={row.name} className="flex items-start justify-between gap-4 py-4">
                    <div>
                      <p className="font-medium">{row.name}</p>
                      <p className="mt-0.5 text-sm text-muted">{row.note}</p>
                    </div>
                    <span className="font-display text-2xl font-bold">{row.price} €</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="ehdot" className="scroll-mt-36 bg-mist py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="h-full border border-ink/10 bg-cream p-6 sm:p-8">
                <h2 className="font-display text-2xl font-bold">Ikärajat salille</h2>
                <ul className="mt-5 space-y-3 text-muted">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-lime" />
                    Alle 13-vuotiaat eivät pääse salille
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-lime" />
                    13–14-vuotiaat huoltajan tai yli 15-vuotiaan seurassa
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-lime" />
                    15 vuotta täyttäneet itsenäisesti
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="h-full border border-ink/10 bg-cream p-6 sm:p-8">
                <h2 className="font-display text-2xl font-bold">Erityis- ja juniorhinnat</h2>
                <ul className="mt-5 space-y-3 text-muted">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-lime" />
                    Juniorhinnat 13–15-vuotiaille
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-lime" />
                    Erityishinnat: 16–17-v., opiskelijat, eläkeläiset, työttömät, kotiäidit,
                    varusmiehet
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-lime" />
                    Pidätämme oikeuden hintamuutoksiin
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-cream lg:py-20">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="font-display text-3xl font-bold sm:text-4xl">Osta kortti verkossa</h2>
                <p className="mt-3 max-w-lg text-cream/65">
                  Verkkokauppa palvelee 24/7. Voit myös soittaa tai tulla asiakaspalveluun
                  maanantaisin klo 17–20.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href={site.shopUrl}>Avaa kauppa</Button>
                <Button href={`tel:${site.phone.replace(/\s/g, "")}`} variant="ghost">
                  Soita {site.phoneDisplay}
                </Button>
                <Button to="/yhteystiedot" variant="ghost">
                  Yhteystiedot
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
