import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { customReadingTime } from './ComputeReadingTime'


// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'MrVyM.dev',
  tagline: 'Computer Sciences are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://blog.marticou.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MrVyM', // Usually your GitHub org/user name.
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
        blog: {
          feedOptions: {
            type: 'all',
            xslt: true,
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
          readingTime: ({content, frontMatter, defaultReadingTime}) => {
            frontMatter.hide_reading_time
              ? undefined
              : customReadingTime({content, options: {wordsPerMinute : 300}}); 
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
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
              to: '/rss',
            },
            {
              label: 'Atom',
              to: '/atom',
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} blog.mrvym.dev, Inc. Thanks to <href link="https://docusaurus.io/">Docusaurus.</href>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
