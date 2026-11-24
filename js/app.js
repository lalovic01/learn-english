import { initRouter } from "./core/router.js";
import { initShell } from "./components/shell.js";
import { renderPage } from "./pages/pages.js";
import { getSettings } from "./core/storage.js";
import { setLanguage } from "./core/i18n.js";

const settings = getSettings();
document.body.classList.toggle("dark", settings.theme === "dark");
document.documentElement.lang = settings.language || "en";
setLanguage(settings.language || "en");
initShell();
initRouter((route) => renderPage(route));
