import {
  Sparkles,
  Layers,
  Trophy,
  Wifi,
  Heart,
  Users,
  Zap,
  Clock,
  Globe,
  Crosshair,
  ShieldAlert,
  Grid3x3,
  Star,
  Waypoints,
  Hand,
  Infinity as InfinityIcon,
  Bomb,
  Orbit,
  TrainFront,
  Brain,
  Gift,
} from 'lucide-react'
import type { Game } from '@/types'

export const games: Game[] = [
  {
    id: 'train-brain',
    title: 'Train Brain',
    tagline: 'Untangle the trains. Clear the way.',
    genre: 'Puzzle',
    platforms: ['Android'],
    status: 'Released',
    description:
      'A packed rail yard and only one way out for each train. Tap a train to send it rolling, but only when the track ahead of its engine is clear. Find the right order, beat the clock and empty the board in 1000 levels.',
    banner: '/assets/games/train-brain-banner.webp',
    logo: '/assets/games/train-brain-logo.webp',
    accent: '#8B5CF6',
    featured: true,
    stores: {
      googlePlay: 'https://play.google.com/store/apps/details?id=com.titarastudios.trainbrain',
    },
    longDescription:
      'Train Brain is a relaxing logic puzzle about traffic jams on the rails. Every board is crowded with colourful trains pointing in different directions. Tap one and it drives straight ahead and off the board, as long as nothing stands in its way. Send a train into another and you lose a heart, so look before you tap. Boards start small and grow into huge tangles of 28 trains or more, with a timer to keep you sharp. Stuck? Use a Hint to find a free train, Undo a bump, or Freeze the clock, all paid for with coins you earn by clearing levels. Come back every day for the Daily challenge and its bonus coins. Built in Unity for quick sessions on your phone.',
    releaseDate: 'October 2026',
    developer: 'Titara Studios',
    price: 'Free to play',
    features: [
      {
        title: '1000 Levels',
        description:
          'From a handful of trains to giant rail yards, easy to hard, with new boards that keep going after level 1000.',
        icon: TrainFront,
      },
      {
        title: 'One Simple Rule',
        description:
          'A train leaves only when the track ahead of its engine is clear. Easy to learn, surprisingly tricky to master.',
        icon: Brain,
      },
      {
        title: 'Hint, Undo, Freeze',
        description:
          'Three boosters for tough boards, bought with coins earned in the game. No real-money purchases.',
        icon: Sparkles,
      },
      {
        title: 'Daily Challenge',
        description:
          'A fresh board every day with bonus coins for clearing it, plus an optional evening reminder.',
        icon: Gift,
      },
    ],
    screenshots: [
      '/assets/games/screenshots/tb-1.webp',
      '/assets/games/screenshots/tb-2.webp',
      '/assets/games/screenshots/tb-3.webp',
      '/assets/games/screenshots/tb-4.webp',
    ],
  },
  {
    id: 'alien-smash',
    title: 'Alien Smash',
    tagline: 'Pick a weapon. Smash a world.',
    genre: 'Destruction Sandbox',
    platforms: ['Android'],
    status: 'Coming Soon',
    description:
      'Five alien worlds, nine ridiculous weapons and no rules. Carve canyons with a plasma laser, rain meteors on dino-alien villages, drop a black hole into the crust, then crack the whole planet open and watch it fall apart.',
    banner: '/assets/games/alien-smash-banner.webp',
    logo: '/assets/games/alien-smash-logo.webp',
    accent: '#7CFF4F',
    featured: true,
    stores: {
      googlePlay: '#',
    },
    longDescription:
      'Alien Smash is a planet-destruction sandbox you can play with one thumb. Spin a living alien world, choose from nine weapons and start wrecking: the plasma laser burns trenches into the surface, missiles and meteors leave smoking craters, an invader swarm hunts the locals, and a nova nuke flattens everything in sight. Every hit deforms the ground, scatters the creatures and topples their buildings until the planet finally shatters into pieces. Then pick the next world, from the jungles of Verdant Prime to the frozen tundra of Cryonis, and do it all again. No timers and no fail state, just smashing. Built in Unity for the phone in your pocket.',
    releaseDate: 'Coming 2026',
    developer: 'Titara Studios',
    price: 'Free to play',
    features: [
      {
        title: 'Nine Weapons',
        description:
          'Plasma laser, missile barrage, meteor shower, rail cannon, invader swarm, rogue asteroid, nova nuke, black hole and the planet cracker.',
        icon: Bomb,
      },
      {
        title: 'Five Alien Worlds',
        description:
          'Jungle, volcano, ice, crystal and toxic swamp worlds, each with its own creatures, buildings and colours.',
        icon: Orbit,
      },
      {
        title: 'Real Destruction',
        description:
          'Craters dig into the surface, creatures scatter, buildings fall, and a badly damaged world breaks into pieces.',
        icon: Zap,
      },
      {
        title: 'One Thumb, No Rules',
        description:
          'Tap or hold to fire, drag to spin, pinch to zoom. No timers, no lives, no fail state.',
        icon: Hand,
      },
    ],
    screenshots: [
      '/assets/games/screenshots/as-1.webp',
      '/assets/games/screenshots/as-2.webp',
      '/assets/games/screenshots/as-3.webp',
      '/assets/games/screenshots/as-4.webp',
    ],
  },
  {
    id: 'rope-puzzle',
    title: 'Rope Puzzle',
    tagline: 'Drag. Untangle. Match.',
    genre: 'Logic Puzzle',
    platforms: ['Android'],
    status: 'Released',
    description:
      'Coloured ropes are tied between knots on a board of pegs. Drag the knots from peg to peg until the ropes draw exactly the picture on the target card. Calm, one-handed and endlessly satisfying, across a thousand levels.',
    banner: '/assets/games/rope-puzzle-banner.webp',
    logo: '/assets/games/rope-puzzle-logo.webp',
    accent: '#20C9C0',
    featured: true,
    stores: {
      googlePlay: 'https://play.google.com/store/apps/details?id=com.titarastudios.ropepuzzle',
    },
    longDescription:
      'Rope Puzzle is a calm logic game about shapes. Every level shows a target picture made of coloured ropes, and a board where those same ropes have been pulled out of place. Drag a knot onto a new peg and every rope tied to it follows, so the trick is working out which knot to move first. Any arrangement that draws the target picture counts, so there is often more than one way to solve it. Boards grow from 3×3 to 7×7 as you play, adding more knots, more colours and more crossings, with an easier breather level after every short break. Built in Unity for the phone in your pocket.',
    releaseDate: 'October 2026',
    developer: 'Titara Studios',
    price: 'Free to play',
    features: [
      {
        title: 'Match the Picture',
        description:
          'Move the knots until the ropes draw exactly the shape on the target card. Any layout that draws the same picture wins.',
        icon: Waypoints,
      },
      {
        title: 'One Finger, No Timer',
        description:
          'Drag a knot, drop it on a peg. No clock and no lives, so you can think each move through.',
        icon: Hand,
      },
      {
        title: '1,000 Levels',
        description:
          'Boards grow from 3×3 to 7×7 with more knots, colours and crossings as you go.',
        icon: InfinityIcon,
      },
      {
        title: 'Satisfying to Solve',
        description:
          'Ropes glow as they click into place, with sound and haptics on every snap and a burst of confetti on the solve.',
        icon: Sparkles,
      },
    ],
    screenshots: [
      '/assets/games/screenshots/rp-1.webp',
      '/assets/games/screenshots/rp-2.webp',
      '/assets/games/screenshots/rp-3.webp',
      '/assets/games/screenshots/rp-4.webp',
    ],
  },
  {
    id: 'couple-defense',
    title: 'Couple Defense',
    tagline: 'Protect her. Stop the thief!',
    genre: 'Puzzle Shooter',
    platforms: ['Android', 'iOS'],
    status: 'In Development',
    description:
      'A one-tap tactical puzzler on a grid. Tap a bodyguard and his bullet flies in a straight line until something stops it — a wall, a crate, a thug, or the girl in the red dress you are meant to be protecting. Fire in the wrong order and you lose her.',
    banner: '/assets/games/couple-defense-banner.webp',
    logo: '/assets/games/couple-defense-logo.webp',
    accent: '#3D8BEF',
    featured: true,
    stores: {
      googlePlay: '#',
      appStore: '#',
    },
    longDescription:
      'Couple Defense turns a shoot-out into a puzzle. Every character stands on a tile facing one direction, and a tap sends a single bullet down that line until it hits something. Thugs go down in one shot, armoured ones need more, crates splinter and open a lane, walls never move, and sliding shields make a clear shot a question of timing. The catch is the girlfriend: she cannot shoot, cannot move, and one stray bullet ends the level. Forty-five hand-built levels teach a new idea at a time — firing order, cover, armour, limited magazines — and each one has a par shot count to beat for three stars. Built in Unity for the phone in your pocket.',
    releaseDate: 'Coming 2026',
    developer: 'Titara Studios',
    price: 'Free to play',
    features: [
      {
        title: 'One Tap, One Bullet',
        description:
          'Tap a bodyguard and his shot travels in a straight line until something stops it. No aiming, no timing — just the order you fire in.',
        icon: Crosshair,
      },
      {
        title: 'She Is in the Line of Fire',
        description:
          'The girl in the red dress cannot shoot and cannot move. Catch her with a stray bullet and the level is over.',
        icon: ShieldAlert,
      },
      {
        title: '45 Hand-Built Levels',
        description:
          'Walls, breakable crates, armoured thugs, limited magazines and sliding shields — one new idea at a time.',
        icon: Grid3x3,
      },
      {
        title: 'Beat Par for Three Stars',
        description:
          'Every level can be cleared in a set number of shots. Find that line and take all three stars.',
        icon: Star,
      },
    ],
    screenshots: [
      '/assets/games/screenshots/cd-1.webp',
      '/assets/games/screenshots/cd-2.webp',
      '/assets/games/screenshots/cd-3.webp',
      '/assets/games/screenshots/cd-4.webp',
    ],
  },
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
