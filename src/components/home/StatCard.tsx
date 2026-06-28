import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { StatItem } from '@/types'
import { useCountUp } from '@/hooks/useCountUp'

/** Single stat with a count-up animation that fires when scrolled into view. */
export default function StatCard({ stat }: { stat: StatItem }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const decimals = Number.isInteger(stat.value) ? 0 : 1
  const value = useCountUp({ end: stat.value, active: inView, decimals })

  const Icon = stat.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-card/60 p-6 text-center backdrop-blur-sm"
    >
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary-200">
        <Icon className="h-6 w-6" />
      </span>
      <div className="font-display text-4xl font-bold text-white">
        {stat.prefix}
        {decimals === 1 ? value.toFixed(1) : Math.round(value)}
        {stat.suffix}
      </div>
      <p className="text-sm text-slate-400">{stat.label}</p>
    </motion.div>
  )
}
