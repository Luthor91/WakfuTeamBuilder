import { teamRoles } from './teamManagement.js';
import { showNotification } from './uiHandler.js';


// Fonction pour sauvegarder l'équipe actuelle dans le localStorage
function saveCurrentTeam() {
    let savedTeams = JSON.parse(localStorage.getItem("savedTeams")) || [];
    
    if (savedTeams.length >= 10) {
        showNotification("Supprimez une équipe avant d'en rajouter une.", "red");
        return;
    }
    savedTeams.push(teamRoles);
    localStorage.setItem("savedTeams", JSON.stringify(savedTeams));
    showNotification("Équipe ajoutée aux favoris !");
}

// Fonction pour sauvegarder teamRoles dans un cookie
function saveTeamToLocalStorage() {
    try {
        // Convertir teamRoles en chaîne JSON et stocker dans localStorage
        localStorage.setItem("savedTeam", JSON.stringify(teamRoles));
        console.log("Équipe sauvegardée dans le localStorage");

    } catch (error) {
        console.error("Erreur lors de la sauvegarde de l'équipe:", error);
    }
}

// Fonction pour charger teamRoles depuis un cookie
function loadTeamToLocalStorage() {
    try {
        // Récupérer les données depuis localStorage
        const teamRolesJSON = localStorage.getItem("savedTeam");
        if (teamRolesJSON) {
            const savedTeam = JSON.parse(teamRolesJSON);
            // Vérifier que c'est un tableau valide (et max 6 éléments)
            if (Array.isArray(savedTeam) && savedTeam.length <= 6) {
                // Mettre à jour teamRoles
                teamRoles = savedTeam;

                // Mettre à jour l'interface
                updateAll();
                console.log("Équipe chargée depuis le localStorage");
                // Afficher une notification à l'utilisateur
                showNotification("Équipe chargée avec succès!");
                return true;
            }
        }
        console.log("Aucune équipe sauvegardée trouvée dans le localStorage");
    } catch (error) {
        console.error("Erreur lors du chargement de l'équipe:", error);
    }
    return false;
}


export { saveCurrentTeam, saveTeamToLocalStorage, loadTeamToLocalStorage };