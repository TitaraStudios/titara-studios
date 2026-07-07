import { Link, useParams } from 'react-router-dom'
import PageTransition from '@/components/layout/PageTransition'
import PageHeader from '@/components/layout/PageHeader'
import Seo from '@/components/seo/Seo'
import Container from '@/components/ui/Container'
import NotFound from './NotFound'
import { getGamePrivacy } from '@/data/gameLegal'
import { getGameById } from '@/data/games'
import { supportEmail } from '@/data/navigation'

/** Per-game privacy policy, e.g. /games/monster-cubes/privacy. */
export default function GamePrivacy() {
  const { id } = useParams<{ id: string }>()
  const doc = id ? getGamePrivacy(id) : undefined
  const game = id ? getGameById(id) : undefined

  // No dedicated policy for this game → friendly 404 rather than a blank page.
  if (!doc) return <NotFound />

  return (
    <PageTransition>
      <Seo
        title={`${doc.game} — Privacy Policy`}
        description={`Privacy Policy for ${doc.game}, a game by Titara Studios.`}
        path={`/games/${id}/privacy`}
      />
      <PageHeader eyebrow="Legal" title={`${doc.game} — Privacy Policy`} description={doc.intro} />

      <Container className="pb-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500">
            <p>
              Last updated: {doc.updated} · Effective: {doc.effective}
            </p>
            {game && (
              <Link to={`/games/${id}`} className="text-secondary hover:text-secondary-400">
                ← Back to {doc.game}
              </Link>
            )}
          </div>

          <div className="flex flex-col gap-8">
            {doc.sections.map((section, i) => (
              <section key={section.heading}>
                <h2 className="font-display text-xl font-bold text-white">
                  {i + 1}. {section.heading}
                </h2>
                {section.body && (
                  <p className="mt-3 leading-relaxed text-slate-400">{section.body}</p>
                )}

                {section.bullets && (
                  <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 text-slate-400">
                    {section.bullets.map((b) => (
                      <li key={b} className="leading-relaxed">
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {section.table && (
                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full border-collapse text-left text-sm">
                      <thead>
                        <tr className="border-b border-white/10">
                          {section.table.columns.map((col) => (
                            <th
                              key={col}
                              className="py-2 pr-4 font-semibold text-slate-200"
                            >
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row) => (
                          <tr key={row.join('|')} className="border-b border-white/5">
                            {row.map((cell, ci) => (
                              <td
                                key={ci}
                                className="py-2 pr-4 align-top text-slate-400"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-white/10 bg-card/60 p-6">
            <p className="text-sm text-slate-400">
              Questions about this policy? Email us at{' '}
              <a
                href={`mailto:${supportEmail}`}
                className="font-medium text-secondary hover:text-secondary-400"
              >
                {supportEmail}
              </a>
              . See also our{' '}
              <Link to="/terms" className="font-medium text-secondary hover:text-secondary-400">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="font-medium text-secondary hover:text-secondary-400">
                studio-wide Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </Container>
    </PageTransition>
  )
}
