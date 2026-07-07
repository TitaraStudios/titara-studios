import { supportEmail } from './navigation'

/**
 * Per-game legal documents.
 *
 * Each published game gets its OWN privacy policy at `/games/:id/privacy`, because
 * a privacy policy must accurately describe what THAT specific app collects — the
 * store listings (Google Play / App Store) require and verify a per-app URL.
 *
 * The shared studio-wide policy lives at `/privacy`; the terms of service at `/terms`
 * are common to all Titara titles. Only the game-specific data-collection details differ,
 * so adding a new game (e.g. a social/metaverse title with chat and accounts) means
 * adding one entry here with its own accurate sections.
 */

export interface LegalSection {
  heading: string
  /** Optional paragraph text. */
  body?: string
  /** Optional bullet list rendered under the body. */
  bullets?: string[]
  /** Optional table (e.g. third-party services). */
  table?: {
    columns: string[]
    rows: string[][]
  }
}

export interface GameLegalDoc {
  /** Human-readable game name, used in headings and SEO. */
  game: string
  /** ISO-ish display date shown as "Last updated". */
  updated: string
  effective: string
  intro: string
  sections: LegalSection[]
}

/** Keyed by the same game `id` used in `data/games.ts`. */
export const gamePrivacy: Record<string, GameLegalDoc> = {
  'monster-cubes': {
    game: 'Monster Cubes',
    updated: 'July 7, 2026',
    effective: 'July 7, 2026',
    intro:
      'This Privacy Policy explains how Titara Studios collects, uses, and protects your information when you play Monster Cubes (the "Game"), available on the Google Play Store and Apple App Store. By downloading, installing, or using Monster Cubes, you agree to the practices described here. If you do not agree, please do not use the Game.',
    sections: [
      {
        heading: 'Who we are',
        body: 'Monster Cubes is developed and published by Titara Studios, an independent mobile game studio based in India. You can reach us any time at the contact address at the bottom of this page.',
      },
      {
        heading: 'Information we collect',
        body: 'We aim to collect only what we need to run and improve the Game. During onboarding we may ask for your age or age range (to verify eligibility and apply age-appropriate content and advertising rules) and, optionally, your gender (to understand our audience). You can decline optional questions. We do not ask for your name, email address, phone number, or precise home address inside the Game.',
        bullets: [
          'Device information — device model, operating system version, language, region and screen characteristics.',
          'Usage and gameplay data — levels played, progress, session length, features used, in-app events, and crash/diagnostic reports.',
          'Advertising identifiers — a resettable advertising ID (Google Advertising ID / Apple IDFA) used to serve and measure ads, subject to your device settings.',
          'Approximate location — derived from your IP address or region setting. We do not collect precise GPS location.',
        ],
      },
      {
        heading: 'Purchases',
        body: 'If you make in-app purchases, the transaction is handled by Google Play Billing or the Apple App Store. We receive confirmation that a purchase occurred and what was purchased, but we do not collect or store your full payment card details.',
      },
      {
        heading: 'How we use your information',
        body: 'We use the information above to operate and provide the core features of the Game; save and restore your progress and settings; show relevant advertising and measure ad performance; understand how players use the Game so we can fix bugs and improve it; verify eligibility and apply age-appropriate settings; detect and prevent fraud or abuse; and comply with legal obligations. We do not sell your personal information.',
      },
      {
        heading: 'Third-party services',
        body: 'Monster Cubes uses the following third-party services, each of which has its own privacy policy. These providers may collect and process data in accordance with their own policies — we encourage you to review them.',
        table: {
          columns: ['Service', 'Purpose', 'Privacy policy'],
          rows: [
            ['Google Firebase Analytics', 'Anonymous / aggregated usage analytics', 'firebase.google.com/support/privacy'],
            ['Google Firebase Crashlytics', 'Crash and stability reporting', 'firebase.google.com/support/privacy'],
            ['Google AdMob', 'Serving and measuring in-app advertising', 'support.google.com/admob/answer/6128543'],
            ['Google Play Services / Billing', 'Core platform services and purchases (Android)', 'policies.google.com/privacy'],
            ['Apple App Store / StoreKit', 'Core platform services and purchases (iOS)', 'apple.com/legal/privacy'],
          ],
        },
      },
      {
        heading: 'Advertising',
        body: 'The Game displays advertising provided by Google AdMob, including banner, interstitial and rewarded ads. Advertising partners may use advertising identifiers and usage data to show more relevant ads and measure their effectiveness. For users in the EEA, UK and other regions requiring it, we present a consent request for personalized advertising the first time it is required. You can control ad personalization through your device settings:',
        bullets: [
          'Android: Settings → Google → Ads → Reset advertising ID / Opt out of Ads Personalization.',
          'iOS: Settings → Privacy & Security → Tracking / Apple Advertising.',
        ],
      },
      {
        heading: "Children's privacy",
        body: 'Monster Cubes is intended for a general audience aged 13 and over. We collect age information during onboarding in part to apply age-appropriate settings. We do not knowingly collect personal information from children below the applicable age of digital consent without verifiable parental consent. For users identified as below that age, we limit data collection and serve only non-personalized (contextual) advertising where required by law (for example COPPA in the US and GDPR-K in the EU). If you believe a child has provided us personal information without appropriate consent, contact us and we will delete it.',
      },
      {
        heading: 'Data retention',
        body: "We retain automatically collected and analytics data for as long as necessary to fulfil the purposes described here, and as required by our service providers' retention settings. Aggregated or anonymized data may be retained for longer. Your local game progress is stored on your device and, where applicable, in your platform cloud save.",
      },
      {
        heading: 'Your rights and choices',
        body: 'Depending on where you live, you may have rights to access, correct or delete your information, object to or restrict certain processing, and withdraw consent (for example, ad personalization). To exercise any of these rights, contact us using the address below — we may need to verify your request first. You can also clear locally stored data by uninstalling the Game or clearing its storage in your device settings.',
      },
      {
        heading: 'Data security',
        body: 'We take reasonable technical and organizational measures to protect your information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
      },
      {
        heading: 'International data transfers',
        body: "Your information may be processed on servers located outside your country of residence (for example, by Google's global infrastructure). Where required, appropriate safeguards are applied by those service providers.",
      },
      {
        heading: 'Changes to this policy',
        body: 'We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date above and, where appropriate, notify you within the Game or on our website. Your continued use of the Game after changes take effect constitutes acceptance of the updated policy.',
      },
      {
        heading: 'Contact us',
        body: `If you have any questions about this Privacy Policy or your data, email us at ${supportEmail}. We are Titara Studios, and you can also reach us through the Support link on this website.`,
      },
    ],
  },
}

export const getGamePrivacy = (id: string): GameLegalDoc | undefined => gamePrivacy[id]
