import SectionContainer from '@/components/SectionContainer'
import { getScopedI18n } from '@/locale/server'
import { SocialMedia } from './layouts/components/SocialMedia'
import { type SidebarNavItem } from '@core/shared/domain/navBar'

interface AboutMeProps {
  navItem?: SidebarNavItem
}

export default async function AboutMe({ navItem }: AboutMeProps) {
  const t = await getScopedI18n('home')

  return (
    <SectionContainer id={navItem?.id} aria-label={navItem?.title} className='min-h-screen justify-center'>
      <div className='flex flex-col items-center gap-2 lg:w-fit'>
        <h1 className='w-full bg-gradient-to-r from-primary to-tertiary bg-clip-text text-center font-mono text-6xl font-bold !leading-tight text-transparent sm:text-7xl'>
          Camilo Vargas
        </h1>
        <h2 className='text-center text-xl text-foreground/80'>{t('iAm')}</h2>
      </div>
      <p className='w-full text-center text-xl md:w-[58ch] xl:w-[66ch]'>{t('welcome')}</p>
      <SocialMedia />
    </SectionContainer>
  )
}
