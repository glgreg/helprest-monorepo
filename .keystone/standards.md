# Engineering Standards

## 1. Version Control

### Commit Messages

- **Format**: `<type>(<scope>): <short summary>` (Conventional Commits)
- **Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`
- **Scopes**: `api`, `backend`, `app`, `site`, `docs`, `resources`, `keystone`, or a specific stone id.
- **Language**: Commit messages and code identifiers are written in **English**.
- Commits are atomic: one logical change per commit.

### Pull Requests

- A concise summary of the change and its architectural motivation.
- Link to the relevant issue, runbook phase, or requirement (`resources/docs/helprest-requirements.md`).
- Impact analysis: affected stones (`keystone stone show <id>` lists the transitive impact set).
- Test evidence (`bun test`, linter output, or mobile verification steps).

## 2. Code Conventions

- **Naming**:
  - `camelCase` for variables, functions, methods, and object properties.
  - `PascalCase` for classes, Domain Entities, Value Objects, Use Cases, TypeScript interfaces/types, and React components.
  - `UPPER_SNAKE_CASE` for module-level constants and rate-limit/collection configurations.
- **Backend Path Aliases (`helprest-api/tsconfig.json`)**:
  - `@domain/*` -> `src/domain/*`
  - `@application/*` -> `src/application/*`
  - `@infra/*` -> `src/infrastructure/*`
  - `@interface/*` -> `src/interface/*`
  - `@shared/*` -> `src/shared/*`
- **Mobile Path Alias (`helprest-app/tsconfig.json`)**:
  - `@/*` -> `helprest-app/*`
- **Formatting & Linting**:
  - ESLint 9 flat config (`eslint.config.js`) in both `helprest-api` and `helprest-app`, plus Prettier (`.prettierrc`) in `helprest-app`.
  - Maintain strict null checks (`noUncheckedIndexedAccess: true` in `helprest-api`).
- **Clean Architecture & Security**:
  - Never import `@infra/*` or `@interface/*` inside `src/domain/`.
  - Return plain DTOs from Use Cases; never leak raw MongoDB documents or password hashes in HTTP responses.
  - Validate and sanitize all external inputs with `sanitize()` + Zod v4 schemas (`src/interface/validation/`).
  - Never hardcode secrets, API keys, or credentials in source files, stones, or commits.

## 3. Testing

- **Backend (`helprest-api`)**:
  - Runner: Bun native test runner (`bun test`), configured via `bunfig.toml` and `tests/setup.ts`.
  - Unit tests (`tests/unit/`) cover Domain Entities, Value Objects, and `RecommendationService` scoring/Haversine formulas.
  - Integration tests (`tests/integration/`) cover HTTP routes, use cases, geofencing validation, and repository contracts.
  - Target at least 80% coverage on new or modified Use Cases and Domain Services.
- **API Contract Collection**:
  - Every new or modified HTTP endpoint in `helprest-api` must be documented with an example request in [`resources/api/api.http`](../resources/api/api.http).

## 4. Documentation

- Architectural decisions, module invariants, integration contracts, and anti-patterns live in co-located `.stone.<id>.md` files and are audited with `.keystone/bin/keystone stone doctor`.
- Broad product and system documentation in [`resources/docs/`](../resources/docs/) is linked from `.keystone/identity.md` rather than duplicated.
- Code comments explain *why* a design choice or constraint exists, not *how* the syntax works.
