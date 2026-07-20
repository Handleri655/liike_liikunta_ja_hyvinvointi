import { useState, type FormEvent } from "react"
import { Reveal } from "../components/Reveal"
import { site } from "../data"

export function ContactPage() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <section className="bg-ink pt-32 pb-16 text-cream lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime">
            Yhteystiedot
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Ollaan yhteydessä
          </h1>
          <p className="mt-4 max-w-xl text-cream/70">
            Tervetuloa Liikkeeseen Mäntässä – tai jätä viesti, palaamme asiaan pian.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div>
              <h2 className="font-display text-2xl font-bold">{site.fullName}</h2>
              <p className="mt-3 text-muted">{site.address}</p>

              <dl className="mt-8 space-y-5">
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-[0.14em] text-lime-dim">
                    Sähköposti
                  </dt>
                  <dd className="mt-1">
                    <a className="text-lg hover:text-lime-dim" href={`mailto:${site.email}`}>
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-[0.14em] text-lime-dim">
                    Puhelin
                  </dt>
                  <dd className="mt-1">
                    <a
                      className="text-lg hover:text-lime-dim"
                      href={`tel:${site.phone.replace(/\s/g, "")}`}
                    >
                      {site.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-[0.14em] text-lime-dim">
                    Y-tunnus
                  </dt>
                  <dd className="mt-1 text-lg">{site.yTunnus}</dd>
                </div>
              </dl>

              <div className="mt-10 space-y-6">
                {site.staff.map((person) => (
                  <div key={person.name} className="border-l-2 border-lime pl-5">
                    <p className="font-display text-xl font-bold">{person.name}</p>
                    <p className="text-sm text-muted">{person.role}</p>
                    <p className="mt-2">
                      <a className="hover:text-lime-dim" href={`mailto:${person.email}`}>
                        {person.email}
                      </a>
                      {" · "}
                      <a
                        className="hover:text-lime-dim"
                        href={`tel:${person.phone.replace(/\s/g, "")}`}
                      >
                        {person.phone}
                      </a>
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 overflow-hidden border border-ink/10">
                <iframe
                  title="Kartta – Liike Mänttä"
                  src="https://maps.google.com/maps?q=Koneenhoitajankatu%206%2C%2035800%20M%C3%A4ntt%C3%A4&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-mist p-6 sm:p-8">
              <h2 className="font-display text-2xl font-bold">Lähetä viesti</h2>
              <p className="mt-2 text-muted">
                Jätä yhteydenottopyyntö tai kysymys – palaamme sinulle mahdollisimman pian.
              </p>

              {sent ? (
                <div className="mt-8 border border-forest/20 bg-cream p-6">
                  <p className="font-display text-xl font-bold text-forest">Kiitos viestistäsi!</p>
                  <p className="mt-2 text-muted">
                    Tämä demo ei lähetä viestiä palvelimelle. Voit myös soittaa tai lähettää
                    sähköpostia suoraan.
                  </p>
                </div>
              ) : (
                <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                  <label className="block">
                    <span className="text-sm font-medium">Nimi *</span>
                    <input
                      required
                      name="name"
                      className="mt-1.5 w-full border border-ink/15 bg-cream px-4 py-3 outline-none transition focus:border-lime-dim"
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium">Sähköposti *</span>
                    <input
                      required
                      type="email"
                      name="email"
                      className="mt-1.5 w-full border border-ink/15 bg-cream px-4 py-3 outline-none transition focus:border-lime-dim"
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium">Puhelin</span>
                    <input
                      name="phone"
                      className="mt-1.5 w-full border border-ink/15 bg-cream px-4 py-3 outline-none transition focus:border-lime-dim"
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium">Viesti *</span>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      className="mt-1.5 w-full border border-ink/15 bg-cream px-4 py-3 outline-none transition focus:border-lime-dim"
                    />
                  </label>
                  <button
                    type="submit"
                    className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition hover:bg-forest"
                  >
                    Lähetä viesti
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
