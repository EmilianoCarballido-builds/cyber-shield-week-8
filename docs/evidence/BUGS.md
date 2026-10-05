# Mechanical test → fix → redeploy

## V1 browser run, 2026-10-04
Public URL https://cyber-shield-week-8.vercel.app at commit 5c78693. Local Chromium CLI could not launch due to a macOS MachPort sandbox restriction; actual UI checks used the Codex in-app browser. Unit and DOM regression tests ran separately in Node. The failed CLI script is not counted as a successful run.

### Bug 1: cancellation kept consent selected
Reproduce: sample → calculate → incident help → prepare review → check consent → Cancel → reopen. Observed checked checkbox and enabled confirmation. No external action exists, but stale consent violates the intended explicit-approval boundary.
Fix: each dialog open resets the checkbox and disables confirmation. Add accessible dialog title. Regression test repeats the exact cancel/reopen sequence.

### Bug 2: navigating to help lost unfinished answers
Reproduce: sample → calculate → edit → employees 12 → Help → Diagnosis. Observed employees reverted to 8. This could silently select the wrong price tier when the user returned.
Fix: capture current form values in memory before navigation, including empty fields; keep final validation at submission. Regression checks 12 survives, selects the 1490 plan, and empty invalid fields remain invalid.

### Review clarification
The packet's gross price-minus-cost example was labeled contribution; because the price includes taxes this is not net contribution. Final UI calls it a pre-tax balance and explicitly excludes taxes/other costs. Packet stays unchanged to preserve original planning evidence; this correction is logged here.

Evidence: mechanical-v1.json, screenshots 01–05, tests/ui.test.js. Follow-up results and redeployment IDs are recorded in TEST_REPORT.md.

### Regression caught during fix: reset recaptured discarded form
The new pre-navigation capture initially ran inside reset and restored an empty old employee field. The zero-income/incident UI test failed because submission remained invalid. Reset now renders the new session directly, bypassing capture of discarded data. All tests rerun after this correction.
