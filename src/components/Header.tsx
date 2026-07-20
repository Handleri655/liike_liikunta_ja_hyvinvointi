import { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { Logo } from "./Logo"
import { site } from "../data"

const links = [
  { to: "/palvelut", label: "Palvelut" },
  { to: "/pt-valmennus", label: "PT-valmennus" },
  { to: "/hinnasto", label: "Hinnasto" },
  { to: "/ajankohtaista", label: "Ajankohtaista" },
  { to: "/aukioloajat", label: "Aukioloajat" },
  { to: "/yhteystiedot", label: "Yhteystiedot" },
]

/** Pages with a dark hero — transparent header works at the top */
const darkHeroRoutes = new Set([
  "/",
  "/palvelut",
  "/pt-valmennus",
  "/hinnasto",
  "/aukioloajat",
  "/yhteystiedot",
])

export function Header() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const solid = scrolled || open || !darkHeroRoutes.has(pathname)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-ink/95 backdrop-blur-md shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Päänavigaatio">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-lime" : "text-cream/75 hover:text-cream"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={site.shopUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-2 rounded-full bg-lime px-4 py-2 text-sm font-semibold text-ink transition hover:bg-white"
          >
            Kauppa
          </a>
        </nav>

        <button
          type="button"
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Sulje valikko" : "Avaa valikko"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Valikko</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`h-0.5 w-full bg-current transition ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-0.5 w-full bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-ink transition-opacity duration-300 xl:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col justify-center gap-2 px-8" aria-label="Mobiilivalikko">
          <NavLink
            to="/"
            end
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `font-display text-3xl font-bold transition ${
                isActive ? "text-lime" : "text-cream"
              } ${open ? "animate-fade-up" : ""}`
            }
          >
            Etusivu
          </NavLink>
          {links.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `font-display text-3xl font-bold transition ${
                  isActive ? "text-lime" : "text-cream"
                } ${open ? "animate-fade-up" : ""}`
              }
              style={{ animationDelay: `${(i + 1) * 60}ms` }}
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={site.shopUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex w-fit rounded-full bg-lime px-6 py-3 font-semibold text-ink"
            onClick={() => setOpen(false)}
          >
            Siirry kauppaan
          </a>
        </nav>
      </div>
    </header>
  )
}
