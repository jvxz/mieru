import type { ComponentProps } from 'react'
import { interactiveStyles } from '@/lib/styles'
import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        interactiveStyles.base,
        interactiveStyles.variant.default,
        'placeholder:text-muted-foreground field-sizing-content min-h-16 w-full cursor-text p-2 transition-[color,box-shadow,opacity] md:text-sm',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
