import { Reveal } from "../components/Reveal"
import { Button } from "../components/Button"
import { site } from "../data"

const days = [
  { day: "Maanantai", hours: "17.00–20.00" },
  { day: "Tiistai", hours: "Suljettu" },
  { day: "Keskiviikko", hours: "Suljettu" },
  { day: "Torstai", hours: "Suljettu" },
  { day: "Perjantai", hours: "Suljettu" },
  { day: "Lauantai", hours: "Suljettu" },
  { day: "Sunnuntai", hours: "Suljettu" },
]

export function HoursPage() {
  return (
    <>
      <section className="bg-ink pt-32 pb-16 text-cream lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime">
            Aukioloajat
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Treenaa silloin kun sinulle sopii
          </h1>
          <p className="mt-4 max-w-xl text-cream/70">
            Jäsenkortilla kuntosalille joka päivä – asiakaspalvelu palvelee maanantaisin.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="bg-forest px-8 py-10 text-cream">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-lime">Kuntosali</p>
              <p className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
                04.30–24.00
              </p>
              <p className="mt-3 text-cream/75">Joka päivä jäsenkortilla, myös pyhäpäivisin.</p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <h2 className="font-display text-2xl font-bold">Asiakaspalvelu</h2>
              <p className="mt-2 text-muted">Maanantaisin klo 17.00–20.00. Suljettu pyhäpäivisin.</p>
              <ul className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
                {days.map((row) => (
                  <li key={row.day} className="flex items-center justify-between py-3">
                    <span className="font-medium">{row.day}</span>
                    <span className={row.hours === "Suljettu" ? "text-muted" : "font-semibold text-forest"}>
                      {row.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 max-w-6xl px-5 lg:px-8">
          <Reveal>
            <div className="grid gap-8 border border-ink/10 bg-mist p-8 lg:grid-cols-3">
              <div>
                <h3 className="font-display text-lg font-bold">Verkkokauppa 24/7</h3>
                <p className="mt-2 text-sm text-muted">
                  Lataa korttisi tai osta kertakäynti verkosta milloin tahansa.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold">Muina aikoina</h3>
                <p className="mt-2 text-sm text-muted">
                  Soita tai laita WhatsApp-viesti Katariinalle: {site.phoneDisplay}
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold">Lapsiparkki</h3>
                <p className="mt-2 text-sm text-muted">
                  Lapsiparkki on omatoimisessa käytössä ilmaiseksi.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-10 flex flex-wrap gap-3">
            <Button href={`tel:${site.phone.replace(/\s/g, "")}`} variant="dark">
              Soita {site.phoneDisplay}
            </Button>
            <Button to="/yhteystiedot">Yhteystiedot</Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
