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
    updated: 'October 30, 2026',
    effective: 'October 30, 2026',
    intro:
      'This Privacy Policy explains how Titara Studios collects, uses, and protects your information when you play Monster Cubes (the "Game") on Android, available on Google Play. By downloading, installing, or using Monster Cubes, you agree to the practices described here. If you do not agree, please do not use the Game.',
    sections: [
      {
        heading: 'Who we are',
        body: 'Monster Cubes is developed and published by Titara Studios, an independent mobile game studio based in India. You can reach us any time at the contact address at the bottom of this page.',
      },
      {
        heading: 'The short version',
        body: 'Monster Cubes has no accounts of its own, no analytics SDK and no crash-reporting SDK. Your level progress and settings stay on your device. The data that does leave your device goes to Google: to show ads (Google AdMob), to record your ad-consent choice where the law requires it, to process the optional No Ads purchase (Google Play), and, if you use it, to sign you in to Google Play Games.',
      },
      {
        heading: 'Information we collect',
        body: 'We do not ask for your name, email address, phone number, age or address inside the Game. The following information is processed, mostly by our advertising partner Google AdMob:',
        bullets: [
          'Advertising identifiers — the resettable Google Advertising ID, used to serve and measure ads, subject to your device settings and consent choice.',
          'Approximate location — derived from your IP address. We do not collect precise GPS location.',
          'Device and app information — device model, operating system version, language and screen characteristics.',
          'App interactions and diagnostics — ad impressions and clicks, and ad-SDK diagnostic data, used for advertising, analytics and fraud prevention.',
        ],
      },
      {
        heading: 'Where your progress is saved',
        body: 'Your current level, sound and vibration settings, and whether you own No Ads are stored only on your device. Uninstalling the Game or clearing its storage removes them. We do not run a server and do not receive this data.',
      },
      {
        heading: 'Purchases',
        body: 'Monster Cubes offers one optional purchase, No Ads, which removes banner and pop-up ads and makes the Clear Level option free. The transaction is handled entirely by Google Play Billing: we receive confirmation that the purchase happened, but never your payment details. Google Play restores the purchase automatically when you reinstall the Game with the same Google account.',
      },
      {
        heading: 'Internet check',
        body: 'The Game needs an internet connection to play, because it is supported by ads. To check this, it sends a small request to Google (clients3.google.com) and to Google\'s ad servers (googleads.g.doubleclick.net and pagead2.googlesyndication.com). These requests carry no personal data beyond what any internet request reveals, such as your IP address.',
      },
      {
        heading: 'Notifications',
        body: 'With your permission, the Game schedules a local reminder on your device once a day in the evening. These notifications are created on your device; no data is sent to us or to anyone else to deliver them. You can turn them off at any time in your device settings.',
      },
      {
        heading: 'How we use your information',
        body: 'Information is used to show ads that keep the Game free, measure those ads and prevent ad fraud; to process and restore your No Ads purchase; to sign you in to Google Play Games if you use it; and to comply with legal obligations. We do not sell your personal information.',
      },
      {
        heading: 'Third-party services',
        body: 'Monster Cubes uses the following third-party services, each of which has its own privacy policy. These providers may collect and process data in accordance with their own policies — we encourage you to review them.',
        table: {
          columns: ['Service', 'Purpose', 'Privacy policy'],
          rows: [
            ['Google AdMob', 'Serving and measuring banner, interstitial and rewarded ads', 'support.google.com/admob/answer/6128543'],
            ['Google User Messaging Platform', 'Collecting and recording your advertising consent choice', 'policies.google.com/privacy'],
            ['Google Play Billing', 'Processing and restoring the No Ads purchase', 'policies.google.com/privacy'],
            ['Google Play Games Services', 'Optional sign-in to Google Play Games', 'policies.google.com/privacy'],
          ],
        },
      },
      {
        heading: 'Advertising',
        body: 'The Game shows ads from Google AdMob: a banner at the bottom of the screen, occasional full-screen ads between levels, and a rewarded video you can choose to watch to clear a level. Players who buy No Ads see no banner or full-screen ads. If you are in the EEA, the UK, Switzerland or another region that requires it, we show Google\'s consent form before any ad is requested. If you decline, you still see ads, but they are not personalised. You can change your choice at any time from "Privacy settings" in the Game\'s Settings screen. You can also control ad personalisation on your device:',
        bullets: [
          'Android: Settings → Google → Ads → Delete or reset advertising ID / Opt out of Ads Personalization.',
        ],
      },
      {
        heading: "Children's privacy",
        body: 'Monster Cubes is a general-audience puzzle game. It is not directed at children under 13, and we do not knowingly collect personal information from them. If you believe a child has provided us personal information, contact us and we will help remove it.',
      },
      {
        heading: 'Data retention',
        body: "We do not store your data on our own servers. Data processed by Google is retained according to Google's own retention settings and policies. Data stored on your device stays there until you uninstall the Game or clear its storage.",
      },
      {
        heading: 'Your rights and choices',
        body: 'Depending on where you live, you may have rights to access, correct or delete your information, object to or restrict certain processing, and withdraw consent (for example, ad personalisation, from "Privacy settings" in the Game). For data held by Google, you can also use Google\'s own privacy tools. To exercise any of these rights, contact us using the address below.',
      },
      {
        heading: 'Data security',
        body: 'Data the Game sends is encrypted in transit. We take reasonable measures to protect the limited information involved; however, no method of transmission or storage is completely secure.',
      },
      {
        heading: 'International data transfers',
        body: "Your information may be processed on servers located outside your country of residence (for example, by Google's global infrastructure). Where required, appropriate safeguards are applied by those service providers.",
      },
      {
        heading: 'Changes to this policy',
        body: 'We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date above. Your continued use of the Game after changes take effect constitutes acceptance of the updated policy.',
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
        body: 'Rope Puzzle uses the following third-party services, each with its own privacy policy. We encourage you to review them. While the Game is open it also periodically checks that your device is online and that ads can be reached, by making simple web requests to Google and Cloudflare servers. Like any web request these reveal your IP address to those servers, but no game data or personal information is sent.',
        table: {
          columns: ['Service', 'Purpose', 'Privacy policy'],
          rows: [
            ['Google AdMob', 'Serving and measuring banner and interstitial ads', 'support.google.com/admob/answer/6128543'],
            ['Google User Messaging Platform', 'Collecting and recording your advertising consent choice', 'policies.google.com/privacy'],
            ['Google Play Services', 'Core platform services (Android)', 'policies.google.com/privacy'],
            ['Google (gstatic.com)', 'Checking that your device is online', 'policies.google.com/privacy'],
            ['Cloudflare', 'Checking that your device is online', 'cloudflare.com/privacypolicy'],
          ],
        },
      },
      {
        heading: 'Advertising',
        body: 'Rope Puzzle is free to play and funded by advertising. A banner ad is shown at the bottom of the screen whenever the Game is open, and you will occasionally see a full-screen ad between levels; the first full-screen ad appears only after you have cleared several levels, and full-screen ads never interrupt a level in progress. Ads are served by Google AdMob, which may use your advertising identifier and usage data to show more relevant ads and measure their effectiveness.',
        bullets: [
          'If you are in the EEA, the UK or another region that requires it, we ask for your consent before personalised ads are shown. If you decline, only non-personalised ads are requested. You can change your choice at any time from "Privacy settings" on the Game\'s title screen.',
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
  'train-brain': {
    game: 'Train Brain',
    updated: 'October 23, 2026',
    effective: 'October 23, 2026',
    intro:
      'This Privacy Policy explains how Titara Studios collects, uses and protects your information when you play Train Brain (the "Game"), available as an Android app on Google Play. By downloading, installing or using Train Brain you agree to the practices described here. If you do not agree, please do not use the Game.',
    sections: [
      {
        heading: 'Who we are',
        body: 'Train Brain is developed and published by Titara Studios, an independent mobile game studio based in India. You can reach us any time at the contact address at the bottom of this page.',
      },
      {
        heading: 'The short version',
        body: 'Train Brain has no account system, no sign-up, no chat and no in-app purchases. Coins and boosters are earned and spent inside the Game only; they cannot be bought with real money. We never ask you for your name, email address, phone number, date of birth or location, and we do not collect them. The only personal data involved is the advertising identifier our ad partner uses to show you ads, and that is controlled by your own device settings.',
      },
      {
        heading: 'Information we collect',
        body: 'We deliberately collect as little as possible. Train Brain contains no analytics SDK and no crash-reporting SDK of our own, so there is no user profile and no behavioural analytics tied to you.',
        bullets: [
          'Game progress and settings — your current level, coins, stars, booster counts, whether you have played today\'s Daily challenge, and whether sound, music, vibration and the daily reminder are switched on. These are stored only on your device and are never sent to us.',
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
        body: 'Train Brain uses the following third-party services, each with its own privacy policy. We encourage you to review them. The Game needs an internet connection to play: on launch, when you return to it and periodically while it is open, it checks that your device is online and that ads can be reached, by making simple web requests to Google and Cloudflare servers. Like any web request these reveal your IP address to those servers, but no game data or personal information is sent.',
        table: {
          columns: ['Service', 'Purpose', 'Privacy policy'],
          rows: [
            ['Google AdMob', 'Serving and measuring banner and interstitial ads', 'support.google.com/admob/answer/6128543'],
            ['Google User Messaging Platform', 'Collecting and recording your advertising consent choice', 'policies.google.com/privacy'],
            ['Google Play Services', 'Core platform services (Android)', 'policies.google.com/privacy'],
            ['Google (gstatic.com)', 'Checking that your device is online', 'policies.google.com/privacy'],
            ['Cloudflare', 'Checking that your device is online', 'cloudflare.com/privacypolicy'],
          ],
        },
      },
      {
        heading: 'Advertising',
        body: 'Train Brain is free to play and funded by advertising. A banner ad is shown at the bottom of the screen whenever the Game is open, and you will occasionally see a full-screen ad before a new level starts. The first ten levels are free of full-screen ads, they then come gradually more often until there is one every five levels, and restarting a level never shows one. Ads are served by Google AdMob, which may use your advertising identifier and usage data to show more relevant ads and measure their effectiveness.',
        bullets: [
          'If you are in the EEA, the UK or another region that requires it, we ask for your consent before personalised ads are shown. If you decline, only non-personalised ads are requested. You can change your choice at any time from "Privacy settings" on the Game\'s title screen.',
          'Android: Settings → Google → Ads → Reset advertising ID / Delete advertising ID.',
        ],
      },
      {
        heading: 'Notifications',
        body: 'With your permission, the Game schedules a reminder on your device for the evening (7 PM India time). These are local notifications created by the Game itself: no server sends them and no data is collected through them. You can turn them off at any time with the "Daily reminder" switch in the Game\'s settings, or in your device settings (Settings → Apps → Train Brain → Notifications).',
      },
      {
        heading: "Children's privacy",
        body: 'Train Brain is a general-audience game. It is not directed at children under 13, and we do not knowingly collect personal information from them. We do not ask for age in the Game, so where our advertising partner identifies a user as a child, or where a store or regulator requires it, only non-personalised (contextual) advertising is served. If you believe a child has provided personal information to us, contact us and we will delete it.',
      },
      {
        heading: 'Data retention',
        body: 'Your progress and settings live only on your device until you clear the app’s storage or uninstall the Game, which deletes them permanently. There is no cloud save. Data held by our advertising partner is retained under its own policy, which the link above describes.',
      },
      {
        heading: 'Your rights and choices',
        body: 'Depending on where you live, you may have rights to access, correct or delete your information, object to or restrict processing, and withdraw consent. Because Train Brain holds no account and sends no game data to us, most of these are directly in your hands: uninstall the app or clear its storage to erase your progress, and reset or delete your advertising ID in your device settings. Where a consent form is shown, you can change your advertising consent choice at any time. For anything else, contact us at the address below.',
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
  'alien-smash': {
    game: 'Alien Smash',
    updated: 'October 21, 2026',
    effective: 'October 21, 2026',
    intro:
      'This Privacy Policy explains how Titara Studios collects, uses and protects your information when you play Alien Smash (the "Game"), available as an Android app on Google Play. By downloading, installing or using Alien Smash you agree to the practices described here. If you do not agree, please do not use the Game.',
    sections: [
      {
        heading: 'Who we are',
        body: 'Alien Smash is developed and published by Titara Studios, an independent mobile game studio based in India. You can reach us any time at the contact address at the bottom of this page.',
      },
      {
        heading: 'The short version',
        body: 'Alien Smash has no account system, no sign-up, no chat and no in-app purchases. We never ask you for your name, email address, phone number, date of birth or location, and we do not collect them. The only personal data involved is the advertising identifier our ad partner uses to show you ads, and that is controlled by your own device settings.',
      },
      {
        heading: 'Information we collect',
        body: 'We deliberately collect as little as possible. Alien Smash contains no analytics SDK and no crash-reporting SDK of our own, so there is no user profile and no behavioural analytics tied to you.',
        bullets: [
          'Game progress and settings — the world you last played, your selected weapon, how many times you have destroyed each world, and whether sound and vibration are switched on. These are stored only on your device and are never sent to us.',
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
        body: 'Alien Smash uses the following third-party services, each with its own privacy policy. We encourage you to review them. While the Game is open it also periodically checks that your device is online and that ads can be reached, by making simple web requests to Google and Cloudflare servers. Like any web request these reveal your IP address to those servers, but no game data or personal information is sent.',
        table: {
          columns: ['Service', 'Purpose', 'Privacy policy'],
          rows: [
            ['Google AdMob', 'Serving and measuring banner and interstitial ads', 'support.google.com/admob/answer/6128543'],
            ['Google User Messaging Platform', 'Collecting and recording your advertising consent choice', 'policies.google.com/privacy'],
            ['Google Play Services', 'Core platform services (Android)', 'policies.google.com/privacy'],
            ['Google (gstatic.com)', 'Checking that your device is online', 'policies.google.com/privacy'],
            ['Cloudflare', 'Checking that your device is online', 'cloudflare.com/privacypolicy'],
          ],
        },
      },
      {
        heading: 'Advertising',
        body: 'Alien Smash is free to play and funded by advertising. A banner ad is shown at the bottom of the screen whenever the Game is open, and you will occasionally see a full-screen ad after a world is destroyed, when you move on from the results screen. The first worlds you destroy are ad-free, full-screen ads are spaced at least a minute and a half apart, and they never interrupt a world you are still smashing. Ads are served by Google AdMob, which may use your advertising identifier and usage data to show more relevant ads and measure their effectiveness.',
        bullets: [
          'If you are in the EEA, the UK or another region that requires it, we ask for your consent before personalised ads are shown. If you decline, only non-personalised ads are requested. You can change your choice at any time from "Privacy settings" on the Game\'s title screen.',
          'Android: Settings → Google → Ads → Reset advertising ID / Delete advertising ID.',
        ],
      },
      {
        heading: 'Notifications',
        body: 'With your permission, the Game schedules a reminder on your device for the evening (7 PM India time). These are local notifications created by the Game itself: no server sends them and no data is collected through them. You can turn them off at any time in your device settings (Settings → Apps → Alien Smash → Notifications).',
      },
      {
        heading: "Children's privacy",
        body: 'Alien Smash is a general-audience game. It is not directed at children under 13, and we do not knowingly collect personal information from them. We do not ask for age in the Game, so where our advertising partner identifies a user as a child, or where a store or regulator requires it, only non-personalised (contextual) advertising is served. If you believe a child has provided personal information to us, contact us and we will delete it.',
      },
      {
        heading: 'Data retention',
        body: 'Your progress and settings live only on your device until you clear the app’s storage or uninstall the Game, which deletes them permanently. There is no cloud save. Data held by our advertising partner is retained under its own policy, which the link above describes.',
      },
      {
        heading: 'Your rights and choices',
        body: 'Depending on where you live, you may have rights to access, correct or delete your information, object to or restrict processing, and withdraw consent. Because Alien Smash holds no account and sends no game data to us, most of these are directly in your hands: uninstall the app or clear its storage to erase your progress, and reset or delete your advertising ID in your device settings. Where a consent form is shown, you can change your advertising consent choice at any time. For anything else, contact us at the address below.',
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
