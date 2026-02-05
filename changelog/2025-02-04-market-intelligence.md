---
slug: 2026-release
title: 2026 Release: Market Intelligence
authors: [quarterback]
tags: [feature]
---

## 2026 Release: Market Intelligence

We've spent the last few months rebuilding core parts of the platform around a simple idea: IR teams need market context alongside their communications data. Share price movements don't happen in isolation—they're shaped by commodity prices, sector trends, and the timing of announcements.

Today we're launching commodities tracking, benchmark indices, smarter AI summaries, and improved tools for identifying what matters most. We've also rebuilt search, reimagined the announcements page, and refreshed the interface throughout.

---

### Market Intelligence

Commodity prices and benchmark indices now appear alongside your share price - everywhere. Select up to three featured commodities from 28 options precious metals, battery metals, and critical minerals with live prices updated hourly.

Use this data to spot unusual market movements and understand whether share price changes reflect company news or broader sector trends. When your stock moves against its usual correlation, you'll know to look closer. Pre-announcement trading patterns become easier to identify when you can see commodity and index movements in the same view.

Choose an index instead if sector performance matters more than commodity exposure. Either way, correlation analysis runs automatically so you can separate signal from noise.

→ [Benchmarking] (/features/benchmarking)  · [Commodities](/features/commodities) · [Benchmark Indices](/features/benchmark-indices) · [Correlation Analysis](/concepts/correlation)

---

### Flagging & Identification

Prominent people, influential activities, and unusual patterns now surface automatically throughout the platform.

People are flagged based on their reach, engagement history, and market impact. Activities are scored for influence so you can prioritise what deserves attention. Announcements are categorised automatically and compared against historical performance for similar announcement types—so you know whether a drilling result outperformed or underperformed relative to past disclosures.

→ [Prominent People](/features/prominent-people) · [Activity Scoring](/features/activity-scoring) · [Announcement Categories](/features/announcement-categories)

---

### Smarter AI Summaries

AI-generated summaries now incorporate market context, people analytics, and historical patterns.

Announcement insights reference commodity movements and benchmark performance on the day of release. People summaries highlight engagement trends and sentiment patterns over time. Activity summaries connect related content and surface what drove the conversation.

The underlying models have been tuned for IR-specific language, so summaries read like they were written by someone who understands the market.

→ [AI Insights](/features/ai-insights)

---

### Redesigned Search

Search now combines semantic understanding with keyword matching. Describe what you're looking for or search exact terms—both work.

Results appear in a split panel layout. Browse the list on the left, preview details on the right without losing your place. Filter across announcements, activities, media, and people from one unified experience.

→ [Search](/features/search)

---

### Announcements Reimagined

The announcements page has been rebuilt around how IR teams actually work. Browse with AG Grid's filtering and sorting, preview any announcement in the side panel, and export selections as HTML reports for board packs or compliance records.

Each announcement includes an insights panel showing market reaction, trading context, and key themes. Compare performance against historical announcements of the same type to see whether the market response was typical or unusual.

→ [Announcements](/features/announcements) · [Exporting Reports](/guides/exporting-reports)

---

### Manual Activity Form

Adding manual activities is now faster and more flexible. The redesigned form supports paid vs organic tracking, richer metadata, and a cleaner interface that gets out of your way.

→ [Manual Activities](/guides/manual-activities)

---

### Refreshed Interface

The entire application has been updated with a cleaner design built on shadcn components. Split panels throughout let you preview details without losing context. Date range controls persist across sessions. Performance has improved across the board.

---

### Improvements

- **Media page** – Publisher ranking with Newscatcher metadata and improved grid layout
- **Activity relationships** – Linked activities surface related content automatically
- **Board reports** – Refreshed design with better loading states
- **Engagements** – Metrics appear directly on activity detail cards
- **Author insights** – Average price change by author in the authors table
- **Mailchimp summaries** – Campaign performance data in activity details
- **Broadcasts page** – Dedicated page for broadcast content
- **Monthly reports** – New reporting view for monthly summaries

---

### Bug Fixes

- Fixed timezone handling in daily and weekly recap emails
- Fixed Reddit URLs using permalinks
- Fixed x.com link handling
- Fixed AI Insights panel closing unexpectedly
- Fixed price change display for single-day activities
- Fixed source icons not displaying correctly
- Fixed Mailchimp engagement sync and display