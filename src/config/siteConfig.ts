import { getI18n } from "@/locale/server"
import type { SidebarNavItems } from "@/types"

export async function getSiteConfig() {
  const t = await getI18n()

  return {
    name: t("siteConfig.title"),
    description: t("siteConfig.description"),
    url: process.env.NEXT_PUBLIC_APP_URL,
    //ogImage: `${process.env.NEXT_PUBLIC_APP_URL}/open-graph-image.png}`,
    mainNav: [
      {
        title: t("siteConfig.sidebarNav.aboutMe"),
      },
      {
        title: t("siteConfig.sidebarNav.projects"),
      },
      {
        title: t("siteConfig.sidebarNav.experience"),
      },
      {
        title: t("siteConfig.sidebarNav.education"),
      },
      {
        title: t("siteConfig.sidebarNav.skills"),
      },
      {
        title: t("siteConfig.sidebarNav.contact"),
      }
    ] satisfies SidebarNavItems,
    links: {
      twitter: "https://twitter.com/cavargasl",
      github: "https://github.com/cavargasl",
      LinkedIn: "https://www.linkedin.com/in/cavargasl/",
    }
  }
}

