import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import Container from './Container'

interface SectionProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  id?: string
  /** Render without the inner Container (for full-bleed sections). */
  bleed?: boolean
  'aria-label'?: string
}

/** Vertical-rhythm wrapper that standardises section padding across the site. */
export default function Section({
  children,
  className,
  containerClassName,
  id,
  bleed = false,
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn('relative py-20 sm:py-24 lg:py-28', className)}
      {...rest}
    >
      {bleed ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  )
}
