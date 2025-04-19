import { source } from '@/lib/source'
import { getPageFromParams } from '@/lib/utils'
import { getMDXComponents } from '@/mdx-components'
import { Effect, Exit } from 'effect'
import { } from 'fumadocs-mdx'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return source.generateParams()
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const MDX = await Effect.runPromiseExit(getPageFromParams(params))
  if (Exit.isFailure(MDX)) return notFound()

  return (
    <div>
      <MDX.value.data.body components={getMDXComponents()} />
    </div>
  )
}
