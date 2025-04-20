import { staticStyles } from '@/lib/styles'
import { cn } from '@/lib/utils'

function Footer() {
  return (
    <footer className={cn(
      staticStyles.base,
      staticStyles.variant.default,
      'bg-background mt-6 rounded-none border-x-0 border-b-0',
    )}
    >
      <p className="text-center">mieru 2025</p>
    </footer>
  )
}

export { Footer }
