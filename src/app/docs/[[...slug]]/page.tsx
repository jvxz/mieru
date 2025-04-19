import { source } from '@/lib/source'
import { getMDXComponents } from '@/mdx-components'
import { Data, Effect, Exit } from 'effect'
import { } from 'fumadocs-mdx'
import { notFound } from 'next/navigation'

// eslint-disable-next-line unicorn/throw-new-error
class PageNotFound extends Data.TaggedError('PageNotFound') { }

export function generateStaticParams() {
  return source.generateParams()
}

function getMDX(params: Promise<{ slug: string[] }>) {
  return Effect.gen(function* (_) {
    const { slug } = yield* _(Effect.tryPromise({
      try: async () => params,
      catch: () => new PageNotFound(),
    }))

    const page = yield* _(Effect.fromNullable(source.getPage(slug)))
    const MDX = page.data.body
    return MDX
  })
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const MDX = await Effect.runPromiseExit(getMDX(params))

  if (Exit.isFailure(MDX)) return notFound()

  return (
    <div>
      <MDX.value components={getMDXComponents()} />
    </div>
  )
}
