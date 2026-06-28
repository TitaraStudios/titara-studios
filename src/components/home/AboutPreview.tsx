import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import Section from '@/components/ui/Section'
import Badge from '@/components/ui/Badge'
import { LinkButton } from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations'

const highlights = [
  'Quality over quantity — every detail matters',
  'Built natively in Unity for buttery performance',
  'Player-first, fair and respectful design',
  'Rapid prototyping with relentless polish',
]

export default function AboutPreview() {
  return (
    <Section aria-label="About the studio">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <div className="flex flex-col gap-6">
          <Reveal>
            <Badge tone="secondary">About Titara</Badge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              A studio obsessed with the{' '}
              <span className="text-gradient">craft of fun</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-slate-400">
              Titara Studios is a small, focused team of developers and artists who believe
              great games come from caring deeply about the details. We build polished,
              engaging mobile games — and we sweat every frame.
            </p>
          </Reveal>

          <motion.ul
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-3"
          >
            {highlights.map((item) => (
              <motion.li key={item} variants={fadeUp} className="flex items-center gap-3">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/20 text-primary-200">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-slate-300">{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          <Reveal delay={0.15}>
            <LinkButton to="/about" variant="outline">
              Learn more about us
              <ArrowRight className="h-5 w-5" />
            </LinkButton>
          </Reveal>
        </div>

        {/* Visual */}
        <Reveal delay={0.1} className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-card p-2 shadow-card">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/30 via-ink to-secondary/20">
              {/* Decorative floating shapes */}
              <motion.div
                className="absolute left-[18%] top-[20%] h-24 w-24 rounded-2xl bg-primary shadow-glow"
                animate={{ y: [0, -16, 0], rotate: [0, 6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute right-[20%] top-[40%] h-16 w-16 rounded-xl bg-secondary shadow-glow-cyan"
                animate={{ y: [0, 18, 0], rotate: [0, -8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              />
              <motion.div
                className="absolute bottom-[22%] left-[34%] h-20 w-20 rounded-2xl bg-accent shadow-glow"
                animate={{ y: [0, -12, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
              />
              <div className="absolute inset-0 grid place-items-center">
                <p className="font-display text-2xl font-bold text-white/90">
                  Made with <span className="text-gradient">Unity</span>
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
