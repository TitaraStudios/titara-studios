import { motion } from 'framer-motion'
import { Target, Eye, Trophy } from 'lucide-react'
import PageTransition from '@/components/layout/PageTransition'
import PageHeader from '@/components/layout/PageHeader'
import Seo from '@/components/seo/Seo'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'
import Reveal from '@/components/ui/Reveal'
import FounderSection from '@/components/about/FounderSection'
import CTASection from '@/components/home/CTASection'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/animations'
import { coreValues, timeline } from '@/data/values'

const whyPoints = [
  {
    title: 'A polish-obsessed team',
    body: 'We treat the last 10% — the juice, the feel, the feedback — as the most important 10%.',
  },
  {
    title: 'Unity expertise',
    body: 'Years of hands-on Unity experience means smooth performance on devices players actually own.',
  },
  {
    title: 'Player-first values',
    body: 'No dark patterns. Fair, respectful design that keeps players coming back because they want to.',
  },
  {
    title: 'Small, fast, focused',
    body: 'A lean team that prototypes quickly, iterates honestly and ships when it is genuinely fun.',
  },
]

export default function About() {
  return (
    <PageTransition>
      <Seo
        title="About"
        description="The story, mission and values behind Titara Studios — a team obsessed with crafting games players love."
        path="/about"
      />
      <PageHeader
        eyebrow="About Us"
        title="We make games we'd want to play"
        description="Titara Studios is a mobile game development studio founded on a simple idea: care more, polish harder and put players first."
      />

      {/* Studio story */}
      <Section className="pt-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-primary/25 via-ink to-secondary/20">
              <motion.div
                className="absolute left-[15%] top-[18%] h-28 w-28 rounded-3xl bg-primary shadow-glow"
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute bottom-[20%] right-[18%] h-20 w-20 rounded-2xl bg-accent shadow-glow"
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              />
              <div className="absolute inset-0 grid place-items-center">
                <span className="font-display text-3xl font-bold text-white/90">Est. 2026</span>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-5">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Our Story
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-lg leading-relaxed text-slate-400">
                Titara Studios began with a few developers who loved games a little too much.
                After years of building for bigger teams, we wanted to focus on one thing:
                crafting mobile games that feel premium, play beautifully and respect the
                player.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-slate-400">
                Today we are heads-down on our debut title, Monster Cubes — a juicy merge-puzzle
                adventure — with more projects bubbling in the lab. We move fast, prototype
                often and keep only the ideas that are genuinely fun.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="pt-0">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <Card interactive={false} className="h-full p-8">
              <span className="mb-5 inline-grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary-200">
                <Target className="h-6 w-6" />
              </span>
              <h3 className="font-display text-2xl font-bold text-white">Our Mission</h3>
              <p className="mt-3 text-slate-400">
                To craft polished, joyful mobile games that millions of players genuinely love —
                built with care, integrity and an obsessive eye for detail.
              </p>
            </Card>
          </Reveal>
          <Reveal delay={0.08}>
            <Card interactive={false} className="h-full p-8">
              <span className="mb-5 inline-grid h-12 w-12 place-items-center rounded-xl bg-secondary/15 text-secondary-400">
                <Eye className="h-6 w-6" />
              </span>
              <h3 className="font-display text-2xl font-bold text-white">Our Vision</h3>
              <p className="mt-3 text-slate-400">
                To become a globally recognised studio known for quality over quantity — where
                every release raises the bar for what a mobile game can feel like.
              </p>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* Core values */}
      <Section className="pt-0">
        <div className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="What drives us"
            title="Core Values"
            description="The principles behind every decision we make."
          />
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {coreValues.map((value) => {
              const Icon = value.icon
              return (
                <motion.div key={value.id} variants={fadeUp}>
                  <Card className="h-full p-6">
                    <span className="mb-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-accent-400">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {value.description}
                    </p>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </Section>

      {/* Timeline */}
      <Section className="pt-0">
        <div className="flex flex-col gap-12">
          <SectionHeading
            align="left"
            eyebrow="Our Journey"
            title="The road so far"
            description="From a shared idea to our first launch — and everything in between."
          />
          <ol className="relative ml-3 border-l border-white/10">
            {timeline.map((event, i) => (
              <motion.li
                key={event.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="mb-10 ml-6 last:mb-0"
              >
                <span className="absolute -left-[9px] grid h-4 w-4 place-items-center rounded-full bg-brand-gradient shadow-glow ring-4 ring-ink" />
                <span className="font-display text-sm font-semibold uppercase tracking-wider text-secondary">
                  {event.year}
                </span>
                <h3 className="mt-1 font-display text-xl font-bold text-white">{event.title}</h3>
                <p className="mt-2 max-w-2xl text-slate-400">{event.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Founder */}
      <FounderSection />

      {/* Why Titara */}
      <Section className="pt-0">
        <div className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Why us"
            title="Why Titara Studios"
            description="Plenty of studios make mobile games. Here's what makes ours different."
          />
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-6 md:grid-cols-2"
          >
            {whyPoints.map((point) => (
              <motion.div
                key={point.title}
                variants={fadeUp}
                className="flex gap-4 rounded-2xl border border-white/10 bg-card/60 p-6"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary-200">
                  <Trophy className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {point.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{point.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      <CTASection />
    </PageTransition>
  )
}
