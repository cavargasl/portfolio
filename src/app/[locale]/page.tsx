import { getSiteConfig } from '@/config/siteConfig'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Skills from './components/Skills'

export default async function Page() {
  const { mainNav } = await getSiteConfig()

  return (
    <>
      <AboutMe navItem={mainNav.find(item => item.id === 'aboutMe')} />
      <Skills navItem={mainNav.find(item => item.id === 'skills')} />
      <Contact navItem={mainNav.find(item => item.id === 'contact')} />
    </>
  )
}