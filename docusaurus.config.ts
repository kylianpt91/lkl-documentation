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
    locales: ['fr', 'en'],
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

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['fr', 'en'],
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: '/',
      },
    ],
  ],

  themeConfig: {
    image: 'img/logo.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'promo-offres',
      content:
        'Besoin d\'un serveur performant pour vos projets ? ' +
        '<a href="https://lklcloud.fr" style="color:#FF6A30;font-weight:700;text-decoration:none">Découvrez nos offres →</a>',
      backgroundColor: '#17110d',
      textColor: '#fff',
      isCloseable: true,
    },
    navbar: {
      style: 'dark',
      title: 'LKL Cloud',
      logo: {
        alt: 'LKL Cloud',
        src: 'img/logo.png',
      },
      items: [
        {type: 'docSidebar', sidebarId: 'mainSidebar', position: 'left', label: 'Documentation'},
        {href: 'https://clients.lklcloud.fr', label: 'Espace client', position: 'right'},
        {href: 'https://lklcloud.fr', label: 'Site principal', position: 'right'},
        {href: 'https://discord.gg/jfNg7sB6A7', label: 'Discord', position: 'right'},
        {type: 'localeDropdown', position: 'right'},
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
            {label: 'Noms de domaine', to: '/domaines/premiers-pas'},
            {label: 'Bots Discord', to: '/bots-discord/demarrer'},
            {label: 'Compte & facturation', to: '/compte/moyens-de-paiement'},
          ],
        },
        {
          title: 'LKL Cloud',
          items: [
            {label: 'Site principal', href: 'https://lklcloud.fr'},
            {label: 'Espace client', href: 'https://clients.lklcloud.fr'},
            {label: 'Statut des services', href: 'https://clients.lklcloud.fr/status'},
            {label: 'Roadmap', href: 'https://clients.lklcloud.fr/roadmap'},
            {label: 'Sécurité', href: 'https://clients.lklcloud.fr/securite'},
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
