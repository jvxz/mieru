import { createMDX } from 'fumadocs-mdx/next'

const withMDX = createMDX()

const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
}

export default withMDX(nextConfig)
