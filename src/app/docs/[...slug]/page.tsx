import { getDocFromParams } from '@/lib/utils'
import { notFound } from 'next/navigation'
import { Doc } from './_components/doc'

async function getDocContent(params: Promise<{ slug: string[] }>) {
  const content = await getDocFromParams(params)
  if (!content) return notFound()

  return content
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const content = await getDocContent(params)
  return <Doc content={content} />
}
