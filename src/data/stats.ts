import { Gamepad2, Users, Star, Globe2 } from 'lucide-react'
import type { StatItem } from '@/types'

export const stats: StatItem[] = [
  { id: 'games', label: 'Games in the pipeline', value: 3, icon: Gamepad2 },
  { id: 'wishlists', label: 'Community wishlists', value: 25, suffix: 'K+', icon: Users },
  { id: 'rating', label: 'Avg. playtest rating', value: 4.9, suffix: '/5', icon: Star },
  { id: 'countries', label: 'Players reached in', value: 60, suffix: '+', icon: Globe2 },
]
