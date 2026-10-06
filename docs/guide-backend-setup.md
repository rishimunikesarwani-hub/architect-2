# Login ID, departments and Convex setup

The user deferred Google OAuth and explicitly chose real login ID/password accounts sharing one app across departments. The user-approved schema/functions update was deployed to `dev:perceptive-ermine-27` on 2026-10-05 at 22:44 IST. Normal signup/username sign-in and independent-client department API checks passed **15/15** against that live development backend. On 2026-10-06, [hosted Chrome/Edge acceptance](../evals/2026-10-06-hosted-department-acceptance.md) verified independent owner/member sessions, shared source updates, reloads, Viewer restrictions, conflict recovery, revocation and normal sign-out/sign-in. Account creation was performed by the user; no password was captured.

## Development target

- Project: architect-2; deployment: perceptive-ermine-27.
- [Development dashboard](https://dashboard.convex.dev/t/rishi-muni-kesarwani/architect-2/perceptive-ermine-27).
- API: https://perceptive-ermine-27.convex.cloud
- Authentication: https://perceptive-ermine-27.convex.site
- Trusted app origin: https://architect-2-weld.vercel.app (configured with publication approval on 2026-10-06).

The existing BETTER_AUTH_SECRET remains on this dedicated deployment. SITE_URL now points at the canonical hosted app; the current single-origin configuration no longer trusts localhost or other Vercel preview aliases. Hosted sessions start with a fresh sign-in. No additional Google credentials, Google project or payment setup is required for password sign-in. Never place a secret in VITE_* variables, source, chat, project files or Git.

## Development update applied

The additive update introduced workspaces, departments, workspaceMembers, projectGrants and projectCatalog tables, plus optional workspaceId, revision and catalogued fields and indexes on existing projects. Existing project documents and owner identities are preserved; old projects remain private until their owner explicitly attaches them to a workspace.

The approved development command was `convex dev --once --typecheck enable`. The subsequent internal `catalog:backfillLegacy` operation completed with `done: true, migrated: 0`; no legacy records required migration. Backfill adds metadata records for efficient project cards without changing source files, ownership or access, and is not scheduled automatically. Future legacy backfills remain bounded to five projects per call.

Local review commands:

```powershell
npm test
npm run build
npx tsc --project src/convex/tsconfig.json --noEmit
```

Only the dedicated development backend target was updated; no `convex deploy` was run. On 2026-10-06, public frontend/repository publication completed with the user's approval while retaining this development backend. See [public release evidence](../evals/2026-10-06-public-release.md). Hiring submission remains unperformed. Preserve the named deployment selector and keep configuration secrets out of verification output.

## Account and department flow

1. Open https://architect-2-weld.vercel.app > Sign in > Create account. Each person chooses their own login ID and password, display name and email. Login IDs are 3-40 letters, numbers, dots or underscores, normalized to lowercase; passwords are 12-128 characters. Existing Google accounts are not silently linked to password accounts.
2. The owner opens Settings > Manage departments, creates a workspace, then departments such as Support and Finance.
3. Teammates create their own accounts. The owner assigns each exact existing login ID to one department in that workspace. There is no invitation email and users cannot choose their own privileged department.
4. The owner opens an owned app > Manage access, attaches it to the workspace, and grants Viewer or Editor access to each department.
5. Teammates sign in from a separate browser or device and open My projects > Shared with me. The app has the same project ID and saved source for every authorized department; it is not cloned.
6. Viewers inspect/export; editors save. Only the owner/admin changes grants. Revoking a membership or grant removes server access immediately on subsequent checks and reactive subscriptions.

Email ownership verification, password-reset delivery, MFA, invitations and production account administration are not configured. Use synthetic test data for this development acceptance run. Never share passwords in chat.

## Conflict behavior

Each update includes the revision from the content being edited. The backend atomically rejects a stale revision. The client stops later queued writes for that app, preserves the draft in the current tab and offers Keep draft as private copy; it never retries a conflict against a newer revision automatically. A network-error retry keeps its original revision. Manual source edits also retain their starting file content and cannot silently overwrite a changed remote file.

Pending drafts are retained in memory under their originating account while this tab stays open; they are not written to guest localStorage. Closing/reloading can lose unsaved drafts, so browser leave warnings and export/recovery controls matter. This is conflict-safe saving, not character-by-character co-editing, comments or collaborator cursors.

## Backend contract

- auth:readiness returns password and google capability booleans, no secrets. getCurrentUser includes id, loginId, name, email and image.
- projects:list returns up to 100 authorized metadata cards without source state. projects:watch reads one full app reactively and returns null when unavailable. projects:get preserves strict authorization errors.
- projects:create derives ownerId from the validated session. Optional workspaceId requires administrator access.
- projects:update requires expectedRevision and returns id/revision; a stale write returns REVISION_CONFLICT. Viewer writes are denied on the server.
- projects:archive preserves the project document and removes its department grants. It is restricted to owner/admin.
- teams:listWorkspaces and teams:details provide authorized workspace information; details is admin-only. createDepartment, setMember, attachProject and project-grant operations validate actor and workspace boundaries.

Permissions are stored outside editable stateJson. The state budget is 600KB UTF-8; credentials must never be included. Catalog metadata is synchronized atomically with project changes. Limits are 20 owned workspaces, 20 memberships per account, 100 departments/members/shared apps per workspace and 1,000 grants per workspace. These are prototype bounds, not production scalability evidence.

## Verified development checks and hosted UI acceptance

The [live smoke report](../evals/2026-10-05-department-backend-smoke.json) records **15/15 passed checks** against the deployed development service. Four synthetic accounts used normal Better Auth signup and username sign-in, followed by independent Convex clients. Those clients verified the same app ID/source across departments, editor updates visible to owner/viewer, viewer write/grant denial, unrelated-account and anonymous isolation, stale-save rejection, immediate grant revocation, wrong-password rejection, and normal logout invalidating the prior JWT. Synthetic QA accounts, the workspace and the app were retained; no user data was deleted.

Readiness is `password: true, google: false`. DOM checks in the local browser at http://localhost:5177 confirmed **Ready to sign in** for password authentication; account forms are no longer gated by a backend-update notice, and the sampled application error log was empty. Screenshot-service attempts timed out, so no screenshot proof is claimed. The account form was handed to the user for password entry. This is readiness/UI-entry proof, not a completed authenticated browser round trip.

The subsequent hosted acceptance used an owner in Chrome and a separate member in Edge. A dedicated synthetic workspace/app verified department creation, assignment, Viewer/Editor grants, exact shared-source equality, reactive editor changes, persistence after reopening/reloading, source-conflict preservation and explicit recovery, live Viewer restrictions, revocation removing an open app, restored access, and logout/reload/sign-in. The owner's existing CRM project was not changed. Browser evidence is recorded separately from the API checks in [the hosted acceptance report](../evals/2026-10-06-hosted-department-acceptance.md).

Source-file import remains blocked by the browser extension's file-URL permission. Draft-download arrival was not established. Those limitations do not undo the observed authentication and shared-data behavior, and are not claimed as passed.

## Historical deployment evidence and optional Google

The earlier owner-only development backend was deployed and checked for anonymous-access denial and the correct localhost CORS origin. Its Google readiness was false. Google setup was later deferred by the user; it is no longer the active blocker.

Optional future Google configuration uses the callback https://perceptive-ermine-27.convex.site/api/auth/callback/google and server-only GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET. Do not configure it as a prerequisite for this department-login work.

Better Auth1.6.33 and the Convex Better Auth component0.12.5 are pinned. src/lib/backend-provider.tsx has a documented declaration-only type bridge for the official provider; runtime authentication still uses that provider. See the source tests and current [verification record](../evals/2026-10-05-department-multiplayer.md) for the exact evidence boundary.
