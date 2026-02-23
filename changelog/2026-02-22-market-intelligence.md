---
slug: 2026-release
title: "2026 Release: Market Intelligence"
authors: [quarterback]
tags: [feature]
---

## 2026 Release: Market Intelligence

We've spent the last few months rebuilding core parts of the platform around a simple idea: IR teams need market context alongside their communications data. Share price movements don't happen in isolation—they're shaped by commodity prices, sector trends, and the timing of announcements.

Today we're launching commodities tracking, benchmark indices, correlation analysis, cumulative abnormal return analysis, and improved tools for identifying what matters most. We've also rebuilt the announcements experience, added broadcast analytics, improved compliance alerting, and refreshed the interface throughout.

---

### Market Intelligence

**Commodities tracking.** 35 commodities across nine categories—precious metals, base metals, battery metals, bulk, industrial, nuclear, energy, fertilisers, and rare earths—with live prices updated hourly. Select up to three featured commodities that appear alongside your share price everywhere in the platform.

**Benchmark indices.** 31 ASX indices across main market, GICS sector, specialty, and other categories. Choose an index instead of a commodity if sector performance matters more than commodity exposure.

**Correlation analysis.** A dedicated correlation page with heatmap, rolling correlation, cross-correlation, and R-squared analysis. Understand how your share price relates to commodities, indices, and sector benchmarks over configurable time periods.

**Cumulative abnormal return (CAR) analysis.** CAPM-based abnormal return calculations across multiple event windows—AR(0) for announcement day impact, CAR(-3,-1) for pre-announcement leak detection, CAR(-5,-1) for early warning, CAR(-1,+1) for 3-day event response, and CAR(0,+10) for sustained impact.

**Enhanced sentiment analysis.** Sentiment scoring tuned for IR-specific language with feedback loops. Author-level sentiment trends, platform-level aggregation, and historical sentiment patterns surface automatically.

→ [Benchmarking](/features/benchmarking) · [Correlation Analysis](/concepts/correlation)

---

### Announcement Overhaul

The announcements page has been rebuilt around how IR teams actually work.

**Redesigned with intelligent insights.** Browse with AG Grid's filtering and sorting, preview any announcement in the side panel, and export selections as HTML reports for board packs or compliance records. Each announcement includes an insights panel showing market reaction, trading context, and key themes.

**Automatic announcement linking.** Activities—chatter, media, broadcasts—are automatically linked to the announcements they reference. No manual tagging required.

**Announcement category auto-sorting.** Announcements are categorised automatically and compared against historical performance for similar announcement types. See whether a drilling result outperformed or underperformed relative to past disclosures.

**CAR analysis per announcement.** Every announcement shows its abnormal return on day zero, pre-announcement trading patterns, and sustained market response. Compare against category averages to understand whether the market reaction was typical or unusual.

→ [Announcements](/features/announcements) · [Reports](/features/reports)

---

### Compliance & Alerts

**8 alert types.** Daily recaps, weekly recaps, price spike alerts, activity spike alerts, abnormal day detection, pre-announcement leak detection, rumour detection, and media coverage alerts—all configurable per user.

**In-app notifications.** Pre-announcement leak detection and abnormal day detection surface directly in the platform with Z-score classification (extreme positive, positive, normal, negative, extreme negative).

**Configurable recap delivery time.** Choose when daily and weekly recap emails arrive to match your workflow.

---

### Broadcast Analytics

Brand new broadcast analytics and reporting. A dedicated page for broadcast content—investor presentations, webinars, and video updates—with engagement tracking, audience metrics, and exportable reports.

→ [Activities](/features/activities)

---

### Reporting

- **Updated configurable board report** – Section toggles let you customise what appears in each report. One-click PDF generation via print
- **Landscape reports** – Landscape-oriented report layouts for data-heavy sections
- **Announcement reports** – Export announcement selections as HTML reports for board packs or compliance records

→ [Reports](/features/reports)

---

### Platform

- **Redesigned search** – Hybrid search combining semantic understanding with keyword matching. Split-panel results with preview
- **Enhanced manual activity component** – Faster entry with paid vs organic tracking, richer metadata, and cleaner interface
- **Split-panel navigation** – Browse lists on the left, preview details on the right without losing context. Available across announcements, activities, media, and people
- **Reimagined interactive data tables** – AG Grid Enterprise across announcements, activities, media, people, broadcasts, and authors with filtering, sorting, and export
- **Refreshed interface** – Cleaner design built on shadcn components with 103 chart components. Date range controls persist across sessions. Performance improved throughout

---

### Improvements

- **Media page** – Publisher ranking with Newscatcher metadata and improved grid layout
- **Activity relationships** – Linked activities surface related content automatically
- **Engagements** – Metrics appear directly on activity detail cards
- **Author insights** – Average price change by author in the authors table
- **Mailchimp summaries** – Campaign performance data in activity details
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
