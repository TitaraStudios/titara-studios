import type { ReactNode } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/cn'

interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode
  className?: string
  /** Enables hover elevation + glow. */
  interactive?: boolean
}

/**
 * Surface card with a subtle gradient border, dark glass fill and optional
 * hover elevation. The foundation for game cards, news cards, value cards, etc.
 */
export default function Card({
  children,
  className,
  interactive = true,
  ...props
}: CardProps) {
  return (
    <motion.div
      whileHover={interactive ? { y: -6 } : undefined}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      className={cn(
        'relative overflow-hidden rounded-2xl border border-white/10 bg-card/80 shadow-card backdrop-blur-sm',
        interactive &&
          'transition-shadow duration-300 hover:border-primary/40 hover:shadow-card-hover',
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}
