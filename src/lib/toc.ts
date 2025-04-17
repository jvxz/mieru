import type { TocItem } from 'remark-flexible-toc'
import { allDocs } from 'contentlayer2/generated'
import { Effect } from 'effect'
import { remark } from 'remark'
import remarkFlexibleToc from 'remark-flexible-toc'

export const getToc = Effect.gen(function* (_) {
  const doc = yield* Effect.tryPromise({
    try: async () => remark()
      .use(remarkFlexibleToc)
      .process(allDocs[0].body.raw),
    catch: () => new Error('Failed to process file'),
  })

  const tree = doc.data.toc as TocItem[]

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
        if (item.numbering.length === 3) {
          return item.numbering[1] === parent?.role
        }

        return null
      }).filter(Boolean)

      return {
        ...parent,
        children,
      }
    })),
  )
})
