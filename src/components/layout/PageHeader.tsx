import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Badge from '@/components/ui/Badge'
import GlowOrb from '@/components/ui/GlowOrb'
import { staggerContainer, fadeUp } from '@/lib/animations'

interface PageHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  children?: ReactNode
}

/** Consistent hero band for inner pages (Games, About, News, etc.). */
export default function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden pb-12 pt-16 sm:pb-16 sm:pt-20">
      <div aria-hidden="true" className="absolute inset-0 bg-grid-glow" />
      <GlowOrb className="-left-24 -top-16 bg-primary" size={360} />
      <GlowOrb className="right-[-6rem] top-0 bg-secondary" size={320} />

      <Container className="relative">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate="visible"
          className="flex max-w-3xl flex-col gap-5"
        >
          {eyebrow && (
            <motion.div variants={fadeUp}>
              <Badge tone="primary">{eyebrow}</Badge>
            </motion.div>
          )}
          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              variants={fadeUp}
              className="max-w-2xl text-lg leading-relaxed text-slate-400"
            >
              {description}
            </motion.p>
          )}
          {children && <motion.div variants={fadeUp}>{children}</motion.div>}
        </motion.div>
      </Container>
    </header>
  )
}
