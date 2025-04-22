'use client'
import type { ComponentProps } from 'react'
import { interactiveStyles } from '@/lib/styles'
import { cn } from '@/lib/utils'
import { OTPInput, OTPInputContext } from 'input-otp'
import { useContext } from 'react'

function InputOTP({
  className,
  containerClassName,
  ...props
}: ComponentProps<typeof OTPInput> & {
  containerClassName?: string
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn('flex items-center gap-2 has-disabled:opacity-50', containerClassName)}
      className={cn('disabled:cursor-not-allowed', className)}
      {...props}
    />
  )
}

function InputOTPGroup({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn('flex items-center', className)}
      {...props}
    />
  )
}

function InputOTPSlot({
  index,
  className,
  ...props
}: ComponentProps<'div'> & {
  index: number
}) {
  const inputOTPContext = useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {
  }

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        interactiveStyles.base,
        interactiveStyles.variant.default,
        'data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 data-[active=true]:aria-invalid:border-destructive data-[active=true]:z-10 data-[active=true]:ring-[3px] dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive relative flex size-9 items-center justify-center rounded-none border-x-0 border-y border-r text-sm shadow-sm transition outline-none first:rounded-l-md first:border-l last:rounded-r-md',
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink bg-ring h-4 w-px duration-1000" />
        </div>
      )}
    </div>
  )
}

function InputOTPSeparator({ ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="input-otp-separator"
      role="separator"
      {...props}
    >
      <svg
        className="iconify ph--minus h-4 w-4"
      />
    </div>
  )
}

export {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
}
