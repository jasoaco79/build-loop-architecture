# HANDOFF — Chicago Build Loop architecture

Harness-agnostic notes for whoever picks this up next. Clone the git repo and continue from there.

## What this is

Static architecture microsite for the **Iterate Consulting Chicago build loop**.

Thesis: **Four writers race. Codex reviews. Erlich picks the first clean PR. Jason says yes.**

| | |
| --- | --- |
| Repo | https://github.com/jasoaco79/build-loop-architecture |
| Brand | Iterate Consulting **lockup B** (nested-arc mark + two-line ITERATE / CONSULTING) |
| Void / accent | `#0A0A0B` / `#22D3EE` |
| Type | Playfair Display + Inter |
| Plates locked | 2026-09-19 — Jason signed 01 hero through 07 lifecycle |
| Live | **HOLD.** No deploy. No Duck cutover. No custom-domain cutover. |

**Not this pickup**

- [jasoaco79/iterate-website](https://github.com/jasoaco79/iterate-website) — public marketing site. Different host, different lock.
- [jasoaco79/duck](https://github.com/jasoaco79/duck) — Duck memory engine. Do not cut this microsite over to Duck.
- FIGJAM / grok-desk product work, Sophos, Body Lab, LYS — not this product.
- Secrets, pixels, env files, Cloudflare DNS, VPS, `iterateconsulting.ai`.

## Jason locks

Do not merge unless Jason says. Do not deploy. Do not touch Cloudflare DNS or the VPS. No Duck cutover. No live execution implied by these plates.

Architecture is **design only**. The site is a reading of locked plates, not a runner.

Process on this repo:

1. Branch off `main`. Do not commit to `main` directly.
2. Open a pull request.
3. Review.
4. Merge when Jason says. Deploy only when Jason says.

## Plates → sections

Canonical stills (off-repo, locked 2026-09-19): `01-hero` … `07-lifecycle`.

| Plate | Section | Anchor |
| --- | --- | --- |
| 01 hero | Operating thesis + five-beat flow | `#hero` |
| 02 loop | Six steps, first-clean selection rule | `#loop` |
| 03 writers | Cursor cloud / pi terra-gpt / Antigravity / Grok Build | `#writers` |
| 04 failover | Stalled lane ≠ stalled loop; leftover Grok Bot path | `#failover` |
| 05 Dallas | Slack overflow `#iterate-ord-dfw-rsw-cos` | `#dallas` |
| 06 mobile | Responsive composition of 01–02 (vertical rail) | same page, ≤760px |
| 07 lifecycle | Concept → Design → Execution → Deployment | `#lifecycle` |

Copy and ownership are locked on the plates:

- **Erlich** — Chicago PM / PR router. Picks the first clean PR; closes the other three. Routes leftover handoff and Dallas overflow.
- **Dinesh** — design-only. Open Design / Astra plates when UI is needed.
- **Jian-Yang** — coding owner. Starts four concurrent writers on separate branches.
- **Codex** — review-only. Every open PR. No writer bypass.
- **Gilfoyle** — deploy / infra. Deploys only if needed, after Jason’s yes.
- **Jason** — explicit yes before merge / deploy. No auto-ship.

Writers (isolated branches, all PRs → Codex):

1. Cursor cloud — Cursor cloud agents (account default model)
2. pi / terra-gpt — pi CLI with terra-gpt
3. Antigravity — Antigravity CLI (aggy); Google AI Pro
4. Grok Build — Grok Build on SuperGrok bucket

Selection rule: fastest is not enough. **First clean** wins. Empty CI / billing skips are not clean.

Dallas is overflow, not a second Chicago coder bot. Slack room `#iterate-ord-dfw-rsw-cos` (mirrors also `#iterate-chicago-dallas-cosos`). `grok-desk CURRENT.md` stays the week notebook handshake.

Grok Bot ~80% leftover-work path (StarrClaw / popstarr / Neo) is a **policy marker**, not live telemetry.

## Local run

Static files. No backend, no auth, no `.env`, no secrets. No npm. No build step.

```bash
git clone https://github.com/jasoaco79/build-loop-architecture.git
cd build-loop-architecture
python3 -m http.server 4173
```

Open http://127.0.0.1:4173/

Eyeball desktop (~1440px) against plates 01–05 and 07. Eyeball phone (~390px) against plate 06, then scroll failover / Dallas / lifecycle.

## Leftovers

- Fonts load from Google Fonts. Offline / no-egress still falls back to Times + system sans.
- Mark is the iterate-website nested-arc SVG, not a raster of lockup B. Jason should eyeball it against lockup B (`iterate-website` `docs/design/lockups/two-line.png`).
- No Cloudflare Pages/Workers project. No wrangler. No analytics.
- Do not add FIGJAM, Sophos, or secret material to this repo.

## Secrets

None. Do not add API keys, pixels, or env files.
