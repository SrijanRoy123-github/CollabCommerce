
CollabCommerce Cloud (C3): 

a polyglot, full-stack platform that unifies a React shopfront, Angular admin console, and Vue community with a microservices backend; statically deployed on GitHub Pages with live Stripe Checkout via a Node/Express API on Render.

Tech Stack Highlights

Frontend: React 18 + Tailwind + Vite (Shopfront), Angular 17 + Bootstrap (OpsConsole), Vue 3 + Vue Router + Vuex + Vite (Community), Apollo Client (GraphQL-ready)

Backend & Services (code in repo; commerce API deployed):
Node.js + Express (Commerce + Stripe Checkout on Render), NestJS GraphQL Gateway, Socket.IO (Chat), Django + DRF (Auth), Java Spring Boot (Tasks), PHP Laravel (Content), ASP.NET Core (.NET 8) (Inventory), Elasticsearch sync worker

Data: MongoDB (commerce/chat), PostgreSQL (tasks/inventory/auth), MySQL (content), Elasticsearch (search); static JSON mocks for Pages demo

Auth & Security: JWT/OAuth flow scaffold (Django/DRF), RBAC via JWT claims (planned), CORS-hardened Express API

CI/CD & Hosting: GitHub Actions (build & deploy to GitHub Pages), Render Web Service (Express/Stripe)

Testing: Jest (React), Karma/Jasmine (Angular), Mocha/Chai (Node)
