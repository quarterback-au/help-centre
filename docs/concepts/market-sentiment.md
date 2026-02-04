---
sidebar_position: 2
title: Market Sentiment
description: Understanding sentiment analysis and market metrics
---

# Market Sentiment

Quarterback uses advanced analytics to measure how the market perceives your company.

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

You can configure your preferred benchmark in [Market Settings](/settings/market-settings).
