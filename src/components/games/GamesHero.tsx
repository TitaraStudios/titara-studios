import { motion } from 'framer-motion'
import { Star, Trophy } from 'lucide-react'
import Container from '@/components/ui/Container'

/** A small floating coin built from layered gradients. */
function Coin({ className, size = 56, delay = 0 }: { className: string; size?: number; delay?: number }) {
  return (
    <motion.div
      aria-hidden="true"
      className={`absolute ${className}`}
      style={{ width: size, height: size }}
      animate={{ y: [0, -16, 0], rotate: [0, 10, 0] }}
      transition={{ duration: 5, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="grid h-full w-full place-items-center rounded-full bg-gradient-to-br from-accent-400 to-accent-600 shadow-[0_0_24px_rgba(255,217,61,0.6)] ring-4 ring-accent/30">
        <Star className="h-1/2 w-1/2 fill-white/90 text-white/90" />
      </div>
    </motion.div>
  )
}

function FloatingStar({ className, delay = 0, size = 20 }: { className: string; delay?: number; size?: number }) {
  return (
    <motion.div
      aria-hidden="true"
      className={`absolute ${className}`}
      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 3, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      <Star className="fill-white text-white" style={{ width: size, height: size }} />
    </motion.div>
  )
}

/**
 * Bright, playful "Our Hit Games" banner inspired by casual-studio landing
 * pages — vibrant gradient, floating coins/stars and a trophy, with a soft
 * wave that blends down into the dark page.
 */
export default function GamesHero() {
  return (
    <section aria-label="Our games" className="relative overflow-hidden">
      {/* Bright gradient band */}
      <div className="relative bg-gradient-to-br from-primary via-primary-600 to-secondary py-24 sm:py-28">
        {/* soft radial highlights */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.35), transparent 45%), radial-gradient(circle at 85% 20%, rgba(0,210,255,0.4), transparent 40%)',
          }}
        />

        {/* Decorative floaters */}
        <Coin className="left-[12%] top-[28%]" size={64} delay={0} />
        <Coin className="left-[22%] bottom-[24%] hidden sm:block" size={40} delay={1.4} />
        <Coin className="right-[26%] top-[22%] hidden sm:block" size={36} delay={0.8} />
        <FloatingStar className="left-[30%] top-[20%]" size={18} delay={0.2} />
        <FloatingStar className="left-[40%] bottom-[26%]" size={14} delay={1.1} />
        <FloatingStar className="right-[34%] bottom-[30%]" size={22} delay={0.6} />
        <FloatingStar className="right-[14%] top-[60%]" size={16} delay={1.6} />

        {/* Trophy */}
        <motion.div
          aria-hidden="true"
          className="absolute right-[8%] top-1/2 hidden -translate-y-1/2 lg:block"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="grid h-28 w-28 place-items-center rounded-3xl bg-white/15 backdrop-blur-sm">
            <Trophy className="h-16 w-16 fill-accent text-accent drop-shadow-[0_4px_12px_rgba(255,217,61,0.6)]" />
          </div>
        </motion.div>

        <Container className="relative text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-white/80"
          >
            Titara Studios
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 font-display text-5xl font-bold tracking-tight text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.25)] sm:text-6xl md:text-7xl"
          >
            Our Games
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mx-auto mt-4 max-w-xl text-lg text-white/90"
          >
            Polished, playful mobile games crafted with Unity — tap a game to dive in.
          </motion.p>
        </Container>
      </div>

      {/* Wave divider into the dark page */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-12 w-full sm:h-20"
      >
        <path
          fill="#0F172A"
          d="M0,64 C240,128 480,0 720,32 C960,64 1200,128 1440,64 L1440,120 L0,120 Z"
        />
      </svg>
    </section>
  )
}
