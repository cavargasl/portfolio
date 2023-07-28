import type { Lang } from '@/types/lang'
import { getDictionary } from './dictionaries'
import Link from 'next/link'

interface PageProps {
  params: { lang: Lang }
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