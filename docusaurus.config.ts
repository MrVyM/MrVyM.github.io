import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { customReadingTime } from './src/ComputeReadingTime'
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'MrVyM.dev',
  tagline: 'Computer Sciences are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://blog.mrvym.dev/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MrVym', // Usually your GitHub org/user name.
  projectName: 'posts', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        sitemap : 
        {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
        blog: false, // Config later with plugins
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        path: 'blog',
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        feedOptions: {
          type: 'all',
          xslt: true,
          copyright: 'Copyright © ${new Date().getFullYear()} MrVym.dev.',
        },
        editUrl: 'https://github.com/MrVyM/MrVyM.github.io/issues',
        // Useful options to enforce blogging best practices
        onInlineTags: 'warn',
        onInlineAuthors: 'throw',
        onUntruncatedBlogPosts: 'throw',

        blogSidebarTitle: '...',
        routeBasePath: '/',
        blogSidebarCount: 'ALL',

        showReadingTime: true,
        readingTime: ({content, frontMatter, defaultReadingTime}) => 
          customReadingTime({content, options: {wordsPerMinute : 300}}).minutes,
      },
    ],
  ],
  themeConfig: {
    // https://prismjs.com/#supported-languages 
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [ 
        "diff",
        "makefile",
        "bash",
        "vim",
        "nasm",
        "git",
        "vhdl",
      ],
    },
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Mr.VyM.dev',
      logo: {
        alt: 'Tech Blog - Curiosities - Embedded Systems',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/', label: 'Blog', position: 'left'},
        {to: '/draft', label: 'Draft', position: 'right'},
        {to: '/todo', label: 'Todo', position: 'right'},
        {
          href: 'https://github.com/MrVyM/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Contact',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/MrVyM',
            },
            {
              label: 'Contributing',
              href: 'https://github.com/MrVyM/MrVyM.github.io/pulls',
            },
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/',
            },
            {
              label: 'Tags',
              to: '/tags',
            },
            {
              label: 'Archive',
              to: '/archive',
            },
          ],
        },
        {
          title: 'Feed',
          items : [ 
            {
              label: 'RSS',
              href: 'https://blog.mrvym.dev/rss',
            },
            {
              label: 'Atom',
              href: 'https://blog.mrvym.dev/atom',
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} mrvym.dev, Inc. Thanks to <href link="https://docusaurus.io/">Docusaurus.</href>`,
    },
  } satisfies Preset.ThemeConfig,
  stylesheets: [
    {
      href: '/katex/katex.min.css',
      type: 'text/css',
    },
  ],
};

export default config;
