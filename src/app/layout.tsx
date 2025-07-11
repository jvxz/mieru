import type { Metadata } from 'next'
import { Providers } from '@/components/providers'
import { ThemeToggle } from '@/components/theme-toggle'
import { IBM_Plex_Sans } from 'next/font/google'
import './globals.css'

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-ibm-plex-sans',
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
      className={ibmPlexSans.variable}
    >
      {process.env.NODE_ENV === 'development' && (
        <head>
          <script
            crossOrigin="anonymous"
            src="//unpkg.com/react-scan/dist/auto.global.js"
          />
        </head>
      )}
      <body className="font-ibm-plex-sans">
        <Providers>
          {process.env.NODE_ENV === 'development' && (
            <ThemeToggle
              className="absolute top-4 left-4"
            />
          )}
          {children}
          {/* <div className="grid h-screen place-items-center">soon</div> */}
        </Providers>
      </body>
    </html>
  )
}
