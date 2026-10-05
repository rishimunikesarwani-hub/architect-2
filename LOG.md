# Build log

## 2026-10-05

- User supplied Architect 2.0 assignment: prioritize complete UI/UX for technical and nontechnical users; simulated feature flows allowed; basic auth/database functionality is a plus.
- User explicitly said `skip blueprint`.
- Started new isolated project; existing tetier-convex backend is unrelated and must not be modified.
- Google OAuth and Convex persistence remain real-integration targets from original request. No production deployment approved.
- Built the React prototype with Guided/Developer views, editable source, isolated HTML preview, bounded version history, source/ZIP import and export, and labeled GitHub/tool/test/deployment simulations.
- Added a department-owned shared-agent library demo with request/approve/version-specific access, contract samples and project reuse. Real shared memberships, concurrent editing and runtime authorization are proposed architecture, not implemented services.
- Deployed an isolated Convex development backend (`perceptive-ermine-27`) with Better Auth wiring, server-derived project ownership and persistence. Google credentials remain absent; the user requested guided setup after prototype completion.
- Build and 19 automated tests passed. Desktop and mobile browser journeys, source-edit preview, local reload persistence, simulated deployment, and Support-to-Finance agent reuse were verified. Browser console contained no application errors at the last check.
- Chrome extension permissions blocked the automated upload picker. Import parser tests passed, but browser upload completion remains unverified. See the browser verification record.
- Delivered an engineering drawing in editable Mermaid, SVG and rendered PNG, separating implemented services, simulations, pending Google configuration and proposed multiplayer services. No production deployment was performed.

### Final automated release checks

- After the implementation agents stopped, independent verification reran `npm test`: 19 tests passed across 3 files (backend project access, import boundaries and sample preview behavior).
- `npm run build` passed frontend TypeScript checking, diagram synchronization and the Vite production bundle build. Output is `runs/dist`; this does not prove browser behavior for every newly added flow.
- Refreshed source coverage for agent knowledge/individual fixtures, collection/schema metadata, generated-app authentication simulation, custom HTTP tool definition and guided failed-check repair. The requirement audit retains browser-unverified labels until the main agent records matching UI results.
- Production Markdown/SVG and prototype SVG copies in both `src/public` and `runs/dist` matched their documentation sources by SHA-256 after the build. No `.env*` file was present in the built output.
- Reviewed `.gitignore`, `.vercelignore` and the release guide. Local environment files, Convex local state and run output are excluded; `.env.example` is intentionally available for source handoff. A bounded common-token/private-key pattern scan found no matches in candidate project text; it is not a comprehensive secret audit.
- The release guide keeps the first hosted demo disconnected from the backend until its exact HTTPS origin and real Google sign-in are tested. Public deployment/repository publication still need approval, and hiring-form submission remains unperformed. No deployment, push or remote repository creation was performed by these checks.

### Final browser evidence recorded from the main agent

- Verified saved plan editing/approval with a separate explicit build action; changing to Custom preserved source and returned the plan to draft. Marketplace cloning retained sample origin metadata and the selected CrewAI framework.
- Verified the shared-project viewer/request simulation, illustrative per-app usage, Cobalt design persistence and actual preview button color `rgb(71, 100, 173)`, two saved artifact files, GitAgent handoff, and a Studio role change to the same agent with the two-agent count preserved.
- Verified fictional GitHub push/conflict/keep-local/completion, a persisted simulated Editor invitation, and domain/analytics/listing review through completed deployment simulation. No remote write, email, DNS change or public deployment occurred.
- Verified Reviewer knowledge reference and individual fixture, `release_reviews` collection metadata, generated-app Email/Google settings and custom HTTP-tool source definition after reload. The tool used only `PAYMENT_API_KEY` as a variable name; its review explicitly said NOT SENT.
- Verified a real blank-entry-point edit produced a 3/4 source-check failure, the fix action opened the editor, and manually restoring the exact HTML followed by rerunning produced 4/4.
- Verified the disconnected demo build at 127.0.0.1:5180: disabled Google button/setup notice and prompt-to-preview flow; no application console errors, with an extension warning kept separate.
- Final added-modal mobile validation remained unverified because the viewport override did not reach mobile width; it was reset. Earlier 390-pixel results apply only to the earlier core workspace. Download arrival remains unconfirmed and the upload picker remains permission-blocked. Real Google/cloud browser verification and public release remain pending. Full evidence is in `evals/2026-10-05-parity-verification.md`.

### Release checkpoint preparation

- Completed consultant role/tool context and editable Plan-mode handoff; added an unsent support-draft/edit/copy flow. Browser checks verified exact context preservation, draft project status, clipboard copy and stale-draft clearing.
- Expanded the top-level sample integration catalog to 22 entries and verified Jira's permission review/connect/remove simulation. Verified environment-name persistence, rename, exact source restoration, and the simulated pull completion with source unchanged.
- Converted cross-project documentation links into explicit historical-provenance labels so the release documents do not depend on unrelated local folders.
- Frontend build/typecheck and all 19 tests passed after the additions. Rebuilt the disconnected demo without backend URLs; no deployment hostname appeared in its 15 output files and local environment configuration was unchanged.
- Google readiness remains false. Real OAuth/cloud browser checks and public repository/hosting release await user setup/approval; no public deployment or hiring submission occurred.
