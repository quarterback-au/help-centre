---
sidebar_position: 2
title: Market Settings
description: Benchmark index and commodity tracking settings that drive abnormal return and correlation calculations.
---

# Market Settings

The benchmark reflects how investors think about the company — it drives abnormal return calculations, correlation analysis, and the Stock vs Benchmark chart on the dashboard. These settings are configured during onboarding.

<span className="ui-page">Settings</span> → <span className="ui-page">Market</span>

<img src="/img/docs/concepts/market-settings-benchmark.png" alt="Market settings page showing benchmark and commodity configuration" className="img-half" />

---

## Benchmark Index

The benchmark index is chosen based on sector and investor context:

| Approach | When It's Used | Examples |
|----------|-------------|---------|
| **Broad market** | Good default for most companies | ASX 200, All Ordinaries |
| **Sector-specific** | Better comparison for sector-focused analysis | Materials (AXMJ), Energy (AXEJ), Financials (AXFJ) |
| **Thematic** | For specialised resource or tech companies | Gold Mining (AXGD), All Technology (AXAT) |

The benchmark appears in the Stock vs Benchmark chart and factors into [abnormal return calculations](/concepts/correlation#abnormal-returns-ar). See [Available Benchmarks](/features/benchmarking) for the complete list.

<img src="/img/docs/settings/benchmark-dropdown.png" alt="Benchmark index dropdown showing available options" className="img-half" />

---

## Commodities

Commodity tracking is enabled for resource-focused companies. Up to 3 commodities can be tracked, with one marked as primary (★).

The primary commodity is used as the default in correlation analysis. Selected commodities show numbered badges (1, 2, 3) indicating their priority order, with the primary highlighted in purple.

<img src="/img/docs/settings/commodities.png" alt="Commodity selection panel with priority ordering" className="img-half" />

For example, a gold miner would have Gold as priority 1. A battery materials producer might have Lithium or Cobalt.

:::info
When commodities are enabled and a primary commodity is set, it takes priority over the index for benchmark calculations. See [Benchmark Priority](/concepts/correlation#configuring-your-benchmark) for how this works.
:::

---

<div className="related-links">

**Related**

- [Benchmarking](/features/benchmarking) – Full list of available indices and commodities
- [Abnormal Returns & Correlation](/concepts/correlation) – How the benchmark factors into calculations
- [Dashboard](/features/dashboard) – Where benchmark comparisons are displayed

</div>
