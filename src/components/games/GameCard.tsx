import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Smartphone, Apple, Monitor, ArrowUpRight } from 'lucide-react'
import type { Game, Platform, ReleaseStatus } from '@/types'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import LazyImage from '@/components/ui/LazyImage'
import { assetUrl } from '@/lib/asset'
import StoreButtons from './StoreButtons'

const PLATFORM_ICON: Record<Platform, typeof Smartphone> = {
  Android: Smartphone,
  iOS: Apple,
  PC: Monitor,
}

const STATUS_TONE: Record<ReleaseStatus, 'success' | 'accent' | 'secondary' | 'neutral'> = {
  Released: 'success',
  'Coming Soon': 'accent',
  'In Development': 'secondary',
  'Early Access': 'secondary',
}

export default function GameCard({ game }: { game: Game }) {
  const StatusTone = STATUS_TONE[game.status]
  const comingSoon = game.status !== 'Released'

  return (
    <Card className="group flex h-full flex-col">
      {/* Banner with logo + glow */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <LazyImage
          src={assetUrl(game.banner)}
          alt={`${game.title} key art`}
          className="transition-transform duration-700 ease-out group-hover:scale-110"
          ratioClassName="h-full w-full"
        />
        {/* gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

        {/* per-card colored glow on hover */}
        <div
          aria-hidden="true"
          className="absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(420px circle at 50% 120%, ${game.accent}40, transparent 70%)`,
          }}
        />

        <div className="absolute left-4 top-4 flex gap-2">
          <Badge tone={StatusTone}>{game.status}</Badge>
        </div>

        {/* Hover affordance */}
        <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-ink/60 text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </span>

        {/* Full-banner link into the game's detail page */}
        <Link
          to={`/games/${game.id}`}
          className="absolute inset-0 z-20"
          aria-label={`View ${game.title}`}
        />

        {/* Logo lockup */}
        <div className="absolute bottom-4 left-4 flex items-center gap-3">
          <motion.img
            src={assetUrl(game.logo)}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="h-12 w-12 rounded-xl shadow-glow"
            whileHover={{ rotate: -6 }}
          />
          <div>
            <h3 className="font-display text-xl font-bold leading-tight text-white">
              {game.title}
            </h3>
            <p className="text-xs text-slate-300">{game.tagline}</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="primary">{game.genre}</Badge>
          {game.platforms.map((platform) => {
            const Icon = PLATFORM_ICON[platform]
            return (
              <Badge key={platform} tone="neutral" icon={<Icon className="h-3.5 w-3.5" />}>
                {platform}
              </Badge>
            )
          })}
        </div>

        <p className="flex-1 text-sm leading-relaxed text-slate-400">{game.description}</p>

        <Link
          to={`/games/${game.id}`}
          className="relative z-30 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-secondary transition-colors hover:text-secondary-400"
        >
          View game page
          <ArrowUpRight className="h-4 w-4" />
        </Link>

        <div className="border-t border-white/10 pt-4">
          <StoreButtons stores={game.stores} comingSoon={comingSoon} />
        </div>
      </div>
    </Card>
  )
}
