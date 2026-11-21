import { vocabulary as vocabularyWords } from "./vocabulary.js";

export const exercises = [
{id:"e01",category:"Present Simple",type:"choice",question:"My brother _____ to work by bus every day.",options:["go","goes","is going","going"],answer:"goes",explanation:"With he, she and it, add -s or -es in the Present Simple."},
{id:"e02",category:"Present Continuous",type:"choice",question:"Please be quiet. I _____ to concentrate.",options:["try","tries","am trying","tried"],answer:"am trying",explanation:"The action is happening at the moment, so use am/is/are + verb-ing."},
{id:"e03",category:"Present Simple vs Continuous",type:"choice",question:"She usually _____ from home, but this week she _____ in the office.",options:["works / is working","is working / works","work / working","worked / works"],answer:"works / is working",explanation:"Use Present Simple for a routine and Present Continuous for a temporary situation."},
{id:"e04",category:"Past Simple",type:"choice",question:"We _____ the museum when we were in Rome.",options:["visit","visited","have visited","were visit"],answer:"visited",explanation:"A finished event in a finished past period takes Past Simple."},
{id:"e05",category:"Past Simple",type:"fill",question:"Complete the sentence with the Past Simple form: She _____ (buy) a new laptop yesterday.",answers:["bought"],explanation:"Buy is irregular: buy – bought – bought."},
{id:"e06",category:"Past Continuous",type:"choice",question:"At 8 p.m. last night, they _____ dinner.",options:["had","have","were having","are having"],answer:"were having",explanation:"Use Past Continuous for an action in progress at a particular past time."},
{id:"e07",category:"Past Simple vs Continuous",type:"choice",question:"I _____ home when I _____ an old friend.",options:["walked / was seeing","was walking / saw","am walking / see","walk / saw"],answer:"was walking / saw",explanation:"The longer background action is Past Continuous; the shorter event is Past Simple."},
{id:"e08",category:"Present Perfect",type:"choice",question:"Have you ever _____ sushi?",options:["eat","ate","eaten","eating"],answer:"eaten",explanation:"Present Perfect uses have/has + past participle. Eat – ate – eaten."},
{id:"e09",category:"Present Perfect",type:"fill",question:"Complete with since or for: I've worked here _____ 2022.",answers:["since"],explanation:"Use since with the starting point of a period."},
{id:"e10",category:"Present Perfect vs Past Simple",type:"choice",question:"I _____ my first car in 2021.",options:["have bought","bought","have buy","buy"],answer:"bought",explanation:"In 2021 is a finished past-time reference, so use Past Simple."},
{id:"e11",category:"Present Perfect vs Past Simple",type:"choice",question:"_____ you ever _____ abroad?",options:["Did / went","Have / been","Have / went","Do / been"],answer:"Have / been",explanation:"Ask about life experience with Have you ever + past participle?"},
{id:"e12",category:"When and While",type:"choice",question:"The phone rang _____ I was taking a shower.",options:["while","when","during","for"],answer:"while",explanation:"While introduces the longer action in progress."},
{id:"e13",category:"When and While",type:"choice",question:"I was driving _____ I heard a strange noise.",options:["while","when","during","since"],answer:"when",explanation:"When introduces the event that happened during the ongoing action."},
{id:"e14",category:"Infinitive of Purpose",type:"choice",question:"I went to the shop _____ some milk.",options:["for buy","to buy","for buying","buy"],answer:"to buy",explanation:"Use to + infinitive to explain the purpose of an action."},
{id:"e15",category:"Adverbs of Frequency",type:"choice",question:"Choose the natural word order.",options:["I go usually by train.","I usually go by train.","Usually I am go by train.","I go by usually train."],answer:"I usually go by train.",explanation:"Frequency adverbs usually come before the main verb."},
{id:"e16",category:"Adverbs of Frequency",type:"choice",question:"She _____ late. She is always on time.",options:["never is","is never","never","does never be"],answer:"is never",explanation:"Frequency adverbs normally come after the verb be."},
{id:"e17",category:"Vocabulary — Work",type:"choice",question:"A person you work with is a _____.",options:["destination","colleague","witness","degree"],answer:"colleague",explanation:"A colleague is someone you work with."},
{id:"e18",category:"Vocabulary — Education",type:"choice",question:"To complete a university course is to _____.",options:["attend","apply","graduate","interrupt"],answer:"graduate",explanation:"Graduate means to complete a course at a university or college."},
{id:"e19",category:"Vocabulary — Experiences",type:"choice",question:"Something good that you succeed in doing is an _____.",options:["achievement","attachment","arrival","assignment"],answer:"achievement",explanation:"An achievement is something important that you have succeeded in doing."},
{id:"e20",category:"Vocabulary — News",type:"choice",question:"The title of a news story is its _____.",options:["deadline","headline","schedule","platform"],answer:"headline",explanation:"A headline is the title of a news report."},
{id:"e21",category:"Vocabulary — Technology",type:"choice",question:"A file sent with an email is an _____.",options:["update","access","attachment","device"],answer:"attachment",explanation:"An attachment is a file included with an email."},
{id:"e22",category:"Vocabulary — Travel",type:"choice",question:"The place you are travelling to is your _____.",options:["departure","destination","fare","queue"],answer:"destination",explanation:"A destination is the place someone is travelling to."},
{id:"e23",category:"Vocabulary — Travel",type:"fill",question:"Complete the phrase: boarding _____.",answers:["pass"],explanation:"A boarding pass is the document that allows a passenger to board a plane."},
{id:"e24",category:"Vocabulary — Work",type:"fill",question:"The latest date by which work must be finished is the _____.",answers:["deadline"],explanation:"A deadline is the final time or date for completing something."}
];

// Additional teacher-written grammar practice. Every item has one defensible answer.
const grammarSeeds = [
["Present Simple","My parents _____ in a small town near the coast.","live",["lives","are living","lived"],"Use the base form with the plural subject my parents."],
["Present Simple","How often _____ your manager _____ team meetings?","does / organise",["do / organises","does / organises","is / organising"],"In a Present Simple question with he/she/it, use does + base verb."],
["Present Simple","Water _____ at 100°C at sea level.","boils",["boil","is boiling","boiled"],"Use Present Simple for scientific facts."],
["Present Simple","He _____ coffee because it keeps him awake at night.","doesn't drink",["don't drink","isn't drink","doesn't drinks"],"Use doesn't + base verb for a third-person singular negative."],
["Present Simple","The last train _____ at 11:45 p.m.","leaves",["leave","is leaving","left"],"Present Simple is commonly used for fixed timetables."],
["Present Continuous","Look! The children _____ across the park.","are running",["run","runs","ran"],"Look! signals an action happening now."],
["Present Continuous","I can't talk now; I _____ a meeting.","am attending",["attend","attends","attended"],"Use am + verb-ing for an action in progress now."],
["Present Continuous","Why _____ you _____ so quickly? I can't follow you.","are / speaking",["do / speak","are / speak","is / speaking"],"Present Continuous questions put are before the subject and use verb-ing."],
["Present Continuous","The cost of living _____ at the moment.","is increasing",["increase","increases","increased"],"Use Present Continuous for a changing situation."],
["Present Continuous","We _____ with my aunt this month while our flat is being repaired.","are staying",["stay","stays","stayed"],"A temporary arrangement takes Present Continuous."],
["Present Simple vs Continuous","Mila normally _____ by car, but today she _____ the bus.","travels / is taking",["is travelling / takes","travel / taking","travelled / takes"],"Normally describes a routine; today describes a temporary exception."],
["Present Simple vs Continuous","I _____ what you mean. Could you give another example?","understand",["am understanding","understands","understood"],"Understand is usually a stative verb and is not normally used in the continuous form."],
["Present Simple vs Continuous","This week our team _____ on a new project.","is working",["work","works","worked"],"This week can describe a temporary activity in progress."],
["Past Simple","They _____ the contract two days ago.","signed",["sign","have signed","were signing"],"Two days ago is a finished past-time expression."],
["Past Simple","Where _____ you _____ your English course?","did / start",["do / started","did / started","were / start"],"Use did + subject + base verb in Past Simple questions."],
["Past Simple","She _____ the email because she was busy.","didn't answer",["doesn't answered","didn't answered","wasn't answer"],"After didn't, use the base form answer."],
["Past Simple","We _____ a great time at the conference last Friday.","had",["have","has","were having"],"Have is irregular: have – had – had."],
["Past Simple","He _____ his keys, so he couldn't open the door.","lost",["lose","has lost","was lose"],"Lost is the Past Simple form of lose."],
["Past Continuous","At midnight, I _____ for the exam.","was studying",["studied","am studying","have studied"],"Use Past Continuous for an action in progress at a particular past time."],
["Past Continuous","The employees _____ when the fire alarm went off.","were working",["worked","was working","are working"],"The plural subject employees takes were + verb-ing."],
["Past Continuous","What _____ she _____ when you called?","was / doing",["did / do","were / doing","was / do"],"Past Continuous questions use was/were + subject + verb-ing."],
["Past Simple vs Continuous","While I _____ the report, my computer suddenly _____.","was writing / crashed",["wrote / was crashing","write / crashes","was writing / was crash"],"The ongoing background action uses Past Continuous; the sudden event uses Past Simple."],
["Past Simple vs Continuous","He _____ his ankle while he _____ football.","twisted / was playing",["was twisting / played","twists / was playing","twisted / played"],"The injury is the event; playing football is the background activity."],
["Past Simple vs Continuous","We _____ home when it _____ to snow.","were driving / started",["drove / was starting","were driving / was starting","drive / starts"],"The drive was in progress when the snow began."],
["Present Perfect","I _____ never _____ such a beautiful building.","have / seen",["did / see","has / saw","have / saw"],"Present Perfect uses have + past participle; see – saw – seen."],
["Present Perfect","Tom _____ just _____ his driving test.","has / passed",["have / pass","did / passed","has / pass"],"With he, use has + past participle. Just often marks a recent result."],
["Present Perfect","We _____ in this neighbourhood for six years.","have lived",["lived","are living","has lived"],"For six years describes a period continuing until now."],
["Present Perfect","_____ you ever _____ a presentation in English?","Have / given",["Did / gave","Have / gave","Has / give"],"Ask about life experience with Have + subject + past participle."],
["Present Perfect","She hasn't replied to my message _____.","yet",["already","since","ever"],"Yet is common in negative Present Perfect sentences when something is expected."],
["Present Perfect","I have known Mark _____ we were at school.","since",["for","during","from"],"Since introduces the starting point of a period."],
["Present Perfect vs Past Simple","We _____ that film last weekend.","watched",["have watched","have watch","watch"],"Last weekend is a finished past-time reference, so use Past Simple."],
["Present Perfect vs Past Simple","_____ you _____ the report yet?","Have / finished",["Did / finished","Have / finish","Do / finished"],"Yet in a question commonly pairs with Present Perfect."],
["Present Perfect vs Past Simple","When _____ she _____ to London?","did / move",["has / moved","did / moved","does / moved"],"When asks for a specific past time; use did + base verb."],
["Present Perfect vs Past Simple","I _____ my wallet. I can't find it anywhere.","have lost",["lost yesterday","lose","was losing"],"The present result (the wallet is still missing) supports Present Perfect."],
["When and While","_____ I was waiting for the bus, I read the news.","While",["During","Since","Until"],"While introduces a clause with an ongoing action."],
["When and While","Please call me _____ you get to the station.","when",["while","during","for"],"When introduces the moment an event happens."],
["When and While","The lights went out _____ we were having dinner.","while",["during","since","for"],"While is followed by a subject and verb clause."],
["When and While","I was just leaving _____ the delivery driver arrived.","when",["while","during","for"],"When naturally introduces the shorter event that happened at that moment."],
["Infinitive of Purpose","She called the hotel _____ whether breakfast was included.","to ask",["for ask","asking","to asking"],"Use to + base verb to express the purpose of calling."],
["Infinitive of Purpose","I use a calendar _____ important appointments.","to remember",["for remember","remembering","to remembering"],"To + infinitive explains why the calendar is used."],
["Infinitive of Purpose","They saved money _____ a new car.","to buy",["for buy","buy","for buying"],"Use to + infinitive to state the purpose of saving."],
["Infinitive of Purpose","He left early _____ being late for the interview.","so as not to risk",["for not risk","so as not risking","not to risking"],"So as not to + base verb expresses a negative purpose."],
["Adverbs of Frequency","My sister _____ checks her emails before breakfast.","usually",["usual","usualness","use"],"Usually is an adverb of frequency and normally comes before the main verb."],
["Adverbs of Frequency","They are _____ late for work; they are very punctual.","hardly ever",["hard ever","hardly never","ever hardly"],"Hardly ever means almost never and follows the verb be."],
["Adverbs of Frequency","How _____ do you visit your grandparents?","often",["many","long","much"],"How often asks about frequency."],
["Adverbs of Frequency","He doesn't _____ eat meat.","usually",["usual","use","usualness"],"Usually can appear after an auxiliary negative and before the main verb."],
["Adverbs of Frequency","I _____ go to the gym on Mondays, but not every week.","sometimes",["some time","sometime","some times"],"Sometimes is the frequency adverb meaning on some occasions."],
["Present Simple","Does your sister _____ in the city centre?","work",["works","working","worked"],"After does, use the base form of the main verb."],
["Past Simple","The company _____ a new branch in 2020.","opened",["opens","has open","was open"],"A specific finished year in the past takes Past Simple."],
["Present Perfect","They have _____ the same car for ten years.","owned",["own","owns","owning"],"Have + past participle is required; own is a regular verb."],
["Present Perfect vs Past Simple","I _____ him since we graduated.","haven't seen",["didn't see","don't see","wasn't seeing"],"Since connects a period that continues to the present."],
["Past Continuous","The passengers _____ when the announcement began.","were boarding",["boarded","was boarding","are boarding"],"The plural subject takes were + verb-ing for the ongoing action."],
["When and While","I met Sara _____ I was studying at university.","while",["during","for","since"],"While introduces the longer period or ongoing activity."],
["Infinitive of Purpose","We went to the library _____ for our exam.","to study",["for study","studying","to studying"],"To study explains the purpose of going to the library."],
["Adverbs of Frequency","She is _____ nervous before presentations.","rarely",["rare","rarity","rarest"],"Rarely is an adverb and comes after the verb be."],
["Present Simple vs Continuous","Why _____ the baby _____? Is something wrong?","is / crying",["does / cry","are / crying","is / cry"],"The question concerns an action happening now."],
["Past Simple vs Continuous","I _____ my phone while I _____ for the train.","checked / was waiting",["was checking / waited","check / was waiting","checked / waited"],"Checking is a completed event during the ongoing wait."],
["Present Perfect","Have they _____ the documents?","sent",["send","sending","sended"],"Send is irregular: send – sent – sent."],
["Present Perfect vs Past Simple","She _____ three emails this morning, and it is still morning.","has written",["wrote yesterday","writes","was writing"],"A time period that is still open can take Present Perfect when the result matters now."],
["When and While","The teacher was explaining the task _____ the fire alarm rang.","when",["during","for","since"],"When introduces the shorter event interrupting the explanation."],
["Infinitive of Purpose","He turned on the computer _____ the presentation.","to prepare",["for prepare","prepared","to preparing"],"Use to + base verb to show the reason for turning on the computer."],
["Adverbs of Frequency","We _____ travel abroad because we prefer holidays at home.","seldom",["seldomly","seldomness","seld"],"Seldom is an adverb meaning not often."],
["Present Simple","My course _____ at 9 a.m. every Tuesday.","starts",["start","is starting","started"],"Use Present Simple for a regular schedule."],
["Past Simple","I _____ the wrong platform and missed my train.","chose",["choose","chosen","choosed"],"Choose is irregular: choose – chose – chosen."],
["Present Perfect","He has _____ his password, so he can't log in.","forgotten",["forget","forgot","forgetting"],"Present Perfect requires the past participle forgotten."],
["Past Continuous","At this time yesterday, we _____ to the airport.","were travelling",["travelled","was travelling","have travelled"],"Use were + verb-ing with the plural subject we."],
["Present Simple vs Continuous","I _____ this book is useful, but I _____ it at the moment.","think / am reading",["am thinking / read","think / read","am thinking / am read"],"Think meaning have an opinion is usually stative; reading is happening now."],
["Present Perfect vs Past Simple","They _____ here in 2018 and still work here.","started",["have started","have start","start"],"The starting event happened at a finished time in 2018."],
["When and While","_____ the guests were arriving, we were preparing dinner.","While",["During","Since","Until"],"While is followed by a full clause with a subject and verb."],
["Adverbs of Frequency","I have _____ been to Canada, but I would like to go.","never",["ever","yet","already"],"Never expresses the absence of an experience up to now."],
["Infinitive of Purpose","She took notes _____ the information later.","to remember",["for remember","remembering","to remembering"],"The infinitive explains the purpose of taking notes."]
];

const grammarExtras = grammarSeeds.map((row,index)=>({id:`gx-${String(index+1).padStart(3,"0")}`,category:row[0],type:"choice",question:row[1],answer:row[2],options:[row[2],...row[3]],explanation:row[4]}));

// Build a large offline vocabulary question bank from the 471 curated course entries.
// Serbian prompts are unique; distractors are drawn from the same part of speech where possible.
const vocabEntries = vocabularyWords.filter(v => v.translation?.sr && v.word && /^[\p{L}][\p{L} '-]*$/u.test(v.word));
const translationSeen = new Set();
const vocabExtras = [];
for (const [index, item] of vocabEntries.entries()) {
  const translation = item.translation.sr.trim();
  const key = translation.toLocaleLowerCase("sr");
  if (translationSeen.has(key)) continue;
  translationSeen.add(key);
  const sameType = vocabEntries.filter(v => v.partOfSpeech === item.partOfSpeech && v.word.toLowerCase() !== item.word.toLowerCase() && v.translation?.sr && v.translation.sr.toLocaleLowerCase("sr") !== key);
  const fallback = vocabEntries.filter(v => v.word.toLowerCase() !== item.word.toLowerCase() && v.translation?.sr && v.translation.sr.toLocaleLowerCase("sr") !== key);
  const pool = sameType.length >= 3 ? sameType : fallback;
  const distractors = [];
  for (let step = 0; step < pool.length && distractors.length < 3; step++) {
    const candidate = pool[(index * 7 + step * 13) % pool.length];
    const label = candidate.word;
    if (label.toLowerCase() !== item.word.toLowerCase() && !distractors.includes(label)) distractors.push(label);
  }
  if (distractors.length !== 3) continue;
  const options = [item.word, ...distractors];
  vocabExtras.push({
    id: `vx-${item.id}`,
    category: `Vocabulary — ${item.category.replaceAll("-", " ")}`,
    type: "choice",
    question: `Choose the English word or expression that corresponds to the Serbian translation: “${translation}”.`,
    questionLocalized: {
      en: `Choose the English word or expression that corresponds to the Serbian translation: “${translation}”.`,
      sr: `Koja engleska reč ili izraz odgovara prevodu „${translation}“?`,
      ru: `Какое английское слово или выражение соответствует сербскому переводу «${translation}»?`
    },
    options,
    answer: item.word,
    explanation: `“${item.word}” means “${translation}” in Serbian. Example: ${item.example}`,
    explanationLocalized: {
      en: `“${item.word}” means “${translation}” in Serbian. Example: ${item.example}`,
      sr: `„${item.word}“ znači „${translation}“. Primer: ${item.example}`,
      ru: `«${item.word}» — это «${item.translation.ru}». Пример: ${item.example}`
    }
  });
}

const vocabFillExtras = [];
for (const item of vocabEntries) {
  const sentence = item.example || "";
  const escaped = item.word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = new RegExp(`(^|[^\\p{L}])(${escaped})(?=$|[^\\p{L}])`, "iu");
  if (!match.test(sentence)) continue;
  const prompt = sentence.replace(match, (_whole, before) => `${before}_____`);
  vocabFillExtras.push({
    id: `vf-${item.id}`,
    category: `Vocabulary — ${item.category.replaceAll("-", " ")}`,
    type: "fill",
    question: `Complete the sentence with the correct vocabulary item: ${prompt}`,
    questionLocalized: {
      en: `Complete the sentence with the correct vocabulary item: ${prompt}`,
      sr: `Dopuni rečenicu odgovarajućom rečju ili izrazom: ${prompt}`,
      ru: `Заполните предложение подходящим словом или выражением: ${prompt}`
    },
    answers: [item.word],
    explanation: `The missing expression is “${item.word}” (${item.translation.sr}). ${sentence}`,
    explanationLocalized: {
      en: `The missing expression is “${item.word}” (${item.translation.sr}). ${sentence}`,
      sr: `Nedostaje izraz „${item.word}“ (${item.translation.sr}). ${sentence}`,
      ru: `Пропущенное выражение — «${item.word}» (${item.translation.ru}). ${sentence}`
    }
  });
}

export const exerciseBank = [...exercises, ...grammarExtras, ...vocabExtras, ...vocabFillExtras];
