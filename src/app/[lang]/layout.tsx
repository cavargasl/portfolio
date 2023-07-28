
export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}

interface RootProps {
  children: React.ReactNode
  params: { lang: string }
}
export default function Root({ children, params }: RootProps) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  )
}