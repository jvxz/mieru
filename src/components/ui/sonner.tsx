'use client'
import type { ToasterProps } from 'sonner'
import { useTheme } from 'next-themes'
import { Toaster as Sonner } from 'sonner'

function Toaster({ ...props }: ToasterProps) {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast !bg-card !text-card-foreground !border-border !shadow',
          description: '!text-muted-foreground',
          actionButton:
            '!bg-primary !text-primary-foreground font-medium',
          cancelButton:
            '!bg-muted !text-muted-foreground font-medium',
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
