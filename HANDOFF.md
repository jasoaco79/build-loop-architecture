# HANDOFF — Chicago Build Loop architecture microsite

Harness-agnostic notes for whoever picks this up next. Clone the git repo and continue from there.

## What this is

Static architecture microsite for **how Iterate Consulting’s Chicago desk ships code**.

| | |
| --- | --- |
| Repo | https://github.com/jasoaco79/build-loop-architecture |
| Design SoT | Branch `design/sot` — plates 01–07 HTML/PNG + `design/BRIEF.md` + lockup B. Locked 2026-09-19. |
| Intended public host | `https://stack.iterateconsulting.ai` — Gilfoyle attaches DNS / restages **only** after Jason merge yes. Do not cut DNS from this pickup. |
| This pass | Additive update on a PR against `main` (`a9991bb`): optional 5th overflow seat, Pi Astra config note, leftover Dallas / Florida, looped cycle diagram. |

**Thesis (locked):** Four writers race. Codex reviews. Erlich picks the first clean PR. Jason says yes.

**Not this pickup**

- [jasoaco79/iterate-website](https://github.com/jasoaco79/iterate-website) — public marketing site. Different repo. Do not fold this microsite into www.
- [jasoaco79/duck](https://github.com/jasoaco79/duck) — Duck memory engine. **No Duck cutover.** Do not point Duck, popstarr, or live daemons at this site.
- LYS / Elena, Sophos, FIGJAM, Body Lab, grimstarr preview hosts — not this product.

## Jason locks

Do not merge. Do not deploy. Do not restage. Do not cut DNS. Do not touch Cloudflare DNS, Pages, Workers, or the VPS from this pickup. **No Duck cutover.** Gilfoyle attaches `https://stack.iterateconsulting.ai` only after Jason merge yes.

Four locked writer seats stay exact. This pass **adds** (does not replace): optional 5th overflow seat; Pi Astra config note; leftover destinations Dallas (Grok Bot sub 2) and Florida (Hermes). Cyan `#22D3EE` stays the only accent.

| Token | Value |
| --- | --- |
| Background void | `#0A0A0B` |
| Panel | `#121214` |
| Raised | `#1A1A1E` |
| Hairline | `rgba(255,255,255,0.08)` |
| Text | `#F5F5F5` |
| Muted | `#A1A1AA` |
| **Only accent** | **cyan `#22D3EE`** |

Typography: Playfair Display (titles) · Inter (body) · Google Fonts.

Logo: lockup B (`assets/lockup-b.svg`, from `design/sot`). Site copy uses a transparent plate so the mark composites on the void; paths are the locked lockup. No backwards E. No invented mark.

Process:

1. Branch off `main`. Do not commit to `main` directly.
2. Open a pull request against `main`.
3. Codex reviews. **Codex is review-only.**
4. Erlich picks the first clean PR; closes the others.
5. Merge / deploy / restage only when Jason says yes.

**House process still has Codex as review-only.** The optional 5th writer on the writers diagram (Codex or Astra) is overflow capacity notation only. **It does not authorize Codex application PRs.** Codex does not open or own ship PRs.

## This pass

Static single page matching locked plates, plus the additive notes below:

| Plate | Section |
| --- | --- |
| 01 | Hero / operating thesis + five-panel overview |
| 02 | Six-step **looped** diagram: left-to-right cycle 01→06 with return rail to Erlich. Not a vertical list on desktop/tablet. |
| 03 | Four locked writers: Cursor cloud · pi / terra-gpt · Antigravity · Grok Build. Optional 5th overflow seat (Codex or Astra) — not default, does not replace 01–04. |
| 04 | Failover: three keep racing; clean gate; leftover handoff → StarrClaw / popstarr / Neo **and** Dallas (Grok Bot sub 2) **and/or** Florida (Hermes) |
| 05 | Cross-desk overflow: Chicago = default race (unchanged). Dallas = overflow. Florida / Hermes = alternate overflow when named. Slack (`#iterate-ord-dfw-rsw-cos`, mirrors `#iterate-chicago-dallas-cos`) |
| 06 | Mobile compression of hero + 6-step loop (390-class viewport) |
| 07 | Lifecycle: Concept → Design → Execution → Deployment |

No product code. No backend. No analytics. No secrets. `robots: noindex`.

## Local run

```bash
git clone https://github.com/jasoaco79/build-loop-architecture.git
cd build-loop-architecture
python3 -m http.server 4173
```

Open http://127.0.0.1:4173/

No npm. No build step. No `.env`.

## Copy lock (do not rewrite)

**Writers (harness + model exact) — four locked seats**

1. Cursor cloud — Cursor cloud agents (account default model)
2. pi / terra-gpt — pi CLI with terra/gpt. **Default label stays terra-gpt.** Pi can also be configured for Astra (`gpt-6-astra` via `openai-codex` on popstarr). That is a config note, not a seat replacement.
3. Antigravity — Antigravity CLI (agy); Google AI Pro
4. Grok Build — Grok Build on SuperGrok bucket

**Optional 5th overflow seat (diagram only, not default)**

- Choices: **Codex** or **Astra**
- Not started by default. Does not replace seats 01–04.
- **Does not authorize Codex application PRs.** House process keeps Codex review-only.

**People**

| Name | Role |
| --- | --- |
| Erlich | Chicago PM / PR router |
| Dinesh | design-only |
| Jian-Yang | coding owner (launches four writers) |
| Codex | review-only |
| Gilfoyle | deploy / infra |
| Jason | explicit yes before merge/deploy |

**Race rules:** separate branches · first clean wins · one ship PR after pick · Codex on all · overflow not default · no merge without Jason yes.

Empty CI / billing skips are **not** “clean”.

**Desk routing**

| Desk | Role |
| --- | --- |
| Chicago | Default race. Unchanged. |
| Dallas | Overflow. Leftover handoff may use Grok Bot sub 2. |
| Florida / Hermes | Alternate overflow **when named**. Not default. |

Dallas Slack overflow remains a CoS-to-CoS relay, **not** the default race. `grok-desk CURRENT.md` remains the week notebook handshake.

**Leftovers / handoff (Erlich routes; no on-demand burn)**

- StarrClaw / popstarr / Neo — existing leftover path
- Dallas (Grok Bot sub 2) — overflow
- Florida (Hermes) — alternate overflow when named

## Leftovers / eyeball

- Eyeball desktop (~1440): hero five-panel row, **horizontal looped cycle** (01→06 + return to Erlich), four writer cards + optional 5th overflow strip, failover leftover destinations (StarrClaw / Dallas / Florida), Dallas swimlanes + desk map, lifecycle skip-design arc.
- Eyeball phone (~390): plate 06 — lockup + HOLD LIVE, thesis, stacked 6-step loop with writer tags on step 03, Jason yes in cyan.
- Eyeball tablet (~900): loop stays a left-to-right cycle (3+3 wrap + return rail), not a vertical list only.
- Confirm accent is only `#22D3EE`. No second brand color.
- Confirm HOLD LIVE remains visible in the header.
- Confirm four locked seats remain; 5th seat is optional overflow, not default.
- Confirm Codex stays review-only in process copy.
- Do not add wrangler / Pages / custom-domain files.
- Do not deploy Duck or change popstarr.
- Do not restage or cut DNS for `https://stack.iterateconsulting.ai`.

## Jev governance notes (additive, writer_claude_box)

`jev.html` is a new, separate page (not one of the locked plates 01–07) linked
from the main footer. It cross-links to the `jev-stack` repo's decision layer
and documents the `writer_claude_box` jev-stack lane, the CoS Jev router
(who/whether → one lane up front → stage-and-close only on 2+ clean PRs), and
Jason's exclusive locks. It does not touch, reorder, or replace this repo's
own four locked writer seats or its own separate race process — those stay
exactly as documented above.

## Secrets

None. Do not add API keys, pixels, Formspree, or env files.

## Tip

First clean wins. Empty CI is not clean. HOLD live. No restage. No Duck cutover. Jason yes before merge.
