# Architect 2.0 release handoff

> Current scope update (2026-10-05): the user deferred Google OAuth and explicitly chose real login ID/password accounts with shared department app data. This supersedes the older Google-blocked and owner-only statements below. The approved development schema/functions are deployed; all 15 live authentication and department API checks passed across independent accounts. Authenticated cross-browser UI acceptance and public release remain pending. See [department verification](../evals/2026-10-05-department-multiplayer.md) and [current backend setup](guide-backend-setup.md). Historical browser evidence below stays historical.


The complete hiring brief requests a live app URL, a GitHub repository, an architecture diagram and an accompanying Markdown explanation. Publishing and assignment submission are separate actions. The user requires approval before a production deployment; no submission is authorized.

## Prepared locally

- `vercel.json` builds this project's existing Vite configuration with `npm run build` and publishes `runs/dist`.
- `.vercelignore` excludes local environment files, installed dependencies and local run output from the upload. `.gitignore` excludes credentials from the repository.
- The site uses relative static asset paths. The diagram sync script copies deliverable SVG files into the public directory before each build.
- The signed-out demo can run without any backend environment variables. It keeps projects in that browser and labels external actions as simulations.

## Concrete approval scope when checks pass

Proposed new repository: `rishimunikesarwani-hub/architect-2`, public, containing the prototype source, tests, architecture drawings and explanation.

Proposed new Vercel project: `architect-2`, deployed independently from the existing portfolio. Publish the reviewed prototype with the approved department backend connected after development acceptance passes. A disconnected demo remains an explicit fallback preview; it does not satisfy the user's real shared-data requirement. Do not modify another Vercel project, deploy a Convex production backend, or submit the hiring form.

Verify both names are available before publishing; no remote repository or hosting project has yet been created by this handoff.

The [2026-10-05 read-only preflight](../evals/2026-10-05-release-preflight.md) checked both names, the selected Vercel scope, tracked files/history and the current authentication origin. It found no existing repository/project with these names at inspection time. Recheck immediately before publication; the required origin switch is part of the approval scope.

## Authentication for a hosted app

The current Convex development backend trusts `http://localhost:5177`. A hosted site's exact HTTPS origin must be deliberately configured as SITE_URL before offering live login there. The current code trusts one canonical origin; switching it to the hosted origin also requires updating the browser acceptance target. Do not copy credentials from another application or set the client secret in a Vite/browser environment variable.

Do not label a public release as working department multiplayer until the exact hosted origin and the real login-ID/password round trip are configured and tested. Only the public VITE_CONVEX_URL and VITE_CONVEX_SITE_URL values belong in the frontend build. BETTER_AUTH_SECRET stays on Convex. Google is optional and deferred. If enabled later, its OAuth callback remains on the selected Convex HTTP deployment; the frontend return URL and allowed origin change with the chosen site. Follow `guide-backend-setup.md` for the current local flow, then document the approved hosted origin and repeat the same acceptance checks.

## Release verification

1. Run the build and automated checks after implementation changes finish.
2. Inspect desktop/mobile flows and both rendered architecture drawings.
3. Confirm tracked/uploaded files contain no credentials or private source imports; publish only this dedicated project.
4. After publication, open the live URL in a fresh browser tab. Verify start, edit, preview, reload and the architecture links. Repeat the two-account department test at this exact origin: same app ID, editor update visibility, viewer denial, conflict preservation and revocation. Verify GitHub includes both diagram versions and the readable Markdown explanation.
5. Report the exact public URLs and integration limits. Stop before the separate hiring submission form.
