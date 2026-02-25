---
sidebar_position: 4
title: Mailchimp Integration
description: Mailchimp integration for tracking email campaign performance alongside other activities.
---

# Mailchimp Integration

See how email campaigns perform alongside social, media, and market activity. The Mailchimp integration pulls in campaign metrics automatically once connected during onboarding.

<span className="ui-page">Settings</span> → <span className="ui-page">Integrations</span>

![Mailchimp integration settings showing API key and Audience ID fields](/img/docs/settings/mailchimp-integration.png)

---

## Connection Details

The Mailchimp integration requires two credentials. These are usually provided during onboarding, but you can update them at any time.

### Finding Your API Key

1. Log in to [Mailchimp](https://mailchimp.com)
2. Navigate to **Account & billing** → **Extras** → **API keys**
3. If you already have a key, copy it. Otherwise click <span className="ui-action">Create A Key</span>
4. Copy the full API key (it looks like `abc123def456-us5`)

![Mailchimp API keys page showing where to create and copy your key](/img/docs/settings/mailchimp-api-keys.png)

:::info
The suffix after the dash (e.g., `-us5`) indicates your Mailchimp data centre. The integration uses this to connect to the correct server automatically.
:::

### Finding Your Audience ID

1. In Mailchimp, go to **Audience**
2. Use the dropdown to navigate to your contact list
3. Click the **three dots** menu → **Audience settings**

<img src="/img/docs/settings/mailchimp-audience-settings.png" alt="Mailchimp audience dropdown showing the three dots menu and Audience settings option" className="img-half" />

4. Find your **Audience ID** on the settings page

![Mailchimp audience settings page showing the Audience ID field](/img/docs/settings/mailchimp-audience-id.png)

### Connecting

1. In Quarterback, navigate to <span className="ui-page">Settings</span> → <span className="ui-page">Integrations</span>
2. Toggle **Mailchimp** on
3. Paste your **API Key** and **Audience ID**
4. Click <span className="ui-action">Save Changes</span>

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
