---
sidebar_position: 4
title: Sub-processors
description: The third-party services Quarterback uses to process customer or personal data.
---

# Sub-processors

A sub-processor is a third party that processes customer or personal data on our behalf. We keep this list current and notify customers before making material changes.

*Last updated: 22 April 2026*

---

## What leaves your organisation

Quarterback holds very little private data. Most of what we process is public market information. The sub-processors listed below only ever touch:

- **Personal data** — user name, email, and organisation membership (used to sign you in and deliver alerts)
- **Customer-submitted content** — Manual Activities and the files attached to them, where AI processing is required

Public market data (ASX announcements, news, social posts) is *ingested* from public sources — no customer data flows to those sources.

---

## Core sub-processors

| Sub-processor | Purpose | Data processed | Region |
|---------------|---------|----------------|--------|
| **Google Cloud Platform** | Hosting, database, object storage, logging, job scheduling | All customer data at rest | Australia (Sydney) |
| **Outseta** | Authentication, subscription management, billing | Name, email, organisation membership, billing details | United States |
| **Vercel** | Frontend hosting and edge delivery | Application requests, minimal logs | Global edge, US origin |
| **OpenAI** | AI processing for summaries, embeddings, and insights | Activity text and public market content sent for inference; DPA in place | United States |
| **Anthropic** | AI processing for summaries and insights | Activity text and public market content sent for inference; DPA in place | United States |
| **Resend** | Transactional and alert email delivery | Recipient email, alert content | United States / Europe |

---

## Operational tooling

We also use standard operational tools for vector search, error monitoring, product analytics, and DNS. These receive minimal personal data (e.g. user identifier and email in error context) or none at all. We disclose the specific vendors under NDA as part of a security questionnaire, and a full sub-processor list is included in our Data Processing Agreement.

---

## Data residency

Customer-submitted content — activity records, uploaded files, alert configurations — is stored in Australia at rest (Google Cloud, Sydney). A subset leaves Australia only where necessary:

- **OpenAI and Anthropic** receive the text being analysed (never file attachments themselves) for AI inference
- **Outseta** stores identity and billing data in the United States
- **Resend** processes recipient email addresses and alert content at send time

---

## DPAs and documentation

We provide our Data Processing Agreement, the full sub-processor register, and individual sub-processor DPAs on request. Contact [security@qback.au](mailto:security@qback.au).

## Notifications of change

To be notified when this list changes, email [security@qback.au](mailto:security@qback.au) with the subject "Subscribe to sub-processor updates". We notify subscribed customers before adding a new sub-processor or changing how an existing one is used.

<div className="related-links">

**Related**

- [Data handling](/trust-center/data-handling) – What data we collect and how it's classified
- [Infrastructure and security](/trust-center/infrastructure) – Controls across hosting, database, and application layers
- [Incident response and disclosure](/trust-center/incident-response) – How to report a vulnerability

</div>
