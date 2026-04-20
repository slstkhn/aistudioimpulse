import type { Metadata } from 'next'
import './globals.css'
import { AppProvider } from '@/lib/context'

export const metadata: Metadata = {
  title: 'ИМПУЛЬС — Нейростудия',
  description: 'Нейростудия полного цикла. Нейровидео, сайты, презентации, приложения.',
  keywords: 'нейровидео, нейростудия, AI видео, сайты, презентации, приложения, Санкт-Петербург',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=JetBrains+Mono:wght@300;400;500&family=Inter+Tight:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
