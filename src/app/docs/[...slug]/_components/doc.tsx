import type { Doc as DocType } from 'contentlayer2/generated'
import { useMDXComponent } from 'next-contentlayer2/hooks'

function Doc({ content }: { content: DocType }) {
  const MDXContent = useMDXComponent(content.body.code)

  return (
    <article>
      <MDXContent />
    </article>
  )
}

export { Doc }
