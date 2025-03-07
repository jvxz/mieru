import type { Metadata } from 'next'
import { Providers } from '@/components/providers'
import { ThemeToggle } from '@/components/theme-toggle'
import { IBM_Plex_Sans } from 'next/font/google'
import './globals.css'

const sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'mieru 🎀',
  description: 'mieru : jamie\'s personal ui kit',
}

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={sans.variable}
    >
      <body className="font-sans">
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
