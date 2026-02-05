---
sidebar_position: 3
title: Social Accounts
description: Configure social media monitoring queries.
---

# Social Accounts

Configure social media monitoring queries.

## Query Generator

The query generator creates platform-specific search queries automatically:

1. Enter **include keywords** – Terms to monitor (company name and ticker auto-included)
2. Enter **exclude keywords** – Terms to filter out

The system generates optimized queries for each platform, handling syntax differences automatically.

## Platform-Specific Queries

Queries can be customized per platform if needed:

| Platform | Example Syntax |
|----------|---------------|
| Twitter | `"Company Name" OR "ASX:ABC"` |
| LinkedIn | `"Company Name" OR "Company Ltd"` |
| News | `"Company Name" OR ABC.ASX` (no colons) |
| Reddit | `"Company Name" OR ticker` |

News queries use a different syntax—colons aren't supported, so use formats like `$ABC` or `ABC.ASX`.
