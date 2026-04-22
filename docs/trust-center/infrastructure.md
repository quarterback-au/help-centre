---
sidebar_position: 3
title: Infrastructure and security
description: How Quarterback's hosting, database, authentication, and application-layer controls are configured.
---

# Infrastructure and security

Quarterback runs on Google Cloud in Sydney. This page documents the specific controls we have in place across hosting, the database, authentication, and the application layer.

*Last updated: 22 April 2026*

---

## Hosting and regions

| Component | Platform | Region |
|-----------|----------|--------|
| **Backend and frontend** | Google Cloud Run | `australia-southeast1` (Sydney) |
| **Database** | Managed PostgreSQL on Google Cloud SQL | `australia-southeast1` (Sydney) |
| **Object storage** | Google Cloud Storage | `australia-southeast1` (Sydney) |
| **Job scheduling** | Google Cloud Scheduler and Pub/Sub | `australia-southeast1` (Sydney) |

All customer data at rest lives in Australia. A small number of sub-processors operate outside Australia — these are listed on the [Sub-processors](/trust-center/sub-processors) page with the regions they use.

---

## Authentication and access

Authentication is handled by a dedicated identity provider. Every request carries a cryptographically signed token that our backend verifies against the provider's public keys before any business logic runs.

| Control | Behaviour |
|---------|-----------|
| **User identity** | Email and password sign-in with configurable password strength; Google SSO; enterprise SSO via OpenID Connect |
| **Session tokens** | Short-lived signed tokens, verified on every request |
| **Webhook verification** | All inbound webhooks from our identity provider are cryptographically signed; requests with an invalid signature are rejected |
| **Authorisation** | Every authenticated endpoint verifies the user's organisation membership against the request parameters |
| **Admin role** | Privileged actions are gated by a separate admin check against the identity provider |

Staff access to production follows least-privilege principles. Service credentials are issued per component, not shared, and are scoped to the specific resources they need.

---

## Database security

Our primary data store is managed PostgreSQL on Google Cloud SQL.

- **Connections**: routed through Google's Cloud SQL Auth Proxy and encrypted in transit
- **Encryption at rest**: Google-managed keys (AES-256)
- **Query safety**: statement and idle-transaction timeouts prevent runaway queries from consuming connections
- **Health checks**: the backend monitors connection pool health and automatically sheds load if the database is degraded
- **Backups**: automated backups managed by Google Cloud SQL with point-in-time recovery

---

## Secrets management

All production secrets (API keys, webhook signing secrets, database credentials) are held in encrypted state and injected into our services at deploy time. Secrets are never checked into source control, never logged, and never exposed to the browser.

---

## File storage security

Files uploaded as part of Manual Activities are stored in Google Cloud Storage with the following controls:

- **Uniform bucket-level access** — no per-object ACLs, permissions are managed at the bucket level
- **Service account scoping** — only our backend service account has write access
- **Short-lived signed URLs** — clients never get direct bucket credentials; they receive time-limited URLs (default 15-minute expiry) generated after an authorisation check
- **Randomised object paths** — object names include a random component, so paths cannot be guessed or enumerated
- **Tenant isolation at the API layer** — before issuing a signed URL, the backend verifies the requesting user belongs to the organisation that owns the file

---

## Application and API safeguards

| Control | Behaviour |
|---------|-----------|
| **CORS** | Restricted to the production frontend origin; no wildcards |
| **Input validation** | Strict schema validation on every request body; invalid requests are rejected |
| **Error handling** | Stack traces, database error details, and constraint information are never returned to the client; generic error messages only |
| **Request timeouts** | Hard timeouts on all API routes to prevent long-running requests from tying up resources |
| **Concurrency limits** | External AI and data-ingestion calls run under strict concurrency and rate limits |
| **Dependency scanning** | Automated dependency audits on every deploy |

---

## Observability and logging

- **Application logs** — structured logs for authentication events, webhook processing, scheduled jobs, and errors. Stored in Google Cloud Logging in Sydney.
- **Error monitoring** — a dedicated error-tracking service captures unhandled exceptions with stack traces and user context (user identifier and email only).
- **Product analytics** — aggregated feature-usage telemetry to help us improve the product.

We do not log request bodies or file contents. The specific monitoring and analytics providers we use are disclosed under NDA as part of a security questionnaire.

---

## Change management

- Code changes are deployed through an automated pipeline
- Database schema changes use versioned migrations checked into source control
- Infrastructure is defined as code, so every production change is reviewable and reversible

<div className="related-links">

**Related**

- [Data handling](/trust-center/data-handling) – What data we collect and how it's classified
- [Sub-processors](/trust-center/sub-processors) – Every third party with access to customer or personal data
- [Incident response and disclosure](/trust-center/incident-response) – How we handle and communicate incidents

</div>
