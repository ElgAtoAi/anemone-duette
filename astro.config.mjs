// @ts-check
import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  integrations: [solid()],
  adapter: cloudflare()
});

