'use client'
import { interactiveStyles, overlayStyles, staticStyles } from '@/lib/styles'
import { cn } from '@/lib/utils'
import { Icon } from '@iconify/react'
import * as SheetPrimitive from '@radix-ui/react-dialog'

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return (
    <SheetPrimitive.Root
      data-slot="sheet"
      {...props}
    />
  )
}

function SheetTrigger({ ...props }: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return (
    <SheetPrimitive.Trigger
      data-slot="sheet-trigger"
      {...props}
    />
  )
}

function SheetClose({ ...props }: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return (
    <SheetPrimitive.Close
      data-slot="sheet-close"
      {...props}
    />
  )
}

function SheetPortal({ ...props }: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return (
    <SheetPrimitive.Portal
      data-slot="sheet-portal"
      {...props}
    />
  )
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        overlayStyles,
        className,
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = 'right',
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: 'top' | 'right' | 'bottom' | 'left'
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          staticStyles.base,
          staticStyles.variant.default,
          `
            data-[state=open]:animate-in data-[state=open]:duration-150
            fixed z-50 flex-col gap-4 rounded-none border-0 p-0 transition
            ease-out
          `,
          side === 'right'
          && `
            data-[state=closed]:slide-out-to-right
            data-[state=open]:slide-in-from-right
            inset-y-0 right-0 h-full w-3/4 border-l
            sm:max-w-sm
          `,
          side === 'left'
          && `
            data-[state=closed]:slide-out-to-left
            data-[state=open]:slide-in-from-left
            inset-y-0 left-0 h-full w-3/4 border-r
            sm:max-w-sm
          `,
          side === 'top'
          && `
            data-[state=closed]:slide-out-to-top
            data-[state=open]:slide-in-from-top
            inset-x-0 top-0 h-auto border-b
          `,
          side === 'bottom'
          && `
            data-[state=closed]:slide-out-to-bottom
            data-[state=open]:slide-in-from-bottom
            inset-x-0 bottom-0 h-auto border-t
          `,
          className,
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className={cn(
          interactiveStyles.base,
          interactiveStyles.variant.ghost,
          interactiveStyles.size.icon,
          `
            ring-offset-background absolute top-4 right-4 inline-flex size-6
            items-center justify-center opacity-70
          `,
        )}
        >
          <Icon
            icon="ph:x"
            className="size-4"
          />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sheet-header"
      className={cn('flex flex-col gap-1 p-4', className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn('mt-auto flex flex-col gap-2 p-4', className)}
      {...props}
    />
  )
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn('text-foreground text-md font-semibold', className)}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
}
