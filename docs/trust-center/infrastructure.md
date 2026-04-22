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
| **Backend API** | Google Cloud Run (serverless containers) | `australia-southeast1` (Sydney) |
| **Database** | Google Cloud SQL for PostgreSQL 15 | `australia-southeast1` (Sydney) |
| **Object storage** | Google Cloud Storage | `australia-southeast1` (Sydney) |
| **Frontend** | Vercel | Global edge, AU origin |
| **Job scheduling** | Google Cloud Scheduler and Pub/Sub | `australia-southeast1` (Sydney) |

All customer data at rest lives in Australia. A small number of sub-processors operate outside Australia — these are listed on the [Sub-processors](/trust-center/sub-processors) page with the regions they use.

---

## Authentication and access

Authentication is handled by **Outseta**, which issues JWTs signed with keys published via JWKS. Our backend verifies every request against those keys before any business logic runs.

| Control | Implementation |
|---------|----------------|
| **User identity** | Outseta, with email + password and configurable MFA |
| **Token format** | JWT (RS256), verified against Outseta's JWKS on every request |
| **Webhook verification** | HMAC-SHA256 signature check against the `x-hub-signature-256` header for every Outseta webhook |
| **Authorisation** | Every authenticated endpoint verifies the user's organisation membership against the request parameters |
| **Admin role** | Granted through Outseta; cached briefly (15 minutes) and re-checked against Outseta's API |

Staff access to production follows least-privilege principles. Service credentials are issued per component, not shared, and are scoped to the specific buckets, databases, or APIs they need.

---

## Database security

Our primary data store is PostgreSQL 15 on Google Cloud SQL.

- **Connections**: routed through the Cloud SQL Auth Proxy over a Unix socket; encrypted in transit by Google
- **Encryption at rest**: Google-managed keys (AES-256)
- **Query safety**: statement timeouts (45 seconds) and idle-transaction timeouts (15 seconds) to prevent runaway queries and connection exhaustion
- **Health checks**: the backend monitors the connection pool, latency, and query performance, and a circuit breaker rejects traffic if the database is degraded
- **Backups**: automated daily backups managed by Google Cloud SQL with point-in-time recovery

---

## Secrets management

All production secrets (API keys, webhook signing secrets, database credentials) are stored in **Pulumi's encrypted state** and injected into our Cloud Run services at deploy time as environment variables. Secrets are never checked into source control, never logged, and never exposed to the browser.

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

| Control | Implementation |
|---------|----------------|
| **CORS** | Restricted to the production frontend origin; no wildcards |
| **Input validation** | Zod schemas on API request bodies; invalid requests return a generic 400 |
| **Error handling** | Stack traces, database error details, and constraint information are never returned to the client; generic error messages only |
| **Request timeouts** | 5-minute hard timeout on all API routes, with a 408 response if exceeded |
| **Concurrency limits** | External AI and data-ingestion calls run under strict concurrency and rate limits |
| **Authentication** | Bearer tokens via `Authorization` header; no sensitive cookies issued by the backend |
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
- Infrastructure is defined as code (Pulumi) so every production change is reviewable and reversible

<div className="related-links">

**Related**

- [Data handling](/trust-center/data-handling) – What data we collect and how it's classified
- [Sub-processors](/trust-center/sub-processors) – Every third party with access to customer or personal data
- [Incident response and disclosure](/trust-center/incident-response) – How we handle and communicate incidents

</div>
