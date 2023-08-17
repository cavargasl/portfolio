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
          <section
            key={item.id}
            id={item.id}
            aria-label={item.title}
            className='flex h-full min-h-screen flex-col items-center gap-16 px-8 pb-14 pt-10 first:justify-center lg:px-12'
          >
            {
              item.id !== 'aboutMe' && <h3 className='border-b-4 border-primary text-5xl font-bold'>{item.title}</h3>
            }
            {views[item.id]}
          </section>
        ))
      }
    </>
  )
}