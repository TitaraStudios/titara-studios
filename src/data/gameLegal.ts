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
  blockture: {
    game: 'Blockture',
    updated: 'August 31, 2026',
    effective: 'August 31, 2026',
    intro:
      'This Privacy Policy explains how Titara Studios collects, uses and protects your information when you play Blockture (the "Game"), whether in a web browser on CrazyGames or as an Android app from Google Play. By playing Blockture you agree to the practices described here. If you do not agree, please do not use the Game.',
    sections: [
      {
        heading: 'Who we are',
        body: 'Blockture is developed and published by Titara Studios, an independent game studio based in India. You can reach us any time at the contact address at the bottom of this page.',
      },
      {
        heading: 'The short version',
        body: 'Blockture has no account system, no sign-up and no chat. We never ask you for your name, email address, phone number, date of birth or location, and we do not collect them. The only personal data involved is the advertising identifier our ad partners use to show you ads, and that is controlled by your own device settings.',
      },
      {
        heading: 'Information we collect',
        body: 'We deliberately collect as little as possible. Blockture contains no analytics SDK, no crash-reporting SDK and no in-app purchases, so there is no purchase history, no user profile and no behavioural analytics tied to you.',
        bullets: [
          'Game progress \u2014 which level you have reached and which pictures you have completed. See "Where your progress is saved" below.',
          'Advertising identifiers \u2014 on Android, a resettable advertising ID (the Google Advertising ID) used by our ad partner to serve and measure ads, subject to your device settings and your consent choice.',
          'Information our ad partners collect themselves \u2014 device type, operating system, coarse region derived from your IP address, and how you interacted with an ad. This is collected by the ad provider under its own privacy policy, not by us.',
        ],
      },
      {
        heading: 'Where your progress is saved',
        bullets: [
          'On the web (CrazyGames) \u2014 your progress is stored in your CrazyGames account through the CrazyGames SDK, so it follows you between devices. It is held by CrazyGames under their privacy policy, and we can read and write only this game\u2019s own progress data, never your CrazyGames profile.',
          'On Android \u2014 your progress is stored locally on your device only. There is no cloud sync, and uninstalling the app deletes it permanently.',
        ],
      },
      {
        heading: 'How we use your information',
        body: 'We use the information above only to save and restore your progress, to show the advertising that funds the Game, and to keep the Game working correctly. We do not sell your personal information, we do not build advertising profiles ourselves, and we do not share your data with anyone beyond the service providers listed below.',
      },
      {
        heading: 'Third-party services',
        body: 'Blockture uses the following third-party services, each with its own privacy policy. Which ones apply depends on where you play. We encourage you to review them.',
        table: {
          columns: ['Service', 'Where', 'Purpose', 'Privacy policy'],
          rows: [
            ['Google AdMob', 'Android', 'Serving and measuring banner, interstitial and rewarded ads', 'support.google.com/admob/answer/6128543'],
            ['Google User Messaging Platform', 'Android', 'Collecting and recording your advertising consent choice', 'policies.google.com/privacy'],
            ['Google Play Services', 'Android', 'Core platform services', 'policies.google.com/privacy'],
            ['CrazyGames', 'Web', 'Hosting the Game, saving progress to your account, and serving ads', 'crazygames.com/privacy'],
          ],
        },
      },
      {
        heading: 'Advertising',
        body: 'Blockture is free to play and funded by advertising. You will see a banner on the results and album screens, an occasional full-screen ad between levels, and optional rewarded ads you may choose to watch in exchange for a hint or extra time. Rewarded ads are always optional and never required to finish a level.',
        bullets: [
          'On Android, ads are served by Google AdMob. If you are in the EEA, the UK or another region that requires it, we show a consent form before any ad is requested \u2014 and if you decline, no ads are requested at all.',
          'On the web, ads are served by CrazyGames and governed by their privacy policy and consent flow.',
          'Android: Settings \u2192 Google \u2192 Ads \u2192 Reset advertising ID / Opt out of Ads Personalization.',
        ],
      },
      {
        heading: "Children's privacy",
        body: 'Blockture is a general-audience puzzle game. It is not directed at children under 13, and we do not knowingly collect personal information from them. We do not ask for age in the Game, so where our advertising partners identify a user as a child, or where a store or regulator requires it, only non-personalized (contextual) advertising is served. If you believe a child has provided personal information to us, contact us and we will delete it.',
      },
      {
        heading: 'Data retention',
        body: 'Web progress is kept in your CrazyGames account for as long as that account exists, subject to their retention policy. Android progress lives only on your device until you delete it. Data held by our advertising partners is retained under their own policies, which the privacy links above describe.',
      },
      {
        heading: 'Your rights and choices',
        body: 'Depending on where you live, you may have rights to access, correct or delete your information, object to or restrict processing, and withdraw consent. Because Blockture holds no account of its own, most of these are directly in your hands: uninstall the app to erase Android progress, reset or opt out of your advertising ID in device settings, and manage web progress through your CrazyGames account. On Android you can change your advertising consent choice at any time from the privacy options in the consent form. For anything else, contact us at the address below.',
      },
      {
        heading: 'Data security',
        body: 'We take reasonable technical and organizational measures to protect the limited information involved. No method of transmission or storage is completely secure, however, and we cannot guarantee absolute security.',
      },
      {
        heading: 'International data transfers',
        body: "Your information may be processed on servers outside your country of residence, for example by Google's or CrazyGames' global infrastructure. Where required, appropriate safeguards are applied by those providers.",
      },
      {
        heading: 'Changes to this policy',
        body: 'We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date above and, where appropriate, notify you in the Game or on this website. Continued use of the Game after changes take effect constitutes acceptance of the updated policy.',
      },
      {
        heading: 'Contact us',
        body: `If you have any questions about this Privacy Policy or your data, email us at ${supportEmail}. We are Titara Studios, and you can also reach us through the Support link on this website.`,
      },
    ],
  },
  'rope-puzzle': {
    game: 'Rope Puzzle',
    updated: 'October 15, 2026',
    effective: 'October 15, 2026',
    intro:
      'This Privacy Policy explains how Titara Studios collects, uses and protects your information when you play Rope Puzzle (the "Game"), available as an Android app on Google Play. By downloading, installing or using Rope Puzzle you agree to the practices described here. If you do not agree, please do not use the Game.',
    sections: [
      {
        heading: 'Who we are',
        body: 'Rope Puzzle is developed and published by Titara Studios, an independent mobile game studio based in India. You can reach us any time at the contact address at the bottom of this page.',
      },
      {
        heading: 'The short version',
        body: 'Rope Puzzle has no account system, no sign-up, no chat and no in-app purchases. We never ask you for your name, email address, phone number, date of birth or location, and we do not collect them. The only personal data involved is the advertising identifier our ad partner uses to show you ads, and that is controlled by your own device settings.',
      },
      {
        heading: 'Information we collect',
        body: 'We deliberately collect as little as possible. Rope Puzzle contains no analytics SDK and no crash-reporting SDK of our own, so there is no user profile and no behavioural analytics tied to you.',
        bullets: [
          'Game progress and settings — the level you have reached and whether vibration is switched on. These are stored only on your device and are never sent to us.',
          'Advertising identifiers — a resettable advertising ID (the Google Advertising ID) used by our ad partner to serve and measure ads, subject to your device settings and your consent choice.',
          'Information our ad partner collects itself — device type, operating system, coarse region derived from your IP address, and how you interacted with an ad. This is collected by Google AdMob under its own privacy policy, not by us.',
        ],
      },
      {
        heading: 'How we use your information',
        body: 'We use the information above only to save your progress and settings on your device, to show the advertising that keeps the Game free, and to keep the Game working correctly. We do not sell your personal information, we do not build advertising profiles ourselves, and we do not share your data with anyone beyond the service providers listed below.',
      },
      {
        heading: 'Third-party services',
        body: 'Rope Puzzle uses the following third-party services, each with its own privacy policy. We encourage you to review them.',
        table: {
          columns: ['Service', 'Purpose', 'Privacy policy'],
          rows: [
            ['Google AdMob', 'Serving and measuring interstitial ads', 'support.google.com/admob/answer/6128543'],
            ['Google User Messaging Platform', 'Collecting and recording your advertising consent choice', 'policies.google.com/privacy'],
            ['Google Play Services', 'Core platform services (Android)', 'policies.google.com/privacy'],
          ],
        },
      },
      {
        heading: 'Advertising',
        body: 'Rope Puzzle is free to play and funded by advertising. You will occasionally see a full-screen ad between levels; the first appears only after you have cleared several levels, and ads never interrupt a level in progress. Ads are served by Google AdMob, which may use your advertising identifier and usage data to show more relevant ads and measure their effectiveness.',
        bullets: [
          'If you are in the EEA, the UK or another region that requires it, we ask for your consent before personalised ads are shown. If you decline, only non-personalised ads are requested.',
          'Android: Settings → Google → Ads → Reset advertising ID / Delete advertising ID.',
        ],
      },
      {
        heading: "Children's privacy",
        body: 'Rope Puzzle is a general-audience puzzle game. It is not directed at children under 13, and we do not knowingly collect personal information from them. We do not ask for age in the Game, so where our advertising partner identifies a user as a child, or where a store or regulator requires it, only non-personalised (contextual) advertising is served. If you believe a child has provided personal information to us, contact us and we will delete it.',
      },
      {
        heading: 'Data retention',
        body: 'Your progress and settings live only on your device until you clear the app’s storage or uninstall the Game, which deletes them permanently. There is no cloud save. Data held by our advertising partner is retained under its own policy, which the link above describes.',
      },
      {
        heading: 'Your rights and choices',
        body: 'Depending on where you live, you may have rights to access, correct or delete your information, object to or restrict processing, and withdraw consent. Because Rope Puzzle holds no account and sends no game data to us, most of these are directly in your hands: uninstall the app or clear its storage to erase your progress, and reset or delete your advertising ID in your device settings. Where a consent form is shown, you can change your advertising consent choice at any time. For anything else, contact us at the address below.',
      },
      {
        heading: 'Data security',
        body: 'We take reasonable technical and organizational measures to protect the limited information involved. Data sent by our advertising partner is encrypted in transit. No method of transmission or storage is completely secure, however, and we cannot guarantee absolute security.',
      },
      {
        heading: 'International data transfers',
        body: "Your information may be processed on servers outside your country of residence, for example by Google's global infrastructure. Where required, appropriate safeguards are applied by that provider.",
      },
      {
        heading: 'Changes to this policy',
        body: 'We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date above and, where appropriate, notify you in the Game or on this website. Continued use of the Game after changes take effect constitutes acceptance of the updated policy.',
      },
      {
        heading: 'Contact us',
        body: `If you have any questions about this Privacy Policy or your data, email us at ${supportEmail}. We are Titara Studios, and you can also reach us through the Support link on this website.`,
      },
    ],
  },
}

export const getGamePrivacy = (id: string): GameLegalDoc | undefined => gamePrivacy[id]
