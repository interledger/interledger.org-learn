import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://interledger.org",
  // base: "/learn",
  integrations: [
    starlight({
      title: "Interledger Learning Hub",
      description: "Enable seamless exchange of value across payment networks.",
      logo: {
        dark: "./src/assets/logo_color-white_foundation.svg",
        light: "./src/assets/logo_color-black_foundation.svg",
        replacesTitle: true,
      },
      customCss: [
        "./node_modules/@interledger/docs-design-system/src/styles/teal-theme.css",
        "./node_modules/@interledger/docs-design-system/src/styles/ilf-docs.css",
        "./src/styles/learn.css",
        "./src/styles/atom-one-light.min.css",
      ],
      head: [
        {
          tag: "script",
          attrs: {
            src: "/scripts/highlight.min.js",
            defer: true,
          },
        },
        {
          tag: "script",
          attrs: {
            src: "/scripts/init.js",
            defer: true,
          },
        },
      ],
      social: {
        github: "https://github.com/interledger",
        instagram: "https://www.instagram.com/interledgerfoundation/",
        linkedin: "https://www.linkedin.com/company/interledger-foundation/",
        mastodon: "https://interledger.social/about",
        slack:
          "https://communityinviter.com/apps/interledger/interledger-working-groups-slack",
        "x.com": "https://twitter.com/interledger",
        youtube: "https://www.youtube.com/@InterledgerFoundation",
      },
      sidebar: [
        { label: "Get started", link: "/" },
        {
          label: "Introduction Unit",
          collapsed: true,
          autogenerate: { directory: "introduction" },
        },
        {
          label: "Digital Financial Inclusion Unit",
          collapsed: true,
          autogenerate: { directory: "digital-financial-inclusion" },
        },
        {
          label: "Building With Interledger Unit",
          collapsed: true,
          autogenerate: { directory: "building-with-interledger" },
        },
        {
          label: "Interledger Technology Unit",
          collapsed: true,
          autogenerate: { directory: "interledger-technology" },
        },
      ],
    }),
  ],
  server: {
    port: 1106,
  },
});
