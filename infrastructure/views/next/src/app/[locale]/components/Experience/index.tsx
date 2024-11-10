import type { SidebarNavItem } from '@/types'
import { Badge } from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import SectionContainer from '@/components/SectionContainer'
import { getCurrentLocale } from '@/locale/server'
import { ExperienceList } from './components/ExperienceList'
import { jobsServices } from '@core/jobs/application/jobService'
import { localJobs } from '@core/jobs/infrastructure/localJobs.repository'

interface ExperienceProps {
  navItem?: SidebarNavItem
}

export default async function Experience({ navItem }: ExperienceProps) {
  const experience = await jobsServices(localJobs()).getAll({ lang: getCurrentLocale() })

  return (
    <SectionContainer id={navItem?.id} aria-label={navItem?.title}>
      <h3 className='border-b-4 border-primary text-4xl font-bold sm:text-5xl'>{navItem?.title}</h3>
      <ExperienceList>
        {experience.map(item => (
          <Card key={item.title} className='w-full items-start p-2 sm:p-6'>
            <header className='flex flex-col flex-wrap items-baseline justify-between'>
              <h2 className='text-left text-xl font-medium'>{item.position}</h2>
              <h2 className='text-left text-lg'>{item.title}</h2>
              <span className='text-sm font-light'>{item.date}</span>
            </header>
            <ul>
              {item.descriptions.map((description, idx) => (
                <li
                  key={idx}
                  className="relative flex items-center gap-2 pl-7 before:absolute before:left-0 before:top-0 before:text-primary before:content-['👉']"
                >
                  {description}
                </li>
              ))}
            </ul>
            <footer className='flex flex-col gap-1'>
              <div className='flex flex-wrap gap-1'>
                {item.skills.map(skill => (
                  <Badge key={skill} variant={'outline'}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </footer>
          </Card>
        ))}
      </ExperienceList>
    </SectionContainer>
  )
}
