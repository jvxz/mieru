'use client'
import { cn } from '@/lib/utils'
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
      <svg
        className={cn(
          'iconify',
          resolvedTheme === 'light' ? 'ph--sun' : 'ph--moon',
        )}
      />
    </Button>
  )
}

export { ThemeToggle }

