import { type SidebarNavItem } from '@/types'
import DownloadCV from '@/components/DownloadCV'
import SectionContainer from '@/components/SectionContainer'
import { getScopedI18n } from '@/locale/server'
import { SocialMedia } from './layouts/components/SocialMedia'

interface ContactProps {
  navItem?: SidebarNavItem
}
export default async function Contact({ navItem }: ContactProps) {
  const t = await getScopedI18n('contact')

  return (
    <SectionContainer id={navItem?.id} aria-label={navItem?.title} className='min-h-screen justify-center'>
      <h2 className='text-center text-3xl font-extrabold sm:text-4xl'>{t('title')}</h2>
      <p className='w-full text-center text-lg md:w-[60ch]'>{t('content', { br: <br /> })}</p>
      <SocialMedia />
      <DownloadCV />
    </SectionContainer>
  )
}
