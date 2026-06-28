import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Gamepad2, ArrowRight, Sparkles } from 'lucide-react'
import Container from '@/components/ui/Container'
import Badge from '@/components/ui/Badge'
import { LinkButton } from '@/components/ui/Button'
import Particles from '@/components/ui/Particles'
import GlowOrb from '@/components/ui/GlowOrb'
import { staggerContainer, fadeUp } from '@/lib/animations'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

/** Floating cube decoration used in the hero composition. */
function FloatingCube({
  className,
  color,
  delay = 0,
  size = 90,
}: {
  className: string
  color: string
  delay?: number
  size?: number
}) {
  return (
    <motion.div
      className={`absolute ${className}`}
      style={{ width: size, height: size }}
      animate={{ y: [0, -22, 0], rotate: [0, 8, 0] }}
      transition={{ duration: 7, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div
        className="grid h-full w-full place-items-center rounded-2xl shadow-glow"
        style={{ background: color }}
      >
        <div className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-ink/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/80" />
        </div>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()

  // Parallax: background drifts slower than foreground as the user scrolls.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', reduced ? '0%' : '40%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', reduced ? '0%' : '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, reduced ? 1 : 0])

  return (
    <section
      ref={ref}
      className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Parallax background layer */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-glow" />
        <GlowOrb className="-left-32 top-10 bg-primary" size={520} />
        <GlowOrb className="right-[-10rem] top-1/3 bg-secondary" size={460} />
        <GlowOrb className="bottom-[-8rem] left-1/3 bg-accent" size={360} />
        {/* faint grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </motion.div>

      <Particles count={28} />

      {/* Floating cube cluster (decorative, hidden on small screens) */}
      <div aria-hidden="true" className="absolute inset-0 hidden lg:block">
        <FloatingCube className="right-[12%] top-[22%]" color="#6C5CE7" size={96} delay={0} />
        <FloatingCube className="right-[26%] top-[52%]" color="#00D2FF" size={64} delay={1.2} />
        <FloatingCube className="right-[8%] bottom-[18%]" color="#FFD93D" size={76} delay={0.6} />
        <FloatingCube className="left-[6%] bottom-[22%]" color="#6C5CE7" size={56} delay={1.8} />
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <motion.div
          style={{ y: contentY, opacity }}
          variants={staggerContainer(0.14, 0.1)}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp}>
            <Badge tone="primary" icon={<Sparkles className="h-3.5 w-3.5" />}>
              Indie game studio • Built with Unity
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            Crafting Games{' '}
            <span className="relative whitespace-nowrap">
              <span className="text-gradient">Players Love</span>
              <motion.span
                className="absolute -bottom-2 left-0 h-1.5 w-full rounded-full bg-brand-gradient"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl"
          >
            We create polished and engaging mobile games built with Unity — for Android,
            iOS and PC.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <LinkButton to="/games" size="lg">
              <Gamepad2 className="h-5 w-5" />
              Explore Games
            </LinkButton>
            <LinkButton to="/contact" size="lg" variant="outline">
              Contact Us
              <ArrowRight className="h-5 w-5" />
            </LinkButton>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll cue */}
      <motion.div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/20 p-1.5">
          <div className="h-2 w-1 rounded-full bg-white/60" />
        </div>
      </motion.div>
    </section>
  )
}
