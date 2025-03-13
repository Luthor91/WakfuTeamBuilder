import { TRANSLATIONS, setCurrentLanguage } from '../dataModel/translation.js';
import { updateAll } from '../update/update.js';
import { toggleSavedTeamsMenu } from '../uiHandler/selectionMenu.js';
import { setTeamRoles } from '../dataModel/team.js';

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
    if (!TRANSLATIONS[key]) {
        console.warn(`Missing translation key: ${key}`);
        return key;
    }
    return TRANSLATIONS[key][language] || TRANSLATIONS[key]['en'];
}

// Fonction pour appliquer une équipe sauvegardée
function applySavedTeam(team) {
    setTeamRoles(team);
    updateAll();
    toggleSavedTeamsMenu(); // Ferme le menu après avoir appliqué l'équipe
}


export { setLanguage, translate, applySavedTeam };