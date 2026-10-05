# Architect 2.0

User explicitly skipped blueprint on 2026-10-05. Build the assignment prototype from their screenshot: full UX for beginners and developers; prompt building, project import, framework choice, GitHub, deployment, and existing Architect features. Simulated flows are permitted and must be labelled. Real Google sign-in and Convex persistence remain requested. Do not call simulated builds, tests, connections or releases real.

Use src/ for app and Convex source, ops/ for build configuration, runs/ for generated artifacts and QA. Framework-required hidden/config files and lockfile are permitted at root in addition to README.md, AGENTS.md, LOG.md, package.json. Preserve user files; no production deployment without approval.

Keep secrets out of client bundles, logs, commits and chat. Enforce ownership in every project backend operation. Preview code must be isolated from the host app and credentials. Check desktop/mobile UI and critical flows. No third-party UI actions without verification.
