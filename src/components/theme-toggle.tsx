'use client'
import { Icon } from '@iconify/react'
import { useTheme } from 'next-themes'
import { Button } from './ui/button'

function ThemeToggle({ ...props }: React.ComponentProps<typeof Button>) {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      size="icon"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      {...props}
    >
      {resolvedTheme === 'dark' ? <Icon icon="ph:sun" /> : <Icon icon="ph:moon" />}
    </Button>
  )
}

export { ThemeToggle }

