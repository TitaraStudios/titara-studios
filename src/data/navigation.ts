import { Instagram, Linkedin } from 'lucide-react'
import { DiscordIcon } from '@/components/icons/DiscordIcon'
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
  { label: 'Discord', href: 'https://discord.gg/titarastudios', icon: DiscordIcon },
  { label: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
]

export const contactEmail = 'hello@titarastudios.com'
export const supportEmail = 'titarastudios@gmail.com'
