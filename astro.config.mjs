import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://RoyHudson.github.io',
  base: '/my-repo',
  output: "server",
  adapter: vercel(),
  integrations: [tailwind()]
});