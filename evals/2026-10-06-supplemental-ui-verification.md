# Supplemental UI verification

Date: 2026-10-06. The main agent reported these browser observations against https://architect-2-weld.vercel.app at published commit `4f3d4a5`. This documentation update did not repeat UI operations. Those hosted checks extend the [hosted department acceptance](2026-10-06-hosted-department-acceptance.md), without claiming every branch or a real external integration. The later per-agent usage check below ran locally on port 5182 and is not evidence of that change being live.

## Authenticated mobile department dialog

**Observed at actual viewport 391 by 844.** Earlier viewport attempts were mis-targeted or affected by zoom; only the measured final viewport counts.

The owner opened **More project actions → Manage department access**. The dialog measured x **10**, width **371.38**, height **824.31**; client/scroll width was **370/370**, and document/body width was **391**. No controls extended horizontally outside the viewport.

Change department prefilled the existing test member and QA Support. Edit access prefilled QA Support and Editor. No membership or grant was saved or changed. Escape closed the dialog, and the viewport was reset.

Screenshot: `runs/2026-10-06-mobile-department-dialog.jpg`. This proves the measured dialog and inspected prefilled controls, not all mobile management branches.

## Design-reference simulation

On the separate synthetic QA app `j57cm1majys6w7k56yyhajvp7x8fsj35`:

1. Selected Figma and entered `https://example.com/qa-design-reference`.
2. **Review sample import** explicitly said the proposed design was not extracted from the reference.
3. **Use sample direction** selected **Figma sample**, accent `#4764ad`.
4. **Apply to preview**, close, reload and reopen retained the design in the form and Figma sample preset.
5. The latest source heading, `Hosted department QA: Support edit two`, remained intact.

Screenshot: `runs/2026-10-06-hosted-design-reference.jpg`. No reference was fetched, uploaded or parsed. Only the synthetic QA app was affected; the user's CRM remained untouched. This is design-reference simulation proof, **not** real source/ZIP import proof. PDF/repository/ZIP design-reference branches were not separately tested.

## Custom MCP simulation

- An HTTP URL was rejected with HTTPS validation.
- `https://tools.example.com/mcp` plus **Discover tools** and **Read tool output** proceeded through **Confirm simulation**.
- The workspace showed one connection and explicitly stated that no account was authorized.
- Reopening management retained both checked scopes. The endpoint was blank, consistent with the interface's advertised dialog-only storage.
- **Disconnect simulation** returned the connection count to zero.

No external request was performed by the simulated flow. Sampled browser error logs were empty. Screenshot: `runs/2026-10-06-hosted-mcp-simulation.jpg`; it contains transitional opacity, so the recorded interaction results are stronger evidence than that screenshot alone. This check does not claim tool discovery, real MCP execution or runtime schema validation.

## Local per-agent usage verification

The main agent checked the new component in the local preview on **port 5182**, separately from the hosted commit above:

- In Usage & activity, pressing Enter expanded Research copilot. Totals were **8 build / 2 runtime / 9 requests**; Researcher showed **4 / 1 / 5** and Reviewer **4 / 1 / 4**, matching the aggregate exactly.
- Configured agent names/roles and **Model not connected** were visible, together with illustrative/no-billing labels. These are example units, not observed model consumption.
- Expanding Customer support collapsed Research copilot. Open Customer support opened the matching workspace and Project views.
- At measured **391 by 844**, document scroll width was **371**. The usage section measured width **331.28**, client/scroll width **330/330**, with no overflowing buttons. The viewport was reset.
- Screenshot `runs/2026-10-06-mobile-agent-usage.jpg` was visually inspected. Its tool canvas includes white space below the viewport; the supported claim is measured geometry and readable agent rows, not a full-page screenshot match.
- Sampled local browser error logs were empty. Source review confirmed example values are selected by stable project ID, preventing reordering from changing totals; this was source review, not a separate reorder UI test. The implementation agent reported build/typecheck passing.

**Hosted cloud usage is still pending after this change is published.** The local UI and source review do not prove authenticated metadata/detail loading on the hosted app.

## Evidence limits and remaining checks

The screenshot paths are ignored local `runs/` artifacts, not public repository files. The source/ZIP file-picker journey remains blocked by Chrome's file-URL permission; the design simulation above does not resolve it. Conflict-draft and ZIP download arrival remain unverified.

Per-agent usage now has the bounded local evidence above; hosted verification is pending. Its documented basis is the v2.2 entry in the [official index](https://docs.architect.new/llms.txt), which names “a detailed per-agent credit breakdown”. The detailed release page was unavailable through the web reader, so this does not establish vendor-specific fields or pricing.

No membership/grant change, external connection, hiring submission, commit or deployment was performed by this documentation update.
