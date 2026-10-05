# Public release preflight

Read-only audit on 2026-10-05, before publication. Snapshot commit: `f0975f1`; subsequent local mobile CSS/evidence changes are recorded separately. The full goal still requires a live app and repository. No publication or hiring submission occurred in this audit.

- Git had no remote. Authenticated GitHub account: `rishimunikesarwani-hub`; the exact proposed repository `rishimunikesarwani-hub/architect-2` returned 404 at the time of inspection.
- Vercel scope: `rishi-personal`; its project list contained `rishi-ships-every-day` and `alars`, with no `architect-2` project. Those existing projects are outside this release's scope.
- The snapshot tracked 85 files. Only placeholder `.env.example` was tracked; no environment/key files were found in its four-commit history. Bounded credential-pattern scans of 82 current text files and 117 reachable historical text blobs found no matches. This is a heuristic check, not an exhaustive security guarantee.
- The small import-fixture ZIP contains only `index.html` and `README.md`.
- A read-only Convex environment query confirmed the current authentication origin is `http://localhost:5177`.
- Vercel's upload dry-run requires a linked/existing project. No project was created or linked, so exact upload inspection remains pending.

## Concrete publication scope requiring approval

Create a public GitHub repository named `rishimunikesarwani-hub/architect-2` and a separate Vercel project named `architect-2` under `rishi-personal`. Publish this reviewed prototype and its architecture artifacts. Configure the frontend with only the public Convex API and HTTP URLs for the already-approved development deployment. Keep the Better Auth secret on Convex.

After Vercel assigns the actual canonical HTTPS origin, update the development backend's `SITE_URL` to that origin and run hosted sign-in/shared-app acceptance there. The present implementation trusts one canonical origin: that change moves normal login away from localhost and must be included in the publication approval. Recheck name availability immediately before creating resources.

This scope does not include a Convex production deployment, changes to the existing portfolio or alars sites, real model/runtime services, or hiring-form submission. See [the release guide](../docs/guide-release.md) for remaining acceptance and the intended verification order.
