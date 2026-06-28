import { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import LazyImage from '@/components/ui/LazyImage'
import { assetUrl } from '@/lib/asset'
import { cn } from '@/lib/cn'

interface GameGalleryProps {
  screenshots: string[]
  title: string
}

/**
 * Ubisoft-style media gallery: a large active frame, a thumbnail strip, and a
 * full-screen lightbox with keyboard + arrow navigation.
 */
export default function GameGallery({ screenshots, title }: GameGalleryProps) {
  const [active, setActive] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  const go = useCallback(
    (dir: number) => {
      setActive((prev) => (prev + dir + screenshots.length) % screenshots.length)
    },
    [screenshots.length],
  )

  // Keyboard controls while the lightbox is open.
  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(false)
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox, go])

  return (
    <div className="flex flex-col gap-4">
      {/* Active frame */}
      <button
        onClick={() => setLightbox(true)}
        aria-label="Open screenshot in full screen"
        className="group relative block overflow-hidden rounded-2xl border border-white/10"
      >
        <LazyImage
          src={assetUrl(screenshots[active])}
          alt={`${title} screenshot ${active + 1}`}
          ratioClassName="aspect-video"
        />
        <span className="absolute inset-0 grid place-items-center bg-ink/0 transition-colors group-hover:bg-ink/30">
          <span className="grid h-16 w-16 place-items-center rounded-full bg-white/10 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
            <Play className="h-7 w-7 translate-x-0.5 text-white" />
          </span>
        </span>
      </button>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto scrollbar-thin pb-1">
        {screenshots.map((shot, i) => (
          <button
            key={shot}
            onClick={() => setActive(i)}
            aria-label={`View screenshot ${i + 1}`}
            aria-current={i === active}
            className={cn(
              'relative aspect-video w-32 shrink-0 overflow-hidden rounded-xl border-2 transition-all',
              i === active
                ? 'border-secondary opacity-100'
                : 'border-transparent opacity-60 hover:opacity-100',
            )}
          >
            <img
              src={assetUrl(shot)}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] grid place-items-center bg-ink/95 p-4 backdrop-blur-xl"
            onClick={() => setLightbox(false)}
            role="dialog"
            aria-modal="true"
            aria-label={`${title} screenshots`}
          >
            <button
              onClick={() => setLightbox(false)}
              aria-label="Close"
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                go(-1)
              }}
              aria-label="Previous"
              className="absolute left-3 grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 sm:left-8"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>

            <motion.img
              key={active}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              src={assetUrl(screenshots[active])}
              alt={`${title} screenshot ${active + 1}`}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[80vh] w-auto max-w-[92vw] rounded-2xl border border-white/10 shadow-card"
            />

            <button
              onClick={(e) => {
                e.stopPropagation()
                go(1)
              }}
              aria-label="Next"
              className="absolute right-3 grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 sm:right-8"
            >
              <ChevronRight className="h-7 w-7" />
            </button>

            <p className="absolute bottom-6 text-sm text-slate-400">
              {active + 1} / {screenshots.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
