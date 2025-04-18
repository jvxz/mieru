import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { allDocs } from 'contentlayer2/generated'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getDocFromParams(params: Promise<{ slug: string[] }>) {
  const { slug } = await params
  const path = slug.join('/')
  const content = allDocs.find(doc => doc._raw.flattenedPath === path)
  return content
}
