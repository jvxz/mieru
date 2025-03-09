'use client'
import { interactiveStyles, staticStyles } from '@/lib/styles'
import { cn } from '@/lib/utils'
import * as TabsPrimitive from '@radix-ui/react-tabs'

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        staticStyles.base,
        staticStyles.variant.default,
        'inline-flex w-fit items-center justify-center gap-1 p-1',
        className,
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        interactiveStyles.base,
        interactiveStyles.variant.default,
        `
          data-[state=active]:bg-primary
          data-[state=active]:text-primary-foreground data-[state=active]:shadow
          text-foreground/70 inline-flex flex-1 cursor-default items-center
          justify-center gap-1.5 border-0 bg-transparent px-2 py-1.5 text-sm
          shadow-none
        `,
        className,
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn('flex-1 outline-none', className)}
      {...props}
    />
  )
}

export {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
}
