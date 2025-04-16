import { Aside } from '../(index)/_components/aside/aside'
import { Nav } from '../(index)/_components/nav/nav'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Nav />
      <div className="prose grow p-8">
        {children}
      </div>
      <Aside />
    </div>
  )
}
