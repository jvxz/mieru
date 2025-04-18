'use client'
import type { ThemeProviderProps } from 'next-themes'
import dynamic from 'next/dynamic'
import { TailwindIndicator } from './tailwind-indicator'
import { Toaster } from './ui/sonner'

const NextThemesProvider = dynamic(
  async () => import('next-themes').then(e => e.ThemeProvider),
  {
    ssr: false,
  },
)

function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
      <Toaster />
      <TailwindIndicator />
    </NextThemesProvider>
  )
}

export { Providers }
