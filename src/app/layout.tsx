import type { Metadata } from 'next'
import { Providers } from '@/components/providers'
import { ThemeToggle } from '@/components/theme-toggle'
import { Archivo, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const sans = Archivo({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'],
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
      // eslint-disable-next-line readable-tailwind/no-unnecessary-whitespace
      className={`${sans.variable}  ${mono.variable}`}
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
          {children}
        </Providers>
      </body>
    </html>
  )
}
