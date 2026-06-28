import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'

interface LogoProps {
  className?: string
  /** Hide the wordmark on very small screens if needed. */
  showWordmark?: boolean
}

/** Titara Studios brand lockup — animated gradient mark + wordmark. */
export default function Logo({ className, showWordmark = true }: LogoProps) {
  return (
    <Link
      to="/"
      aria-label="Titara Studios — home"
      className={cn('group inline-flex items-center gap-2.5', className)}
    >
      <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-brand-gradient shadow-glow transition-transform duration-300 group-hover:scale-105">
        <span className="font-display text-lg font-bold text-white">T</span>
        <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </span>
      {showWordmark && (
        <span className="font-display text-lg font-bold tracking-tight text-white">
          Titara<span className="text-gradient"> Studios</span>
        </span>
      )}
    </Link>
  )
}
