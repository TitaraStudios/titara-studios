import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import { LinkButton } from '@/components/ui/Button'
import NewsCard from '@/components/news/NewsCard'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/animations'
import { newsPosts } from '@/data/news'

export default function LatestNews() {
  const latest = newsPosts.slice(0, 3)

  return (
    <Section aria-label="Latest news">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Newsroom"
            title="Latest News"
            description="Announcements, dev logs and behind-the-scenes from the studio."
            className="max-w-xl"
          />
          <div className="hidden sm:block">
            <LinkButton to="/news" variant="outline" size="sm">
              All articles
              <ArrowRight className="h-4 w-4" />
            </LinkButton>
          </div>
        </div>

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {latest.map((post) => (
            <motion.div key={post.id} variants={fadeUp}>
              <NewsCard post={post} />
            </motion.div>
          ))}
        </motion.div>

        <div className="sm:hidden">
          <LinkButton to="/news" variant="outline" size="md" className="w-full">
            All articles
            <ArrowRight className="h-5 w-5" />
          </LinkButton>
        </div>
      </div>
    </Section>
  )
}
