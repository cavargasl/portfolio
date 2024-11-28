import type { getI18N } from '@/i18n'
import { siteConfig } from '@core/shared/const/siteConfig'
import type { SidebarNavItem } from '@core/shared/domain/navBar'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type SiteConfigExtended = typeof siteConfig & {
  mainNav: Record<SidebarNavItem["id"], SidebarNavItem>
}
export const siteConfigExtended = (t:ReturnType<typeof getI18N>): SiteConfigExtended => ({
  ...siteConfig,
  name: t.siteConfig.title,
  description: t.siteConfig.description,
  mainNav: {
    aboutMe: {
      id: 'aboutMe',
      title: t.siteConfig.sidebarNav.aboutMe,
    },
    experience: {
      id: 'experience',
      title: t.siteConfig.sidebarNav.experience,
    },
    projects: {
      id: 'projects',
      title: t.siteConfig.sidebarNav.projects,
    },
    technicalTest: {
      id: 'technicalTest',
      title: t.siteConfig.sidebarNav.technicalTest,
    },
    education: {
      id: 'education',
      title: t.siteConfig.sidebarNav.education,
    },
    skills: {
      id: 'skills',
      title: t.siteConfig.sidebarNav.skills,
    },
    contact: {
      id: 'contact',
      title: t.siteConfig.sidebarNav.contact,
    },
  }
})
