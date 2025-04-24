'use client'
import type { VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { toggleVariants } from '@/components/ui/toggle'
import { cn } from '@/lib/utils'
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import { createContext, use, useMemo } from 'react'

const ToggleGroupContext = createContext<
  VariantProps<typeof toggleVariants>
>({
  size: 'default',
  variant: 'default',
})

function ToggleGroup({
  className,
  variant,
  size,
  children,
  ...props
}: ComponentProps<typeof ToggleGroupPrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  const value = useMemo(() => ({
    variant,
    size,
  }), [variant, size])

  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      className={cn(
        'group/toggle-group flex w-fit items-center rounded data-[variant=outline]:shadow',
        className,
      )}
      {...props}
    >
      <ToggleGroupContext value={value}>
        {children}
      </ToggleGroupContext>
    </ToggleGroupPrimitive.Root>
  )
}

function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}: ComponentProps<typeof ToggleGroupPrimitive.Item> &
  VariantProps<typeof toggleVariants>) {
  const context = use(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        'min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-r-0 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l data-[variant=outline]:last:border-r',
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
}

export { ToggleGroup, ToggleGroupItem }
