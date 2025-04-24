'use client'
import { CodeBlock, CodeBlockContent, CodeBlockHeader, CodeBlockMenu, CodeBlockMenuContent, CodeBlockMenuItem, CodeBlockMenuTrigger } from '@/components/ui/code-block'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useState } from 'react'

function ShadcnVsMieru() {
  return (
    <div className="flex items-center gap-4 *:flex-1">
      <CodeBlock>
        <CodeBlockHeader>
          shadcn/ui (Lucide)
        </CodeBlockHeader>
        <CodeBlockContent>
          {'<Camera color="red" size={48} />'}
        </CodeBlockContent>
      </CodeBlock>
      <CodeBlock>
        <CodeBlockHeader>
          mieru (Iconify)
        </CodeBlockHeader>
        <CodeBlockContent>
          {'<span className="iconify icon-[lucide--camera]" />'}
        </CodeBlockContent>
      </CodeBlock>
    </div>
  )
}

function AllLibraries() {
  const [pm, setPm] = useState<'npm' | 'pnpm' | 'yarn' | 'bun'>('bun')

  return (
    <CodeBlock>
      <CodeBlockHeader>
        <CodeBlockMenu>
          <CodeBlockMenuTrigger>
            {pm}
          </CodeBlockMenuTrigger>
          <CodeBlockMenuContent>
            <CodeBlockMenuItem onClick={() => setPm('npm')}>npm</CodeBlockMenuItem>
            <CodeBlockMenuItem onClick={() => setPm('pnpm')}>pnpm</CodeBlockMenuItem>
            <CodeBlockMenuItem onClick={() => setPm('yarn')}>yarn</CodeBlockMenuItem>
            <CodeBlockMenuItem onClick={() => setPm('bun')}>bun</CodeBlockMenuItem>
          </CodeBlockMenuContent>
        </CodeBlockMenu>
      </CodeBlockHeader>
      <CodeBlockContent>
        {pm === 'npm'
          ? 'npm i @iconify/react'
          : pm === 'pnpm'
            ? 'pnpm i @iconify/react'
            : pm === 'yarn'
              ? 'yarn add @iconify/react'
              : 'bun add @iconify/react'}
      </CodeBlockContent>
    </CodeBlock>
  )
}

export { AllLibraries, ShadcnVsMieru }
