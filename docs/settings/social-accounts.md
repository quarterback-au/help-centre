---
sidebar_position: 2
title: Social Accounts
description: Configure social media monitoring queries
---

# Social Accounts

Set up social media queries to monitor mentions of your company across platforms.

## Accessing Social Settings

1. Go to **Company Settings**
2. Select the **General** tab
3. Scroll to the social media section

## Platform Configuration

### Twitter / X

Configure Twitter monitoring:

- **Search Query** - Keywords to search for
- **Example**: `$4DX OR "4DMedical" OR @4DMedical`

**Tips:**
- Use `$` for cashtags
- Use quotes for exact phrases
- Use `OR` to combine terms
- Include common misspellings

### LinkedIn

Configure LinkedIn monitoring:

- **Company Page** - Your LinkedIn company name
- **Search Terms** - Additional keywords

### Reddit

Configure Reddit monitoring:

- **Subreddits** - Which subreddits to monitor
- **Example**: `ASX_Bets, ausstocks, AusFinance`
- **Keywords** - Terms to search within those subreddits

### YouTube

Configure YouTube monitoring:

- **Search Terms** - Keywords for video search
- **Channels** - Specific channels to monitor

### Facebook

Configure Facebook monitoring:

- **Page Name** - Your company's Facebook page
- **Search Terms** - Additional keywords

### News

Configure news monitoring:

- **Company Name Variations** - Different ways your company is referenced
- **Example**: `4DMedical, 4D Medical, 4DX, "4D Medical Limited"`

## Query Syntax

### Basic Operators

| Operator | Example | Meaning |
|----------|---------|---------|
| `OR` | `4DX OR 4DMedical` | Match either term |
| `AND` | `4DX AND revenue` | Match both terms |
| `""` | `"4D Medical"` | Exact phrase match |
| `-` | `4DX -unrelated` | Exclude term |

### Platform-Specific

**Twitter:**
- `$SYMBOL` - Cashtag
- `@handle` - Mentions
- `from:handle` - Posts by user

**Reddit:**
- Subreddit filtering is automatic
- Keywords search within selected subreddits

## Testing Queries

After saving:

1. Go to **Activities**
2. Filter by the platform you configured
3. Check that relevant content is appearing
4. Adjust queries if needed

## Common Issues

### Too Many Results
- Make queries more specific
- Add exclusion terms (`-spam`, `-bot`)
- Focus on exact phrases

### Missing Results
- Add alternative terms
- Include common abbreviations
- Check for misspellings

### Irrelevant Results
- Use more specific phrases
- Exclude common false positives
- Review and refine regularly

---

## Related

- [Activities](/features/activities) - View captured content
- [Company Profile](/settings/company-profile) - Basic settings
- [Alerts](/features/alerts) - Get notified of new mentions
