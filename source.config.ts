import { defineCollections, defineConfig } from 'fumadocs-mdx/config'

export const docs = defineCollections({
  type: 'doc',
  dir: 'docs',
})
  
export default defineConfig({
  mdxOptions: {
    // Path to import your `mdx-components.tsx` above.
    providerImportSource: '@/mdx-components',
  },
});
