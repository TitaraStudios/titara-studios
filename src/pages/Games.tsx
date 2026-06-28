import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '@/components/layout/PageTransition'
import Seo from '@/components/seo/Seo'
import Container from '@/components/ui/Container'
import GamesHero from '@/components/games/GamesHero'
import GameTile from '@/components/games/GameTile'
import { cn } from '@/lib/cn'
import { staggerContainer, fadeUp } from '@/lib/animations'
import { games } from '@/data/games'
import type { ReleaseStatus } from '@/types'

const FILTERS: { id: 'all' | ReleaseStatus; label: string }[] = [
  { id: 'all', label: 'All Games' },
  { id: 'Coming Soon', label: 'Coming Soon' },
  { id: 'In Development', label: 'In Development' },
  { id: 'Released', label: 'Released' },
]

export default function Games() {
  const [filter, setFilter] = useState<'all' | ReleaseStatus>('all')

  const visibleGames = useMemo(
    () => (filter === 'all' ? games : games.filter((g) => g.status === filter)),
    [filter],
  )

  return (
    <PageTransition>
      <Seo
        title="Games"
        description="Explore the games crafted by Titara Studios — including Monster Cubes, our debut merge-puzzle adventure."
        path="/games"
      />

      <GamesHero />

      <Container className="pb-20">
        {/* Filter pills */}
        <div
          className="mb-10 flex flex-wrap justify-center gap-2.5"
          role="tablist"
          aria-label="Filter games"
        >
          {FILTERS.map((f) => {
            const active = filter === f.id
            return (
              <button
                key={f.id}
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(f.id)}
                className={cn(
                  'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  active ? 'text-white' : 'text-slate-400 hover:text-white',
                )}
              >
                {active && (
                  <motion.span
                    layoutId="games-filter-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-brand-gradient"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                {!active && (
                  <span className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/5" />
                )}
                {f.label}
              </button>
            )
          })}
        </div>

        {visibleGames.length > 0 ? (
          <motion.div
            key={filter}
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4"
          >
            {visibleGames.map((game) => (
              <motion.div key={game.id} variants={fadeUp}>
                <GameTile game={game} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="rounded-2xl border border-dashed border-white/15 py-20 text-center">
            <p className="text-lg text-slate-400">No games in this category yet — stay tuned!</p>
          </div>
        )}
      </Container>
    </PageTransition>
  )
}
