---
sidebar_position: 3
title: Market Settings
description: Configure benchmark index and commodity tracking
---

# Market Settings

Configure your market benchmarks and commodity settings for accurate performance analysis.

## Accessing Market Settings

1. Go to **Company Settings**
2. Select the **Market** tab

## Benchmark Index

The benchmark index is used to calculate abnormal returns and measure relative performance.

### Available Benchmarks

| Index | Code | Best For |
|-------|------|----------|
| S&P/ASX 200 | AXJO | Large caps |
| All Ordinaries | XAO | Broad market |
| Small Ordinaries | XSO | Small caps |
| S&P/ASX 300 | XKO | Extended coverage |

### Choosing a Benchmark

Select the index most relevant to your company:

- **Large cap** (top 200) → Use AXJO
- **Mid cap** (200-300) → Use XKO
- **Small cap** (outside 300) → Use XSO

### Impact of Benchmark Choice

The benchmark affects:
- Abnormal return (AR) calculations
- Cumulative abnormal return (CAR)
- Z-score and spike detection
- Risk metrics (beta)

## Commodities

For resources companies, enable commodity tracking to benchmark against relevant commodities instead of (or in addition to) market indices.

### Enabling Commodities

1. Toggle **Commodities Enabled**
2. Select your primary commodity
3. Optionally add secondary commodities

### Available Commodities

- **Gold (XAU)** - For gold miners
- **Silver (XAG)** - For silver producers
- **Iron Ore** - For iron ore miners
- **Copper** - For copper producers
- **Lithium** - For lithium companies
- **Oil (WTI)** - For oil & gas
- **Natural Gas** - For gas producers

### Primary Commodity

The primary commodity is used as the benchmark for AR/CAR calculations when commodities are enabled.

**Example:** A gold miner's stock movement is more meaningfully measured against gold price than the ASX 200.

### Setting Primary

Click the star icon next to a commodity to make it primary. The primary commodity appears first and is used for benchmark calculations.

## How It Affects Analysis

### With Commodities Disabled
```
Expected Return = α + β × Market Return (AXJO)
Abnormal Return = Actual Return - Expected Return
```

### With Commodities Enabled
```
Expected Return = α + β × Commodity Return (e.g., Gold)
Abnormal Return = Actual Return - Expected Return
```

This provides more relevant analysis for resources companies whose stock prices are driven by commodity prices.

## Saving Changes

1. Make your selections
2. Click **Save**
3. Historical metrics will use the new benchmark going forward
4. Previous calculations are preserved for comparison

---

## Related

- [Key Concepts](/concepts/key-concepts) - Understanding AR and CAR
- [Announcements](/features/announcements) - Market impact analysis
- [Company Profile](/settings/company-profile) - Basic settings
