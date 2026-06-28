import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import { LinkButton } from '@/components/ui/Button'
import GameCard from '@/components/games/GameCard'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/animations'
import { featuredGames } from '@/data/games'

export default function FeaturedGames() {
  return (
    <Section aria-label="Featured games">
      <div className="flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Our Games"
          title="Featured Titles"
          description="Polished experiences crafted with care. Here is what we are building right now."
        />

        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid w-full gap-8 md:grid-cols-2"
        >
          {featuredGames.map((game) => (
            <motion.div key={game.id} variants={fadeUp}>
              <GameCard game={game} />
            </motion.div>
          ))}
        </motion.div>

        <LinkButton to="/games" variant="outline" size="md">
          View all games
          <ArrowRight className="h-5 w-5" />
        </LinkButton>
      </div>
    </Section>
  )
}
