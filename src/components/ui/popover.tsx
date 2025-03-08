'use client'
import { popoverStyles } from '@/lib/styles'
import { cn } from '@/lib/utils'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import * as React from 'react'

function Popover({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return (
    <PopoverPrimitive.Root
      data-slot="popover"
      {...props}
    />
  )
}

function PopoverTrigger({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return (
    <PopoverPrimitive.Trigger
      data-slot="popover-trigger"
      {...props}
    />
  )
}

function PopoverContent({
  className,
  align = 'center',
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          popoverStyles.content,
          `
            data-[state=open]:slide-in-from-top-2
            p-4
          `,
          className,
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
}

function PopoverAnchor({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return (
    <PopoverPrimitive.Anchor
      data-slot="popover-anchor"
      {...props}
    />
  )
}

export {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
}
