# EnglishHub B1.1 — Audit and Phase 15 report

## Scope

The project was checked at source/data level before adding new practice formats. The application remains a static Vanilla JavaScript project with no build step or backend.

## Verified inventory

| Area | Verified count |
|---|---:|
| Lessons | 6 |
| Grammar guides | 11 |
| Vocabulary entries | 604 |
| Exercise questions | 1,307 |
| Exercise answer formats | 7 |
| Games | 14 |
| Test options | 9 |
| Speaking scenarios | 6 |
| Lesson 6 frequency-table rows | 6 |

## Phase 14 — fixes and audit findings

- Replaced stale README counts and obsolete descriptions with counts read from the current JavaScript data modules.
- Added a dedicated Phase 14–15 audit report and documented known content limitations.
- Hardened typed-answer comparison: case, repeated spaces and harmless sentence punctuation no longer cause a false negative.
- Escaped learner-entered text before rendering it back into exercise markup.
- Added polite live-region semantics to exercise feedback.
- Made the English-interface vocabulary list show an English definition where available and a clearly marked Serbian translation where a definition has not yet been written, rather than displaying a blank meaning.
- Made local progress reset handle storage errors without crashing the page.
- Corrected grammar-only/vocabulary-only filtering so lesson-specific vocabulary is not automatically counted as grammar.
- Added category-level exercise accuracy and a recent-session history; the Progress page now surfaces repeatedly practised topics with the lowest accuracy.
- Preserved the supplied Lesson 6 frequency chart with exactly six rows.

## Phase 15 — new exercise formats

Added 42 teacher-authored questions (seven per lesson) covering:

- Sentence correction
- Sentence transformation
- Word ordering
- Typed short answers
- True/false statements
- Contextual dialogue completion (multiple choice)
- Reading comprehension (multiple choice)

The existing multiple-choice and gap-fill formats remain available. New typed formats use the same feedback, review, scoring and progress pipeline. The test builder can convert the new typed questions into multiple-choice test items.

## Automated checks

- All JavaScript files pass `node --check`.
- All data modules import successfully in Node.js.
- All 1,307 questions have unique IDs, a prompt, category, explanation and a valid answer schema.
- All 1,307 questions can be converted to the existing test question structure.
- No missing Serbian or Russian translations were found in the 604 vocabulary records.
- The Lesson 6 frequency table has exactly six rows.

## Known limitations still requiring editorial work

- 411 of 604 vocabulary entries do not yet have a dedicated English definition. Serbian and Russian translations and an example sentence are present, but definitions should be written and checked by a teacher.
- 166 supplementary vocabulary examples use broad template patterns rather than strong, context-rich model sentences and should be editorially improved.
- This phase does not yet implement dedicated drag-and-drop matching, standalone assessed listening, or reliable automatic grading of free writing. Speaking transcription is not pronunciation assessment.
- The audit used static checks and data validation. A full manual browser test on multiple physical devices and screen sizes remains necessary before public release.
