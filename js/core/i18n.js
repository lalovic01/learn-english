import { translations } from "../data/translations.js";
import { saveSettings } from "./storage.js";
let currentLanguage="en";
export function t(key){return key.split(".").reduce((obj,k)=>obj?.[k],translations[currentLanguage]) ?? key}
export function setLanguage(language){currentLanguage=translations[language]?language:"en";document.documentElement.lang=currentLanguage;document.querySelectorAll("[data-i18n]").forEach(el=>{const value=t(el.dataset.i18n);if(value)el.textContent=value});const selector=document.querySelector("#language-select");if(selector)selector.value=currentLanguage;saveSettings({language:currentLanguage});return currentLanguage}
export function getLanguage(){return currentLanguage}
export function translateObject(value){return value?.[currentLanguage]??value?.en??""}
