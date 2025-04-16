import type { Doc as DocType } from 'contentlayer2/generated'
import { useMDXComponent } from 'next-contentlayer2/hooks'

function Doc({ content }: { content: DocType }) {
  const MDXContent = useMDXComponent(content.body.code)

  return (
    <article>
      <header>
        <h1>{content.title}</h1>
      </header>
      <MDXContent />
    </article>
  )
}

export { Doc }
