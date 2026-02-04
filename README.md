# Quarterback Help Center

Documentation site built with [Docusaurus](https://docusaurus.io/) and [Decap CMS](https://decapcms.org/).

## Installation

```bash
npm install
```

## Local Development

```bash
npm start
```

This starts a local development server at `http://localhost:3000`. Most changes are reflected live without restarting.

### Local CMS Development

To use the CMS locally without authentication:

1. Install the Decap CMS proxy server:
   ```bash
   npx decap-server
   ```

2. Uncomment `local_backend: true` in `static/admin/config.yml`

3. Access the CMS at `http://localhost:3000/admin/`

## Build

```bash
npm run build
```

Generates static content into the `build` directory.

---

## Content Management System (CMS)

The help center includes Decap CMS for easy content editing via a web interface.

### Accessing the CMS

Once deployed, access the CMS at: `https://help.qback.au/admin/`

### Authentication Setup

The CMS uses two layers of authentication:

1. **Outseta** - Gates access to the admin page (only team members can see it)
2. **GitHub OAuth** - Handles committing content changes to the repository

#### 1. Configure Outseta Domain

Update the Outseta domain in `static/admin/index.html`:

```javascript
var o_options = {
  domain: 'quarterback.outseta.com', // Your Outseta domain
  // ...
};
```

#### 2. Create GitHub OAuth App

1. Go to GitHub > Settings > Developer settings > OAuth Apps
2. Click "New OAuth App"
3. Fill in:
   - **Application name**: Quarterback Help Center CMS
   - **Homepage URL**: `https://help.qback.au`
   - **Authorization callback URL**: `https://help.qback.au/admin/`
4. Save the Client ID and Client Secret

#### 3. Set up OAuth Proxy (Required for GitHub backend)

Since GitHub OAuth requires a server-side component, you have two options:

**Option A: Use Netlify with Git Gateway** (Simplest)
- Enable Git Gateway in Netlify: Site settings > Identity > Services > Git Gateway
- Update `config.yml` backend to use git-gateway:
  ```yaml
  backend:
    name: git-gateway
    branch: main
  ```

**Option B: Self-hosted OAuth proxy**
- Deploy [netlify-cms-github-oauth-provider](https://github.com/vencax/netlify-cms-github-oauth-provider)
- Update `config.yml` with your proxy URL

### Content Collections

The CMS manages these content types:

| Collection | Location | Description |
|------------|----------|-------------|
| Getting Started | `docs/getting-started/` | Onboarding guides |
| Features | `docs/features/` | Feature documentation |
| Settings | `docs/settings/` | Settings guides |
| Integrations | `docs/integrations/` | Integration docs |
| FAQ | `docs/faq.md` | Frequently asked questions |
| Changelog | `changelog/` | Release notes and updates |

### Adding New Content via CMS

1. Go to `/admin/`
2. Click "New [Collection Name]"
3. Fill in the title and content
4. Click "Publish"

The CMS will create a new markdown file and commit it to GitHub.

---

## Manual Editing

You can also edit content directly in the repository:

### Documentation Pages

Create/edit markdown files in `docs/`:

```markdown
---
title: Page Title
sidebar_position: 1
description: Brief description
---

# Page Title

Your content here...
```

### Changelog Posts

Create files in `changelog/` with format `YYYY-MM-DD-slug.md`:

```markdown
---
title: Feature Name
date: 2025-02-04
authors: [quarterback]
tags: [feature, ai]
---

Description of the update...
```

---

## Deployment

The site auto-deploys on push to the `main` branch via Netlify.
