import { getScopedI18n } from "@/locale/server";
import type { SidebarNavItem } from "@/types";
import { SocialMedia } from "./layouts/components/SocialMedia";

interface AboutMeProps {
  navItem?: SidebarNavItem
}

export default async function AboutMe({ navItem }: AboutMeProps) {
  const t = await getScopedI18n("home")

  return (
    <section
      id={navItem?.id}
      aria-label={navItem?.title}
      className='flex h-full min-h-screen flex-col items-center justify-center gap-16 px-8 pb-14 pt-10 lg:px-12'
    >
      <div className='flex flex-col items-center gap-2 lg:w-fit'>
        <h1 className='w-full bg-gradient-to-r from-primary to-accent bg-clip-text text-center font-mono text-6xl font-bold !leading-tight text-transparent sm:text-7xl'>Camilo Vargas</h1>
        <h2 className='text-center text-xl text-foreground/80'>{t("iAm")}</h2>
      </div>
      <p className='w-full text-center text-xl md:w-[58ch] xl:w-[66ch]'>{t("welcome")}</p>
      <SocialMedia />
    </section>
  )
}
