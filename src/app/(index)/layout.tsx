import { ThemeToggle } from '@/components/theme-toggle'
import { Card } from '@/components/ui/card'
import { Icon } from '@iconify/react/dist/iconify.js'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Header />
      {children}
    </section>
  )
}

function Header() {
  return (
    <header>
      <Card className="bg-card my-4 flex h-16 flex-row items-center justify-between rounded border p-0 px-6">
        <div className="flex items-center gap-1 text-xl">
          <Icon
            icon="uil:rainbow"
            strokeWidth={0.5}
          />
          <h1 className="font-medium">mieru</h1>
        </div>
        {/* <Button
          variant="outline"
          className="w-1/3"
        >
          Search
          <Icon icon="mingcute:search-line" />
        </Button> */}
        <ThemeToggle />
      </Card>
    </header>
  )
}
