import type { TocItem } from 'remark-flexible-toc'
import { allDocs } from 'contentlayer2/generated'
import { Effect } from 'effect'
import { remark } from 'remark'
import remarkFlexibleToc from 'remark-flexible-toc'
import remarkMdx from 'remark-mdx'

export function getToc(slug: string) {
  return Effect.gen(function* (_) {
    const doc = yield* _(Effect.fromNullable(allDocs.find(doc => doc.url.includes(slug))))

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
