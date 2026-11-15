# Architecture

## 1. System Overview

HelpRest is organized as a multi-package repository where the mobile client (`helprest-app`) communicates over HTTPS/JSON with a stateless REST API (`helprest-api`).

`helprest-api` follows **Clean Architecture** and **Domain-Driven Design (DDD)** divided into four concentric layers (`domain`, `application`, `infrastructure`, `interface`) plus `shared` utilities. Dependencies point strictly inward toward `domain`. `helprest-app` uses **Expo Router v5** file-based routing with separated service, MMKV local storage, TanStack Query data-fetching, and Atomic Design UI component layers.

## 2. Technology Stack

- **Language / Runtime**:
  - `helprest-api`: TypeScript 5.9 (`strict`) on **Bun** runtime (`ElysiaJS`, `bun test`).
  - `helprest-app`: TypeScript 5.8 (`strict`) on **React Native 0.79** and **Expo SDK 53** (React 19).
  - `helprest-site`: TypeScript 5.7 (`strict`) on **Node.js** and **Vite 6** (React 19).
- **Frameworks & Libraries**:
  - `helprest-api`: **ElysiaJS** (`@elysiajs/cors`, `@elysiajs/jwt`, `@elysiajs/bearer`, `@elysiajs/swagger`, TypeBox schemas) alongside **Zod v4** schemas and **`jose`** (HS256 JWT + Google JWKS verification).
  - `helprest-app`: **Expo Router v5**, **TanStack Query v5** (`constants/queryKeys.ts`), **`react-native-mmkv`** (`storage/keys.ts`), **`react-native-maps`** + **`expo-maps`** (Google Maps APIs), **`expo-auth-session`** / **`@react-native-google-signin/google-signin`** (Google OAuth2), **`expo-location`**, **`expo-image-picker`**, **Reanimated v3**.
  - `helprest-site`: **Vite 6**, **React 19**, **Tailwind CSS v4**, **Lucide React**, Atomic Design component system, client-side router, Google Play Store compliance hub.
- **Data**:
  - **MongoDB** via the official `mongodb` v7 driver (no Mongoose/ODM). Uses `2dsphere` geospatial indexes (`$geoNear`), `text` search indexes, and compound indexes across `users`, `establishments`, `products`, `flags`, `visits`, `user_favorites`, and `audit_logs`.
  - **Redis** via `ioredis` (lazy-connected singleton with graceful degradation) for caching (`RedisCacheService`) and sliding-window rate limiting.
- **Infrastructure**: Docker multi-stage build (`oven/bun:1`) deployed on Render (`helprest-api`), EAS Build / local Gradle APK build (`helprest-app`), Static web build on Vercel (`helprest-site`).

## 3. Structure and Patterns

- **Directory layout**:
  - `helprest-site/src/components/` (`atoms/`, `molecules/`, `organisms/`, `templates/`), `pages/`, `data/`, `router/`, `context/` — Atomic Design hierarchy, interactive flag recommendation simulator, and Google Play compliance suite.
  - `helprest-api/src/domain/` — Entities (`User`, `Establishment`, `Product`, `Flag`, `Visit`, `UserFavorite`, `AuditLog`), Value Objects (`Location`, `Rating`, `SocialLinks`, `Role`), repository interfaces, and pure domain services (`RecommendationService`).
  - `helprest-api/src/application/` — Use cases grouped by aggregate (`auth`, `user`, `establishment`, `product`, `flag`, `visit`, `favorite`, `admin`) and application-level contracts.
  - `helprest-api/src/infrastructure/` — Concrete MongoDB repositories (including `MongoAuditLogRepository`), connection pool (`maxPoolSize: 10, minPoolSize: 2`), startup index initializer, Redis client/cache, JWT signer/verifier, and rate limiter.
  - `helprest-api/src/interface/` — ElysiaJS app (`src/app.ts` with `/swagger` OpenAPI), global plugins (`errorPlugin`, `securityPlugin`, `authPlugin` with declarative `role()` macro), feature modules (`auth`, `user`, `establishment`, `product`, `flag`, `visit`, `favorite`, `admin`), and validation schemas (legacy `http/router.ts` is deprecated and unused).
  - `helprest-app/app/` — Expo Router screens split into `(auth)` (Google OAuth login, 6-step user registration, 3-step establishment registration) and `(app)` (`(tabs)` for consumer discovery/favorites/social, `(establishment)` for admin dashboard/menu management, `details/[id]`, `product/[id]`, `visit/create`).
  - `helprest-app/services/`, `helprest-app/storage/`, `helprest-app/hooks/queries/`, `helprest-app/constants/`, `helprest-app/components/` — Decoupled HTTP/OAuth/GPS services, isolated MMKV stores (`StorageKeys` / `StorageInstances`), `queryKeys` factory + React Query hooks, and Atomic UI components (`atoms`, `ui`, `login`).
- **Design patterns**:
  - **Immutable Entities & Value Objects**: Domain classes have private constructors, validate invariants in `static create()`, map to/from MongoDB via `toDocument()`/`fromDocument()`, and return new instances on state transitions (e.g., `Establishment.withNewRating()`, `User.withRole()`, `User.withBan()`).
  - **Modular Elysia Plugins & Per-Request Use Cases**: Feature modules (`create*Module(...)`) instantiate repositories as singletons (with optional constructor injection for unit tests) and invoke fresh Use Case instances per HTTP request.
  - **Centralized API Client with Mutex Auto-Refresh**: Mobile requests go through `services/api.ts`, which attaches Bearer tokens from MMKV and deduplicates concurrent `401` token rotations using `getOrRefreshAccessToken()` single-flight mutex against `POST /api/auth/refresh`.
- **Data flow**:
  1. HTTP request hits the ElysiaJS `app` (`helprest-api/src/app.ts`) -> `securityPlugin` applies CORS, sanitizes `body` and `query` against NoSQL operators (`$gt`, `$ne`, etc.), and appends OWASP security headers.
  2. Protected routes declare `{ role: "<requiredRole>" }` via `authPlugin`, verifying the Bearer JWT and enforcing hierarchical `Role.hasPermission()`.
  3. Route handlers validate parameters with TypeBox / Zod schemas and invoke Use Cases -> Use Cases orchestrate Domain Entities/Services -> persist via Repository -> `errorPlugin` maps `AppError` subclasses (`400`, `401`, `403`, `404`, `409`, `429`) to JSON envelopes.

## 4. Integration Points

- **Google OAuth2**: Mobile obtains a Google ID token and sends it to `POST /api/auth/google`; the backend verifies it directly against Google's public JWKS (`https://www.googleapis.com/oauth2/v3/certs`) using `jose.createRemoteJWKSet`.
- **MongoDB Atlas**: Primary data store; GeoJSON `Point` coordinates (`[lng, lat]`) power `$geoNear` proximity queries.
- **Redis**: Distributed cache and sorted-set sliding-window rate limiter (`AUTH`: 10/min, `API`: 100/min, `SEARCH`: 30/min).
- **Google Maps & Device Location**: `react-native-maps` / `expo-maps` and `expo-location` provide coordinates for nearby discovery, onboarding address pinning, and visit photo geofencing.

## 5. Constraints

- **No ODM (Mongoose)**: All MongoDB access uses the official `mongodb` driver and explicit `toDocument()` / `fromDocument()` mapping.
- **ElysiaJS Modularity & Plugin Guardrails**: New endpoints belong in `src/interface/modules/*.module.ts` mounted onto `createApp()` in `src/app.ts` and protected by `securityPlugin`, `errorPlugin`, and `authPlugin`'s `role` macro.
- **NoSQL Injection Sanitization**: Every request `body` and `query` passes through `sanitize()` (`securityPlugin`) before use-case execution or persistence.
- **Visit Photo Geofencing**: Uploading visit photos (`POST /api/visits` with `photoUrls`) requires GPS coordinates within **100 meters** (Haversine distance) of the establishment's coordinates.
- **Zero-Match Exclusion on Active Restrictions**: When a user has one or more dietary flags and an establishment matches zero of them, `RecommendationService.rank()` assigns a score of `0` and ignores any sponsor bonus.
- **Strict TypeScript**: Both `helprest-api` and `helprest-app` compile with `"strict": true`.

## 6. Stone Index

Generated by `keystone stone create` and `keystone stone doctor --fix`. Do not edit between the markers.

<!-- keystone:index:start -->
| Stone | Type | Location | Summary |
| --- | --- | --- | --- |
| `api-application` | service | [helprest-api/src/application](../helprest-api/src/application/.stone.api-application.md) | Application use cases orchestrating OAuth auth, establishment discovery, product menus, flags, favorites, social feed, 100m geofencing, and admin moderation/audit. |
| `api-domain` | entity | [helprest-api/src/domain](../helprest-api/src/domain/.stone.api-domain.md) | Immutable domain entities (including AuditLog), Role/Location/Rating/SocialLinks value objects, repository contracts, and RecommendationService. |
| `api-infra` | integration | [helprest-api/src/infrastructure](../helprest-api/src/infrastructure/.stone.api-infra.md) | MongoDB v7 repositories (GeoJSON $geoNear, 2dsphere indexes, AuditLogs), lazy Redis cache and sliding-window rate limiter, and jose JWT tokens. |
| `api-http` | module | [helprest-api/src/interface](../helprest-api/src/interface/.stone.api-http.md) | ElysiaJS HTTP application (app.ts), global security/error/auth role-macro plugins, OpenAPI Swagger (/swagger), and modular REST endpoints. |
| `app-routing` | module | [helprest-app/app](../helprest-app/app/.stone.app-routing.md) | Expo Router v5 file-based navigation with root session validation, OAuth-only consumer/company onboarding flows, establishment portal, and main tabs. |
| `app-components` | module | [helprest-app/components](../helprest-app/components/.stone.app-components.md) | Reusable React Native UI components structured by Atomic Design (atoms, UI primitives, cards, bottom sheets, and login/onboarding controls). |
| `app-queries` | service | [helprest-app/hooks/queries](../helprest-app/hooks/queries/.stone.app-queries.md) | TanStack Query v5 hooks and optimistic mutations backed by the centralized queryKeys factory for establishments, location geocoding, and favorites. |
| `app-services` | integration | [helprest-app/services](../helprest-app/services/.stone.app-services.md) | Centralized HTTP client with single-flight mutex 401 token rotation, Google OAuth2 sign-in service, and GPS/Haversine location service. |
| `app-storage` | module | [helprest-app/storage](../helprest-app/storage/.stone.app-storage.md) | MMKV local stores and centralized key definitions (storage/keys.ts) for JWT token pairs, Google OAuth user metadata, cached user/establishment profiles, and onboarding progress. |
| `site-web` | module | [helprest-site](../helprest-site/.stone.site-web.md) | Vite React 19 web presence, product showcase, and Google Play compliance hub (Privacy, Terms, Data Deletion, Data Safety, Health Disclaimer, Support). |
<!-- keystone:index:end -->
