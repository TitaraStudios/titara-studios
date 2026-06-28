import { Helmet } from 'react-helmet-async'

interface SeoProps {
  title: string
  description?: string
  /** Path used to build the canonical URL, e.g. "/games". */
  path?: string
  image?: string
  type?: 'website' | 'article'
}

const SITE_NAME = 'Titara Studios'
const SITE_URL = 'https://titarastudios.com'
const DEFAULT_DESCRIPTION =
  'Titara Studios is a mobile game development studio creating polished, fun, high-quality games built with Unity for Android, iOS and PC.'

/**
 * Centralised, per-page SEO. Wraps react-helmet-async so every page can set a
 * unique title, description, canonical URL and social card with one component.
 */
export default function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  image = '/og-image.svg',
  type = 'website',
}: SeoProps) {
  const fullTitle = title === SITE_NAME ? title : `${title} — ${SITE_NAME}`
  const canonical = `${SITE_URL}${path}`
  const absoluteImage = image.startsWith('http') ? image : `${SITE_URL}${image}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={absoluteImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />
    </Helmet>
  )
}
