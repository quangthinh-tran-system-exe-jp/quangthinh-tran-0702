import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Plushie Store - かわいいぬいぐるみ専門店',
  description: '色が選べるかわいいぬいぐるみの通販サイト',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}