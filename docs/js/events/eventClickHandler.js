import { openSelectionMenu, closeSelectionMenu, toggleSavedTeamsMenu } from '../uiHandler/selectionMenu.js';
import { saveCurrentTeam, loadTeamToLocalStorage } from '../storage/localStorage.js';
import { updateAll } from '../update/update.js';
import { clearSlot } from '../update/teamContainer.js';
import { setLanguage } from '../utils/translate.js';
import { getCurrentLanguage } from '../dataModel/translation.js';
import { getTeamRoles, initTeamRoles, setTeamRoles } from '../dataModel/team.js';
import { CLASS_DATA } from '../dataModel/class.js';


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


document.getElementById('btn_export').onclick = function() {
    console.log("Export function triggered");

    let result = [];
    let l_teamRoles = getTeamRoles();
    l_teamRoles.forEach(slot => {
        if (slot.class && slot.voie) {
            const classVoies = CLASS_DATA.Classes[slot.class]?.Voies;
            if (classVoies && classVoies[slot.voie]) {
                const classId = CLASS_DATA.Classes[slot.class].Id; // ID de la classe
                const roleId = classVoies[slot.voie].Id; // ID du rôle dans la classe
                result.push(`${classId}-${roleId}`);
            }
        }
    });

    const exportString = result.join(";") + ";";
    
    // Copier dans le presse-papier
    navigator.clipboard.writeText(exportString).then(() => {
        console.log("Exported string copied to clipboard:", exportString);

        // Créer et afficher la tooltip près du bouton
        const tooltip = document.createElement('div');
        tooltip.textContent = "Code copié dans le presse-papier";
        tooltip.classList.add('temp-notification');

        tooltip.style.top = `${this.getBoundingClientRect().top - 40}px`;
        tooltip.style.left = `${this.getBoundingClientRect().left + this.offsetWidth / 2 + 50}px`;

        document.body.appendChild(tooltip);

        // Maintenir la tooltip visible pendant 1,5 secondes, puis commencer la disparition
        setTimeout(() => {
            // Graduellement rendre la tooltip transparente
            let opacity = 1;
            const fadeOut = setInterval(() => {
                if (opacity <= 0) {
                    clearInterval(fadeOut);
                    tooltip.remove(); // Retirer la tooltip une fois qu'elle est complètement transparente
                } else {
                    opacity -= 0.05;
                    tooltip.style.opacity = opacity;
                }
            }, 50); // Changer l'opacité tous les 50ms
        }, 1500); // Après 1,5 secondes, commencer la disparition

        tooltip.onclick = function() {
            tooltip.classList.add('hidden');
        }

    }).catch(err => {
        console.error("Failed to copy to clipboard:", err);
    });
};


document.getElementById('btn_import').onclick = async function() {
    console.log("Import function triggered");

    let importString = document.getElementById("role-input").value.trim();

    // Si l'entrée est vide, essayer de récupérer le contenu du presse-papiers
    if (importString === "") {
        try {
            importString = await navigator.clipboard.readText();
            importString = importString.trim();
            console.log("Presse-papiers récupéré :", importString);
        } catch (err) {
            console.error("Impossible d'accéder au presse-papiers :", err);
            return;
        }
    }

    if (importString === "") {
        console.log("Aucune donnée à importer");
        return;
    }


    const rolePairs = importString.split(";").filter(pair => pair !== "");
    
    // Réinitialiser teamRoles avec des slots vides
    let l_teamRoles = initTeamRoles();
    
    let index = 0;
    rolePairs.forEach(pair => {
        if (pair && index < l_teamRoles.length) {
            const [classId, roleId] = pair.split("-");
            
            // Rechercher la classe correspondant à l'ID
            for (const className in CLASS_DATA.Classes) {
                if (CLASS_DATA.Classes[className].Id.toString() === classId) {
                    const classVoies = CLASS_DATA.Classes[className]?.Voies;
                    
                    // Rechercher la voie correspondant à l'ID de rôle
                    for (const voieName in classVoies) {
                        if (classVoies[voieName].Id.toString() === roleId) {
                            l_teamRoles[index] = {
                                class: className,
                                voie: voieName,
                                image: CLASS_DATA.Classes[className].Image
                            };
                            index++;
                            break;
                        }
                    }
                    break;
                }
            }
        }
    });

    setTeamRoles(l_teamRoles);
    updateAll();
    
    console.log("Import completed");
};



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