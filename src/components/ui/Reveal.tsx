import type { ReactNode } from 'react'
import { motion, type Variants } from 'framer-motion'
import { fadeUp, viewportOnce } from '@/lib/animations'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Override the default fade-up variants. */
  variants?: Variants
  /** Stagger delay in seconds. */
  delay?: number
  as?: 'div' | 'section' | 'li' | 'article' | 'span'
}

/**
 * Scroll-triggered reveal. Wraps children in a motion element that animates
 * from hidden -> visible once when it enters the viewport.
 */
export default function Reveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  as = 'div',
}: RevealProps) {
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  )
}
