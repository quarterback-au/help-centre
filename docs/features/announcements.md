---
sidebar_position: 3
title: Announcements
description: Track ASX announcements, measure market impact, and understand what drives share price reaction.
---

# Announcements

See how the market reacts to your ASX announcements — from same-day price impact to sustained sentiment over the following days.

<!-- Screenshot: Full announcements grid showing columns, price-sensitive badges, and CAR values -->

---

## Announcements Grid

Announcements display in a data grid with powerful filtering and sorting.

### Columns

| Column | Description |
|--------|-------------|
| **Date / Time** | Announcement date and time (AEST) |
| **Category** | Automatically detected category based on headline content — e.g., Drilling, Capital Raise, Quarterly Report. See [Announcement Categorisation](/concepts/key-concepts#announcement-categorisation) |
| **Title** | Announcement headline. **$** badge indicates price-sensitive. **⚠️** icon flags possible pre-announcement information leakage (see [Leak Detection](/concepts/correlation#leak-detection)) |
| **Close** | Closing share price on announcement day |
| **Change** | Percentage change from previous close |
| **Volume** | Shares traded on announcement day |
| **AR(0)** | Abnormal Return on announcement day — how much the stock moved beyond what was expected given market conditions. See [Abnormal Returns](/concepts/correlation#abnormal-returns-ar) |
| **CAR** | Cumulative Abnormal Return over 10 trading days after announcement. Shows whether the market reaction sustained or faded. See [CAR](/concepts/correlation#cumulative-abnormal-returns-car) |
| **Sentiment** | Average sentiment across linked activities, scored from -1 to +1. See [Sentiment Scoring](/concepts/market-sentiment#sentiment-scoring) |
| **Linked** | Number of activities linked to this announcement |

### Price-Sensitive Announcements

Announcements marked with **$** are flagged by the ASX as material information likely to affect the share price — earnings results, capital raises, major contracts, and other market-moving disclosures.

**Default filter:** Price-sensitive announcements only. Toggle to show all announcements.

---

## Announcement Details

Click any announcement to open the detail panel.

<!-- Screenshot: Announcement detail panel showing market section, CAR chart, and activity breakdown -->

### Market Section

- Mini candlestick chart showing OHLC for the day
- Daily return with trending indicator
- Performance vs index (outperformance metric)
- Event Study CAR chart showing 10 days before and after the announcement

<!-- Screenshot: CAR event study chart showing pre and post announcement window -->

### Linked Activity Categories

Activities linked to the announcement are grouped by category:

| Category | What It Includes |
|----------|------------------|
| **Own Distribution** | Your broadcasts via LinkedIn, Twitter, Mailchimp |
| **Media Pickup** | News coverage with source breakdown |
| **Paid Distribution** | Sponsored placements |
| **Community Discussion** | Social and forum activity |

### Sentiment Analysis

Visual sentiment distribution showing positive, neutral, and negative breakdown with average score across all linked activities.

<!-- Screenshot: Sentiment breakdown section in announcement detail panel -->

---

## Linking Activities

Connect activities to announcements to build the full picture of market reaction.

1. Open the announcement detail panel
2. Click <span className="ui-action">Link Activities</span>
3. Search and select activities from other days
4. Linked activities appear in the breakdown and contribute to the announcement's sentiment average

<!-- Screenshot: Link Activities dialog with search results -->

:::tip
Compare CAR across announcements of the same category to understand which types drive sustained impact versus temporary spikes.
:::

---

## Exporting Reports

Generate HTML reports for board packs or compliance records:

1. Select announcements using checkboxes (or select all)
2. Click <span className="ui-action">Export</span> in the toolbar
3. Choose announcements to include
4. Report opens in a new tab — print or save as PDF

Reports include market metrics, activity breakdown, sentiment analysis, and linked activity details.

<!-- Screenshot: Export dialog or sample report preview -->

---

<div className="related-links">

**Related**

- [Abnormal Returns & Correlation](/concepts/correlation) – How AR and CAR are calculated
- [Key Concepts](/concepts/key-concepts) – Linked activity relationships and announcement categorisation
- [Reports](/features/reports) – Generate board and monthly reports
- [Market Sentiment](/concepts/market-sentiment) – How sentiment scoring works

</div>
