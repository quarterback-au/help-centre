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
                'getting-started/video-walkthrough',
                'getting-started/key-concepts'
            ]
        },
        {
            type: 'category',
            label: 'Features',
            collapsed: false,
            items: [
                'features/dashboard',
                'features/activities',
                'features/announcements',
                'features/media-monitoring',
                'features/people',
                'features/alerts',
                'features/reports',
                'features/insights'
            ]
        },
        {
            type: 'category',
            label: 'Company Settings',
            collapsed: true,
            items: [
                'settings/company-profile',
                'settings/social-accounts',
                'settings/market-settings',
                'settings/team-members'
            ]
        },
        {
            type: 'category',
            label: 'Integrations',
            collapsed: true,
            items: ['integrations/mailchimp', 'integrations/social-media']
        },
        {
            type: 'category',
            label: 'Additional Resources',
            collapsed: true,
            items: [
                {
                    type: 'link',
                    label: 'Changelog',
                    href: '/changelog'
                },
                'faq',
                {
                    type: 'link',
                    label: 'Contact Support',
                    href: 'mailto:support@qback.au'
                }
            ]
        }
    ]
};

export default sidebars;
