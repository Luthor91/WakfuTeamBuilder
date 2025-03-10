import { TRANSLATIONS } from '../dataModel/translation.js';

function setLanguage(lang) {
    currentLanguage = lang;
    document.querySelectorAll("[data-translator]").forEach(element => {
        const translationKey = element.getAttribute('data-translator');
        if (TRANSLATIONS[translationKey] && TRANSLATIONS[translationKey][lang]) {
        element.textContent = TRANSLATIONS[translationKey][lang];
        }
    });
}

export { setLanguage };