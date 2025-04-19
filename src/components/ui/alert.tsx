import type { VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { staticStyles } from '@/lib/styles'
import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

const alertVariants = cva(
  `${staticStyles.base} [&>svg]:text-foreground [&>svg]:size-4 [&>svg]:-translate-y-0.5 relative grid w-full grid-cols-[0_1fr] items-start gap-y-1.5 py-5 has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg+div]:translate-y-[-3px]`,
  {
    variants: {
      variant: {
        default: staticStyles.variant.default,
        destructive: `${staticStyles.variant.destructive} *:data-[slot=alert-description]:text-destructive/80`,
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
}: ComponentProps<'div'> & VariantProps<typeof alertVariants>) {
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

function AlertTitle({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-title"
      className={cn('col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight', className)}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        'col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed',
        // 'text-muted-foreground text-sm w-full',
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
