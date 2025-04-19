import type { MDXComponents } from 'mdx/types'
import defaultMdxComponents from 'fumadocs-ui/mdx'
import { cn } from './lib/utils'

const MARGIN = 'mb-12'

export function getMDXComponents(): MDXComponents {
  return {
    ...defaultMdxComponents,
    code: ({ ...props }) => (
      <code
        className={cn(MARGIN, 'bg-muted rounded p-1 py-0.5 font-mono text-sm')}
        {...props}
      />
    ),
    p: ({ ...props }) => (
      <p
        className={cn(MARGIN)}
        {...props}
      />
    ),
    hr: ({ ...props }) => (
      <hr
        className={cn(MARGIN)}
        {...props}
      />
    ),
    h1: ({ ...props }) => (
      <h1
        className={cn(MARGIN, 'text-2xl font-bold')}
        {...props}
      />
    ),
    h2: ({ ...props }) => (
      <h2
        className={cn(MARGIN, 'text-xl font-bold')}
        {...props}
      />
    ),
  }
}

export const useMDXComponents = getMDXComponents
