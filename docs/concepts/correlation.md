---
sidebar_position: 2
title: Abnormal Returns & Correlation
description: Understanding how your share price performs relative to expectations and market benchmarks.
---

# Abnormal Returns & Correlation

Understanding whether share price movements reflect company news or broader market conditions.

![Stock vs Benchmark chart showing company performance against index](/img/docs/concepts/stock-vs-benchmark.png)

---

## Abnormal Returns (AR)

Abnormal return is the difference between your stock's actual return and its expected return, calculated using the Capital Asset Pricing Model (CAPM) with a rolling estimation window. It eliminates the impact of wider market movements, letting you see whether today's performance is genuinely unusual.

<div className="definition-box">

*Your stock's actual return minus the return you'd expect given how the benchmark moved that day. If the ASX 200 drops 3% and your stock drops 3%, that's expected — the abnormal return is ~0%. But if the ASX drops 3% and your stock drops 8%, the abnormal return is about -5%.*

</div>

:::warning
**AR is not a direct comparison.** A stock can fall less than the benchmark in absolute terms and *still* post a negative AR if its sensitivity (β) to that benchmark is low. Example: a stock with β = 0.05 to gold has a very weak relationship to it — CAPM expects almost no movement when gold moves. So a -6% drop on a day when gold falls -11.4% produces an AR of about -5%, because the stock fell much more than CAPM expected given its weak link to gold. The benchmark fell harder, but that doesn't help — the model didn't expect the stock to follow gold down anyway.
:::

---

### How AR Is Calculated

The expected return is calculated using CAPM, which factors in your stock's historical relationship with the market over a rolling estimation window.

<div className="formula-box">

$$
\begin{aligned}
\text{Expected Return} &= \alpha + \beta \times R_{market} \\
\text{Abnormal Return} &= R_{actual} - \text{Expected Return}
\end{aligned}
$$

</div>

| Symbol | Meaning |
|--------|---------|
| $\alpha$ (alpha) | Stock's baseline return independent of the market |
| $\beta$ (beta) | Stock's sensitivity to market movements (from linear regression) |
| $R_{market}$ | Benchmark return (default: ASX 200) |
| $R_{actual}$ | Your stock's actual return on the day |

---

### Identifying Unusual Days

The platform calculates a **z-score** for each day's AR to identify statistically unusual performance:

<div className="formula-box">

$$
\text{Z-Score} = \frac{AR - \overline{AR}}{\sigma_{AR}}
$$

</div>

| Z-Score | Flag | Confidence |
|---------|------|------------|
| **> +1.96** or **< -1.96** | Positive/Negative spike | 95% confidence |
| **> +3.0** or **< -3.0** | Extreme positive/negative spike | 99.7% confidence |
| Between ±1.96 | No spike | Within normal range |

Spike flags appear on day-to-day markers throughout the activities chart, making it easy to spot unusual trading days at a glance.

<img src="/img/docs/concepts/spike-flags.png" alt="Activities chart showing spike flag markers on unusual trading days" className="img-half" />

To view only activities from unusual trading days, open the filters panel on the Activities page and select <span className="ui-action">Unusual</span> or <span className="ui-action">Very Unusual</span> from the <span className="ui-reference">Market Activity</span> filter.

---

### Configuring Your Benchmark

<span className="ui-page">Settings</span> → <span className="ui-page">Market</span> → <span className="ui-action">Benchmark Configuration</span>

See [Available Benchmarks](/features/benchmarking) for the full list of indices and commodities.

<img src="/img/docs/concepts/market-settings-benchmark.png" alt="Market settings benchmark configuration panel" className="img-half" />

| Setting | Behaviour |
|---------|-----------|
| Default | AXJO (ASX 200) |
| Index only | Uses selected index (e.g., XMJ for Materials) |
| Commodity only | Uses selected commodity (e.g., Gold) |
| Both selected | Commodity takes priority |
| Neither selected | Falls back to general market performance |

:::info
Each company can fully customise their benchmark. A gold miner might use Gold price. A diversified miner might use XMJ. A tech company might use AXAT.
:::

---

## Cumulative Abnormal Returns (CAR)

Cumulative Abnormal Return accumulates AR results across an event study window. While AR tells you about a single day, CAR tells you whether an impact was sustained or just a "sugar hit."

<div className="formula-box">

$$
\text{CAR}(t_1, t_2) = \sum_{t=t_1}^{t_2} AR_t
$$

</div>

---

### Event Study Windows

The platform calculates CAR across multiple windows to capture different aspects of market reaction:

| Window | Notation | What It Shows |
|--------|----------|---------------|
| **Announcement day** | AR(0) | Immediate same-day reaction |
| **Pre-announcement** | CAR(-3,-1) | 3 days before announcement |
| **Short window** | CAR(-1,+1) | Day before through day after |
| **Post-announcement** | CAR(0,+10) | Announcement through 10 days after |
| **Extended pre-window** | CAR(-5,-1) | 5 days before announcement |

![CAR event study chart from an announcement detail panel](/img/docs/announcements/car-event-study.png)

**Interpreting CAR:**

- **Sustained positive CAR(0,+10)** – Market views the news favourably; impact held
- **Sustained negative CAR(0,+10)** – Market views news unfavourably; impact held
- **CAR returning to zero** – Initial reaction was a sugar hit; market corrected

:::tip
Compare CAR across announcements of the same category to understand which types drive sustained impact versus temporary spikes.
:::

---

### Leak Detection

CAR is also used for pre-announcement leak detection. The platform checks whether the pre-announcement window is "clean" (no other announcements) and looks at CAR(-3,-1) and CAR(-5,-1).

**How it works:**

1. Calculate cumulative abnormal return in the 3–5 days leading up to an announcement
2. Check if the pre-window is clean (no other company announcements in that period)
3. If clean and there's significant CAR in the same direction as the announcement day, flag for investigation

:::warning
A sharp rise before a positive announcement—or a sharp fall before negative news—in a clean pre-window may indicate information leaked before the official disclosure. This is an early warning for continuous disclosure compliance.
:::

**Example:** If an announcement results in +5% AR(0), but the stock had already risen +3% CAR(-3,-1) with no other news in that window, that pattern warrants investigation.

---

## Correlation Coefficient

Correlation measures how closely your share price moves with a benchmark—either a commodity or an index—over time.

<div className="definition-box">

*A Pearson correlation coefficient ranging from -1 to +1 showing how closely two variables move together.*

</div>

---

### How Correlation Works

The platform calculates day-by-day returns for both your stock and the selected benchmark, then computes the Pearson correlation over a rolling window (default: 90 days).

| Correlation | Meaning |
|-------------|---------|
| **+0.7 to +1.0** | Strong positive – moves in lockstep with benchmark |
| **+0.4 to +0.7** | Moderate positive – generally follows benchmark |
| **-0.4 to +0.4** | Weak/none – other factors driving price |
| **-0.7 to -0.4** | Moderate negative – tends to move opposite |
| **-1.0 to -0.7** | Strong negative – moves opposite to benchmark |

---

### Beta (β) — Sensitivity

Where correlation tells you how *tightly* the stock and benchmark move together, beta tells you how *much* the stock moves on average for each 1% benchmark move. It's the slope of the linear regression and is what CAPM uses to compute expected return.

| Beta | Meaning |
|------|---------|
| **β > 1.5** | High volatility – moves more than 1.5× the benchmark |
| **β = 1.0 to 1.5** | Above average – more volatile than the benchmark |
| **β = 0.5 to 1.0** | Moderate – moves with the benchmark, slightly less volatile |
| **β = 0 to 0.5** | Low volatility – relatively independent of the benchmark |
| **β < 0** | Inverse – moves opposite to the benchmark |

:::info
**r and β answer different questions.** r tells you whether a benchmark is a meaningful reference at all (is the relationship tight, or is it noise?). β tells you how big the move should be when the benchmark does move. A stock can have low r and high β, or high r and low β — they're independent. Both are needed to interpret AR sensibly.
:::

**Additional metric calculated:**
- **R-squared** – Variance explained by the benchmark

---

### What Correlation Tells You

**High correlation** means your share price closely follows the benchmark. For a gold miner, high correlation with gold price is expected—the market treats you as a gold proxy.

**Low correlation** means other factors are influencing your price beyond the commodity or index:
- Company-specific news
- Management changes
- Operational issues
- Market sentiment about your company specifically

:::info
Short-term correlation can diverge significantly from long-term patterns during company-specific events.
:::

---

### Correlation vs. AR

| Metric | Question It Answers |
|--------|---------------------|
| **AR** | Did today's performance differ from what the market model predicted? |
| **Correlation** | How closely does our stock follow the benchmark over time? |

Use AR for **event analysis** (what happened today). Use correlation for **market positioning** (how does the market categorise us).

---

### Where r and β Appear in the Platform

You'll see r and β surfaced together beside each commodity and reference index in the right-hand market card. The format is `r = 0.07 · β = 0.05` — a single inline pair so both numbers are always read in the same context. Hover the values for an explanation.

---

## Putting It Together

The platform uses these metrics in combination:

1. **AR** for day-to-day monitoring – flags unusual performance immediately via z-score spikes
2. **CAR** for announcement impact – shows whether reactions sustain or fade over 10 days
3. **CAR (pre-announcement)** for leak detection – flags suspicious movements in clean pre-windows
4. **Correlation** for market context – explains whether movements are company-specific or market-driven

:::tip
When your stock moves against its usual correlation with the benchmark, that's a signal to investigate. Either company-specific news is driving the price, or there's unusual activity worth understanding.
:::

---

<div className="related-links">

**Related**

- [Dashboard](/features/dashboard) – View AR and correlation metrics
- [Announcements](/features/announcements) – See CAR for each announcement
- [Market Settings](/settings/market-settings) – Configure your benchmark
- [Notifications](/features/alerts) – Set up unusual day alerts

</div>
