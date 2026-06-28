import { Link } from 'react-router-dom'
import { Clock, ArrowRight } from 'lucide-react'
import type { NewsPost } from '@/types'
import { getCategoryLabel } from '@/data/news'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import LazyImage from '@/components/ui/LazyImage'
import { assetUrl } from '@/lib/asset'

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

interface NewsCardProps {
  post: NewsPost
  featured?: boolean
}

export default function NewsCard({ post, featured = false }: NewsCardProps) {
  return (
    <Card className={`group flex h-full flex-col ${featured ? 'lg:flex-row' : ''}`}>
      <div
        className={`relative overflow-hidden ${
          featured ? 'lg:w-1/2' : ''
        } aspect-[16/9]`}
      >
        <LazyImage
          src={assetUrl(post.cover)}
          alt={post.title}
          className="transition-transform duration-700 group-hover:scale-110"
          ratioClassName="h-full w-full"
        />
        <div className="absolute left-4 top-4">
          <Badge tone="secondary">{getCategoryLabel(post.category)}</Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-3 text-xs text-slate-400">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true">•</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {post.readingTime} min read
          </span>
        </div>

        <h3
          className={`font-display font-bold leading-tight text-white transition-colors group-hover:text-secondary ${
            featured ? 'text-2xl' : 'text-lg'
          }`}
        >
          {post.title}
        </h3>

        <p className="flex-1 text-sm leading-relaxed text-slate-400">{post.excerpt}</p>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xs font-medium text-slate-500">By {post.author}</span>
          <Link
            to={`/news`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary transition-colors hover:text-secondary-400"
            aria-label={`Read more: ${post.title}`}
          >
            Read more
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </Card>
  )
}
