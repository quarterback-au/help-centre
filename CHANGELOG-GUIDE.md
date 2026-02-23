# Changelog Authoring Guide

How to write changelog entries for the Quarterback help centre. The changelog uses Docusaurus blog format and appears at `/changelog` on the help centre site.

## File Structure

Each entry is a Markdown file in `/changelog/` with the naming convention:

```
YYYY-MM-DD-slug-name.md
```

The date in the filename determines the post's position in the feed (newest first). The slug in the filename is a fallback — the frontmatter `slug` field takes precedence.

## Frontmatter

Every entry needs this frontmatter block:

```yaml
---
slug: unique-slug
title: Short Descriptive Title
authors: [quarterback]
tags: [feature]
---
```

**Fields:**

| Field | Required | Notes |
|-------|----------|-------|
| `slug` | Yes | URL path — lowercase, hyphens, unique across all entries |
| `title` | Yes | Appears in the feed and page title. Keep under 60 characters |
| `authors` | Yes | Always `[quarterback]` — defined in `authors.yml` |
| `tags` | Yes | One or more from the tag list below |

**Available tags:**

- `feature` — New functionality
- `improvement` — Enhancement to existing functionality
- `fix` — Bug fix
- `integration` — Third-party integration
- `reports` — Reporting features
- `alerts` — Alert and notification features
- `market-analysis` — Market data, benchmarking, correlation
- `ai` — AI-powered features
- `announcements` — Announcement-related features

Use 1–3 tags per entry. The primary tag should come first.

## Content Structure

### Opening

Start with an `## H2` heading matching the title, followed by 1–2 paragraphs explaining the "why" — what problem this solves for IR teams. Keep it conversational but professional.

```markdown
## Media Monitoring

We've partnered with Newscatcher to bring publisher-level media tracking
to the platform. You can now see which publications are covering your
company, how often, and with what sentiment.
```

### Feature Sections

Use `### H3` headings for distinct features within the entry. Each section gets a brief description followed by bullet points.

```markdown
### What's New

- **Bold label** – Description of the feature in one sentence
- **Another feature** – What it does and why it matters
```

### Improvements Section

For smaller enhancements that don't warrant their own section:

```markdown
### Improvements

- **Bold label** – Short description
- Non-bold items are fine too for minor changes
```

### Bug Fixes Section

Always at the end. Simple list, no bold labels needed:

```markdown
### Bug Fixes

- Fixed timezone handling in recap emails
- Fixed source icons not displaying correctly
```

### Cross-References

Link to help centre documentation pages where relevant. Use the arrow prefix format:

```markdown
→ [Feature Page](/features/page-name) · [Concept Page](/concepts/concept-name)
```

Place these at the end of a feature section, separated by a `---` horizontal rule above the next section.

## Writing Style

Follow the Linear changelog style:

- **Professional but conversational.** Write like you're explaining to a smart colleague, not writing a press release.
- **Short declarative sentences.** "Announcements are categorised automatically" not "We have implemented an automatic categorisation system for announcements."
- **Active voice.** "Share prices now refresh throughout the trading day" not "Share prices are now refreshed throughout the trading day."
- **Imperative for actions.** "Select your commodities" not "You can select your commodities."
- **No exclamation marks.** Ever.
- **No marketing language.** No "revolutionary", "game-changing", "cutting-edge." Just say what it does.
- **Specific over vague.** "35 commodities across nine categories" not "a wide range of commodities."

### Bullet Point Format

Use the **bold label** – description pattern:

```markdown
- **Daily recaps** – A morning summary of the previous day's activities
```

Note the **em dash** (–) not a hyphen (-) between the label and description.

## Entry Types

### Major Release

For significant launches with multiple features. Use the full structure: intro paragraphs, multiple H3 sections, improvements, bug fixes, and cross-references. See `2025-02-04-market-intelligence.md` as the reference.

### Feature Spotlight

For a single feature that deserves dedicated attention. Shorter (15–30 lines), with an intro paragraph and one "What's New" section. See `2025-02-04-commodities-tracking.md`.

### Monthly Update

For regular cadence updates. Brief intro (1 paragraph), a few bullet points under "What's New" and/or "Improvements", optional "Bug Fixes". See `2025-12-15-year-end-refinements.md`.

## Checklist

Before publishing:

- [ ] Filename follows `YYYY-MM-DD-slug.md` format
- [ ] Frontmatter has all required fields
- [ ] Slug is unique across all entries
- [ ] Opening paragraph explains the "why"
- [ ] Features described with specific details (counts, names)
- [ ] No marketing language or exclamation marks
- [ ] Cross-references point to valid help centre pages
- [ ] Em dashes (–) used in bullet points, not hyphens (-)
- [ ] Spell check (Australian English: "organised" not "organized")
