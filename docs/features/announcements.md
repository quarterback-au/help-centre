---
sidebar_position: 3
title: Announcements
description: Monitor ASX announcements and analyze market impact
---

# Announcements

Track your ASX announcements and understand their market impact with Quarterback's announcement analysis tools.

## Overview

The Announcements page shows all your company's ASX announcements with:

- **Title** - Announcement headline
- **Date** - Release date and time
- **Category** - Type of announcement
- **Price Sensitive** - Whether it was marked price-sensitive
- **Market Impact** - CAR (Cumulative Abnormal Return) metrics

## Announcement List

Navigate to **Announcements** in the sidebar to view all announcements.

### Columns

| Column | Description |
|--------|-------------|
| **Date** | When the announcement was released |
| **Title** | Announcement headline |
| **Category** | Auto-categorized type |
| **Sensitive** | Price-sensitive indicator |
| **AR₀** | Abnormal return on announcement day |
| **CAR** | 3-day cumulative abnormal return |

### Filtering

Filter announcements by:
- **Date Range** - Select specific periods
- **Category** - Filter by announcement type
- **Price Sensitive** - Show only price-sensitive items

## Market Impact Analysis

Quarterback calculates market impact metrics for each announcement:

### Abnormal Return (AR)

The stock's return compared to expected return based on market movements:

- **AR₀** - Return on announcement day (day 0)
- **Positive AR** = Stock outperformed the market
- **Negative AR** = Stock underperformed the market

### Cumulative Abnormal Return (CAR)

Sum of abnormal returns over a window:

| Metric | Window | Use Case |
|--------|--------|----------|
| **CAR(-1,+1)** | 3 days around announcement | Immediate market reaction |
| **CAR(0,+10)** | 11 days after | Sustained impact |
| **CAR(-3,-1)** | 3 days before | Information leakage detection |

### Interpreting CAR

- **CAR > 0** - Market reacted positively
- **CAR < 0** - Market reacted negatively
- **Large |CAR|** - Strong market reaction

## Announcement Details

Click any announcement to open the detail view:

### Overview Tab
- Full announcement title
- Release date and time
- ASX category and sensitivity

### Market Impact Tab
- CAR chart showing daily abnormal returns
- Event study visualization
- Comparison to similar announcements

### Linked Activities Tab
- Social media reactions to the announcement
- News coverage
- Forum discussions

## Linking Activities

Connect market chatter to specific announcements:

1. Open an announcement
2. Click **Link Activities**
3. Search for relevant activities
4. Click to add the link

Quarterback also auto-links activities that mention your announcement.

### Auto-Matching

The system automatically suggests links based on:
- Timing (activities near announcement date)
- Content similarity (mentions of announcement topics)
- Keywords and hashtags

## Categories

Announcements are auto-categorized into types:

- **Quarterly Activities Report** - 4C and quarterly updates
- **Annual Report** - Yearly financial reports
- **Capital Raising** - Share placements and rights issues
- **Contract/Agreement** - Commercial agreements
- **Trading Halt** - Halt and resumption notices
- **Director Changes** - Board appointments
- **Other** - Miscellaneous announcements

You can manually override categories if needed.

## Event Study Chart

The event study chart visualizes market reaction:

- **X-axis** - Days relative to announcement (day 0)
- **Y-axis** - Cumulative abnormal return
- **Confidence Bands** - Statistical significance indicators

This helps you understand:
- When the market started reacting
- Whether the reaction was sustained
- How this compares to your average announcement impact

---

## Tips & Best Practices

- **Compare to benchmarks** - Check if your announcement performance is above/below average
- **Track by category** - See which types of announcements move your stock most
- **Link activities** - Connect market chatter to understand narrative
- **Monitor pre-announcement CAR** - Large movements before announcements may indicate leaks

---

## Related

- [Key Concepts](/concepts/key-concepts) - Understanding CAR and AR
- [Activities](/features/activities) - Track market reactions
- [Insights](/features/insights) - AI-powered analysis
