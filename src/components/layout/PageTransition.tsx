import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { pageTransition } from '@/lib/animations'

/** Wraps each page so route changes fade + slide smoothly via AnimatePresence. */
export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.main
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-[60vh]"
    >
      {children}
    </motion.main>
  )
}
