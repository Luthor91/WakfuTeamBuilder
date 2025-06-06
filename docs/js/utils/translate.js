import { TRANSLATIONS, setCurrentLanguage } from '../dataModel/translation.js';

function setLanguage(lang) {
    setCurrentLanguage(lang);
    document.querySelectorAll("[data-translator]").forEach(element => {
        const translationKey = element.getAttribute('data-translator');
        if (TRANSLATIONS[translationKey] && TRANSLATIONS[translationKey][lang]) {
        element.textContent = TRANSLATIONS[translationKey][lang];
        }
    });
}


function translate(key, language) {
    if (key === null || key === "") return;
    
    if (!TRANSLATIONS[key]) {
        console.warn(`Missing translation key: ${key}`);
        return key;
    }
    return TRANSLATIONS[key][language] || TRANSLATIONS[key]['en'];
}

export { setLanguage, translate };