import Link from 'next/link'
import { getSiteConfig } from '@/config/siteConfig'
import { getScopedI18n } from '@/locale/server'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import ScrollIndicator from './components/ScrollIndicator'
import Skills from './components/Skills'
import TechnicalTest from './components/TechnicalTest'

export default async function Page() {
  const { mainNav, links } = await getSiteConfig()
  const scopeFooterT = await getScopedI18n('footer')
  return (
    <>
      <ScrollIndicator />
      <AboutMe navItem={mainNav.find(item => item.id === 'aboutMe')} />
      <Skills navItem={mainNav.find(item => item.id === 'skills')} />
      <Experience navItem={mainNav.find(item => item.id === 'experience')} />
      <Projects navItem={mainNav.find(item => item.id === 'projects')} />
      <TechnicalTest navItem={mainNav.find(item => item.id === 'technicalTest')} />
      <Education navItem={mainNav.find(item => item.id === 'education')} />
      <Contact navItem={mainNav.find(item => item.id === 'contact')} />
      <footer className='flex flex-col items-center justify-center bg-muted-foreground p-8 lg:px-12'>
        <p className='flex flex-wrap justify-center gap-1 text-center text-background'>
          {scopeFooterT('content', {
            fullName: (
              <Link
                href={links.github}
                target='_blank'
                className='line-clamp-1 font-bold hover:underline'
                aria-label='Github'
                rel='noopener noreferrer'
              >
                Camilo Vargas
              </Link>
            ),
          })}
        </p>
      </footer>
    </>
  )
}
