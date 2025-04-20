import { getPageFromParams } from '@/lib/utils'
import { Effect, Exit } from 'effect'
import Link from 'next/link'

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const MDX = await Effect.runPromiseExit(getPageFromParams(params))
  if (Exit.isFailure(MDX)) return null
  const toc = MDX.value.data.toc

  return (
    <div className="sticky top-24 hidden h-[calc(100vh-var(--header-height))] w-1/2 space-y-6 pt-6 xl:block">
      <h2 className="text-md font-bold">Page content</h2>
      <div className="flex flex-col gap-5">
        {toc.map((item) => {
          if (item.depth === 1) return null
          if (item.depth === 2) {
            return (
              <Link
                href={item.url}
                key={item.url}
                className="text-muted-foreground text-sm duration-100 hover:text-primary"
              >
                {item.title}
              </Link>
            )
          }
          return (
            <Link
              href={item.url}
              key={item.url}
              className="text-muted-foreground ml-4 text-sm duration-100 hover:text-primary"
            >
              {item.title}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
