import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import type { SocialLink } from '@/types'
import { contactEmail } from './navigation'

export interface Founder {
  name: string
  role: string
  credential: string
  location: string
  bio: string[]
  currentProject: string
  email: string
  socials: SocialLink[]
  /** Quick facts shown as stat pills. */
  facts: { label: string; value: string }[]
}

export const founder: Founder = {
  name: 'Santhosh',
  role: 'Founder & Game Developer',
  credential: 'M.Sc. in Game Technology',
  location: 'India • Remote',
  bio: [
    'Santhosh is the founder of Titara Studios — an independent game studio on a mission to craft polished, joyful mobile games. With a Master of Science in Game Technology, he blends technical depth with a player-first design philosophy.',
    'Right now he is heads-down building Monster Cubes, the studio’s debut merge-puzzle title, due out soon. As an indie developer, Santhosh wears every hat: design, Unity engineering, art direction and that final 10% of polish that makes a game feel great.',
  ],
  currentProject: 'Monster Cubes — Coming Soon',
  email: contactEmail,
  facts: [
    { label: 'Degree', value: 'M.Sc. Game Technology' },
    { label: 'Engine', value: 'Unity' },
    { label: 'Studio', value: 'Indie • Founder-led' },
    { label: 'Building', value: 'Monster Cubes' },
  ],
  socials: [
    { label: 'Email', href: `mailto:${contactEmail}`, icon: Mail },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
    { label: 'Twitter / X', href: 'https://twitter.com', icon: Twitter },
    { label: 'GitHub', href: 'https://github.com', icon: Github },
  ],
}
