# Architect 2.0 release handoff

The user approved public publication on 2026-10-06. The Architect prototype and repository are live. The recorded hosted Chrome/Edge department acceptance matrix passed; source/ZIP file-picker acceptance remains permission-blocked. Google OAuth is deferred in favor of real login ID/password accounts and shared department app data. Publishing and hiring-form submission are separate actions; no hiring submission is authorized or performed.

## Initial published release

- Canonical app: **https://architect-2-weld.vercel.app**
- Public repository: **https://github.com/rishimunikesarwani-hub/architect-2**, default branch `main`, release commit `4883145cd6dd2841c69940e7dfe022bf90693fd7`.
- Dedicated Vercel project: `architect-2` under `rishi-personal`; deployment `dpl_FcAHKcGmCmS1ukK6cnQsSFjpQwnc` reached **READY**. Deployment URL: https://architect-2-jo8szc60f-rishi-personal.vercel.app.
- Backend: the already-approved `dev:perceptive-ermine-27`; no Convex production deployment was created. Its `SITE_URL` was set and read back as `https://architect-2-weld.vercel.app`; readiness is `password: true, google: false`.

The [public release record](../evals/2026-10-06-public-release.md) records HTTP/assets checks, artifact hashes, public-repository verification and hosted form rendering for the initial publication. The release documentation and prototype drawing were subsequently aligned with the hosted status. Both architecture sets and the detailed Markdown explanation are in GitHub. The [earlier preflight](../evals/2026-10-05-release-preflight.md) remains a historical record of availability and credential checks before approval; its uncreated-resource state is superseded by this release.

## Release boundaries

`vercel.json` builds the existing Vite configuration and publishes `runs/dist`. The diagram sync script supplies relative static artifact paths. `.vercelignore` excludes environment files, dependencies and local run output; `.gitignore` excludes credentials. The reviewed release scan found only placeholder `.env.example` tracked, with no detected real credentials or private imports. This was a bounded heuristic check.

Only the public `VITE_CONVEX_URL` and `VITE_CONVEX_SITE_URL` belong in the frontend. `BETTER_AUTH_SECRET` stays on Convex. The backend trusts one canonical origin, now the hosted app; localhost is no longer the configured sign-in target. Do not copy credentials from another application. Google remains optional and deferred.

Generated-app builds, model calls, GitHub operations, tool connections and generated-app deployment remain labeled simulations. Publishing Architect itself does not make those services real. The signed-out browser-local demo is useful for reviewing those flows, but does not substitute for the requested real shared department data.

## Hosted acceptance and remaining limits

The [hosted department acceptance record](../evals/2026-10-06-hosted-department-acceptance.md) now verifies separate Chrome owner and Edge test-member sessions: same app/source, saved edits propagating without reload, exact-source persistence after reload, stale-draft preservation and explicit recovery, reactive Viewer controls, revoked access, grant restoration, owner session restoration and test-member sign-out/reload/sign-in. These are observed UI results alongside the earlier [15 live backend checks](../evals/2026-10-05-department-multiplayer.md).

Account creation was user-performed, not independently observed. Later file checks supersede the earlier inconclusive download watchers: the 5,415-byte JSON source export and 3,270-byte conflict-draft HTML file arrived and were verified by file hashes and content checks for the same synthetic QA app. Export source produces JSON; no ZIP export is claimed. The user's existing CRM project was preserved; the acceptance changes affected a separate synthetic QA app/workspace. [Supplemental verification](../evals/2026-10-06-supplemental-ui-verification.md).

Complete the source/ZIP file-picker journey when Chrome's file-URL permission allows it. The safe `data/import-demo.zip` retry on local port 5180 was still permission-blocked. The user was asked to enable the permission; no successful import is recorded yet. Parser tests passed previously and do not prove the browser import flow.

Other unobserved download formats and UI branches retain the limits in the [requirement audit](../evals/2026-10-05-requirement-audit.md). Report the exact live/repository links and these limits; stop before the separate hiring submission form.
