import { BrandGitHub, IconExternalLink, IconImage, IconLink } from "@/components/Icons"
import { AspectRatio } from "@/components/ui/AspectRatio"
import { Badge } from "@/components/ui/Badge"
import { buttonVariants } from "@/components/ui/Button"
import { siteConfig } from "@/config/siteConfig"
import { cn } from "@/lib/utils"
import { getScopedI18n } from "@/locale/server"
import type { SidebarNavItem, SkillName } from "@/types"
import Image from "next/image"
import Link from "next/link"

type ProjectsProps = {
  navItem?: SidebarNavItem
}
type Cards = {
  title: string
  description: React.ReactNode
  webSite?: string
  github: Array<string>
  skills: Array<SkillName>
}
type Project = Cards & {
  image?: string
}
type TechTest = Cards & {
  time: string
  enterprise: string
}

export default async function Projects({ navItem }: ProjectsProps) {
  const t = await getScopedI18n("projects")

  const projects: Project[] = [
    {
      title: t("items.0.title"),
      description: t("items.0.description"),
      image: '/images/og.png',
      webSite: siteConfig.url,
      github: ["https://github.com/cavargasl/portfolio"],
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
      github: ["https://github.com/cavargasl/hackathon-periferia-front", "https://github.com/cavargasl/hackathon-periferia-back"],
      skills: [
        "TypeScript",
        "React.js",
        "Nest.js",
        "Chakra UI",
        "Git",
        "GitHub",
        "Axios",
        "MySQL",
        "Type ORM",
        "Class Validator"
      ]
    },
    {
      title: t("items.2.title"),
      description: t("items.2.description"),
      image: '/images/amar.png',
      webSite: 'http://amar-shop.vercel.app/',
      github: ["https://github.com/cavargasl/eCommerce-Amar"],
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
      title: t("items.3.title"),
      description: t("items.3.description"),
      github: ["https://github.com/cavargasl/course-node"],
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

  const techTest: TechTest[] = [
    {
      title: t("itemsTest.9.title"),
      description: t("itemsTest.9.description", {
        url: <ExternalLink url={"https://dummyjson.com/docs/todos"} />
      }),
      time: t("itemsTest.9.time"),
      github: ["https://github.com/cavargasl/cs3-test"],
      webSite: "https://cs3-test-camilovargas123.vercel.app/",
      enterprise: "CS3 - Comercializadora de software, servicios y suministros",
      skills: [
        "TypeScript",
        "React.js",
        "Git",
        "GitHub",
        "Tailwind CSS",
        "React Query",
        "Zod",
        "Jest",
        "Redux",
        "Radix",
        "Axios",
        "Tailwind-merge",
        "React Hook Form",
        "clsx",
      ]
    },
    {
      title: t("itemsTest.0.title"),
      description: t("itemsTest.0.description"),
      time: t("itemsTest.0.time"),
      github: ["https://github.com/cavargasl/promarketing-test"],
      webSite: "https://promarketing-test.vercel.app/",
      enterprise: "ProMarketing",
      skills: [
        "TypeScript",
        "Next.js",
        "Git",
        "GitHub",
        "Tailwind CSS",
        "clsx",
        "Tailwind-merge"
      ]
    },
    {
      title: t("itemsTest.1.title"),
      description: t("itemsTest.1.description", {
        url: <ExternalLink url={"https://www.moviesshop.co/chaqueta-hombre-mandalorian-236732/p?skuId=12255"} />
      }),
      time: t("itemsTest.1.time"),
      github: ["https://github.com/cavargasl/mic-test"],
      webSite: "https://mic-test-v1.vercel.app/",
      enterprise: "Maquila Internacional de Confección (MIC)",
      skills: [
        "TypeScript",
        "React.js",
        "Git",
        "GitHub",
        "Chakra UI",
        "Redux",
        "Styled Components"
      ]
    },
    {
      title: t("itemsTest.2.title"),
      description: t("itemsTest.2.description"),
      time: t("itemsTest.2.time"),
      github: ["https://github.com/cavargasl/one-consultans-test"],
      enterprise: "One Consultants SAS",
      skills: [
        "TypeScript",
        "React.js",
        "Git",
        "GitHub",
        "Chakra UI",
        "Axios",
        "Redux",
      ]
    },
    {
      title: t("itemsTest.3.title"),
      description: t("itemsTest.3.description", {
        url: <ExternalLink url={"https://www.coinlore.com/cryptocurrency-data-api"} />
      }),
      time: t("itemsTest.3.time"),
      github: ["https://github.com/cavargasl/cobrando-test"],
      webSite: "https://cobrando-test.netlify.app/",
      enterprise: "Cobrando BPO",
      skills: [
        "TypeScript",
        "React.js",
        "Git",
        "GitHub",
        "Chakra UI",
        "Material UI",
        "SASS",
        "Redux",
        "Axios",
        "React Query"
      ]
    },
    {
      title: t("itemsTest.4.title"),
      description: t("itemsTest.4.description"),
      time: t("itemsTest.4.time"),
      github: ["https://github.com/cavargasl/jeduca-test"],
      enterprise: "Jeduca",
      skills: [
        "TypeScript",
        "React.js",
        "Git",
        "GitHub",
        "Chakra UI",
        "Redux",
        "React Hook Form"
      ]
    },
    {
      title: t("itemsTest.5.title"),
      description: t("itemsTest.5.description", {
        url: <ExternalLink url={"https://jsonplaceholder.typicode.com/"} />
      }),
      time: t("itemsTest.5.time"),
      github: ["https://github.com/cavargasl/empleamos-temporales-test"],
      webSite: "https://empleamos-temporales-test.netlify.app/",
      enterprise: "Empleamos Temporales",
      skills: [
        "TypeScript",
        "React.js",
        "Git",
        "GitHub",
        "Material UI",
        "Redux",
        "React Hook Form",
        "Axios",
        "Styled Components"
      ]
    },
    {
      title: t("itemsTest.6.title"),
      description: t("itemsTest.6.description", {
        url: <ExternalLink url={"https://dummyapi.io/"} />
      }),
      time: t("itemsTest.6.time"),
      github: ["https://github.com/cavargasl/titaMedia-test"],
      webSite: "https://titamedia-test.netlify.app/",
      enterprise: "Tita Media",
      skills: [
        "TypeScript",
        "React.js",
        "Git",
        "GitHub",
        "Redux",
        "React Hook Form",
        "Axios",
        "Styled Components",
        "Auth0"
      ]
    },
    {
      title: t("itemsTest.7.title"),
      description: t("itemsTest.7.description", {
        url: <ExternalLink url={"/documents/test_weplot.pdf"} />
      }),
      time: t("itemsTest.7.time"),
      github: ["https://github.com/cavargasl/test-weplot-front", "https://github.com/cavargasl/test-weplot-back"],
      webSite: "https://test-weplot.netlify.app/",
      enterprise: "Intuition Business",
      skills: [
        "JavaScript",
        "React.js",
        "Git",
        "GitHub",
        "React Hook Form",
        "SASS",
        "Express.js",
        "Node.js",
        "MongoDB"
      ]
    },
    {
      title: t("itemsTest.8.title"),
      description: t("itemsTest.8.description", {
        url: <ExternalLink url={"https://catfact.ninja/"} />
      }),
      time: t("itemsTest.8.time"),
      github: ["https://github.com/cavargasl/test-lya-electronic"],
      webSite: "https://test-lya-electronic.netlify.app/",
      enterprise: "LA Electronic",
      skills: [
        "JavaScript",
        "React.js",
        "Git",
        "GitHub",
        "SASS",
        "Ant Design"
      ]
    },
  ]
  return (
    <section
      id={navItem?.id}
      aria-label={navItem?.title}
      className='flex h-full min-h-screen flex-col items-center gap-16 p-8 lg:px-12'
    >
      <h3 className='border-b-4 border-secondary text-4xl font-bold sm:text-5xl'>{navItem?.title}</h3>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,25rem),1fr))] gap-8">
        {
          projects.map(project => (
            <div
              key={project.title}
              className="flex flex-col rounded-sm border border-secondary shadow-md shadow-secondary"
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
                  <p className="text-2xl font-bold leading-none">{project.title}</p>
                  <div className="inline-flex gap-2">
                    {
                      project.webSite &&
                      <Link href={project.webSite} target="_blank" rel="noopener noreferrer" aria-label={project.webSite}>
                        <IconExternalLink className='h-5 w-5 transition-colors duration-200 ease-out-expo hover:text-secondary' />
                      </Link>
                    }
                    {
                      project.github.map(url => (
                        <Link key={url} href={url} target="_blank" rel="noopener noreferrer" aria-label={url}>
                          <BrandGitHub className='h-5 w-5 transition-colors duration-200 ease-out-expo hover:text-primary' />
                        </Link>
                      ))
                    }
                  </div>
                </header>
                <p className="line-clamp-3 leading-tight" title={project.description?.toString()}>{project.description}</p>
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

      <h3 className='border-b-4 border-primary text-left text-3xl font-bold sm:text-4xl'>{t("techTest")}</h3>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,20rem),1fr))] gap-6">
        {
          techTest.map(test => (
            <div
              key={test.title}
              className="flex flex-col rounded-sm border border-primary shadow-md shadow-primary"
            >
              <div className="grid h-full content-between gap-4 p-4">
                <header className="grid grid-cols-[1fr,auto] gap-2">
                  <p className="text-xl font-bold leading-none">{test.title}</p>
                  <div className="inline-flex gap-2">
                    {
                      test.webSite &&
                      <Link href={test.webSite} target="_blank" rel="noopener noreferrer" aria-label={test.webSite}>
                        <IconExternalLink className='h-5 w-5 transition-colors duration-200 ease-out-expo hover:text-primary' />
                      </Link>
                    }
                    {
                      test.github.map(url => (
                        <Link key={url} href={url} target="_blank" rel="noopener noreferrer" aria-label={url}>
                          <BrandGitHub className='h-5 w-5 transition-colors duration-200 ease-out-expo hover:text-primary' />
                        </Link>
                      ))
                    }
                  </div>
                  <span className="font-semibold leading-none">{test.enterprise}</span>
                  <span className="col-span-2 text-sm font-light">{test.time}</span>
                </header>
                <p className="line-clamp-[7] leading-tight" title={removerObjectInString(test.description?.toString())}>{test.description}</p>
                <footer className="flex flex-col gap-1">
                  <p>{t("tech") + ":"}</p>
                  <div className="flex flex-wrap gap-1">
                    {test.skills.sort().map((skill, idx) => <Badge key={idx} variant={"default"} className="px-1.5 py-0">{skill}</Badge>)}
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

function removerObjectInString(str?: string): string {
  if (!str) return ""
  return str.replace(/\,\[object Object\],/g, "l͟i͟n͟k͟")
}

function ExternalLink({ url }: { url: string }) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={url}
      className={cn(buttonVariants({ variant: "link", size: "icon" }), "h-0 w-fit p-0 text-secondary transition-colors duration-200 ease-out-expo hover:text-primary")}>
      <IconLink className='h-4 w-4 ' />
    </Link>
  )
}