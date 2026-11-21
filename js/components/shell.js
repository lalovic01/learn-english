import { setLanguage,t } from "../core/i18n.js";
import { getSettings,saveSettings } from "../core/storage.js";
export function initShell(){
 const lang=document.querySelector("#language-select");
 lang.value=getSettings().language;
 lang.addEventListener("change",()=>{setLanguage(lang.value);document.dispatchEvent(new CustomEvent("languagechange"));});
 document.querySelector("#theme-toggle").addEventListener("click",()=>{const dark=!document.body.classList.contains("dark");document.body.classList.toggle("dark",dark);saveSettings({theme:dark?"dark":"light"});document.querySelector("#theme-toggle").textContent=dark?"☀":"☾";});
 document.querySelector("#theme-toggle").textContent=getSettings().theme==="dark"?"☀":"☾";
 const sidebar=document.querySelector("#sidebar"),overlay=document.querySelector("#mobile-overlay");
 document.querySelector("#mobile-menu").addEventListener("click",()=>{sidebar.classList.add("open");overlay.classList.add("show")});
 overlay.addEventListener("click",()=>{sidebar.classList.remove("open");overlay.classList.remove("show")});
}
export function toast(message,type="success"){const region=document.querySelector("#toast-region");const item=document.createElement("div");item.className=`toast ${type}`;item.textContent=message;region.append(item);setTimeout(()=>item.remove(),2800)}
