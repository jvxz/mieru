import type { VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { interactiveStyles } from '@/lib/styles'
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'

const buttonVariants = cva(
  `${interactiveStyles.base} inline-flex items-center justify-center`,
  {
    variants: {
      variant: {
        default: interactiveStyles.variant.default,
        destructive: interactiveStyles.variant.destructive,
        outline: interactiveStyles.variant.outline,
        ghost: interactiveStyles.variant.ghost,
        link: interactiveStyles.variant.link,
      },
      size: {
        default: interactiveStyles.size.default,
        sm: interactiveStyles.size.sm,
        lg: interactiveStyles.size.lg,
        icon: interactiveStyles.size.icon,
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({
        variant,
        size,
        className,
      }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
