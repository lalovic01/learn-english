const KEYS = { settings:"englishhub_settings", progress:"englishhub_progress", activity:"englishhub_activity" };
const defaults = {
  settings:{language:"en",theme:"light"},
  progress:{completedLessons:[],completedExercises:[],completedGrammar:[],completedGames:[],completedTests:[],vocabulary:{},attempts:0,correct:0,incorrect:0,gamesPlayed:0,gameScore:0,testsTaken:0,testScore:0,testResults:[],speakingResponses:{},practiceSeconds:0,timeBySection:{},topicStats:{},exerciseHistory:[]},
  activity:[]
};
function read(key,fallback){try{const raw=localStorage.getItem(key);return raw?JSON.parse(raw):fallback}catch(error){console.warn("EnglishHub storage read failed:",error);return fallback}}
function write(key,value){try{localStorage.setItem(key,JSON.stringify(value));return true}catch(error){console.warn("EnglishHub storage write failed:",error);return false}}
export function getSettings(){return {...defaults.settings,...read(KEYS.settings,{})}}
export function saveSettings(patch){const next={...getSettings(),...patch};write(KEYS.settings,next);return next}
export function getProgress(){return {...defaults.progress,...read(KEYS.progress,{})}}
export function saveProgress(value){return write(KEYS.progress,value)}
export function getActivity(){return read(KEYS.activity,[])}
export function recordActivity(entry){const list=getActivity();list.push(entry);return write(KEYS.activity,list.slice(-365))}
export function resetLocalProgress(){try{localStorage.removeItem(KEYS.progress);localStorage.removeItem(KEYS.activity);return true}catch(error){console.warn("EnglishHub could not reset local progress:",error);return false}}
export function exportLocalData(){return {settings:getSettings(),progress:getProgress(),activity:getActivity(),exportedAt:new Date().toISOString()}}

export function recordStudyTime(seconds,section){const safe=Math.max(0,Math.floor(seconds||0));if(!safe)return getProgress();const p=getProgress();const timeBySection={...(p.timeBySection||{}),[section]:(p.timeBySection?.[section]||0)+safe};const next={...p,practiceSeconds:(p.practiceSeconds||0)+safe,timeBySection};saveProgress(next);return next;}
