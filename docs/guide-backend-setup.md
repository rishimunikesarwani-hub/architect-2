# Login ID, departments and Convex setup

The user deferred Google OAuth and explicitly chose real login ID/password accounts sharing one app across departments. The new implementation is complete in local source. The dedicated development deployment still runs the earlier backend until the additive schema/code update is approved. This document does not claim live password authentication or cross-browser persistence has passed.

## Development target

- Project: architect-2; deployment: perceptive-ermine-27.
- [Development dashboard](https://dashboard.convex.dev/t/rishi-muni-kesarwani/architect-2/perceptive-ermine-27).
- API: https://perceptive-ermine-27.convex.cloud
- Authentication: https://perceptive-ermine-27.convex.site
- Trusted local app origin: http://localhost:5177 (use localhost, not 127.0.0.1).

The existing BETTER_AUTH_SECRET and SITE_URL remain on this dedicated deployment. No additional Google credentials, Google project or payment setup is required for password sign-in. Never place a secret in VITE_* variables, source, chat, project files or Git.

## Concrete database update awaiting approval

Add workspaces, departments, workspaceMembers, projectGrants and projectCatalog tables. Add optional workspaceId, revision and catalogued fields plus indexes to existing projects. Existing project documents and owner identities are preserved; old projects remain private until their owner explicitly attaches them to a workspace.

Deploy local functions and schema to the named development deployment only. Then run the internal catalog:backfillLegacy operation in batches of at most five projects until it returns done:true. This adds metadata records for efficient project cards; it does not change source files, ownership or access. The migration is not scheduled automatically. Until complete, a bounded compatibility fallback shows at most five legacy projects per owner.

Local review commands:

```powershell
npm test
npm run build
npx tsc --project src/convex/tsconfig.json --noEmit
```

Only after approval, verify the deployment selector names architect-2/perceptive-ermine-27 before using the existing Convex development workflow. Do not use convex deploy or a production deployment. Do not expose configuration secrets in verification output.

## Account and department flow after activation

1. Open Sign in > Create account. Each person chooses their own login ID and password, display name and email. Login IDs are 3-40 letters, numbers, dots or underscores, normalized to lowercase; passwords are 12-128 characters. Existing Google accounts are not silently linked to password accounts.
2. The owner opens Settings > Manage departments, creates a workspace, then departments such as Support and Finance.
3. Teammates create their own accounts. The owner assigns each exact existing login ID to one department in that workspace. There is no invitation email and users cannot choose their own privileged department.
4. The owner opens an owned app > Share, attaches it to the workspace, and grants Viewer or Editor access to each department.
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

## Acceptance still required after the update

Two independent authenticated browser sessions must open the same app ID, observe an editor save, deny a viewer edit through the API, reject a stale save, preserve its draft, retain data after reload/sign-out/in, and lose access after revocation. Verify an unrelated account sees no project. In-memory tests cover these backend policies and actual Better Auth signup/password endpoints; they do not prove a deployed browser round trip.

## Historical deployment evidence and optional Google

The earlier owner-only development backend was deployed and checked for anonymous-access denial and the correct localhost CORS origin. Its Google readiness was false. Google setup was later deferred by the user; it is no longer the active blocker.

Optional future Google configuration uses the callback https://perceptive-ermine-27.convex.site/api/auth/callback/google and server-only GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET. Do not configure it as a prerequisite for this department-login work.

Better Auth1.6.33 and the Convex Better Auth component0.12.5 are pinned. src/lib/backend-provider.tsx has a documented declaration-only type bridge for the official provider; runtime authentication still uses that provider. See the source tests and current [verification record](../evals/2026-10-05-department-multiplayer.md) for the exact evidence boundary.
