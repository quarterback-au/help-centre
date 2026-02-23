# Quarterback Help Centre - Project Knowledge

## Tech Stack
- **Framework**: Docusaurus 3.9.2
- **CMS**: Decap CMS (Netlify CMS) with Git Gateway
- **Hosting**: Netlify
- **Auth**: Netlify Identity
- **Support Widget**: Outseta

## Math Formulas with KaTeX

KaTeX is configured site-wide for rendering mathematical formulas in both docs and changelog.

### Syntax

**Inline math** - use single dollar signs:
```markdown
The formula $E = mc^2$ describes mass-energy equivalence.
```

**Block math** - use double dollar signs:
```markdown
$$
\text{Abnormal Return} = \text{Actual Return} - \text{Expected Return}
$$
```

### Common Symbols for Finance/Analytics

| Symbol | LaTeX | Example |
|--------|-------|---------|
| Greek letters | `\alpha`, `\beta`, `\gamma` | $\alpha$, $\beta$ |
| Subscripts | `R_{i,t}` | Return at time t |
| Superscripts | `R^2` | R-squared |
| Fractions | `\frac{a}{b}` | $\frac{a}{b}$ |
| Summation | `\sum_{i=1}^{n}` | $\sum_{i=1}^{n}$ |
| Text in formulas | `\text{CAR}` | Cumulative Abnormal Return |
| Multiplication | `\times` | $\times$ |

### Example Regression Formula
```markdown
$$
\text{Expected Return} = \alpha + \beta \times \text{Commodity Return}
$$
```

## Changelog Structure

### File Location
`/changelog/YYYY-MM-DD-slug.md`

### Frontmatter Fields
```yaml
---
slug: feature-slug
title: Feature Title
authors: [quarterback]
tags: [feature, ai, announcements]
image: /img/feature-screenshot.png  # Optional featured image
---
```

### Available Tags
- `feature` - New features (green, ✨ emoji)
- `ai` - AI-related updates (purple, 🤖 emoji)
- `announcements` - Company announcements (blue, 📢 emoji)
- `market-analysis` - Market analysis features (amber, 📊 emoji)
- `reports` - Reporting features (cyan, 📄 emoji)
- `alerts` - Alert system updates (red, 🔔 emoji)
- `bug-fix` - Bug fixes (gray, 🐛 emoji)
- `improvement` - Improvements (indigo, ⚡ emoji)

### Content Structure
1. **Main heading** (h2) - Feature name
2. **What's New** section - Bullet points of new capabilities
3. **How It Works** or **Why This Matters** - Explanation
4. **How to Enable** or **Where to Find It** - Steps to access
5. **Technical Details** (optional) - Formulas, API details

## CMS Access

Admin panel: `/admin/`

### Collections
- Getting Started (`docs/getting-started/`)
- Features (`docs/features/`)
- Settings (`docs/settings/`)
- Integrations (`docs/integrations/`)
- FAQ (`docs/faq.md`)
- Changelog (`changelog/`)
- Home Page (`docs/index.mdx`)

## Styling Conventions

### Changelog Page
- Geometric grid background with subtle color gradient
- Custom header with Follow/RSS buttons
- Two-column layout (date left, content right)
- Tags have colored borders and emoji prefixes

### Math Blocks
- Light background with border
- Rounded corners
- Proper spacing above/below

## Documentation Page Standard

Every documentation page must follow this standard. The reference implementation is `docs/concepts/correlation.md` — when in doubt, match that page's style and depth.

### Page Types

There are three page types, each with a specific structure:

1. **Feature pages** (`docs/features/`) — Explain what a feature is, what you see, how to use it, how to configure it
2. **Concept pages** (`docs/concepts/`) — Explain a concept, how it works, how the platform calculates/uses it
3. **Settings pages** (`docs/settings/`) — Explain what each setting does and how to configure it

Guides (`docs/guides/`) are being phased into the feature/concept pages. Step-by-step instructions belong inside the relevant feature page, not as standalone guides.

### Frontmatter

```yaml
---
sidebar_position: 1
title: Page Title
description: One sentence that would make sense in a search result. Not a repeat of the title.
---
```

### Page Structure (in order)

Every feature and concept page follows this skeleton:

```
# Page Title

Opening paragraph (1-2 sentences). Frame the value or question this feature answers — not a description of the UI element. Write for someone who doesn't know what this feature is yet.

---

## [Section: What It Is / Core Concept]

Plain-English explanation. Use a definition box if the concept benefits from a simple analogy or restatement.

<div className="definition-box">

*Plain-English definition that a non-technical person would understand.*

</div>

---

## [Section: How It Works / What You'll See]

Describe the UI the user will encounter. Walk through columns, panels, charts — whatever they see on screen.

<!-- Screenshot: [description of what to capture] -->

Tables for reference data (columns, metrics, fields).

---

## [Section: How to Use It / Key Actions]

Step-by-step actions the user can take. Numbered lists for workflows, bullet points for options.

<!-- Screenshot: [description of what to capture] -->

---

## [Section: Configuration / Settings] (if applicable)

Navigation breadcrumb: <span className="ui-page">Settings</span> → <span className="ui-page">Section</span> → <span className="ui-action">Setting Name</span>

Table of settings with behaviour descriptions.

<!-- Screenshot: [description of what to capture] -->

---

## [Additional sections as needed]

Complex features may need extra sections (e.g., Leak Detection, Event Study Windows). Keep each section focused on one idea.

---

<div className="related-links">

**Related**

- [Page Name](/path) – One-line description of the relationship
- [Page Name](/path) – One-line description of the relationship

</div>
```

### Writing Style

**Tone:** Professional but approachable. Write like you're explaining to a smart colleague who hasn't used the product before. Not academic, not casual.

**Opening paragraphs:**
- Frame the value or question, not the UI: "Understanding whether share price movements reflect company news or broader market conditions" (good) vs "The dashboard page shows metrics" (bad)
- 1-2 sentences max. Get to the point.

**Explanations:**
- Lead with what it means, then how it's calculated/configured
- Use plain English before formulas or technical detail
- Use definition boxes (`<div className="definition-box">`) for plain-English restatements of technical concepts
- Use formula boxes (`<div className="formula-box">`) for mathematical formulas

**UI references:**
- Page names: `<span className="ui-page">Settings</span>`
- Actions/buttons: `<span className="ui-action">Save</span>`
- Navigation paths: `<span className="ui-page">Settings</span> → <span className="ui-page">Market</span> → <span className="ui-action">Benchmark Configuration</span>`
- Use → (arrow) between navigation steps, not >

**Tables:** Use tables for:
- Column/field descriptions
- Reference data (thresholds, scores, symbols)
- Comparison of options or metrics
- Always bold the key term in the first column

**Admonitions:** Use sparingly and purposefully:
- `:::info` — Important context the user should know (not a warning, just useful)
- `:::tip` — Practical advice on how to get the most from the feature
- `:::warning` — Something that could cause confusion or has compliance implications
- Never stack two admonitions back-to-back

**Cross-links:**
- Link to related pages inline where relevant (not just in the footer)
- Always include a Related links footer using `<div className="related-links">`
- Each link gets a one-line description of why it's related

**Collapsible sections:** Use `<details><summary>` for long reference lists (e.g., all 23 announcement categories) that would otherwise dominate the page.

### Screenshots

Screenshots are placed using standard markdown images:
```markdown
![Description of what the screenshot shows](/img/docs/feature-name/screenshot-name.png)
```

**Screenshot placement rules:**
1. **Hero screenshot** — Every feature page gets one screenshot immediately after the opening paragraph showing the full feature view
2. **Detail screenshots** — When describing a panel, dialog, or specific UI section, place a screenshot immediately after introducing it
3. **Configuration screenshots** — When describing settings, show the settings UI
4. **Never describe UI without showing it** — If you say "click X to open Y", show what Y looks like

**Screenshot file organisation:**
- Store in `/static/img/docs/{page-name}/`
- Name descriptively: `announcements-grid.png`, `detail-panel-market.png`, `alert-config-form.png`
- Use PNG format

**Screenshot placeholders:** When writing content before screenshots are available, leave a comment:
```markdown
<!-- Screenshot: Full activities grid showing date groupings and sentiment indicators -->
```

### Section Dividers

Use `---` (horizontal rule) between major sections. This matches the correlation page style and provides clear visual breaks.

### What NOT to Do

- Don't repeat the page title as the opening sentence ("The Dashboard is your dashboard for...")
- Don't write walls of text without structure — use tables, lists, and sub-headings
- Don't use admonitions for basic information — only for genuinely useful tips, important context, or warnings
- Don't create standalone guide pages for things that belong in a feature page
- Don't leave a page without a Related links footer
- Don't describe UI interactions without screenshot placeholders

## Development

```bash
# Start dev server
npm start

# Build for production
npm run build

# Clear cache if styles not updating
rm -rf .docusaurus && npm start
```
