import type { VariantProps } from 'class-variance-authority'
import { interactiveStyles } from '@/lib/styles'
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import * as React from 'react'

const badgeVariants = cva(
  `${interactiveStyles.base} inline-flex w-fit shrink-0 cursor-default items-center justify-center px-2 py-0.5 text-xs tracking-wide select-none`,
  {
    variants: {
      variant: {
        default: `${interactiveStyles.variant.default}`,
        destructive: `${interactiveStyles.variant.destructive}`,
        outline: `${interactiveStyles.variant.outline}`,
        ghost: `${interactiveStyles.variant.ghost}`,
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({
        variant,
      }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
