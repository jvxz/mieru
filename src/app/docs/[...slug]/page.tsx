import { getDocFromParams } from '@/lib/utils'
import { allDocs } from 'contentlayer2/generated'
import { notFound } from 'next/navigation'
import { Doc } from './_components/doc'

async function getDocContent(params: Promise<{ slug: string[] }>) {
  const content = await getDocFromParams(allDocs, params)
  if (!content) return notFound()

  return content
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const content = await getDocContent(params)
  return <Doc content={content} />
}
