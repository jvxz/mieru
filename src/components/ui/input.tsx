import { interactiveStyles } from '@/lib/styles'
import { cn } from '@/lib/utils'
import * as React from 'react'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        interactiveStyles.base,
        interactiveStyles.variant.default,
        interactiveStyles.size.default,
        `
          file:text-foreground file:inline-flex file:h-7 file:border-0
          file:bg-transparent file:text-sm file:font-medium
          placeholder:text-muted-foreground
          selection:bg-primary selection:text-primary-foreground
          focus-visible:border-ring/40 focus-visible:ring-0
          flex w-full min-w-0 cursor-text px-3 py-1 transition-all
          md:text-sm
        `,
        className,
      )}
      {...props}
    />
  )
}

export { Input }
