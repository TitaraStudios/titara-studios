import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { cn } from '@/lib/cn'

interface ParticlesProps {
  count?: number
  className?: string
}

interface Particle {
  id: number
  left: number
  top: number
  size: number
  duration: number
  delay: number
  color: string
}

const COLORS = ['#6C5CE7', '#00D2FF', '#FFD93D']

/**
 * Floating particle field rendered behind the hero. Deterministic per-mount
 * (seeded by index) so it stays SSR-safe and avoids layout thrash. Disabled
 * entirely when the user prefers reduced motion.
 */
export default function Particles({ count = 26, className }: ParticlesProps) {
  const reduced = usePrefersReducedMotion()

  const particles = useMemo<Particle[]>(() => {
    // Simple deterministic pseudo-random so particles are stable across renders.
    const rand = (seed: number) => {
      const x = Math.sin(seed * 99.123) * 10000
      return x - Math.floor(x)
    }
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: rand(i + 1) * 100,
      top: rand(i + 50) * 100,
      size: 2 + rand(i + 100) * 5,
      duration: 6 + rand(i + 150) * 10,
      delay: rand(i + 200) * 6,
      color: COLORS[i % COLORS.length],
    }))
  }, [count])

  if (reduced) return null

  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
    >
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
          }}
          animate={{
            y: [0, -28, 0],
            x: [0, 12, 0],
            opacity: [0.15, 0.7, 0.15],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
