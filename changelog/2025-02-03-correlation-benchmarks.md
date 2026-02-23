---
slug: correlation-benchmarks
title: Commodity Benchmarking & Correlation Analysis
authors: [quarterback]
tags: [feature, market-analysis]
---

## Commodity Benchmarking & Correlation Analysis

Resources companies can now benchmark their stock performance against relevant commodities instead of market indices—and explore the relationship in depth with a dedicated correlation analysis page.

### Configurable Benchmarking

Set your primary commodity or index as the benchmark for abnormal return calculations. For a gold mining company, benchmarking against gold provides more meaningful analysis of announcement impacts than the ASX 200.

When commodities are enabled, abnormal returns are calculated using CAPM relative to your chosen benchmark:

$$
\text{Abnormal Return} = \text{Actual Return} - (\alpha + \beta \times \text{Benchmark Return})
$$

Choose from 35 commodities or 31 ASX indices as your benchmark. Switch between them at any time—metrics are stored per benchmark so you don't lose history.

### Correlation Analysis

A dedicated page with four views into how your share price relates to benchmarks:

- **Heatmap** – Correlation matrix showing relationships between your stock, selected commodities, and indices at a glance
- **Rolling correlation** – See how the strength of correlation changes over configurable time windows (30, 60, 90, 180 days)
- **Cross-correlation** – Identify lead-lag relationships between your stock and benchmarks. Does a commodity price move predict your share price, or vice versa?
- **R-squared gauge** – How much of your stock's variance is explained by the benchmark. Higher R² means the benchmark is a better predictor

### How to Enable

1. Go to **Company Settings** → **Market**
2. Toggle **Commodities Enabled**
3. Select your commodities
4. Set your primary commodity as the benchmark

→ [Benchmarking](/features/benchmarking) · [Correlation Analysis](/concepts/correlation)
