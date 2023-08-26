import { getI18n } from "@/locale/server"
import type { SidebarNavItem } from "@/types"

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "http://127.0.0.1:3000"

export const siteConfig = {
  name:"Camilo Vargas | Frontend Developer",
  description: "Personal web portfolio, where you can find information about me, my skills, my work experience, and my projects.",
  url: BASE_URL,
  ogImage: `${BASE_URL}/images/og.png`,
  links: {
    twitter: "https://twitter.com/cavargasl",
    github: "https://github.com/cavargasl",
    LinkedIn: "https://www.linkedin.com/in/cavargasl/",
  }
}
export async function getSiteConfig() {
  const t = await getI18n()

  return {
    ...siteConfig,
    name: t("siteConfig.title"),
    description: t("siteConfig.description"),
    mainNav: [
      {
        id: "aboutMe",
        title: t("siteConfig.sidebarNav.aboutMe"),
      },
      {
        id: "skills",
        title: t("siteConfig.sidebarNav.skills"),
      },
      {
        id: "experience",
        title: t("siteConfig.sidebarNav.experience"),
      },
      {
        id: "projects",
        title: t("siteConfig.sidebarNav.projects"),
      },
      {
        id: "education",
        title: t("siteConfig.sidebarNav.education"),
      },
      {
        id: "contact",
        title: t("siteConfig.sidebarNav.contact"),
      }
    ] satisfies SidebarNavItem[],
    
  }
}
