# Architect 2.0 release handoff

The user approved public publication on 2026-10-06. The Architect prototype and repository are now live; authenticated hosted-browser acceptance remains pending. Google OAuth is deferred in favor of real login ID/password accounts and shared department app data. Publishing and hiring-form submission are separate actions; no hiring submission is authorized or performed.

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

## Remaining acceptance

1. Complete hosted login ID/password sign-up/sign-in and session restoration. The main agent rendered the homepage and account forms, then handed the create-account form to the user for password entry. No authenticated hosted-browser result is claimed.
2. Verify shared-app behavior in independent browser sessions at the canonical origin: same app ID, editor propagation, Viewer denial, stale-conflict preservation and revocation. The [15 live backend checks](../evals/2026-10-05-department-multiplayer.md) remain API evidence, not this UI acceptance.
3. Complete the source/ZIP file-picker journey when Chrome's file-URL permission allows it. The safe `data/import-demo.zip` retry on local port 5180 was still permission-blocked. Parser tests passed previously; this does not prove the browser import flow.

Other unobserved download formats and UI branches retain the limits in the [requirement audit](../evals/2026-10-05-requirement-audit.md). Report the exact live/repository links and these limits; stop before the separate hiring submission form.
