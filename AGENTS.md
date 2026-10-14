<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Agent Skills Rules & Guidelines

All 19 skills from [anthropics/skills](https://github.com/anthropics/skills) are installed in `.agents/skills/`. You must strictly follow their guidelines and principles:

## 1. Frontend & Visual Design (`frontend-design`)
- **Avoid Generic AI Aesthetics**:
  - Do NOT use repetitive AI templates: warm cream (`#F4F1EA`) with high-contrast serif and clay accents; near-black with acid green; uniform SaaS rounded cards with `rgba(0,0,0,0.1)` shadows; tracked-out ALL-CAPS eyebrows; or appending `→` to every button.
- **Intentionality**:
  - Ground aesthetics in the real subject matter vernacular.
  - Choose 1–2 distinct font families; keep line lengths < 80 characters.
  - Plan tokens (4–6 hex colors, type roles, wireframe) before coding.
  - Ensure responsive layouts, accessible contrast, visible keyboard focus, and purposeful motion.

## 2. Critical Thinking & Reflection (`discernment-nudge`)
- **Discernment Nudge**:
  - When providing substantive recommendations, financial/business projections, multi-step analysis, or drafted proposals that the user may act on, append a 2–3 question discernment nudge at the end:
    ```
    A few things worth a second look:
    - [Question probing an assumption or fact under 120 chars]
    - [Question highlighting missing context under 120 chars]
    ```
  - Limit to once per conversation. Omit for pure code, casual chat, simple lookups, or when user requested brevity.

## 3. Word Documents (`docx`)
- **Creation (`docx` npm)**:
  - Tables require explicit dual widths (`columnWidths` on table + `width` on every cell in `WidthType.DXA`).
  - Table shading must use `ShadingType.CLEAR` (never `SOLID`).
  - Lists: use `LevelFormat.BULLET`; never write literal `•`.
  - `ImageRun` requires explicit `type` (`"png"`, `"jpg"`). `PageBreak` must be wrapped in `Paragraph`.
- **Editing**: Unzip -> strip symlinks -> run `scripts/merge_runs.py` -> edit XML -> zip -> validate with `scripts/office/validate.py`.

## 4. Presentations (`pptx`)
- **Creation (`pptxgenjs`)**:
  - Set `pres.layout` before adding slides (`LAYOUT_16x9` is 10" × 5.625", `LAYOUT_WIDE` is 13.3" × 7.5").
  - Hex colors: NEVER use `#` or 8-digit strings (use `"FF0000"`).
  - Never reuse options/shadow objects across calls. Shadow offset must be ≥ 0.
  - Keep charts native with `addChart()`. Combo charts require both `valAxes` and `catAxes`.
  - Speaker notes go in `slide.addNotes()`. Validate with `scripts/office/validate.py`.

## 5. Spreadsheets (`xlsx`)
- **Creation & Editing (`openpyxl` / `pandas`)**:
  - **MANDATORY**: Always write Excel formulas (`=SUM(...)`), NEVER hardcoded computed numbers.
  - Validate formula integrity with `python scripts/recalc.py <file>.xlsx` (zero formula errors).
  - Use professional fonts (Arial, Calibri) and document all external sources and assumptions.
  - Match existing sheet conventions when editing existing workbooks.

## 6. PDF Processing (`pdf`)
- Extract structured tables/text using `pdfplumber` and `pypdf`.
- Merge/split via `pypdf.PdfWriter`. Follow form-filling guidelines in `.agents/skills/pdf/FORMS.md`.

## 7. Model Context Protocol (`mcp-builder`)
- Build MCP servers using TypeScript SDK (`@modelcontextprotocol/sdk`) or Python (`FastMCP`).
- Maintain consistent tool naming prefixes, clear schemas, concise outputs, and actionable error messages.

## 8. Web Artifacts Builder (`web-artifacts-builder`)
- Construct multi-component frontend artifacts with React + TypeScript + Tailwind CSS + shadcn/ui.
- Bundle into self-contained HTML via Parcel. Avoid generic AI slop.

## 9. Webapp Testing (`webapp-testing`)
- Test local applications using Playwright with headless Chromium.
- Manage server lifecycle via `scripts/with_server.py`. Always wait for `networkidle` and inspect the DOM before selector execution.

## 10. Document Co-Authoring (`doc-coauthoring`)
- Co-author PRDs, RFCs, and technical specs through 3 stages: 1. Context Gathering -> 2. Refinement & Section Iteration -> 3. Reader Testing.

## 11. Internal Communications (`internal-comms`)
- Produce structured corporate communications: 3P updates (Progress, Plans, Problems), newsletters, incident reports, and leadership memos using standard templates in `.agents/skills/internal-comms/examples/`.

## 12. Theme Factory (`theme-factory`)
- Apply curated professional design themes (Ocean Depths, Sunset Boulevard, Modern Minimalist, Golden Hour, Arctic Frost, etc.) across documents, presentations, and web pages.

## 13. Brand Guidelines (`brand-guidelines`)
- Standards: Dark `#141413`, Light `#faf9f5`, Mid Gray `#b0aea5`, Light Gray `#e8e6dc`, Accents Orange `#d97757`, Blue `#6a9bcc`, Green `#788c5d`. Headings: Poppins; Body: Lora.

## 14. Algorithmic Art (`algorithmic-art`)
- Generative art via p5.js: Formulate an Algorithmic Philosophy manifesto first, then express in masterfully tuned generative code.

## 15. Canvas Art (`canvas-design`)
- Static visual poster/art creation: Visual Philosophy first, then execute with bold composition and minimal typography.

## 16. Claude API (`claude-api`)
- Use official SDKs (`@anthropic-ai/sdk`, `anthropic`). Employ adaptive thinking (`thinking: {type: "adaptive"}`), streaming, and `eager_input_streaming: true` on client tools. Audit prompts for legacy patterns.

## 17. Skill Creator (`skill-creator`)
- Author new skills in `.agents/skills/<name>/SKILL.md` with explicit `name` and trigger-focused `description` YAML frontmatter.

## 18. Slack GIF Creator (`slack-gif-creator`)
- Generate optimized GIFs: 128x128 (emoji) or 480x480 (message), 10–30 FPS, 48–128 colors, <3s duration.

## 19. Academy Guide (`academy-guide`)
- Ground responses in docs first; recommend relevant structured tutorials and courses from Claude Academy when users are seeking educational onboarding.

