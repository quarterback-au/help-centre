---
sidebar_position: 2
title: Setting Up Notifications
description: Get notified when share prices move, sentiment shifts, or media coverage appears — configure your first alerts in minutes.
---

# Setting Up Notifications

Never miss what matters — Quarterback can email you when your share price moves, sentiment spikes, media articles appear, or activity volume changes. Set up a few key notifications and you'll have a daily pulse on your company without needing to log in.

---

## What You'll Need

Before setting up notifications, make sure:

- Your [company profile](/settings/company-profile) is configured with an ASX code
- You have email addresses for anyone who should receive alerts
- Optional: A configured [benchmark](/settings/market-settings) for unusual price movement alerts

---

## Creating Your First Notification

1. Navigate to <span className="ui-page">Notifications</span> in the sidebar
2. Click <span className="ui-action">New Alert</span>
3. Choose an alert type — **Real-time Alerts** on the left, **Scheduled Summaries** on the right
4. Configure the trigger condition or schedule
5. Add one or more email recipients
6. Click <span className="ui-action">Save</span>

<!-- Screenshot: New alert form showing type selection -->

---

## Recommended Starting Alerts

If you're not sure where to begin, start with these three:

### Daily Recap

A comprehensive daily email delivered at a time you choose. Includes share price, sentiment score, activity count, AI-generated summary, and notable activities from the day.

| Setting | Recommended |
|---------|-------------|
| **Time** | 6:00 PM (after market close) |
| **Timezone** | Australia/Sydney |

:::tip
The Daily Recap is the single most useful notification — it gives you a complete daily pulse without needing to log in.
:::

### Media Activity

Triggers whenever a new media article is published about your company. No threshold to configure — you'll be notified of every article with its sentiment score and a direct link.

This ensures you never miss news coverage and can respond quickly when needed.

### Price Movement

Triggers when your share price moves beyond a set percentage from the opening price during trading hours.

| Setting | Recommended |
|---------|-------------|
| **Threshold** | 5–10% depending on your stock's typical volatility |

For a more sophisticated statistical approach, consider **Unusual Price Movement** instead — it uses Z-score analysis to detect movements that are abnormal relative to the market, accounting for your stock's typical volatility.

---

## All Alert Types

| Type | Category | What It Does |
|------|----------|-------------|
| **Price Movement** | Real-time | Triggers on percentage moves from open |
| **Unusual Price Movement** | Real-time | Triggers on statistically abnormal returns (Z-score) |
| **Sentiment** | Real-time | Triggers when activity sentiment exceeds a threshold |
| **Activity Level** | Real-time | Triggers when activity volume spikes compared to previous period |
| **Broad Search** | Real-time | Triggers when activities match a keyword using AI semantic search |
| **Media Activity** | Real-time | Triggers on every new media article |
| **Daily Recap** | Scheduled | AI-generated daily summary email |
| **Weekly Recap** | Scheduled | AI-generated weekly summary email |

See [Notifications](/features/alerts) for full details on each type, including configuration options and how they work.

---

## Managing Your Notifications

All configured alerts appear as cards on the <span className="ui-page">Notifications</span> → <span className="ui-page">Rules</span> tab. From here you can:

- **Edit** any alert by clicking its card — change thresholds, recipients, or schedules
- **Pause/Resume** using the toggle on each card — pausing stops the alert without deleting it
- **Delete** an alert from within the edit form

---

<div className="related-links">

**Related**

- [Notifications](/features/alerts) – Full details on every alert type and configuration option
- [Market Settings](/settings/market-settings) – Configure your benchmark for unusual price movement alerts
- [Dashboard](/features/dashboard) – Monitor the metrics that alerts track
- [Market Sentiment](/concepts/market-sentiment) – How sentiment scores are calculated

</div>
