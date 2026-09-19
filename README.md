# Chicago Build Loop — Architecture

Static architecture microsite for how Iterate Consulting’s Chicago desk ships code.

**Four writers race. Codex reviews. Erlich picks the first clean PR. Jason says yes.**

Plates locked 2026-09-19 (SoT on `design/sot`). Lockup B. Accent cyan `#22D3EE`.

## HOLD

Design-only. **Do not deploy live. Do not restage.** No custom domain. No Cloudflare Pages/Workers cutover. **No Duck cutover.** No DNS. No merge/deploy without Jason’s explicit yes.

Intended public host: `https://stack.iterateconsulting.ai`. Gilfoyle attaches DNS / restages **only** after Jason merge yes. Do not cut DNS from this pickup.

## Local

```bash
python3 -m http.server 4173
```

Open http://127.0.0.1:4173/

No npm. No build. No secrets.

## Sections

| Plate | Section |
| --- | --- |
| 01 | Hero / thesis |
| 02 | Six-step looped cycle (left-to-right, returns to Erlich) |
| 03 | Writers — four locked seats (Cursor cloud · pi / terra-gpt · Antigravity · Grok Build). Optional 5th overflow (Codex or Astra), not default. |
| 04 | Failover + leftover handoff (StarrClaw / Dallas Grok Bot sub 2 / Florida Hermes) |
| 05 | Dallas overflow; Florida / Hermes alternate overflow when named |
| 06 | Mobile compression of hero + loop |
| 07 | Lifecycle |

See `HANDOFF.md` for pickup notes.
