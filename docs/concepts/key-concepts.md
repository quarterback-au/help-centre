---
sidebar_position: 1
title: Key Concepts
description: Core concepts that underpin the Quarterback platform.
---

# Key Concepts

Core concepts that underpin the Quarterback platform.

## Activities

An activity is any tracked communication event related to your company. Activities are the fundamental unit of data in Quarterback—everything from tweets to announcements to news articles.

## Sentiment

Sentiment analysis scores content on a scale from -1 (negative) to +1 (positive):

| Score | Label | Meaning |
|-------|-------|---------|
| > 0.1 | Positive | Favorable tone, bullish language |
| -0.1 to 0.1 | Neutral | Factual, neither positive nor negative |
| -0.3 to -0.1 | Lacking | Slightly negative, cautious tone |
| < -0.3 | Negative | Unfavorable tone, bearish language |

Sentiment is calculated using machine learning models trained on financial communications.

## Authors

Authors are the people behind activities. Quarterback tracks author metadata including name, profile URL, follower count, and platform-specific identifiers. Author statistics aggregate across all their activities.

## Sources

Sources are the platforms where activities originate—Twitter, HotCopper, LinkedIn, news publishers, etc. Each source has specific data available (engagement metrics, threading, etc.).

## Formats

Activities are categorized by format:

- **Announcement** – Official ASX announcements
- **Chatter** – Social discussion and forum posts
- **Media** – News articles and coverage
- **Broadcast** – Official company communications (emails, posts)
- **Manual** – User-added activities
