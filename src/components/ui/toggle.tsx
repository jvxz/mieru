'use client'
import type { VariantProps } from 'class-variance-authority'
import { interactiveStyles } from '@/lib/styles'
import { cn } from '@/lib/utils'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import { cva } from 'class-variance-authority'

const toggleVariants = cva(
  cn(interactiveStyles.base, `
    data-[state=on]:bg-accent data-[state=on]:text-accent-foreground
    p-0
  `),
  // `
  //   hover:bg-muted hover:text-muted-foreground
  //   data-[state=on]:bg-accent data-[state=on]:text-accent-foreground
  //   focus-visible:border-ring focus-visible:ring-ring/50
  //   focus-visible:ring-[3px]
  //   aria-invalid:ring-destructive/20 aria-invalid:border-destructive
  //   dark:aria-invalid:ring-destructive/40
  //   inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium
  //   whitespace-nowrap transition-[color,box-shadow] outline-none
  //   disabled:pointer-events-none disabled:opacity-50
  //   [&_svg]:pointer-events-none [&_svg]:shrink-0
  //   [&_svg:not([class*='size-'])]:size-4
  // `,
  {
    variants: {
      variant: {
        default: [interactiveStyles.variant.ghost, `
          m-0 border border-transparent
        `],
        outline: [interactiveStyles.variant.outline, `
          data-[state=on]:border-primary/30
          m-0
        `],
      },
      size: {
        default: [interactiveStyles.size.default, 'text-sm'],
        sm: [interactiveStyles.size.sm, 'text-sm'],
        lg: [interactiveStyles.size.lg, 'text-sm'],
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({
        variant,
        size,
        className,
      }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
