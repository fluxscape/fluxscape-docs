// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {
  customMarkupPlugin,
  customRenderedMarkupPlugin,
} from "./plugins/markdown-syntax";
import { includeMarkdownPlugin } from "./plugins/import-markdown";
import { copyNodeMarkdownPlugin } from "./plugins/copy-node-markdowns";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Fluxscape Docs",
  tagline: "Fluxscape Documentation",
  url: "https://docs.fluxscape.io",
  baseUrl: `/`,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Fluxscape", // Usually your GitHub org/user name.
  projectName: "Fluxscape", // Usually your repo name.

  // This depends on the hosting provider
  // trailingSlash: true,

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          breadcrumbs: false,
        },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/variables.css"),
            require.resolve("./src/css/navbar.scss"),
            require.resolve("./src/css/sidebar.scss"),
            require.resolve("./src/css/searchbar.scss"),
            require.resolve("./src/css/markdown.scss"),
            require.resolve("./src/css/pagination.scss"),
          ],
        },
      }),
    ],
  ],

  plugins: [
    "docusaurus-plugin-sass",

    // https://github.com/praveenn77/docusaurus-lunr-search
    [
      "@easyops-cn/docusaurus-search-local",
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        hashed: true,
        searchBarPosition: "left",
      },
    ],

    // Node reference docs
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "nodes",
        path: "nodes",
        routeBasePath: "nodes",
        sidebarPath: require.resolve("./sidebarsNodes.js"),
        breadcrumbs: false,
        remarkPlugins: [customMarkupPlugin, includeMarkdownPlugin],
        rehypePlugins: [customRenderedMarkupPlugin],
      },
    ],
    // Javascript API
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "javascript",
        path: "javascript",
        breadcrumbs: false,
        routeBasePath: "javascript",
        sidebarPath: require.resolve("./sidebarsJavascript.js"),
      },
    ],

    // Library
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "library",
        path: "library",
        routeBasePath: "library",
        breadcrumbs: false,
        sidebarPath: require.resolve("./sidebarsLibrary.js"),
        remarkPlugins: [customMarkupPlugin, includeMarkdownPlugin],
      },
    ],

    // Whats new
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "whats-new",
        path: "whats-new",
        routeBasePath: "whats-new",
        blogSidebarTitle: "Recent updates",
        postsPerPage: 1,
        feedOptions: { type: "json" },
        showReadingTime: false,
        remarkPlugins: [customMarkupPlugin, includeMarkdownPlugin],
      },
    ],

    // Copy static md files for editor inline docs
    [
      copyNodeMarkdownPlugin,
      {
        paths: [
          { path: "nodes/", folderName: true },
          { path: "library/modules/" },
        ],
      },
    ],
  ],

  themeConfig: {
    metadata: [
      {
        property: "og:image",
        content: "https://docs.fluxscape.io/img/fluxscape-docs-banner.jpg",
      },
      {
        property: "og:title",
        content: "Fluxscape Documentation",
      },
      {
        property: "og:description",
        content:
          "Explore Fluxscape guides, tutorials, videos, modules, and reference documentation here. Fluxscape is the low-code platform for designers + developers to build custom web apps and experiences.",
      },
      {
        name: "google-site-verification",
        content: "KjANYZkN8ymGFD0SGnAVlRkD85p-fpNHCRAOKxurpWI",
      },
    ],
    colorMode: {
      disableSwitch: true,
      defaultMode: "dark",
    },
    navbar: {
      title: "Docs",
      logo: {
        alt: "Fluxscape Logo",
        src: "img/logo.png",
      },
      items: [
        {
          label: "Learn",
          to: "/docs/learn",
          position: "right",
        },
        {
          label: "Node reference",
          to: "/nodes/overview",
          position: "right",
        },
        {
          label: "Library",
          to: "/library/overview",
          position: "right",
        },
        {
          label: "Javascript",
          to: "/javascript/overview",
          position: "right",
          className: "has-divider",
        },
        {
          label: "Discord",
          to: "https://discord.gg/fXNW9EXa6A",
          target: "_blank",
          position: "right",
          className: "is-discord",
        },
        {
          label: "Download",
          to: "https://github.com/fluxscape/fluxscape/releases",
          target: "_blank",
          position: "right",
          className: "is-download-button",
        },
      ],
    },
  },
};

export default config;
