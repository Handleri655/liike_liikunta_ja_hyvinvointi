import type { ReactNode } from "react"
import { Link } from "react-router-dom"

type Props = {
  to?: string
  href?: string
  children: ReactNode
  variant?: "primary" | "ghost" | "dark"
  className?: string
}

export function Button({ to, href, children, variant = "primary", className = "" }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"

  const styles = {
    primary: "bg-lime text-ink hover:bg-white focus-visible:outline-lime",
    ghost:
      "border border-cream/35 bg-transparent text-cream hover:border-lime hover:text-lime focus-visible:outline-cream",
    dark: "bg-ink text-cream hover:bg-forest focus-visible:outline-ink",
  }[variant]

  const cls = `${base} ${styles} ${className}`

  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    )
  }

  return (
    <a href={href} className={cls} target={href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {children}
    </a>
  )
}
