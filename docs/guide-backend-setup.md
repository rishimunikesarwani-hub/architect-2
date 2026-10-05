# Convex database and Google sign-in

The dedicated **Architect 2.0 development backend is running** on Convex. It is separate from the user's other projects. Google OAuth is implemented but **not configured or verified with a real Google account yet**. The user requested guided setup after the prototype is ready.

## Current development deployment

- Project: `architect-2`
- [Development dashboard](https://dashboard.convex.dev/t/rishi-muni-kesarwani/architect-2/perceptive-ermine-27)
- API: `https://perceptive-ermine-27.convex.cloud`
- Auth HTTP base: `https://perceptive-ermine-27.convex.site`
- Local app origin: `http://localhost:5177`
- Google redirect URI: `https://perceptive-ermine-27.convex.site/api/auth/callback/google`

`.env.local` contains only the development deployment selector and public frontend URLs. It is ignored by git. `BETTER_AUTH_SECRET` and `SITE_URL` are already set on the Convex deployment. The generated auth secret was sent through standard input and not printed. Google credentials have not been copied from any other app.

## Guided Google setup — first action

Open [Google Auth Platform → Clients](https://console.cloud.google.com/auth/clients) and select or create a dedicated Google Cloud project for Architect 2.0. Configure its consent-screen branding and audience if prompted. Create an OAuth client of type **Web application**.

Add these values:

| Google setting | Value |
| --- | --- |
| Authorized JavaScript origin | `http://localhost:5177` |
| Authorized redirect URI | `https://perceptive-ermine-27.convex.site/api/auth/callback/google` |

If the Google consent screen is in testing mode, add your Google account as an allowed test user. In the Architect 2.0 **development** Convex dashboard, open Settings → Environment Variables and add `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`. Keep the client secret in that dashboard; do not paste it into chat, source code, any `VITE_*` variable, or a project workspace.

Reload the local app. The public capability query `auth:readiness` becomes `{ "google": true }` only when the provider credentials and auth secret are present. This indicates configuration presence, not a successful Google exchange. Complete “Continue with Google” and verify the account returns to the app.

Use **localhost** consistently. The trusted origin is `http://localhost:5177`; opening the app at `http://127.0.0.1:5177` changes its browser origin and is not the configured sign-in origin.

## Persistence acceptance check after sign-in

1. Create a cloud project and change a file, an agent instruction, and a message.
2. Reload the app, then sign out and back in; the project and edits must remain.
3. Sign in with a second test account; the first account's projects must not appear.
4. Backend API/test check: archive an owned project through `projects:archive`. Its database document remains recoverable with `archived: true`, while ordinary project APIs hide it. The prototype has no frontend archive control.

Demo projects remain in local browser storage. Signing in opens a separate cloud workspace; there is no demo-to-cloud migration control. Create cloud projects separately after signing in. A demo state, GitHub connection, build result, or deployment simulation is not proof of a live external integration.

## Backend contract

- `auth:readiness` is public and returns `{ google: boolean }` without exposing secrets.
- `auth:getCurrentUser` returns `{ id, name, email, image }` for a validated session, otherwise `null`.
- `projects:list` returns up to 100 unarchived projects for the session owner, newest first.
- `projects:create({title, description, framework, stateJson?})` returns the new Convex project ID.
- `projects:get({id})` returns an unarchived project only to its owner.
- `projects:update({id, title?, description?, framework?, stage?, stateJson?})` updates an owned project.
- `projects:archive({id})` marks an owned project archived without deleting it.

The owner ID comes from the server-validated Better Auth session and is never accepted as an input. Every read and write enforces it. `stateJson` stores the frontend `{source, color, state}` envelope, with a 600 KB UTF-8 size limit. It carries code files, messages, settings, version history, and explicitly simulated connection/deployment metadata. Do not store credentials in it. The `deployed` stage is a UX state; it does not itself publish an app.

## Local commands

From the project root:

```powershell
npm install
npm run dev
# Sync backend source changes to this development deployment:
npm run backend
# Check backend types independently:
npx tsc --project src/convex/tsconfig.json --noEmit
# Run the ownership/persistence checks:
npm test -- tests/backend-projects.test.ts
```

No production deployment has been performed. Do not run `convex deploy` or repoint `.env.local` at a production deployment without approval.

## Dependency compatibility

Better Auth is pinned to `1.6.33` with Convex Better Auth component `0.12.5`. This keeps the current supported 1.6 patch fixes. The component's published React `AuthClient` declaration resolves session data to `never` with patched 1.6 versions. `src/lib/backend-provider.tsx` contains one documented type bridge at that library boundary, preceded by a structural `satisfies` check of every method the provider actually calls. Runtime behavior stays with the official provider; the rest of the app retains the correctly inferred auth client types. Remove the bridge when an upstream component update fixes the declaration. The frontend build, backend typecheck, and seven backend tests pass; dependency audit reports zero known vulnerabilities.

## Verification boundaries

Verified on 2026-10-05: development functions and Better Auth component deployed; backend TypeScript check passed; live unauthenticated project list rejected; live auth session endpoint returned `null` with the expected localhost CORS origin. Google readiness is `false` because Google credentials are missing. Ownership, session expiry, workspace persistence, input bounds, and recoverable archival are covered by in-memory `convex-test` tests; those tests do not create auth bypasses in the deployed app. Real Google login and a browser-to-cloud saved-project round trip remain pending guided credential setup.

## Official references

- [Convex + Better Auth React integration](https://labs.convex.dev/better-auth/framework-guides/react)
- [Convex + Better Auth authorization](https://labs.convex.dev/better-auth/basic-usage/authorization)
- [Better Auth Google provider](https://better-auth.com/docs/authentication/google)
- [Convex test library](https://docs.convex.dev/testing/convex-test)
