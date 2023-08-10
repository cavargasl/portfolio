import { getScopedI18n } from '@/locale/server'

export default async function Page() {
  const t = await getScopedI18n("home")
  return (
    <section className='flex h-full min-h-screen w-full flex-col justify-center gap-10 px-8 lg:px-12'>
      <div className='flex flex-col items-center gap-2 md:w-fit'>
        <h1 className='w-fit bg-gradient-to-r from-primary to-accent bg-clip-text text-center font-mono text-6xl font-bold !leading-tight text-transparent sm:text-7xl'>Camilo Vargas</h1>
        <h2 className='w-full rounded-sm bg-foreground px-2 py-1 text-center text-xl text-background'>{t("iAm")}</h2>
      </div>
      <p className='text-xl'>{t("welcome")}</p>
      <div>
        redes sociales
      </div>
    </section>
  )
}