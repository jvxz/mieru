import type { Options as AutolinkOptions } from 'rehype-autolink-headings'
import fs, { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

const GENERATED_FILE_PATH = path.resolve('.contentlayer/generated/index.mjs')

const autolinkOptions: AutolinkOptions = {
  behavior: 'append',
  properties: {
    className: ['heading-anchor'],
  },
  content: {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['anchor-icon'],
    },
    children: [{
      type: 'text',
      value: '#',
    }],
  },
}

export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    category: {
      type: 'string',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: doc => `docs/${doc._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'docs',
  documentTypes: [Doc],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, autolinkOptions],
    ],
  },

  onSuccess: async () => {
    if (existsSync(GENERATED_FILE_PATH)) {
      let content = readFileSync(GENERATED_FILE_PATH, 'utf-8')

      content = content.replace(/ with \{.*?\}/g, '')

      fs.writeFileSync(GENERATED_FILE_PATH, content, 'utf-8')
      console.log('Patched .contentlayer/generated/index.mjs after Contentlayer generation.')
    }
  },
})
