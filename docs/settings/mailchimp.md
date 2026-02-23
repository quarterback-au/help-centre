---
sidebar_position: 4
title: Mailchimp Integration
description: Connect Mailchimp to track email campaign performance alongside your other activities.
---

# Mailchimp Integration

Track how your email campaigns perform alongside social, media, and market activity — connect Mailchimp to pull in campaign metrics automatically.

<span className="ui-page">Settings</span> → <span className="ui-page">Integrations</span>

<!-- Screenshot: Mailchimp integration settings showing API key and Audience ID fields -->

---

## Setup

1. Navigate to <span className="ui-page">Settings</span> → <span className="ui-page">Integrations</span>
2. Toggle <span className="ui-action">Mailchimp</span> on
3. Enter your **API Key**
   - Find in Mailchimp: Profile → Extras → API Keys
4. Enter your **Audience ID**
   - Find in Mailchimp: Audience → Manage → Settings → Unique Audience ID
5. Click <span className="ui-action">Save</span>

---

## What Gets Tracked

Once connected, Quarterback imports campaign data automatically:

| Metric | Description |
|--------|-------------|
| **Campaign sends** | Total emails sent per campaign |
| **Delivery stats** | Bounce rate and delivery success |
| **Open rate** | Percentage of recipients who opened |
| **Click rate** | Percentage of recipients who clicked a link |
| **Subscriber engagement** | Overall engagement patterns |
| **Campaign timing** | When campaigns were sent |

Mailchimp metrics appear in:

- **Dashboard** — Audience section and stats bar
- **Activities** — Email campaigns show as activities with engagement details
- **Reports** — Campaign performance in board and monthly reports

---

## Disconnecting

Toggle Mailchimp off in <span className="ui-page">Settings</span> → <span className="ui-page">Integrations</span> to disconnect. Your API key and Audience ID are cleared from the database. Historical campaign data already imported into Quarterback is retained.

---

<div className="related-links">

**Related**

- [Activities](/features/activities) – Where email campaigns appear as activities
- [Dashboard](/features/dashboard) – Mailchimp follower count in the stats bar
- [Reports](/features/reports) – Campaign metrics in reports

</div>
