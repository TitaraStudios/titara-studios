import type { Variants } from 'framer-motion'

/** Shared easing curve (cubic-bezier) for a consistent, premium feel. */
export const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1]

/** Fade + rise. The workhorse reveal used on scroll throughout the site. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: easeOutExpo } },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
}

/** Parent container that staggers its children's entrance. */
export const staggerContainer = (stagger = 0.12, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
})

/** Page-level transition wrapper variants. */
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.3, ease: easeOutExpo },
  },
}

/** Common viewport config so reveals trigger once, slightly before fully in view. */
export const viewportOnce = { once: true, amount: 0.25 } as const
