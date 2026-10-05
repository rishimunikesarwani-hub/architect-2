# Department multiplayer verification

Date: 2026-10-05. Scope: real login ID/password accounts and the same app shared through department permissions. Google deferred by explicit user direction; blueprint remains skipped.

## Local implementation checks

- Full automated suite: 88 tests passed across eight files. Covers actual Better Auth signup and password endpoints in an in-memory Convex component, wrong-password rejection, hashed credentials, session expiry, owner/department boundaries, viewer write denial, Editor saves, revocation, revision conflicts, catalog/backfill compatibility and archived-grant cleanup.
- Save queue tests cover revision chaining, independent projects, stale clean drafts, remote updates during pending saves, blocked writes, explicit retry, held draft restoration and account-reset isolation.
- Shared-state parser tests reject malformed and partial state before rendering, preserving the original JSON for download. Card reconciliation tests preserve full source at matching revisions, invalidate stale clean source, apply permission changes and remove revoked apps.
- Frontend production build and independent backend TypeScript checks passed. No dependency or credential changes were required.
- Architecture Markdown/SVG/PNG updated and rendered. New source remains explicitly distinguished from the older deployed backend and from proposed agent-runtime/registry capabilities.

## Browser checks before activation

- At http://localhost:5177, desktop login-ID and registration dialogs render with exact account fields. Users cannot self-select a privileged department. Submit remains disabled with the accurate backend-update notice.
- Measured mobile viewport: innerWidth390, innerHeight844. Registration dialog bounds x12, right348.62, top12, bottom832.31; document scrollWidth360. Form remains in a scrollable dialog and does not overflow horizontally. Viewport override was reset after checks.
- Opened the existing Payment status workflow - review demo. Typed a temporary source comment, tried Home, observed the save/discard navigation guard, then discarded the draft and verified source exactly matched its pre-test value. No source change was saved by this check.
- Final sampled application error log was empty. Existing browser-local project data remained available.

## Activation awaiting approval

Prepared additive schema: workspaces, departments, workspaceMembers, projectGrants, projectCatalog; optional project workspaceId/revision/catalogued fields and indexes. Target: architect-2 development deployment perceptive-ermine-27. Apply the schema/functions, then run internal catalog:backfillLegacy in five-project batches until done. This preserves existing project source and owner identity; it does not grant department access automatically.

No updated schema/functions, real account signup, live membership/grant, public hosting/repository publication or production deployment was performed in this step. In-memory test credentials are synthetic and never become deployed auth bypasses.

## Live acceptance still pending

Two independent sessions must exercise account creation/login, the same shared project ID, cross-session update visibility, reload persistence, viewer denial, stale-write rejection/recovery, unrelated-account isolation and revocation. Backend tests are not substituted for this browser proof. Department-management screens are compile/static-reviewed but not yet verified against the activated live backend. Email verification, password-reset delivery, MFA and true simultaneous text co-editing remain outside this implementation.
