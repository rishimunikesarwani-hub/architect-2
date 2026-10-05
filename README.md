# Architect 2.0

An assignment prototype for building agentic apps with a guided workspace and optional developer controls. User approved skipping blueprint on 2026-10-05.

Open the local app at **http://localhost:5177**. Use `localhost`, as that is the configured authentication origin.

## Run

```powershell
npm ci
npm run dev
```

`npm run build` checks frontend types and produces `runs/dist`. `npm test` verifies backend ownership, workspace persistence, source-import limits and working sample-preview interaction. `npm run backend` syncs source to the dedicated Convex development deployment. No production deployment has been performed.

## What works

- Guided and Developer views over the same project; home, search, projects, templates, integrations, usage and preferences.
- Prompt-to-workspace, saved plan editing/approval and an explicit build action; framework preference changes preserve source. Marketplace copies retain sample origin metadata.
- Editable files, isolated HTML preview, source/ZIP import parser, export controls and bounded version history. The parser is tested; the browser upload picker and actual download arrival remain unverified.
- Agent configuration with knowledge references and individual fixtures; collection/schema metadata and generated-app authentication simulations; custom HTTP-tool definitions and a failed-source-check → editor → manual fix → retest flow.
- Reusable design presets with actual HTML accent changes, project-derived artifacts saved to source, file-first agent handoffs and same-agent Studio editing. GitHub conflict/review, sharing and deployment settings are labeled simulations.
- Shared-agent library demo: department ownership, access requests, owner approval, version-specific grants, JSON contract validation and reuse in a new project. Personas and grants are simulated in this browser; the real backend remains owner-only.
- Browser-local demo persistence. The dedicated Convex backend is deployed, protects each user's projects, and has ownership/persistence tests. Google OAuth code is wired; credentials and the real sign-in round trip remain pending guided setup.

The assignment explicitly permits dummy flows. Generation, model execution, GitHub connection/sync, tool connections, test fixtures, invitations, collaboration, and deployment are labeled simulations. They do not access external accounts, call a model, send messages or publish websites. Source checks in the test UI inspect real project state; illustrative safety traces are not production security tests.

Imports accept up to 300 KB of source / 100 files, with a smaller effective limit when JSON escaping and the initial backup exceed the workspace budget. `.env`, credential, dependency and Git folders are excluded. The workspace budget is 550 KB client-side / 600 KB server-side. Large source revisions may retain fewer historical snapshots; current source is preserved.

The preview runs plain HTML in an iframe with an opaque origin and restrictive CSP. React/Python/server-side source can be inspected and edited but is not executed; an unsupported-runtime screen explains this. The iframe isolates the host application's credentials and DOM, but is not a production code-execution sandbox.

Final automated verification passed all 19 tests and the production build. The main agent verified the extended desktop flows and reload persistence; a disconnected demo build at 127.0.0.1:5180 also completed prompt-to-preview with Google sign-in disabled and no application console errors. Earlier 390-pixel mobile checks cover the earlier core workspace only. Added-modal mobile verification did not reach mobile width, upload selection was permission-blocked, and actual download arrival was not confirmed. Real Google sign-in, authenticated cloud browser persistence and public release remain pending.

## Setup and evidence

- [Google sign-in and Convex setup](docs/guide-backend-setup.md)
- [Feature coverage and source boundaries](docs/ref-feature-coverage.md)
- [Engineering drawing with current and proposed multiplayer architecture](docs/arch-engineering-drawing.md)
- [Full-size vector drawing](docs/arch-engineering-drawing.svg)
- [Engineering drawing image](docs/arch-engineering-drawing.png)
- [Proposed production architecture and service rationale](docs/arch-production-architecture.md)
- [Production engineering drawing](docs/arch-production-architecture.png) / [SVG](docs/arch-production-architecture.svg)
- [Requirement-by-requirement audit](evals/2026-10-05-requirement-audit.md)
- [Public release handoff](docs/guide-release.md)
- [Browser verification and remaining checks](evals/2026-10-05-browser-verification.md)
- [Extended feature and reload verification](evals/2026-10-05-parity-verification.md)

For authentication, add the Google client ID and secret only to this app's Convex development environment. Never place secrets in `VITE_*` variables, project source, chat, or Git. Guest projects are not automatically uploaded when signing in. Signed-in cloud projects and local demo projects are separate workspaces.

## Structure

`src` contains the React app and Convex backend. `ops` contains build configuration and diagram helpers. `docs` holds source/architecture/setup notes. `tests` contains automated checks, `evals` the browser journey record, `data` safe import fixtures, and `runs` generated output. The four main root files are README, AGENTS, LOG and the package manifest; `.gitignore`, `convex.json`, lockfile and ignored local configuration are required tooling files.
