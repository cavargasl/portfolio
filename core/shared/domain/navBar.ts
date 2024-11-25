export type IdsNav = 'aboutMe' | 'projects' | 'experience' | 'education' | 'skills' | 'contact' | 'technicalTest'
interface NavItem {
  id: IdsNav
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
}

export type SidebarNavItem = NavItem
