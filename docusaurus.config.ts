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

    // Netlify Identity widget for CMS authentication
    scripts: [
        {
            src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
            async: true
        }
    ],

    // Outseta support widget - options must be defined before script loads
    headTags: [
        {
            tagName: 'script',
            attributes: {},
            innerHTML: `var o_options = {
                domain: 'quarterback.outseta.com',
                load: 'support'
            };`
        },
        {
            tagName: 'script',
            attributes: {
                src: 'https://cdn.outseta.com/outseta.min.js',
                'data-options': 'o_options'
            }
        }
    ],

    // Handle Netlify Identity redirects and sidebar customization
    clientModules: [
        require.resolve('./src/netlifyIdentityRedirect.js'),
        require.resolve('./src/sidebarCustomization.js')
    ],

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
                    showReadingTime: false,
                    feedOptions: {
                        type: ['rss', 'atom', 'json'],
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

    themes: [
        [
            '@easyops-cn/docusaurus-search-local',
            {
                hashed: true,
                docsRouteBasePath: '/',
                indexBlog: false,
                highlightSearchTermsOnTargetPage: true
            }
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
            title: '',
            logo: {
                alt: 'Quarterback',
                src: 'img/logo-full.png'
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'mainSidebar',
                    position: 'left',
                    label: 'Documentation'
                },
                {
                    to: '/changelog',
                    label: 'Changelog',
                    position: 'left'
                }
            ]
        },
        footer: {
            style: 'light',
            copyright: `© ${new Date().getFullYear()} Quarterback`
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula
        }
    } satisfies Preset.ThemeConfig
};

export default config;
