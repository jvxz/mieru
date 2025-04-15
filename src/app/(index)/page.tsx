import { Aside } from './_components/aside/aside'
import { Content } from './_components/content/content'
import { Nav } from './_components/nav/nav'

export default function Page() {
  return (
    <div className="flex h-full w-full">
      <Nav />
      <Content />
      <Aside />
    </div>
  )
}
