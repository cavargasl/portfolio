import { getSiteConfig } from '@/config/siteConfig'
import type { IdsNav } from '@/types'
import type { ReactElement } from 'react'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'

const views: Record<IdsNav, ReactElement> = {
  aboutMe: <AboutMe />,
  skills: <Skills />,
  contact: <>contact</>,
  projects: <>projects</>,
  education: <>education</>,
  experience: <>experience</>,
}

export default async function Page() {
  const { mainNav } = await getSiteConfig()

  return (
    <>
      {
        mainNav.map(item => (
          <section key={item.id} id={item.id} className='flex h-full min-h-screen flex-col items-center justify-center gap-16 px-8 py-10 lg:px-12'>
            {views[item.id]}
          </section>
        ))
      }
    </>
  )
}