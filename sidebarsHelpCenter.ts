import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
    helpCenterSidebar: [
        {
            type: 'doc',
            id: 'index',
            label: 'Help Center'
        },
        {
            type: 'category',
            label: 'Account & Setup',
            collapsed: false,
            items: [
                'account-setup/invite-team-members',
                'account-setup/connect-social-accounts',
                'account-setup/configure-market-settings'
            ]
        },
        {
            type: 'category',
            label: 'Reports & Analytics',
            collapsed: false,
            items: [
                'reports-analytics/create-a-report',
                'reports-analytics/read-sentiment-analysis',
                'reports-analytics/export-and-share-reports'
            ]
        },
        {
            type: 'category',
            label: 'Alerts & Notifications',
            collapsed: true,
            items: [
                'alerts-notifications/create-alert-rule',
                'alerts-notifications/manage-notification-preferences'
            ]
        },
        {
            type: 'category',
            label: 'Market Intelligence',
            collapsed: true,
            items: [
                'market-intelligence/track-competitor',
                'market-intelligence/monitor-announcements',
                'market-intelligence/use-media-monitoring'
            ]
        },
        {
            type: 'category',
            label: 'Troubleshooting',
            collapsed: true,
            items: [
                'troubleshooting/data-not-loading',
                'troubleshooting/social-account-connection-issues'
            ]
        }
    ]
};

export default sidebars;
