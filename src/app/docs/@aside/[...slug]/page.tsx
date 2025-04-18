import { getToc } from '@/lib/toc'
import { Effect, Exit } from 'effect'
import Link from 'next/link'
import { Fragment } from 'react'

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  const toc = await Effect.runPromiseExit(getToc(slug[0]))
  if (Exit.isFailure(toc)) return 'failed to get toc'

  return (
    <div className="hidden h-full w-1/5 space-y-4 p-6 xl:block">
      <h2 className="text-md mb-4 font-bold">Page content</h2>
      <ul className="flex flex-col">
        {toc.value.map((item) => {
          if (item.children.length > 0) {
            return (
              <Fragment key={item.value}>
                <Link
                  href={item.href ?? ''}
                  className="justify-start py-2.5 text-sm opacity-75 duration-100 hover:opacity-100"

                >
                  {item.value}
                </Link>
                <div className="ml-4 py-2.5">
                  {item.children.map(child => (
                    <Link
                      key={child.value}
                      href={child.href}
                      className="justify-start py-2.5 text-sm opacity-75 duration-100 hover:opacity-100"
                    >
                      {child.value}
                    </Link>
                  ))}
                </div>
              </Fragment>
            )
          }
          return (
            <Link
              key={item.value}
              href={item.href ?? ''}
              className="justify-start py-2.5 text-sm opacity-75 duration-100 hover:opacity-100"
            >
              {item.value}
            </Link>
          )
        })}
      </ul>
    </div>
  )
}
