# Architect 2.0 release handoff

The complete hiring brief requests a live app URL, a GitHub repository, an architecture diagram and an accompanying Markdown explanation. Publishing and assignment submission are separate actions. The user requires approval before a production deployment; no submission is authorized.

## Prepared locally

- `vercel.json` builds this project's existing Vite configuration with `npm run build` and publishes `runs/dist`.
- `.vercelignore` excludes local environment files, installed dependencies and local run output from the upload. `.gitignore` excludes credentials from the repository.
- The site uses relative static asset paths. The diagram sync script copies deliverable SVG files into the public directory before each build.
- The signed-out demo can run without any backend environment variables. It keeps projects in that browser and labels external actions as simulations.

## Concrete approval scope when checks pass

Proposed new repository: `rishimunikesarwani-hub/architect-2`, public, containing the prototype source, tests, architecture drawings and explanation.

Proposed new Vercel project: `architect-2`, deployed independently from the existing portfolio. Publish the reviewed demo first. Do not modify another Vercel project, deploy a Convex production backend, or submit the hiring form.

Verify both names are available before publishing; no remote repository or hosting project has yet been created by this handoff.

## Google setup for a hosted app

The current Convex development backend trusts `http://localhost:5177`. A hosted site's exact HTTPS origin must be deliberately added to the auth configuration before offering live login there. Do not copy credentials from another application or set the client secret in a Vite/browser environment variable.

Keep the first public demo disconnected from the backend unless its origin has been configured and the real Google round trip tested. The OAuth callback remains on the selected Convex HTTP deployment; the frontend return URL and allowed origin change with the chosen site. Follow `guide-backend-setup.md` for the current local flow, then document the approved hosted origin and repeat the same acceptance checks.

## Release verification

1. Run the build and automated checks after implementation changes finish.
2. Inspect desktop/mobile flows and both rendered architecture drawings.
3. Confirm tracked/uploaded files contain no credentials or private source imports; publish only this dedicated project.
4. After publication, open the live URL in a fresh browser tab. Verify start, edit, preview, reload and the architecture links. Verify GitHub includes the diagram and readable Markdown explanation.
5. Report the exact public URLs and integration limits. Stop before the separate hiring submission form.
