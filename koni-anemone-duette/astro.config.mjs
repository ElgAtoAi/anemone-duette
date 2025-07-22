// ✅ Astro + SolidJS + Tailwind Starter

// File: astro.config.mjs
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import solid from "@astrojs/solid-js";

export default defineConfig({
  output: "static",
  integrations: [tailwind(), solid()],
});
