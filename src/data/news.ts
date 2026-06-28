import type { NewsCategory, NewsPost } from '@/types'

export const newsCategories: NewsCategory[] = [
  { id: 'all', label: 'All' },
  { id: 'announcements', label: 'Announcements' },
  { id: 'devlog', label: 'Dev Log' },
  { id: 'studio', label: 'Studio' },
  { id: 'community', label: 'Community' },
]

export const newsPosts: NewsPost[] = [
  {
    id: 'announcing-monster-cubes',
    title: 'Announcing Monster Cubes — Our First Title',
    excerpt:
      'Today we are thrilled to pull back the curtain on Monster Cubes, the merge-puzzle game we have been crafting since day one at Titara Studios.',
    category: 'announcements',
    date: '2026-06-20',
    readingTime: 4,
    cover: '/assets/news/news-1.svg',
    author: 'Titara Team',
  },
  {
    id: 'building-juicy-merge-mechanics',
    title: 'Devlog #1: Building Juicy Merge Mechanics in Unity',
    excerpt:
      'A behind-the-scenes look at how we tune feel, feedback and "game juice" to make every merge in Monster Cubes feel impossibly satisfying.',
    category: 'devlog',
    date: '2026-06-12',
    readingTime: 7,
    cover: '/assets/news/news-2.svg',
    author: 'Engineering',
  },
  {
    id: 'how-we-work',
    title: 'How a Small Studio Ships Polished Games',
    excerpt:
      'Our philosophy on quality over quantity, rapid prototyping and why we obsess over the first 60 seconds of every game.',
    category: 'studio',
    date: '2026-06-02',
    readingTime: 5,
    cover: '/assets/news/news-3.svg',
    author: 'Titara Team',
  },
  {
    id: 'join-our-community',
    title: 'Join the Titara Community — Playtesters Wanted',
    excerpt:
      'We are opening a closed playtest for Monster Cubes. Here is how to sign up and help shape the game before launch.',
    category: 'community',
    date: '2026-05-24',
    readingTime: 3,
    cover: '/assets/news/news-1.svg',
    author: 'Community',
  },
  {
    id: 'art-direction-deep-dive',
    title: 'Devlog #2: Finding the Art Direction for Monster Cubes',
    excerpt:
      'From mood boards to final shaders — the journey to a vibrant, premium look that still runs smoothly on mid-range phones.',
    category: 'devlog',
    date: '2026-05-15',
    readingTime: 6,
    cover: '/assets/news/news-2.svg',
    author: 'Art Team',
  },
  {
    id: 'titara-studios-founded',
    title: 'Titara Studios Is Open for Business',
    excerpt:
      'Our founding story: why we left bigger teams to build a studio focused on one thing — games players genuinely love.',
    category: 'studio',
    date: '2026-05-01',
    readingTime: 4,
    cover: '/assets/news/news-3.svg',
    author: 'Founders',
  },
]

export const getCategoryLabel = (id: string): string =>
  newsCategories.find((c) => c.id === id)?.label ?? id
