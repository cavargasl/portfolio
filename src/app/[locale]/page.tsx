import { getSiteConfig } from '@/config/siteConfig'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Skills from './components/Skills'
import { getScopedI18n } from '@/locale/server'
import Link from 'next/link'

export default async function Page() {
  const { mainNav, links } = await getSiteConfig()
  const scopeFooterT = await getScopedI18n('footer')
  return (
    <>
      <AboutMe navItem={mainNav.find(item => item.id === 'aboutMe')} />
      <Skills navItem={mainNav.find(item => item.id === 'skills')} />
      <Contact navItem={mainNav.find(item => item.id === 'contact')} />
      <footer className='flex flex-col items-center justify-center bg-foreground p-8 lg:px-12'>
        <p className='text-center text-background'>
          {scopeFooterT("content",
            { fullName: <Link href={links.github} target='_blank' className='font-bold hover:underline'>Camilo Vargas</Link> })
          }
        </p>
      </footer>
    </>
  )
}