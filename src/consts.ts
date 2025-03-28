import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'brucy',
  locale: 'en-US',
  description:
    'Crazy art, based dev and strong community! 
.',
  href: 'https://brucyonsol.xyz',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/info',
    label: 'info',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://t.me/brucyonsol',
    label: 'Telegram',
  },
  {
    href: 'https://x.com/brucyonsol',
    label: 'Twitter',
  },
  {
    href: 'https://dexscreener.com/solana/9e56hnzqwx6lwdpcxyyrgelmgtedg8svseub8qpttqpb',
    label: 'Dexscreener',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  Telegram: 'lucide:telegram',
  Twitter: 'lucide:twitter',
  Dexscreener: 'lucide:dexscreener',
}
