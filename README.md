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
- Browser-local demo persistence and a deployed development backend for real login ID/password accounts, administrator-assigned departments, Viewer/Editor grants to the same app, reactive reads, and stale-save rejection with private draft recovery. The user-approved update reached `dev:perceptive-ermine-27` on 2026-10-05 at 22:44 IST. Live authentication and department API checks passed **15/15**; authenticated browser and cross-browser UI acceptance remain pending. Google OAuth is deferred.

The assignment explicitly permits dummy flows. Generation, model execution, GitHub connection/sync, tool connections, test fixtures, invitations, agent-library reuse scenarios, and deployment are labeled simulations. They do not access external accounts, call a model, send messages or publish websites. Source checks in the test UI inspect real project state; illustrative safety traces are not production security tests.

Imports accept up to 300 KB of source / 100 files, with a smaller effective limit when JSON escaping and the initial backup exceed the workspace budget. `.env`, credential, dependency and Git folders are excluded. The workspace budget is 550 KB client-side / 600 KB server-side. Large source revisions may retain fewer historical snapshots; current source is preserved.

The preview runs plain HTML in an iframe with an opaque origin and restrictive CSP. React/Python/server-side source can be inspected and edited but is not executed; an unsupported-runtime screen explains this. The iframe isolates the host application's credentials and DOM, but is not a production code-execution sandbox.

Historical prototype verification passed 19 tests and the production build. The current multiplayer checks are recorded in [department multiplayer verification](evals/2026-10-05-department-multiplayer.md). The main agent verified the extended desktop flows and reload persistence; a disconnected demo build at 127.0.0.1:5180 also completed prompt-to-preview with Google sign-in disabled and no application console errors. Those checks predate department authentication. The later login/registration dialog was checked at a measured 390-pixel viewport. Upload selection was permission-blocked. The user subsequently supplied the actual Download brief file; its saved copy matches all 1,569 bytes and the SHA-256 hash. It is an earlier six-file/draft sample snapshot, not the current workspace. Other download formats remain unverified.

[Mobile panel verification](evals/2026-10-05-mobile-panels.md) now covers Design system, Build artifacts, GitAgent files, Custom tools and Studio handoff at **391 × 844**, with measured bounds inside the viewport and no horizontal overflow. Custom tools also retained a scrollable, labeled **Not sent** sample review. A 72-character knowledge title that previously overflowed now measures 207px content width / 207px scroll width after the wrapping fix; its draft was canceled without changing saved source. These are DOM geometry checks with no application errors, not screenshot proof—the screenshot service timed out. Other unreported mobile panels and authenticated department rendering remain unverified.

The [live development smoke report](evals/2026-10-05-department-backend-smoke.json) records normal Better Auth signup/username sign-in for four synthetic accounts and independent Convex clients: same-app reads, editor-save propagation, viewer denial, outsider isolation, stale-revision rejection, revocation, wrong-password rejection, and logout invalidating the prior JWT. All 15 checks passed. Catalog backfill returned `done: true, migrated: 0`; readiness is `password: true, google: false`. DOM checks in the local browser at localhost:5177 confirmed password **Ready to sign in**, enabled forms and no sampled application errors. Screenshot-service attempts timed out; no screenshot proof is claimed. This does not yet prove authenticated browser sessions, cross-browser UI persistence or recovery. No public repository, frontend hosting, production deployment, or hiring submission has been completed.

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
- [Mobile panel geometry and knowledge-title overflow verification](evals/2026-10-05-mobile-panels.md)

Password sign-in is enabled on the updated development backend and uses the existing Better Auth secret; Google client credentials are not required. Create accounts in the app and assign login IDs to departments in Settings. Never place secrets in `VITE_*` variables, project source, chat, or Git. Guest projects are not automatically uploaded when signing in. Signed-in cloud projects and local demo projects are separate workspaces.

## Structure

`src` contains the React app and Convex backend. `ops` contains build configuration and diagram helpers. `docs` holds source/architecture/setup notes. `tests` contains automated checks, `evals` the browser journey record, `data` safe import fixtures, and `runs` generated output. The four main root files are README, AGENTS, LOG and the package manifest; `.gitignore`, `convex.json`, lockfile and ignored local configuration are required tooling files.
