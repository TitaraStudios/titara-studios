import { Link } from 'react-router-dom'
import { Mail, ArrowUpRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import Logo from './Logo'
import { footerLinks, socialLinks, contactEmail } from '@/data/navigation'

export default function Footer() {
  const year = 2026 // current copyright year

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/10 bg-ink">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
      />

      <Container className="relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              Titara Studios crafts polished, fun, high-quality mobile games built with
              Unity for Android, iOS and PC.
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex w-fit items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-secondary"
            >
              <Mail className="h-4 w-4" />
              {contactEmail}
            </a>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/50 hover:text-secondary"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-200">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="group inline-flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {year} Titara Studios. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <Link to="/privacy" className="transition-colors hover:text-slate-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-slate-300">
              Terms
            </Link>
            <Link to="/contact" className="transition-colors hover:text-slate-300">
              Support
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
