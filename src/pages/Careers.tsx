import { motion } from 'framer-motion'
import { Briefcase, Bell, Heart, Zap, Globe2, GraduationCap } from 'lucide-react'
import PageTransition from '@/components/layout/PageTransition'
import PageHeader from '@/components/layout/PageHeader'
import Seo from '@/components/seo/Seo'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'
import { AnchorButton } from '@/components/ui/Button'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/animations'
import { contactEmail } from '@/data/navigation'

const perks = [
  { icon: Globe2, title: 'Remote-first', body: 'Work from wherever you do your best work.' },
  { icon: Zap, title: 'Real ownership', body: 'Small team, big impact — your ideas ship.' },
  { icon: Heart, title: 'Player-first culture', body: 'We build games we are proud of.' },
  { icon: GraduationCap, title: 'Growth budget', body: 'Learn, experiment and level up your craft.' },
]

export default function Careers() {
  return (
    <PageTransition>
      <Seo
        title="Careers"
        description="Join Titara Studios. We're a remote-first team crafting polished mobile games with Unity. No openings right now — but we're always meeting great people."
        path="/careers"
      />
      <PageHeader
        eyebrow="Careers"
        title="Build the future of play with us"
        description="We're a small, passionate team crafting games players love. While we don't have open roles right now, we're always happy to meet talented people."
      />

      {/* No openings state */}
      <Section className="pt-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-card/60 px-6 py-16 text-center sm:px-12"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[36rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
          />

          {/* Illustration */}
          <div className="relative mx-auto mb-8 grid h-40 w-40 place-items-center">
            <motion.div
              className="absolute inset-0 rounded-full border border-dashed border-white/15"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute left-2 top-2 h-10 w-10 rounded-xl bg-secondary shadow-glow-cyan"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute bottom-3 right-1 h-8 w-8 rounded-lg bg-accent shadow-glow"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            />
            <span className="grid h-24 w-24 place-items-center rounded-3xl bg-brand-gradient shadow-glow">
              <Briefcase className="h-10 w-10 text-white" />
            </span>
          </div>

          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            No openings currently
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-400">
            We're not actively hiring at the moment — but we grow fast. Send us your portfolio
            and we'll reach out when the right role opens up.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <AnchorButton
              href={`mailto:${contactEmail}?subject=Future%20opportunities%20at%20Titara`}
              external={false}
              size="md"
            >
              <Bell className="h-5 w-5" />
              Introduce yourself
            </AnchorButton>
          </div>
        </motion.div>
      </Section>

      {/* Perks — sets up easy expansion later */}
      <Section className="pt-0">
        <div className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Life at Titara"
            title="What we'd offer"
            description="When we do open roles, here's the kind of place you'd be joining."
          />
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {perks.map((perk) => {
              const Icon = perk.icon
              return (
                <motion.div key={perk.title} variants={fadeUp}>
                  <Card className="h-full p-6 text-center">
                    <span className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary-200">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {perk.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-400">{perk.body}</p>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </Section>
    </PageTransition>
  )
}
