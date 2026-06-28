import { cn } from '@/lib/cn'

interface GlowOrbProps {
  className?: string
  /** Tailwind color utility, e.g. 'bg-primary'. */
  color?: string
  size?: number
  animate?: boolean
}

/**
 * Soft, blurred decorative gradient blob used to add depth and the
 * "gradient glow" ambience behind sections.
 */
export default function GlowOrb({
  className,
  color = 'bg-primary',
  size = 420,
  animate = true,
}: GlowOrbProps) {
  return (
    <div
      aria-hidden="true"
      style={{ width: size, height: size }}
      className={cn(
        'pointer-events-none absolute rounded-full opacity-30 blur-3xl',
        color,
        animate && 'animate-pulse-glow',
        className,
      )}
    />
  )
}
