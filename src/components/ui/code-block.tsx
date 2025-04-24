'use client'
/* eslint-disable react/no-array-index-key */
import type { PrismTheme } from 'prism-react-renderer'
import type { ComponentProps, ReactNode } from 'react'
import { staticStyles } from '@/lib/styles'
import { cn } from '@/lib/utils'
import { Highlight } from 'prism-react-renderer'
import { useCallback, useState } from 'react'
import { Button } from './button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './dropdown-menu'

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
        'relative p-0',
        className,
      )}
    >
      {children}
    </div>
  )
}

function CodeBlockHeader({ children, className }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="code-block-header"
      className={cn(
        staticStyles.base,
        staticStyles.variant.default,
        'rounded-x-none peer flex h-12 flex-row items-center justify-between rounded-b-none border-x-0 border-t-0 px-4 py-2 text-sm',
        className,
      )}
    >
      {children}
    </div>
  )
}

const defaultTheme = {
  plain: {
    color: 'var(--card-foreground)',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: 'var(--muted-foreground)',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: 'var(--foreground)',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['property', 'keyword', 'tag'],
      style: {
        color: 'var(--primary)',
      },
    },
    {
      types: ['class-name', 'maybe-class-name'],
      style: {
        color: 'var(--muted-foreground)',
      },
    },
    {
      types: ['boolean', 'constant'],
      style: {
        color: 'var(--muted-foreground)',
      },
    },
    {
      types: ['symbol', 'deleted'],
      style: {
        color: 'var(--destructive)',
      },
    },
    {
      types: ['number'],
      style: {
        color: 'var(--muted-foreground)',
      },
    },
    {
      types: ['selector', 'attr-name', 'string', 'char', 'builtin', 'inserted'],
      style: {
        color: 'var(--primary)',
      },
    },
    {
      types: ['variable'],
      style: {
        color: 'var(--muted-foreground)',
      },
    },
    {
      types: ['operator'],
      style: {
        color: 'var(--muted-foreground)',
      },
    },
    {
      types: ['entity'],
      style: {
        color: 'var(--muted-foreground)',
        cursor: 'help',
      },
    },
    {
      types: ['url'],
      style: {
        color: 'var(--primary)',
      },
    },
    {
      types: ['function'],
      style: {
        color: 'var(--muted-foreground)',
      },
    },
    {
      types: ['regex'],
      style: {
        color: 'var(--muted-foreground)',
      },
    },
    {
      types: ['important'],
      style: {
        color: 'var(--destructive)',
        fontWeight: 'bold',
      },
    },
    {
      types: ['bold'],
      style: {
        fontWeight: 'bold',
      },
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic',
      },
    },
  ],
} as PrismTheme

interface CodeBlockContentProps {
  children: string
  theme?: PrismTheme
  lineNumbers?: boolean
  copyButton?: boolean
}

function CodeBlockContent({ children, theme = defaultTheme, lineNumbers = false, copyButton = true }: CodeBlockContentProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(() => {
    void navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [children])

  return (
    <>
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
              'space-y-1 border-0 font-mono text-sm peer-[*]:rounded-t-none dark:bg-black/80',
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
                {lineNumbers && <span className="pr-4 opacity-50">{i + 1}</span>}
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
      {copyButton && (
        <Button
          className="absolute top-2 right-2 opacity-75 peer-[*]:top-14 hover:opacity-100"
          size="icon"
          variant="ghost"
          onClick={handleCopy}
          aria-label={copied ? 'Copied' : 'Copy'}
        >
          <svg
            className={cn('iconify', copied ? 'icon-[ph--check]' : 'icon-[ph--copy]')}
          />
        </Button>
      )}
    </>
  )
}

function CodeBlockMenu({ ...props }: ComponentProps<typeof DropdownMenu>) {
  return (
    <DropdownMenu
      data-slot="code-block-menu"
      {...props}
    />
  )
}

function CodeBlockMenuTrigger({ children, ...props }: ComponentProps<typeof DropdownMenuTrigger>) {
  return (
    <DropdownMenuTrigger
      data-slot="code-block-menu-trigger"
      asChild
      {...props}
    >
      <Button
        variant="outline"
        className="-mr-2"
      >
        {children}
      </Button>
    </DropdownMenuTrigger>
  )
}

function CodeBlockMenuContent({ ...props }: ComponentProps<typeof DropdownMenuContent>) {
  return (
    <DropdownMenuContent
      data-slot="code-block-menu-content"
      {...props}
    />
  )
}

function CodeBlockMenuItem({ ...props }: ComponentProps<typeof DropdownMenuItem>) {
  return (
    <DropdownMenuItem
      data-slot="code-block-menu-item"
      {...props}
    />
  )
}

export {
  CodeBlock,
  CodeBlockContent,
  CodeBlockHeader,
  CodeBlockMenu,
  CodeBlockMenuContent,
  CodeBlockMenuItem,
  CodeBlockMenuTrigger,
}
