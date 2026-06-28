import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Tone = 'primary' | 'secondary' | 'accent' | 'neutral' | 'success'

const tones: Record<Tone, string> = {
  primary: 'bg-primary/15 text-primary-200 border-primary/30',
  secondary: 'bg-secondary/15 text-secondary-400 border-secondary/30',
  accent: 'bg-accent/15 text-accent-400 border-accent/30',
  neutral: 'bg-white/10 text-slate-200 border-white/15',
  success: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
}

interface BadgeProps {
  children: ReactNode
  tone?: Tone
  className?: string
  icon?: ReactNode
}

/** Small pill used for genres, platforms, statuses and section eyebrows. */
export default function Badge({ children, tone = 'neutral', className, icon }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-wide',
        tones[tone],
        className,
      )}
    >
      {icon}
      {children}
    </span>
  )
}
