import { motion } from 'framer-motion'
import { GraduationCap, Gamepad2, Sparkles } from 'lucide-react'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import Badge from '@/components/ui/Badge'
import { founder } from '@/data/founder'

export default function FounderSection() {
  return (
    <Section className="pt-0" aria-label="Meet the founder">
      <div className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="The Team"
          title="Meet the Founder"
          description="Titara Studios is an independent, founder-led game studio."
        />

        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          {/* Avatar / visual */}
          <Reveal className="relative mx-auto w-full max-w-sm">
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-primary/30 via-card to-secondary/20 p-2">
              <div className="relative grid h-full w-full place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-secondary">
                {/* Monogram */}
                <span className="font-display text-[9rem] font-bold leading-none text-white/95 drop-shadow-lg">
                  S
                </span>
                {/* Floating cubes */}
                <motion.div
                  className="absolute left-5 top-5 h-12 w-12 rounded-xl bg-accent shadow-glow"
                  animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute bottom-6 right-6 h-9 w-9 rounded-lg bg-white/30 backdrop-blur"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                />
              </div>
            </div>
            {/* Current project tag */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
              <Badge tone="accent" icon={<Sparkles className="h-3.5 w-3.5" />}>
                Building: {founder.currentProject}
              </Badge>
            </div>
          </Reveal>

          {/* Bio */}
          <div className="flex flex-col gap-5">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-3xl font-bold text-white sm:text-4xl">
                  {founder.name}
                </h3>
                <Badge tone="primary">{founder.role}</Badge>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-secondary" />
                  {founder.credential}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Gamepad2 className="h-4 w-4 text-secondary" />
                  {founder.location}
                </span>
              </div>
            </Reveal>

            {founder.bio.map((para, i) => (
              <Reveal key={i} delay={0.1 + i * 0.05}>
                <p className="text-lg leading-relaxed text-slate-400">{para}</p>
              </Reveal>
            ))}

            {/* Fact pills */}
            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {founder.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-xl border border-white/10 bg-card/60 p-3 text-center"
                  >
                    <p className="text-xs uppercase tracking-wider text-slate-500">{fact.label}</p>
                    <p className="mt-1 text-sm font-semibold text-white">{fact.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Socials */}
            <Reveal delay={0.25}>
              <div className="flex items-center gap-3">
                {founder.socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={`${founder.name} on ${label}`}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all hover:-translate-y-1 hover:border-secondary/50 hover:text-secondary"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  )
}
