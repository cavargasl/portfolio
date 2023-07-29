
import { getDictionary, type Locale } from '@/i18n'
import Link from 'next/link'

interface PageProps {
  params: { lang: Locale }
}
export default async function Page({ params: { lang } }: PageProps) {
  const { home } = await getDictionary(lang)
  return (
    <>
      <button>{home.title}</button>
      <br />
      <Link href="/en">change to English</Link>
      <br />
      <Link href="/es">change to Spanish</Link>
    </>
  )
}