import { useState, type ImgHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  /** Aspect ratio wrapper, e.g. 'aspect-video'. */
  ratioClassName?: string
  wrapperClassName?: string
}

/**
 * Image with native lazy-loading, async decoding and a shimmer placeholder
 * that fades out once the asset has loaded. Keeps pages fast and avoids
 * layout shift via an aspect-ratio wrapper.
 */
export default function LazyImage({
  src,
  alt,
  className,
  ratioClassName,
  wrapperClassName,
  ...props
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={cn('relative overflow-hidden', ratioClassName, wrapperClassName)}>
      {!loaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 animate-pulse bg-gradient-to-br from-card to-ink"
        />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={cn(
          'h-full w-full object-cover transition-opacity duration-700',
          loaded ? 'opacity-100' : 'opacity-0',
          className,
        )}
        {...props}
      />
    </div>
  )
}
