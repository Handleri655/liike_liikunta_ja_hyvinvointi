import { Link } from "react-router-dom"
import { Button } from "../components/Button"
import { Reveal } from "../components/Reveal"
import { news, pricing, reviews, services, site } from "../data"

const heroImage =
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=2400&q=80"
const aboutImage =
  "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1600&q=80"
const ctaImage =
  "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=2000&q=80"

const featured = services.slice(0, 2)
const rest = services.slice(2)

export function HomePage() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden bg-ink text-cream">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Treenaajia kuntosalilla"
            className="h-full w-full object-cover object-[center_30%] animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/55 to-ink/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/30" />
        </div>

        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-32 lg:justify-center lg:px-8 lg:pb-24 lg:pt-28">
          <p className="font-display text-5xl font-extrabold tracking-tight text-lime sm:text-6xl md:text-7xl lg:text-[5.5rem] lg:leading-none">
            {site.name}
          </p>
          <h1 className="mt-3 max-w-xl font-display text-2xl font-bold leading-tight text-balance sm:text-3xl md:text-[2.15rem]">
            {site.tagline}
          </h1>
          <p className="mt-3 max-w-md text-base text-cream/75 sm:text-lg">
            Liikunta- ja hyvinvointikeskus Mäntässä – kuntosali, ryhmäliikunta ja valmennus joka
            päivä klo 04.30–24.00.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button to="/hinnasto">Tutustu hinnastoon</Button>
            <Button to="/yhteystiedot" variant="ghost">
              Ota yhteyttä
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime-dim">Palvelut</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold text-balance sm:text-4xl">
              Kaikki mitä tarvitset liikkumiseen ja hyvinvointiin
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-3 sm:gap-4 lg:grid-cols-2 lg:gap-5">
            {featured.map((service, i) => (
              <Reveal key={service.id} delay={i * 90}>
                <Link
                  to="/palvelut"
                  className="group relative block aspect-[16/11] overflow-hidden sm:aspect-[5/3]"
                >
                  <img
                    src={service.image}
                    alt=""
                    style={{ objectPosition: service.position }}
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                    <h3 className="font-display text-2xl font-bold text-cream sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm text-cream/75 sm:text-base">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-3 grid gap-3 sm:mt-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {rest.map((service, i) => (
              <Reveal key={service.id} delay={120 + i * 70}>
                <Link
                  to="/palvelut"
                  className="group relative block aspect-[4/5] overflow-hidden sm:aspect-[3/4]"
                >
                  <img
                    src={service.image}
                    alt=""
                    style={{ objectPosition: service.position }}
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <h3 className="font-display text-lg font-bold text-cream sm:text-xl">
                      {service.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-cream/70">{service.description}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <Button to="/palvelut" variant="dark">
              Kaikki palvelut
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest text-cream">
        <div className="grid lg:grid-cols-2 lg:min-h-[34rem]">
          <Reveal className="flex flex-col justify-center px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-16">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime">Miksi Liike</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-balance sm:text-4xl">
              Jo 15 vuotta liikunnan iloa Mäntässä
            </h2>
            <p className="mt-5 max-w-lg text-cream/75 leading-relaxed">
              Liike on paikallinen liikunta- ja hyvinvointikeskus, jossa treenaat joustavasti omassa
              rytmissäsi. Jäsenkortilla pääset salille aamuyöstä myöhäisiltaan – ja ryhmätunneilla
              saat seuraa sekä motivaatiota.
            </p>
            <ul className="mt-8 space-y-3 text-cream/85">
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 bg-lime" />
                Kuntosali avoinna joka päivä klo 04.30–24.00
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 bg-lime" />
                Ryhmäliikuntaa ja sisäpyöräilyä
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 bg-lime" />
                Ilmainen lapsiparkki omatoimiseen käyttöön
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 bg-lime" />
                Erityishinnat opiskelijoille, eläkeläisille ja junioreille
              </li>
            </ul>
          </Reveal>

          <Reveal delay={100} className="relative min-h-[22rem] lg:min-h-full">
            <img
              src={aboutImage}
              alt="Kuntosalin laitteita"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-forest/40 lg:bg-gradient-to-r lg:from-forest/30 lg:to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 bg-lime px-5 py-4 text-ink sm:left-auto sm:right-8 sm:w-56">
              <p className="font-display text-3xl font-extrabold">15 v</p>
              <p className="text-sm font-medium">liikuttamassa Mänttää</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime-dim">Hinnasto</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Aloita liikkuminen tänään</h2>
            <p className="mt-3 max-w-xl text-muted">
              Kulkukortti {pricing.accessCard} €. Kertakäynti kuntosalille tai ryhmätunnille{" "}
              {pricing.single.gym.toFixed(2).replace(".", ",")} €.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {pricing.monthly.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 90}>
                <div
                  className={`flex h-full flex-col border px-6 py-8 ${
                    plan.featured
                      ? "border-ink bg-ink text-cream"
                      : "border-ink/10 bg-cream text-ink"
                  }`}
                >
                  {plan.featured && (
                    <span className="mb-4 w-fit bg-lime px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink">
                      Suosituin
                    </span>
                  )}
                  <h3 className="font-display text-2xl font-bold">{plan.name}</h3>
                  <p className={`mt-1 text-sm ${plan.featured ? "text-cream/60" : "text-muted"}`}>
                    {plan.period}
                  </p>
                  <p className="mt-6 font-display text-5xl font-extrabold tracking-tight">
                    {plan.price} €
                  </p>
                  <ul
                    className={`mt-6 flex-1 space-y-2 text-sm ${plan.featured ? "text-cream/75" : "text-muted"}`}
                  >
                    {plan.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <Button
                    to="/hinnasto"
                    variant={plan.featured ? "primary" : "dark"}
                    className="mt-8 w-full"
                  >
                    Katso kaikki hinnat
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime-dim">
                Ajankohtaista
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Liikkeen uutiset</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-muted lg:text-right">
                Ryhmäliikunta palaa kesälomilta 3.8. – tervetuloa takaisin salille!
              </p>
            </Reveal>
          </div>

          <div className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
            {news.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <article className="grid gap-2 py-7 sm:grid-cols-[140px_1fr] sm:gap-8">
                  <p className="text-sm font-medium text-muted">{item.date}</p>
                  <div>
                    <h3 className="font-display text-xl font-bold">{item.title}</h3>
                    <p className="mt-1 text-muted">{item.excerpt}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-cream lg:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:items-end lg:gap-16">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime">
                Google-arvostelut
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                Mitä asiakkaat sanovat
              </h2>
              <div className="mt-6 flex items-end gap-3">
                <p className="font-display text-6xl font-extrabold tracking-tight text-lime">
                  {reviews.rating.toFixed(1).replace(".", ",")}
                </p>
                <div className="pb-2">
                  <div className="flex gap-0.5 text-lime" aria-hidden>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-lg">
                        {i < Math.round(reviews.rating) ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                  <p className="mt-1 text-sm text-cream/60">
                    {reviews.count} arvostelua Googlella
                  </p>
                </div>
              </div>
              <a
                href={reviews.googleUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex text-sm font-semibold text-lime transition hover:text-white"
              >
                Lue kaikki arvostelut Googlella →
              </a>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2">
              {reviews.items.slice(0, 4).map((review, i) => (
                <Reveal key={review.name} delay={i * 70}>
                  <blockquote className="border-l-2 border-lime pl-5">
                    <div className="flex gap-0.5 text-lime" aria-label={`${review.rating} tähteä`}>
                      {Array.from({ length: review.rating }).map((_, s) => (
                        <span key={s}>★</span>
                      ))}
                    </div>
                    <p className="mt-3 text-cream/80 leading-relaxed">“{review.text}”</p>
                    <footer className="mt-4 text-sm font-semibold text-cream/55">
                      {review.name}
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[28rem] overflow-hidden bg-ink py-24 text-cream lg:min-h-[32rem] lg:py-28">
        <img
          src={ctaImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
        />
        <div className="absolute inset-0 bg-ink/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/50" />
        <div className="relative mx-auto flex min-h-[inherit] max-w-6xl flex-col items-center justify-center px-5 text-center lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-balance sm:text-5xl">
              Valmis ottamaan seuraavan askeleen?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-cream/75">
              Asiakaspalvelu maanantaisin klo 17–20. Muina aikoina tavoitat meidät puhelimitse,
              WhatsAppilla tai verkkokaupan kautta.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href={`tel:${site.phone.replace(/\s/g, "")}`}>Soita {site.phoneDisplay}</Button>
              <Button to="/yhteystiedot" variant="ghost">
                Yhteystiedot
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
