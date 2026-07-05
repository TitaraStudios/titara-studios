import { Gamepad2, Lightbulb, Globe, Heart } from 'lucide-react'
import type { NewsCategory, NewsPost } from '@/types'

export const newsCategories: NewsCategory[] = [
  { id: 'all', label: 'All' },
  { id: 'announcements', label: 'Announcements' },
  { id: 'devlog', label: 'Dev Log' },
]

export const newsPosts: NewsPost[] = [
  {
    id: 'a-new-journey-begins',
    title: 'A New Journey Begins!',
    excerpt:
      'Today marks an exciting milestone as we officially introduce Titara Studios — founded with a passion for creativity, innovation and game development.',
    category: 'announcements',
    date: '2026-07-05',
    readingTime: 2,
    cover: '/assets/news/titara-launch.png',
    author: 'Titara Studios',
    content: [
      'Today marks an exciting milestone as we officially introduce Titara Studios.',
      'Founded with a passion for creativity, innovation, and game development, our mission is to create experiences that bring joy, challenge, and unforgettable adventures to players around the world.',
      'At Titara Studios, we believe games are more than entertainment — they are worlds to explore, stories to experience, and memories to create.',
      'This is just the beginning of our journey. We are already working on exciting projects and look forward to sharing our development process, achievements, and upcoming games with you.',
      'Thank you to everyone supporting us as we take our first step forward.',
    ],
    highlights: [
      { label: 'Play', icon: Gamepad2 },
      { label: 'Create', icon: Lightbulb },
      { label: 'Explore', icon: Globe },
      { label: 'Inspire', icon: Heart },
    ],
    closing: 'The game is just beginning.',
  },
  {
    id: 'monster-cubes-sneak-peek',
    title: 'Sneak Peek: Monster Cubes',
    excerpt:
      'A first look at our upcoming mobile puzzle game — Monster Cubes! A simple-to-learn yet satisfying swipe puzzle where every move counts.',
    category: 'devlog',
    date: '2026-07-04',
    readingTime: 2,
    cover: '/assets/news/monster-cubes-sneak-peek.png',
    author: 'Santhosh',
    content: [
      'Excited to share a sneak peek of our upcoming mobile puzzle game — Monster Cubes! 🎮👾',
      'A simple-to-learn yet satisfying puzzle experience where every swipe moves all cubes at once. Merge matching monster cubes, solve clever challenges, and clear the board with strategic moves.',
      'Currently in development using Unity, we are focusing on creating a smooth, satisfying and engaging puzzle experience.',
      'Here is an early look at the game concept and visual direction. Feedback is always welcome!',
    ],
    featureList: [
      'Easy-to-learn swipe mechanics',
      'Unique monster cube characters',
      'Logic-based puzzle challenges',
      'Colorful visuals and juicy animations',
      'Designed for quick and fun gameplay sessions',
    ],
    closing: 'More updates coming soon — stay tuned!',
  },
]

export const getCategoryLabel = (id: string): string =>
  newsCategories.find((c) => c.id === id)?.label ?? id

export const getPostById = (id: string): NewsPost | undefined =>
  newsPosts.find((post) => post.id === id)
