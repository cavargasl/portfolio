import Image from 'next/image'
import Link from 'next/link'
import { AspectRatio } from '@/components/ui/AspectRatio'
import { Badge } from '@/components/ui/Badge'
import { BrandGitHub, IconExternalLink, IconImage } from '@/components/Icons'
import SectionContainer from '@/components/SectionContainer'
import { getCurrentLocale } from '@/locale/server'
import { projectsServices } from '@core/projects/application/projectService'
import { localProjects } from '@core/projects/infrastructure/localProjects.repository'
import { type SidebarNavItem } from '@core/shared/domain/navBar'

type ProjectsProps = {
  navItem?: SidebarNavItem
}
const projectsService = projectsServices(localProjects())

export default async function Projects({ navItem }: ProjectsProps) {
  const projects = await projectsService.getAll(getCurrentLocale())

  return (
    <SectionContainer id={navItem?.id} aria-label={navItem?.title}>
      <h3 className='border-b-4 border-secondary text-4xl font-bold sm:text-5xl'>{navItem?.title}</h3>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(min(100%,25rem),1fr))] gap-8'>
        {projects.map(project => (
          <div key={project.title} className='flex flex-col rounded-sm border border-secondary shadow-md shadow-secondary'>
            <AspectRatio ratio={16 / 9} className='rounded-t-sm'>
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className='inset-0 rounded-t-sm object-cover'
                  quality={70}
                  sizes='(max-width: 768px) 92vw, (max-width: 1200px) 70vw, 32vw'
                />
              ) : (
                <IconImage strokeWidth='1' className='inset-0 h-full w-full rounded-t-sm bg-muted object-cover text-background' />
              )}
            </AspectRatio>
            <div className='grid h-full content-between gap-4 p-4'>
              <header className='flex w-full items-center justify-between'>
                <p className='text-2xl font-bold leading-none'>{project.title}</p>
                <div className='inline-flex gap-2'>
                  {project.webSite && (
                    <Link href={project.webSite} target='_blank' rel='noopener noreferrer' aria-label={project.webSite}>
                      <IconExternalLink className='h-5 w-5 transition-colors duration-200 ease-out-expo hover:text-secondary' />
                    </Link>
                  )}
                  {project.github.map(url => (
                    <Link key={url} href={url} target='_blank' rel='noopener noreferrer' aria-label={url}>
                      <BrandGitHub className='h-5 w-5 transition-colors duration-200 ease-out-expo hover:text-primary' />
                    </Link>
                  ))}
                </div>
              </header>
              <p className='line-clamp-3 leading-tight' title={project.description.toString()}>
                {project.description}
              </p>
              <footer className='flex flex-wrap gap-1'>
                {project.skills.map(skill => (
                  <Badge key={skill} variant={'secondary'}>
                    {skill}
                  </Badge>
                ))}
              </footer>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}
