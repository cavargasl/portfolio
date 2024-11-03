import Link from 'next/link'
import { type SidebarNavItem } from '@/types'
import { Badge } from '@/components/ui/Badge'
import { BrandGitHub, IconExternalLink } from '@/components/Icons'
import SectionContainer from '@/components/SectionContainer'
import { getCurrentLocale, getScopedI18n } from '@/locale/server'
import { technicalTestUseCases } from '@core/technicalTests/application/technicalTestUseCases'
import { localTechnicalTest } from '@core/technicalTests/infrastructure/instances/localTechnicalTest'
import { technicalTestRepository } from '@core/technicalTests/infrastructure/repository'

export default async function TechnicalTest({ navItem }: { navItem?: SidebarNavItem }) {
  const t = await getScopedI18n('commons')

  const techTest = await technicalTestUseCases(technicalTestRepository(localTechnicalTest)).getAll({
    lang: getCurrentLocale(),
    order: 'desc',
  })

  return (
    <SectionContainer id={navItem?.id} aria-label={navItem?.title}>
      <h3 className='border-b-4 border-primary text-left text-3xl font-bold sm:text-4xl'>{t('techTest')}</h3>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(min(100%,20rem),1fr))] gap-6'>
        {techTest.map(test => (
          <div key={test.title} className='flex flex-col rounded-sm border border-primary shadow-md shadow-primary'>
            <div className='grid h-full content-between gap-4 p-4'>
              <header className='grid grid-cols-[1fr,auto] gap-2'>
                <p className='text-xl font-bold leading-none'>{test.title}</p>
                <div className='inline-flex gap-2'>
                  {test.webSite && (
                    <Link href={test.webSite} target='_blank' rel='noopener noreferrer' aria-label={test.webSite}>
                      <IconExternalLink className='h-5 w-5 transition-colors duration-200 ease-out-expo hover:text-primary' />
                    </Link>
                  )}
                  {test.github.map(url => (
                    <Link key={url} href={url} target='_blank' rel='noopener noreferrer' aria-label={url}>
                      <BrandGitHub className='h-5 w-5 transition-colors duration-200 ease-out-expo hover:text-primary' />
                    </Link>
                  ))}
                </div>
                <span className='font-semibold leading-none'>{test.enterprise}</span>
                <span className='col-span-2 text-sm font-light'>{test.testTime}</span>
              </header>
              <p
                className='line-clamp-[7] leading-tight'
                dangerouslySetInnerHTML={{ __html: removerObjectInString(test.description.toString(), test.urlDescription) }}
              />

              <footer className='flex flex-col gap-1'>
                <div className='flex flex-wrap gap-1'>
                  {test.skills.map(skill => (
                    <Badge key={skill} variant={'default'} className='px-1.5 py-0'>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}

function removerObjectInString(str: string, url?: string): string {
  return str.replace(
    /\{url\}/g,
    url
      ? `<a href="${url}" target='_blank' rel='noopener noreferrer' aria-label={url} class='text-secondary transition-colors duration-200 ease-out-expo hover:text-primary'>
        link
      </a>`
      : ''
  )
}
