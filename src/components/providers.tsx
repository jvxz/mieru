'use client'
import type { ThemeProviderProps } from 'next-themes'
import { RootProvider as FumadocsRootProvider } from 'fumadocs-ui/provider'
import dynamic from 'next/dynamic'
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
      {...props}
    >
      <FumadocsRootProvider>
        {children}
        <Toaster />
      </FumadocsRootProvider>
    </NextThemesProvider>
  )
}

export { Providers }
