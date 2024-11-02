import type { SidebarNavItem } from '@/types'
import { getI18n } from '@/locale/server'
import { siteConfig } from '@core/shared/const/siteConfig'

export async function getSiteConfig() {
  const t = await getI18n()

  return {
    ...siteConfig,
    name: t('siteConfig.title'),
    description: t('siteConfig.description'),
    mainNav: [
      {
        id: 'aboutMe',
        title: t('siteConfig.sidebarNav.aboutMe'),
      },
      {
        id: 'skills',
        title: t('siteConfig.sidebarNav.skills'),
      },
      {
        id: 'experience',
        title: t('siteConfig.sidebarNav.experience'),
      },
      {
        id: 'projects',
        title: t('siteConfig.sidebarNav.projects'),
      },
      {
        id: 'technicalTest',
        title: t('siteConfig.sidebarNav.technicalTest'),
      },
      {
        id: 'education',
        title: t('siteConfig.sidebarNav.education'),
      },
      {
        id: 'contact',
        title: t('siteConfig.sidebarNav.contact'),
      },
    ] satisfies SidebarNavItem[],
  }
}
