import { getScopedI18n } from '@/locale/server'

export default async function Page() {
  const t = await getScopedI18n("home")
  return (
    <>
      <h1>{t("title")}</h1>
    </>
  )
}