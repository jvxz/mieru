'use client'
import { interactiveStyles, staticStyles } from '@/lib/styles'
import { cn } from '@/lib/utils'
import { Icon } from '@iconify/react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import * as React from 'react'

function Dialog({ ...props }: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return (
    <DialogPrimitive.Root
      data-slot="dialog"
      {...props}
    />
  )
}

function DialogTrigger({ ...props }: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return (
    <DialogPrimitive.Trigger
      data-slot="dialog-trigger"
      {...props}
    />
  )
}

function DialogPortal({ ...props }: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return (
    <DialogPrimitive.Portal
      data-slot="dialog-portal"
      {...props}
    />
  )
}

function DialogClose({ ...props }: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return (
    <DialogPrimitive.Close
      data-slot="dialog-close"
      {...props}
    />
  )
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        `
          data-[state=open]:animate-in data-[state=open]:fade-in-0
          fixed inset-0 z-50 bg-black/80 backdrop-blur-sm
        `,

        className,
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          staticStyles.base,
          staticStyles.variant.default,
          `
            data-[state=open]:animate-in data-[state=open]:fade-in-0
            data-[state=open]:slide-in-from-bottom-2
            fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)]
            translate-x-[-50%] translate-y-[-50%] gap-4
            sm:max-w-xl
          `,
          className,
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className={cn(
          interactiveStyles.base,
          interactiveStyles.variant.ghost,
          interactiveStyles.size.icon,
          `
            ring-offset-background absolute top-3 right-3 inline-flex size-6
            items-center justify-center opacity-70
          `,
        )}
        >
          <Icon
            icon="ph:x"
            className="size-4"
          />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-header"
      className={cn(`
        flex flex-col gap-2 text-center
        sm:text-left
      `, className)}
      {...props}
    />
  )
}

function DialogFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        `
          flex flex-col-reverse gap-2
          sm:flex-row sm:justify-end
        `,
        className,
      )}
      {...props}
    />
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn('text-lg leading-none font-semibold', className)}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
