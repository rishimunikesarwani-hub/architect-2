# Submission-readiness review — 7 October 2026

The candidate contains the descriptive folder refactor, working reviewer instructions, current/proposed architecture documents, and import/save fixes found during review. Automated and clean-source checks passed, and the changed local browser journeys below are now verified against code commit `628afb1e5191b547bac62cbd214116416e23304d`. Public release alignment remains pending. This is an assignment prototype, not a deployed production agent runtime.

## Candidate changes

- Reject duplicate ZIP entry names and case/slash/dot aliases before decompression can replace source.
- Measure the exact serialized `{source, color, state}` payload against the 550,000-byte client budget. Retain the newest checkpoints that fit, including none when current source needs the room. The 600,000-byte backend limit and schema are unchanged.
- Remove the separate 160 KB editor restriction. A normal 300,000-byte source import can be prepared, saved and edited; JSON-heavy source can still exceed the encoded budget and is rejected explicitly.
- Keep creation failures inside the import dialog with the selection and name retained. Gate restore/settings and other success states on an accepted change. A persistent banner explains when no source checkpoint is retained.
- Make hygiene checks work in extracted source archives without reading an ancestor repository's Git index. Preserve link checks and label the unavailable tracking check.
- Keep historical reports portable: ignored logs are described as local evidence paths, not broken downloadable links.
- Clarify production architecture scope and stable idempotency keys across retries. The proposal still covers all eight requested architecture categories.

## Automated evidence

The accepted `npm run eval` run is `generated-output/evaluations/2026-10-07T09-54-32-881Z-24188/` (local-only output). It passed:

| Check | Observed result |
|---|---|
| Immutable A | 93/93 passing cases |
| Current B | 102/102 passing cases |
| Baseline preservation | No removed or status-changed cases; nine additions pass |
| Additions | Four duplicate-ZIP regressions and five budget/source-fidelity cases |
| Types and builds | Both frontend/backend typechecks, asset sync and disconnected builds pass |
| Isolation guard | Explicit guard boot evidence from nine A and ten B Vitest workers; this is not an OS network sandbox |
| Snapshot integrity | Original 99-file baseline unchanged; 53 current app/test/lock files match evaluated B exactly |
| Emitted bundles | CSS unchanged; JavaScript intentionally differs because of the fixes |

The budget integration case imports exactly 300,000 UTF-8 bytes, prepares the payload, creates the app in an in-memory Convex fixture, saves a small edit and reads the exact source back. A separate escape-heavy case checks explicit client rejection and atomic backend denial. These establish code behavior, not a live file-chooser or account journey.

A duplicate root evaluation was interrupted when the delegated run was discovered active. Its incomplete `2026-10-07T09-54-42-941Z-26620` directory is retained and is not acceptance evidence. No performance comparison is claimed.

## Clean source verification

The 108-file sanitized candidate at `generated-output/release-audit/2026-10-07T09-59-14-228Z/` passed a fresh `npm ci` using its own dependencies and cache, followed by `npm run check`: 97/97 tests in nine files, both typechecks, hygiene and the website build. It has no `.git` or local environment values. The lockfile stayed unchanged. The first install attempt failed because the verification wrapper supplied one file for two npm configuration roles; using two distinct empty config files fixed that harness error. It was not an application failure.

## Changed local browser journeys

Browser control recovered after the earlier connection failures. These checks used disconnected local QA projects, with code unchanged at `628afb1e5191b547bac62cbd214116416e23304d`; no live database writes were made.

| Check | Observed result |
|---|---|
| Escape-heavy 300,000-byte import | The inline serialized-budget alert appeared while the project name, framework and selected file remained available for recovery. |
| Duplicate ZIP and recovery | The duplicate-entry alert cleared the invalid file selection and disabled Import. Selecting valid source again recovered the flow. |
| Normal large-source import | A fresh QA project imported `fixtures/large/index.html`, exactly 300,000 characters/bytes. The complete editor value matched the fixture. |
| Edit, save and reopen | Changed the heading from ready to saved without changing the 300,000-byte length. Save succeeded; reload/reopen returned the exact expected full source, and the iframe displayed `Large import saved`. |
| History limit explained | Version history showed the correct empty-checkpoint explanation for the large source. Escape closed the dialog, including in the phone check. |
| Phone readability | At a measured 391 × 844 viewport, document/body widths were 391 with no horizontal overflow. After hiding the conversation, the history-budget notice and Export source control were readable. The viewport was restored to 1576 × 887. |
| Captured console messages | Only a browser-extension warning was captured; no application warnings or errors were captured. This is bounded observation, not an exhaustive logging claim. |

Local proof screenshots are `large-import-desktop.jpg` and `large-import-phone-preview.jpg`; they remain local artifacts rather than links to ignored files in this report.

The optional quote-heavy **editor** rejection follow-up remains unverified in the browser: automation lost its connection while filling the draft. Existing state was preserved, and the automated rejection checks passed. This does not negate the completed escape-heavy **import** rejection or normal large-source edit/save/reload checks. Earlier browser connection failures remain historical attempts, not application failures.

## Public release alignment still pending

The remote main branch was last checked at `78e1cd78e483de7e214bbef94392eedad2871d8b`; the local code candidate is `628afb1e5191b547bac62cbd214116416e23304d`. The candidate changes have not yet been published. Documentation commit, push/deployment and post-release verification remain separate steps; this record does not claim they have occurred.

The hosted app was inspected earlier in this review with the existing owner session. The synthetic imported QA app loaded its saved heading and two-file project. The owner's CRM was left untouched. Earlier two-browser permission evidence remains in the [hosted department record](2026-10-06-hosted-department-acceptance.md), with its original date and scope.

Both architecture PNGs were visually inspected. Their SVG/PNG source and served-copy consistency was checked. The supplied payment-status brief and immutable pre-refactor backup remain unchanged. A bounded credential-pattern scan of 105 authored/config files found no matches or unexpected environment files; it is not a guarantee against every possible secret.

## Review scope

Use the [reviewer guide](../documentation/guide-submission.md) for the live/source links, architecture attachments and demo route. The working prototype includes real login IDs, shared saved projects, department access and revision checks on the dedicated development backend. Generation, model/framework execution, external tools, GitHub operations and generated-app deployment remain simulations. Google is deferred. Production scale figures are design assumptions.

No schema/backend deployment, permission change, personal-data upload or hiring-form submission was performed by this review.
