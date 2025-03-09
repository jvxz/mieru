'use client'
import { interactiveStyles } from '@/lib/styles'
import { cn } from '@/lib/utils'
import { Icon } from '@iconify/react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import * as React from 'react'

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        interactiveStyles.base,
        interactiveStyles.variant.default,
        `
          active:data-[state=checked]:bg-primary/90
          data-[state=checked]:bg-primary
          data-[state=checked]:text-primary-foreground
          data-[state=checked]:border-primary
          size-4 cursor-default rounded-sm transition-shadow
        `,
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className={`
          flex items-center justify-center text-current transition-none
        `}
      >
        <Icon
          icon="ph:check-bold"
          className="size-3"
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
