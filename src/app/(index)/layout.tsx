import { Header } from './_components/header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="my-4 flex h-full flex-col gap-4">
      <Header />
      {children}
    </main>
  )
}

