import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightUtils from "@lorenzo_lewis/starlight-utils";

// https://astro.build/config
export default defineConfig({
  site: "https://interledger.org",
  // base: "/learn",
  integrations: [
    starlight({
      title: "Interledger Learning Hub",
      description: "Enable seamless exchange of value across payment networks.",
      plugins: [
        starlightUtils({
          multiSidebar: {
            switcherStyle: "dropdown",
          },
        }),
      ],
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
      social: {
        github: "https://github.com/interledger",
        instagram: "https://www.instagram.com/interledgerfoundation/",
        linkedin: "https://www.linkedin.com/company/interledger-foundation/",
        mastodon: "https://interledger.social/about",
        slack: "https://communityinviter.com/apps/interledger/interledger-working-groups-slack",
        "x.com": "https://twitter.com/interledger",
        youtube: "https://www.youtube.com/@InterledgerFoundation",
      },
      sidebar: [
        {
          label: "Interledger 101",
          items: [
            { label: "Getting started", link: "interledger-101" },
            {
              label: "Introduction Unit",
              collapsed: true,
              autogenerate: { directory: "interledger-101/introduction" },
            },
            {
              label: "Digital Financial Inclusion Unit",
              collapsed: true,
              autogenerate: { directory: "interledger-101/digital-financial-inclusion" },
            },
            {
              label: "Building With Interledger Unit",
              collapsed: true,
              autogenerate: { directory: "interledger-101/building-with-interledger" },
            },
            {
              label: "Interledger Technology Unit",
              collapsed: true,
              autogenerate: { directory: "interledger-101/interledger-technology" },
            },
          ],
        },
        {
          label: "Open Payments 101",
          items: [
            { label: "Open Payments 101", link: "open-payments-101" },
            {
              label: "A Simple Guide to the Open Payments Standard",
              link: "https://interledger.org/developers/blog/simple-open-payments-guide/",
              attrs: {
                target: "_blank",
                rel: "noopener noreferrer",
                "data-icon": "external",
              },
            },
            {
              label: "Introduction to Open Payments video series",
              link: "https://www.youtube.com/watch?v=zxDvtYVhiBE&list=PLDHju0onYcAJakrsF-I7LK_0phEqurn46 ",
              attrs: {
                target: "_blank",
                rel: "noopener noreferrer",
                "data-icon": "external",
              },
            },
            {
              label: "Open Payments Docs",
              link: "https://openpayments.dev/",
              attrs: {
                target: "_blank",
                rel: "noopener noreferrer",
                "data-icon": "external",
              },
            },
          ],
        },
      ],
    }),
  ],
  server: {
    port: 1106,
  },
});
