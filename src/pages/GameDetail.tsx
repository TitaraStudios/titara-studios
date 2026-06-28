import { useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowLeft,
  Play,
  Calendar,
  Code2,
  Tag,
  Smartphone,
  Apple,
  Monitor,
  CheckCircle2,
} from 'lucide-react'
import PageTransition from '@/components/layout/PageTransition'
import Seo from '@/components/seo/Seo'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import Reveal from '@/components/ui/Reveal'
import Particles from '@/components/ui/Particles'
import GlowOrb from '@/components/ui/GlowOrb'
import { LinkButton } from '@/components/ui/Button'
import GameGallery from '@/components/games/GameGallery'
import StoreButtons from '@/components/games/StoreButtons'
import NotFound from './NotFound'
import { getGameById } from '@/data/games'
import { assetUrl } from '@/lib/asset'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/animations'
import type { Platform, ReleaseStatus } from '@/types'

const PLATFORM_ICON: Record<Platform, typeof Smartphone> = {
  Android: Smartphone,
  iOS: Apple,
  PC: Monitor,
}

const STATUS_TONE: Record<ReleaseStatus, 'success' | 'accent' | 'secondary'> = {
  Released: 'success',
  'Coming Soon': 'accent',
  'In Development': 'secondary',
  'Early Access': 'secondary',
}

export default function GameDetail() {
  const { id } = useParams<{ id: string }>()
  const game = id ? getGameById(id) : undefined
  const heroRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])

  // Unknown id → reuse the friendly 404 page.
  if (!game) return <NotFound />

  const StatusTone = STATUS_TONE[game.status]

  return (
    <PageTransition>
      <Seo
        title={game.title}
        description={game.description}
        path={`/games/${game.id}`}
        image={game.banner}
        type="article"
      />

      {/* ---------- Cinematic hero ---------- */}
      <section
        ref={heroRef}
        className="relative flex min-h-[88vh] items-end overflow-hidden"
        aria-label={`${game.title} hero`}
      >
        {/* Parallax key art */}
        <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0">
          <img
            src={assetUrl(game.banner)}
            alt={`${game.title} key art`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/80 to-transparent" />
        </motion.div>

        <Particles count={20} />
        <GlowOrb className="left-[-6rem] top-1/4 bg-primary" size={400} />

        {/* Back link */}
        <Container className="absolute left-0 right-0 top-6 z-20">
          <Link
            to="/games"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink/50 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            All games
          </Link>
        </Container>

        {/* Hero content */}
        <Container className="relative z-10 pb-16">
          <motion.div
            style={{ y: contentY }}
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.img
              variants={fadeUp}
              src={assetUrl(game.logo)}
              alt=""
              aria-hidden="true"
              className="mb-6 h-20 w-20 rounded-2xl shadow-glow"
            />
            <motion.div variants={fadeUp} className="mb-4 flex flex-wrap items-center gap-2">
              <Badge tone={StatusTone}>{game.status}</Badge>
              <Badge tone="primary">{game.genre}</Badge>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
            >
              {game.title}
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-4 text-xl text-slate-300">
              {game.tagline}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#buy"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 font-display font-semibold text-white shadow-glow transition-transform hover:scale-105"
              >
                <Play className="h-5 w-5" />
                {game.status === 'Released' ? 'Get the game' : 'Pre-register'}
              </a>
              <a
                href="#trailer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 font-display font-semibold text-white backdrop-blur transition-colors hover:border-secondary hover:text-secondary"
              >
                Watch trailer
              </a>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ---------- Buy / edition box ---------- */}
      <section id="buy" className="relative -mt-px border-y border-white/10 bg-card/40">
        <Container className="py-8">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="flex items-center gap-5">
              <img
                src={assetUrl(game.logo)}
                alt=""
                aria-hidden="true"
                className="h-16 w-16 rounded-2xl"
              />
              <div>
                <p className="font-display text-lg font-bold text-white">
                  {game.title} — Standard Edition
                </p>
                <p className="text-2xl font-bold text-gradient">{game.price ?? 'Coming Soon'}</p>
                <div className="mt-1 flex flex-wrap gap-2">
                  {game.platforms.map((p) => {
                    const Icon = PLATFORM_ICON[p]
                    return (
                      <Badge key={p} tone="neutral" icon={<Icon className="h-3.5 w-3.5" />}>
                        {p}
                      </Badge>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="w-full lg:w-auto">
              <StoreButtons stores={game.stores} comingSoon={game.status !== 'Released'} />
            </div>
          </div>
        </Container>
      </section>

      {/* ---------- Trailer ---------- */}
      <Section id="trailer" aria-label="Trailer">
        <SectionHeading eyebrow="Watch" title="Official Trailer" className="mb-12" />
        <Reveal>
          <div className="group relative mx-auto aspect-video max-w-4xl overflow-hidden rounded-3xl border border-white/10">
            <img
              src={assetUrl(game.screenshots?.[1] ?? game.banner)}
              alt={`${game.title} trailer preview`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 grid place-items-center bg-ink/40">
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="grid h-20 w-20 cursor-pointer place-items-center rounded-full bg-brand-gradient shadow-glow"
              >
                <Play className="h-9 w-9 translate-x-1 text-white" />
              </motion.span>
            </div>
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-ink/70 px-4 py-1.5 text-xs text-slate-300 backdrop-blur">
              Trailer coming soon — placeholder preview
            </span>
          </div>
        </Reveal>
      </Section>

      {/* ---------- Features ---------- */}
      {game.features && game.features.length > 0 && (
        <Section className="pt-0" aria-label="Features">
          <div className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="Gameplay"
              title="Key Features"
              description="What makes the experience special."
            />
            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {game.features.map((feature) => {
                const Icon = feature.icon
                return (
                  <motion.div key={feature.title} variants={fadeUp}>
                    <Card className="h-full p-6">
                      <span className="mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary-200">
                        <Icon className="h-6 w-6" />
                      </span>
                      <h3 className="font-display text-lg font-semibold text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">
                        {feature.description}
                      </p>
                    </Card>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </Section>
      )}

      {/* ---------- Screenshots ---------- */}
      {game.screenshots && game.screenshots.length > 0 && (
        <Section className="pt-0" aria-label="Screenshots">
          <div className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="Media"
              title="Screenshots"
              description="A first look at the game in action."
            />
            <Reveal>
              <GameGallery screenshots={game.screenshots} title={game.title} />
            </Reveal>
          </div>
        </Section>
      )}

      {/* ---------- About / details ---------- */}
      <Section className="pt-0" aria-label="About the game">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              About the game
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-400">
              {game.longDescription ?? game.description}
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {game.platforms.map((p) => (
                <li key={p} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                  Available on {p}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <Card interactive={false} className="p-6">
              <h3 className="font-display text-lg font-semibold text-white">Game details</h3>
              <dl className="mt-4 flex flex-col divide-y divide-white/10">
                <div className="flex items-center justify-between gap-4 py-3">
                  <dt className="inline-flex items-center gap-2 text-sm text-slate-400">
                    <Calendar className="h-4 w-4" /> Release
                  </dt>
                  <dd className="text-sm font-medium text-white">{game.releaseDate ?? 'TBA'}</dd>
                </div>
                <div className="flex items-center justify-between gap-4 py-3">
                  <dt className="inline-flex items-center gap-2 text-sm text-slate-400">
                    <Tag className="h-4 w-4" /> Genre
                  </dt>
                  <dd className="text-sm font-medium text-white">{game.genre}</dd>
                </div>
                <div className="flex items-center justify-between gap-4 py-3">
                  <dt className="inline-flex items-center gap-2 text-sm text-slate-400">
                    <Code2 className="h-4 w-4" /> Developer
                  </dt>
                  <dd className="text-sm font-medium text-white">
                    {game.developer ?? 'Titara Studios'}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-sm text-slate-400">Platforms</dt>
                  <dd className="text-sm font-medium text-white">{game.platforms.join(', ')}</dd>
                </div>
              </dl>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* ---------- Bottom CTA ---------- */}
      <Section className="pt-0">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 px-6 py-14 text-center sm:px-12">
          <div aria-hidden="true" className="absolute inset-0 bg-brand-gradient opacity-90" />
          <div className="relative mx-auto flex max-w-xl flex-col items-center gap-5">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Be the first to play
            </h2>
            <p className="text-white/85">
              Follow Titara Studios for launch news, dev updates and playtest invites.
            </p>
            <LinkButton to="/contact" size="lg" variant="secondary">
              Get notified
            </LinkButton>
          </div>
        </div>
      </Section>
    </PageTransition>
  )
}
