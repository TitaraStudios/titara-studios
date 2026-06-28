import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

interface UseCountUpOptions {
  /** Target number to count to. */
  end: number
  /** Whether the animation should run (e.g. when scrolled into view). */
  active: boolean
  /** Duration in ms. */
  duration?: number
  /** Decimal places to preserve (e.g. 4.9 -> 1). */
  decimals?: number
}

/**
 * Animates a number from 0 -> end using requestAnimationFrame.
 * Respects reduced-motion by snapping straight to the end value.
 */
export function useCountUp({
  end,
  active,
  duration = 1600,
  decimals = 0,
}: UseCountUpOptions): number {
  const reduced = usePrefersReducedMotion()
  const [value, setValue] = useState(0)
  const frame = useRef<number>()
  const startTime = useRef<number>()

  useEffect(() => {
    if (!active) return

    if (reduced) {
      setValue(end)
      return
    }

    const factor = 10 ** decimals

    const tick = (now: number) => {
      if (startTime.current === undefined) startTime.current = now
      const elapsed = now - startTime.current
      const progress = Math.min(elapsed / duration, 1)
      // easeOutCubic for a satisfying deceleration
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(end * eased * factor) / factor)

      if (progress < 1) {
        frame.current = requestAnimationFrame(tick)
      }
    }

    frame.current = requestAnimationFrame(tick)
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current)
      startTime.current = undefined
    }
  }, [active, end, duration, decimals, reduced])

  return value
}
