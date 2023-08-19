import { buttonVariants } from "@/components/ui/Button"
import { getScopedI18n } from "@/locale/server"
import { type SidebarNavItem } from "@/types"
import Link from "next/link"
import { SocialMedia } from "./layouts/components/SocialMedia"

interface ContactProps {
  navItem?: SidebarNavItem
}
export default async function Contact({ navItem }: ContactProps) {
  const t = await getScopedI18n("contact")

  return (
    <section
      id={navItem?.id}
      aria-label={navItem?.title}
      className='flex h-full min-h-screen flex-col items-center justify-center gap-12 px-8 pb-14 pt-10 lg:px-12'
    >
      <h2 className='text-center text-3xl font-extrabold sm:text-4xl'>{t("title")}</h2>
      <p className='w-full text-center text-lg md:w-[60ch]'>{t("content", { br: <br /> })}</p>
      <SocialMedia />
      <Link
        href={`/documents/es_CamiloVargas.pdf`}
        target="_blank"
        aria-label={t("cv")}
        rel="noopener noreferrer"
        className={buttonVariants({ variant: "outline" })}
      >
        {t("cv")}
      </Link>
    </section>
  )
}
