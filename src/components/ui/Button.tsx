import { forwardRef, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

const base =
  'group relative inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold tracking-tight transition-colors duration-300 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60'

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm sm:text-base',
  lg: 'px-8 py-4 text-base sm:text-lg',
}

const variants: Record<Variant, string> = {
  primary:
    'text-white shadow-glow btn-glow hover:shadow-card-hover',
  secondary:
    'bg-secondary text-ink hover:bg-secondary-400 shadow-glow-cyan',
  outline:
    'border border-white/20 bg-white/5 text-white backdrop-blur hover:border-secondary hover:text-secondary',
  ghost: 'text-slate-200 hover:bg-white/10 hover:text-white',
}

interface SharedProps {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

type MotionButtonProps = SharedProps &
  Omit<HTMLMotionProps<'button'>, keyof SharedProps>

const hover = { scale: 1.04 }
const tap = { scale: 0.97 }

/** Animated button. Renders a <button> by default. */
export const Button = forwardRef<HTMLButtonElement, MotionButtonProps>(
  function Button({ variant = 'primary', size = 'md', className, children, ...props }, ref) {
    return (
      <motion.button
        ref={ref}
        whileHover={hover}
        whileTap={tap}
        className={cn(base, sizes[size], variants[variant], className)}
        {...props}
      >
        {children}
      </motion.button>
    )
  },
)

interface LinkButtonProps extends SharedProps {
  to: string
  ariaLabel?: string
}

/** Same styling as Button, but routes internally via React Router. */
export function LinkButton({
  to,
  variant = 'primary',
  size = 'md',
  className,
  children,
  ariaLabel,
}: LinkButtonProps) {
  return (
    <motion.div whileHover={hover} whileTap={tap} className="inline-flex">
      <Link
        to={to}
        aria-label={ariaLabel}
        className={cn(base, sizes[size], variants[variant], className)}
      >
        {children}
      </Link>
    </motion.div>
  )
}

interface AnchorButtonProps extends SharedProps {
  href: string
  ariaLabel?: string
  external?: boolean
}

/** Same styling as Button, for external links (app stores, socials). */
export function AnchorButton({
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  ariaLabel,
  external = true,
}: AnchorButtonProps) {
  return (
    <motion.a
      href={href}
      aria-label={ariaLabel}
      whileHover={hover}
      whileTap={tap}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={cn(base, sizes[size], variants[variant], className)}
    >
      {children}
    </motion.a>
  )
}
