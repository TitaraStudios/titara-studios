import { Sparkles, HeartHandshake, Rocket, ShieldCheck, Palette, Lightbulb } from 'lucide-react'
import type { CoreValue, TimelineEvent } from '@/types'

export const coreValues: CoreValue[] = [
  {
    id: 'polish',
    title: 'Polish First',
    description:
      'We sweat the details others skip. Every animation, transition and tap should feel premium.',
    icon: Sparkles,
  },
  {
    id: 'players',
    title: 'Players at the Center',
    description:
      'We design with empathy and listen to our community at every stage of development.',
    icon: HeartHandshake,
  },
  {
    id: 'ship',
    title: 'Ship & Iterate',
    description:
      'We prototype fast, kill our darlings and keep only the ideas that are genuinely fun.',
    icon: Rocket,
  },
  {
    id: 'integrity',
    title: 'Player-Friendly Integrity',
    description:
      'Fair monetization, respectful design and no dark patterns. We build trust, not traps.',
    icon: ShieldCheck,
  },
  {
    id: 'craft',
    title: 'Craftsmanship',
    description:
      'From art direction to code architecture, we treat game-making as a craft worth mastering.',
    icon: Palette,
  },
  {
    id: 'curiosity',
    title: 'Relentless Curiosity',
    description:
      'We experiment constantly, learn in public and chase the spark of "what if?".',
    icon: Lightbulb,
  },
]

export const timeline: TimelineEvent[] = [
  {
    id: '2026-founded',
    year: '2026',
    title: 'Titara Studios is born',
    description:
      'A small team of passionate developers unites around a single mission: craft mobile games players truly love.',
  },
  {
    id: '2026-prototype',
    year: '2026',
    title: 'Monster Cubes prototype',
    description:
      'Our first prototype clicks. The merge loop is addictive and the cube monsters steal hearts in early playtests.',
  },
  {
    id: '2026-community',
    year: '2026',
    title: 'Community playtests open',
    description:
      'We open closed playtests and start building a community of players who shape the game with us.',
  },
  {
    id: 'next-launch',
    year: 'Soon',
    title: 'Monster Cubes launch',
    description:
      'Our debut title heads to Android and iOS. The first of many games from the Titara family.',
  },
]
