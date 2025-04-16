import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { allDocs } from 'contentlayer2/generated'
import { Effect } from 'effect'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const docsTree = Effect.gen(function* (_) {
  const categories = new Set<string>(allDocs.map(doc => doc.category))

  return yield* _(Effect.forEach(categories, (category) => {
    const docs = allDocs.filter(doc => doc.category === category)
    return Effect.succeed({
      category,
      docs,
    })
  }))
})
