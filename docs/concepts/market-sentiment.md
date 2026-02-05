---
sidebar_position: 3
title: Market Sentiment
description: How Quarterback measures and interprets sentiment across communications.
---

# Market Sentiment

How Quarterback measures and interprets sentiment across communications.

## Sentiment Scoring

Each activity receives a sentiment score from -1 to +1:

| Score Range | Label | Meaning |
|-------------|-------|---------|
| > 0.1 | Positive | Favorable tone, bullish language |
| -0.1 to 0.1 | Neutral | Factual, neither positive nor negative |
| -0.3 to -0.1 | Lacking | Slightly negative, cautious tone |
| < -0.3 | Negative | Unfavorable tone, bearish language |

## Aggregation

Sentiment aggregates at multiple levels:

- **Activity** – Individual score
- **Author** – Average across all their activities
- **Announcement** – Average of linked activities
- **Period** – Average across all activities in date range

## Sentiment by Source

Different platforms tend toward different sentiment distributions:

- **HotCopper** – Often more polarized (strong opinions)
- **Twitter** – Wide range, depends on author type
- **LinkedIn** – Generally more neutral/professional
- **Media** – Typically neutral, factual reporting

The dashboard's sentiment by source chart helps identify platform-specific patterns.

## Using Sentiment Data

**Monitor shifts:** Sudden sentiment changes may signal emerging issues or opportunities.

**Correlate with price:** Compare sentiment trends with share price movements to identify relationships.

**Identify outliers:** High-sentiment activities (positive or negative) often warrant closer attention.

**Track authors:** Authors with consistently extreme sentiment may be influential voices worth monitoring.
