import { BrandAxios, BrandChakraUI, BrandCypress, BrandDrizzle, BrandExpress, BrandFigma, BrandFirebase, BrandGit, BrandGitHub, BrandGitLab, BrandJavaScript, BrandJest, BrandJira, BrandMUI, BrandMongoDB, BrandMySQL, BrandNest, BrandNext, BrandNode, BrandPostman, BrandPrisma, BrandRadix, BrandReact, BrandReactQuery, BrandReactTesting, BrandRedux, BrandSlack, BrandStyledComponent, BrandTRPC, BrandTailwind, BrandTypeScript, BrandVSCode, BrandVitest, IconCSS, IconHTML } from '@/components/Icons';
import SkillCard from "@/components/SkillCard";
import { Separator } from "@/components/ui/Separator";
import { cn } from "@/lib/utils";
import { type SidebarNavItem } from '@/types';

const skills = [
  {
    section: 'Languages',
    colSpan: "sm:col-span-2",
    justifyCenter: "justify-center",
    items: [
      {
        title: 'JavaScript',
        icon: <BrandJavaScript />
      },
      {
        title: 'TypeScript',
        icon: <BrandTypeScript />
      },
    ]
  },
  {
    section: 'Frontend',
    colSpan: "sm:col-span-2",
    items: [
      {
        title: 'Next.js',
        icon: <BrandNext />
      },
      {
        title: 'React.js',
        icon: <BrandReact />
      },
      {
        title: 'HTML',
        icon: <IconHTML />
      },
      {
        title: 'CSS',
        icon: <IconCSS />
      },
      {
        title: 'Tailwind CSS',
        icon: <BrandTailwind />
      },
      {
        title: 'Styled Components',
        icon: <BrandStyledComponent />
      },
      {
        title: 'Material UI',
        icon: <BrandMUI />
      },
      {
        title: 'Chakra UI',
        icon: <BrandChakraUI />
      },
      {
        title: 'Radix',
        icon: <BrandRadix />
      },
    ]
  },
  {
    section: 'Backend',
    items: [
      {
        title: 'Node.js',
        icon: <BrandNode />
      },
      {
        title: 'Express.js',
        icon: <BrandExpress />
      },
      {
        title: 'Nest.js',
        icon: <BrandNest />
      },
    ]
  },
  {
    section: 'ORM',
    items: [
      {
        title: 'tRPC',
        icon: <BrandTRPC />
      },
      {
        title: 'Drizzle ORM',
        icon: <BrandDrizzle />
      },
      {
        title: 'Prisma',
        icon: <BrandPrisma />
      },
    ]
  },
  {
    section: 'Database & Cache',
    colSpan: "sm:col-span-2",
    items: [
      {
        title: 'Firebase',
        icon: <BrandFirebase />
      },
      {
        title: 'MongoDB',
        icon: <BrandMongoDB />
      },
      {
        title: 'MySQL',
        icon: <BrandMySQL />
      },
      {
        title: 'React Query',
        icon: <BrandReactQuery />
      },
      {
        title: 'Redux',
        icon: <BrandRedux />
      },
      {
        title: 'Axios',
        icon: <BrandAxios />
      },
    ]
  },
  {
    section: 'Version Control',
    colSpan: "sm:col-span-2",
    items: [
      {
        title: 'Git',
        icon: <BrandGit />
      },
      {
        title: 'GitHub',
        icon: <BrandGitHub />
      },
      {
        title: 'GitLab',
        icon: <BrandGitLab />
      },
    ]
  },
  {
    section: 'Testing',
    items: [
      {
        title: 'Vitest',
        icon: <BrandVitest />
      },
      {
        title: 'Jest',
        icon: <BrandJest />
      },
      {
        title: 'React Testing Library',
        icon: <BrandReactTesting />
      },
      {
        title: 'Cypress',
        icon: <BrandCypress />
      }
    ]
  },
  {
    section: 'Others',
    items: [
      {
        title: 'Figma',
        icon: <BrandFigma />
      },
      {
        title: 'Postman',
        icon: <BrandPostman />
      },
      {
        title: 'Visual Studio Code',
        icon: <BrandVSCode />
      },
      {
        title: 'Jira Software',
        icon: <BrandJira />
      },
      {
        title: 'Slack',
        icon: <BrandSlack />
      },
    ]
  },
]

interface SkillsProps {
  navItem?: SidebarNavItem
}
export default function Skills({ navItem }: SkillsProps = {}) {

  return (
    <section
      id={navItem?.id}
      aria-label={navItem?.title}
      className='flex h-full min-h-screen flex-col items-center gap-16 px-8 lg:px-12'
    >
      <h3 className='border-b-4 border-primary text-4xl font-bold sm:text-5xl'>{navItem?.title}</h3>
      <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-16">
        {
          skills.map((item, idx) => (
            <fieldset key={item.section} className={cn("relative flex flex-col gap-2 rounded-sm border-muted p-4", item.colSpan)}>
              <legend className="line-clamp-1 px-1 text-center text-2xl font-bold text-paragraph">{item.section}</legend>
              {idx > 0 && <Separator orientation="horizontal" className={cn("absolute left-0 top-[calc(-32px-1.25rem)] block sm:hidden")} />}
              <div className={cn("grid auto-rows-[9rem] grid-cols-[repeat(auto-fit,9rem)] justify-center gap-6", item.justifyCenter)}>
                {
                  item.items.map(skill => (
                    <SkillCard key={skill.title} title={skill.title} icon={skill.icon} />
                  ))
                }
              </div>
              {
                item.colSpan &&
                <>
                  {
                    idx > 0 && !skills[idx - 1].colSpan &&
                    <Separator
                      orientation="horizontal"
                      className="absolute left-0 top-[calc(-32px-2rem)] hidden sm:block"
                    />
                  }
                  {
                    idx !== skills.length - 1 &&
                    <Separator
                      orientation="horizontal"
                      className="absolute -bottom-8 left-0 hidden sm:block"
                    />
                  }
                </>
              }
              {
                idx !== skills.length - 1 && !item.colSpan && !skills[idx + 1].colSpan &&
                <Separator
                  orientation="vertical"
                  className={"absolute -right-8 bottom-0 hidden sm:block"}
                />
              }
            </fieldset>
          ))
        }
      </div>
    </section>
  )
}
