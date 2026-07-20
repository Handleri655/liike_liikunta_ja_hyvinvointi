import { Reveal } from "../components/Reveal"
import { Button } from "../components/Button"
import { services, site } from "../data"

const extras = [
  {
    title: "Kuntosaliohjelma",
    text: "Saat selkeän ohjelman, joka tukee tavoitteitasi – aloittelijasta kokeneeseen treenaajaan.",
  },
  {
    title: "Kehonkoostumusmittaus",
    text: "Seuraa kehitystäsi mittauksilla ja tee harjoittelusta entistä tavoitteellisempaa.",
  },
  {
    title: "Ravintoneuvonta",
    text: "Ravinto on osa kokonaisuutta. Saat käytännönläheistä ohjausta arkeen.",
  },
  {
    title: "Yrityspalvelut",
    text: "Hyvinvointia työyhteisölle – kysy räätälöityjä ratkaisuja yrityksellesi.",
  },
]

const heroImage =
  "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=2000&q=80"

export function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink pt-32 pb-20 text-cream lg:pt-40 lg:pb-28">
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />

        <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime">Palvelut</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold text-balance sm:text-5xl lg:text-6xl">
            Treenaa, palaudu ja voi paremmin
          </h1>
          <p className="mt-5 max-w-xl text-lg text-cream/75">
            Liikkeestä löydät kuntosalin, ryhmäliikunnan, sisäpyöräilyn, valmennuksen ja
            hyvinvointipalvelut saman katon alta.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#palvelut-lista">Tutustu palveluihin</Button>
            <Button href={site.shopUrl} variant="ghost">
              Siirry kauppaan
            </Button>
          </div>
        </div>
      </section>

      <nav
        className="sticky top-[4.5rem] z-30 border-b border-ink/10 bg-cream/90 backdrop-blur-md"
        aria-label="Palveluvalikko"
      >
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-5 py-3 lg:px-8">
          {services.map((service) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className="shrink-0 rounded-full px-3.5 py-1.5 text-sm font-medium text-ink/70 transition hover:bg-ink hover:text-cream"
            >
              {service.title}
            </a>
          ))}
        </div>
      </nav>

      <section id="palvelut-lista" className="bg-cream">
        {services.map((service, i) => {
          const reverse = i % 2 === 1
          return (
            <article
              key={service.id}
              id={service.id}
              className={`scroll-mt-36 border-b border-ink/10 ${
                reverse ? "bg-mist/60" : "bg-cream"
              }`}
            >
              <div
                className={`mx-auto grid max-w-6xl items-stretch lg:grid-cols-2 ${
                  reverse ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <Reveal className="relative min-h-[18rem] sm:min-h-[22rem] lg:min-h-[28rem]">
                  <img
                    src={service.image}
                    alt=""
                    style={{ objectPosition: service.position }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </Reveal>

                <Reveal
                  delay={80}
                  className="flex flex-col justify-center px-5 py-12 sm:px-8 lg:px-12 lg:py-16"
                >
                  <span className="font-display text-sm font-bold tracking-[0.2em] text-lime-dim">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
                    {service.details}
                  </p>
                  <ul className="mt-7 space-y-2.5">
                    {service.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-ink/85">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-lime" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button to="/hinnasto" variant="dark">
                      Katso hinnasto
                    </Button>
                    <Button to="/yhteystiedot" variant="primary">
                      Kysy lisää
                    </Button>
                  </div>
                </Reveal>
              </div>
            </article>
          )
        })}
      </section>

      <section className="bg-ink py-16 text-cream lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime">Lisäpalvelut</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
              Syvennä treeniäsi ja hyvinvointiasi
            </h2>
            <p className="mt-3 max-w-xl text-cream/65">
              Valmennusta, mittauksia ja yrityspalveluita – rakennetaan yhdessä sinulle sopiva
              kokonaisuus.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-px bg-cream/10 sm:grid-cols-2">
            {extras.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <div className="h-full bg-ink px-6 py-8 sm:px-8">
                  <span className="block h-0.5 w-10 bg-lime" />
                  <h3 className="mt-5 font-display text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-cream/65 leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="font-display text-3xl font-bold sm:text-4xl">Valmis aloittamaan?</h2>
                <p className="mt-3 max-w-lg text-muted">
                  Osta kortti verkkokaupasta tai ota yhteyttä – autamme mielellämme eteenpäin.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href={site.shopUrl} variant="dark">
                  Avaa kauppa
                </Button>
                <Button to="/yhteystiedot">Yhteystiedot</Button>
                <Button to="/aukioloajat" variant="primary">
                  Aukioloajat
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
