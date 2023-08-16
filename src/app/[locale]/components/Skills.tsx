import { BrandChakraUI, BrandDrizzle, BrandExpress, BrandFigma, BrandFirebase, BrandGit, BrandGitHub, BrandGitLab, BrandJavaScript, BrandJest, BrandJira, BrandMUI, BrandMongoDB, BrandMySQL, BrandNest, BrandNext, BrandNode, BrandPostman, BrandPrisma, BrandRadix, BrandReact, BrandReactQuery, BrandReactTesting, BrandRedux, BrandStyledComponent, BrandTRPC, BrandTailwind, BrandTypeScript, BrandVSCode, BrandVitest, IconCSS, IconHTML } from '@/components/Icons';
import SkillCard from "@/components/SkillCard";
import { Separator } from "@/components/ui/Separator";
import { cn } from "@/lib/utils";

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
      {
        title: 'Jira Software',
        icon: <BrandJira />
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
        title: 'Radix',
        icon: <BrandRadix />
      },
    ]
  },
]
export default function Skills() {
  return (
    <div className="grid w-full grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-28">
      {
        skills.map((item, idx) => (
          <fieldset key={item.section} className={cn("relative flex flex-col gap-2 rounded-sm border-secondary p-4", item.colSpan)}>
            <legend className="px-1 text-center text-2xl font-bold text-secondary">{item.section}</legend>
            {idx > 0 && <Separator orientation="horizontal" className={cn("absolute left-0 top-[calc(-32px-2rem)] block bg-secondary/70 sm:hidden")} />}
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
                    className="absolute left-0 top-[calc(-32px-3.5rem)] hidden bg-secondary/70 sm:block"
                  />
                }
                {
                  idx !== skills.length - 1 &&
                  <Separator
                    orientation="horizontal"
                    className="absolute -bottom-14 left-0 hidden bg-secondary/70 sm:block"
                  />
                }
              </>
            }
            {
              idx !== skills.length - 1 && !item.colSpan && !skills[idx + 1].colSpan &&
              <Separator
                orientation="vertical"
                className={"absolute -right-14 bottom-0 hidden bg-secondary/70 sm:block"}
              />
            }
          </fieldset>
        ))
      }
    </div>
  )
}
