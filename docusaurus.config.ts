import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Mural Codex',
  tagline: 'El archivo central de conocimiento técnico de Mural Táctil',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://CrisHB12.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/mural-codex/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CrisHB12', // Usually your GitHub org/user name.
  projectName: 'mural-codex', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  trailingSlash: false,

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/CrisHB12/mural-codex/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/CrisHB12/mural-codex/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
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
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Mural Codex',
      logo: {
        alt: 'Codex Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Inicio',
        },
        // Dropdown de Categorías para acceso rápido
        {
          type: 'dropdown',
          label: 'Tecnologías',
          position: 'left',
          items: [
            {
              label: 'Frontend (React + UI)',
              to: '/docs/react/intro',
            },
            {
              label: 'Backend (Bun + Docker)',
              to: '/docs/bun/intro',
            },
            {
              label: 'Lenguajes (TS)',
              to: '/docs/typescript/intro',
            },
          ],
        },
        // Dropdown de Workflow
        {
          type: 'dropdown',
          label: 'Workflow',
          position: 'left',
          items: [
            {
              label: 'Git & GitHub',
              to: '/docs/workflow/git-standards',
            },
            {
              label: 'Documentación',
              to: '/docs/docusaurus/setup',
            },
          ],
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/CrisHB12/mural-codex',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'El Codex',
          items: [
            {
              label: 'Introducción',
              to: '/docs/intro',
            },
            {
              label: 'Docusaurus',
              to: '/docs/docusaurus/setup',
            },
            {
              label: 'Docker',
              to: '/docs/docker/intro',
            },
          ],
        },
        {
          title: 'Comunidad',
          items: [
            {
              label: 'GitHub Issues',
              href: 'https://github.com/CrisHB12/mural-codex/issues',
            },
          ],
        },
        {
          title: 'Más',
          items: [
            {
              label: 'Novedades',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/CrisHB12/mural-codex',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mural Táctil. Construido con Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
