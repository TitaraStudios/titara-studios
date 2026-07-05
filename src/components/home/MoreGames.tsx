import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import { LinkButton } from '@/components/ui/Button'
import GameTile from '@/components/games/GameTile'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/animations'
import { games } from '@/data/games'

/** Colorful tile strip of the full catalogue below the featured showcase. */
export default function MoreGames() {
  return (
    <Section className="pt-0" aria-label="More games">
      <div className="flex flex-col items-center gap-10">
        <SectionHeading
          eyebrow="The full lineup"
          title="More From Titara"
          description="Every title, from shipping soon to top-secret."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid w-full grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4"
        >
          {games.map((game) => (
            <motion.div key={game.id} variants={fadeUp}>
              <GameTile game={game} />
            </motion.div>
          ))}
        </motion.div>

        <LinkButton to="/games" variant="outline" size="md">
          Explore all games
          <ArrowRight className="h-5 w-5" />
        </LinkButton>
      </div>
    </Section>
  )
}
