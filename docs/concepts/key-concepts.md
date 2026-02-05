---
sidebar_position: 1
title: Key Concepts
description: Core concepts that underpin the Quarterback platform.
---

# Key Concepts

Core concepts that underpin the Quarterback platform.

---

## Activities

An activity is any tracked communication event related to your company. Activities are the fundamental unit of data in Quarterback—everything from tweets to announcements to news articles.

---

## Sentiment

Sentiment analysis scores content on a scale from -1 (negative) to +1 (positive):

| Score | Label | Meaning |
|-------|-------|---------|
| > 0.1 | Positive | Favourable tone, bullish language |
| -0.1 to 0.1 | Neutral | Factual, neither positive nor negative |
| -0.3 to -0.1 | Lacking | Slightly negative, cautious tone |
| < -0.3 | Negative | Unfavourable tone, bearish language |

Sentiment is calculated using machine learning models trained on financial communications.

---

## Authors

Authors are the people behind activities. Quarterback tracks author metadata including name, profile URL, follower count, and platform-specific identifiers. Author statistics aggregate across all their activities.

---

## Sources

Sources are the platforms where activities originate—Twitter, HotCopper, LinkedIn, news publishers, etc. Each source has specific data available (engagement metrics, threading, etc.).

---

## Formats

Activities are categorised by format:

- **Announcement** – Official ASX announcements
- **Chatter** – Social discussion and forum posts
- **Media** – News articles and coverage
- **Broadcast** – Official company communications (emails, posts)
- **Manual** – User-added activities

---

## Linked Activity Relationships

When an announcement is released, the platform automatically detects which activities are related to it. This creates a complete picture of market reaction beyond just share price.

---

### How Detection Works

Activities are linked to announcements through **keyword matching**. The system extracts keywords from both the announcement title and activity content, filters out common stop words, and calculates overlap.

| Parameter | Value |
|-----------|-------|
| **Match threshold** | 30% keyword overlap |
| **Window before** | 1 day before announcement |
| **Window after** | 7 days after announcement |

**Matching process:**
1. Extract keywords from announcement title
2. Extract keywords from activity text
3. Filter out stop words (common words like "the", "announcement", "ASX", etc.)
4. Calculate: `matched keywords ÷ announcement keywords`
5. Link if score ≥ 30%

:::info
Thread replies are automatically linked to the same announcement as their parent post.
:::

---

### Batch Matching

The system runs a daily batch matching job that:

1. Identifies all announcements from the target date
2. Finds activities within the matching window
3. Calculates keyword overlap scores
4. Creates relationships for activities meeting the threshold
5. Avoids duplicate relationships

Users can override any linking decision. Edit relationships at any time to refine what's connected to an announcement.

---

### What Gets Linked

The platform collects and links:

- News articles about the announcement
- HotCopper threads and replies
- Twitter/X posts
- LinkedIn posts
- Reddit discussions
- YouTube content
- Any activity with sufficient keyword overlap

---

### Relationship Categories

As activities are linked, they're categorised by relationship type:

| Category | What It Includes |
|----------|------------------|
| **Related** | General related content (default for auto-matching) |
| **Coverage** | Organic news coverage about the announcement |
| **Broadcast** | Company's official communications |
| **Promotion** | Paid or sponsored content |
| **Auto-post** | AI-generated or automated news articles |
| **Thread** | Reply to a matched parent post |
| **Response** | Direct response to the announcement |

:::tip
These categories can be edited at any time. The system does a first pass, then you refine as needed when assembling reports.
:::

---

### Depth of Linked Activities

The depth of linked activities varies by announcement type:

- **Price-sensitive announcements** – Broader conversation, more linked activities
- **Administrative announcements** – Minimal linked activity

This is expected. A major drilling result generates media coverage, forum threads, and social discussion. A change of director's interest notice does not.

---

## Announcement Categorisation

Announcements are automatically categorised based on headline keyword matching, enabling comparative analysis across similar announcements.

---

### How It Works

The ASX provides limited category options when uploading an announcement. Quarterback extends this with automatic categorisation using headline keyword matching across **23 categories**.

<details>
<summary>View all 23 announcement categories</summary>

**Financial Reporting:**
- **Quarterly** – Appendix 4C, quarterly activities/reports
- **Annual** – Annual reports, full year results
- **Half-year** – Half-yearly reports, interim results

**Corporate Actions:**
- **Dividend** – Dividend/distribution announcements
- **Trading halt** – Trading halt, suspension from quotation
- **Takeover** – Takeover, merger, acquisition, scheme of arrangement
- **Capital raise** – Placement, share purchase plan, rights issue, entitlement offer
- **AGM** – Annual general meeting notices

**Interest Changes:**
- **Director interest** – Appendix 3X/Y/Z, director appointments, options, incentives
- **Employee interest** – Employee share schemes, performance rights, incentive plans
- **Substantial holder** – Becoming/ceasing to be substantial holder

**Executive & Strategic:**
- **Executive** – CEO/CFO/COO appointments, executive team changes
- **Strategic** – Strategic investments, partnerships, alliances
- **Guidance** – Guidance, forecast, outlook updates

**Operational:**
- **Contract** – Contract awards, new contracts, binding agreements
- **Product launch** – Product adoption, commercial launches, customer wins, orders
- **Regulatory** – FDA/TGA approval, regulatory clearance, CE mark
- **Exploration** – Drilling, exploration updates, assay results (mining-specific)
- **Resource** – Resource estimates, reserve updates, JORC disclosures

**Communications:**
- **Presentation** – Investor presentations, company presentations, webinars
- **ASX query** – ASX query responses, price queries, awareness letters

**Admin/Governance:**
- **Corporate governance** – Appendix 4G, corporate governance statements
- **Corporate admin** – Appendix 2A, quotation applications, cleansing statements
- **Other** – Fallback for unmatched announcements

</details>

:::info
Auto-categorisation uses pattern matching on headlines. More specific patterns (like ASX queries) are tested before general patterns. Users can recategorise any announcement manually.
:::

---

### Why Categorisation Matters

Categorisation enables comparative analysis of announcement performance over time:

- Compare reach across announcement types
- Compare cumulative abnormal returns (CAR) by category
- Analyse media pickup patterns by announcement type
- Identify which categories drive the strongest market response

**Example:** "Do our drilling results get more media coverage than our corporate updates?" or "Which announcement category drives the strongest sustained share price impact?"

:::tip
Use categorisation to benchmark your announcements against your own history. Over time, patterns emerge about what resonates with your market.
:::

---

<div className="related-links">

**Related**

- [Abnormal Returns & Correlation](/concepts/correlation) – Understanding AR, CAR, and correlation
- [Market Sentiment](/concepts/market-sentiment) – Sentiment analysis details
- [Announcements](/features/announcements) – Working with announcements
- [Activities](/features/activities) – Activity tracking and management

</div>
