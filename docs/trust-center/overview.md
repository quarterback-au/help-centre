---
sidebar_position: 1
title: Trust Center
description: How Quarterback handles your data, secures our infrastructure, and manages the vendors we work with.
---

# Trust Center

Quarterback is used by listed-company IR teams to manage sensitive information about their shareholders, announcements, and market activity. This Trust Center documents how we handle that data, the controls we have in place, and the vendors we rely on.

*Last updated: 22 April 2026*

---

## Our approach

<div className="definition-box">

*Almost everything Quarterback processes is public market information. The small amount of private content you put into the platform — Manual Activities and the files attached to them — is isolated per organisation and stored in Australia.*

</div>

Quarterback is built and operated by a small team in Australia. Our infrastructure runs in Google Cloud's Sydney region. The private content you create in the platform does not leave Australia except where a specific sub-processor requires it (for example, AI processing through OpenAI).

We are not currently SOC 2 or ISO 27001 certified. We are happy to complete security questionnaires (CAIQ, SIG-Lite, bespoke) and to provide a Data Processing Agreement on request — contact [security@qback.au](mailto:security@qback.au).

---

## What data Quarterback actually holds

Most investor-intelligence platforms hold large amounts of customer data. Quarterback is deliberately different.

| Category | What we hold | Volume |
|----------|--------------|--------|
| **Public market data** | ASX announcements, news coverage, social media posts, share prices | The majority of our dataset — all public |
| **Customer-submitted content** | Manual Activity listings (calls, meetings, events, presentations) and attached files | Private to your organisation |
| **Personal data** | User name and email for sign-in, organisation membership, alert preferences | Minimal |

We do not hold shareholder registry data, financial account details, identity documents, or any special category of personal data as defined under the Privacy Act 1988.

---

## What's in this section

- **[Data handling](/trust-center/data-handling)** — What we collect, how organisations are isolated, where customer files are stored
- **[Infrastructure and security](/trust-center/infrastructure)** — Hosting, encryption, authentication, application-layer controls
- **[Sub-processors](/trust-center/sub-processors)** — The full list of third-party services that process data on our behalf
- **[Incident response and disclosure](/trust-center/incident-response)** — How to report a vulnerability, how we notify customers

---

## At a glance

| Topic | Summary |
|-------|---------|
| **Hosting region** | Google Cloud, Sydney (`australia-southeast1`) |
| **Primary database** | PostgreSQL on Google Cloud SQL, encrypted in transit and at rest |
| **Authentication** | Outseta (OAuth/JWT with JWKS verification) |
| **File storage** | Google Cloud Storage with short-lived signed URLs |
| **Tenant isolation** | Per-organisation, enforced on every authenticated API call |
| **AI processing** | OpenAI and Anthropic (DPAs in place) |
| **Certifications** | None currently. SOC 2 Type II on roadmap. |

---

## Questions

For security, privacy, or procurement questions, email [security@qback.au](mailto:security@qback.au). We respond within two business days.

<div className="related-links">

**Related**

- [Data handling](/trust-center/data-handling) – What data we collect and how it's isolated
- [Sub-processors](/trust-center/sub-processors) – Third-party services we rely on
- [Incident response and disclosure](/trust-center/incident-response) – Vulnerability reporting and customer notification

</div>
