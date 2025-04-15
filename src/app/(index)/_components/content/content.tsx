import { StarsBackground } from '@/components/ui/stars-background'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'

function Content() {
  return (
    <div className="flex max-w-full flex-1 flex-col gap-4 p-8">
      <div className="relative">
        <div className="not-prose flex flex-col gap-4 py-16">
          <div className="text-card-foreground slide-in-from-bottom-4 animate-in fade-in-0 flex items-center justify-center gap-2 text-5xl font-medium duration-100">
            <Icon
              icon="mingcute:magic-1-line"
              className=""
            />
            <h1 className="text-center">mieru</h1>
          </div>
          <h3 className="text-muted-foreground text-md slide-in-from-bottom-4 animate-in fade-in-0 text-center delay-75 duration-100">customized shadcn/ui components</h3>

        </div>
        <StarsBackground className="mask-radial-at-center" />
      </div>
      <article>
        <section className="prose">
          <h1>Introduction</h1>
          <span>
            mieru is an opinionated collection of heavily edited React components from the
          </span>
          {' '}
          <Link
            href="https://ui.shadcn.com/"
          >
            shadcn/ui
          </Link>
          {' '}
          <span>
            library, offering much more personality and easier customization.
          </span>
          <br />
          <span>As with shadcn/ui itself, <span className='font-medium'>mieru is how you build your component library</span>.</span>
        </section>
      </article>
    </div>
  )
}

export { Content }
