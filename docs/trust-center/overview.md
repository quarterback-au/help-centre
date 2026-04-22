---
sidebar_position: 1
title: Trust Center
description: How Quarterback handles your data, protects our infrastructure, and responds to security incidents.
---

# Trust Center

Quarterback is an investor relations intelligence platform used by ASX-listed companies. This Trust Center explains what data we hold, how we protect it, and how we handle privacy and security.

*Last updated: 22 April 2026*

---

## Our approach

<div className="definition-box">

*Almost everything Quarterback processes is public market information. The small amount of private content you put into the platform — Manual Activities and the files attached to them — is isolated per organisation and stored in Australia.*

</div>

Quarterback is built and operated by a small team in Australia. Our infrastructure runs in Google Cloud's Sydney region. The private content you create in the platform does not leave Australia except for specific AI processing tasks, which are covered on the [Sub-processors](/trust-center/sub-processors) page.

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

---

## Questions

For security, privacy, or procurement questions, email [team@qback.au](mailto:team@qback.au). We respond within 12 hours.

<div className="related-links">

**Related**

- [Data handling](/trust-center/data-handling) – What data we collect and how it's isolated
- [Sub-processors](/trust-center/sub-processors) – Third-party services we rely on
- [Incident response and disclosure](/trust-center/incident-response) – Vulnerability reporting and customer notification

</div>
