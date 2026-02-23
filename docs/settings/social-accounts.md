---
sidebar_position: 3
title: Social Accounts
description: Configure the search queries that control what Quarterback monitors across social platforms and news.
---

# Social Accounts

Control what Quarterback listens for — configure the search queries that determine which social posts, forum threads, and news articles get tracked.

<span className="ui-page">Settings</span> → <span className="ui-page">Social Accounts</span>

<!-- Screenshot: Social accounts settings page showing query generator -->

---

## Query Generator

The query generator creates platform-specific search queries automatically:

1. Enter **include keywords** — terms to monitor (your company name and ticker are auto-included)
2. Enter **exclude keywords** — terms to filter out (e.g., unrelated companies with similar names)

The system generates optimised queries for each platform, handling syntax differences automatically.

<!-- Screenshot: Query generator showing include/exclude keywords and generated platform queries -->

---

## Platform-Specific Queries

Queries can be customised per platform if the auto-generated queries need refinement:

| Platform | Syntax Notes | Example |
|----------|-------------|---------|
| **Twitter** | Supports OR operators and quoted phrases | `"Company Name" OR "ASX:ABC"` |
| **LinkedIn** | Quoted phrases and company name variations | `"Company Name" OR "Company Ltd"` |
| **News** | No colons supported — use alternatives | `"Company Name" OR ABC.ASX` or `$ABC` |
| **Reddit** | Simple keyword and ticker matching | `"Company Name" OR ticker` |

:::info
News queries use a different syntax from social platforms — colons aren't supported. Use formats like `$ABC` or `ABC.ASX` instead of `ASX:ABC`.
:::

---

<div className="related-links">

**Related**

- [Company Profile](/settings/company-profile) – Set your official social handles
- [Social Media Integrations](/settings/social-media-integration) – Connect accounts for follower tracking
- [Activities](/features/activities) – Where monitored content appears

</div>
