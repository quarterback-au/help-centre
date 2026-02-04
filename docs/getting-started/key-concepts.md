---
sidebar_position: 3
title: Key Concepts
description: Understanding the core concepts in Quarterback
---

# Key Concepts

Before diving deep into Quarterback, it helps to understand some key concepts and terminology.

## Activities

**Activities** are any mentions, posts, or content related to your company. This includes:

- **Social Media Posts** - Tweets, LinkedIn posts, Reddit discussions
- **News Articles** - Media coverage and press mentions
- **Forum Posts** - HotCopper, Strawman, and other investment forums
- **Videos** - YouTube content mentioning your company

Each activity is analyzed for:
- **Sentiment** - Positive, negative, or neutral tone
- **Reach** - Potential audience size
- **Engagement** - Likes, comments, shares

## Announcements

**Announcements** are official ASX announcements made by your company. Quarterback tracks:

- **Price-sensitive** vs non-price-sensitive announcements
- **Category** - Quarterly reports, capital raises, contracts, etc.
- **Market Impact** - How the stock price reacted

## Sentiment Score

Sentiment is measured on a scale from **-1 to +1**:

| Score | Meaning |
|-------|---------|
| +0.5 to +1.0 | Very Positive |
| +0.1 to +0.5 | Positive |
| -0.1 to +0.1 | Neutral |
| -0.5 to -0.1 | Negative |
| -1.0 to -0.5 | Very Negative |

## Market Metrics

### Abnormal Return (AR)

The difference between actual stock return and expected return based on market movements.

```
AR = Actual Return - Expected Return
```

A positive AR means the stock outperformed expectations; negative means it underperformed.

### Cumulative Abnormal Return (CAR)

The sum of abnormal returns over a period, typically used around announcement dates:

- **CAR(-1, +1)** - 3-day window around announcement
- **CAR(0, +10)** - 11-day window for sustained impact
- **CAR(-3, -1)** - Pre-announcement period (can indicate information leakage)

### Z-Score

A statistical measure of how unusual a price movement is:

| Z-Score | Meaning |
|---------|---------|
| > 2.0 | Statistically significant (95% confidence) |
| > 3.0 | Highly significant (99.7% confidence) |

## Benchmark Index

The market index used to calculate expected returns. Options include:

- **AXJO (ASX 200)** - Default for most companies
- **XSO (Small Ordinaries)** - For smaller companies
- **Commodity prices** - For resources companies (e.g., Gold, Iron Ore)

You can configure your preferred benchmark in Company Settings.

## People

**People** are individuals associated with your company mentions:

- **Authors** - People creating content about your company
- **Key Influencers** - High-reach accounts discussing your stock
- **Management** - Your company's executives and spokespersons

## Publishers

**Publishers** are the sources where content appears:

- News outlets (AFR, Reuters, etc.)
- Social platforms (Twitter, LinkedIn)
- Investment forums (HotCopper, Strawman)

---

## Next Steps

Now that you understand the basics, explore:

- [Activities in Detail](/features/activities)
- [Announcement Analysis](/features/announcements)
- [Setting Up Alerts](/features/alerts)
