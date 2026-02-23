---
sidebar_position: 4
title: Alerts
description: Get notified when price moves, sentiment shifts, or media coverage appears.
---

# Alerts

Stay ahead of what matters — get notified by email when the market moves, sentiment shifts, or your company appears in the news.

<!-- Screenshot: Alerts rules page showing configured alert list -->

---

## Alert Types

### Price Movement

Triggers when your share price moves beyond a specified percentage from open.

| Setting | Description |
|---------|-------------|
| **Threshold** | Percentage move (e.g., 5%) |

Set based on your stock's typical volatility — a 5% move means different things for a large cap vs a micro cap.

### Unusual Price Movement

Triggers when abnormal returns exceed statistical thresholds, based on Z-score analysis of your stock's returns relative to its benchmark.

This alert identifies days where price movement is statistically unusual compared to historical patterns — even if the raw percentage change appears modest.

### Activity Level

Triggers when activity volume changes by a specified percentage compared to the previous period.

| Setting | Description |
|---------|-------------|
| **Threshold** | Percentage change in activity |
| **Comparison interval** | Day, week, or month |

### Sentiment

Triggers on activities matching a sentiment threshold.

| Setting | Description |
|---------|-------------|
| **Direction** | Positive (> 0.5) or Negative (< -0.5) |

### Broad Search

Triggers when activities match AI-generated search embeddings for specific keywords.

| Setting | Description |
|---------|-------------|
| **Keywords** | Terms to match |
| **Relevance level** | Most relevant, Highly relevant, or Moderately relevant |

### Media Activity

Triggers whenever new media articles are published about your company. No threshold needed — you'll be notified of all media coverage.

### Daily Recap

Comprehensive daily summary sent at 6pm AWST:

- Sentiment metrics and trends
- Activity counts vs yesterday
- Share price movement
- Top positive and negative activities
- Media highlights
- AI-generated bullet points

### Weekly Recap

Same content as the Daily Recap but comparing week-over-week. Sent on your chosen day at 6pm AWST, with expanded activity highlights.

---

## Creating an Alert

<!-- Screenshot: New alert configuration form -->

1. Navigate to <span className="ui-page">Alerts</span> in the sidebar
2. Click <span className="ui-action">New Alert</span>
3. Select the alert type
4. Configure the threshold or trigger condition
5. Add email recipients (one or more addresses)
6. Click <span className="ui-action">Save</span>

Alerts are sent via email from `alerts@qback.au` with details and links to view the triggering content.

:::tip
Start with a **Daily Recap** and a **Media Activity** alert. The recap gives you a daily pulse, and media alerts ensure you never miss news coverage.
:::

---

## Managing Alerts

View all configured alerts in the <span className="ui-action">Rules</span> tab. From here you can:

- Edit thresholds or recipients
- Enable or disable individual alerts
- Delete alerts you no longer need

---

## Alert History

View past notifications in the <span className="ui-action">History</span> tab. See which alerts triggered, when they fired, and the conditions that triggered them.

<!-- Screenshot: Alert history tab showing triggered alerts -->

---

<div className="related-links">

**Related**

- [Dashboard](/features/dashboard) – Monitor metrics the alerts are tracking
- [Market Sentiment](/concepts/market-sentiment) – How sentiment scores work
- [Media Monitoring](/features/media-monitoring) – See the media coverage alerts notify you about

</div>
