import type { VariantProps } from 'class-variance-authority'
import { staticStyles } from '@/lib/styles'
import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import * as React from 'react'

const alertVariants = cva(
  `
    ${staticStyles.base}
    relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 py-4
    has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3
    [&>svg]:size-4 [&>svg]:translate-y-0.5
  `,
  {
    variants: {
      variant: {
        default: staticStyles.variant.default,
        destructive:
          `
            ${staticStyles.variant.destructive}
            *:data-[slot=alert-description]:text-destructive/80
          `,
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({
        variant,
      }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        'col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight',
        className,
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        `
          text-muted-foreground col-start-2 grid justify-items-start gap-1
          text-sm
          [&_p]:leading-relaxed
        `,
        className,
      )}
      {...props}
    />
  )
}

export {
  Alert,
  AlertDescription,
  AlertTitle,
}
