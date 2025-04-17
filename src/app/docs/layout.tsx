import { Aside } from './_components/aside/aside'
import { Nav } from './_components/nav/nav'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full">
      <Nav />
      <div className="prose flex-1 p-6">
        {children}
      </div>
      <Aside />
    </div>
  )
}
