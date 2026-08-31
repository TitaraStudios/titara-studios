import { Sparkles, Layers, Trophy, Wifi, Heart, Users, Zap, Clock, Globe } from 'lucide-react'
import type { Game } from '@/types'

export const games: Game[] = [
  {
    id: 'blockture',
    title: 'Blockture',
    tagline: 'Cut. Scatter. Solve.',
    genre: 'Picture Puzzle',
    platforms: ['Web', 'Android'],
    status: 'Coming Soon',
    description:
      'A hand-drawn picture is cut into irregular blocks and scattered across the board — drag every piece home before the clock runs out. Forgiving, one-handed and quietly moreish, with an album of finished pictures to fill.',
    banner: '/assets/games/blockture-banner.webp',
    logo: '/assets/games/blockture-logo.webp',
    accent: '#1F7C77',
    featured: true,
    stores: {
      crazyGames: '#',
      googlePlay: '#',
    },
    longDescription:
      'Blockture takes a warm, hand-drawn illustration, slices it into irregular blocks and scatters them across a grid. Your job is simply to put it back — but the picture can be rebuilt anywhere on the board, so there is no single correct answer, only the shape you find. Levels are timed and scored out of three stars, hints are there when a piece will not reveal itself, and every picture you finish is kept in an album you can return to. Built in Unity to run instantly in a browser and just as smoothly on the phone in your pocket.',
    releaseDate: 'Coming 2026',
    developer: 'Titara Studios',
    price: 'Free to play',
    features: [
      {
        title: 'Cut From the Picture',
        description:
          'Every level slices a hand-drawn illustration into irregular blocks — no two puzzles come apart the same way.',
        icon: Layers,
      },
      {
        title: 'Beat the Clock',
        description:
          'Levels are timed and scored out of three stars, and a near miss can always be rescued with thirty more seconds.',
        icon: Clock,
      },
      {
        title: 'Fill the Album',
        description:
          'Finished pictures go into a growing gallery you can flip back through any time.',
        icon: Sparkles,
      },
      {
        title: 'Browser or Phone',
        description:
          'Play instantly on the web with nothing to install, or take the same game with you on Android.',
        icon: Globe,
      },
    ],
  },
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
    id: 'love-score',
    title: 'Love Score',
    tagline: 'Match. Score. Celebrate.',
    genre: 'Casual Social',
    platforms: ['Android', 'iOS'],
    status: 'In Development',
    description:
      'A playful, feel-good social game about connection. Answer fun prompts, build your Love Score with friends and partners, and unlock delightful daily challenges. Light-hearted, charming and impossible to put down.',
    banner: '/assets/games/love-score-banner.svg',
    logo: '/assets/games/love-score-logo.svg',
    accent: '#FF6B9D',
    featured: true,
    stores: {
      googlePlay: '#',
      appStore: '#',
    },
    longDescription:
      'Love Score is a warm, playful social game about the little things that bring people together. Answer bite-sized prompts, compare answers with friends and partners, and watch your Love Score climb. With charming art, daily challenges and shareable results, it is designed to spark smiles and start conversations. Another polished title in development at Titara Studios.',
    releaseDate: 'Coming 2026',
    developer: 'Titara Studios',
    price: 'Free to play',
    features: [
      {
        title: 'Fun Compatibility Prompts',
        description: 'Answer quick, playful questions and discover your Love Score with anyone.',
        icon: Heart,
      },
      {
        title: 'Play With Friends',
        description: 'Invite friends and partners, compare answers and celebrate your matches.',
        icon: Users,
      },
      {
        title: 'Daily Challenges',
        description: 'Fresh prompts and streaks every day keep the fun going.',
        icon: Zap,
      },
      {
        title: 'Shareable Results',
        description: 'Beautiful, share-ready result cards made to spread the love.',
        icon: Sparkles,
      },
    ],
    screenshots: [
      '/assets/games/screenshots/ls-1.svg',
      '/assets/games/screenshots/ls-2.svg',
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
