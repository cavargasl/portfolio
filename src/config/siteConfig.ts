import { getI18n } from "@/locale/server"
import type { SidebarNavItems } from "@/types"

export const siteConfig = {
  name:"Camilo Vargas | Frontend Developer",
  description: "Portafolio profesional de Camilo Vargas, desarrollador frontend.",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ogImage: `${process.env.NEXT_PUBLIC_APP_URL}/og.png}`,
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
    
  }
}

