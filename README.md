# Chicago Build Loop — Architecture

Static architecture microsite for how Iterate Consulting’s Chicago desk ships code.

**Four writers race. Codex reviews. Erlich picks the first clean PR. Jason says yes.**

Plates locked 2026-09-19 (SoT on `design/sot`). Lockup B. Accent cyan `#22D3EE`.

## HOLD

Design-only. **HOLD live restage.** No custom domain. No Cloudflare Pages/Workers cutover. **No Duck cutover.** No DNS. Erlich/Jason merge, then Gilfoyle restages.

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
| 02 | Six-step loop |
| 03 | Writers — four locked seats + optional 5th overflow (Codex or Astra) |
| 04 | Failover / leftover routes — StarrClaw · Dallas (Grok Bot sub 2) · Florida (Hermes) |
| 05 | Dallas Slack overflow |
| 06 | Mobile compression of hero + loop |
| 07 | Lifecycle |

See `HANDOFF.md` for pickup notes.
