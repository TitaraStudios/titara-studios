import { Gamepad2, Lightbulb, Globe, Heart } from 'lucide-react'
import type { NewsCategory, NewsPost } from '@/types'

export const newsCategories: NewsCategory[] = [
  { id: 'all', label: 'All' },
  { id: 'announcements', label: 'Announcements' },
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
]

export const getCategoryLabel = (id: string): string =>
  newsCategories.find((c) => c.id === id)?.label ?? id

export const getPostById = (id: string): NewsPost | undefined =>
  newsPosts.find((post) => post.id === id)
