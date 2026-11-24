# EnglishHub B1.1 — Phase 15

A static, offline-first English learning platform for a small B1.1 study group. The interface supports English, Serbian and Russian; English remains the language being practised.

## Run locally

```bash
python -m http.server 8000
```

Open `http://localhost:8000`. No build step, account or backend is required.

## Current content inventory

The checked project contains:

- 6 lessons with lesson guides, examples and dialogues
- 11 grammar guides
- 604 vocabulary entries, each with Serbian and Russian translations and an example sentence
- 1,307 exercise questions across 7 implemented answer formats: multiple choice, fill-in-the-blank, sentence correction, sentence transformation, word ordering, typed short answer and true/false; dialogue and reading-comprehension questions are included as contextual multiple-choice tasks
- 14 learning games
- 9 test options
- 6 speaking scenarios

The exercise bank includes the existing 1,265 questions plus 42 new teacher-authored questions in Phase 15. The six-row Lesson 6 frequency reference follows the supplied course handout exactly: always, usually, often, sometimes, rarely and never, with the related expressions shown in the handout.

## Exercise behaviour

- Sessions are randomized and do not repeat a question within the same session.
- Answer choices are shuffled.
- Typed answers are checked without case sensitivity and ignore harmless punctuation and repeated spaces.
- Feedback includes the expected answer and an explanation.
- Session summaries include incorrect answers for review.
- Progress stores overall accuracy, recent session summaries and accuracy by question category.
- Grammar-only and vocabulary-only filters use lesson category metadata rather than treating every lesson-specific question as grammar.

## Current audit notes and known limitations

- The vocabulary bank has 604 entries and complete Serbian/Russian translations. 411 entries do not yet have a dedicated English definition; their translation and example are still available. These entries should be enriched with teacher-reviewed definitions rather than automatically generated guesses.
- 166 supplementary vocabulary examples use broad template patterns and should be editorially improved for naturalness before being treated as model sentences.
- The current question bank is strongest in multiple-choice and gap-fill practice. Phase 15 adds written correction, transformation, ordering and short-answer tasks, but this is not yet a full implementation of every exercise type in the original master specification (for example, a dedicated drag-and-drop matching activity, standalone listening assessment and automatically graded free writing).
- Speaking recognition depends on browser support and is transcription only; it does not grade pronunciation or speaking quality.
- Local progress belongs to the current browser and device. There is no account system or cross-device synchronization.
- External dictionary definitions/audio are optional and require an internet connection.

## Local data and privacy

Settings, progress, exercise history and speaking responses are stored in LocalStorage in the current browser. The Settings page offers JSON export and a confirmed reset. Clearing browser data or changing device/browser may remove access to local progress; keep an exported backup if the results matter.

## Project structure

- `index.html` — application shell and navigation
- `css/` — design tokens, layout, components and responsive rules
- `js/app.js` — application bootstrap
- `js/core/` — routing, translations and local storage
- `js/components/` — shared application shell
- `js/data/lessons.js` — lesson metadata and dialogue
- `js/data/lesson-content.js` — detailed teaching content
- `js/data/grammar.js` — grammar guides
- `js/data/vocabulary.js` — vocabulary data
- `js/data/exercises.js` — base/generated exercise bank
- `js/data/exercise-additions.js` — Phase 15 teacher-authored multi-format questions
- `js/data/games.js` — game catalogue
- `js/data/tests.js` — test catalogue
- `js/data/speaking.js` — speaking scenarios
- `js/pages/pages.js` — page rendering and interactive behaviour
- `AUDIT-PHASE14-15.md` — verified inventory, changes, checks and known limitations

## Deployment

The folder can be published to GitHub Pages, Netlify or another static host. Keep relative asset paths (the project uses `./css/...` and `./js/...`) when deploying under a subdirectory.

## Adding future lessons

Add the lesson metadata and localized lesson content in the relevant data modules, add vocabulary with stable IDs and Serbian/Russian translations, then add questions to `js/data/exercise-additions.js` (or the base bank). Use unique IDs, a supported exercise `type`, one or more accepted answers for typed tasks, and an explanation.
