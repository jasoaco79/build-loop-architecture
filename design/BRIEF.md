# Chicago Build Loop — Architecture plates (Open Design / Astra)

**Lane:** Iterate Consulting · Chicago desk  
**Status:** DESIGN-ONLY · **HOLD live** · no product code · no git to product repos · no deploy · no live DNS  
**Author:** `pi --print --no-session --provider openai-codex --model gpt-6-astra` (plates 01–07; Codex OK; no usage-limit fallback)  
**Render:** HTML → PNG via playwright-core + google-chrome · desktop 1440×900 @ 2× · mobile 390×844 @ 2×  
**Output root:** `/workspace/build-loop-arch/od/`

---

## Ask (locked)

Design-only architecture microsite for how Chicago ships code: four concurrent writers, Codex on every open PR, Erlich picks first clean, Jason explicit yes before merge/deploy. Diagram-forward plates. Calm boutique tech. No FIGJAM. No Sophos. No secrets / OTP / tokens / webhook URLs.

---

## Color lock

| Token | Value |
|-------|-------|
| Background void | `#0A0A0B` |
| Panel | `#121214` |
| Raised | `#1A1A1E` |
| Hairline | `rgba(255,255,255,0.08)` |
| Text | `#F5F5F5` |
| Muted | `#A1A1AA` |
| **Only accent** | **cyan `#22D3EE`** |

Typography: Playfair Display (titles) · Inter (body) · Google Fonts.  
Logo: lockup B — `/workspace/build-loop-arch/od/lockup-b.svg` (from `/workspace/iterate-logos-hires/lockup-b-on-black.svg`).

---

## Section order (plates)

| # | File | One-liner |
|---|------|-----------|
| 01 | `01-hero.png` (+ `.html`) | Hero + operating thesis: four writers race → Codex → Erlich first clean → Jason yes |
| 02 | `02-loop.png` (+ `.html`) | Full 6-step end-to-end loop with phase bands + roles |
| 03 | `03-writers.png` (+ `.html`) | Four concurrent writer cards: harness + model exact; race rules strip |
| 04 | `04-failover.png` (+ `.html`) | Redundancy: three keep racing; clean gate; ~80% Grok Bot → StarrClaw / popstarr / Neo |
| 05 | `05-dallas.png` (+ `.html`) | Dallas CoS overflow via Slack bridge; not default race |
| 06 | `06-mobile.png` (+ `.html`) | Phone compression of hero + 6-step loop (390×844 @ 2×) |
| 07 | `07-lifecycle.png` (+ `.html`) | Lifecycle arc: Concept → Design → Execution → Deployment (swimlane; points to 02/03 for race detail) |

Shared tooling beside plates: `render.mjs`, `render-all.mjs`, `lockup-b.svg`.

---

## Copy lock

### Thesis (hero / mobile)
> Four writers race. Codex reviews. Erlich picks the first clean PR. Jason says yes.

Subtitle everywhere: **Architecture for Iterate Consulting · design only · HOLD live.**

### Loop (exact order)
1. Ask lands at **Erlich**
2. UI needs design → **Dinesh** Open Design / Astra plates → **Jason** locks plates
3. **Jian-Yang** starts **FOUR** concurrent writers on separate branches
4. **Codex** reviews each PR when open
5. **Erlich** picks first clean PR; closes the other three
6. **Jason** yes → merge; **Gilfoyle** deploys if needed

### People labels (exact roles)
| Name | Role |
|------|------|
| Erlich | Chicago PM / PR router |
| Dinesh | design-only |
| Jian-Yang | coding owner (launches four writers) |
| Codex | review-only |
| Gilfoyle | deploy / infra |
| Jason | explicit yes before merge/deploy |

### Writers (harness + model exact)
| # | Label | Harness + model |
|---|-------|-----------------|
| 1 | Cursor cloud | Cursor cloud agents (account default model) |
| 2 | pi / terra-gpt | pi CLI with terra/gpt |
| 3 | Antigravity | Antigravity CLI (agy); Google AI Pro |
| 4 | Grok Build | Grok Build on SuperGrok bucket |

### Race rules (plate 03)
- separate branches  
- first clean wins  
- one ship PR after pick  
- Codex on all  
- no merge without Jason yes  

### Failover (plate 04)
- If one writer hits usage limit or is offline, the other three keep racing  
- Empty CI / billing skips are **not** “clean”  
- Erlich is the router  
- At **~80% Grok Bot usage**, leftover handoff is **StarrClaw / popstarr / Neo** — do **not** invent on-demand burn  

### Dallas overflow (plate 05)
- Chicago CoS ↔ Dallas CoS bridge: **`#iterate-ord-dfw-rsw-cos`**  
- CoS mirrors: **`#iterate-chicago-dallas-cos`**  
- When Chicago capacity is tight **OR** job fits Dallas full-stack (e.g. Bolton on pi), Chicago CoS relays brief to Dallas CoS in that Slack room — **not** a second Chicago coder bot  
- **`grok-desk CURRENT.md`** remains week notebook handshake  
- Overflow path, **not** default race  

### Lifecycle arc (plate 07)
- High-level swimlane: **Concept → Design → Execution → Deployment**
- Concept: ask lands at Erlich; brief framed
- Design: if UI → Dinesh Open Design / Astra → Jason locks; if no UI → skip forward
- Execution: Jian-Yang four writers; Codex reviews; Erlich first clean — race detail on plates **02 / 03** (do not redraw topology)
- Deployment: Jason explicit yes → merge; Gilfoyle deploys if needed; no auto-ship
- Optional side paths only: failover → plate 04; Dallas Slack overflow → plate 05

---

## Absolute paths

```
/workspace/build-loop-arch/od/BRIEF.md
/workspace/build-loop-arch/od/01-hero.html
/workspace/build-loop-arch/od/01-hero.png
/workspace/build-loop-arch/od/02-loop.html
/workspace/build-loop-arch/od/02-loop.png
/workspace/build-loop-arch/od/03-writers.html
/workspace/build-loop-arch/od/03-writers.png
/workspace/build-loop-arch/od/04-failover.html
/workspace/build-loop-arch/od/04-failover.png
/workspace/build-loop-arch/od/05-dallas.html
/workspace/build-loop-arch/od/05-dallas.png
/workspace/build-loop-arch/od/06-mobile.html
/workspace/build-loop-arch/od/06-mobile.png
/workspace/build-loop-arch/od/07-lifecycle.html
/workspace/build-loop-arch/od/07-lifecycle.png
/workspace/build-loop-arch/od/lockup-b.svg
/workspace/build-loop-arch/od/render.mjs
/workspace/build-loop-arch/od/render-all.mjs
```

---

## Out of scope (HOLD)

- Product code patches  
- Git commits / pushes to product repos  
- Deploy / live DNS  
- Invented services beyond the locked writer / handoff / Slack list above  
