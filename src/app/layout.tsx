import type { Metadata } from 'next'
import { Providers } from '@/components/providers'
import { ThemeToggle } from '@/components/theme-toggle'
import { Public_Sans } from 'next/font/google'
import './globals.css'

const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-public-sans',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'mieru 🎀',
  description: 'mieru : jamie\'s personal ui kit',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={publicSans.variable}
    >
      {process.env.NODE_ENV === 'development' && (
        <head>
          <script
            crossOrigin="anonymous"
            src="//unpkg.com/react-scan/dist/auto.global.js"
          />
        </head>
      )}
      <body className="font-ibm-plex-sans container !mx-auto w-full !px-0 transition-colors">
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
