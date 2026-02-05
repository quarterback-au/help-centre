import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
    mainSidebar: [
        {
            type: 'doc',
            id: 'index',
            label: 'Home'
        },
        {
            type: 'category',
            label: 'Getting Started',
            collapsed: false,
            items: [
                'getting-started/quick-start',
                'getting-started/video-walkthrough'
            ]
        },
        {
            type: 'category',
            label: 'Guides',
            collapsed: false,
            items: [
                'guides/first-report',
                'guides/setup-alerts',
                'guides/track-announcements'
            ]
        },
        {
            type: 'category',
            label: 'Features',
            collapsed: true,
            items: [
                'features/dashboard',
                'features/activities',
                'features/announcements',
                'features/alerts',
                'features/insights',
                'features/media-monitoring',
                'features/people',
                'features/reports',
                'features/benchmarking'
            ]
        },
        {
            type: 'category',
            label: 'Concepts',
            collapsed: true,
            items: [
                'concepts/key-concepts',
                'concepts/correlation',
                'concepts/market-sentiment'
            ]
        },
        {
            type: 'category',
            label: 'Settings',
            collapsed: true,
            items: [
                'settings/company-profile',
                'settings/social-accounts',
                'settings/market-settings',
                'settings/team-members',
                'settings/mailchimp',
                'settings/social-media-integration'
            ]
        },
        {
            type: 'category',
            label: 'Resources',
            collapsed: true,
            items: [
                {
                    type: 'link',
                    label: 'Changelog',
                    href: '/changelog'
                },
                'faq'
            ]
        }
    ]
};

export default sidebars;
