import { ComponentCards } from './_components/component-cards'

export default function Page() {
  return (
    <main className={`
      container mx-auto flex h-screen max-w-screen-md flex-col gap-8 py-32
    `}
    >
      <Header />
      <ComponentCards />
    </main>
  )
}

function Header() {
  return (
    <header className="space-y-1">
      <h1 className="text-4xl font-semibold">mieru 🎀</h1>
      <h2 className="text-md text-muted-foreground">
        shadcn-compatible components built with care.
      </h2>
    </header>
  )
}
