import { CodeBlock, CodeBlockContent, CodeBlockHeader } from '@/components/ui/code-block'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

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
  return (
    <Tabs
      defaultValue="npm"
      className="w-[400px]"
    >
      <TabsList>
        <TabsTrigger value="npm">npm</TabsTrigger>
        <TabsTrigger value="bun">bun</TabsTrigger>
      </TabsList>
      <TabsContent value="npm">
        <CodeBlock>
          <CodeBlockHeader>
            npm
          </CodeBlockHeader>
          <CodeBlockContent>
            npm install @iconify/react
          </CodeBlockContent>
        </CodeBlock>
      </TabsContent>
      <TabsContent value="bun">
        <CodeBlock>
          <CodeBlockHeader>
            bun
          </CodeBlockHeader>
          <CodeBlockContent>
            bun install @iconify/react
          </CodeBlockContent>
        </CodeBlock>
      </TabsContent>
    </Tabs>
  )
}

export { AllLibraries, ShadcnVsMieru }
