import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  integrations: [tailwind()],

  server: {
    port: 4330,
    host: true,
  },

  adapter: cloudflare()
});