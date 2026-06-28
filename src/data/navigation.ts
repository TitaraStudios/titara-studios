import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import type { NavLink, SocialLink } from '@/types'

export const navLinks: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'Games', to: '/games' },
  { label: 'About', to: '/about' },
  { label: 'Careers', to: '/careers' },
  { label: 'News', to: '/news' },
  { label: 'Contact', to: '/contact' },
]

export const footerLinks: { heading: string; links: NavLink[] }[] = [
  {
    heading: 'Studio',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Careers', to: '/careers' },
      { label: 'News', to: '/news' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    heading: 'Games',
    links: [
      { label: 'Monster Cubes', to: '/games' },
      { label: 'All Games', to: '/games' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms of Service', to: '/terms' },
      { label: 'Support', to: '/contact' },
    ],
  },
]

export const socialLinks: SocialLink[] = [
  { label: 'Twitter / X', href: 'https://twitter.com', icon: Twitter },
  { label: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com', icon: Github },
]

export const contactEmail = 'hello@titarastudios.com'
export const supportEmail = 'support@titarastudios.com'
