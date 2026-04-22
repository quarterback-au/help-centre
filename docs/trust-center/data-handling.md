---
sidebar_position: 2
title: Data handling
description: What Quarterback collects, how organisations are isolated, and how customer content is stored and retained.
---

# Data handling

Quarterback holds very little private data. Almost everything we process is public market information about listed companies. The small amount of private content — Manual Activities and the personal data we need to run user accounts — is isolated per organisation and stored in Australia.

*Last updated: 22 April 2026*

---

## Three categories

<div className="definition-box">

*Public market data is the bulk of what Quarterback processes. Customer-submitted content (Manual Activities) is private to your organisation. Personal data about users is minimal — just what's needed to sign you in and send you alerts.*

</div>

The distinction matters because each category carries a different risk profile, and we handle them differently.

---

## 1. Public market data

We ingest widely available information about listed companies to power insights, sentiment, and alerts. This is the bulk of our dataset. All of it is already public.

| Category | What it covers |
|----------|----------------|
| **Regulatory filings** | ASX announcements and filings |
| **News coverage** | Articles from major news aggregators |
| **Social media** | Public posts from major social platforms |
| **Market data** | Share prices and commodity prices |

We handle public data responsibly and in line with each source's terms of use. The specific data providers and vendors we use are available under NDA as part of a security questionnaire.

Where a customer authorises it, we also connect to their own Mailchimp account to ingest subscriber and campaign data. That data is scoped to the connecting organisation and is not shared across tenants.

---

## 2. Customer-submitted content

Manual Activities — the calls, meetings, presentations, events, and file uploads you log inside Quarterback — are private to your organisation. Only users who belong to that organisation can see them.

| Content type | Stored in |
|--------------|-----------|
| **Activity listings** (call logs, meeting records, event entries, presentation records) | PostgreSQL, scoped by organisation |
| **File attachments** | Google Cloud Storage, access via short-lived signed URLs |
| **Alert configurations** | PostgreSQL, scoped by organisation and user |
| **Read/unread and flag status** | PostgreSQL, scoped by user |

We do not use customer-submitted content to train models.

---

## Organisation boundaries

Each ASX ticker maps to one organisation in Quarterback. Users can only see data belonging to organisations they are members of.

Organisation membership is sourced from Outseta (our identity and billing provider) and verified on every authenticated API call. The check runs on both the user's membership *and* the organisation identifier on the request, so a user cannot see another organisation's data by guessing IDs.

<!-- Screenshot: Team Members settings showing user list for an organisation -->

---

## 3. Personal data we collect about users

We keep this to the minimum needed to run the service. Unlike most investor-intelligence platforms, Quarterback does not hold shareholder registry data, beneficial ownership records, or financial account information.

| Field | Why we store it |
|-------|-----------------|
| **Email address** | Sign-in, alert delivery, transactional notifications |
| **First and last name** | Displayed in the UI and in outgoing emails |
| **Organisation membership** | Access control |
| **Phone number** (optional) | Provided during sign-up if the user adds one |
| **Aggregated product usage events** | Feature usage counts to improve the product |

We do not collect financial account details, identity documents, or sensitive categories of personal data as defined under the Privacy Act 1988.

---

## File storage

Files attached to Manual Activities are stored in Google Cloud Storage in the Sydney region.

- Uploads and downloads use **short-lived v4 signed URLs** (default expiry 15 minutes)
- Object paths include a **random component** to prevent enumeration
- The storage bucket uses **uniform bucket-level access** and is only reachable by our backend service account
- Tenant isolation is enforced at the API layer — the backend checks organisation membership before generating a signed URL for any file

---

## Retention and deletion

We retain customer data for the life of the account unless your contract specifies a shorter period.

When a customer exits:

- Activity records and file attachments belonging to the organisation are scheduled for deletion
- Identity data held in our authentication provider is removed in line with their data handling policy
- Derived data (embeddings, search indexes) associated with deleted records is purged from downstream systems

You can request export or deletion of your data at any time by emailing [security@qback.au](mailto:security@qback.au). We aim to acknowledge within two business days and complete within 30 days.

<div className="related-links">

**Related**

- [Infrastructure and security](/trust-center/infrastructure) – Hosting, encryption, and access controls
- [Sub-processors](/trust-center/sub-processors) – Third parties that receive customer or personal data
- [Incident response and disclosure](/trust-center/incident-response) – What happens if something goes wrong

</div>
