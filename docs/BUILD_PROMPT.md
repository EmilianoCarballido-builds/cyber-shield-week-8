# Implementation prompt · from the committed packet
Build SME Shield MX exactly within docs/PACKET.md. Spanish-first, polished responsive UI: forest sidebar, ivory canvas, lime accents, editorial headings, generous spacing. Use Vite and vanilla JS with no server or database. Work in small independently testable features.

1. Create validated schema for 5-25 employees, daily revenue 0-1,000,000 MXN, interruption 1-72 hours, sector and partner enums, backup/access/update controls yes/no/unknown and incident boolean enum. Reject unknown keys and malformed types. No identity, free text or secrets.
2. Implement transparent deterministic simulated rules, exactly three unique prioritized actions, human escalation for incident or unknown controls, zero-safe scenario math, Esencial 790 and Continuidad 1490 totals. Do not imply measured savings, certification or verified protection.
3. Build onboarding, sample fixture (invented), result, plan comparison and editable scenario, incident navigator with 088 official source, session audit and local export. Navigation must retain current assessment, invalidate old results after edits, and reset cleanly.
4. Approval dialog prepares only a local review draft; unchecked consent cannot proceed. Cancel must not imply approval. No outbound message, ticket, purchase or system change. Clearly show no active responder.
5. Simulated explanation by default. Optional WebLLM runs a small open model locally after an explicit large-download consent; feature detection, failure fallback, bounded prompt from validated summary, text-only output, no tools or authority over rules/prices. It must not prevent using the app.
6. Security: no personal persistence, credentials or secrets. Validate each editable control, render untrusted output as text, CSP/headers, safe external links. No Supabase/auth required while no personal data is stored.
7. Mechanical tests: malformed values, pricing boundaries, 0 revenue, incident override, unknown coverage, action uniqueness, approval/cancel, edits/reset, export, mobile, console/network. Document an actual discovered bug and its regression fix. No manufactured bug evidence.
8. Deploy usable v1; independent fresh synthetic persona receives screenshots in sequence and narrates confusion; fix worst confusion, rerun affected checks, redeploy v2, verify public URL unauthenticated.

Acceptance: all packet success conditions, >=5 meaningful commits, >=2 deploys, honest LLM limitations, documents/PDFs, ~3:30 demo script. Packet hash stays prior to app code.

## Commit plan
1. Packet + image mockup + README (already created, before code).
2. This implementation prompt and baseline evidence.
3. Engine, schema and unit tests.
4. Interface, local AI integration and first deploy.
5. Reproduced mechanical bug and regression test.
6. Persona confusion fix, accessibility and redeploy.
7. Submission evidence, PDFs, final decisions and session close.
