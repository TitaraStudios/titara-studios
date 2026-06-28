import Section from '@/components/ui/Section'
import StatCard from './StatCard'
import { stats } from '@/data/stats'

export default function Stats() {
  return (
    <Section aria-label="Studio statistics" className="py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-card/80 to-ink p-8 sm:p-12">
        {/* ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </Section>
  )
}
