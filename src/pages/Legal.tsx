import PageTransition from '@/components/layout/PageTransition'
import PageHeader from '@/components/layout/PageHeader'
import Seo from '@/components/seo/Seo'
import Container from '@/components/ui/Container'
import { contactEmail } from '@/data/navigation'

interface LegalProps {
  variant: 'privacy' | 'terms'
}

const CONTENT = {
  privacy: {
    title: 'Privacy Policy',
    eyebrow: 'Legal',
    intro:
      'Titara Studios is an independent mobile game studio. This Privacy Policy explains, in plain language, what limited data our games and website collect and how we handle it. We believe in collecting as little as possible. This is a template — have it reviewed by a legal professional before launch.',
    sections: [
      {
        heading: 'Who we are',
        body: 'Titara Studios ("we", "us", "our") is an indie game studio founded by Santhosh, developing mobile games for Android, iOS and PC. This policy applies to our website and all games we publish, including Monster Cubes.',
      },
      {
        heading: 'Information we collect',
        body: 'You do not need to create an account or give us personal details to play our games. Our games and website may automatically collect limited, non-identifying technical data such as device model, operating system version, country, language, anonymous identifiers, and gameplay events (levels reached, features used, crashes). If you email us, we receive the details you choose to send.',
      },
      {
        heading: 'How we use information',
        body: 'We use this data only to run and improve our games — fixing bugs and crashes, understanding which features players enjoy, balancing difficulty, and measuring performance. We do not sell your personal data, and we do not use it to identify you personally.',
      },
      {
        heading: 'Analytics',
        body: 'We may use analytics tools (for example Unity Analytics or Google Firebase) to collect aggregated, anonymous usage statistics. These tools help a small team understand how our games are performing so we can make them better.',
      },
      {
        heading: 'Advertising',
        body: 'Some of our games are free and may show ads through third-party ad networks (such as AppLovin MAX, Google AdMob or Unity Ads). These networks may use device identifiers to show more relevant ads. Where required, we ask for your consent first, and you can usually reset or limit ad tracking in your device settings.',
      },
      {
        heading: 'In-app purchases',
        body: 'Where our games offer optional in-app purchases, payment is handled entirely by the app store (Apple App Store or Google Play). We never see or store your full payment card details — only confirmation that a purchase was made.',
      },
      {
        heading: "Children's privacy",
        body: 'Some of our games may appeal to children. We do not knowingly collect personal information from children, and we aim to comply with laws such as COPPA (US) and GDPR-K (EU). In games directed at children we limit data collection and use only child-appropriate, non-personalised ads. If you believe a child has provided us personal data, contact us and we will delete it.',
      },
      {
        heading: 'Third-party services',
        body: 'The analytics, advertising and app-store services above are operated by other companies with their own privacy policies. We choose partners that respect player privacy, but we are not responsible for their practices — please review their policies for details.',
      },
      {
        heading: 'Data retention & security',
        body: 'We keep data only as long as needed for the purposes above, then delete or anonymise it. We take reasonable technical measures to protect the limited data we hold, though no method of transmission over the internet is ever 100% secure.',
      },
      {
        heading: 'Your rights',
        body: 'Depending on where you live, you may have the right to access, correct, or delete your data, or to object to certain processing. Because we collect so little, this is usually straightforward — just email us and we will help.',
      },
      {
        heading: 'Changes to this policy',
        body: 'As our studio and games grow, we may update this policy. We will post the new version here with an updated date. Significant changes will be highlighted in-game or on this site where appropriate.',
      },
    ],
  },
  terms: {
    title: 'Terms of Service',
    eyebrow: 'Legal',
    intro:
      'These placeholder Terms of Service outline the basic rules for using Titara Studios products. Replace this copy with your finalised legal text before launch.',
    sections: [
      {
        heading: 'Acceptance of terms',
        body: 'By accessing our website or playing our games, you agree to these terms. If you do not agree, please discontinue use.',
      },
      {
        heading: 'Use of our products',
        body: 'Our games and content are provided for personal, non-commercial entertainment. You agree not to misuse, reverse-engineer or redistribute our products.',
      },
      {
        heading: 'Intellectual property',
        body: 'All game content, artwork, trademarks and code remain the property of Titara Studios unless otherwise stated.',
      },
      {
        heading: 'Limitation of liability',
        body: 'Our products are provided "as is". To the extent permitted by law, Titara Studios is not liable for indirect or incidental damages.',
      },
    ],
  },
} as const

export default function Legal({ variant }: LegalProps) {
  const data = CONTENT[variant]

  return (
    <PageTransition>
      <Seo title={data.title} path={`/${variant}`} />
      <PageHeader eyebrow={data.eyebrow} title={data.title} description={data.intro} />

      <Container className="pb-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-10 text-sm text-slate-500">Last updated: June 2026</p>
          <div className="flex flex-col gap-8">
            {data.sections.map((section, i) => (
              <section key={section.heading}>
                <h2 className="font-display text-xl font-bold text-white">
                  {i + 1}. {section.heading}
                </h2>
                <p className="mt-3 leading-relaxed text-slate-400">{section.body}</p>
              </section>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-white/10 bg-card/60 p-6">
            <p className="text-sm text-slate-400">
              Questions about this page? Email us at{' '}
              <a
                href={`mailto:${contactEmail}`}
                className="font-medium text-secondary hover:text-secondary-400"
              >
                {contactEmail}
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </PageTransition>
  )
}
