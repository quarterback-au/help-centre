---
slug: correlation-benchmarks
title: Commodity Benchmarking & Correlation Analysis
authors: [quarterback]
tags: [feature, market-analysis]
---

## Commodity Benchmarking

Resources companies can now benchmark their stock performance against relevant commodities instead of market indices.

### What's New

- **Commodity Selection** - Choose from Gold, Silver, Iron Ore, Copper, Lithium, Oil, and Natural Gas
- **Primary Commodity** - Set your main commodity for AR/CAR calculations
- **Dynamic Benchmarking** - Abnormal returns are calculated relative to your chosen commodity

### Why This Matters

For a gold mining company, stock movements are often driven by gold prices rather than broad market movements. Benchmarking against gold provides more meaningful analysis of announcement impacts.

### How to Enable

1. Go to **Company Settings** → **Market**
2. Toggle **Commodities Enabled**
3. Select your commodities
4. Click the star to set your primary commodity

### Technical Details

When commodities are enabled:
```
Expected Return = α + β × Commodity Return
Abnormal Return = Actual Return - Expected Return
```

This replaces the default AXJO benchmark with your selected commodity.

---

*Questions? Contact [support@qback.au](mailto:support@qback.au)*
