import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Game } from '@/types'
import LazyImage from '@/components/ui/LazyImage'
import { assetUrl } from '@/lib/asset'

/**
 * Colorful, square game tile inspired by casual-studio game grids: full-bleed
 * art, a vibrant accent glow, the title overlaid at the bottom, and a springy
 * hover lift. Links straight into the game's detail page.
 */
export default function GameTile({ game }: { game: Game }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative"
    >
      <Link
        to={`/games/${game.id}`}
        aria-label={`View ${game.title}`}
        className="relative block aspect-square overflow-hidden rounded-3xl border-2 border-white/10"
      >
        {/* Colored backdrop using the game's accent so even wide art fills nicely */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: `linear-gradient(140deg, ${game.accent}, ${game.accent}22)`,
          }}
        />
        <LazyImage
          src={assetUrl(game.banner)}
          alt={`${game.title} art`}
          ratioClassName="absolute inset-0 h-full w-full"
          className="transition-transform duration-500 group-hover:scale-110"
        />

        {/* Bottom scrim + title */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 pt-12">
          <h3 className="font-display text-lg font-bold leading-tight text-white drop-shadow-sm">
            {game.title}
          </h3>
          <p className="text-xs font-medium text-white/80">{game.genre}</p>
        </div>

        {/* Status pill */}
        <span className="absolute right-3 top-3 rounded-full bg-black/45 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
          {game.status}
        </span>

        {/* Accent ring glow on hover */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 ring-4 transition-opacity duration-300 group-hover:opacity-100"
          style={{ boxShadow: `0 0 40px ${game.accent}99`, color: game.accent }}
        />
      </Link>
    </motion.div>
  )
}
