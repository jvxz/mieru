import { StarsBackground } from '@/components/ui/stars-background'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'

function Content() {
  return (
    <div className="flex max-w-full flex-1 flex-col gap-4 p-8">
      <div className="relative">
        <div className="flex flex-col gap-4 px-8 py-16">
          <div className="text-card-foreground slide-in-from-bottom-4 animate-in fade-in-0 flex items-center gap-2 text-5xl font-medium duration-100">
            <Icon
              icon="mingcute:magic-1-line"
            />
            <h1>mieru</h1>
          </div>
          <h3 className="text-muted-foreground text-md slide-in-from-bottom-4 animate-in fade-in-0 delay-75 duration-100">customized shadcn/ui components</h3>

        </div>
        <StarsBackground className="mask-radial-at-center" />
      </div>
      <Link href="/docs/test">page</Link>
    </div>
  )
}

export { Content }
