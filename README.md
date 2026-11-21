# EnglishHub B1.1 — Phase 11: Expanded Randomised Exercises

Cumulative static-site package with substantially expanded teaching material for all six B1.1 lessons, plus exercises, games, tests, analytics and speaking practice.

## Run locally
```bash
python -m http.server 8000
```
Open `http://localhost:8000`.

## Implemented
- Expanded exercise bank with 1,018 questions: 87 grammar questions and 931 vocabulary questions
- Vocabulary practice includes multiple-choice translation questions and contextual sentence-completion questions, using the 471-word course vocabulary
- Each new session selects a random set without repeating questions inside that session; answer options are shuffled as well
- Session sizes: 10, 20, 30, 50 or all available questions; practice modes: mixed, grammar only or vocabulary only
- Immediate feedback and explanations after every answer; final results include accuracy and a review list of incorrect answers
- Progress statistics record every question attempted, correct and incorrect answers, and completed sessions
- Six expanded B1.1 lesson units containing 33 detailed teaching sections and 134 translated examples/dialogues, plus 11 fully explained greeting expressions
- Lesson 1 teaches all eleven requested greeting expressions, including context, formality, examples, follow-up questions and ways to end a conversation
- Lessons 2–6 provide structured explanations, examples, usage guidance and practical tasks for past events, life experiences, storytelling, professional communication, technology, travel and frequency
- Eleven grammar guides and 471 vocabulary entries (411 added in Phase 10), with Serbian and Russian translations, parts of speech and contextual example sentences
- Fourteen games and nine formal test options
- Test scoring and detailed answer review
- Local progress analytics: lesson/grammar/vocabulary completion, exercise accuracy, games, tests, activity streak and study time by section
- Six speaking scenarios aligned with the six lessons
- Each scenario includes context, two role descriptions, conversation prompts, useful phrases and a grammar/vocabulary focus
- Typed response field with local saving and restoration
- Optional browser speech recognition where supported; recognised speech is inserted into the text field
- Typed input remains available as a fallback
- Speech recognition is transcription only; there is no automated pronunciation or speaking-quality score
- English, Serbian and Russian interface; light/dark themes
- LocalStorage persistence, JSON export and confirmed progress reset
- Static hosting; no accounts, backend or build step

## Data and privacy
Responses, progress and settings are stored in the current browser. Speech recognition is provided by the browser; the app stores the resulting transcript only when the learner saves it. No cross-device synchronization is provided.

## Vocabulary dictionary integration
- The vocabulary bank is bundled locally and remains usable without a network connection.
- For individual headwords, learners can optionally request English definitions, phonetic transcription and audio pronunciation from the Free Dictionary API (`https://dictionaryapi.dev/`).
- API requests are made only after the learner clicks the dictionary button; there is no API key and no account requirement. Availability depends on the external service and internet access. Phrasal expressions containing spaces use the local translation and example only.

## Deployment
Deploy the project folder to GitHub Pages, Netlify or another static host. No build command is required.

## Adding or editing course content
The content is maintained manually in JavaScript data modules:
- `js/data/lessons.js` — lesson objectives, dialogues, prompts and grammar/vocabulary references
- `js/data/lesson-content.js` — expanded lesson explanations, phrase banks, contextual examples, translations and learning tips
- `js/data/grammar.js` — grammar explanations, forms, examples and common mistakes
- `js/data/vocabulary.js` — 471 English words and expressions, Serbian/Russian translations, parts of speech, categories and example sentences
- `js/data/exercises.js` — 1,018-question exercise bank, including generated vocabulary practice derived from the local vocabulary records
- `js/data/games.js` — game catalogue; game mechanics are implemented in `js/pages/pages.js`
- `js/data/tests.js` — test catalogue and lesson-to-topic mapping
- `js/data/speaking.js` — speaking scenarios, roles, prompts and phrase banks

Keep IDs stable when editing content because lesson links and saved progress refer to those IDs.

## Phase 11 exercise details
The current exercise bank contains 1,018 unique records: 87 grammar questions, 468 vocabulary multiple-choice questions and 463 vocabulary sentence-completion questions. Vocabulary prompts and explanations are localised for English, Serbian and Russian. The bank is generated from the bundled vocabulary data, so no external API is needed for exercise functionality.


## Phase 12 — game corrections

- Vocabulary games now use the currently selected interface language for translations: Serbian, Russian or English definitions. English mode uses entries with a supplied English definition rather than silently falling back to Serbian. The current vocabulary data has 60 entries with English definitions; Serbian and Russian modes can use all 471 entries because those translations are present.
- Matching and memory-card pairs use the same language-aware vocabulary source.
- Memory-card faces display the corresponding English word and selected-language meaning/definition.
- Sentence Builder now gives a short task clue and shuffled word tiles; the complete target sentence is no longer displayed in the prompt. Five sentence patterns are available.
- Complete the Sentence uses a missing vocabulary item and adds its English definition in parentheses.
- True/False statements use the selected language for the displayed meaning, and the True/False controls are localised.
- Speed Quiz uses the same language-aware question generator and no longer labels options as Serbian translations.
- Hints appear directly below the question in a highlighted panel. Vocabulary hints provide part of speech, word length and a letter pattern; other games provide contextual clues.
