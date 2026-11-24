const rows = [
["introductions","introduce","verb","to tell someone your name or present another person","predstaviti","представлять","lesson-01","communication"],
["introductions","greet","verb","to say hello to someone","pozdraviti","приветствовать","lesson-01","communication"],
["introductions","colleague","noun","a person you work with","kolega / koleginica","коллега","lesson-01","work"],
["introductions","occupation","noun","a person's job or profession","zanimanje","профессия","lesson-01","work"],
["introductions","customer support","noun","help given to people who use a product or service","korisnička podrška","служба поддержки клиентов","lesson-01","work"],
["personal-information","available","adjective","free to do something or ready for use","dostupan","доступный","lesson-01","general"],
["personal-information","currently","adverb","at the present time","trenutno","в настоящее время","lesson-01","time"],
["daily-routines","commute","verb/noun","to travel regularly between home and work or school","putovati na posao / putovanje na posao","ездить на работу","lesson-01","daily life"],
["daily-routines","schedule","noun","a plan that lists times for activities","raspored","расписание","lesson-01","daily life"],
["daily-routines","temporary","adjective","lasting for a limited period of time","privremen","временный","lesson-01","general"],
["education","degree","noun","a qualification awarded by a university or college","diploma / akademsko zvanje","степень","lesson-02","education"],
["education","graduate","verb","to complete a university or college course","diplomirati","окончить учебное заведение","lesson-02","education"],
["education","assignment","noun","a piece of work given to a student","zadatak","задание","lesson-02","education"],
["education","lecture","noun","a talk given to teach people about a subject","predavanje","лекция","lesson-02","education"],
["education","qualification","noun","an examination or official completion that proves ability or knowledge","kvalifikacija","квалификация","lesson-02","education"],
["education","scholarship","noun","money given to support a student's education","stipendija","стипендия","lesson-02","education"],
["life-events","experience","noun","knowledge or skill gained by doing something","iskustvo","опыт","lesson-02","general"],
["life-events","achievement","noun","something good that you succeed in doing","postignuće","достижение","lesson-02","general"],
["life-events","attend","verb","to go to an event, class or meeting","prisustvovati","посещать","lesson-02","education"],
["life-events","apply","verb","to make a formal request for a job, course or opportunity","prijaviti se / konkurisati","подавать заявление","lesson-02","work"],
["experiences","ever","adverb","at any time in your life or in a period up to now","ikada","когда-либо","lesson-03","time"],
["experiences","recently","adverb","not long ago","nedavno","недавно","lesson-03","time"],
["experiences","so far","phrase","until now","do sada","до сих пор","lesson-03","time"],
["experiences","improve","verb","to become or make something better","poboljšati (se)","улучшать(ся)","lesson-03","development"],
["experiences","manage","verb","to succeed in doing something, often with difficulty","uspeti / snaći se","справиться","lesson-03","development"],
["experiences","take part","verb phrase","to participate in an activity","učestvovati","принимать участие","lesson-03","communication"],
["achievements","reach a goal","verb phrase","to achieve something you planned to do","ostvariti cilj","достичь цели","lesson-03","development"],
["achievements","confident","adjective","feeling sure about your abilities or decisions","samouveren","уверенный","lesson-03","personality"],
["achievements","skill","noun","an ability to do something well","veština","навык","lesson-03","work"],
["news","headline","noun","the title of a news report","naslov vesti","заголовок","lesson-04","media"],
["news","report","noun/verb","a description of an event or the act of describing it","izveštaj / izvestiti","отчёт / сообщать","lesson-04","media"],
["news","witness","noun/verb","a person who sees an event; to see it happen","svedok / biti svedok","свидетель / быть свидетелем","lesson-04","media"],
["news","occur","verb","to happen","dogoditi se","происходить","lesson-04","general"],
["memories","remind","verb","to make someone remember something","podsetiti","напоминать","lesson-04","communication"],
["memories","memorable","adjective","worth remembering because it is special or unusual","nezaboravan","памятный","lesson-04","general"],
["unexpected-events","suddenly","adverb","quickly and without warning","iznenada","внезапно","lesson-04","time"],
["unexpected-events","interrupt","verb","to stop someone while they are doing or saying something","prekinuti","прерывать","lesson-04","communication"],
["technology","device","noun","a piece of equipment made for a particular purpose","uređaj","устройство","lesson-05","technology"],
["technology","update","noun/verb","a newer version or the act of making something current","ažuriranje / ažurirati","обновление / обновлять","lesson-05","technology"],
["technology","download","verb/noun","to copy data from the internet to a device","preuzeti / preuzimanje","скачивать / загрузка","lesson-05","technology"],
["technology","attachment","noun","a file sent with an email","prilog","вложение","lesson-05","technology"],
["technology","password","noun","a secret word or group of characters used to access a system","lozinka","пароль","lesson-05","technology"],
["technology","access","noun/verb","the ability or right to use something","pristup","доступ","lesson-05","technology"],
["emails","subject line","noun","the short title of an email","naslov imejla","тема письма","lesson-05","communication"],
["emails","forward","verb","to send a received email to another person","proslediti","переслать","lesson-05","communication"],
["emails","request","noun/verb","a polite or formal act of asking for something","zahtev / zatražiti","запрос / просить","lesson-05","communication"],
["emails","regards","noun","a polite closing used in letters and emails","srdačan pozdrav","с уважением","lesson-05","communication"],
["work-communication","deadline","noun","the latest time or date by which work must be finished","rok","срок","lesson-05","work"],
["work-communication","confirm","verb","to say or show that something is definitely true or arranged","potvrditi","подтвердить","lesson-05","work"],
["travel","departure","noun","the act or time of leaving a place","polazak","отправление","lesson-06","travel"],
["travel","arrival","noun","the act or time of reaching a place","dolazak","прибытие","lesson-06","travel"],
["travel","destination","noun","the place someone is travelling to","odredište","место назначения","lesson-06","travel"],
["travel","accommodation","noun","a place to stay when travelling","smeštaj","жильё","lesson-06","travel"],
["transport","platform","noun","the area beside a railway track where passengers get on or off a train","peron","платформа","lesson-06","travel"],
["transport","delay","noun/verb","a situation in which something happens later than planned","kašnjenje / odložiti","задержка / задерживать","lesson-06","travel"],
["transport","fare","noun","the money paid for a journey on public transport","cena karte","стоимость проезда","lesson-06","travel"],
["procedures","check in","verb","to register at an airport or hotel","prijaviti se","зарегистрироваться","lesson-06","travel"],
["procedures","boarding pass","noun","a document that allows a passenger to board a plane","karta za ukrcavanje","посадочный талон","lesson-06","travel"],
["procedures","luggage","noun","the bags and cases you take when travelling","prtljag","багаж","lesson-06","travel"],
["procedures","queue","noun/verb","a line of people waiting for something","red / čekati u redu","очередь / стоять в очереди","lesson-06","travel"]
];
export const vocabulary = rows.map((r,i)=>({id:`word-${String(i+1).padStart(3,"0")}`,topic:r[0],word:r[1],partOfSpeech:r[2],definition:r[3],translation:{sr:r[4],ru:r[5]},lessonId:r[6],category:r[7],example:makeExample(r[1])}));
function makeExample(word){const examples={introduce:"Let me introduce my colleague, Anna.",greet:"He greeted everyone when he arrived.",colleague:"I discussed the project with a colleague.",occupation:"Please write your occupation on the form.","customer support":"Customer support is available by email.",available:"Are you available for a short meeting?",currently:"I'm currently learning English.",commute:"My commute takes about thirty minutes.",schedule:"I check my schedule every morning.",temporary:"This is a temporary solution.",degree:"She has a degree in engineering.",graduate:"I hope to graduate next year.",assignment:"We have to finish the assignment by Friday.",lecture:"The lecture starts at ten.",qualification:"The job requires a professional qualification.",scholarship:"He received a scholarship to study abroad.",experience:"I have experience in web development.",achievement:"Finishing the course was a big achievement.",attend:"I attend English classes twice a week.",apply:"She plans to apply for the position.",ever:"Have you ever visited London?",recently:"I've recently changed my routine.","so far":"So far, we have completed three tasks.",improve:"Reading can improve your vocabulary.",manage:"Did you manage to solve the problem?","take part":"Would you like to take part in the project?","reach a goal":"It takes time to reach a goal.",confident:"She feels confident when speaking English.",skill:"Communication is an important skill.",headline:"The headline caught my attention.",report:"The report describes what happened.",witness:"A witness spoke to the police.",occur:"The problem can occur after an update.",remind:"Please remind me to send the email.",memorable:"It was a memorable trip.",suddenly:"Suddenly, the lights went out.",interrupt:"I don't want to interrupt your work.",device:"This device connects to the internet.",update:"Please install the latest update.",download:"You can download the document here.",attachment:"I've included the file as an attachment.",password:"Never share your password.",access:"You need access to view the folder.","subject line":"Write a clear subject line for your email.",forward:"Could you forward me the message?",request:"Thank you for your request.",regards:"Kind regards, Alex","deadline":"The deadline is next Wednesday.",confirm:"Please confirm your attendance.",departure:"The departure time is 7:45.",arrival:"Our arrival is scheduled for noon.",destination:"Paris is a popular destination.",accommodation:"We booked our accommodation online.",platform:"The train leaves from platform four.",delay:"There was a delay because of bad weather.",fare:"The bus fare is three euros.","check in":"You can check in online.","boarding pass":"Show your boarding pass at the gate.",luggage:"My luggage is too heavy.",queue:"We had to queue for tickets."};return examples[word]||`I use the word ${word} in everyday English.`}


// Additional B1 vocabulary grouped by practical topic. Existing IDs remain unchanged.
const supplementaryRows = [
  {
    "topic": "daily-life",
    "word": "habit",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "navika",
      "ru": "привычка"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "We discussed the habit during the meeting."
  },
  {
    "topic": "daily-life",
    "word": "routine",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "rutina",
      "ru": "распорядок"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "We discussed the routine during the meeting."
  },
  {
    "topic": "daily-life",
    "word": "household",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "domaćinstvo",
      "ru": "домашнее хозяйство"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "We discussed the household during the meeting."
  },
  {
    "topic": "daily-life",
    "word": "neighbourhood",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "komšiluk",
      "ru": "район"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "We discussed the neighbourhood during the meeting."
  },
  {
    "topic": "daily-life",
    "word": "resident",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "stanovnik",
      "ru": "житель"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "We discussed the resident during the meeting."
  },
  {
    "topic": "daily-life",
    "word": "appointment",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "termin",
      "ru": "встреча"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "We discussed the appointment during the meeting."
  },
  {
    "topic": "daily-life",
    "word": "reminder",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "podsetnik",
      "ru": "напоминание"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "We discussed the reminder during the meeting."
  },
  {
    "topic": "daily-life",
    "word": "task",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "zadatak",
      "ru": "задача"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "We discussed the task during the meeting."
  },
  {
    "topic": "daily-life",
    "word": "errand",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "obaveza koju treba obaviti",
      "ru": "поручение"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "We discussed the errand during the meeting."
  },
  {
    "topic": "daily-life",
    "word": "laundry",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "veš",
      "ru": "стирка"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "I do the laundry at the weekend."
  },
  {
    "topic": "daily-life",
    "word": "chores",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "kućni poslovi",
      "ru": "домашние дела"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "We discussed the chores during the meeting."
  },
  {
    "topic": "daily-life",
    "word": "occasion",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "prilika",
      "ru": "случай"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "We discussed the occasion during the meeting."
  },
  {
    "topic": "daily-life",
    "word": "lifestyle",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "način života",
      "ru": "образ жизни"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "We discussed the lifestyle during the meeting."
  },
  {
    "topic": "daily-life",
    "word": "privacy",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "privatnost",
      "ru": "конфиденциальность"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "We discussed the privacy during the meeting."
  },
  {
    "topic": "daily-life",
    "word": "permission",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "dozvola",
      "ru": "разрешение"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "We discussed the permission during the meeting."
  },
  {
    "topic": "daily-life",
    "word": "choice",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "izbor",
      "ru": "выбор"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "We discussed the choice during the meeting."
  },
  {
    "topic": "daily-life",
    "word": "decision",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "odluka",
      "ru": "решение"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "We discussed the decision during the meeting."
  },
  {
    "topic": "daily-life",
    "word": "reason",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "razlog",
      "ru": "причина"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "We discussed the reason during the meeting."
  },
  {
    "topic": "daily-life",
    "word": "opportunity",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "prilika",
      "ru": "возможность"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "We discussed the opportunity during the meeting."
  },
  {
    "topic": "daily-life",
    "word": "challenge",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "izazov",
      "ru": "вызов"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "We discussed the challenge during the meeting."
  },
  {
    "topic": "daily-life",
    "word": "solution",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "rešenje",
      "ru": "решение"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "We discussed the solution during the meeting."
  },
  {
    "topic": "daily-life",
    "word": "organise",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "organizovati",
      "ru": "организовывать"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "I need to organise this before the end of the day."
  },
  {
    "topic": "daily-life",
    "word": "prepare",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "pripremiti",
      "ru": "готовить"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "I need to prepare this before the end of the day."
  },
  {
    "topic": "daily-life",
    "word": "avoid",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "izbegavati",
      "ru": "избегать"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "I need to avoid this before the end of the day."
  },
  {
    "topic": "daily-life",
    "word": "prefer",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "više voleti",
      "ru": "предпочитать"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "I need to prefer this before the end of the day."
  },
  {
    "topic": "daily-life",
    "word": "depend",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "zavisiti",
      "ru": "зависеть"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "The result depends on the information we receive."
  },
  {
    "topic": "daily-life",
    "word": "expect",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "očekivati",
      "ru": "ожидать"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "I need to expect this before the end of the day."
  },
  {
    "topic": "daily-life",
    "word": "notice",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "primetiti",
      "ru": "замечать"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "I need to notice this before the end of the day."
  },
  {
    "topic": "daily-life",
    "word": "borrow",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "pozajmiti (od nekoga)",
      "ru": "брать взаймы"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "I need to borrow this before the end of the day."
  },
  {
    "topic": "daily-life",
    "word": "lend",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "pozajmiti (nekome)",
      "ru": "давать взаймы"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "I need to lend this before the end of the day."
  },
  {
    "topic": "daily-life",
    "word": "share",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "deliti",
      "ru": "делиться"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "I need to share this before the end of the day."
  },
  {
    "topic": "daily-life",
    "word": "collect",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "prikupiti",
      "ru": "собирать"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "I need to collect this before the end of the day."
  },
  {
    "topic": "daily-life",
    "word": "repair",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "popraviti",
      "ru": "ремонтировать"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "I need to repair this before the end of the day."
  },
  {
    "topic": "daily-life",
    "word": "replace",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "zameniti",
      "ru": "заменять"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "I need to replace this before the end of the day."
  },
  {
    "topic": "daily-life",
    "word": "cancel",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "otkazati",
      "ru": "отменять"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "I need to cancel this before the end of the day."
  },
  {
    "topic": "daily-life",
    "word": "arrange",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "dogovoriti / organizovati",
      "ru": "организовывать"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "I need to arrange this before the end of the day."
  },
  {
    "topic": "daily-life",
    "word": "convenient",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "pogodan",
      "ru": "удобный"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "It is important to find a convenient solution."
  },
  {
    "topic": "daily-life",
    "word": "crowded",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "prepun",
      "ru": "переполненный"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "It is important to find a crowded solution."
  },
  {
    "topic": "daily-life",
    "word": "quiet",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "tih",
      "ru": "тихий"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "It is important to find a quiet solution."
  },
  {
    "topic": "daily-life",
    "word": "usual",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "uobičajen",
      "ru": "обычный"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "It is important to find a usual solution."
  },
  {
    "topic": "daily-life",
    "word": "unusual",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "neuobičajen",
      "ru": "необычный"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "It is important to find a unusual solution."
  },
  {
    "topic": "daily-life",
    "word": "necessary",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "neophodan",
      "ru": "необходимый"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "It is important to find a necessary solution."
  },
  {
    "topic": "daily-life",
    "word": "reliable",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "pouzdan",
      "ru": "надёжный"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "It is important to find a reliable solution."
  },
  {
    "topic": "daily-life",
    "word": "similar",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "sličan",
      "ru": "похожий"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "It is important to find a similar solution."
  },
  {
    "topic": "daily-life",
    "word": "different",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "drugačiji",
      "ru": "другой"
    },
    "lessonId": "supplementary",
    "category": "daily-life",
    "example": "It is important to find a different solution."
  },
  {
    "topic": "work",
    "word": "employee",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "zaposleni",
      "ru": "сотрудник"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "We discussed the employee during the meeting."
  },
  {
    "topic": "work",
    "word": "employer",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "poslodavac",
      "ru": "работодатель"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "We discussed the employer during the meeting."
  },
  {
    "topic": "work",
    "word": "manager",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "rukovodilac",
      "ru": "руководитель"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "We discussed the manager during the meeting."
  },
  {
    "topic": "work",
    "word": "department",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "odeljenje",
      "ru": "отдел"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "We discussed the department during the meeting."
  },
  {
    "topic": "work",
    "word": "company",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "kompanija",
      "ru": "компания"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "We discussed the company during the meeting."
  },
  {
    "topic": "work",
    "word": "workplace",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "radno mesto",
      "ru": "рабочее место"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "We discussed the workplace during the meeting."
  },
  {
    "topic": "work",
    "word": "responsibility",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "odgovornost",
      "ru": "ответственность"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "We discussed the responsibility during the meeting."
  },
  {
    "topic": "work",
    "word": "performance",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "učinak",
      "ru": "результат работы"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "We discussed the performance during the meeting."
  },
  {
    "topic": "work",
    "word": "feedback",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "povratna informacija",
      "ru": "обратная связь"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "We discussed the feedback during the meeting."
  },
  {
    "topic": "work",
    "word": "meeting",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "sastanak",
      "ru": "встреча"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "We discussed the meeting during the meeting."
  },
  {
    "topic": "work",
    "word": "agenda",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "dnevni red",
      "ru": "повестка дня"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "We discussed the agenda during the meeting."
  },
  {
    "topic": "work",
    "word": "minutes",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "zapisnik sa sastanka",
      "ru": "протокол"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "We discussed the minutes during the meeting."
  },
  {
    "topic": "work",
    "word": "project",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "projekat",
      "ru": "проект"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "We discussed the project during the meeting."
  },
  {
    "topic": "work",
    "word": "target",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "cilj",
      "ru": "цель"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "We discussed the target during the meeting."
  },
  {
    "topic": "work",
    "word": "goal",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "cilj",
      "ru": "цель"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "We discussed the goal during the meeting."
  },
  {
    "topic": "work",
    "word": "overtime",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "prekovremeni rad",
      "ru": "сверхурочная работа"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "I sometimes have to work overtime."
  },
  {
    "topic": "work",
    "word": "shift",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "smena",
      "ru": "смена"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "We discussed the shift during the meeting."
  },
  {
    "topic": "work",
    "word": "salary",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "plata",
      "ru": "зарплата"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "We discussed the salary during the meeting."
  },
  {
    "topic": "work",
    "word": "income",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "prihod",
      "ru": "доход"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "We discussed the income during the meeting."
  },
  {
    "topic": "work",
    "word": "benefit",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "pogodnost / beneficija",
      "ru": "льгота"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "We discussed the benefit during the meeting."
  },
  {
    "topic": "work",
    "word": "contract",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "ugovor",
      "ru": "договор"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "We discussed the contract during the meeting."
  },
  {
    "topic": "work",
    "word": "vacancy",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "slobodno radno mesto",
      "ru": "вакансия"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "We discussed the vacancy during the meeting."
  },
  {
    "topic": "work",
    "word": "application",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "prijava",
      "ru": "заявка"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "We discussed the application during the meeting."
  },
  {
    "topic": "work",
    "word": "interview",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "razgovor za posao",
      "ru": "собеседование"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "We discussed the interview during the meeting."
  },
  {
    "topic": "work",
    "word": "promotion",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "unapređenje",
      "ru": "повышение"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "We discussed the promotion during the meeting."
  },
  {
    "topic": "work",
    "word": "training",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "obuka",
      "ru": "обучение"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "The company provides regular training."
  },
  {
    "topic": "work",
    "word": "hire",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "zaposliti",
      "ru": "нанимать"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "I need to hire this before the end of the day."
  },
  {
    "topic": "work",
    "word": "resign",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "dati otkaz",
      "ru": "увольняться"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "I need to resign this before the end of the day."
  },
  {
    "topic": "work",
    "word": "retire",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "otići u penziju",
      "ru": "выходить на пенсию"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "I need to retire this before the end of the day."
  },
  {
    "topic": "work",
    "word": "negotiate",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "pregovarati",
      "ru": "вести переговоры"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "I need to negotiate this before the end of the day."
  },
  {
    "topic": "work",
    "word": "achieve",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "ostvariti",
      "ru": "достигать"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "I need to achieve this before the end of the day."
  },
  {
    "topic": "work",
    "word": "deal with",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "baviti se / rešavati",
      "ru": "иметь дело с"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "I deal with customer questions every day."
  },
  {
    "topic": "work",
    "word": "solve",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "rešiti",
      "ru": "решать"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "I need to solve this before the end of the day."
  },
  {
    "topic": "work",
    "word": "support",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "podržati",
      "ru": "поддерживать"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "I need to support this before the end of the day."
  },
  {
    "topic": "work",
    "word": "supervise",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "nadgledati",
      "ru": "контролировать"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "I need to supervise this before the end of the day."
  },
  {
    "topic": "work",
    "word": "collaborate",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "sarađivati",
      "ru": "сотрудничать"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "I need to collaborate this before the end of the day."
  },
  {
    "topic": "work",
    "word": "contribute",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "doprineti",
      "ru": "вносить вклад"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "I need to contribute this before the end of the day."
  },
  {
    "topic": "work",
    "word": "full-time",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "sa punim radnim vremenom",
      "ru": "полный рабочий день"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "He has a full-time job."
  },
  {
    "topic": "work",
    "word": "part-time",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "sa skraćenim radnim vremenom",
      "ru": "неполный рабочий день"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "She works part-time while studying."
  },
  {
    "topic": "work",
    "word": "permanent",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "stalan",
      "ru": "постоянный"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "It is important to find a permanent solution."
  },
  {
    "topic": "work",
    "word": "professional",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "profesionalan",
      "ru": "профессиональный"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "It is important to find a professional solution."
  },
  {
    "topic": "work",
    "word": "experienced",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "iskusan",
      "ru": "опытный"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "It is important to find a experienced solution."
  },
  {
    "topic": "work",
    "word": "qualified",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "kvalifikovan",
      "ru": "квалифицированный"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "It is important to find a qualified solution."
  },
  {
    "topic": "work",
    "word": "responsible",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "odgovoran",
      "ru": "ответственный"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "It is important to find a responsible solution."
  },
  {
    "topic": "work",
    "word": "efficient",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "efikasan",
      "ru": "эффективный"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "It is important to find a efficient solution."
  },
  {
    "topic": "work",
    "word": "flexible",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "fleksibilan",
      "ru": "гибкий"
    },
    "lessonId": "supplementary",
    "category": "work",
    "example": "It is important to find a flexible solution."
  },
  {
    "topic": "education",
    "word": "course",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "kurs",
      "ru": "курс"
    },
    "lessonId": "supplementary",
    "category": "education",
    "example": "We discussed the course during the meeting."
  },
  {
    "topic": "education",
    "word": "subject",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "predmet",
      "ru": "предмет"
    },
    "lessonId": "supplementary",
    "category": "education",
    "example": "We discussed the subject during the meeting."
  },
  {
    "topic": "education",
    "word": "classmate",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "drug iz odeljenja",
      "ru": "одноклассник"
    },
    "lessonId": "supplementary",
    "category": "education",
    "example": "We discussed the classmate during the meeting."
  },
  {
    "topic": "education",
    "word": "student",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "student",
      "ru": "студент"
    },
    "lessonId": "supplementary",
    "category": "education",
    "example": "We discussed the student during the meeting."
  },
  {
    "topic": "education",
    "word": "teacher",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "nastavnik",
      "ru": "преподаватель"
    },
    "lessonId": "supplementary",
    "category": "education",
    "example": "We discussed the teacher during the meeting."
  },
  {
    "topic": "education",
    "word": "textbook",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "udžbenik",
      "ru": "учебник"
    },
    "lessonId": "supplementary",
    "category": "education",
    "example": "We discussed the textbook during the meeting."
  },
  {
    "topic": "education",
    "word": "notebook",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "sveska",
      "ru": "тетрадь"
    },
    "lessonId": "supplementary",
    "category": "education",
    "example": "We discussed the notebook during the meeting."
  },
  {
    "topic": "education",
    "word": "research",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "istraživanje",
      "ru": "исследование"
    },
    "lessonId": "supplementary",
    "category": "education",
    "example": "The research took several months."
  },
  {
    "topic": "education",
    "word": "knowledge",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "znanje",
      "ru": "знание"
    },
    "lessonId": "supplementary",
    "category": "education",
    "example": "We discussed the knowledge during the meeting."
  },
  {
    "topic": "education",
    "word": "ability",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "sposobnost",
      "ru": "способность"
    },
    "lessonId": "supplementary",
    "category": "education",
    "example": "We discussed the ability during the meeting."
  },
  {
    "topic": "education",
    "word": "exam",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "ispit",
      "ru": "экзамен"
    },
    "lessonId": "supplementary",
    "category": "education",
    "example": "We discussed the exam during the meeting."
  },
  {
    "topic": "education",
    "word": "grade",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "ocena",
      "ru": "оценка"
    },
    "lessonId": "supplementary",
    "category": "education",
    "example": "We discussed the grade during the meeting."
  },
  {
    "topic": "education",
    "word": "result",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "rezultat",
      "ru": "результат"
    },
    "lessonId": "supplementary",
    "category": "education",
    "example": "We discussed the result during the meeting."
  },
  {
    "topic": "education",
    "word": "revision",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "ponavljanje gradiva",
      "ru": "повторение"
    },
    "lessonId": "supplementary",
    "category": "education",
    "example": "We discussed the revision during the meeting."
  },
  {
    "topic": "education",
    "word": "timetable",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "raspored časova",
      "ru": "расписание"
    },
    "lessonId": "supplementary",
    "category": "education",
    "example": "We discussed the timetable during the meeting."
  },
  {
    "topic": "education",
    "word": "study",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "učiti / studirati",
      "ru": "учиться"
    },
    "lessonId": "supplementary",
    "category": "education",
    "example": "I need to study this before the end of the day."
  },
  {
    "topic": "education",
    "word": "revise",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "ponavljati gradivo",
      "ru": "повторять материал"
    },
    "lessonId": "supplementary",
    "category": "education",
    "example": "I need to revise this before the end of the day."
  },
  {
    "topic": "education",
    "word": "memorise",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "naučiti napamet",
      "ru": "запоминать"
    },
    "lessonId": "supplementary",
    "category": "education",
    "example": "I need to memorise this before the end of the day."
  },
  {
    "topic": "education",
    "word": "understand",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "razumeti",
      "ru": "понимать"
    },
    "lessonId": "supplementary",
    "category": "education",
    "example": "I need to understand this before the end of the day."
  },
  {
    "topic": "education",
    "word": "explain",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "objasniti",
      "ru": "объяснять"
    },
    "lessonId": "supplementary",
    "category": "education",
    "example": "I need to explain this before the end of the day."
  },
  {
    "topic": "education",
    "word": "discuss",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "razgovarati o / diskutovati",
      "ru": "обсуждать"
    },
    "lessonId": "supplementary",
    "category": "education",
    "example": "I need to discuss this before the end of the day."
  },
  {
    "topic": "education",
    "word": "pass",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "položiti",
      "ru": "сдать"
    },
    "lessonId": "supplementary",
    "category": "education",
    "example": "I need to pass this before the end of the day."
  },
  {
    "topic": "education",
    "word": "fail",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "pasti (ispit)",
      "ru": "провалить"
    },
    "lessonId": "supplementary",
    "category": "education",
    "example": "I need to fail this before the end of the day."
  },
  {
    "topic": "education",
    "word": "submit",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "predati",
      "ru": "представлять"
    },
    "lessonId": "supplementary",
    "category": "education",
    "example": "I need to submit this before the end of the day."
  },
  {
    "topic": "education",
    "word": "academic",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "akademski",
      "ru": "академический"
    },
    "lessonId": "supplementary",
    "category": "education",
    "example": "She is interested in academic research."
  },
  {
    "topic": "education",
    "word": "compulsory",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "obavezan",
      "ru": "обязательный"
    },
    "lessonId": "supplementary",
    "category": "education",
    "example": "It is important to find a compulsory solution."
  },
  {
    "topic": "education",
    "word": "optional",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "opcion",
      "ru": "необязательный"
    },
    "lessonId": "supplementary",
    "category": "education",
    "example": "It is important to find a optional solution."
  },
  {
    "topic": "education",
    "word": "successful",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "uspešan",
      "ru": "успешный"
    },
    "lessonId": "supplementary",
    "category": "education",
    "example": "It is important to find a successful solution."
  },
  {
    "topic": "education",
    "word": "challenging",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "zahtevan",
      "ru": "сложный"
    },
    "lessonId": "supplementary",
    "category": "education",
    "example": "It is important to find a challenging solution."
  },
  {
    "topic": "feelings",
    "word": "mood",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "raspoloženje",
      "ru": "настроение"
    },
    "lessonId": "supplementary",
    "category": "feelings",
    "example": "We discussed the mood during the meeting."
  },
  {
    "topic": "feelings",
    "word": "fear",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "strah",
      "ru": "страх"
    },
    "lessonId": "supplementary",
    "category": "feelings",
    "example": "We discussed the fear during the meeting."
  },
  {
    "topic": "feelings",
    "word": "worry",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "briga",
      "ru": "беспокойство"
    },
    "lessonId": "supplementary",
    "category": "feelings",
    "example": "We discussed the worry during the meeting."
  },
  {
    "topic": "feelings",
    "word": "confidence",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "samopouzdanje",
      "ru": "уверенность"
    },
    "lessonId": "supplementary",
    "category": "feelings",
    "example": "We discussed the confidence during the meeting."
  },
  {
    "topic": "feelings",
    "word": "stress",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "stres",
      "ru": "стресс"
    },
    "lessonId": "supplementary",
    "category": "feelings",
    "example": "We discussed the stress during the meeting."
  },
  {
    "topic": "feelings",
    "word": "pressure",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "pritisak",
      "ru": "давление"
    },
    "lessonId": "supplementary",
    "category": "feelings",
    "example": "We discussed the pressure during the meeting."
  },
  {
    "topic": "feelings",
    "word": "surprise",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "iznenađenje",
      "ru": "удивление"
    },
    "lessonId": "supplementary",
    "category": "feelings",
    "example": "We discussed the surprise during the meeting."
  },
  {
    "topic": "feelings",
    "word": "disappointment",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "razočaranje",
      "ru": "разочарование"
    },
    "lessonId": "supplementary",
    "category": "feelings",
    "example": "We discussed the disappointment during the meeting."
  },
  {
    "topic": "feelings",
    "word": "relief",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "olakšanje",
      "ru": "облегчение"
    },
    "lessonId": "supplementary",
    "category": "feelings",
    "example": "We discussed the relief during the meeting."
  },
  {
    "topic": "feelings",
    "word": "pride",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "ponos",
      "ru": "гордость"
    },
    "lessonId": "supplementary",
    "category": "feelings",
    "example": "We discussed the pride during the meeting."
  },
  {
    "topic": "feelings",
    "word": "anxious",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "uznemiren",
      "ru": "тревожный"
    },
    "lessonId": "supplementary",
    "category": "feelings",
    "example": "It is important to find a anxious solution."
  },
  {
    "topic": "feelings",
    "word": "nervous",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "nervozan",
      "ru": "нервный"
    },
    "lessonId": "supplementary",
    "category": "feelings",
    "example": "It is important to find a nervous solution."
  },
  {
    "topic": "feelings",
    "word": "relaxed",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "opušten",
      "ru": "расслабленный"
    },
    "lessonId": "supplementary",
    "category": "feelings",
    "example": "It is important to find a relaxed solution."
  },
  {
    "topic": "feelings",
    "word": "embarrassed",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "postiđen",
      "ru": "смущённый"
    },
    "lessonId": "supplementary",
    "category": "feelings",
    "example": "It is important to find a embarrassed solution."
  },
  {
    "topic": "feelings",
    "word": "confused",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "zbunjen",
      "ru": "растерянный"
    },
    "lessonId": "supplementary",
    "category": "feelings",
    "example": "It is important to find a confused solution."
  },
  {
    "topic": "feelings",
    "word": "disappointed",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "razočaran",
      "ru": "разочарованный"
    },
    "lessonId": "supplementary",
    "category": "feelings",
    "example": "It is important to find a disappointed solution."
  },
  {
    "topic": "feelings",
    "word": "delighted",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "oduševljen",
      "ru": "в восторге"
    },
    "lessonId": "supplementary",
    "category": "feelings",
    "example": "It is important to find a delighted solution."
  },
  {
    "topic": "feelings",
    "word": "annoyed",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "iznerviran",
      "ru": "раздражённый"
    },
    "lessonId": "supplementary",
    "category": "feelings",
    "example": "It is important to find a annoyed solution."
  },
  {
    "topic": "feelings",
    "word": "upset",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "uznemiren",
      "ru": "расстроенный"
    },
    "lessonId": "supplementary",
    "category": "feelings",
    "example": "It is important to find a upset solution."
  },
  {
    "topic": "feelings",
    "word": "proud",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "ponosan",
      "ru": "гордый"
    },
    "lessonId": "supplementary",
    "category": "feelings",
    "example": "It is important to find a proud solution."
  },
  {
    "topic": "feelings",
    "word": "grateful",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "zahvalan",
      "ru": "благодарный"
    },
    "lessonId": "supplementary",
    "category": "feelings",
    "example": "It is important to find a grateful solution."
  },
  {
    "topic": "feelings",
    "word": "lonely",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "usamljen",
      "ru": "одинокий"
    },
    "lessonId": "supplementary",
    "category": "feelings",
    "example": "It is important to find a lonely solution."
  },
  {
    "topic": "feelings",
    "word": "curious",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "radoznao",
      "ru": "любознательный"
    },
    "lessonId": "supplementary",
    "category": "feelings",
    "example": "It is important to find a curious solution."
  },
  {
    "topic": "feelings",
    "word": "patient",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "strpljiv",
      "ru": "терпеливый"
    },
    "lessonId": "supplementary",
    "category": "feelings",
    "example": "It is important to find a patient solution."
  },
  {
    "topic": "relationships",
    "word": "relationship",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "odnos",
      "ru": "отношения"
    },
    "lessonId": "supplementary",
    "category": "relationships",
    "example": "We discussed the relationship during the meeting."
  },
  {
    "topic": "relationships",
    "word": "friendship",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "prijateljstvo",
      "ru": "дружба"
    },
    "lessonId": "supplementary",
    "category": "relationships",
    "example": "We discussed the friendship during the meeting."
  },
  {
    "topic": "relationships",
    "word": "neighbour",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "komšija",
      "ru": "сосед"
    },
    "lessonId": "supplementary",
    "category": "relationships",
    "example": "We discussed the neighbour during the meeting."
  },
  {
    "topic": "relationships",
    "word": "relative",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "rođak",
      "ru": "родственник"
    },
    "lessonId": "supplementary",
    "category": "relationships",
    "example": "We discussed the relative during the meeting."
  },
  {
    "topic": "relationships",
    "word": "partner",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "partner",
      "ru": "партнёр"
    },
    "lessonId": "supplementary",
    "category": "relationships",
    "example": "We discussed the partner during the meeting."
  },
  {
    "topic": "relationships",
    "word": "guest",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "gost",
      "ru": "гость"
    },
    "lessonId": "supplementary",
    "category": "relationships",
    "example": "We discussed the guest during the meeting."
  },
  {
    "topic": "relationships",
    "word": "host",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "domaćin",
      "ru": "хозяин"
    },
    "lessonId": "supplementary",
    "category": "relationships",
    "example": "We discussed the host during the meeting."
  },
  {
    "topic": "relationships",
    "word": "invitation",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "pozivnica",
      "ru": "приглашение"
    },
    "lessonId": "supplementary",
    "category": "relationships",
    "example": "We discussed the invitation during the meeting."
  },
  {
    "topic": "relationships",
    "word": "conversation",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "razgovor",
      "ru": "разговор"
    },
    "lessonId": "supplementary",
    "category": "relationships",
    "example": "We discussed the conversation during the meeting."
  },
  {
    "topic": "relationships",
    "word": "argument",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "svađa / rasprava",
      "ru": "спор"
    },
    "lessonId": "supplementary",
    "category": "relationships",
    "example": "We discussed the argument during the meeting."
  },
  {
    "topic": "relationships",
    "word": "invite",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "pozvati",
      "ru": "приглашать"
    },
    "lessonId": "supplementary",
    "category": "relationships",
    "example": "I need to invite this before the end of the day."
  },
  {
    "topic": "relationships",
    "word": "refuse",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "odbiti",
      "ru": "отказывать"
    },
    "lessonId": "supplementary",
    "category": "relationships",
    "example": "I need to refuse this before the end of the day."
  },
  {
    "topic": "relationships",
    "word": "apologise",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "izvinuti se",
      "ru": "извиняться"
    },
    "lessonId": "supplementary",
    "category": "relationships",
    "example": "I need to apologise this before the end of the day."
  },
  {
    "topic": "relationships",
    "word": "complain",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "žaliti se",
      "ru": "жаловаться"
    },
    "lessonId": "supplementary",
    "category": "relationships",
    "example": "I need to complain this before the end of the day."
  },
  {
    "topic": "relationships",
    "word": "recommend",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "preporučiti",
      "ru": "рекомендовать"
    },
    "lessonId": "supplementary",
    "category": "relationships",
    "example": "I need to recommend this before the end of the day."
  },
  {
    "topic": "relationships",
    "word": "trust",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "verovati",
      "ru": "доверять"
    },
    "lessonId": "supplementary",
    "category": "relationships",
    "example": "I need to trust this before the end of the day."
  },
  {
    "topic": "relationships",
    "word": "respect",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "poštovati",
      "ru": "уважать"
    },
    "lessonId": "supplementary",
    "category": "relationships",
    "example": "I need to respect this before the end of the day."
  },
  {
    "topic": "relationships",
    "word": "get along",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "slagati se",
      "ru": "ладить"
    },
    "lessonId": "supplementary",
    "category": "relationships",
    "example": "I need to get along this before the end of the day."
  },
  {
    "topic": "relationships",
    "word": "friendly",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "prijateljski",
      "ru": "дружелюбный"
    },
    "lessonId": "supplementary",
    "category": "relationships",
    "example": "It is important to find a friendly solution."
  },
  {
    "topic": "relationships",
    "word": "polite",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "ljubazan",
      "ru": "вежливый"
    },
    "lessonId": "supplementary",
    "category": "relationships",
    "example": "It is important to find a polite solution."
  },
  {
    "topic": "relationships",
    "word": "honest",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "iskren",
      "ru": "честный"
    },
    "lessonId": "supplementary",
    "category": "relationships",
    "example": "It is important to find a honest solution."
  },
  {
    "topic": "relationships",
    "word": "rude",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "nepristojan",
      "ru": "грубый"
    },
    "lessonId": "supplementary",
    "category": "relationships",
    "example": "It is important to find a rude solution."
  },
  {
    "topic": "relationships",
    "word": "generous",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "velikodušan",
      "ru": "щедрый"
    },
    "lessonId": "supplementary",
    "category": "relationships",
    "example": "It is important to find a generous solution."
  },
  {
    "topic": "food",
    "word": "ingredient",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "sastojak",
      "ru": "ингредиент"
    },
    "lessonId": "supplementary",
    "category": "food",
    "example": "We discussed the ingredient during the meeting."
  },
  {
    "topic": "food",
    "word": "recipe",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "recept",
      "ru": "рецепт"
    },
    "lessonId": "supplementary",
    "category": "food",
    "example": "We discussed the recipe during the meeting."
  },
  {
    "topic": "food",
    "word": "meal",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "obrok",
      "ru": "приём пищи"
    },
    "lessonId": "supplementary",
    "category": "food",
    "example": "We discussed the meal during the meeting."
  },
  {
    "topic": "food",
    "word": "snack",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "užina",
      "ru": "перекус"
    },
    "lessonId": "supplementary",
    "category": "food",
    "example": "We discussed the snack during the meeting."
  },
  {
    "topic": "food",
    "word": "dish",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "jelo",
      "ru": "блюдо"
    },
    "lessonId": "supplementary",
    "category": "food",
    "example": "We discussed the dish during the meeting."
  },
  {
    "topic": "food",
    "word": "flavour",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "ukus",
      "ru": "вкус"
    },
    "lessonId": "supplementary",
    "category": "food",
    "example": "We discussed the flavour during the meeting."
  },
  {
    "topic": "food",
    "word": "portion",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "porcija",
      "ru": "порция"
    },
    "lessonId": "supplementary",
    "category": "food",
    "example": "We discussed the portion during the meeting."
  },
  {
    "topic": "food",
    "word": "menu",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "jelovnik",
      "ru": "меню"
    },
    "lessonId": "supplementary",
    "category": "food",
    "example": "We discussed the menu during the meeting."
  },
  {
    "topic": "food",
    "word": "bill",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "račun",
      "ru": "счёт"
    },
    "lessonId": "supplementary",
    "category": "food",
    "example": "We discussed the bill during the meeting."
  },
  {
    "topic": "food",
    "word": "diet",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "ishrana",
      "ru": "диета"
    },
    "lessonId": "supplementary",
    "category": "food",
    "example": "We discussed the diet during the meeting."
  },
  {
    "topic": "food",
    "word": "boil",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "kuvati u vodi",
      "ru": "кипятить"
    },
    "lessonId": "supplementary",
    "category": "food",
    "example": "I need to boil this before the end of the day."
  },
  {
    "topic": "food",
    "word": "fry",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "pržiti",
      "ru": "жарить"
    },
    "lessonId": "supplementary",
    "category": "food",
    "example": "I need to fry this before the end of the day."
  },
  {
    "topic": "food",
    "word": "bake",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "peći u rerni",
      "ru": "выпекать"
    },
    "lessonId": "supplementary",
    "category": "food",
    "example": "I need to bake this before the end of the day."
  },
  {
    "topic": "food",
    "word": "chop",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "seckati",
      "ru": "нарезать"
    },
    "lessonId": "supplementary",
    "category": "food",
    "example": "I need to chop this before the end of the day."
  },
  {
    "topic": "food",
    "word": "stir",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "mešati",
      "ru": "помешивать"
    },
    "lessonId": "supplementary",
    "category": "food",
    "example": "I need to stir this before the end of the day."
  },
  {
    "topic": "food",
    "word": "taste",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "probati / imati ukus",
      "ru": "пробовать / иметь вкус"
    },
    "lessonId": "supplementary",
    "category": "food",
    "example": "I need to taste this before the end of the day."
  },
  {
    "topic": "food",
    "word": "order",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "naručiti",
      "ru": "заказывать"
    },
    "lessonId": "supplementary",
    "category": "food",
    "example": "I need to order this before the end of the day."
  },
  {
    "topic": "food",
    "word": "delicious",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "ukusan",
      "ru": "вкусный"
    },
    "lessonId": "supplementary",
    "category": "food",
    "example": "It is important to find a delicious solution."
  },
  {
    "topic": "food",
    "word": "spicy",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "ljut / začinjen",
      "ru": "острый"
    },
    "lessonId": "supplementary",
    "category": "food",
    "example": "It is important to find a spicy solution."
  },
  {
    "topic": "food",
    "word": "fresh",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "svež",
      "ru": "свежий"
    },
    "lessonId": "supplementary",
    "category": "food",
    "example": "It is important to find a fresh solution."
  },
  {
    "topic": "food",
    "word": "frozen",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "zamrznut",
      "ru": "замороженный"
    },
    "lessonId": "supplementary",
    "category": "food",
    "example": "It is important to find a frozen solution."
  },
  {
    "topic": "food",
    "word": "healthy",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "zdrav",
      "ru": "полезный"
    },
    "lessonId": "supplementary",
    "category": "food",
    "example": "It is important to find a healthy solution."
  },
  {
    "topic": "food",
    "word": "homemade",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "domaći",
      "ru": "домашний"
    },
    "lessonId": "supplementary",
    "category": "food",
    "example": "It is important to find a homemade solution."
  },
  {
    "topic": "shopping",
    "word": "price",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "cena",
      "ru": "цена"
    },
    "lessonId": "supplementary",
    "category": "shopping",
    "example": "We discussed the price during the meeting."
  },
  {
    "topic": "shopping",
    "word": "discount",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "popust",
      "ru": "скидка"
    },
    "lessonId": "supplementary",
    "category": "shopping",
    "example": "We discussed the discount during the meeting."
  },
  {
    "topic": "shopping",
    "word": "receipt",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "fiskalni račun",
      "ru": "чек"
    },
    "lessonId": "supplementary",
    "category": "shopping",
    "example": "We discussed the receipt during the meeting."
  },
  {
    "topic": "shopping",
    "word": "refund",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "povraćaj novca",
      "ru": "возврат денег"
    },
    "lessonId": "supplementary",
    "category": "shopping",
    "example": "We discussed the refund during the meeting."
  },
  {
    "topic": "shopping",
    "word": "exchange",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "zamena",
      "ru": "обмен"
    },
    "lessonId": "supplementary",
    "category": "shopping",
    "example": "We discussed the exchange during the meeting."
  },
  {
    "topic": "shopping",
    "word": "customer",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "kupac",
      "ru": "покупатель"
    },
    "lessonId": "supplementary",
    "category": "shopping",
    "example": "We discussed the customer during the meeting."
  },
  {
    "topic": "shopping",
    "word": "cash",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "gotovina",
      "ru": "наличные"
    },
    "lessonId": "supplementary",
    "category": "shopping",
    "example": "Do you prefer to pay by card or in cash?"
  },
  {
    "topic": "shopping",
    "word": "change",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "kusur",
      "ru": "сдача"
    },
    "lessonId": "supplementary",
    "category": "shopping",
    "example": "We discussed the change during the meeting."
  },
  {
    "topic": "shopping",
    "word": "size",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "veličina",
      "ru": "размер"
    },
    "lessonId": "supplementary",
    "category": "shopping",
    "example": "We discussed the size during the meeting."
  },
  {
    "topic": "shopping",
    "word": "brand",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "brend",
      "ru": "бренд"
    },
    "lessonId": "supplementary",
    "category": "shopping",
    "example": "We discussed the brand during the meeting."
  },
  {
    "topic": "shopping",
    "word": "purchase",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "kupiti",
      "ru": "приобретать"
    },
    "lessonId": "supplementary",
    "category": "shopping",
    "example": "I need to purchase this before the end of the day."
  },
  {
    "topic": "shopping",
    "word": "afford",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "moći sebi da priušti",
      "ru": "позволить себе"
    },
    "lessonId": "supplementary",
    "category": "shopping",
    "example": "I need to afford this before the end of the day."
  },
  {
    "topic": "shopping",
    "word": "compare",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "uporediti",
      "ru": "сравнивать"
    },
    "lessonId": "supplementary",
    "category": "shopping",
    "example": "I need to compare this before the end of the day."
  },
  {
    "topic": "shopping",
    "word": "return",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "vratiti",
      "ru": "возвращать"
    },
    "lessonId": "supplementary",
    "category": "shopping",
    "example": "I need to return this before the end of the day."
  },
  {
    "topic": "shopping",
    "word": "spend",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "potrošiti",
      "ru": "тратить"
    },
    "lessonId": "supplementary",
    "category": "shopping",
    "example": "I need to spend this before the end of the day."
  },
  {
    "topic": "shopping",
    "word": "save",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "uštedeti",
      "ru": "экономить"
    },
    "lessonId": "supplementary",
    "category": "shopping",
    "example": "I need to save this before the end of the day."
  },
  {
    "topic": "shopping",
    "word": "cheap",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "jeftin",
      "ru": "дешёвый"
    },
    "lessonId": "supplementary",
    "category": "shopping",
    "example": "It is important to find a cheap solution."
  },
  {
    "topic": "shopping",
    "word": "expensive",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "skup",
      "ru": "дорогой"
    },
    "lessonId": "supplementary",
    "category": "shopping",
    "example": "It is important to find a expensive solution."
  },
  {
    "topic": "shopping",
    "word": "reasonable",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "razuman / povoljan",
      "ru": "разумный"
    },
    "lessonId": "supplementary",
    "category": "shopping",
    "example": "It is important to find a reasonable solution."
  },
  {
    "topic": "shopping",
    "word": "worthwhile",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "vredan truda",
      "ru": "стоящий"
    },
    "lessonId": "supplementary",
    "category": "shopping",
    "example": "It is important to find a worthwhile solution."
  },
  {
    "topic": "money",
    "word": "budget",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "budžet",
      "ru": "бюджет"
    },
    "lessonId": "supplementary",
    "category": "money",
    "example": "We discussed the budget during the meeting."
  },
  {
    "topic": "money",
    "word": "expense",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "trošak",
      "ru": "расход"
    },
    "lessonId": "supplementary",
    "category": "money",
    "example": "We discussed the expense during the meeting."
  },
  {
    "topic": "money",
    "word": "saving",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "ušteđevina",
      "ru": "сбережение"
    },
    "lessonId": "supplementary",
    "category": "money",
    "example": "We discussed the saving during the meeting."
  },
  {
    "topic": "money",
    "word": "debt",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "dug",
      "ru": "долг"
    },
    "lessonId": "supplementary",
    "category": "money",
    "example": "We discussed the debt during the meeting."
  },
  {
    "topic": "money",
    "word": "loan",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "kredit / zajam",
      "ru": "заём"
    },
    "lessonId": "supplementary",
    "category": "money",
    "example": "We discussed the loan during the meeting."
  },
  {
    "topic": "money",
    "word": "interest",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "kamata",
      "ru": "процент"
    },
    "lessonId": "supplementary",
    "category": "money",
    "example": "We discussed the interest during the meeting."
  },
  {
    "topic": "money",
    "word": "payment",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "plaćanje",
      "ru": "платёж"
    },
    "lessonId": "supplementary",
    "category": "money",
    "example": "We discussed the payment during the meeting."
  },
  {
    "topic": "money",
    "word": "account",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "račun",
      "ru": "счёт"
    },
    "lessonId": "supplementary",
    "category": "money",
    "example": "We discussed the account during the meeting."
  },
  {
    "topic": "money",
    "word": "balance",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "stanje",
      "ru": "баланс"
    },
    "lessonId": "supplementary",
    "category": "money",
    "example": "We discussed the balance during the meeting."
  },
  {
    "topic": "money",
    "word": "cash machine",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "bankomat",
      "ru": "банкомат"
    },
    "lessonId": "supplementary",
    "category": "money",
    "example": "We discussed the cash machine during the meeting."
  },
  {
    "topic": "money",
    "word": "earn",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "zaraditi",
      "ru": "зарабатывать"
    },
    "lessonId": "supplementary",
    "category": "money",
    "example": "I need to earn this before the end of the day."
  },
  {
    "topic": "money",
    "word": "owe",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "dugovati",
      "ru": "быть должным"
    },
    "lessonId": "supplementary",
    "category": "money",
    "example": "I need to owe this before the end of the day."
  },
  {
    "topic": "money",
    "word": "withdraw",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "podići novac",
      "ru": "снимать деньги"
    },
    "lessonId": "supplementary",
    "category": "money",
    "example": "I need to withdraw this before the end of the day."
  },
  {
    "topic": "money",
    "word": "deposit",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "uplatiti / položiti",
      "ru": "вносить"
    },
    "lessonId": "supplementary",
    "category": "money",
    "example": "I need to deposit this before the end of the day."
  },
  {
    "topic": "money",
    "word": "transfer",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "prebaciti",
      "ru": "переводить"
    },
    "lessonId": "supplementary",
    "category": "money",
    "example": "I need to transfer this before the end of the day."
  },
  {
    "topic": "money",
    "word": "affordable",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "pristupačan",
      "ru": "доступный по цене"
    },
    "lessonId": "supplementary",
    "category": "money",
    "example": "It is important to find a affordable solution."
  },
  {
    "topic": "money",
    "word": "valuable",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "vredan",
      "ru": "ценный"
    },
    "lessonId": "supplementary",
    "category": "money",
    "example": "It is important to find a valuable solution."
  },
  {
    "topic": "health",
    "word": "symptom",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "simptom",
      "ru": "симптом"
    },
    "lessonId": "supplementary",
    "category": "health",
    "example": "We discussed the symptom during the meeting."
  },
  {
    "topic": "health",
    "word": "treatment",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "lečenje",
      "ru": "лечение"
    },
    "lessonId": "supplementary",
    "category": "health",
    "example": "We discussed the treatment during the meeting."
  },
  {
    "topic": "health",
    "word": "medicine",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "lek",
      "ru": "лекарство"
    },
    "lessonId": "supplementary",
    "category": "health",
    "example": "We discussed the medicine during the meeting."
  },
  {
    "topic": "health",
    "word": "prescription",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "recept",
      "ru": "рецепт"
    },
    "lessonId": "supplementary",
    "category": "health",
    "example": "We discussed the prescription during the meeting."
  },
  {
    "topic": "health",
    "word": "injury",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "povreda",
      "ru": "травма"
    },
    "lessonId": "supplementary",
    "category": "health",
    "example": "We discussed the injury during the meeting."
  },
  {
    "topic": "health",
    "word": "pain",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "bol",
      "ru": "боль"
    },
    "lessonId": "supplementary",
    "category": "health",
    "example": "We discussed the pain during the meeting."
  },
  {
    "topic": "health",
    "word": "recovery",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "oporavak",
      "ru": "восстановление"
    },
    "lessonId": "supplementary",
    "category": "health",
    "example": "We discussed the recovery during the meeting."
  },
  {
    "topic": "health",
    "word": "exercise",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "vežba",
      "ru": "упражнение"
    },
    "lessonId": "supplementary",
    "category": "health",
    "example": "We discussed the exercise during the meeting."
  },
  {
    "topic": "health",
    "word": "sleep",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "san",
      "ru": "сон"
    },
    "lessonId": "supplementary",
    "category": "health",
    "example": "Getting enough sleep is important."
  },
  {
    "topic": "health",
    "word": "recover",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "oporaviti se",
      "ru": "восстанавливаться"
    },
    "lessonId": "supplementary",
    "category": "health",
    "example": "I need to recover this before the end of the day."
  },
  {
    "topic": "health",
    "word": "cough",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "kašljati",
      "ru": "кашлять"
    },
    "lessonId": "supplementary",
    "category": "health",
    "example": "I need to cough this before the end of the day."
  },
  {
    "topic": "health",
    "word": "sneeze",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "kijati",
      "ru": "чихать"
    },
    "lessonId": "supplementary",
    "category": "health",
    "example": "I need to sneeze this before the end of the day."
  },
  {
    "topic": "health",
    "word": "hurt",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "boleti / povrediti",
      "ru": "болеть / причинять боль"
    },
    "lessonId": "supplementary",
    "category": "health",
    "example": "I need to hurt this before the end of the day."
  },
  {
    "topic": "health",
    "word": "breathe",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "disati",
      "ru": "дышать"
    },
    "lessonId": "supplementary",
    "category": "health",
    "example": "I need to breathe this before the end of the day."
  },
  {
    "topic": "health",
    "word": "ill",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "bolestan",
      "ru": "больной"
    },
    "lessonId": "supplementary",
    "category": "health",
    "example": "It is important to find a ill solution."
  },
  {
    "topic": "health",
    "word": "sore",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "bolan / osetljiv",
      "ru": "болезненный"
    },
    "lessonId": "supplementary",
    "category": "health",
    "example": "It is important to find a sore solution."
  },
  {
    "topic": "health",
    "word": "exhausted",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "iscrpljen",
      "ru": "измученный"
    },
    "lessonId": "supplementary",
    "category": "health",
    "example": "It is important to find a exhausted solution."
  },
  {
    "topic": "health",
    "word": "fit",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "u dobroj formi",
      "ru": "в хорошей форме"
    },
    "lessonId": "supplementary",
    "category": "health",
    "example": "It is important to find a fit solution."
  },
  {
    "topic": "travel",
    "word": "journey",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "putovanje",
      "ru": "путешествие"
    },
    "lessonId": "supplementary",
    "category": "travel",
    "example": "We discussed the journey during the meeting."
  },
  {
    "topic": "travel",
    "word": "trip",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "putovanje",
      "ru": "поездка"
    },
    "lessonId": "supplementary",
    "category": "travel",
    "example": "We discussed the trip during the meeting."
  },
  {
    "topic": "travel",
    "word": "route",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "ruta",
      "ru": "маршрут"
    },
    "lessonId": "supplementary",
    "category": "travel",
    "example": "We discussed the route during the meeting."
  },
  {
    "topic": "travel",
    "word": "traffic",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "saobraćaj",
      "ru": "движение"
    },
    "lessonId": "supplementary",
    "category": "travel",
    "example": "There is usually a lot of traffic in the city centre."
  },
  {
    "topic": "travel",
    "word": "reservation",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "rezervacija",
      "ru": "бронирование"
    },
    "lessonId": "supplementary",
    "category": "travel",
    "example": "We discussed the reservation during the meeting."
  },
  {
    "topic": "travel",
    "word": "sightseeing",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "razgledanje znamenitosti",
      "ru": "осмотр достопримечательностей"
    },
    "lessonId": "supplementary",
    "category": "travel",
    "example": "We spent the morning sightseeing."
  },
  {
    "topic": "travel",
    "word": "landmark",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "znamenitost",
      "ru": "достопримечательность"
    },
    "lessonId": "supplementary",
    "category": "travel",
    "example": "We discussed the landmark during the meeting."
  },
  {
    "topic": "travel",
    "word": "guidebook",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "turistički vodič",
      "ru": "путеводитель"
    },
    "lessonId": "supplementary",
    "category": "travel",
    "example": "We discussed the guidebook during the meeting."
  },
  {
    "topic": "travel",
    "word": "border",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "granica",
      "ru": "граница"
    },
    "lessonId": "supplementary",
    "category": "travel",
    "example": "We discussed the border during the meeting."
  },
  {
    "topic": "travel",
    "word": "abroad",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "inostranstvo",
      "ru": "за границей"
    },
    "lessonId": "supplementary",
    "category": "travel",
    "example": "She would like to study abroad."
  },
  {
    "topic": "travel",
    "word": "book",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "rezervisati",
      "ru": "бронировать"
    },
    "lessonId": "supplementary",
    "category": "travel",
    "example": "I need to book this before the end of the day."
  },
  {
    "topic": "travel",
    "word": "explore",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "istražiti",
      "ru": "исследовать"
    },
    "lessonId": "supplementary",
    "category": "travel",
    "example": "I need to explore this before the end of the day."
  },
  {
    "topic": "travel",
    "word": "pack",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "spakovati",
      "ru": "упаковывать"
    },
    "lessonId": "supplementary",
    "category": "travel",
    "example": "I need to pack this before the end of the day."
  },
  {
    "topic": "travel",
    "word": "miss",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "propustiti",
      "ru": "пропускать"
    },
    "lessonId": "supplementary",
    "category": "travel",
    "example": "I need to miss this before the end of the day."
  },
  {
    "topic": "travel",
    "word": "reach",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "stići do",
      "ru": "достигать"
    },
    "lessonId": "supplementary",
    "category": "travel",
    "example": "I need to reach this before the end of the day."
  },
  {
    "topic": "travel",
    "word": "depart",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "poći / otputovati",
      "ru": "отправляться"
    },
    "lessonId": "supplementary",
    "category": "travel",
    "example": "I need to depart this before the end of the day."
  },
  {
    "topic": "travel",
    "word": "land",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "sleteti",
      "ru": "приземляться"
    },
    "lessonId": "supplementary",
    "category": "travel",
    "example": "I need to land this before the end of the day."
  },
  {
    "topic": "travel",
    "word": "overseas",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "prekomorski",
      "ru": "заморский"
    },
    "lessonId": "supplementary",
    "category": "travel",
    "example": "The company has customers overseas."
  },
  {
    "topic": "travel",
    "word": "local",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "lokalni",
      "ru": "местный"
    },
    "lessonId": "supplementary",
    "category": "travel",
    "example": "It is important to find a local solution."
  },
  {
    "topic": "travel",
    "word": "delayed",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "u kašnjenju",
      "ru": "задержанный"
    },
    "lessonId": "supplementary",
    "category": "travel",
    "example": "It is important to find a delayed solution."
  },
  {
    "topic": "technology",
    "word": "software",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "softver",
      "ru": "программное обеспечение"
    },
    "lessonId": "supplementary",
    "category": "technology",
    "example": "We discussed the software during the meeting."
  },
  {
    "topic": "technology",
    "word": "hardware",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "hardver",
      "ru": "оборудование"
    },
    "lessonId": "supplementary",
    "category": "technology",
    "example": "We discussed the hardware during the meeting."
  },
  {
    "topic": "technology",
    "word": "screen",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "ekran",
      "ru": "экран"
    },
    "lessonId": "supplementary",
    "category": "technology",
    "example": "We discussed the screen during the meeting."
  },
  {
    "topic": "technology",
    "word": "keyboard",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "tastatura",
      "ru": "клавиатура"
    },
    "lessonId": "supplementary",
    "category": "technology",
    "example": "We discussed the keyboard during the meeting."
  },
  {
    "topic": "technology",
    "word": "network",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "mreža",
      "ru": "сеть"
    },
    "lessonId": "supplementary",
    "category": "technology",
    "example": "We discussed the network during the meeting."
  },
  {
    "topic": "technology",
    "word": "connection",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "veza",
      "ru": "соединение"
    },
    "lessonId": "supplementary",
    "category": "technology",
    "example": "We discussed the connection during the meeting."
  },
  {
    "topic": "technology",
    "word": "website",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "veb-sajt",
      "ru": "веб-сайт"
    },
    "lessonId": "supplementary",
    "category": "technology",
    "example": "We discussed the website during the meeting."
  },
  {
    "topic": "technology",
    "word": "browser",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "pregledač",
      "ru": "браузер"
    },
    "lessonId": "supplementary",
    "category": "technology",
    "example": "We discussed the browser during the meeting."
  },
  {
    "topic": "technology",
    "word": "file",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "datoteka",
      "ru": "файл"
    },
    "lessonId": "supplementary",
    "category": "technology",
    "example": "We discussed the file during the meeting."
  },
  {
    "topic": "technology",
    "word": "folder",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "fascikla / folder",
      "ru": "папка"
    },
    "lessonId": "supplementary",
    "category": "technology",
    "example": "We discussed the folder during the meeting."
  },
  {
    "topic": "technology",
    "word": "database",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "baza podataka",
      "ru": "база данных"
    },
    "lessonId": "supplementary",
    "category": "technology",
    "example": "We discussed the database during the meeting."
  },
  {
    "topic": "technology",
    "word": "backup",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "rezervna kopija",
      "ru": "резервная копия"
    },
    "lessonId": "supplementary",
    "category": "technology",
    "example": "We discussed the backup during the meeting."
  },
  {
    "topic": "technology",
    "word": "security",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "bezbednost",
      "ru": "безопасность"
    },
    "lessonId": "supplementary",
    "category": "technology",
    "example": "We discussed the security during the meeting."
  },
  {
    "topic": "technology",
    "word": "install",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "instalirati",
      "ru": "устанавливать"
    },
    "lessonId": "supplementary",
    "category": "technology",
    "example": "I need to install this before the end of the day."
  },
  {
    "topic": "technology",
    "word": "delete",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "obrisati",
      "ru": "удалять"
    },
    "lessonId": "supplementary",
    "category": "technology",
    "example": "I need to delete this before the end of the day."
  },
  {
    "topic": "technology",
    "word": "upload",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "otpremiti",
      "ru": "загружать"
    },
    "lessonId": "supplementary",
    "category": "technology",
    "example": "I need to upload this before the end of the day."
  },
  {
    "topic": "technology",
    "word": "connect",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "povezati",
      "ru": "подключать"
    },
    "lessonId": "supplementary",
    "category": "technology",
    "example": "I need to connect this before the end of the day."
  },
  {
    "topic": "technology",
    "word": "search",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "pretraživati",
      "ru": "искать"
    },
    "lessonId": "supplementary",
    "category": "technology",
    "example": "I need to search this before the end of the day."
  },
  {
    "topic": "technology",
    "word": "protect",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "zaštititi",
      "ru": "защищать"
    },
    "lessonId": "supplementary",
    "category": "technology",
    "example": "I need to protect this before the end of the day."
  },
  {
    "topic": "technology",
    "word": "enable",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "omogućiti",
      "ru": "включать"
    },
    "lessonId": "supplementary",
    "category": "technology",
    "example": "I need to enable this before the end of the day."
  },
  {
    "topic": "technology",
    "word": "disable",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "onemogućiti",
      "ru": "отключать"
    },
    "lessonId": "supplementary",
    "category": "technology",
    "example": "I need to disable this before the end of the day."
  },
  {
    "topic": "technology",
    "word": "digital",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "digitalni",
      "ru": "цифровой"
    },
    "lessonId": "supplementary",
    "category": "technology",
    "example": "It is important to find a digital solution."
  },
  {
    "topic": "technology",
    "word": "online",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "na mreži",
      "ru": "онлайн"
    },
    "lessonId": "supplementary",
    "category": "technology",
    "example": "You can complete the form online."
  },
  {
    "topic": "technology",
    "word": "secure",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "bezbedan",
      "ru": "защищённый"
    },
    "lessonId": "supplementary",
    "category": "technology",
    "example": "It is important to find a secure solution."
  },
  {
    "topic": "technology",
    "word": "wireless",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "bežični",
      "ru": "беспроводной"
    },
    "lessonId": "supplementary",
    "category": "technology",
    "example": "The office has wireless internet access."
  },
  {
    "topic": "environment",
    "word": "environment",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "životna sredina",
      "ru": "окружающая среда"
    },
    "lessonId": "supplementary",
    "category": "environment",
    "example": "We discussed the environment during the meeting."
  },
  {
    "topic": "environment",
    "word": "pollution",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "zagađenje",
      "ru": "загрязнение"
    },
    "lessonId": "supplementary",
    "category": "environment",
    "example": "We discussed the pollution during the meeting."
  },
  {
    "topic": "environment",
    "word": "waste",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "otpad",
      "ru": "отходы"
    },
    "lessonId": "supplementary",
    "category": "environment",
    "example": "We should produce less waste."
  },
  {
    "topic": "environment",
    "word": "recycling",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "reciklaža",
      "ru": "переработка"
    },
    "lessonId": "supplementary",
    "category": "environment",
    "example": "We discussed the recycling during the meeting."
  },
  {
    "topic": "environment",
    "word": "climate",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "klima",
      "ru": "климат"
    },
    "lessonId": "supplementary",
    "category": "environment",
    "example": "We discussed the climate during the meeting."
  },
  {
    "topic": "environment",
    "word": "energy",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "energija",
      "ru": "энергия"
    },
    "lessonId": "supplementary",
    "category": "environment",
    "example": "We discussed the energy during the meeting."
  },
  {
    "topic": "environment",
    "word": "resource",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "resurs",
      "ru": "ресурс"
    },
    "lessonId": "supplementary",
    "category": "environment",
    "example": "We discussed the resource during the meeting."
  },
  {
    "topic": "environment",
    "word": "wildlife",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "divlje životinje",
      "ru": "дикая природа"
    },
    "lessonId": "supplementary",
    "category": "environment",
    "example": "The park is home to a lot of wildlife."
  },
  {
    "topic": "environment",
    "word": "reduce",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "smanjiti",
      "ru": "сокращать"
    },
    "lessonId": "supplementary",
    "category": "environment",
    "example": "I need to reduce this before the end of the day."
  },
  {
    "topic": "environment",
    "word": "reuse",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "ponovo upotrebiti",
      "ru": "использовать повторно"
    },
    "lessonId": "supplementary",
    "category": "environment",
    "example": "I need to reuse this before the end of the day."
  },
  {
    "topic": "environment",
    "word": "recycle",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "reciklirati",
      "ru": "перерабатывать"
    },
    "lessonId": "supplementary",
    "category": "environment",
    "example": "I need to recycle this before the end of the day."
  },
  {
    "topic": "environment",
    "word": "environmental",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "ekološki",
      "ru": "экологический"
    },
    "lessonId": "supplementary",
    "category": "environment",
    "example": "The report focuses on environmental issues."
  },
  {
    "topic": "environment",
    "word": "reusable",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "za višekratnu upotrebu",
      "ru": "многоразовый"
    },
    "lessonId": "supplementary",
    "category": "environment",
    "example": "It is important to find a reusable solution."
  },
  {
    "topic": "media",
    "word": "article",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "članak",
      "ru": "статья"
    },
    "lessonId": "supplementary",
    "category": "media",
    "example": "We discussed the article during the meeting."
  },
  {
    "topic": "media",
    "word": "source",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "izvor",
      "ru": "источник"
    },
    "lessonId": "supplementary",
    "category": "media",
    "example": "We discussed the source during the meeting."
  },
  {
    "topic": "media",
    "word": "survey",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "anketa",
      "ru": "опрос"
    },
    "lessonId": "supplementary",
    "category": "media",
    "example": "We discussed the survey during the meeting."
  },
  {
    "topic": "media",
    "word": "audience",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "publika",
      "ru": "аудитория"
    },
    "lessonId": "supplementary",
    "category": "media",
    "example": "We discussed the audience during the meeting."
  },
  {
    "topic": "media",
    "word": "advertisement",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "reklama",
      "ru": "реклама"
    },
    "lessonId": "supplementary",
    "category": "media",
    "example": "We discussed the advertisement during the meeting."
  },
  {
    "topic": "media",
    "word": "review",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "recenzija",
      "ru": "отзыв"
    },
    "lessonId": "supplementary",
    "category": "media",
    "example": "We discussed the review during the meeting."
  },
  {
    "topic": "media",
    "word": "comment",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "komentar",
      "ru": "комментарий"
    },
    "lessonId": "supplementary",
    "category": "media",
    "example": "We discussed the comment during the meeting."
  },
  {
    "topic": "media",
    "word": "rumour",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "glasina",
      "ru": "слух"
    },
    "lessonId": "supplementary",
    "category": "media",
    "example": "We discussed the rumour during the meeting."
  },
  {
    "topic": "media",
    "word": "fact",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "činjenica",
      "ru": "факт"
    },
    "lessonId": "supplementary",
    "category": "media",
    "example": "We discussed the fact during the meeting."
  },
  {
    "topic": "media",
    "word": "opinion",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "mišljenje",
      "ru": "мнение"
    },
    "lessonId": "supplementary",
    "category": "media",
    "example": "We discussed the opinion during the meeting."
  },
  {
    "topic": "media",
    "word": "publish",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "objaviti",
      "ru": "публиковать"
    },
    "lessonId": "supplementary",
    "category": "media",
    "example": "I need to publish this before the end of the day."
  },
  {
    "topic": "media",
    "word": "announce",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "objaviti / najaviti",
      "ru": "объявлять"
    },
    "lessonId": "supplementary",
    "category": "media",
    "example": "I need to announce this before the end of the day."
  },
  {
    "topic": "media",
    "word": "claim",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "tvrditi",
      "ru": "утверждать"
    },
    "lessonId": "supplementary",
    "category": "media",
    "example": "I need to claim this before the end of the day."
  },
  {
    "topic": "media",
    "word": "suggest",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "predložiti",
      "ru": "предлагать"
    },
    "lessonId": "supplementary",
    "category": "media",
    "example": "I need to suggest this before the end of the day."
  },
  {
    "topic": "media",
    "word": "mention",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "spomenuti",
      "ru": "упоминать"
    },
    "lessonId": "supplementary",
    "category": "media",
    "example": "I need to mention this before the end of the day."
  },
  {
    "topic": "media",
    "word": "accurate",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "tačan",
      "ru": "точный"
    },
    "lessonId": "supplementary",
    "category": "media",
    "example": "It is important to find a accurate solution."
  },
  {
    "topic": "media",
    "word": "fake",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "lažan",
      "ru": "фальшивый"
    },
    "lessonId": "supplementary",
    "category": "media",
    "example": "It is important to find a fake solution."
  },
  {
    "topic": "media",
    "word": "public",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "javan",
      "ru": "общественный"
    },
    "lessonId": "supplementary",
    "category": "media",
    "example": "The library is open to the public."
  },
  {
    "topic": "society",
    "word": "community",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "zajednica",
      "ru": "сообщество"
    },
    "lessonId": "supplementary",
    "category": "society",
    "example": "We discussed the community during the meeting."
  },
  {
    "topic": "society",
    "word": "citizen",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "građanin",
      "ru": "гражданин"
    },
    "lessonId": "supplementary",
    "category": "society",
    "example": "We discussed the citizen during the meeting."
  },
  {
    "topic": "society",
    "word": "government",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "vlada",
      "ru": "правительство"
    },
    "lessonId": "supplementary",
    "category": "society",
    "example": "We discussed the government during the meeting."
  },
  {
    "topic": "society",
    "word": "law",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "zakon",
      "ru": "закон"
    },
    "lessonId": "supplementary",
    "category": "society",
    "example": "We discussed the law during the meeting."
  },
  {
    "topic": "society",
    "word": "rule",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "pravilo",
      "ru": "правило"
    },
    "lessonId": "supplementary",
    "category": "society",
    "example": "We discussed the rule during the meeting."
  },
  {
    "topic": "society",
    "word": "service",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "usluga",
      "ru": "услуга"
    },
    "lessonId": "supplementary",
    "category": "society",
    "example": "We discussed the service during the meeting."
  },
  {
    "topic": "society",
    "word": "volunteer",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "volonter",
      "ru": "волонтёр"
    },
    "lessonId": "supplementary",
    "category": "society",
    "example": "We discussed the volunteer during the meeting."
  },
  {
    "topic": "society",
    "word": "charity",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "dobrotvorna organizacija",
      "ru": "благотворительность"
    },
    "lessonId": "supplementary",
    "category": "society",
    "example": "We discussed the charity during the meeting."
  },
  {
    "topic": "society",
    "word": "event",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "događaj",
      "ru": "событие"
    },
    "lessonId": "supplementary",
    "category": "society",
    "example": "We discussed the event during the meeting."
  },
  {
    "topic": "society",
    "word": "provide",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "obezbediti / pružiti",
      "ru": "предоставлять"
    },
    "lessonId": "supplementary",
    "category": "society",
    "example": "I need to provide this before the end of the day."
  },
  {
    "topic": "society",
    "word": "allow",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "dozvoliti",
      "ru": "позволять"
    },
    "lessonId": "supplementary",
    "category": "society",
    "example": "I need to allow this before the end of the day."
  },
  {
    "topic": "society",
    "word": "prevent",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "sprečiti",
      "ru": "предотвращать"
    },
    "lessonId": "supplementary",
    "category": "society",
    "example": "I need to prevent this before the end of the day."
  },
  {
    "topic": "society",
    "word": "social",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "društveni",
      "ru": "социальный"
    },
    "lessonId": "supplementary",
    "category": "society",
    "example": "Social activities help people connect."
  },
  {
    "topic": "communication",
    "word": "expression",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "izraz",
      "ru": "выражение"
    },
    "lessonId": "supplementary",
    "category": "communication",
    "example": "We discussed the expression during the meeting."
  },
  {
    "topic": "communication",
    "word": "meaning",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "značenje",
      "ru": "значение"
    },
    "lessonId": "supplementary",
    "category": "communication",
    "example": "We discussed the meaning during the meeting."
  },
  {
    "topic": "communication",
    "word": "message",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "poruka",
      "ru": "сообщение"
    },
    "lessonId": "supplementary",
    "category": "communication",
    "example": "We discussed the message during the meeting."
  },
  {
    "topic": "communication",
    "word": "reply",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "odgovor",
      "ru": "ответ"
    },
    "lessonId": "supplementary",
    "category": "communication",
    "example": "We discussed the reply during the meeting."
  },
  {
    "topic": "communication",
    "word": "advice",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "savet",
      "ru": "совет"
    },
    "lessonId": "supplementary",
    "category": "communication",
    "example": "We discussed the advice during the meeting."
  },
  {
    "topic": "communication",
    "word": "suggestion",
    "partOfSpeech": "noun",
    "definition": "",
    "translation": {
      "sr": "predlog",
      "ru": "предложение"
    },
    "lessonId": "supplementary",
    "category": "communication",
    "example": "We discussed the suggestion during the meeting."
  },
  {
    "topic": "communication",
    "word": "describe",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "opisati",
      "ru": "описывать"
    },
    "lessonId": "supplementary",
    "category": "communication",
    "example": "I need to describe this before the end of the day."
  },
  {
    "topic": "communication",
    "word": "express",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "izraziti",
      "ru": "выражать"
    },
    "lessonId": "supplementary",
    "category": "communication",
    "example": "I need to express this before the end of the day."
  },
  {
    "topic": "communication",
    "word": "argue",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "raspravljati se",
      "ru": "спорить"
    },
    "lessonId": "supplementary",
    "category": "communication",
    "example": "I need to argue this before the end of the day."
  },
  {
    "topic": "communication",
    "word": "agree",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "složiti se",
      "ru": "соглашаться"
    },
    "lessonId": "supplementary",
    "category": "communication",
    "example": "I agree with your suggestion."
  },
  {
    "topic": "communication",
    "word": "disagree",
    "partOfSpeech": "verb",
    "definition": "",
    "translation": {
      "sr": "ne složiti se",
      "ru": "не соглашаться"
    },
    "lessonId": "supplementary",
    "category": "communication",
    "example": "They sometimes disagree about small details."
  },
  {
    "topic": "communication",
    "word": "formal",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "formalan",
      "ru": "формальный"
    },
    "lessonId": "supplementary",
    "category": "communication",
    "example": "It is important to find a formal solution."
  },
  {
    "topic": "communication",
    "word": "informal",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "neformalan",
      "ru": "неформальный"
    },
    "lessonId": "supplementary",
    "category": "communication",
    "example": "It is important to find a informal solution."
  },
  {
    "topic": "communication",
    "word": "clear",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "jasan",
      "ru": "понятный"
    },
    "lessonId": "supplementary",
    "category": "communication",
    "example": "It is important to find a clear solution."
  },
  {
    "topic": "phrasal-verbs",
    "word": "find out",
    "partOfSpeech": "phrasal verb",
    "definition": "",
    "translation": {
      "sr": "saznati",
      "ru": "выяснить"
    },
    "lessonId": "supplementary",
    "category": "phrasal-verbs",
    "example": "I need to find out what time the train leaves."
  },
  {
    "topic": "phrasal-verbs",
    "word": "give up",
    "partOfSpeech": "phrasal verb",
    "definition": "",
    "translation": {
      "sr": "odustati",
      "ru": "сдаваться"
    },
    "lessonId": "supplementary",
    "category": "phrasal-verbs",
    "example": "Learning a language takes time, so do not give up."
  },
  {
    "topic": "phrasal-verbs",
    "word": "look after",
    "partOfSpeech": "phrasal verb",
    "definition": "",
    "translation": {
      "sr": "brinuti se o",
      "ru": "присматривать за"
    },
    "lessonId": "supplementary",
    "category": "phrasal-verbs",
    "example": "Can you look after my bag for a moment?"
  },
  {
    "topic": "phrasal-verbs",
    "word": "look for",
    "partOfSpeech": "phrasal verb",
    "definition": "",
    "translation": {
      "sr": "tražiti",
      "ru": "искать"
    },
    "lessonId": "supplementary",
    "category": "phrasal-verbs",
    "example": "I'm looking for a quiet place to study."
  },
  {
    "topic": "phrasal-verbs",
    "word": "look forward to",
    "partOfSpeech": "phrasal verb",
    "definition": "",
    "translation": {
      "sr": "radovati se",
      "ru": "ждать с нетерпением"
    },
    "lessonId": "supplementary",
    "category": "phrasal-verbs",
    "example": "I look forward to meeting you."
  },
  {
    "topic": "phrasal-verbs",
    "word": "pick up",
    "partOfSpeech": "phrasal verb",
    "definition": "",
    "translation": {
      "sr": "pokupiti",
      "ru": "забирать"
    },
    "lessonId": "supplementary",
    "category": "phrasal-verbs",
    "example": "I'll pick you up at the station."
  },
  {
    "topic": "phrasal-verbs",
    "word": "put off",
    "partOfSpeech": "phrasal verb",
    "definition": "",
    "translation": {
      "sr": "odložiti",
      "ru": "откладывать"
    },
    "lessonId": "supplementary",
    "category": "phrasal-verbs",
    "example": "We had to put off the meeting."
  },
  {
    "topic": "phrasal-verbs",
    "word": "run out of",
    "partOfSpeech": "phrasal verb",
    "definition": "",
    "translation": {
      "sr": "ostati bez",
      "ru": "закончиться"
    },
    "lessonId": "supplementary",
    "category": "phrasal-verbs",
    "example": "We have run out of milk."
  },
  {
    "topic": "phrasal-verbs",
    "word": "set up",
    "partOfSpeech": "phrasal verb",
    "definition": "",
    "translation": {
      "sr": "postaviti / osnovati",
      "ru": "настраивать / создавать"
    },
    "lessonId": "supplementary",
    "category": "phrasal-verbs",
    "example": "They set up a new account."
  },
  {
    "topic": "phrasal-verbs",
    "word": "turn down",
    "partOfSpeech": "phrasal verb",
    "definition": "",
    "translation": {
      "sr": "odbiti",
      "ru": "отклонять"
    },
    "lessonId": "supplementary",
    "category": "phrasal-verbs",
    "example": "She turned down the job offer."
  },
  {
    "topic": "phrasal-verbs",
    "word": "turn on",
    "partOfSpeech": "phrasal verb",
    "definition": "",
    "translation": {
      "sr": "uključiti",
      "ru": "включать"
    },
    "lessonId": "supplementary",
    "category": "phrasal-verbs",
    "example": "Could you turn on the light?"
  },
  {
    "topic": "phrasal-verbs",
    "word": "turn off",
    "partOfSpeech": "phrasal verb",
    "definition": "",
    "translation": {
      "sr": "isključiti",
      "ru": "выключать"
    },
    "lessonId": "supplementary",
    "category": "phrasal-verbs",
    "example": "Please turn off your phone."
  },
  {
    "topic": "phrasal-verbs",
    "word": "wake up",
    "partOfSpeech": "phrasal verb",
    "definition": "",
    "translation": {
      "sr": "probuditi se",
      "ru": "просыпаться"
    },
    "lessonId": "supplementary",
    "category": "phrasal-verbs",
    "example": "I usually wake up at seven."
  },
  {
    "topic": "phrasal-verbs",
    "word": "carry on",
    "partOfSpeech": "phrasal verb",
    "definition": "",
    "translation": {
      "sr": "nastaviti",
      "ru": "продолжать"
    },
    "lessonId": "supplementary",
    "category": "phrasal-verbs",
    "example": "Please carry on with your work."
  },
  {
    "topic": "phrasal-verbs",
    "word": "check out",
    "partOfSpeech": "phrasal verb",
    "definition": "",
    "translation": {
      "sr": "odjaviti se / proveriti",
      "ru": "выписываться / проверять"
    },
    "lessonId": "supplementary",
    "category": "phrasal-verbs",
    "example": "We need to check out before noon."
  },
  {
    "topic": "phrasal-verbs",
    "word": "come across",
    "partOfSpeech": "phrasal verb",
    "definition": "",
    "translation": {
      "sr": "naići na",
      "ru": "натолкнуться на"
    },
    "lessonId": "supplementary",
    "category": "phrasal-verbs",
    "example": "I came across an interesting article."
  },
  {
    "topic": "phrasal-verbs",
    "word": "fill in",
    "partOfSpeech": "phrasal verb",
    "definition": "",
    "translation": {
      "sr": "popuniti",
      "ru": "заполнять"
    },
    "lessonId": "supplementary",
    "category": "phrasal-verbs",
    "example": "Please fill in this form."
  },
  {
    "topic": "phrasal-verbs",
    "word": "get back",
    "partOfSpeech": "phrasal verb",
    "definition": "",
    "translation": {
      "sr": "vratiti se",
      "ru": "возвращаться"
    },
    "lessonId": "supplementary",
    "category": "phrasal-verbs",
    "example": "What time will you get back?"
  },
  {
    "topic": "phrasal-verbs",
    "word": "give back",
    "partOfSpeech": "phrasal verb",
    "definition": "",
    "translation": {
      "sr": "vratiti (nešto)",
      "ru": "возвращать"
    },
    "lessonId": "supplementary",
    "category": "phrasal-verbs",
    "example": "Please give back the book tomorrow."
  },
  {
    "topic": "phrasal-verbs",
    "word": "go on",
    "partOfSpeech": "phrasal verb",
    "definition": "",
    "translation": {
      "sr": "nastaviti se",
      "ru": "продолжаться"
    },
    "lessonId": "supplementary",
    "category": "phrasal-verbs",
    "example": "The meeting went on for two hours."
  },
  {
    "topic": "phrasal-verbs",
    "word": "look up",
    "partOfSpeech": "phrasal verb",
    "definition": "",
    "translation": {
      "sr": "potražiti (informaciju)",
      "ru": "искать информацию"
    },
    "lessonId": "supplementary",
    "category": "phrasal-verbs",
    "example": "I looked up the word in a dictionary."
  },
  {
    "topic": "phrasal-verbs",
    "word": "make up",
    "partOfSpeech": "phrasal verb",
    "definition": "",
    "translation": {
      "sr": "izmisliti",
      "ru": "выдумывать"
    },
    "lessonId": "supplementary",
    "category": "phrasal-verbs",
    "example": "He made up an excuse."
  },
  {
    "topic": "phrasal-verbs",
    "word": "take off",
    "partOfSpeech": "phrasal verb",
    "definition": "",
    "translation": {
      "sr": "poleteti / skinuti",
      "ru": "взлетать / снимать"
    },
    "lessonId": "supplementary",
    "category": "phrasal-verbs",
    "example": "The plane takes off at nine."
  },
  {
    "topic": "phrasal-verbs",
    "word": "take part in",
    "partOfSpeech": "phrasal verb",
    "definition": "",
    "translation": {
      "sr": "učestvovati u",
      "ru": "принимать участие в"
    },
    "lessonId": "supplementary",
    "category": "phrasal-verbs",
    "example": "I would like to take part in the project."
  },
  {
    "topic": "phrasal-verbs",
    "word": "work out",
    "partOfSpeech": "phrasal verb",
    "definition": "",
    "translation": {
      "sr": "vežbati / rešiti",
      "ru": "тренироваться / решить"
    },
    "lessonId": "supplementary",
    "category": "phrasal-verbs",
    "example": "I work out three times a week."
  },
  {
    "topic": "adjectives",
    "word": "active",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "aktivan",
      "ru": "активный"
    },
    "lessonId": "supplementary",
    "category": "adjectives",
    "example": "It is important to find a active solution."
  },
  {
    "topic": "adjectives",
    "word": "aware",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "svestan",
      "ru": "осведомлённый"
    },
    "lessonId": "supplementary",
    "category": "adjectives",
    "example": "It is important to find a aware solution."
  },
  {
    "topic": "adjectives",
    "word": "basic",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "osnovni",
      "ru": "базовый"
    },
    "lessonId": "supplementary",
    "category": "adjectives",
    "example": "It is important to find a basic solution."
  },
  {
    "topic": "adjectives",
    "word": "common",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "uobičajen",
      "ru": "распространённый"
    },
    "lessonId": "supplementary",
    "category": "adjectives",
    "example": "It is important to find a common solution."
  },
  {
    "topic": "adjectives",
    "word": "complex",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "složen",
      "ru": "сложный"
    },
    "lessonId": "supplementary",
    "category": "adjectives",
    "example": "It is important to find a complex solution."
  },
  {
    "topic": "adjectives",
    "word": "creative",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "kreativan",
      "ru": "творческий"
    },
    "lessonId": "supplementary",
    "category": "adjectives",
    "example": "It is important to find a creative solution."
  },
  {
    "topic": "adjectives",
    "word": "effective",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "delotvoran",
      "ru": "эффективный"
    },
    "lessonId": "supplementary",
    "category": "adjectives",
    "example": "It is important to find a effective solution."
  },
  {
    "topic": "adjectives",
    "word": "entire",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "čitav",
      "ru": "весь"
    },
    "lessonId": "supplementary",
    "category": "adjectives",
    "example": "It is important to find a entire solution."
  },
  {
    "topic": "adjectives",
    "word": "familiar",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "poznat",
      "ru": "знакомый"
    },
    "lessonId": "supplementary",
    "category": "adjectives",
    "example": "It is important to find a familiar solution."
  },
  {
    "topic": "adjectives",
    "word": "independent",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "samostalan",
      "ru": "независимый"
    },
    "lessonId": "supplementary",
    "category": "adjectives",
    "example": "It is important to find a independent solution."
  },
  {
    "topic": "adjectives",
    "word": "likely",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "verovatan",
      "ru": "вероятный"
    },
    "lessonId": "supplementary",
    "category": "adjectives",
    "example": "It is important to find a likely solution."
  },
  {
    "topic": "adjectives",
    "word": "major",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "glavni",
      "ru": "основной"
    },
    "lessonId": "supplementary",
    "category": "adjectives",
    "example": "It is important to find a major solution."
  },
  {
    "topic": "adjectives",
    "word": "minor",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "manji",
      "ru": "незначительный"
    },
    "lessonId": "supplementary",
    "category": "adjectives",
    "example": "It is important to find a minor solution."
  },
  {
    "topic": "adjectives",
    "word": "ordinary",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "običan",
      "ru": "обычный"
    },
    "lessonId": "supplementary",
    "category": "adjectives",
    "example": "It is important to find a ordinary solution."
  },
  {
    "topic": "adjectives",
    "word": "particular",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "određen",
      "ru": "конкретный"
    },
    "lessonId": "supplementary",
    "category": "adjectives",
    "example": "It is important to find a particular solution."
  },
  {
    "topic": "adjectives",
    "word": "possible",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "moguć",
      "ru": "возможный"
    },
    "lessonId": "supplementary",
    "category": "adjectives",
    "example": "It is important to find a possible solution."
  },
  {
    "topic": "adjectives",
    "word": "practical",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "praktičan",
      "ru": "практический"
    },
    "lessonId": "supplementary",
    "category": "adjectives",
    "example": "It is important to find a practical solution."
  },
  {
    "topic": "adjectives",
    "word": "recent",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "nedavan",
      "ru": "недавний"
    },
    "lessonId": "supplementary",
    "category": "adjectives",
    "example": "It is important to find a recent solution."
  },
  {
    "topic": "adjectives",
    "word": "specific",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "konkretan",
      "ru": "конкретный"
    },
    "lessonId": "supplementary",
    "category": "adjectives",
    "example": "It is important to find a specific solution."
  },
  {
    "topic": "adjectives",
    "word": "typical",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "tipičan",
      "ru": "типичный"
    },
    "lessonId": "supplementary",
    "category": "adjectives",
    "example": "It is important to find a typical solution."
  },
  {
    "topic": "adjectives",
    "word": "useful",
    "partOfSpeech": "adjective",
    "definition": "",
    "translation": {
      "sr": "koristan",
      "ru": "полезный"
    },
    "lessonId": "supplementary",
    "category": "adjectives",
    "example": "It is important to find a useful solution."
  },
  {
    "topic": "adverbs",
    "word": "actually",
    "partOfSpeech": "adverb",
    "definition": "",
    "translation": {
      "sr": "zapravo",
      "ru": "на самом деле"
    },
    "lessonId": "supplementary",
    "category": "adverbs",
    "example": "Actually, I have already sent the email."
  },
  {
    "topic": "adverbs",
    "word": "apparently",
    "partOfSpeech": "adverb",
    "definition": "",
    "translation": {
      "sr": "očigledno",
      "ru": "по-видимому"
    },
    "lessonId": "supplementary",
    "category": "adverbs",
    "example": "Apparently, the train is delayed."
  },
  {
    "topic": "adverbs",
    "word": "especially",
    "partOfSpeech": "adverb",
    "definition": "",
    "translation": {
      "sr": "naročito",
      "ru": "особенно"
    },
    "lessonId": "supplementary",
    "category": "adverbs",
    "example": "I enjoy outdoor activities, especially hiking."
  },
  {
    "topic": "adverbs",
    "word": "eventually",
    "partOfSpeech": "adverb",
    "definition": "",
    "translation": {
      "sr": "na kraju",
      "ru": "в конце концов"
    },
    "lessonId": "supplementary",
    "category": "adverbs",
    "example": "We eventually found the right address."
  },
  {
    "topic": "adverbs",
    "word": "fortunately",
    "partOfSpeech": "adverb",
    "definition": "",
    "translation": {
      "sr": "srećom",
      "ru": "к счастью"
    },
    "lessonId": "supplementary",
    "category": "adverbs",
    "example": "Fortunately, nobody was hurt."
  },
  {
    "topic": "adverbs",
    "word": "generally",
    "partOfSpeech": "adverb",
    "definition": "",
    "translation": {
      "sr": "uopšteno",
      "ru": "в целом"
    },
    "lessonId": "supplementary",
    "category": "adverbs",
    "example": "I generally start work at nine."
  },
  {
    "topic": "adverbs",
    "word": "hardly",
    "partOfSpeech": "adverb",
    "definition": "",
    "translation": {
      "sr": "jedva",
      "ru": "едва"
    },
    "lessonId": "supplementary",
    "category": "adverbs",
    "example": "I could hardly hear the announcement."
  },
  {
    "topic": "adverbs",
    "word": "however",
    "partOfSpeech": "adverb",
    "definition": "",
    "translation": {
      "sr": "međutim",
      "ru": "однако"
    },
    "lessonId": "supplementary",
    "category": "adverbs",
    "example": "The task was difficult; however, we finished it."
  },
  {
    "topic": "adverbs",
    "word": "immediately",
    "partOfSpeech": "adverb",
    "definition": "",
    "translation": {
      "sr": "odmah",
      "ru": "немедленно"
    },
    "lessonId": "supplementary",
    "category": "adverbs",
    "example": "Please contact me immediately."
  },
  {
    "topic": "adverbs",
    "word": "instead",
    "partOfSpeech": "adverb",
    "definition": "",
    "translation": {
      "sr": "umesto toga",
      "ru": "вместо этого"
    },
    "lessonId": "supplementary",
    "category": "adverbs",
    "example": "We stayed at home instead of going out."
  },
  {
    "topic": "adverbs",
    "word": "mostly",
    "partOfSpeech": "adverb",
    "definition": "",
    "translation": {
      "sr": "uglavnom",
      "ru": "в основном"
    },
    "lessonId": "supplementary",
    "category": "adverbs",
    "example": "The audience was mostly students."
  },
  {
    "topic": "adverbs",
    "word": "nearly",
    "partOfSpeech": "adverb",
    "definition": "",
    "translation": {
      "sr": "skoro",
      "ru": "почти"
    },
    "lessonId": "supplementary",
    "category": "adverbs",
    "example": "The journey took nearly three hours."
  },
  {
    "topic": "adverbs",
    "word": "perhaps",
    "partOfSpeech": "adverb",
    "definition": "",
    "translation": {
      "sr": "možda",
      "ru": "возможно"
    },
    "lessonId": "supplementary",
    "category": "adverbs",
    "example": "Perhaps we should check the details again."
  },
  {
    "topic": "adverbs",
    "word": "probably",
    "partOfSpeech": "adverb",
    "definition": "",
    "translation": {
      "sr": "verovatno",
      "ru": "вероятно"
    },
    "lessonId": "supplementary",
    "category": "adverbs",
    "example": "She will probably arrive later."
  },
  {
    "topic": "adverbs",
    "word": "therefore",
    "partOfSpeech": "adverb",
    "definition": "",
    "translation": {
      "sr": "zato",
      "ru": "следовательно"
    },
    "lessonId": "supplementary",
    "category": "adverbs",
    "example": "The file was missing; therefore, we sent it again."
  },
  {
    "topic": "adverbs",
    "word": "usually",
    "partOfSpeech": "adverb",
    "definition": "",
    "translation": {
      "sr": "obično",
      "ru": "обычно"
    },
    "lessonId": "supplementary",
    "category": "adverbs",
    "example": "I usually have lunch at one."
  },
  {
    "topic": "adverbs",
    "word": "while",
    "partOfSpeech": "adverb",
    "definition": "",
    "translation": {
      "sr": "dok",
      "ru": "в то время как"
    },
    "lessonId": "supplementary",
    "category": "adverbs",
    "example": "I listened to music while I was working."
  }
,
{
  "topic": "life-events",
  "word": "to start school",
  "partOfSpeech": "verb phrase",
  "definition": "to begin attending school",
  "translation": {
    "sr": "krenuti u školu",
    "ru": "начать ходить в школу"
  },
  "lessonId": "lesson-02",
  "category": "education",
  "example": "I started school when I was six."
},
{
  "topic": "life-events",
  "word": "to leave school",
  "partOfSpeech": "verb phrase",
  "definition": "to finish or stop attending school",
  "translation": {
    "sr": "završiti / napustiti školu",
    "ru": "закончить / бросить школу"
  },
  "lessonId": "lesson-02",
  "category": "education",
  "example": "She left school at eighteen."
},
{
  "topic": "life-events",
  "word": "to go to college",
  "partOfSpeech": "verb phrase",
  "definition": "to study at a college after school",
  "translation": {
    "sr": "ići na koledž / fakultet",
    "ru": "поступать в колледж"
  },
  "lessonId": "lesson-02",
  "category": "education",
  "example": "He went to college after high school."
},
{
  "topic": "life-events",
  "word": "to go to university",
  "partOfSpeech": "verb phrase",
  "definition": "to study at a university",
  "translation": {
    "sr": "ići na univerzitet / fakultet",
    "ru": "поступать в университет"
  },
  "lessonId": "lesson-02",
  "category": "education",
  "example": "I went to university to study engineering."
},
{
  "topic": "life-events",
  "word": "to study",
  "partOfSpeech": "verb",
  "definition": "to learn about a subject",
  "translation": {
    "sr": "učiti / studirati",
    "ru": "учиться / изучать"
  },
  "lessonId": "lesson-02",
  "category": "education",
  "example": "I studied mathematics at school."
},
{
  "topic": "life-events",
  "word": "to graduate",
  "partOfSpeech": "verb",
  "definition": "to complete a course at a school or university",
  "translation": {
    "sr": "diplomirati",
    "ru": "окончить учебное заведение"
  },
  "lessonId": "lesson-02",
  "category": "education",
  "example": "He graduated from university last year."
},
{
  "topic": "life-events",
  "word": "training course",
  "partOfSpeech": "noun",
  "definition": "a series of lessons to learn a skill",
  "translation": {
    "sr": "kurs obuke",
    "ru": "курс обучения"
  },
  "lessonId": "lesson-02",
  "category": "education",
  "example": "I completed a training course in IT."
},
{
  "topic": "life-events",
  "word": "to get a job",
  "partOfSpeech": "verb phrase",
  "definition": "to find and start working in a job",
  "translation": {
    "sr": "dobiti posao",
    "ru": "получить работу"
  },
  "lessonId": "lesson-02",
  "category": "work",
  "example": "She got a job in a bank."
},
{
  "topic": "life-events",
  "word": "to join a company",
  "partOfSpeech": "verb phrase",
  "definition": "to start working for a company",
  "translation": {
    "sr": "pridružiti se kompaniji / zaposliti se u kompaniji",
    "ru": "устроиться в компанию"
  },
  "lessonId": "lesson-02",
  "category": "work",
  "example": "I joined the company in March."
},
{
  "topic": "life-events",
  "word": "to leave a company",
  "partOfSpeech": "verb phrase",
  "definition": "to stop working for a company",
  "translation": {
    "sr": "napustiti kompaniju",
    "ru": "уйти из компании"
  },
  "lessonId": "lesson-02",
  "category": "work",
  "example": "He left the company after five years."
},
{
  "topic": "life-events",
  "word": "to get promoted",
  "partOfSpeech": "verb phrase",
  "definition": "to move to a more senior job",
  "translation": {
    "sr": "dobiti unapređenje",
    "ru": "получить повышение"
  },
  "lessonId": "lesson-02",
  "category": "work",
  "example": "She got promoted last month."
},
{
  "topic": "life-events",
  "word": "to get fired",
  "partOfSpeech": "verb phrase",
  "definition": "to lose your job because your employer ends your employment",
  "translation": {
    "sr": "dobiti otkaz",
    "ru": "быть уволенным"
  },
  "lessonId": "lesson-02",
  "category": "work",
  "example": "He got fired for repeatedly arriving late."
},
{
  "topic": "life-events",
  "word": "to move house",
  "partOfSpeech": "verb phrase",
  "definition": "to change the place where you live",
  "translation": {
    "sr": "preseliti se",
    "ru": "переехать"
  },
  "lessonId": "lesson-02",
  "category": "life events",
  "example": "We moved house last summer."
},
{
  "topic": "life-events",
  "word": "to meet a partner",
  "partOfSpeech": "verb phrase",
  "definition": "to meet someone who later becomes your partner",
  "translation": {
    "sr": "upoznati partnera",
    "ru": "встретить партнёра"
  },
  "lessonId": "lesson-02",
  "category": "life events",
  "example": "They met their partners at university."
},
{
  "topic": "life-events",
  "word": "to get married",
  "partOfSpeech": "verb phrase",
  "definition": "to become husband and wife or legal partners",
  "translation": {
    "sr": "venčati se",
    "ru": "пожениться"
  },
  "lessonId": "lesson-02",
  "category": "life events",
  "example": "They got married in June."
},
{
  "topic": "life-events",
  "word": "to get divorced",
  "partOfSpeech": "verb phrase",
  "definition": "to legally end a marriage",
  "translation": {
    "sr": "razvesti se",
    "ru": "развестись"
  },
  "lessonId": "lesson-02",
  "category": "life events",
  "example": "They got divorced several years ago."
},
{
  "topic": "life-events",
  "word": "to have children",
  "partOfSpeech": "verb phrase",
  "definition": "to become a parent",
  "translation": {
    "sr": "imati decu",
    "ru": "иметь детей"
  },
  "lessonId": "lesson-02",
  "category": "life events",
  "example": "They decided to have children."
},
{
  "topic": "life-events",
  "word": "to grow up",
  "partOfSpeech": "verb phrase",
  "definition": "to become older and more mature",
  "translation": {
    "sr": "odrasti",
    "ru": "вырасти"
  },
  "lessonId": "lesson-02",
  "category": "life events",
  "example": "I grew up in a small town."
},
{
  "topic": "life-events",
  "word": "to retire",
  "partOfSpeech": "verb",
  "definition": "to stop working because of age",
  "translation": {
    "sr": "penzionisati se",
    "ru": "выйти на пенсию"
  },
  "lessonId": "lesson-02",
  "category": "work",
  "example": "My grandfather retired at sixty-five."
},
{
  "topic": "education",
  "word": "nursery school",
  "partOfSpeech": "noun",
  "definition": "a place for very young children before primary school",
  "translation": {
    "sr": "jaslice / predškolska ustanova",
    "ru": "ясли / детский сад"
  },
  "lessonId": "lesson-02",
  "category": "education",
  "example": "My sister went to nursery school near our home."
},
{
  "topic": "education",
  "word": "primary school",
  "partOfSpeech": "noun",
  "definition": "the first stage of formal education",
  "translation": {
    "sr": "osnovna škola",
    "ru": "начальная школа"
  },
  "lessonId": "lesson-02",
  "category": "education",
  "example": "I started primary school at the age of six."
},
{
  "topic": "education",
  "word": "secondary school",
  "partOfSpeech": "noun",
  "definition": "school for older children after primary school",
  "translation": {
    "sr": "srednja škola",
    "ru": "средняя школа"
  },
  "lessonId": "lesson-02",
  "category": "education",
  "example": "He went to secondary school in Belgrade."
},
{
  "topic": "education",
  "word": "high school",
  "partOfSpeech": "noun",
  "definition": "a school for older teenagers",
  "translation": {
    "sr": "srednja škola",
    "ru": "старшая школа"
  },
  "lessonId": "lesson-02",
  "category": "education",
  "example": "She finished high school in 2022."
},
{
  "topic": "education",
  "word": "higher education",
  "partOfSpeech": "noun",
  "definition": "education at college or university level",
  "translation": {
    "sr": "visoko obrazovanje",
    "ru": "высшее образование"
  },
  "lessonId": "lesson-02",
  "category": "education",
  "example": "Higher education can open up new career opportunities."
},
{
  "topic": "education",
  "word": "mathematics",
  "partOfSpeech": "noun",
  "definition": "the study of numbers and calculations",
  "translation": {
    "sr": "matematika",
    "ru": "математика"
  },
  "lessonId": "lesson-02",
  "category": "education",
  "example": "Mathematics was difficult for me at school."
},
{
  "topic": "education",
  "word": "science",
  "partOfSpeech": "noun",
  "definition": "the study of the natural world",
  "translation": {
    "sr": "prirodne nauke",
    "ru": "естествознание / наука"
  },
  "lessonId": "lesson-02",
  "category": "education",
  "example": "Science was one of our main subjects."
},
{
  "topic": "education",
  "word": "geography",
  "partOfSpeech": "noun",
  "definition": "the study of places, countries and the Earth",
  "translation": {
    "sr": "geografija",
    "ru": "география"
  },
  "lessonId": "lesson-02",
  "category": "education",
  "example": "We learned about rivers in geography."
},
{
  "topic": "education",
  "word": "history",
  "partOfSpeech": "noun",
  "definition": "the study of past events",
  "translation": {
    "sr": "istorija",
    "ru": "история"
  },
  "lessonId": "lesson-02",
  "category": "education",
  "example": "I enjoyed learning history."
},
{
  "topic": "education",
  "word": "engineering",
  "partOfSpeech": "noun",
  "definition": "the work of designing and building machines, roads and systems",
  "translation": {
    "sr": "inženjerstvo",
    "ru": "инженерное дело"
  },
  "lessonId": "lesson-02",
  "category": "education",
  "example": "He studied engineering at university."
},
{
  "topic": "news",
  "word": "politics",
  "partOfSpeech": "noun",
  "definition": "the activities and ideas involved in governing a country",
  "translation": {
    "sr": "politika",
    "ru": "политика"
  },
  "lessonId": "lesson-04",
  "category": "news",
  "example": "We talked about politics after dinner."
},
{
  "topic": "news",
  "word": "politician",
  "partOfSpeech": "noun",
  "definition": "a person who works in politics",
  "translation": {
    "sr": "političar",
    "ru": "политик"
  },
  "lessonId": "lesson-04",
  "category": "news",
  "example": "The politician answered questions from reporters."
},
{
  "topic": "news",
  "word": "political issue",
  "partOfSpeech": "noun",
  "definition": "a subject that people debate in politics",
  "translation": {
    "sr": "političko pitanje",
    "ru": "политический вопрос"
  },
  "lessonId": "lesson-04",
  "category": "news",
  "example": "Education is an important political issue."
},
{
  "topic": "news",
  "word": "weather forecast",
  "partOfSpeech": "noun",
  "definition": "a report about the expected weather",
  "translation": {
    "sr": "vremenska prognoza",
    "ru": "прогноз погоды"
  },
  "lessonId": "lesson-04",
  "category": "news",
  "example": "The weather forecast says it will rain tomorrow."
},
{
  "topic": "news",
  "word": "terrorist attack",
  "partOfSpeech": "noun",
  "definition": "an act of violence intended to create fear for political or ideological reasons",
  "translation": {
    "sr": "teroristički napad",
    "ru": "террористическая атака"
  },
  "lessonId": "lesson-04",
  "category": "news",
  "example": "The news reported a terrorist attack; no further details were available."
},
{
  "topic": "news",
  "word": "Prime Minister",
  "partOfSpeech": "noun",
  "definition": "the head of government in some countries",
  "translation": {
    "sr": "premijer",
    "ru": "премьер-министр"
  },
  "lessonId": "lesson-04",
  "category": "news",
  "example": "The Prime Minister gave a speech."
},
{
  "topic": "news",
  "word": "economy",
  "partOfSpeech": "noun",
  "definition": "the system of money, trade and business in a country",
  "translation": {
    "sr": "privreda / ekonomija",
    "ru": "экономика"
  },
  "lessonId": "lesson-04",
  "category": "news",
  "example": "The economy grew last year."
},
{
  "topic": "news",
  "word": "economics",
  "partOfSpeech": "noun",
  "definition": "the study of how money, trade and resources work",
  "translation": {
    "sr": "ekonomija kao nauka",
    "ru": "экономика как наука"
  },
  "lessonId": "lesson-04",
  "category": "news",
  "example": "She studies economics at university."
},
{
  "topic": "news",
  "word": "inflation rate",
  "partOfSpeech": "noun",
  "definition": "the speed at which prices increase",
  "translation": {
    "sr": "stopa inflacije",
    "ru": "уровень инфляции"
  },
  "lessonId": "lesson-04",
  "category": "news",
  "example": "The inflation rate fell in April."
},
{
  "topic": "news",
  "word": "unemployment",
  "partOfSpeech": "noun",
  "definition": "the situation of not having a job",
  "translation": {
    "sr": "nezaposlenost",
    "ru": "безработица"
  },
  "lessonId": "lesson-04",
  "category": "news",
  "example": "Unemployment is a serious issue in some regions."
},
{
  "topic": "news",
  "word": "thief",
  "partOfSpeech": "noun",
  "definition": "a person who steals something",
  "translation": {
    "sr": "lopov",
    "ru": "вор"
  },
  "lessonId": "lesson-04",
  "category": "news",
  "example": "The thief was seen near the shop."
},
{
  "topic": "news",
  "word": "thieves",
  "partOfSpeech": "plural noun",
  "definition": "the plural form of thief",
  "translation": {
    "sr": "lopovi",
    "ru": "воры"
  },
  "lessonId": "lesson-04",
  "category": "news",
  "example": "The police spoke to two witnesses who saw the thieves."
},
{
  "topic": "news",
  "word": "earthquake",
  "partOfSpeech": "noun",
  "definition": "a sudden movement of the Earth's surface",
  "translation": {
    "sr": "zemljotres",
    "ru": "землетрясение"
  },
  "lessonId": "lesson-04",
  "category": "news",
  "example": "The earthquake damaged several buildings."
},
{
  "topic": "news",
  "word": "flood",
  "partOfSpeech": "noun",
  "definition": "a large amount of water covering normally dry land",
  "translation": {
    "sr": "poplava",
    "ru": "наводнение"
  },
  "lessonId": "lesson-04",
  "category": "news",
  "example": "Heavy rain caused a flood."
},
{
  "topic": "news",
  "word": "hurricane",
  "partOfSpeech": "noun",
  "definition": "a very strong tropical storm",
  "translation": {
    "sr": "uragan",
    "ru": "ураган"
  },
  "lessonId": "lesson-04",
  "category": "news",
  "example": "The hurricane moved towards the coast."
},
{
  "topic": "news",
  "word": "to steal",
  "partOfSpeech": "verb",
  "definition": "to take something that belongs to another person without permission",
  "translation": {
    "sr": "ukrasti",
    "ru": "украсть"
  },
  "lessonId": "lesson-04",
  "category": "news",
  "example": "Someone tried to steal a bicycle."
},
{
  "topic": "news",
  "word": "crime",
  "partOfSpeech": "noun",
  "definition": "an act that breaks the law",
  "translation": {
    "sr": "krivično delo / zločin",
    "ru": "преступление"
  },
  "lessonId": "lesson-04",
  "category": "news",
  "example": "The report described a recent crime."
},
{
  "topic": "news",
  "word": "natural disaster",
  "partOfSpeech": "noun",
  "definition": "a serious event caused by nature",
  "translation": {
    "sr": "prirodna katastrofa",
    "ru": "стихийное бедствие"
  },
  "lessonId": "lesson-04",
  "category": "news",
  "example": "The town received help after the natural disaster."
},
{
  "topic": "technology",
  "word": "IT",
  "partOfSpeech": "noun",
  "definition": "information technology; computers and digital systems",
  "translation": {
    "sr": "informacione tehnologije (IT)",
    "ru": "информационные технологии (ИТ)"
  },
  "lessonId": "lesson-05",
  "category": "technology",
  "example": "I work in IT support."
},
{
  "topic": "technology",
  "word": "key",
  "partOfSpeech": "noun",
  "definition": "a button on a keyboard",
  "translation": {
    "sr": "taster",
    "ru": "клавиша"
  },
  "lessonId": "lesson-05",
  "category": "technology",
  "example": "Press the Enter key."
},
{
  "topic": "technology",
  "word": "mouse",
  "partOfSpeech": "noun",
  "definition": "a device used to control the pointer on a screen",
  "translation": {
    "sr": "miš",
    "ru": "компьютерная мышь"
  },
  "lessonId": "lesson-05",
  "category": "technology",
  "example": "I use a wireless mouse."
},
{
  "topic": "technology",
  "word": "email address",
  "partOfSpeech": "noun",
  "definition": "the address used to send electronic messages",
  "translation": {
    "sr": "imejl adresa",
    "ru": "адрес электронной почты"
  },
  "lessonId": "lesson-05",
  "category": "technology",
  "example": "Please check your email address."
},
{
  "topic": "technology",
  "word": "World Wide Web",
  "partOfSpeech": "noun",
  "definition": "the system of linked pages and resources accessed through the Internet",
  "translation": {
    "sr": "Svetska mreža",
    "ru": "Всемирная паутина"
  },
  "lessonId": "lesson-05",
  "category": "technology",
  "example": "I found the information on the World Wide Web."
},
{
  "topic": "technology",
  "word": "web page",
  "partOfSpeech": "noun",
  "definition": "one page on a website",
  "translation": {
    "sr": "veb-stranica",
    "ru": "веб-страница"
  },
  "lessonId": "lesson-05",
  "category": "technology",
  "example": "This web page contains the instructions."
},
{
  "topic": "technology",
  "word": "search engine",
  "partOfSpeech": "noun",
  "definition": "a website or service used to find information online",
  "translation": {
    "sr": "pretraživač",
    "ru": "поисковая система"
  },
  "lessonId": "lesson-05",
  "category": "technology",
  "example": "I used a search engine to find the answer."
},
{
  "topic": "technology",
  "word": "keyword",
  "partOfSpeech": "noun",
  "definition": "an important word used in a search",
  "translation": {
    "sr": "ključna reč",
    "ru": "ключевое слово"
  },
  "lessonId": "lesson-05",
  "category": "technology",
  "example": "Add a keyword to improve your search."
},
{
  "topic": "technology",
  "word": "memory stick",
  "partOfSpeech": "noun",
  "definition": "a small portable device used to store files",
  "translation": {
    "sr": "USB memorija",
    "ru": "USB-накопитель"
  },
  "lessonId": "lesson-05",
  "category": "technology",
  "example": "I saved the photos on a memory stick."
},
{
  "topic": "technology",
  "word": "memory",
  "partOfSpeech": "noun",
  "definition": "the part of a computer that stores information for use",
  "translation": {
    "sr": "memorija",
    "ru": "память"
  },
  "lessonId": "lesson-05",
  "category": "technology",
  "example": "This computer has enough memory."
},
{
  "topic": "technology",
  "word": "to browse",
  "partOfSpeech": "verb",
  "definition": "to look through information or websites",
  "translation": {
    "sr": "pregledati / pretraživati",
    "ru": "просматривать"
  },
  "lessonId": "lesson-05",
  "category": "technology",
  "example": "I often browse websites for information."
},
{
  "topic": "technology",
  "word": "to attach",
  "partOfSpeech": "verb",
  "definition": "to add a file to an email or message",
  "translation": {
    "sr": "priložiti",
    "ru": "прикрепить"
  },
  "lessonId": "lesson-05",
  "category": "emails",
  "example": "I forgot to attach the document."
},
{
  "topic": "emails",
  "word": "Regards",
  "partOfSpeech": "email closing",
  "definition": "a polite way to end a formal or neutral email",
  "translation": {
    "sr": "Srdačan pozdrav",
    "ru": "С уважением"
  },
  "lessonId": "lesson-05",
  "category": "emails",
  "example": "Regards, Alex"
},
{
  "topic": "emails",
  "word": "Best wishes",
  "partOfSpeech": "email closing",
  "definition": "a friendly way to end an email",
  "translation": {
    "sr": "Sve najbolje",
    "ru": "С наилучшими пожелanjima"
  },
  "lessonId": "lesson-05",
  "category": "emails",
  "example": "Best wishes, Alex"
},
{
  "topic": "emails",
  "word": "Dear Sir/Madam",
  "partOfSpeech": "email greeting",
  "definition": "a formal greeting when you do not know the recipient's name",
  "translation": {
    "sr": "Poštovani/Poštovana",
    "ru": "Уважаемый господин / Уважаемая госпожа"
  },
  "lessonId": "lesson-05",
  "category": "emails",
  "example": "Dear Sir/Madam, I am writing to ask for information."
},
{
  "topic": "travel",
  "word": "terminal",
  "partOfSpeech": "noun",
  "definition": "a building or area at an airport where passengers arrive and leave",
  "translation": {
    "sr": "terminal",
    "ru": "терминал"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "Our flight leaves from Terminal 2."
},
{
  "topic": "travel",
  "word": "baggage",
  "partOfSpeech": "noun",
  "definition": "another word for luggage",
  "translation": {
    "sr": "prtljag",
    "ru": "багаж"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "You can collect your baggage after landing."
},
{
  "topic": "travel",
  "word": "transit",
  "partOfSpeech": "noun",
  "definition": "the process of passing through a place on the way somewhere else",
  "translation": {
    "sr": "tranzit",
    "ru": "транзит"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "We have a short transit in Vienna."
},
{
  "topic": "travel",
  "word": "to transfer",
  "partOfSpeech": "verb",
  "definition": "to change from one vehicle or service to another",
  "translation": {
    "sr": "presedati / prebaciti se",
    "ru": "пересесть / перевести"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "You need to transfer to another train."
},
{
  "topic": "travel",
  "word": "high-speed train",
  "partOfSpeech": "noun",
  "definition": "a train that travels at a very high speed",
  "translation": {
    "sr": "brzi voz",
    "ru": "скоростной поезд"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "We took a high-speed train to Paris."
},
{
  "topic": "travel",
  "word": "check-in",
  "partOfSpeech": "noun",
  "definition": "the process of registering for a flight or hotel",
  "translation": {
    "sr": "prijava",
    "ru": "регистрация"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "Online check-in opens 24 hours before departure."
},
{
  "topic": "travel",
  "word": "to check in",
  "partOfSpeech": "verb",
  "definition": "to register at an airport or hotel",
  "translation": {
    "sr": "prijaviti se",
    "ru": "зарегистрироваться"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "We need to check in two hours before the flight."
},
{
  "topic": "travel",
  "word": "security check",
  "partOfSpeech": "noun",
  "definition": "a check of passengers and their belongings for safety",
  "translation": {
    "sr": "bezbednosna kontrola",
    "ru": "досмотр безопасности"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "Please prepare your bags for the security check."
},
{
  "topic": "travel",
  "word": "scanner",
  "partOfSpeech": "noun",
  "definition": "a machine that checks or reads something",
  "translation": {
    "sr": "skener",
    "ru": "сканер"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "Put your bag through the scanner."
},
{
  "topic": "travel",
  "word": "metal detector",
  "partOfSpeech": "noun",
  "definition": "a device that detects metal",
  "translation": {
    "sr": "detektor metala",
    "ru": "металлодетектор"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "Walk through the metal detector."
},
{
  "topic": "travel",
  "word": "passport control",
  "partOfSpeech": "noun",
  "definition": "the place where passports are checked",
  "translation": {
    "sr": "pasoška kontrola",
    "ru": "паспортный контроль"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "We waited at passport control."
},
{
  "topic": "travel",
  "word": "identity",
  "partOfSpeech": "noun",
  "definition": "the fact of who a person is",
  "translation": {
    "sr": "identitet",
    "ru": "личность / идентичность"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "You must prove your identity."
},
{
  "topic": "travel",
  "word": "passport",
  "partOfSpeech": "noun",
  "definition": "an official document used for international travel",
  "translation": {
    "sr": "pasoš",
    "ru": "паспорт"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "Do not forget your passport."
},
{
  "topic": "travel",
  "word": "identity card",
  "partOfSpeech": "noun",
  "definition": "an official card that proves who you are",
  "translation": {
    "sr": "lična karta",
    "ru": "удостоверение личности"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "You can use your identity card for this journey."
},
{
  "topic": "travel",
  "word": "customs",
  "partOfSpeech": "noun",
  "definition": "the place where officials check goods entering a country",
  "translation": {
    "sr": "carina",
    "ru": "таможня"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "We had nothing to declare at customs."
},
{
  "topic": "travel",
  "word": "green channel",
  "partOfSpeech": "noun",
  "definition": "the customs route for travellers with nothing to declare",
  "translation": {
    "sr": "zeleni prolaz",
    "ru": "зелёный коридор"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "Use the green channel if you have nothing to declare."
},
{
  "topic": "travel",
  "word": "red channel",
  "partOfSpeech": "noun",
  "definition": "the customs route for travellers with goods to declare",
  "translation": {
    "sr": "crveni prolaz",
    "ru": "красный коридор"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "Use the red channel if you have goods to declare."
},
{
  "topic": "travel",
  "word": "goods to declare",
  "partOfSpeech": "noun phrase",
  "definition": "items that must be reported to customs",
  "translation": {
    "sr": "roba za prijavljivanje",
    "ru": "товары для декларирования"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "Do you have any goods to declare?"
},
{
  "topic": "travel",
  "word": "departure lounge",
  "partOfSpeech": "noun",
  "definition": "the waiting area for passengers before boarding",
  "translation": {
    "sr": "čekaonica za putnike pre ukrcavanja",
    "ru": "зал вылета"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "We waited in the departure lounge."
},
{
  "topic": "travel",
  "word": "announcement",
  "partOfSpeech": "noun",
  "definition": "information spoken or shown publicly",
  "translation": {
    "sr": "obaveštenje",
    "ru": "объявление"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "Listen carefully to the boarding announcement."
},
{
  "topic": "travel",
  "word": "boarding",
  "partOfSpeech": "noun",
  "definition": "the process of getting onto a plane, train or ship",
  "translation": {
    "sr": "ukrcavanje",
    "ru": "посадка"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "Boarding starts at 6:45."
},
{
  "topic": "travel",
  "word": "gate",
  "partOfSpeech": "noun",
  "definition": "the place where passengers get onto a plane",
  "translation": {
    "sr": "izlaz za ukrcavanje",
    "ru": "выход на посадку"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "Our gate has changed."
},
{
  "topic": "travel",
  "word": "seat number",
  "partOfSpeech": "noun",
  "definition": "the number of your assigned seat",
  "translation": {
    "sr": "broj sedišta",
    "ru": "номер места"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "My seat number is 14A."
},
{
  "topic": "travel",
  "word": "aisle seat",
  "partOfSpeech": "noun",
  "definition": "a seat next to the aisle",
  "translation": {
    "sr": "sedište do prolaza",
    "ru": "место у прохода"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "I prefer an aisle seat."
},
{
  "topic": "travel",
  "word": "window seat",
  "partOfSpeech": "noun",
  "definition": "a seat next to the window",
  "translation": {
    "sr": "sedište do prozora",
    "ru": "место у окна"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "Could I have a window seat?"
},
{
  "topic": "travel",
  "word": "track",
  "partOfSpeech": "noun",
  "definition": "the rails that a train travels on",
  "translation": {
    "sr": "šina / kolosek",
    "ru": "железнодорожный путь"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "The train is waiting on track three."
},
{
  "topic": "travel",
  "word": "coach",
  "partOfSpeech": "noun",
  "definition": "a comfortable bus used for long journeys",
  "translation": {
    "sr": "autobus za duža putovanja",
    "ru": "междугородний автобус"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "We travelled to the coast by coach."
},
{
  "topic": "travel",
  "word": "car",
  "partOfSpeech": "noun",
  "definition": "a road vehicle with four wheels",
  "translation": {
    "sr": "automobil",
    "ru": "автомобиль"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "We rented a car at the airport."
},
{
  "topic": "travel",
  "word": "booking reference",
  "partOfSpeech": "noun",
  "definition": "a code used to identify a reservation",
  "translation": {
    "sr": "broj / šifra rezervacije",
    "ru": "номер бронирования"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "Please have your booking reference ready."
},
{
  "topic": "travel",
  "word": "conveyor belt",
  "partOfSpeech": "noun",
  "definition": "a moving belt that carries luggage",
  "translation": {
    "sr": "pokretna traka za prtljag",
    "ru": "багажная лента"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "Our suitcases arrived on the conveyor belt."
},
{
  "topic": "travel",
  "word": "immigration officer",
  "partOfSpeech": "noun",
  "definition": "an official who checks people entering a country",
  "translation": {
    "sr": "službenik imigracione službe",
    "ru": "сотрудник иммиграционной службы"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "The immigration officer checked my passport."
},
{
  "topic": "travel",
  "word": "to miss a flight",
  "partOfSpeech": "verb phrase",
  "definition": "to arrive too late to take a flight",
  "translation": {
    "sr": "propustiti let",
    "ru": "опоздать на рейс"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "We missed our flight because of traffic."
},
{
  "topic": "travel",
  "word": "to miss a train",
  "partOfSpeech": "verb phrase",
  "definition": "to arrive too late to take a train",
  "translation": {
    "sr": "propustiti voz",
    "ru": "опоздать на поезд"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "I missed the train by two minutes."
},
{
  "topic": "travel",
  "word": "to miss a connection",
  "partOfSpeech": "verb phrase",
  "definition": "to fail to catch the next part of a journey",
  "translation": {
    "sr": "propustiti vezu / presedanje",
    "ru": "опоздать на пересадку"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "We missed our connection in Frankfurt."
},
{
  "topic": "travel",
  "word": "to run out of fuel",
  "partOfSpeech": "verb phrase",
  "definition": "to have no fuel left",
  "translation": {
    "sr": "ostati bez goriva",
    "ru": "остаться без топлива"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "The car ran out of fuel on the motorway."
},
{
  "topic": "travel",
  "word": "to break down",
  "partOfSpeech": "phrasal verb",
  "definition": "to stop working because of a problem",
  "translation": {
    "sr": "pokvariti se",
    "ru": "сломаться"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "Our car broke down on the way to the airport."
},
{
  "topic": "travel",
  "word": "rush hour",
  "partOfSpeech": "noun",
  "definition": "the busy time when many people travel to and from work",
  "translation": {
    "sr": "saobraćajni špic",
    "ru": "час пик"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "The roads are busy during rush hour."
},
{
  "topic": "travel",
  "word": "traffic jam",
  "partOfSpeech": "noun",
  "definition": "a long line of vehicles that cannot move quickly",
  "translation": {
    "sr": "saobraćajna gužva",
    "ru": "пробка"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "We were stuck in a traffic jam."
},
{
  "topic": "travel",
  "word": "to get lost",
  "partOfSpeech": "verb phrase",
  "definition": "to be unable to find the right way",
  "translation": {
    "sr": "izgubiti se",
    "ru": "заблудиться"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "We got lost in the city centre."
},
{
  "topic": "travel",
  "word": "long delay",
  "partOfSpeech": "noun",
  "definition": "a delay that lasts a long time",
  "translation": {
    "sr": "dugo kašnjenje",
    "ru": "длительная задержка"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "There was a long delay at the airport."
},
{
  "topic": "travel",
  "word": "cancelled",
  "partOfSpeech": "adjective",
  "definition": "officially stopped and not going to happen",
  "translation": {
    "sr": "otkazan",
    "ru": "отменённый"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "The train was cancelled because of bad weather."
},
{
  "topic": "travel",
  "word": "not valid",
  "partOfSpeech": "phrase",
  "definition": "not legally or officially accepted",
  "translation": {
    "sr": "nevažeći",
    "ru": "недействительный"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "This ticket is not valid for the express train."
},
{
  "topic": "travel",
  "word": "to pay a supplement",
  "partOfSpeech": "verb phrase",
  "definition": "to pay an extra amount in addition to the basic price",
  "translation": {
    "sr": "platiti doplatu",
    "ru": "доплатить"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "You have to pay a supplement for a first-class seat."
},
{
  "topic": "travel",
  "word": "standard ticket",
  "partOfSpeech": "noun",
  "definition": "a ticket for normal or basic travel",
  "translation": {
    "sr": "standardna karta",
    "ru": "стандартный билет"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "A standard ticket is cheaper."
},
{
  "topic": "travel",
  "word": "full fare",
  "partOfSpeech": "noun",
  "definition": "the normal price of a ticket without a discount",
  "translation": {
    "sr": "puna cena karte",
    "ru": "полная стоимость билета"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "I paid the full fare because I had no discount card."
},
{
  "topic": "frequency",
  "word": "always",
  "partOfSpeech": "adverb",
  "definition": "at all times; on every occasion",
  "translation": {
    "sr": "uvek",
    "ru": "всегда"
  },
  "lessonId": "lesson-06",
  "category": "frequency",
  "example": "I always check my passport before travelling."
},
{
  "topic": "frequency",
  "word": "normally",
  "partOfSpeech": "adverb",
  "definition": "in the usual or expected way",
  "translation": {
    "sr": "normalno / obično",
    "ru": "обычно"
  },
  "lessonId": "lesson-06",
  "category": "frequency",
  "example": "We normally arrive an hour early."
},
{
  "topic": "frequency",
  "word": "often",
  "partOfSpeech": "adverb",
  "definition": "many times; frequently",
  "translation": {
    "sr": "često",
    "ru": "часто"
  },
  "lessonId": "lesson-06",
  "category": "frequency",
  "example": "I often take the bus to the airport."
},
{
  "topic": "frequency",
  "word": "frequently",
  "partOfSpeech": "adverb",
  "definition": "often; many times",
  "translation": {
    "sr": "često",
    "ru": "часто"
  },
  "lessonId": "lesson-06",
  "category": "frequency",
  "example": "Flights are frequently delayed in winter."
},
{
  "topic": "frequency",
  "word": "regularly",
  "partOfSpeech": "adverb",
  "definition": "at regular times or intervals",
  "translation": {
    "sr": "redovno",
    "ru": "регулярно"
  },
  "lessonId": "lesson-06",
  "category": "frequency",
  "example": "The airport bus runs regularly."
},
{
  "topic": "frequency",
  "word": "sometimes",
  "partOfSpeech": "adverb",
  "definition": "on some occasions but not always",
  "translation": {
    "sr": "ponekad",
    "ru": "иногда"
  },
  "lessonId": "lesson-06",
  "category": "frequency",
  "example": "I sometimes travel alone."
},
{
  "topic": "frequency",
  "word": "occasionally",
  "partOfSpeech": "adverb",
  "definition": "sometimes, but not often",
  "translation": {
    "sr": "povremeno",
    "ru": "время от времени"
  },
  "lessonId": "lesson-06",
  "category": "frequency",
  "example": "We occasionally travel by coach."
},
{
  "topic": "frequency",
  "word": "rarely",
  "partOfSpeech": "adverb",
  "definition": "not often",
  "translation": {
    "sr": "retko",
    "ru": "редко"
  },
  "lessonId": "lesson-06",
  "category": "frequency",
  "example": "I rarely miss a train."
},
{
  "topic": "frequency",
  "word": "seldom",
  "partOfSpeech": "adverb",
  "definition": "not often; rarely",
  "translation": {
    "sr": "retko",
    "ru": "редко"
  },
  "lessonId": "lesson-06",
  "category": "frequency",
  "example": "He seldom travels abroad."
},
{
  "topic": "frequency",
  "word": "hardly ever",
  "partOfSpeech": "adverb phrase",
  "definition": "almost never",
  "translation": {
    "sr": "gotovo nikada",
    "ru": "почти никогда"
  },
  "lessonId": "lesson-06",
  "category": "frequency",
  "example": "I hardly ever travel during rush hour."
},
{
  "topic": "frequency",
  "word": "almost always",
  "partOfSpeech": "adverb phrase",
  "definition": "on nearly every occasion",
  "translation": {
    "sr": "skoro uvek",
    "ru": "почти всегда"
  },
  "lessonId": "lesson-06",
  "category": "frequency",
  "example": "I almost always check in online."
},
{
  "topic": "frequency",
  "word": "almost never",
  "partOfSpeech": "adverb phrase",
  "definition": "on very few occasions",
  "translation": {
    "sr": "skoro nikada",
    "ru": "почти никогда"
  },
  "lessonId": "lesson-06",
  "category": "frequency",
  "example": "We almost never travel without luggage."
}
,
{
  "topic": "news",
  "word": "political",
  "partOfSpeech": "adjective",
  "definition": "connected with politics or government",
  "translation": {
    "sr": "politički",
    "ru": "политический"
  },
  "lessonId": "lesson-04",
  "category": "news",
  "example": "They discussed a political issue."
},
{
  "topic": "news",
  "word": "President",
  "partOfSpeech": "noun",
  "definition": "the elected or appointed head of a republic",
  "translation": {
    "sr": "predsednik",
    "ru": "президент"
  },
  "lessonId": "lesson-04",
  "category": "news",
  "example": "The President met foreign leaders."
},
{
  "topic": "news",
  "word": "interest rates",
  "partOfSpeech": "noun",
  "definition": "the cost of borrowing money, usually shown as a percentage",
  "translation": {
    "sr": "kamatne stope",
    "ru": "процентные ставки"
  },
  "lessonId": "lesson-04",
  "category": "news",
  "example": "The central bank changed interest rates."
},
{
  "topic": "technology",
  "word": "address",
  "partOfSpeech": "noun",
  "definition": "the details used to find a website or send a message",
  "translation": {
    "sr": "adresa",
    "ru": "адрес"
  },
  "lessonId": "lesson-05",
  "category": "technology",
  "example": "Enter the website address in your browser."
},
{
  "topic": "technology",
  "word": "web address",
  "partOfSpeech": "noun",
  "definition": "the address of a website on the Internet",
  "translation": {
    "sr": "veb-adresa",
    "ru": "веб-адрес"
  },
  "lessonId": "lesson-05",
  "category": "technology",
  "example": "Type the web address into the browser."
},
{
  "topic": "emails",
  "word": "Mr.",
  "partOfSpeech": "title",
  "definition": "a title used before a man's surname",
  "translation": {
    "sr": "gospodin",
    "ru": "господин"
  },
  "lessonId": "lesson-05",
  "category": "emails",
  "example": "Dear Mr Smith,"
},
{
  "topic": "emails",
  "word": "Ms.",
  "partOfSpeech": "title",
  "definition": "a title used before a woman's surname when marital status is not specified",
  "translation": {
    "sr": "gospođa",
    "ru": "госпожа"
  },
  "lessonId": "lesson-05",
  "category": "emails",
  "example": "Dear Ms Jones,"
},
{
  "topic": "emails",
  "word": "Mrs.",
  "partOfSpeech": "title",
  "definition": "a title traditionally used before a married woman's surname",
  "translation": {
    "sr": "gospođa",
    "ru": "госпожа"
  },
  "lessonId": "lesson-05",
  "category": "emails",
  "example": "Dear Mrs Brown,"
},
{
  "topic": "emails",
  "word": "Miss",
  "partOfSpeech": "title",
  "definition": "a title traditionally used before an unmarried woman's surname",
  "translation": {
    "sr": "gospođica",
    "ru": "мисс"
  },
  "lessonId": "lesson-05",
  "category": "emails",
  "example": "Dear Miss Taylor,"
},
{
  "topic": "emails",
  "word": "Sir",
  "partOfSpeech": "noun",
  "definition": "a polite way to address a man when you do not know his name",
  "translation": {
    "sr": "gospodine",
    "ru": "сэр"
  },
  "lessonId": "lesson-05",
  "category": "emails",
  "example": "Dear Sir,"
},
{
  "topic": "emails",
  "word": "Madam",
  "partOfSpeech": "noun",
  "definition": "a polite way to address a woman when you do not know her name",
  "translation": {
    "sr": "gospođo",
    "ru": "мадам"
  },
  "lessonId": "lesson-05",
  "category": "emails",
  "example": "Dear Madam,"
},
{
  "topic": "emails",
  "word": "Best regards",
  "partOfSpeech": "email closing",
  "definition": "a polite and friendly way to end a professional email",
  "translation": {
    "sr": "Srdačan pozdrav",
    "ru": "С наилучшими пожеланиями"
  },
  "lessonId": "lesson-05",
  "category": "emails",
  "example": "Best regards, Alex"
},
{
  "topic": "emails",
  "word": "Attached is",
  "partOfSpeech": "email phrase",
  "definition": "a phrase used to introduce a file included with an email",
  "translation": {
    "sr": "U prilogu je",
    "ru": "Во вложении находится"
  },
  "lessonId": "lesson-05",
  "category": "emails",
  "example": "Attached is the requested document."
},
{
  "topic": "emails",
  "word": "Please find attached",
  "partOfSpeech": "email phrase",
  "definition": "a formal phrase introducing an attached file",
  "translation": {
    "sr": "U prilogu vam dostavljam",
    "ru": "Во вложении вы найдёте"
  },
  "lessonId": "lesson-05",
  "category": "emails",
  "example": "Please find attached the completed form."
},
{
  "topic": "travel",
  "word": "carriage",
  "partOfSpeech": "noun",
  "definition": "one of the separate vehicles that make up a train",
  "translation": {
    "sr": "vagon",
    "ru": "железнодорожный вагон"
  },
  "lessonId": "lesson-06",
  "category": "travel",
  "example": "Our seats are in the first carriage."
}
,
{
  "topic": "life-events",
  "word": "kids",
  "partOfSpeech": "plural noun",
  "definition": "children; informal word for young people",
  "translation": {
    "sr": "deca",
    "ru": "дети"
  },
  "lessonId": "lesson-02",
  "category": "life events",
  "example": "They have two kids."
},
{
  "topic": "life-events",
  "word": "to have kids",
  "partOfSpeech": "verb phrase",
  "definition": "to become a parent; informal alternative to “have children”",
  "translation": {
    "sr": "imati decu",
    "ru": "иметь детей"
  },
  "lessonId": "lesson-02",
  "category": "life events",
  "example": "They want to have kids one day."
}
];
const supplementaryVocabulary = supplementaryRows.map((item,index)=>({id:`extra-${String(index+1).padStart(4,"0")}`,...item}));
vocabulary.push(...supplementaryVocabulary);
