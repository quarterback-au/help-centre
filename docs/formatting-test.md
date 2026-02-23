---
sidebar_position: 99
title: Formatting Test
description: Testing our chosen formatting conventions.
---

# Formatting Test

Updated with preferred styles. Items marked **[NEEDS CSS]** require custom styling.

---

## Mathematical Formulas

Use a formula box for KaTeX math:

<div className="formula-box">

$$
\begin{aligned}
\text{Expected Return} &= \alpha + \beta \times R_{market} \\
\text{Abnormal Return} &= R_{actual} - \text{Expected Return} \\
\text{CAR} &= \sum_{t=0}^{n} AR_t
\end{aligned}
$$

</div>

---

## Tables

With inline code for symbols/values:

| Commodity | Symbol | Category |
|-----------|--------|----------|
| Gold | `Au` | Precious Metals |
| Copper | `Cu` | Base Metals |
| Lithium | `Li` | Battery Metals |
| Iron Ore | `Fe` | Bulk |

---

## Hyperlinking

### Inline (Primary Method)

Commodity prices are tracked alongside your [share price](/features/dashboard) and can be configured in [market settings](/settings/market-settings). Learn more about how [correlation analysis](/concepts/correlation) uses this data.

### Related Links Box (End of Page)

<div className="related-links">

**Related**

- [Commodities](/features/benchmarking) – Track commodity prices
- [Market Settings](/settings/market-settings) – Configure your benchmarks
- [Correlation Analysis](/concepts/correlation) – Understand price relationships

</div>

---

## Admonitions

Use standard Docusaurus admonitions:

:::tip
Select your primary commodity based on what matters most to your investors.
:::

:::info
Commodity prices update hourly during market hours.
:::

:::warning
Correlation does not imply causation. High correlation with a commodity doesn't mean the commodity drives your share price.
:::

:::caution
Changing your benchmark index will affect all historical AR/CAR calculations.
:::

:::note
You can select up to 3 featured commodities.
:::

---

## Collapsible Sections

<details>
<summary>View all 28 commodities</summary>

**Precious Metals:** Gold, Silver, Platinum, Palladium

**Base Metals:** Copper, Aluminium, Zinc, Lead, Nickel, Tin

**Battery Metals:** Lithium, Cobalt

**Bulk:** Iron Ore, Manganese, Magnesium

**Industrial:** Titanium, Tungsten, Molybdenum, Antimony, Bismuth

**Technology Metals:** Gallium, Germanium, Indium, Tellurium

**Nuclear:** Uranium

**Energy:** Australian Coal

**Fertilisers:** Phosphate, Potash Chloride

</details>

---

## Lists

Simple bullets:

- First item
- Second item
- Third item

Nested when needed:

- **Category 1**
  - Sub-item A
  - Sub-item B
- **Category 2**
  - Sub-item C

---

## Code

### Inline Code

The `AR(0)` metric shows same-day abnormal return. Configure this in `market-settings`.

### Code Blocks

```
GET /v1/commodities
GET /v1/commodities/prices?symbols=XAU,IRON62&from=2026-01-01
```

```bash
# Preview the help centre
cd /projects/help-centre && npm start
```

---

## UI Navigation

Use colored spans for navigation instructions:

<span className="ui-page">Settings</span> → <span className="ui-page">Market</span> → enable <span className="ui-action">Commodities tracking</span>

### Color Coding

- <span className="ui-page">Pages</span> – Blue background (where you navigate TO)
- <span className="ui-action">Actions</span> – Green background (what you click/enable)
- <span className="ui-reference">References</span> – Grey background (things you see/read)

---

## Definitions

Use a definition box for key terms:

<div className="definition-box">

*The difference between actual stock return and expected return based on the market model.*

<a href="/concepts/correlation" className="definition-link">Learn more →</a>

</div>

---

## Horizontal Rules

Use `---` frequently to separate sections:

Content above.

---

Content below.

---

More content.

---

## Example: Complete Feature Section

Here's how a feature section would look with all conventions applied:

---

### Commodities Tracking

Track commodity prices relevant to your company directly in the platform.

:::info
Prices update hourly during market hours.
:::

<span className="ui-page">Settings</span> → <span className="ui-page">Market</span> → enable <span className="ui-action">Commodities tracking</span>, then select up to 3 commodities.

| Priority | Usage |
|----------|-------|
| Priority 1 | `Primary` - Used in correlation analysis |
| Priority 2 | `Secondary` - Dashboard display |
| Priority 3 | `Tertiary` - Dashboard display |

<details>
<summary>View all available commodities</summary>

**Precious Metals:** Gold (`Au`), Silver (`Ag`), Platinum (`Pt`), Palladium (`Pd`)

**Base Metals:** Copper (`Cu`), Aluminium (`Al`), Zinc (`Zn`), Lead (`Pb`), Nickel (`Ni`), Tin (`Sn`)

**Battery Metals:** Lithium (`Li`), Cobalt (`Co`)

</details>

:::tip
Choose your primary commodity based on what matters most to your investors. A gold miner would select Gold. A battery materials producer might choose Lithium.
:::

Learn more about how commodities factor into [correlation analysis](/concepts/correlation) and [abnormal returns](/concepts/correlation#abnormal-returns).

---

<div className="related-links">

**Related**

- [Market Settings](/settings/market-settings) – Configure commodities and benchmarks
- [Dashboard](/features/dashboard) – View commodity prices
- [Correlation Analysis](/concepts/correlation) – Understand price relationships

</div>

---

## Summary of Chosen Styles

- **Formulas** – White box with padding and rounded edges
- **Tables** – Standard markdown with inline code for values
- **Hyperlinking** – Inline always, related links box at page end
- **Admonitions** – Standard Docusaurus `:::tip`, `:::info`, etc.
- **Collapsible** – `<details>` with clean minimal styling
- **Lists** – Simple bullets, nested only when needed
- **Code** – Inline for short values, blocks for multi-line
- **UI Navigation** – Option B with colored spans: <span className="ui-page">Page</span> → <span className="ui-action">Action</span>
- **Definitions** – Grey box with italics and "Learn more" link

---

*Delete this page once styling is finalized.*
