import Link from 'next/link'
import { type SidebarNavItem } from '@/types'
import { Badge } from '@/components/ui/Badge'
import { BrandGitHub, IconExternalLink } from '@/components/Icons'
import SectionContainer from '@/components/SectionContainer'
import { getCurrentLocale, getScopedI18n } from '@/locale/server'
import { technicalTestService } from '@core/technicalTests/application/technicalTestService'
import { type TechnicalTest } from '@core/technicalTests/domain/technicalTest'
import { localMarkdownTechnicalTest } from '@core/technicalTests/infrastructure/localMarkdownTechnicalTest.repository'

const service = technicalTestService(localMarkdownTechnicalTest())

export default async function TechnicalTest({ navItem }: { navItem?: SidebarNavItem }) {
  const t = await getScopedI18n('commons')
  let techTest: TechnicalTest[] = []
  try {
    techTest = await service.getAll({
      lang: getCurrentLocale(),
      order: 'desc',
    })
  } catch (error) {
    console.error('Error getting technical tests:', error)
  }

  return (
    <SectionContainer id={navItem?.id} aria-label={navItem?.title}>
      <h3 className='border-b-4 border-primary text-left text-3xl font-bold sm:text-4xl'>{t('techTest')}</h3>
      {techTest.length ? (
        <div className='grid grid-cols-[repeat(auto-fill,minmax(min(100%,20rem),1fr))] gap-6'>
          {techTest.map(test => (
            <div key={test.title} className='neumorphism flex flex-col border border-primary/40'>
              <div className='grid h-full content-between gap-4 p-4'>
                <header className='grid grid-cols-[1fr,auto] gap-2'>
                  <p className='text-xl font-bold leading-none'>{test.title}</p>
                  <div className='inline-flex gap-2'>
                    {test.github.map(url => (
                      <Link key={url} href={url} target='_blank' rel='noopener noreferrer' aria-label={url}>
                        <BrandGitHub className='h-5 w-5 transition-colors duration-200 ease-out-expo hover:text-primary' />
                      </Link>
                    ))}
                    {test.webSite && (
                      <Link href={test.webSite} target='_blank' rel='noopener noreferrer' aria-label={test.webSite}>
                        <IconExternalLink className='h-5 w-5 transition-colors duration-200 ease-out-expo hover:text-primary' />
                      </Link>
                    )}
                  </div>
                  <span className='font-semibold leading-none'>{test.enterprise}</span>
                  <span className='col-span-2 text-sm font-light'>{test.testTime}</span>
                </header>
                <div
                  className={test.isMarkdown ? 'markdown-content line-clamp-[8] leading-tight' : 'line-clamp-[8] leading-tight'}
                  dangerouslySetInnerHTML={{
                    __html: test.isMarkdown ? test.description : removerObjectInString(test.description.toString(), test.urlDescription),
                  }}
                />

                <footer className='flex flex-col gap-1'>
                  <div className='flex flex-wrap gap-1'>
                    {test.skills.map(skill => (
                      <Badge key={skill} variant={'default'}>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </footer>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center'>
          <h3 className='text-center text-2xl font-bold'>{'Not found any technical test 😥'}</h3>
        </div>
      )}
    </SectionContainer>
  )
}

function removerObjectInString(str: string, url?: string): string {
  return str.replace(
    /\{url\}/g,
    url
      ? `<a href="${url}" target='_blank' rel='noopener noreferrer' aria-label={url} class='text-secondary/90 transition-colors duration-200 ease-out-expo hover:text-primary/90 underline'>
        link
      </a>`
      : ''
  )
}
