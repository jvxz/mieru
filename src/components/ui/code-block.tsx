/* eslint-disable react/no-array-index-key */
import type { PrismTheme } from 'prism-react-renderer'
import type { ReactNode } from 'react'
import { staticStyles } from '@/lib/styles'
import { cn } from '@/lib/utils'
import { Highlight } from 'prism-react-renderer'

interface CodeBlockProps {
  children: ReactNode
  className?: string
  format?: boolean
}

function CodeBlock({ children, className }: CodeBlockProps) {
  return (
    <div
      data-slot="code-block-root"
      className={cn(
        staticStyles.base,
        staticStyles.variant.default,
        'p-0',
        className,
      )}
    >
      {children}
    </div>
  )
}

interface CodeBlockHeaderProps {
  children: ReactNode
  className?: string
}

function CodeBlockHeader({ children, className }: CodeBlockHeaderProps) {
  return (
    <div
      data-slot="code-block-header"
      className={cn(
        staticStyles.base,
        staticStyles.variant.default,
        'rounded-x-none peer flex flex-row items-center justify-between rounded-b-none border-x-0 border-t-0 px-3 py-2',
        className,
      )}
    >
      {children}
    </div>
  )
}

const emptyTheme = {
  plain: {
  },
  styles: [],
} as PrismTheme

interface CodeBlockContentProps {
  children: string
  className?: string
  theme?: PrismTheme
}

function CodeBlockContent({ children, theme = emptyTheme }: CodeBlockContentProps) {
  return (
    <Highlight
      code={children}
      language="ts"
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          data-slot="code-block-content"
          style={style}
          className={cn(
            staticStyles.base,
            staticStyles.variant.default,
            'space-y-1 border-0 px-6 py-4 font-mono text-sm peer-[*]:rounded-t-none dark:bg-black/80',
            className,
          )}
        >
          {tokens.map((line, i) => (
            <div
              key={i}
              {...getLineProps({
                line,
              })}
            >
              <span className="pr-4">{i + 1}</span>
              {line.map((token, key) => (
                <span
                  key={key}
                  {...getTokenProps({
                    token,
                  })}
                />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export {
  CodeBlock,
  CodeBlockContent,
  CodeBlockHeader,
}
