import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, Newspaper } from 'lucide-react'
import PageTransition from '@/components/layout/PageTransition'
import PageHeader from '@/components/layout/PageHeader'
import Seo from '@/components/seo/Seo'
import Container from '@/components/ui/Container'
import NewsCard from '@/components/news/NewsCard'
import { cn } from '@/lib/cn'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { newsCategories, newsPosts } from '@/data/news'

export default function News() {
  const [category, setCategory] = useState('all')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return newsPosts.filter((post) => {
      const matchesCategory = category === 'all' || post.category === category
      const matchesQuery =
        q === '' ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })
  }, [category, query])

  return (
    <PageTransition>
      <Seo
        title="News"
        description="Announcements, dev logs and behind-the-scenes stories from Titara Studios."
        path="/news"
      />
      <PageHeader
        eyebrow="Newsroom"
        title="News & Dev Logs"
        description="Announcements, development insights and stories from behind the scenes at Titara Studios."
      />

      <Container className="pb-8">
        {/* Controls */}
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          {/* Categories */}
          <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="News categories">
            {newsCategories.map((cat) => {
              const active = category === cat.id
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setCategory(cat.id)}
                  className={cn(
                    'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    active ? 'text-white' : 'text-slate-400 hover:text-white',
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="news-category-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-brand-gradient"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {!active && (
                    <span className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/5" />
                  )}
                  {cat.label}
                </button>
              )
            })}
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-72">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
              aria-label="Search news articles"
              className="w-full rounded-full border border-white/10 bg-white/5 py-2.5 pl-10 pr-9 text-sm text-white placeholder:text-slate-500 focus:border-secondary/50"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Results */}
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key={`${category}-${query}`}
              variants={staggerContainer(0.1)}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((post) => (
                <motion.div key={post.id} variants={fadeUp}>
                  <NewsCard post={post} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-white/15 py-20 text-center"
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/5 text-slate-400">
                <Newspaper className="h-7 w-7" />
              </span>
              <p className="text-lg text-slate-400">No articles match your search.</p>
              <button
                onClick={() => {
                  setQuery('')
                  setCategory('all')
                }}
                className="text-sm font-semibold text-secondary hover:text-secondary-400"
              >
                Reset filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </PageTransition>
  )
}
