import { getCurrentLanguage } from '../dataModel/translation.js';
import { translate } from '../utils/translate.js';
import { applyFavoriteTeam, deleteTeamFromLocalStorage } from '../storage/localStorage.js';
import { displayConfirmationModal } from './popup.js';



// Fonction pour afficher le menu des équipes sauvegardées
function displayFavoriteTeamsMenu() {
    const savedTeams = JSON.parse(localStorage.getItem("savedTeams")) || [];
    const menu = document.getElementById("saved-teams-menu");

    if (menu === null) return;
    menu.innerHTML = ""; // Vider le contenu existant
    
    if (savedTeams.length == 0) {
        displayNotification("Aucune équipe dans les favoris.", "red");
        return;
    }

    savedTeams.forEach((team, index) => {
        const teamContainer = document.createElement("div");
        teamContainer.classList.add("favorite-team-container");

        team.forEach(member => {
            const memberContainer = document.createElement("div");
            memberContainer.classList.add("member-container");
            const img = document.createElement("img");

            if (member.voie === null) {
                member.voie = '';
            }
            
            if (member.image) {
                img.src = member.image;
            } else {
                img.src = ""; // Pas d'image par défaut
                img.style.backgroundColor = "transparent"; // Carré transparent
            }
            img.classList.add("member-image");

            const voie = document.createElement("span");
            const data_translator = member.voie.toLowerCase().replaceAll(' ', '_');
            voie.setAttribute("data-translator", data_translator);
            const l_currentLanguage = getCurrentLanguage();
            voie.textContent = translate(data_translator, l_currentLanguage);
            voie.classList.add("member-voie");

            memberContainer.appendChild(img);
            memberContainer.appendChild(voie);
            teamContainer.appendChild(memberContainer);
        });

        // Ajouter un espace vide si l'équipe a moins de six membres
        if (team.length < 6) {
            const emptySpace = document.createElement("div");
            const emptyImg = document.createElement("img");
            emptyImg.style.backgroundColor = "transparent"; // Carré transparent
            emptySpace.appendChild(emptyImg);
            teamContainer.appendChild(emptySpace);
        }

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.classList.add("delete-button-favorite");
        deleteButton.addEventListener("click", (e) => {
            e.stopPropagation();
            displayConfirmationModal("Êtes-vous sûr de vouloir supprimer cette équipe ?", () => {
                deleteTeamFromLocalStorage(index);
                refreshFavoriteTeamsMenu();

            });
            
        });

        teamContainer.appendChild(deleteButton);
        teamContainer.addEventListener("click", () => applyFavoriteTeam(team));
        menu.appendChild(teamContainer);
    });

    menu.classList.remove("hidden"); // Afficher le menu
}

// Fonction pour basculer la visibilité du menu des équipes sauvegardées
function toggleFavoriteTeamsMenu(escapePressed = false) {
    const menu = document.getElementById("saved-teams-menu");

    if (menu.classList.contains("hidden")) {
        if (escapePressed == true) {
            return;
        }
        displayFavoriteTeamsMenu();
    } else {
        menu.classList.add("hidden");

    }
}

function refreshFavoriteTeamsMenu() {
    const menu = document.getElementById("saved-teams-menu");

    if (menu.classList.contains("hidden")) {
        displayFavoriteTeamsMenu();
    } else {
        menu.classList.add("hidden");
        displayFavoriteTeamsMenu();
    }

}

export { displayFavoriteTeamsMenu, toggleFavoriteTeamsMenu, refreshFavoriteTeamsMenu };