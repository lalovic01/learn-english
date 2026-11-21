import { setLanguage,t } from "../core/i18n.js";
import { getSettings,saveSettings } from "../core/storage.js";
export function initShell(){
 const lang=document.querySelector("#language-select");
 lang.value=getSettings().language;
 lang.addEventListener("change",()=>{setLanguage(lang.value);document.dispatchEvent(new CustomEvent("languagechange"));});
 document.querySelector("#theme-toggle").addEventListener("click",()=>{const dark=!document.body.classList.contains("dark");document.body.classList.toggle("dark",dark);saveSettings({theme:dark?"dark":"light"});document.querySelector("#theme-toggle").textContent=dark?"☀":"☾";});
 document.querySelector("#theme-toggle").textContent=getSettings().theme==="dark"?"☀":"☾";
 const sidebar=document.querySelector("#sidebar"),overlay=document.querySelector("#mobile-overlay");
 const menuButton=document.querySelector("#mobile-menu");
 function openMenu(){
  sidebar.classList.add("open");
  overlay.classList.add("show");
  document.body.classList.add("menu-open");
  menuButton.setAttribute("aria-expanded","true");
  menuButton.setAttribute("aria-label","Close menu");
 }
 function closeMenu(){
  sidebar.classList.remove("open");
  overlay.classList.remove("show");
  document.body.classList.remove("menu-open");
  menuButton.setAttribute("aria-expanded","false");
  menuButton.setAttribute("aria-label","Open menu");
 }
 menuButton.setAttribute("aria-controls","sidebar");
 menuButton.setAttribute("aria-expanded","false");
 menuButton.addEventListener("click",()=>sidebar.classList.contains("open")?closeMenu():openMenu());
 overlay.addEventListener("click",closeMenu);
 sidebar.querySelectorAll("a").forEach(link=>link.addEventListener("click",closeMenu));
 document.addEventListener("keydown",event=>{if(event.key==="Escape"&&sidebar.classList.contains("open"))closeMenu();});
 window.addEventListener("resize",()=>{if(window.innerWidth>760&&sidebar.classList.contains("open"))closeMenu();});
}
export function toast(message,type="success"){const region=document.querySelector("#toast-region");const item=document.createElement("div");item.className=`toast ${type}`;item.textContent=message;region.append(item);setTimeout(()=>item.remove(),2800)}
