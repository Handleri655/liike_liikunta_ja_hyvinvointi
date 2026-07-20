import { NavLink } from "react-router-dom"
import { site } from "../data"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <NavLink to="/" end className={`group inline-flex flex-col ${className}`} aria-label="LIIKE etusivu">
      <svg viewBox="0 0 120 18" className="h-3 w-auto text-lime" aria-hidden>
        <path
          className="logo-arc"
          d="M4 14 C 30 0, 90 0, 116 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-display text-2xl font-extrabold tracking-tight text-cream group-hover:text-lime transition-colors sm:text-[1.75rem]">
        {site.name}
      </span>
      <span className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-cream/55">
        Liikunta &amp; hyvinvointi
      </span>
    </NavLink>
  )
}
