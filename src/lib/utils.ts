import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { Data, Effect } from 'effect'
import { twMerge } from 'tailwind-merge'
import { source } from './source'

// eslint-disable-next-line unicorn/throw-new-error
class PageNotFound extends Data.TaggedError('PageNotFound') { }

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getPageFromParams(params: Promise<{ slug: string[] }>) {
  return Effect.gen(function* (_) {
    const { slug } = yield* _(Effect.tryPromise({
      try: async () => params,
      catch: () => new PageNotFound(),
    }))

    return yield* _(Effect.fromNullable(source.getPage(slug)))
  })
}

