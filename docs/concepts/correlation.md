---
sidebar_position: 2
title: Abnormal Returns & Correlation
description: Understanding how your share price performs relative to expectations.
---

# Abnormal Returns and Correlation

Understanding how your share price performs relative to expectations.

## Abnormal Returns (AR)

Abnormal return measures how your stock performed compared to what the market model predicted.

**Formula:**
```
Abnormal Return = Actual Return - Expected Return
Expected Return = α + β × Market Return
```

Where:
- α (alpha) is the stock's baseline return independent of the market
- β (beta) is the stock's sensitivity to market movements
- Market Return is the benchmark index return (default: ASX 200)

**Interpretation:**
- Positive AR: Stock outperformed expectations
- Negative AR: Stock underperformed expectations

## Cumulative Abnormal Return (CAR)

CAR sums abnormal returns over multiple days to measure sustained impact:

- **AR(0)** – Same-day abnormal return
- **CAR(3d)** – Cumulative over 3 trading days
- **CAR(10d)** – Cumulative over 10 trading days

Sustained positive CAR after an announcement suggests the market views the news favorably. Sustained negative CAR suggests unfavorable reaction.

## Correlation

Correlation measures how closely your stock price moves with a benchmark (commodity or index):

- **+1.0** – Perfect positive correlation (moves together)
- **0** – No relationship
- **-1.0** – Perfect negative correlation (moves opposite)

**Interpretation:**

| Range | Meaning |
|-------|---------|
| 0.7 to 1.0 | Strong positive correlation |
| 0.4 to 0.7 | Moderate positive correlation |
| -0.4 to 0.4 | Weak or no correlation |
| -0.7 to -0.4 | Moderate negative correlation |
| -1.0 to -0.7 | Strong negative correlation |

Resource companies typically show moderate to strong positive correlation with their primary commodity.

## Using These Metrics

**For Announcements:**
Review AR(0) to see immediate market reaction. Check CAR(3d) and CAR(10d) to see if reaction sustained or reversed.

**For Market Context:**
When your stock moves, check if the benchmark moved similarly. Strong correlation suggests market-driven movement rather than company-specific factors.
