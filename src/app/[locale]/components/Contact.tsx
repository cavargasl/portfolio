import { buttonVariants } from "@/components/ui/Button"
import { getSiteConfig } from "@/config/siteConfig"
import { getCurrentLocale, getScopedI18n } from "@/locale/server"
import Link from "next/link"
import { SocialMedia } from "./layouts/components/SocialMedia"

export default async function Contact() {
  const t = await getScopedI18n("contact")
  const locale = getCurrentLocale()
  const { mainNav } = await getSiteConfig()
  const contact = mainNav.find(item => item.id === 'contact')

  return (
    <section
      id={contact?.id}
      aria-label={contact?.title}
      className='flex h-full min-h-screen flex-col items-center justify-center gap-12 px-8 pb-14 pt-10 lg:px-12'
    >
      <h2 className='text-center text-4xl font-extrabold'>{t("title")}</h2>
      <p className='w-full text-center text-lg md:w-[60ch]'>{t("content", { br: <br /> })}</p>
      <SocialMedia />
      <Link
        href={`/documents/${locale}_CamiloVargas.pdf`}
        target="_blank"
        aria-label={t("cv")}
        rel="noopener noreferrer"
        className={buttonVariants()}
      >
        {t("cv")}
      </Link>
    </section>
  )
}
