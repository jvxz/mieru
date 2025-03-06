import type { Metadata } from 'next'
import { Providers } from '@/components/providers'
import { Radio_Canada_Big } from 'next/font/google'
import './globals.css'

const radioCanadaBig = Radio_Canada_Big({
  subsets: ['latin'],
  variable: '--font-radio-canada-big',
  weight: ['400', '500', '600', '700'],
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
      className={radioCanadaBig.variable}
    >
      <body className="font-sans antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
