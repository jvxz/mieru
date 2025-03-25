import { ThemeToggle } from '@/components/theme-toggle'
import { Card } from '@/components/ui/card'

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
      <Card className="bg-card my-4 flex h-12 flex-row items-center justify-between rounded border p-0 px-4">
        <h1>mieru</h1>

        <ThemeToggle />
      </Card>
    </header>
  )
}
