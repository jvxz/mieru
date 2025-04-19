import type { MDXComponents } from 'mdx/types'
import defaultMdxComponents from 'fumadocs-ui/mdx'
import { cn } from './lib/utils'

const MARGIN = 'mb-0'

export function getMDXComponents(): MDXComponents {
  return {
    ...defaultMdxComponents,
    wrapper: ({ children }) => (
      <article className="flex flex-col gap-8">
        {children}
      </article>
    ),
    code: ({ ...props }) => (
      <code
        className={cn('bg-muted rounded p-1 py-0.5 font-mono text-sm')}
        {...props}
      />
    ),
    p: ({ ...props }) => (
      <p
        className={cn(MARGIN)}
        {...props}
      />
    ),
    h1: ({ ...props }) => (
      <h1
        className={cn('text-2xl font-bold')}
        {...props}
      />
    ),
    h2: ({ ...props }) => (
      <h2
        className={cn('mt-6 text-lg font-bold')}
        {...props}
      />
    ),
    ul: ({ ...props }) => (
      <ul
        className={cn('flex flex-col gap-5')}
        {...props}
      />
    ),

  }
}

export const useMDXComponents = getMDXComponents
