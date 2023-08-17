import { getI18n } from "@/locale/server"
import type { SidebarNavItems } from "@/types"

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"

export const siteConfig = {
  name:"Camilo Vargas | Frontend Developer",
  description: "Portafolio profesional de Camilo Vargas, desarrollador frontend.",
  url: BASE_URL,
  ogImage: `${BASE_URL}/og.png}`,
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
        id: "projects",
        title: t("siteConfig.sidebarNav.projects"),
      },
      {
        id: "experience",
        title: t("siteConfig.sidebarNav.experience"),
      },
      {
        id: "education",
        title: t("siteConfig.sidebarNav.education"),
      },
      {
        id: "skills",
        title: t("siteConfig.sidebarNav.skills"),
      },
      {
        id: "contact",
        title: t("siteConfig.sidebarNav.contact"),
      }
    ] satisfies SidebarNavItems,
    
  }
}
