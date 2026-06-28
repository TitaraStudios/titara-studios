import { Sparkles, Layers, Trophy, Wifi } from 'lucide-react'
import type { Game } from '@/types'

export const games: Game[] = [
  {
    id: 'monster-cubes',
    title: 'Monster Cubes',
    tagline: 'Merge. Evolve. Conquer.',
    genre: 'Merge Puzzle',
    platforms: ['Android', 'iOS'],
    status: 'Coming Soon',
    description:
      'A juicy, satisfying merge-puzzle adventure where adorable cube monsters combine, evolve and grow. Snappy controls, delightful animations and endless "just one more merge" gameplay — built from the ground up in Unity.',
    banner: '/assets/games/monster-cubes-banner.svg',
    logo: '/assets/games/monster-cubes-logo.svg',
    accent: '#6C5CE7',
    featured: true,
    stores: {
      googlePlay: '#',
      appStore: '#',
    },
    longDescription:
      'Monster Cubes is our debut title — a polished merge-puzzle adventure crafted with obsessive attention to feel. Drag, drop and merge adorable cube monsters to evolve them into ever-stranger creatures, chase satisfying combo chains, and fill out your monster collection. Every merge is tuned for maximum "juice": springy animations, punchy sound and that irresistible just-one-more-merge loop. Designed to run buttery-smooth on the phone in your pocket.',
    releaseDate: 'Coming 2026',
    developer: 'Titara Studios',
    price: 'Free to play',
    features: [
      {
        title: 'Satisfying Merge Loop',
        description: 'Drag, drop and merge cube monsters with snappy, juicy feedback on every match.',
        icon: Layers,
      },
      {
        title: 'Evolve & Collect',
        description: 'Combine monsters to unlock dozens of quirky evolutions and complete your collection.',
        icon: Sparkles,
      },
      {
        title: 'Chase High Scores',
        description: 'Build epic combo chains and climb the leaderboards against players worldwide.',
        icon: Trophy,
      },
      {
        title: 'Play Anywhere',
        description: 'Pick up and play in seconds, online or off — optimised for every device.',
        icon: Wifi,
      },
    ],
    screenshots: [
      '/assets/games/screenshots/mc-1.svg',
      '/assets/games/screenshots/mc-2.svg',
      '/assets/games/screenshots/mc-3.svg',
      '/assets/games/screenshots/mc-4.svg',
    ],
  },
  {
    id: 'project-nova',
    title: 'Project Nova',
    tagline: 'An unannounced cosmic adventure.',
    genre: 'Action Arcade',
    platforms: ['Android', 'iOS', 'PC'],
    status: 'In Development',
    description:
      'A fast-paced arcade experience set among the stars. We are still in the lab on this one — wishlist soon and be the first to know when Nova goes live.',
    banner: '/assets/games/project-nova-banner.svg',
    logo: '/assets/games/monster-cubes-logo.svg',
    accent: '#00D2FF',
    featured: true,
    stores: {
      steam: '#',
    },
    longDescription:
      'Project Nova is an early-stage prototype exploring fast, reflex-driven arcade action set against a neon cosmic backdrop. Details are still under wraps while we find the fun — follow along to be the first to know when we are ready to share more.',
    releaseDate: 'TBA',
    developer: 'Titara Studios',
    price: 'Coming Soon',
  },
  {
    id: 'project-ember',
    title: 'Project Ember',
    tagline: 'Something warm is coming.',
    genre: 'Casual Strategy',
    platforms: ['Android', 'iOS'],
    status: 'In Development',
    description:
      'A cozy strategy game with a spark of competition. Details are under wraps, but we cannot wait to share more with the Titara community.',
    banner: '/assets/games/project-ember-banner.svg',
    logo: '/assets/games/monster-cubes-logo.svg',
    accent: '#FFD93D',
    stores: {},
    longDescription:
      'Project Ember is a cozy-yet-competitive strategy concept in early development. We are keeping the embers low for now, but there is real warmth to this one. Stay tuned.',
    releaseDate: 'TBA',
    developer: 'Titara Studios',
    price: 'Coming Soon',
  },
]

export const featuredGames = games.filter((g) => g.featured)

export const getGameById = (id: string): Game | undefined =>
  games.find((game) => game.id === id)
