import type { Doc } from 'contentlayer2/generated'
import type { TocItem } from 'remark-flexible-toc'
import { Effect } from 'effect'
import { remark } from 'remark'
import remarkFlexibleToc from 'remark-flexible-toc'
import remarkMdx from 'remark-mdx'
import { getDocFromParams } from './utils'

export function getToc(allDocs: Doc[], slug: Promise<{ slug: string[] }>) {
  return Effect.gen(function* (_) {
    const doc = yield* _(
      Effect.tryPromise({
        try: async () => getDocFromParams(allDocs, slug),
        catch: () => new Error('Failed to get doc'),
      }),
      Effect.filterOrFail(doc => doc !== undefined),
    )

    const content = yield* Effect.tryPromise({
      try: async () => remark()
        .use(remarkMdx)
        .use(remarkFlexibleToc)
        .process(doc.body.raw),
      catch: () => new Error('Failed to process file'),
    })

    const tree = content.data.toc as TocItem[]

    return yield* _(
      Effect.succeed(tree.map((item) => {
        if (item.numbering.length === 2) {
          return {
            ...item,
            role: item.numbering[1],

          }
        }
        return null
      }).filter(Boolean)),
      Effect.map(parents => parents.map((parent) => {
        const children = tree.filter((item) => {
          if (item.numbering.length === 3) return item.numbering[1] === parent?.role

          return null
        }).filter(Boolean)

        return {
          ...parent,
          children,
        }
      })),
    )
  })
}
