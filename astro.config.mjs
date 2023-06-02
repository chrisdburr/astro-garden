import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import wikiLinkPlugin from "remark-wiki-link";

export default defineConfig({
  integrations: [preact()],
  markdown: {
    remarkPlugins: [
      [
        wikiLinkPlugin,
        {
          aliasDivider: "|",
          hrefTemplate: (permalink) => `${permalink}`,
          pageResolver: (name) => [name.replace(/\s/g, "-").toLowerCase()],
          // permalinks: [], // You can populate this with existing page permalinks if needed
          wikiLinkClassName: "wikilink",
          newClassName: " ",
        },
      ],
    ],
  },
});
