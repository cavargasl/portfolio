import { BrandGitHub, IconExternalLink, IconImage } from "@/components/Icons"
import { AspectRatio } from "@/components/ui/AspectRatio"
import { Badge } from "@/components/ui/Badge"
import { siteConfig } from "@/config/siteConfig"
import { getScopedI18n } from "@/locale/server"
import type { SidebarNavItem, SkillName } from "@/types"
import Image from "next/image"
import Link from "next/link"

type ProjectsProps = {
  navItem?: SidebarNavItem
}
type Project = {
  title: string
  description: string
  image?: string
  url?: string
  github: string
  skills: Array<SkillName>
}
export default async function Projects({ navItem }: ProjectsProps) {
  const t = await getScopedI18n("projects")

  const projects: Project[] = [
    {
      title: t("items.0.title"),
      description: t("items.0.description"),
      image: '/images/og.png',
      url: siteConfig.url,
      github: "https://github.com/cavargasl/portfolio",
      skills: [
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Git",
        "GitHub",
        "Radix"
      ] 
    },
    {
      title: t("items.1.title"),
      description: t("items.1.description"),
      image: '/images/hackathon.png',
      github: "https://github.com/cavargasl/hackathon-periferia-front",
      skills: [
        "TypeScript",
        "React.js",
        "Chakra UI",
        "Git",
        "GitHub",
        "Axios"
      ]
    },
    {
      title: t("items.2.title"),
      description: t("items.2.description"),
      github: "https://github.com/cavargasl/hackathon-periferia-back",
      skills: [
        "TypeScript",
        "Nest.js",
        "Git",
        "GitHub",
        "MySQL",
        "Type ORM",
        "Class Validator"
      ]
    },
    {
      title: t("items.3.title"),
      description: t("items.3.description"),
      image: '/images/amar.png',
      url: 'http://amar-shop.vercel.app/',
      github: "https://github.com/cavargasl/eCommerce-Amar",
      skills: [
        "TypeScript",
        "Next.js",
        "Git",
        "GitHub",
        "Chakra UI",
        "Axios",
        "Redux",
      ]
    },
    {
      title: t("items.4.title"),
      description: t("items.4.description"),
      github: "https://github.com/cavargasl/course-node",
      skills: [
        "TypeScript",
        "Node.js",
        "Git",
        "GitHub",
        "ESLint",
        "Express.js",
      ]
    },
  ]
  return (
    <section
      id={navItem?.id}
      aria-label={navItem?.title}
      className='flex h-full min-h-screen flex-col items-center gap-16 px-8 lg:px-12'
    >
      <h3 className='border-b-4 border-secondary text-4xl font-bold sm:text-5xl'>{navItem?.title}</h3>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,25rem),1fr))] gap-8">
        {
          projects.map(project => (
            <div
              key={project.title}
              className="flex flex-col rounded-md border border-secondary shadow-md shadow-secondary"
            >
              <AspectRatio ratio={16 / 9} className="rounded-t-sm" >
                {
                  project.image ?
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="inset-0 rounded-t-sm object-cover"
                      quality={70}
                      sizes="(max-width: 768px) 92vw, (max-width: 1200px) 70vw, 32vw"
                    />
                    :
                    <IconImage strokeWidth="1" className="inset-0 h-full w-full rounded-t-sm bg-muted object-cover text-background" />
                }
              </AspectRatio>
              <div className="grid h-full content-between gap-4 p-4">
                <header className="flex w-full items-center justify-between">
                  <p className="text-2xl font-bold">{project.title}</p>
                  <div className="inline-flex gap-2">
                    {
                      project.url &&
                      <Link href={project.url} target="_blank">
                        <IconExternalLink className='h-5 w-5 transition-colors duration-200 ease-out-expo hover:text-secondary' />
                      </Link>
                    }
                    <Link href={project.github} target="_blank">
                      <BrandGitHub className='h-5 w-5 transition-colors duration-200 ease-out-expo hover:text-secondary' />
                    </Link>
                  </div>
                </header>
                <p className="line-clamp-3 leading-tight" title={project.description.length > 233 ? project.description : ''}>{project.description}</p>
                <footer className="flex flex-col gap-1">
                  <p>{t("tech") + ":"}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.skills.sort().map((skill, idx) => <Badge key={idx} variant={"secondary"}>{skill}</Badge>)}
                  </div>
                </footer>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}
