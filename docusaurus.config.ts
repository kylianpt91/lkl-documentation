import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'LKL Cloud — Documentation',
  tagline: 'Guides et réponses pour vos VPS, hébergements et bots Discord.',
  favicon: 'img/logo.png',

  future: {
    v4: true,
  },

  url: 'https://docs.lklcloud.fr',
  baseUrl: '/',

  organizationName: 'kylianpt91',
  projectName: 'lkl-documentation',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'LKL Cloud',
      logo: {
        alt: 'LKL Cloud',
        src: 'img/logo.png',
      },
      items: [
        {type: 'docSidebar', sidebarId: 'mainSidebar', position: 'left', label: 'Documentation'},
        {href: 'https://clients.lklcloud.fr', label: 'Espace client', position: 'right'},
        {href: 'https://lklcloud.fr', label: 'Site principal', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'VPS Linux', to: '/vps-linux/premiers-pas'},
            {label: 'Hébergement web', to: '/web/plesk-debuter'},
            {label: 'Bots Discord', to: '/bots-discord/demarrer'},
            {label: 'Compte & facturation', to: '/compte/moyens-de-paiement'},
          ],
        },
        {
          title: 'LKL Cloud',
          items: [
            {label: 'Site principal', href: 'https://lklcloud.fr'},
            {label: 'Espace client', href: 'https://clients.lklcloud.fr'},
            {label: 'Support', href: 'mailto:support@lklcloud.fr'},
          ],
        },
      ],
      copyright: `LKL CLOUD — Association déclarée (loi 1901) — © ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
