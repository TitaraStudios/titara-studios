import type { LucideIcon } from 'lucide-react'

export type Platform = 'Android' | 'iOS' | 'PC'

export type ReleaseStatus = 'Released' | 'Coming Soon' | 'In Development' | 'Early Access'

export type StoreId = 'googlePlay' | 'appStore' | 'steam' | 'itch'

export interface GameStoreLinks {
  googlePlay?: string
  appStore?: string
  steam?: string
  itch?: string
}

export interface GameFeature {
  title: string
  description: string
  icon: LucideIcon
}

export interface Game {
  id: string
  title: string
  tagline: string
  genre: string
  platforms: Platform[]
  status: ReleaseStatus
  description: string
  banner: string
  logo: string
  accent: string // tailwind-friendly hex for per-card glow
  stores: GameStoreLinks
  featured?: boolean

  // --- Extended detail-page fields (all optional) ---
  /** Longer marketing copy shown on the game's detail page. */
  longDescription?: string
  /** Human-readable release date or window, e.g. "Coming 2026". */
  releaseDate?: string
  developer?: string
  /** Price label, e.g. "Free", "Coming Soon", "$4.99". */
  price?: string
  /** Key selling-point features for the detail page. */
  features?: GameFeature[]
  /** Screenshot/media asset paths for the gallery. */
  screenshots?: string[]
}

export interface NewsCategory {
  id: string
  label: string
}

export interface NewsPost {
  id: string
  title: string
  excerpt: string
  category: string // NewsCategory id
  date: string // ISO date
  readingTime: number // minutes
  cover: string
  author: string
}

export interface StatItem {
  id: string
  label: string
  value: number
  suffix?: string
  prefix?: string
  icon: LucideIcon
}

export interface CoreValue {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export interface TimelineEvent {
  id: string
  year: string
  title: string
  description: string
}

export interface NavLink {
  label: string
  to: string
}

export interface SocialLink {
  label: string
  href: string
  icon: LucideIcon
}
