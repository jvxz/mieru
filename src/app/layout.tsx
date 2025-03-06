import type { Metadata } from 'next'
import { Providers } from '@/components/providers'
import { Inria_Sans } from 'next/font/google'
import './globals.css'

const inriaSans = Inria_Sans({
  subsets: ['latin'],
  variable: '--font-inria-sans',
  weight: ['300', '400', '700'],
})

export const metadata: Metadata = {
  title: 'mieru 🎀',
  description: 'mieru : jamie\'s personal ui kit',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inriaSans.variable}>
      <body className="font-sans antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
