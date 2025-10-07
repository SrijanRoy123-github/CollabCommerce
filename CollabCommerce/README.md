
# CollabCommerce Cloud (C3) — Pages Demo + Full-Stack Code

This repo contains:
- **Three front-end apps** (React, Angular, Vue) that run entirely on **GitHub Pages** using **mock APIs** (static JSON + MSW) and browser storage.
- **Service code skeletons** for the backends (Nest GraphQL, Express/Stripe, Socket.IO, Django+DRF, Spring Boot, Laravel, ASP.NET Core, Elasticsearch worker). These are not deployed on Pages, but the code is here so you can deploy elsewhere later.
- **GitHub Actions** workflow to build the three SPAs and publish them to Pages under one static site.

## Quick start (GitHub Pages)
1. Create a GitHub repository (name it **CollabCommerce** for easiest defaults).
2. Push this folder to that repo (or upload as a ZIP).
3. In your repo, go to **Settings → Pages** and set **Source: GitHub Actions**.
4. The included workflow `.github/workflows/pages.yml` will build:
   - `apps/shopfront-react` → published at `/shop/`
   - `apps/opsconsole-angular` → published at `/console/`
   - `apps/community-vue` → published at `/community/`
   - static **mock data** under `/data/`
5. Open your Pages URL: `https://<your-username>.github.io/<repo>/` and use the nav to access each app.

### Local development (optional)
- You’ll need Node 20+ installed.
- From repo root, install all JS deps: `npm i --workspaces`
- Build all frontends: `npm run build --workspaces`
- Or run each app dev server:
  - React: `cd apps/shopfront-react && npm run dev`
  - Angular: `cd apps/opsconsole-angular && npm run start`
  - Vue: `cd apps/community-vue && npm run dev`

> **Note:** On GitHub Pages, we run in **DEMO** mode. APIs are mocked with static files in `/data` and the Mock Service Worker. The full backend services are here as **code** for future cloud deployment.

## Frontend routes on Pages
- Shopfront (React + Tailwind): `/shop/`
- OpsConsole (Angular + Bootstrap): `/console/`
- Community Hub (Vue + Router + Vuex): `/community/`

## Tech coverage (as requested)
- **Frontend:** React, Angular, Vue, HTML5, CSS3, ES6+, Tailwind, Bootstrap, Vuex, Vue Router
- **Backend code:** Node+Express (Commerce), NestJS GraphQL (Gateway), Node+Socket.IO (Chat), Django+DRF (Auth), Spring Boot (Tasks), Laravel (Content), ASP.NET Core (Inventory), Elasticsearch worker
- **DB targets:** MongoDB, PostgreSQL, MySQL, Elasticsearch (workers & mappings included as code)
- **Auth/Security:** JWT/OAuth flows **(frontends in demo mode mock these)**; real services included
- **DevOps:** Dockerfiles, Docker Compose for local; GitHub Actions for CI/CD of static apps; (IaC and cloud deployment scripts can be added later)
- **Testing:** Jest (React), Mocha+Chai (Node services), Karma+Jasmine (Angular harness), minimal examples included

## Productionizing later
- Deploy services to cloud providers (AWS/GCP/Azure/Heroku). Update frontend `.env` configs to point to live APIs (toggle DEMO=false).
- Replace MSW/static JSON with your live endpoints.
- Enable OAuth client IDs on your domains.

---

© You. MIT licensed. Enjoy building! 🚀
