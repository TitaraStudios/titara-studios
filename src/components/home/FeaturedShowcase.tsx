import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, ArrowRight, Smartphone, Apple, Monitor } from 'lucide-react'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'
import LazyImage from '@/components/ui/LazyImage'
import { assetUrl } from '@/lib/asset'
import { cn } from '@/lib/cn'
import { featuredGames } from '@/data/games'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import type { Platform } from '@/types'

const PLATFORM_ICON: Record<Platform, typeof Smartphone> = {
  Android: Smartphone,
  iOS: Apple,
  PC: Monitor,
}

const AUTO_MS = 7000

/**
 * Large, playful featured-game presenter (the Moonfrog-style "hit games"
 * showcase): oversized key art, per-game accent theming, Download / Learn More
 * CTAs, and a tab strip to switch between the studio's current titles.
 */
export default function FeaturedShowcase() {
  const [active, setActive] = useState(0)
  const reduced = usePrefersReducedMotion()
  const game = featuredGames[active]

  // Auto-advance between featured games (paused for reduced-motion users).
  useEffect(() => {
    if (reduced || featuredGames.length < 2) return
    const t = setInterval(
      () => setActive((prev) => (prev + 1) % featuredGames.length),
      AUTO_MS,
    )
    return () => clearInterval(t)
  }, [reduced])

  if (!game) return null

  return (
    <Section aria-label="Featured games" className="overflow-hidden">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Now in the studio"
          title="Our Games"
          description="The titles we're pouring our hearts into right now."
        />

        {/* Showcase card */}
        <div
          className="relative overflow-hidden rounded-[2rem] border border-white/10 p-2 transition-colors duration-500"
          style={{ background: `linear-gradient(135deg, ${game.accent}22, transparent 60%)` }}
        >
          {/* moving accent glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl transition-colors duration-700"
            style={{ background: `${game.accent}55` }}
          />

          <div className="relative grid items-center gap-6 rounded-[1.6rem] bg-ink/60 p-6 backdrop-blur-sm lg:grid-cols-2 lg:gap-10 lg:p-10">
            {/* Art */}
            <AnimatePresence mode="wait">
              <motion.div
                key={game.id}
                initial={{ opacity: 0, x: reduced ? 0 : 40, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: reduced ? 0 : -40, scale: 0.96 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative order-1 lg:order-2"
              >
                <div
                  className="overflow-hidden rounded-3xl border-2 shadow-2xl"
                  style={{ borderColor: `${game.accent}66` }}
                >
                  <LazyImage
                    src={assetUrl(game.banner)}
                    alt={`${game.title} key art`}
                    ratioClassName="aspect-[16/11]"
                  />
                </div>
                {/* floating logo badge */}
                <motion.img
                  src={assetUrl(game.logo)}
                  alt=""
                  aria-hidden="true"
                  className="absolute -bottom-5 -left-5 h-20 w-20 rounded-2xl border-4 border-ink shadow-glow"
                  animate={reduced ? undefined : { y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Info */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${game.id}-info`}
                initial={{ opacity: 0, y: reduced ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduced ? 0 : -12 }}
                transition={{ duration: 0.45 }}
                className="order-2 flex flex-col gap-5 lg:order-1"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone="accent">{game.status}</Badge>
                  <span
                    className="rounded-full px-3 py-1 text-xs font-semibold text-white"
                    style={{ background: game.accent }}
                  >
                    {game.genre}
                  </span>
                </div>

                <h3 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                  {game.title}
                </h3>
                <p className="text-lg font-medium" style={{ color: game.accent }}>
                  {game.tagline}
                </p>
                <p className="max-w-lg text-base leading-relaxed text-slate-300">
                  {game.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {game.platforms.map((p) => {
                    const Icon = PLATFORM_ICON[p]
                    return (
                      <Badge key={p} tone="neutral" icon={<Icon className="h-3.5 w-3.5" />}>
                        {p}
                      </Badge>
                    )
                  })}
                </div>

                <div className="mt-1 flex flex-wrap items-center gap-3">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      to={`/games/${game.id}`}
                      className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-display font-semibold text-white shadow-glow"
                      style={{ background: game.accent }}
                    >
                      <Download className="h-5 w-5" />
                      {game.status === 'Released' ? 'Download Now' : 'Pre-register'}
                    </Link>
                  </motion.div>
                  <Link
                    to={`/games/${game.id}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-display font-semibold text-white transition-colors hover:border-white/40"
                  >
                    Learn More
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Tab strip to switch games */}
        <div className="flex flex-wrap justify-center gap-3">
          {featuredGames.map((g, i) => {
            const isActive = i === active
            return (
              <button
                key={g.id}
                onClick={() => setActive(i)}
                aria-label={`Show ${g.title}`}
                aria-current={isActive}
                className={cn(
                  'group flex items-center gap-3 rounded-2xl border px-4 py-3 transition-all duration-300',
                  isActive
                    ? 'border-white/20 bg-white/10'
                    : 'border-white/10 bg-white/5 opacity-60 hover:opacity-100',
                )}
                style={isActive ? { boxShadow: `0 0 24px ${g.accent}55` } : undefined}
              >
                <img
                  src={assetUrl(g.logo)}
                  alt=""
                  aria-hidden="true"
                  className="h-9 w-9 rounded-xl"
                />
                <span className="text-left">
                  <span className="block font-display text-sm font-semibold text-white">
                    {g.title}
                  </span>
                  <span className="block text-xs text-slate-400">{g.genre}</span>
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
