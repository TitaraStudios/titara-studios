import type { ComponentType, SVGProps } from 'react'
import type { GameStoreLinks, StoreId } from '@/types'
import { cn } from '@/lib/cn'
import { AppStoreIcon, GooglePlayIcon, ItchIcon, SteamIcon } from './StoreIcons'

interface StoreMeta {
  label: string
  Icon: ComponentType<SVGProps<SVGSVGElement>>
}

const STORE_META: Record<StoreId, StoreMeta> = {
  googlePlay: { label: 'Google Play', Icon: GooglePlayIcon },
  appStore: { label: 'App Store', Icon: AppStoreIcon },
  steam: { label: 'Steam', Icon: SteamIcon },
  itch: { label: 'itch.io', Icon: ItchIcon },
}

const ORDER: StoreId[] = ['googlePlay', 'appStore', 'steam', 'itch']

interface StoreButtonsProps {
  stores: GameStoreLinks
  className?: string
  /** When true, show all four stores as disabled if links are missing. */
  comingSoon?: boolean
}

/** Renders the available store buttons for a game card. */
export default function StoreButtons({ stores, className, comingSoon }: StoreButtonsProps) {
  const available = ORDER.filter((id) => stores[id])

  if (available.length === 0) {
    return (
      <p className={cn('text-sm font-medium text-slate-400', className)}>
        {comingSoon ? 'Store links coming soon' : 'Not yet available'}
      </p>
    )
  }

  return (
    <div className={cn('flex flex-wrap gap-2.5', className)}>
      {available.map((id) => {
        const { label, Icon } = STORE_META[id]
        const href = stores[id]!
        const isPlaceholder = href === '#'
        return (
          <a
            key={id}
            href={href}
            target={isPlaceholder ? undefined : '_blank'}
            rel="noopener noreferrer"
            aria-label={isPlaceholder ? `${label} — coming soon` : `Get it on ${label}`}
            aria-disabled={isPlaceholder}
            onClick={(e) => isPlaceholder && e.preventDefault()}
            className={cn(
              'inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-medium text-slate-200 transition-all duration-300',
              isPlaceholder
                ? 'cursor-default opacity-60'
                : 'hover:-translate-y-0.5 hover:border-secondary/50 hover:bg-white/10 hover:text-white',
            )}
          >
            <Icon className="h-4 w-4" />
            {label}
          </a>
        )
      })}
    </div>
  )
}
