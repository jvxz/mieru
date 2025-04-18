import type { Metadata } from 'next'
import { Providers } from '@/components/providers'
import { ThemeToggle } from '@/components/theme-toggle'
import { JetBrains_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import { Header } from './(index)/_components/header'
import './globals.css'

const sans = localFont({
  src: [
    {
      path: '../../public/font/Nacelle-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/font/Nacelle-SemiBold.otf',
      weight: '600',
      style: 'medium',
    },
    {
      path: '../../public/font/Nacelle-Bold.otf',
      weight: '700',
      style: 'bold',
    },
  ],
  variable: '--font-sans',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: 'mieru 🎀',
  description: 'mieru : jamie\'s personal ui kit',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"

      className={`${sans.variable} antialiased ${mono.variable}`}
    >
      {process.env.NODE_ENV === 'development' && (
        <head>
          <script
            crossOrigin="anonymous"
            src="//unpkg.com/react-scan/dist/auto.global.js"
          />
        </head>
      )}
      <body className="font-ibm-plex-sans container !mx-auto flex h-svh w-full flex-col !px-0 transition-colors">
        <Providers>
          {process.env.NODE_ENV === 'development' && (
            <ThemeToggle
              className="absolute top-4 left-4"
            />
          )}
          <main className="my-4 flex h-full flex-col gap-4">
            <Header />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
