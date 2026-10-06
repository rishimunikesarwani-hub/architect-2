# Architect 2.0 feature coverage

> Current scope update (2026-10-06): the user deferred Google OAuth and chose real login ID/password accounts with shared department app data. The approved development backend passed 15/15 live API checks. The [public app and repository](../evals/2026-10-06-public-release.md) are published, and the recorded [hosted Chrome/Edge department matrix](../evals/2026-10-06-hosted-department-acceptance.md) passed sign-in/session, same-app editing, conflict recovery and reactive permission journeys. [Supplemental UI evidence](../evals/2026-10-06-supplemental-ui-verification.md) covers the mobile department dialog, design-reference simulation and Custom MCP simulation. The [hosted ZIP file-picker journey](../evals/2026-10-06-hosted-import-acceptance.md) subsequently passed for the two-file fixture: a new private Custom app retained exact imported files, a working preview and the saved source edit after reload. Earlier permission-blocked attempts remain historical. The older Google requirements and unverified checklist states below are historical, superseded by the password/department request and current [requirement audit](../evals/2026-10-05-requirement-audit.md).


Scope baseline: 2026-10-05. This is an implementation and review checklist, not an approved blueprint or a claim that the features below already work. The user explicitly said **skip blueprint**. Their supplied assignment prioritizes a complete UI/UX journey for both technical and nontechnical users and permits dummy feature flows. The original Google OAuth target was later deferred; real password authentication and shared department data on Convex supersede it. This inventory does not override that later decision.

## Evidence boundaries

| Evidence | What can be used | What it does not prove |
|---|---|---|
| User assignment screenshot, supplied in this thread | Prompt-build a whole agentic application; import and continue a project; choose any agent framework; connect GitHub; deploy; preserve current Architect features; add a developer experience. Dummy flows are acceptable. | No production-readiness, hosting, paid generation or exhaustive framework execution requirement. |
| [Official docs index](https://docs.architect.new/llms.txt), retrieved 2026-10-05 | A refreshed vendor-documented feature inventory. It includes planning, themes, data/auth, GitHub, artifacts, environment variables, GitAgent, sharing, tools and MCP. | Runtime success, this account's permissions/tier or complete coverage of undocumented UI. |
| [Build guide](https://docs.architect.new/build/build-guide), [database/auth](https://docs.architect.new/build/database-auth), [GitHub](https://docs.architect.new/build/github-connect), [deployment](https://docs.architect.new/build/deployment), [sharing](https://docs.architect.new/build/share-app), retrieved 2026-10-05 | Documented workflows used below. | No source-product app was built, imported, connected, shared or deployed in this audit. |
| Local feature matrix (historical local source: `Research_Data/2026-09-25-architect-feature-matrix.md`; outside this repository), report (historical local source: `Research_Data/2026-09-26-architect-product-report.md`; outside this repository), evidence ledger (historical local source: `Research_Data/2026-09-25-architect-evidence-ledger.md`; outside this repository) | Historical home/library/consultant observations and pointers to source material. | Not live verification; prior screenshots and documented Studio controls do not prove current Architect runtime behavior. |

The current docs index mentions GitAgent beta, artifacts, environment variables and v2.2 GitHub import/test-agent features. Their detailed pages were unavailable through the web reader during this audit; only their index summaries are established. Do not invent detailed parity claims for those surfaces.

The earlier `outputs/2026-10-05-architect-clone-preflight.md` required real model-backed generation. The later user-supplied assignment relaxes that requirement: a clearly labeled demonstration may cover generation, framework execution, GitHub and deployment. This earlier warning referred to the original Google/Convex target; the later explicit password/department scope is authoritative.

## Required journeys and review checkpoints

Routes below name navigable destinations; an equivalent selected panel or modal is acceptable if it has a stable entry, a clear return path and preserved project context. The rows preserve the initial, pre-implementation **unverified** inventory; they are not current verification statuses. Use the linked requirement audit and hosted evidence for current results.

| Destination | Required experience | Significant acceptance check |
|---|---|---|
| `/` home | Architect-like prompt composer, personal/shared/published project navigation, organization/account context, suggested starts, import entry and novice/developer preference. | Both audiences can start without visiting settings; empty prompt has inline guidance; changing audience never loses the prompt. |
| `/sign-in` | Google sign-in, authentication loading/error state, return to intended project, sign-out. Demo entry can coexist but must be identifiable. | Real sign-in redirects through Google; reload preserves the real session; sign-out closes private access; missing credentials are not presented as a successful login. |
| `/projects` | My, shared and published views, search, cards, rename, reopen and recoverable archive. | A newly created project appears with the correct title and route; reopen retains its state. Blank/loading/error states are useful. |
| `/new` or prompt entry | User prompt becomes an editable plan, agents, app preview and conversation; build progress and revisions have visible states. | A fresh prompt reaches a project, produces a coherent demonstration plan and preview, and a revision changes visible project state. Demo generation is labeled at the execution point. |
| `/import` | GitHub URL/repository choice and local project option; source summary; framework detection or choice; import progress; continue building. | Invalid URL/file gives a recoverable error. Imported project opens in the same workspace as a new one. A simulated import never claims repository files were actually fetched. |
| `/project/:id/plan` | Reviewable requirements, user journey, agents and tools, editable assumptions, Plan/Build control and approval-to-build flow. | Editing the plan updates persisted project state; returning from preview retains it; Plan mode does not imply a build already ran. |
| `/project/:id/agents` | Agent graph/list; role, goal, instructions, model, tools, knowledge and permission controls; framework selector and custom-framework route. | Novices get readable capabilities; developers can inspect configuration. Switching framework shows compatibility implications and preserves the app. |
| `/project/:id/preview` | App preview, device size, refresh/open, chat refinement, generation history and version selection. | Preview is usable on desktop and mobile; selected version and active project agree; changes do not silently affect another project. |
| `/project/:id/code` | File tree, source viewer/editor, changed files/diff, save state, terminal/run-output surface and download/export entry. | File selection works, a real local edit persists and preview behavior is clear; simulated terminal output is labeled; source code is not presented as a running backend. |
| `/project/:id/test` | Test-agent/run entry, normal/failure examples, observable tool-event timeline, results and retry. | Selected test changes the result view; simulated results say so. Show input, tool, result and errors without invented hidden reasoning. |
| `/project/:id/data` | Collections, document/schema inspection, authentication status and storage mode. | Real app metadata stored in Convex is distinguished from sample generated-app data. Reload persistence and owner authorization are verified independently. |
| `/project/:id/integrations` | Searchable connector catalog, tool permission setup, connect/disconnect, custom API and MCP form; credential/configuration status. | Connection flows include scope, connected/error state and disconnect. A demo connection never claims an external account was authorized. |
| `/project/:id/github` | App-source connection, repository/branch selection, initial sync, changed files, Pull/Push, conflict/error and disconnect. | Repository ownership and branch are visible. Source sync is separate from giving an agent GitHub tool access. Simulated sync cannot report a real commit SHA or remote push. |
| `/project/:id/deploy` | Review/configure, build/deploy progress, success/failure, URL/copy/open, redeploy, URL rename, domain/analytics/marketplace options. | Deployment is possible without GitHub per current index. Demo success opens a functioning local preview, labeled as such; no invented live external URL. |
| `/project/:id/settings` | Name, framework/runtime detail, environment-variable flow, access/sharing, history/restore and archive. | Secret inputs are masked and do not leak into preview/source/export. A restore previews its scope and does not imply database rollback. |
| `/library` and `/consultant` | Searchable prompt categories; template detail/use; guided role/problem/tools interview with suggested starts. | Selected prompt/idea carries into a new editable project; user can revise before building. |
| `/marketplace` | Discover/filter/detail/clone a sample app, with authorship and template identity. | Clone creates a separate project; it does not mutate the sample. |
| `/design-systems` | Theme presets, brand assets/instructions and import flow for Figma/PDF/GitHub/ZIP. | Applying a theme changes the app preview; unsupported or simulated imports clearly show what was processed. |
| `/usage` and `/settings` | Build/runtime usage breakdown, account/workspace preferences, support/help. | Seeded data is labeled sample; no fake billing/credit consumption. |

Additional parity destinations may be panels rather than extra top-level navigation: artifact generation/download in Build, GitAgent file-oriented configuration, app sharing, Studio handoff and integration categories. Studio handoff should either link to a configured agent identity or clearly describe a demo; never silently route to an unrelated real account.

## Developer additions that serve the assignment

- **One shared project, two levels of detail:** Build view foregrounds intent, agents and preview; Developer view adds files, configuration, diffs, logs and Git. Both edit the same project.
- **Framework portability as an explicit flow:** offer Lyzr, LangGraph, CrewAI, AutoGen and Custom entry points as design choices, with generated/configured files and an adapter contract. Selection alone does not establish executable support.
- **Import-to-first-change:** show source summary and assumptions, then guide the user to one concrete change, diff and preview. Avoid a standalone import form that never reaches the builder.
- **Inspectable agent behavior:** role/tool/knowledge settings and a bounded execution timeline let a developer debug while a business user can understand what happened.
- **Review before publish:** connect test summary, pending secrets/integrations and selected version to the deployment dialog without expanding into a production compliance program.

## Real integration evidence needed

| Target | Completion evidence |
|---|---|
| Google OAuth | Correct registered callback, successful provider round trip, real user/session, reload and sign-out checks, cancellation/error recovery. A configured button alone is insufficient. |
| Convex | Authenticated create/read/update and reopen after reload; owner-scoped access enforced by backend functions; unauthenticated and cross-user requests rejected; error state if unavailable. Browser storage alone is insufficient. |
| Configuration boundary | Required environment variable names and setup steps documented; no secrets in source, browser bundles, logs or exported project files; unconfigured local demo remains usable. |

## Highest-risk omissions to catch before handoff

1. A polished landing page with no continuous prompt → plan → agents → preview → deployment journey.
2. Developer mode that only changes a label; no import, code editing, framework detail, diffs or Git branch flow.
3. Happy-path mock buttons with no state transition, error recovery, persistence or return navigation.
4. A sign-in demo or browser storage described as working Google OAuth/Convex.
5. A deployment success message that points to an invented public URL, or external connectors reported as live when simulated.
6. Ignoring existing Architect parity: consultant/library/marketplace, design systems, data/auth, usage, sharing, tools/MCP, artifacts, env vars, tests and Studio/GitAgent entry.

Review at desktop and phone sizes; tab through primary actions and dialogs; verify dialog close/focus behavior; check overflow, contrast and empty/error states; record which integration checks actually ran. Completing this checklist establishes the assignment prototype's coverage, not production readiness or exhaustive source-product parity.
