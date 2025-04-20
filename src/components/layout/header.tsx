import { ThemeToggle } from '@/components/theme-toggle'
import { staticStyles } from '@/lib/styles'
import { cn } from '@/lib/utils'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { SearchDialog } from '../../app/(index)/_components/search-dialog'

function Header() {
  return (
    <header
      data-slot="header"
      className={
        cn(
          staticStyles.base,
          staticStyles.variant.default,
          'bg-card sticky top-4 z-10 flex h-[var(--header-height)] flex-row items-center justify-between rounded border p-0 px-6',

        )
      }
    >
      <Link
        href="/"
        className="flex items-center gap-2 text-xl hover:underline"
      >
        <Icon
          icon="mingcute:magic-1-line"
          className="animate-in fade-in spin-in duration-100"
        />
        <h1 className="animate-in fade-in font-medium duration-100">mieru</h1>
      </Link>
      <div className="flex items-center gap-2">
        <SearchDialog />
        <ThemeToggle />
      </div>
    </header>
  )
}
export { Header }
