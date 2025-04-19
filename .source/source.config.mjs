// source.config.ts
import { defineCollections, defineConfig } from "fumadocs-mdx/config";
var docs = defineCollections({
  type: "doc",
  dir: "docs"
});
var source_config_default = defineConfig({
  mdxOptions: {
    // Path to import your `mdx-components.tsx` above.
    providerImportSource: "@/mdx-components"
  }
});
export {
  source_config_default as default,
  docs
};
