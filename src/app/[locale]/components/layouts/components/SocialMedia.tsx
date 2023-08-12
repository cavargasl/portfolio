import { BrandGitHub, BrandLinkedIn, BrandX } from '@/components/Icons'
import { buttonVariants } from '@/components/ui/Button'
import { getSiteConfig } from '@/config/siteConfig'
import { cn } from '@/lib/utils'
import { getScopedI18n } from '@/locale/server'
import Link from 'next/link'

export async function SocialMedia() {
  const siteConfig = await getSiteConfig()
  const scopeT = await getScopedI18n("siteConfig")
  return (
    <div className='flex gap-4'>
      <Link
        href={siteConfig.links.LinkedIn}
        className={cn(buttonVariants({ variant: 'ghost', size: "icon" }), 'group hover:bg-transparent')}
        target='_blank'
        aria-label={scopeT("socialLinks.LinkedIn")}
      >
        <span className='transition-transform duration-200 ease-out-expo group-hover:-translate-y-1'>
          <BrandLinkedIn className='h-6 w-6' />
        </span>
      </Link>
      <Link
        href={siteConfig.links.github}
        className={cn(buttonVariants({ variant: 'ghost', size: "icon" }), 'group hover:bg-transparent')}
        target='_blank'
        aria-label={scopeT("socialLinks.github")}
      >
        <span className='transition-transform duration-200 ease-out-expo group-hover:-translate-y-1'>
          <BrandGitHub className='h-6 w-6' />
        </span>
      </Link>
      <Link
        href={siteConfig.links.twitter}
        className={cn(buttonVariants({ variant: 'ghost', size: "icon" }), 'group hover:bg-transparent')}
        target='_blank'
        aria-label={scopeT("socialLinks.twitter")}
      >
        <span className='transition-transform duration-200 ease-out-expo group-hover:-translate-y-1'>
          <BrandX className='h-6 w-6' />
        </span>
      </Link>
    </div>
  )
}
