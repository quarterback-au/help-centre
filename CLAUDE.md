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

## Development

```bash
# Start dev server
npm start

# Build for production
npm run build

# Clear cache if styles not updating
rm -rf .docusaurus && npm start
```
