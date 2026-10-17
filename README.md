# Andre Lawson-Ferreira — Software Engineering Portfolio

Personal portfolio website for graduate software engineering applications.

I’m interested in AI-assisted development where it improves exploration, implementation or testing, with code quality and validation remaining my responsibility.

## Featured projects

- **[Cadence](https://github.com/ajxlf/cadence)** — personal planning PWA with activity and meal planning, Supabase authentication, PostgreSQL-backed cloud persistence and realtime synchronisation.
- **[CyberDrive](https://github.com/ajxlf/CyberDrive)** — SwiftUI iOS/CarPlay navigation concept using MapKit routing, MapLibre map styling and a documented simulator smoke-test workflow.
- **[Cross-Math](https://github.com/ajxlf/Cross-Math)** — Kotlin and Jetpack Compose arithmetic puzzle game with puzzle generation, validation, scoring and rotation-safe state.
- **[Smart Campus JAX-RS API](https://github.com/ajxlf/smart-campus-jaxrs-api)** — Java REST API for linked room, sensor and sensor-reading resources.

Additional projects are available on [GitHub](https://github.com/ajxlf).

## Tech stack

- React, TypeScript, Vite and Tailwind CSS
- Vitest and React Testing Library
- GitHub Actions and GitHub Pages

## Run locally

Requirements: Node.js 20 or later and npm.

```bash
git clone https://github.com/ajxlf/portfolio.git
cd portfolio
npm ci
npm run dev
```

Vite prints the local development URL in the terminal.

## Quality checks

```bash
npm run lint
npm test
npm run build
```

The test suite checks key portfolio content and featured project presentation. CI runs these checks for pushes to `main` and pull requests targeting `main`.

## Deployment

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds the production site and publishes it to GitHub Pages when changes are pushed to `main`, or when the workflow is manually dispatched.

The Vite production base path is configured for the `/portfolio/` GitHub Pages project URL.
