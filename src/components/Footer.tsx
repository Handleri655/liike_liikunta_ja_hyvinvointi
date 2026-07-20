import { Link } from "react-router-dom"
import { site } from "../data"

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-display text-3xl font-extrabold tracking-tight">{site.name}</p>
          <p className="mt-3 max-w-sm text-cream/65">{site.fullName}</p>
          <p className="mt-4 text-sm text-cream/50">{site.address}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-lime">Yhteystiedot</p>
          <ul className="mt-4 space-y-2 text-cream/75">
            <li>
              <a className="hover:text-lime" href={`tel:${site.phone.replace(/\s/g, "")}`}>
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a className="hover:text-lime" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li className="pt-2 text-sm text-cream/50">Y-tunnus {site.yTunnus}</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-lime">Sivusto</p>
          <ul className="mt-4 space-y-2 text-cream/75">
            <li>
              <Link className="hover:text-lime" to="/palvelut">
                Palvelut
              </Link>
            </li>
            <li>
              <Link className="hover:text-lime" to="/pt-valmennus">
                PT-valmennus
              </Link>
            </li>
            <li>
              <Link className="hover:text-lime" to="/hinnasto">
                Hinnasto
              </Link>
            </li>
            <li>
              <Link className="hover:text-lime" to="/ajankohtaista">
                Ajankohtaista
              </Link>
            </li>
            <li>
              <Link className="hover:text-lime" to="/aukioloajat">
                Aukioloajat
              </Link>
            </li>
            <li>
              <Link className="hover:text-lime" to="/yhteystiedot">
                Yhteystiedot
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-sm text-cream/45 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} {site.fullName}</p>
          <p>Kuntosali auki joka päivä klo 04.30–24.00</p>
        </div>
      </div>
    </footer>
  )
}
