# Identity

## 1. Purpose

HelpRest is a mobile-first discovery and recommendation platform that connects people with dietary restrictions and accessibility needs (veganism, lactose intolerance, celiac/gluten intolerance, allergies, etc.) to establishments that can safely serve them.

At the core of the domain are **dietary flags**: users select their restrictions, establishments declare which flags their kitchen and menu items support, and the recommendation engine ranks nearby options by combining flag compatibility (`flagMatchRatio`), geospatial proximity (Haversine / MongoDB `2dsphere`), user ratings, and sponsorship. When no 100% flag match is available nearby, the system degrades granularly to partial flag matches while excluding zero-match establishments whenever the user has active restrictions. Establishments also manage their own profiles and product menus, while users share geo-verified visit reviews and photos on a social feed.

## 2. Project Type

Monorepo containing three application packages and a shared documentation/assets directory (managed without an external monorepo orchestrator):

- `helprest-api/` — RESTful backend service (Bun runtime, TypeScript, MongoDB native driver, Redis).
- `helprest-app/` — Mobile application for consumers and establishment admins (React Native, Expo SDK 53, Expo Router v5).
- `helprest-site/` — Web presence / landing site package.
- `resources/` — Canonical system documentation (`resources/docs/`), REST/Insomnia API collections (`resources/api/`), visual assets (`resources/assets/`), and academic research artifacts (`resources/iniciacao_cientfica/`, `resources/misc/`).

## 3. Audience and Maintainers

- **End Users (Consumers)**: People with dietary restrictions seeking verified, nearby dining establishments and menu items filtered by their dietary flags.
- **Establishment Administrators**: Restaurants and food businesses registering their locations, supported dietary flags, and product catalogs.
- **Maintainer**: Solo-developed and maintained by Gustavo L. Gregorio (`glgreg`), initially presented at MEPI X 2025 (Mostra Estudantil de Pesquisa e Inovação).

## 4. Lifecycle Stage

Active feature development (`1.0.0`, pre-production). Core authentication (local + Google OAuth2), consumer and establishment onboarding flows, geospatial discovery, flag-based recommendation, product catalog management, favorites, and geofenced visit reviews are implemented. API contracts must remain backward-compatible with mobile client expectations, while internal refactoring that strengthens Clean Architecture boundaries and test coverage is encouraged.

## 5. Project Metadata

- **Versioning**: SemVer (`1.0.0` across `helprest-api` and `helprest-app`).
- **Source Language**: English for all source code, identifiers, database schemas, route paths, and Git commit messages. Portuguese is used for user-facing UI copy and product documentation.
- **Canonical Reference Docs**:
  - [`resources/docs/base.system.md`](../resources/docs/base.system.md) — Product vision, architectural principles, and long-term technical criteria.
  - [`resources/docs/backend.md`](../resources/docs/backend.md) — Backend layer breakdown, endpoints, and environment variables.
  - [`resources/docs/frontend.md`](../resources/docs/frontend.md) — Mobile app architecture, auth/onboarding flows, and storage layer.
  - [`resources/docs/helprest-requirements.md`](../resources/docs/helprest-requirements.md) — Actors and use-case specification (UC1–UC57).
  - [`resources/api/api.http`](../resources/api/api.http) and [`resources/api/insomnia.json`](../resources/api/insomnia.json) — Executable API request collections.
  - [`agent-execution-runbook.md`](../agent-execution-runbook.md) — Autonomous execution roadmap and operational guardrails.
