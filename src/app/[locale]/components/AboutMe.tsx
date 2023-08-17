import { getScopedI18n } from "@/locale/server";
import { SocialMedia } from "./layouts/components/SocialMedia";

export default async function AboutMe() {
  const t = await getScopedI18n("home")
  return (
    <>
      <div className='flex flex-col items-center gap-2 lg:w-fit'>
        <h1 className='w-full bg-gradient-to-r from-primary to-accent bg-clip-text text-center font-mono text-6xl font-bold !leading-tight text-transparent sm:text-7xl'>Camilo Vargas</h1>
        <h2 className='text-center text-xl text-foreground/80'>{t("iAm")}</h2>
      </div>
      <p className='w-full text-xl md:w-[58ch] xl:w-[66ch]'>{t("welcome")}</p>
      <SocialMedia />
    </>
  )
}
