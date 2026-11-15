# Architecture

## 1. System Overview

HelpRest is organized as a multi-package repository where the mobile client (`helprest-app`) communicates over HTTPS/JSON with a stateless REST API (`helprest-api`).

`helprest-api` follows **Clean Architecture** and **Domain-Driven Design (DDD)** divided into four concentric layers (`domain`, `application`, `infrastructure`, `interface`) plus `shared` utilities. Dependencies point strictly inward toward `domain`. `helprest-app` uses **Expo Router v5** file-based routing with separated service, MMKV local storage, TanStack Query data-fetching, and Atomic Design UI component layers.

## 2. Technology Stack

- **Language / Runtime**:
  - `helprest-api`: TypeScript 5.9 (`strict`) on **Bun** runtime (`Bun.serve` native HTTP server, `bun test`).
  - `helprest-app`: TypeScript 5.8 (`strict`) on **React Native 0.79** and **Expo SDK 53** (React 19).
  - `helprest-site`: TypeScript 5.7 (`strict`) on **Node.js** and **Vite 6** (React 19).
- **Frameworks & Libraries**:
  - `helprest-api`: Custom regex router over `Bun.serve` (no Express/Elysia/Fastify), **Zod v4** for schema validation, **`jose`** (HS256 JWT + Google JWKS verification), **Argon2id** (`argon2`) for password hashing.
  - `helprest-app`: **Expo Router v5**, **TanStack Query v5**, **`react-native-mmkv`**, **`react-native-maps`** + **`expo-maps`** (Google Maps APIs), **`expo-auth-session`** (Google OAuth2), **`expo-location`**, **`expo-image-picker`**, **Reanimated v3**.
  - `helprest-site`: **Vite 6**, **React 19**, **Tailwind CSS v4**, **Lucide React**, Atomic Design component system, client-side router, Google Play Store compliance hub.
- **Data**:
  - **MongoDB** via the official `mongodb` v7 driver (no Mongoose/ODM). Uses `2dsphere` geospatial indexes (`$geoNear`), `text` search indexes, and compound indexes.
  - **Redis** via `ioredis` (lazy-connected singleton with graceful degradation) for caching (`RedisCacheService`) and sliding-window rate limiting.
- **Infrastructure**: Docker multi-stage build (`oven/bun:1`) deployed on Render (`helprest-api`), EAS Build (`helprest-app`), Static web build (`helprest-site`).

## 3. Structure and Patterns

- **Directory layout**:
  - `helprest-site/src/components/` (`atoms/`, `molecules/`, `organisms/`, `templates/`), `pages/`, `data/`, `router/`, `context/` — Atomic Design hierarchy, interactive flag recommendation simulator, and Google Play compliance suite.
  - `helprest-api/src/domain/` — Entities (`User`, `Establishment`, `Product`, `Flag`, `Visit`, `UserFavorite`), Value Objects (`Location`, `Rating`, `SocialLinks`), repository interfaces, and pure domain services (`RecommendationService`).
  - `helprest-api/src/application/` — Use cases grouped by aggregate (`auth`, `user`, `establishment`, `product`, `flag`, `visit`, `favorite`) and application-level contracts.
  - `helprest-api/src/infrastructure/` — Concrete MongoDB repositories, connection pool (`maxPoolSize: 10, minPoolSize: 2`), startup index initializer, Redis client/cache, JWT signer/verifier, Argon2id hasher, and rate limiter.
  - `helprest-api/src/interface/` — Custom HTTP router (`router.ts`), middlewares (`auth`, `cors`, `security`, `error`), and Zod v4 validation schemas.
  - `helprest-app/app/` — Expo Router screens split into `(auth)` (login, 6-step user registration, 3-step establishment registration) and `(app)` (`(tabs)` for consumer discovery/favorites/social, `(establishment)` for admin dashboard/menu management, `details/[id]`, `product/[id]`, `visit/create`).
  - `helprest-app/services/`, `helprest-app/storage/`, `helprest-app/hooks/queries/`, `helprest-app/components/` — Decoupled HTTP/OAuth/GPS services, encrypted-capable MMKV stores, React Query hooks, and Atomic UI components (`atoms`, `ui`, `login`).
- **Design patterns**:
  - **Immutable Entities & Value Objects**: Domain classes have private constructors, validate invariants in `static create()`, map to/from MongoDB via `toDocument()`/`fromDocument()`, and return new instances on state transitions (e.g., `Establishment.withNewRating()`).
  - **Singleton Repositories, Per-Request Use Cases**: Stateless MongoDB repositories are instantiated once in `router.ts` and injected via constructor into fresh Use Case instances per HTTP request.
  - **Centralized API Client with Auto-Refresh**: Mobile requests go through `services/api.ts`, which attaches Bearer tokens from MMKV and transparently retries `401` responses once after rotating tokens via `POST /api/auth/refresh`.
- **Data flow**:
  1. HTTP request hits `handleRequest` in `helprest-api/src/interface/http/router.ts` -> CORS preflight check -> route regex match.
  2. `authenticateRequest` verifies the Bearer JWT (when protected); `parseBody` sanitizes MongoDB operators (`$gt`, `$ne`, etc.) and validates with Zod v4.
  3. The route handler instantiates the Use Case with singleton repositories -> Use Case orchestrates Domain Entities/Services -> persists via Repository -> returns a plain DTO serialized as JSON with security/CORS headers and `X-Request-Id`.

## 4. Integration Points

- **Google OAuth2**: `expo-auth-session` on mobile obtains a Google ID token and sends it to `POST /api/auth/google`; the backend verifies it directly against Google's public JWKS (`https://www.googleapis.com/oauth2/v3/certs`) using `jose.createRemoteJWKSet`.
- **MongoDB Atlas**: Primary data store; GeoJSON `Point` coordinates (`[lng, lat]`) power `$geoNear` proximity queries.
- **Redis**: Distributed cache and sorted-set sliding-window rate limiter (`AUTH`: 10/min, `API`: 100/min, `SEARCH`: 30/min).
- **Google Maps & Device Location**: `react-native-maps` / `expo-maps` and `expo-location` provide coordinates for nearby discovery, onboarding address pinning, and visit photo geofencing.

## 5. Constraints

- **No ODM (Mongoose)**: All MongoDB access uses the official `mongodb` driver and explicit `toDocument()` / `fromDocument()` mapping.
- **No External Backend HTTP Framework**: Routing uses the custom `Bun.serve` router in `src/interface/http/router.ts`.
- **NoSQL Injection Sanitization**: Every request body must pass through `sanitize()` before validation or persistence.
- **Visit Photo Geofencing**: Uploading visit photos (`POST /api/visits` with `photoUrls`) requires GPS coordinates within **100 meters** (Haversine distance) of the establishment's coordinates.
- **Zero-Match Exclusion on Active Restrictions**: When a user has one or more dietary flags and an establishment matches zero of them, `RecommendationService.rank()` assigns a score of `0` and ignores any sponsor bonus.
- **Strict TypeScript**: Both `helprest-api` and `helprest-app` compile with `"strict": true`.

## 6. Stone Index

Generated by `keystone stone create` and `keystone stone doctor --fix`. Do not edit between the markers.

<!-- keystone:index:start -->
| Stone | Type | Location | Summary |
| --- | --- | --- | --- |
| `api-application` | service | [helprest-api/src/application](../helprest-api/src/application/.stone.api-application.md) | Application use cases orchestrating auth, establishment discovery, product menus, favorites, social feed, and 100m visit photo geofencing. |
| `api-domain` | entity | [helprest-api/src/domain](../helprest-api/src/domain/.stone.api-domain.md) | Immutable domain entities, GeoJSON value objects, repository contracts, and the dietary-flag RecommendationService. |
| `api-infra` | integration | [helprest-api/src/infrastructure](../helprest-api/src/infrastructure/.stone.api-infra.md) | MongoDB v7 repositories (GeoJSON $geoNear and 2dsphere indexes), lazy Redis cache and sliding-window rate limiter, Argon2id hashing, and jose JWT tokens. |
| `api-http` | module | [helprest-api/src/interface](../helprest-api/src/interface/.stone.api-http.md) | Custom Bun.serve regex router, auth/CORS/security/error middlewares, NoSQL operator sanitization, and Zod v4 request validation. |
| `app-routing` | module | [helprest-app/app](../helprest-app/app/.stone.app-routing.md) | Expo Router v5 file-based navigation with root session validation, consumer/company onboarding flows, establishment portal, and main tabs. |
| `app-components` | module | [helprest-app/components](../helprest-app/components/.stone.app-components.md) | Reusable React Native UI components structured by Atomic Design (atoms, UI primitives, cards, bottom sheets, and login/onboarding controls). |
| `app-queries` | service | [helprest-app/hooks/queries](../helprest-app/hooks/queries/.stone.app-queries.md) | TanStack Query v5 hooks and optimistic mutations for nearby places, dietary flags, user location, and favorites. |
| `app-services` | integration | [helprest-app/services](../helprest-app/services/.stone.app-services.md) | Centralized HTTP client with automatic 401 token rotation, Google OAuth2 sign-in hook, and GPS/reverse-geocoding location service. |
| `app-storage` | module | [helprest-app/storage](../helprest-app/storage/.stone.app-storage.md) | MMKV local stores for JWT token pairs, Google OAuth user metadata, cached user/establishment profiles, and onboarding progress. |
| `site-web` | module | [helprest-site](../helprest-site/.stone.site-web.md) | Vite React 19 web presence, product showcase, and Google Play compliance hub (Privacy, Terms, Data Deletion, Data Safety, Health Disclaimer, Support). |
<!-- keystone:index:end -->
