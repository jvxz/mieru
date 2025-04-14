import { ThemeToggle } from '@/components/theme-toggle'
import { Card } from '@/components/ui/card'
import { Icon } from '@iconify/react'
import { SearchDialog } from './search-dialog'

function Header() {
  return (
    <header>
      <Card className="bg-card my-4 flex h-16 flex-row items-center justify-between rounded border p-0 px-6">
        <div className="flex items-center gap-2 text-xl">
          <Icon
            icon="mingcute:magic-1-line"
            className="animate-in fade-in spin-in duration-100"
          />
          <h1 className="animate-in fade-in font-medium duration-100">mieru</h1>
        </div>
        <div className="flex items-center gap-2">
          <SearchDialog />
          <ThemeToggle />
        </div>
      </Card>
    </header>
  )
}
export { Header }
