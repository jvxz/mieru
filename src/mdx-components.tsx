import type { MDXComponents } from 'mdx/types'
import defaultMdxComponents from 'fumadocs-ui/mdx'
import Link from 'next/link'
import { cn } from './lib/utils'

export function getMDXComponents(): MDXComponents {
  return {
    ...defaultMdxComponents,
    wrapper: ({ children }) => (
      <article className="flex w-full flex-col gap-6">
        {children}
      </article>
    ),
    code: ({ ...props }) => (
      <code
        className={cn('bg-muted rounded p-1 py-0.5 font-mono text-sm')}
        {...props}
      />
    ),
    h1: ({ ...props }) => (
      <div className="flex flex-col gap-6">
        <h1
          className={cn('text-2xl font-bold')}
          {...props}
        />
        <hr />
      </div>
    ),
    h2: ({ ...props }) => (
      <div className="flex flex-col gap-6">
        <h2
          className={cn('mt-2 text-lg font-bold')}
          {...props}
        />
        <hr />
      </div>
    ),
    h3: ({ ...props }) => (
      <h3
        className={cn('text-md mt-2 font-bold')}
        {...props}
      />
    ),
    ul: ({ ...props }) => (
      <ul
        className={cn('flex list-disc flex-col gap-5 pl-5')}
        {...props}
      />
    ),
    a: ({ ...props }) => (
      <Link
        target="_blank"
        className={cn('text-primary w-fit font-bold underline')}
        {...props}
      />
    ),
  }
}

export const useMDXComponents = getMDXComponents
