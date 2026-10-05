# Architect 2.0

An assignment prototype for building agentic apps with a guided workspace and optional developer controls. User approved skipping blueprint on 2026-10-05.

Open the local app at **http://localhost:5177**. Use `localhost`, as that is the configured authentication origin.

## Run

```powershell
npm ci
npm run dev
```

`npm run build` checks frontend types and produces `runs/dist`. `npm test` verifies password authentication, department permissions, revision conflicts, save queues, source-import limits and sample-preview interaction. `npm run backend` syncs source to the dedicated Convex development deployment. No production deployment has been performed.

## What works

- Guided and Developer views over the same project; home, search, projects, templates, integrations, usage and preferences.
- Prompt-to-workspace, saved plan editing/approval and an explicit build action; framework preference changes preserve source. Marketplace copies retain sample origin metadata.
- Editable files, isolated HTML preview, source/ZIP import parser, export controls and bounded version history. The parser is tested. Arrival of the [downloaded Markdown brief](docs/ref-payment-status-workflow-brief.md) is verified; the browser upload picker, ZIP export and other downloads remain unverified.
- Agent configuration with knowledge references and individual fixtures; collection/schema metadata and generated-app authentication simulations; custom HTTP-tool definitions and a failed-source-check → editor → manual fix → retest flow.
- Reusable design presets with actual HTML accent changes, project-derived artifacts saved to source, file-first agent handoffs and same-agent Studio editing. GitHub conflict/review and deployment settings are labeled simulations.
- Shared-agent library demo: department ownership, access requests, owner approval, version-specific grants, JSON contract validation and reuse in a new project. These agent-library personas and capability grants remain simulated. They are separate from real department access to shared apps.
- Browser-local demo persistence. New local source implements real login ID/password accounts, administrator-assigned departments, Viewer/Editor grants to the same app, reactive reads, and stale-save rejection with private draft recovery. The additive schema and backend update await approval for the dedicated Convex development deployment; live cross-browser acceptance is still pending. Google OAuth is deferred.

The assignment explicitly permits dummy flows. Generation, model execution, GitHub connection/sync, tool connections, test fixtures, invitations, agent-library reuse scenarios, and deployment are labeled simulations. They do not access external accounts, call a model, send messages or publish websites. Source checks in the test UI inspect real project state; illustrative safety traces are not production security tests.

Imports accept up to 300 KB of source / 100 files, with a smaller effective limit when JSON escaping and the initial backup exceed the workspace budget. `.env`, credential, dependency and Git folders are excluded. The workspace budget is 550 KB client-side / 600 KB server-side. Large source revisions may retain fewer historical snapshots; current source is preserved.

The preview runs plain HTML in an iframe with an opaque origin and restrictive CSP. React/Python/server-side source can be inspected and edited but is not executed; an unsupported-runtime screen explains this. The iframe isolates the host application's credentials and DOM, but is not a production code-execution sandbox.

Earlier prototype verification passed 19 tests and the production build. The current multiplayer checks are recorded in [department multiplayer verification](evals/2026-10-05-department-multiplayer.md). The main agent verified the extended desktop flows and reload persistence; a disconnected demo build at 127.0.0.1:5180 also completed prompt-to-preview with Google sign-in disabled and no application console errors. Earlier 390-pixel mobile checks cover the earlier core workspace only. Added-modal mobile verification did not reach mobile width, and upload selection was permission-blocked. The user subsequently supplied the actual Download brief file; its saved copy matches all 1,569 bytes and the SHA-256 hash. It is an earlier six-file/draft sample snapshot, not the current workspace. Other download formats remain unverified. Google is deferred. Live password sign-in, authenticated shared-app browser persistence and public release remain pending.

## Setup and evidence

- [Login ID, departments and Convex setup](docs/guide-backend-setup.md)
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

Password sign-in uses the existing Better Auth secret; Google client credentials are not required. After the approved development update, create accounts in the app and assign login IDs to departments in Settings. Never place secrets in `VITE_*` variables, project source, chat, or Git. Guest projects are not automatically uploaded when signing in. Signed-in cloud projects and local demo projects are separate workspaces.

## Structure

`src` contains the React app and Convex backend. `ops` contains build configuration and diagram helpers. `docs` holds source/architecture/setup notes. `tests` contains automated checks, `evals` the browser journey record, `data` safe import fixtures, and `runs` generated output. The four main root files are README, AGENTS, LOG and the package manifest; `.gitignore`, `convex.json`, lockfile and ignored local configuration are required tooling files.
