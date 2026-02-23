---
sidebar_position: 2
title: Activities
description: Track every social post, news article, forum discussion, and announcement related to your company.
---

# Activities

Every conversation, article, and post about your company — tracked, scored, and connected to your share price.

<!-- Screenshot: Full activities page showing date-grouped grid with sentiment indicators -->

---

## What Is an Activity?

An activity is any tracked communication event related to your company. Activities are the fundamental data type in Quarterback — everything from tweets to ASX announcements to news articles flows in as an activity.

<div className="definition-box">

*Think of an activity as a single unit of attention your company received. A HotCopper post, a LinkedIn mention, a news article, an ASX announcement — each one is an activity, and Quarterback scores and tracks them all.*

</div>

---

## Activity Sources

Quarterback tracks 50+ sources across multiple categories:

| Category | Sources |
|----------|---------|
| **Social Media** | Twitter/X, LinkedIn, Facebook, Instagram, YouTube, TikTok |
| **Forums** | HotCopper, Reddit, Discord, Telegram, Slack |
| **Official** | ASX Announcements, Mailchimp campaigns, press releases |
| **News** | Publisher articles from thousands of outlets worldwide |
| **Manual** | Calls, meetings, presentations, events you add yourself |

---

## Activities Grid

Activities display in a data grid, grouped by date. Each date group shows the share price and trading volume for that day, helping you correlate activity with market movements.

<!-- Screenshot: Activities grid with date group header showing share price and volume -->

### Each Row Shows

| Column | Description |
|--------|-------------|
| **Source** | Platform icon and author name |
| **Preview** | Activity title and content snippet |
| **Time** | When it was posted |
| **Sentiment** | Colour-coded sentiment score |
| **Format** | Badge showing Announcement, Chatter, Media, or Broadcast |
| **Paid** | Indicator for sponsored content |
| **Flag** | Whether the activity has been flagged for attention |

---

## Filtering

Filter activities to find exactly what you're looking for. Combine multiple filters to narrow results.

<!-- Screenshot: Filter panel showing available filter options -->

| Filter | Options |
|--------|---------|
| **Source** | Any tracked platform |
| **Format** | Announcement, Chatter, Media, Broadcast, Manual |
| **Date range** | Custom start and end dates |
| **Flagged** | Show only flagged activities |
| **Archived** | Show or hide archived activities |
| **Market Activity** | Unusual or Very Unusual trading days (see [Abnormal Returns](/concepts/correlation#identifying-unusual-days)) |

---

## Activity Details

Click any activity to open the detail panel.

<!-- Screenshot: Activity detail panel showing full content, engagement metrics, and sentiment -->

The detail panel shows:

- **Full content** with formatting preserved
- **Author information** and follower count
- **Engagement metrics** — likes, views, comments, shares (varies by platform)
- **Sentiment score** and analysis
- **Posted date** and link to original source
- **Linked announcements** (if connected to an ASX announcement)

### Engagement Metrics by Platform

| Platform | Metrics |
|----------|---------|
| **Twitter** | Likes, Views, Engagement Rate |
| **LinkedIn** | Likes, Comments |
| **YouTube** | Likes, Views, Comments |
| **HotCopper** | Likes, Thread Views |
| **Reddit** | Score |
| **Mailchimp** | Emails Sent, Open Rate, Click Rate |

---

## Linking Activities to Announcements

Activities can be connected to ASX Announcements to track how announcements drive conversation and coverage. See [Linked Activity Relationships](/concepts/key-concepts#linked-activity-relationships) for how auto-matching works.

### Relationship Types

| Type | Meaning |
|------|---------|
| **Related** | General related content |
| **Broadcast** | Official company communication |
| **Coverage** | Organic news coverage |
| **Promotion** | Paid promotional content |
| **Auto-post** | AI-generated or automated content |

Link activities manually from the announcement detail panel, or let the system auto-match based on timing and content.

---

## Adding Manual Activities

Add activities that aren't automatically captured — calls, meetings, presentations, or content from platforms not yet integrated.

<!-- Screenshot: Manual activity form showing source selection and fields -->

1. Click <span className="ui-action">Add Activity</span> in the toolbar
2. Select the source type
3. Fill in required fields (URL, title, content)
4. Optionally add engagement metrics and sentiment
5. Save

All 50+ platforms plus internal event types (calls, meetings, presentations, events) are available as manual sources.

---

<div className="related-links">

**Related**

- [Announcements](/features/announcements) – View announcement-linked activities
- [People](/features/people) – See activity aggregated by author
- [Market Sentiment](/concepts/market-sentiment) – How sentiment scoring works
- [Key Concepts](/concepts/key-concepts) – Activity relationships and formats explained

</div>
