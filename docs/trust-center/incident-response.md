---
sidebar_position: 5
title: Incident response and disclosure
description: How to report a vulnerability, how we respond to security incidents, and how we communicate with customers.
---

# Incident response and disclosure

This page covers how to report a security issue to Quarterback, what happens after you do, and how we communicate with customers if an incident occurs.

*Last updated: 22 April 2026*

---

## Reporting a vulnerability

If you believe you have found a security vulnerability in Quarterback, please email **[team@qback.au](mailto:team@qback.au)**.

Please include:

- A description of the vulnerability
- Steps to reproduce
- Any proof-of-concept code or screenshots
- Your name and how you would like to be credited (optional)

We acknowledge reports within **12 hours** and aim to provide a fix or mitigation timeline within ten business days, depending on severity.

---

## Responsible disclosure guidelines

We ask that you:

- Give us a reasonable period to investigate and remediate before public disclosure
- Do not access, modify, or destroy customer data
- Do not perform denial-of-service testing
- Do not social-engineer our staff, customers, or vendors
- Report findings promptly and in good faith

---

## How we respond to incidents

If we detect or are notified of a security incident:

1. **Triage** — we confirm the report, scope the impact, and classify severity
2. **Contain** — we take immediate action to stop ongoing harm (rotate credentials, disable endpoints, revoke tokens)
3. **Investigate** — we determine root cause, affected data, and affected customers
4. **Remediate** — we deploy the fix, verify in production, and document what changed
5. **Notify** — we contact affected customers without undue delay, in line with our contractual and legal obligations under the Privacy Act 1988 (Cth) and the Notifiable Data Breaches scheme

---

## Customer notification

If an incident involves customer data, we will contact the primary account holder for each affected organisation directly. Notifications will include:

- What happened and when we became aware of it
- What data was affected
- What we have done to contain it
- What, if anything, we are asking you to do

We commit to notifying within the timeframes required by Australian law (OAIC's Notifiable Data Breaches scheme) and any stricter timelines specified in your contract or DPA.

---

## Business continuity

- **Database backups** — automated daily, with point-in-time recovery
- **Infrastructure as code** — our production environment can be rebuilt from version-controlled definitions if needed
- **Sub-processor redundancy** — critical paths (email, AI inference) can be rerouted to alternative providers if a sub-processor experiences an extended outage

---

## Security questionnaires

We complete standard security questionnaires — CAIQ, SIG-Lite, and bespoke — for customers that need them as part of procurement. Send your questionnaire to [team@qback.au](mailto:team@qback.au) and we will return it within five business days.

<div className="related-links">

**Related**

- [Trust Center overview](/trust-center/overview) – High-level summary of our security posture
- [Data handling](/trust-center/data-handling) – What data we collect and how it's isolated
- [Sub-processors](/trust-center/sub-processors) – Third parties that process customer data

</div>
