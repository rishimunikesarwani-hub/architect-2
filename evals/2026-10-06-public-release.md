# Approved public release verification

Date: 2026-10-06. The user explicitly approved creating the dedicated public GitHub repository and Vercel project, publishing the reviewed prototype, and moving the development backend's canonical `SITE_URL` to the hosted origin. No hiring-form submission was authorized or performed.

## Initial publication snapshot

| Item | Verified state |
|---|---|
| Canonical app | https://architect-2-weld.vercel.app |
| Public repository | https://github.com/rishimunikesarwani-hub/architect-2; unauthenticated GitHub API returned `private: false`, `visibility: public`, default branch `main` |
| Published commit | `4883145cd6dd2841c69940e7dfe022bf90693fd7`, verified as public default-branch HEAD at inspection |
| Vercel | Project `architect-2`, scope `rishi-personal`; `dpl_FcAHKcGmCmS1ukK6cnQsSFjpQwnc` **READY** |
| Deployment URL | https://architect-2-jo8szc60f-rishi-personal.vercel.app |
| Backend | Existing `dev:perceptive-ermine-27`; main agent set and read back `SITE_URL=https://architect-2-weld.vercel.app`; readiness `password: true, google: false` |

This is a public frontend deployment connected to the approved development backend. It is not a Convex production deployment or implementation of the proposed production execution services.

The main agent also verified the repository's About homepage points to `https://architect-2-weld.vercel.app`.

## Independent unauthenticated HTTP checks of the initial release

All requests below returned **HTTP 200**. No browser account, session or credentials were used.

| Path | Response type | Bytes | Integrity |
|---|---|---:|---|
| `/` | `text/html` | 591 | Title: Architect — Build something that thinks. |
| `/assets/index-CGxWZQbs.js` | `application/javascript` | 425,808 | Asset referenced by the live index |
| `/assets/index-CfoPNfvj.css` | `text/css` | 43,277 | Asset referenced by the live index |
| `/engineering-drawing.svg` | `image/svg+xml` | 13,548 | Matches repository source |
| `/production-architecture.svg` | `image/svg+xml` | 24,109 | Matches repository source |
| `/arch-production-architecture.md` | `text/markdown` | 53,077 | Matches repository source |

The three artifacts matched the tracked local copies and the raw public GitHub copies at the exact initial published commit, by SHA-256. These hashes record that snapshot; the prototype drawing and production Markdown were subsequently updated with the hosted URL/status:

```text
engineering-drawing.svg          30a8763ff124028d13dd2969f98f9cf64126e7cf27eac0a1649c0c50d0482d10
production-architecture.svg      dbc9463a5eec200a866b289c778bfd5aaffe618aeca67dffbd1875c58f2a2a44
arch-production-architecture.md  7e24c4aa56c0336bfcd96cfedf1fc12f4ef5f44acc9a0b5e99254a02838040e6
```

Before the push, the independent release check confirmed clean HEAD `4883145`, 87 tracked files and 84 scanned text files. Only placeholder `.env.example` was tracked. No real credentials, private-key/token/JWT literals or private source imports were detected; credential-assignment matches were isolated test fixtures. The safe import ZIP contains only `index.html` and `README.md`; the tracked brief is a labeled project-derived sample. This was a bounded heuristic scan, not an exhaustive security guarantee.

## Hosted origin and browser evidence

The main agent verified the backend's `/api/auth/get-session` endpoint with `Origin: https://architect-2-weld.vercel.app`: OPTIONS returned **204**, the exact canonical `Access-Control-Allow-Origin`, and allowed headers `Content-Type, Better-Auth-Cookie, Authorization`. Anonymous GET returned **200**, JSON `null`, and the same exact allowed origin. This verifies hosted CORS/session endpoint configuration, not an authenticated login.

The main agent rendered the hosted homepage and sign-in/create-account forms. A local screenshot was saved at `runs/2026-10-06-published-home.jpg` (ignored generated evidence, not a public repository artifact). The create-account form was handed to the user for password entry under the browser credential-entry rule. Authenticated hosted sign-in, session restoration and cross-browser department UI acceptance remain pending; form rendering and HTTP success do not prove them.

The earlier [15/15 live development API checks](2026-10-05-department-backend-smoke.json) prove normal authentication and independent-client department access, not the pending hosted UI journey. Google remains deferred.

## Remaining import check

A new local import attempt at `http://127.0.0.1:5180` using `data/import-demo.zip` again failed because Chrome's extension file-URL permission was disabled. No browser security setting was bypassed. Source-import parser tests are separate evidence; the file-picker-to-project journey remains unverified. The earlier verified Markdown brief download does not prove ZIP or other downloads.

The public shipping requirement now has verified URLs and artifact integrity. Full acceptance still needs the authenticated hosted-browser journey and the permission-blocked import check; no additional production runtime implementation is inferred from these limits.
