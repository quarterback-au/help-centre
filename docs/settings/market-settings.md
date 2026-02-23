---
sidebar_position: 2
title: Market Settings
description: Configure your benchmark index and commodity tracking to match how investors view your company.
---

# Market Settings

Choose the benchmark that reflects how your investors think about your company — it drives abnormal return calculations, correlation analysis, and the Stock vs Index chart.

<span className="ui-page">Settings</span> → <span className="ui-page">Market</span>

<!-- Screenshot: Market settings page showing benchmark and commodity configuration -->

---

## Benchmark Index

Select the index to compare your performance against. Choose based on your sector:

| Approach | When to Use | Examples |
|----------|-------------|---------|
| **Broad market** | Good default for most companies | ASX 200, All Ordinaries |
| **Sector-specific** | Better comparison for sector-focused analysis | Materials (AXMJ), Energy (AXEJ), Financials (AXFJ) |
| **Thematic** | For specialised resource or tech companies | Gold Mining (AXGD), All Technology (AXAT) |

Your benchmark appears in the Stock vs Index chart and factors into [abnormal return calculations](/concepts/correlation#abnormal-returns-ar). See [Available Benchmarks](/features/benchmarking) for the complete list.

<!-- Screenshot: Benchmark index dropdown showing available options -->

---

## Commodities

Enable commodity tracking for resource-focused companies:

1. Toggle <span className="ui-action">Commodities</span> on
2. Select up to 3 featured commodities
3. Order determines priority (first = primary)

Featured commodities appear in the dashboard stats bar with live prices.

<!-- Screenshot: Commodity selection panel with priority ordering -->

Choose based on what matters most to your investors. A gold miner would select Gold as priority 1. A battery materials producer might choose Lithium or Cobalt.

:::info
When commodities are enabled and a primary commodity is selected, it takes priority over the index for benchmark calculations. See [Benchmark Priority](/concepts/correlation#configuring-your-benchmark) for how this works.
:::

---

<div className="related-links">

**Related**

- [Benchmarking](/features/benchmarking) – Full list of available indices and commodities
- [Abnormal Returns & Correlation](/concepts/correlation) – How your benchmark factors into calculations
- [Dashboard](/features/dashboard) – Where benchmark comparisons are displayed

</div>
