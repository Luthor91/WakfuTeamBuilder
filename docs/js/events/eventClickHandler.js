import { openSelectionMenu, closeSelectionMenu, toggleSavedTeamsMenu } from '../uiHandler/selectionMenu.js';
import { saveCurrentTeam, loadTeamToLocalStorage } from '../storage/localStorage.js';
import { updateAll } from '../update/update.js';
import { clearSlot } from '../update/teamContainer.js';
import { setLanguage } from '../utils/translate.js';
import { getCurrentLanguage } from '../dataModel/translation.js';


document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.slot').forEach(slot => {
    if (slot) {
      // Event au clic gauche
      slot.addEventListener('click', () => {
        openSelectionMenu(parseInt(slot.getAttribute('data-slot')));
      });

      // Event au clic droit
      slot.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        const slotIndex = parseInt(slot.getAttribute('data-slot'));
        clearSlot(slotIndex);
        updateAll();
      });

    } else {
      console.error('Slot is null');
    }
  });

    const closeButton = document.createElement("button");
    closeButton.classList.add("close-modal-btn");
    closeButton.textContent = "Fermer";
    closeButton.addEventListener("click", () => {
        document.getElementById("class-info-display").style.display = "none";
    });
    document.getElementById("class-info-display").appendChild(closeButton);


    document.getElementById("save-team-button").addEventListener("click", saveCurrentTeam);
    document.getElementById("show-teams-button").addEventListener("click", toggleSavedTeamsMenu);
    document.getElementById('close-menu-btn').addEventListener('click', closeSelectionMenu);

    loadTeamToLocalStorage();
    updateAll();
    const l_currentLanguage = getCurrentLanguage();
    setLanguage(l_currentLanguage);
});

document.getElementById('main-gauge-DPT').onclick = function() {
    const subGaugeContainer = document.getElementById(`sub-gauges-DPT`);
    
    // Cacher toutes les sous-jauges sauf celle cliquée
    document.querySelectorAll(".sub-gauges").forEach(el => {
        if (el !== subGaugeContainer) {
            el.classList.add("hidden");
        }
    });

    // Alterner l'affichage de la sous-jauge cliquée
    subGaugeContainer.classList.toggle("hidden");
}

document.getElementById('main-gauge-Support').onclick = function() {
    const subGaugeContainer = document.getElementById(`sub-gauges-Support`);
    
    // Cacher toutes les sous-jauges sauf celle cliquée
    document.querySelectorAll(".sub-gauges").forEach(el => {
        if (el !== subGaugeContainer) {
            el.classList.add("hidden");
        }
    });

    // Alterner l'affichage de la sous-jauge cliquée
    subGaugeContainer.classList.toggle("hidden");
}

document.getElementById('main-gauge-Entrave').onclick = function() {
    const subGaugeContainer = document.getElementById(`sub-gauges-Entrave`);
    
    // Cacher toutes les sous-jauges sauf celle cliquée
    document.querySelectorAll(".sub-gauges").forEach(el => {
        if (el !== subGaugeContainer) {
            el.classList.add("hidden");
        }
    });

    // Alterner l'affichage de la sous-jauge cliquée
    subGaugeContainer.classList.toggle("hidden");
}


document.getElementById("flag_french").onclick = function() {    
    setLanguage("fr");
};


document.getElementById("flag_english").onclick = function() {
    setLanguage("en");
};