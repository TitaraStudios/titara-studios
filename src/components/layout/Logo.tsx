import { useState } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'
import { assetUrl } from '@/lib/asset'

interface LogoProps {
  className?: string
  /** Height utility for the logo image, e.g. 'h-10'. */
  size?: string
}

/**
 * Titara Studios brand logo. Renders the PNG at `public/logo.png`; if that
 * file is missing (or fails to load) it gracefully falls back to a styled
 * text lockup so the header never looks broken.
 */
export default function Logo({ className, size = 'h-9 sm:h-10' }: LogoProps) {
  const [errored, setErrored] = useState(false)

  return (
    <Link
      to="/"
      aria-label="Titara Studios — home"
      className={cn(
        'group inline-flex items-center gap-2.5 transition-transform duration-300 hover:scale-[1.03]',
        className,
      )}
    >
      {!errored ? (
        <img
          src={assetUrl('/logo.png')}
          alt="Titara Studios"
          onError={() => setErrored(true)}
          className={cn('w-auto max-w-[190px] object-contain sm:max-w-[220px]', size)}
        />
      ) : (
        <>
          <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-brand-gradient shadow-glow">
            <span className="font-display text-lg font-bold text-white">T</span>
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white">
            Titara<span className="text-gradient"> Studios</span>
          </span>
        </>
      )}
    </Link>
  )
}
