import { getTeamRoles, setTeamRoles } from '../dataModel/team.js';
import { showNotification } from '../uiHandler/popup.js';

const teamRoles = getTeamRoles();

// Fonction pour sauvegarder l'équipe actuelle dans le localStorage
function saveCurrentTeam() {
    let savedTeams = JSON.parse(localStorage.getItem("savedTeams")) || [];
    
    if (savedTeams.length >= 10) {
        showNotification("Supprimez une équipe avant d'en rajouter une.", "red");
        return;
    }

    const teamRoles = getTeamRoles();
    savedTeams.push(teamRoles);
    localStorage.setItem("savedTeams", JSON.stringify(savedTeams));
    showNotification("Équipe ajoutée aux favoris !");
}

// Fonction pour sauvegarder G_teamRol  es dans un cookie
function saveTeamToLocalStorage() {
    try {
        // Convertir g_teamRoles en chaîne JSON et stocker dans localStorage
        const teamRoles = getTeamRoles();
        localStorage.setItem("savedTeam", JSON.stringify(teamRoles));
        console.log("Équipe sauvegardée dans le localStorage");

    } catch (error) {
        console.error("Erreur lors de la sauvegarde de l'équipe:", error);
    }
}

// Fonction pour charger g_teamRoles depuis un cookie
function loadTeamToLocalStorage() {
    try {
        // Récupérer les données depuis localStorage
        const teamRolesJSON = localStorage.getItem("savedTeam");
        if (teamRolesJSON) {
            const savedTeam = JSON.parse(teamRolesJSON);
            // Vérifier que c'est un tableau valide (et max 6 éléments)
            if (Array.isArray(savedTeam) && savedTeam.length <= 6) {
                // Mettre à jour g_teamRoles
                setTeamRoles(savedTeam);

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