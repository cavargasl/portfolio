
import { getDictionary, type Locale } from "@/i18n"
import type { SidebarNavItems } from "@/types"

export async function getSiteConfig(lang: Locale) {
  const { siteConfig } = await getDictionary(lang)

  return {
    name: siteConfig.title,
    description: siteConfig.description,
    url: process.env.NEXT_PUBLIC_APP_URL,
    //ogImage: `${process.env.NEXT_PUBLIC_APP_URL}/open-graph-image.png}`,
    mainNav: [
      {
        title: siteConfig.sidebarNav.aboutMe,
      },
      {
        title: siteConfig.sidebarNav.projects,
      },
      {
        title: siteConfig.sidebarNav.experience,
      },
      {
        title: siteConfig.sidebarNav.education,
      },
      {
        title: siteConfig.sidebarNav.skills,
      },
      {
        title: siteConfig.sidebarNav.contact,
      }
    ] satisfies SidebarNavItems,
    links: {
      twitter: "https://twitter.com/cavargasl",
    }
  }
}

