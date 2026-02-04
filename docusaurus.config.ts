import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'Quarterback Help Center',
    tagline: 'Learn how to master investor relations with Quarterback',
    favicon: 'img/favicon.ico',

    future: {
        v4: true
    },

    // Production URL - update when deploying
    url: 'https://help.qback.au',
    baseUrl: '/',

    organizationName: 'quarterback-au',
    projectName: 'platform',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'en',
        locales: ['en']
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    routeBasePath: '/', // Docs at root instead of /docs
                    editUrl: undefined // Remove "edit this page" links
                },
                blog: {
                    path: 'changelog',
                    routeBasePath: 'changelog',
                    blogTitle: 'Changelog',
                    blogDescription: 'Latest updates and features in Quarterback',
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true
                    },
                    editUrl: undefined,
                    blogSidebarTitle: 'Recent Updates',
                    blogSidebarCount: 10
                },
                theme: {
                    customCss: './src/css/custom.css'
                }
            } satisfies Preset.Options
        ]
    ],

    themeConfig: {
        image: 'img/quarterback-social-card.jpg',
        colorMode: {
            defaultMode: 'light',
            disableSwitch: false,
            respectPrefersColorScheme: true
        },
        // Algolia search - configure when ready
        // algolia: {
        //     appId: 'YOUR_APP_ID',
        //     apiKey: 'YOUR_SEARCH_API_KEY',
        //     indexName: 'quarterback',
        // },
        navbar: {
            title: 'Quarterback',
            logo: {
                alt: 'Quarterback Logo',
                src: 'img/logo.svg'
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'mainSidebar',
                    position: 'left',
                    label: 'Docs'
                },
                {
                    to: '/changelog',
                    label: 'Changelog',
                    position: 'left'
                },
                {
                    href: 'https://app.qback.au',
                    label: 'Go to App',
                    position: 'right'
                }
            ]
        },
        footer: {
            style: 'light',
            links: [
                {
                    title: 'Documentation',
                    items: [
                        {
                            label: 'Getting Started',
                            to: '/getting-started/quick-start'
                        },
                        {
                            label: 'Features',
                            to: '/features/dashboard'
                        },
                        {
                            label: 'FAQ',
                            to: '/faq'
                        }
                    ]
                },
                {
                    title: 'Resources',
                    items: [
                        {
                            label: 'Changelog',
                            to: '/changelog'
                        },
                        {
                            label: 'Contact Support',
                            href: 'mailto:support@qback.au'
                        }
                    ]
                },
                {
                    title: 'Company',
                    items: [
                        {
                            label: 'About Quarterback',
                            href: 'https://qback.au'
                        },
                        {
                            label: 'Privacy Policy',
                            href: 'https://qback.au/privacy'
                        },
                        {
                            label: 'Terms of Service',
                            href: 'https://qback.au/terms'
                        }
                    ]
                }
            ],
            copyright: `© ${new Date().getFullYear()} Quarterback. All rights reserved.`
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula
        }
    } satisfies Preset.ThemeConfig
};

export default config;
