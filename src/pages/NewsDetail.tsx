import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Calendar, Rocket } from 'lucide-react'
import PageTransition from '@/components/layout/PageTransition'
import Seo from '@/components/seo/Seo'
import Container from '@/components/ui/Container'
import Badge from '@/components/ui/Badge'
import LazyImage from '@/components/ui/LazyImage'
import Reveal from '@/components/ui/Reveal'
import { LinkButton } from '@/components/ui/Button'
import { getPostById, getCategoryLabel } from '@/data/news'
import { assetUrl } from '@/lib/asset'
import { staggerContainer, fadeUp } from '@/lib/animations'
import NotFound from './NotFound'

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function NewsDetail() {
  const { id } = useParams<{ id: string }>()
  const post = id ? getPostById(id) : undefined

  if (!post) return <NotFound />

  return (
    <PageTransition>
      <Seo
        title={post.title}
        description={post.excerpt}
        path={`/news/${post.id}`}
        image={post.cover}
        type="article"
      />

      <article>
        {/* Cover */}
        <div className="relative">
          <div className="relative aspect-[21/9] max-h-[520px] w-full overflow-hidden">
            <LazyImage
              src={assetUrl(post.cover)}
              alt={post.title}
              ratioClassName="h-full w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
          </div>

          <Container className="absolute inset-x-0 top-6">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink/50 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              All news
            </Link>
          </Container>
        </div>

        <Container className="relative -mt-16 pb-8">
          <div className="mx-auto max-w-3xl">
            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-4"
            >
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
                <Badge tone="secondary">{getCategoryLabel(post.category)}</Badge>
                <span className="inline-flex items-center gap-1.5 text-sm text-slate-400">
                  <Calendar className="h-4 w-4" />
                  {formatDate(post.date)}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-slate-400">
                  <Clock className="h-4 w-4" />
                  {post.readingTime} min read
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl"
              >
                <span className="mr-2">🚀</span>
                {post.title}
              </motion.h1>

              <motion.p variants={fadeUp} className="text-sm font-medium text-slate-500">
                By {post.author}
              </motion.p>
            </motion.div>

            {/* Body */}
            <div className="mt-10 flex flex-col gap-6">
              {post.content?.map((para, i) => (
                <Reveal key={i} delay={i * 0.03}>
                  <p
                    className={
                      i === 0
                        ? 'text-xl leading-relaxed text-slate-200'
                        : 'text-lg leading-relaxed text-slate-400'
                    }
                  >
                    {para}
                  </p>
                </Reveal>
              ))}
            </div>

            {/* Pillars */}
            {post.highlights && post.highlights.length > 0 && (
              <Reveal>
                <div className="mt-10 grid grid-cols-2 gap-4 rounded-3xl border border-white/10 bg-card/60 p-6 sm:grid-cols-4">
                  {post.highlights.map(({ label, icon: Icon }) => (
                    <div key={label} className="flex flex-col items-center gap-3 text-center">
                      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                        <Icon className="h-7 w-7" />
                      </span>
                      <span className="font-display text-sm font-semibold uppercase tracking-wider text-white">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            {/* Closing */}
            {post.closing && (
              <Reveal>
                <div className="mt-10 flex items-center gap-3 rounded-2xl border border-primary/30 bg-primary/10 px-6 py-5">
                  <Rocket className="h-6 w-6 shrink-0 text-accent" />
                  <p className="font-display text-lg font-bold text-white">
                    ⚡ {post.closing}
                  </p>
                </div>
              </Reveal>
            )}

            {/* Footer nav */}
            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
              <LinkButton to="/news" variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4" />
                Back to news
              </LinkButton>
              <LinkButton to="/games" size="sm">
                Explore our games
              </LinkButton>
            </div>
          </div>
        </Container>
      </article>
    </PageTransition>
  )
}
