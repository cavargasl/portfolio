import { Fira_Mono as FontMono, Karla as FontSans } from 'next/font/google'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '700'],
})
