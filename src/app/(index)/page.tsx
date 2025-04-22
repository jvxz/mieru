import { CodeBlock, CodeBlockContent, CodeBlockHeader } from '@/components/ui/code-block'
import { themes } from 'prism-react-renderer'

const code = `
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 3));
`

export default function Page() {
  return (
    <main className="container mx-auto flex h-screen w-lg max-w-screen-md flex-col items-center justify-center gap-8 py-32">
      <CodeBlock>
        <CodeBlockHeader>test</CodeBlockHeader>
        <CodeBlockContent theme={themes.dracula}>
          {code}
        </CodeBlockContent>
      </CodeBlock>
    </main>
  )
}
