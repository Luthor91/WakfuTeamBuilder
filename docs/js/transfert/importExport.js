import { CLASS_DATA } from '../dataModel/class.js';
import { initTeamRoles, getTeamRoles, setTeamRoles } from '../dataModel/team.js';
import { updateAll } from '../update/update.js';


function exportTeamRoles() {
    console.log("Export function triggered");
    let result = [];
    const l_teamRoles = getTeamRoles();
    l_teamRoles.forEach(slot => {
        if (slot.class && slot.voie) {
        const classVoies = CLASS_DATA.Classes[slot.class]?.Voies;
        if (classVoies && classVoies[slot.voie]) {
            const classId = CLASS_DATA.Classes[slot.class].Id;
            const roleId = classVoies[slot.voie].Id;
            result.push(`${classId}-${roleId}`);
        }
        }
    });
    const exportString = result.join(";") + ";";
    navigator.clipboard.writeText(exportString).then(() => {
        console.log("Exported string copied to clipboard:", exportString);
        // Code pour afficher la tooltip
        const tooltip = document.createElement('div');
        tooltip.textContent = "Code copié dans le presse-papier";
        tooltip.classList.add('temp-notification');
        document.body.appendChild(tooltip);
        setTimeout(() => {
        tooltip.remove();
        }, 1500);
    }).catch(err => {
        console.error("Failed to copy to clipboard:", err);
    });
}

async function importTeamRoles() {
    console.log("Import function triggered");
    let importString = document.getElementById("role-input").value.trim();
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
    let l_teamRoles = initTeamRoles();
    let index = 0;
    rolePairs.forEach(pair => {
        if (pair && index < l_teamRoles.length) {
        const [classId, roleId] = pair.split("-");
        for (const className in CLASS_DATA.Classes) {
            if (CLASS_DATA.Classes[className].Id.toString() === classId) {
            const classVoies = CLASS_DATA.Classes[className]?.Voies;
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
}

export { exportTeamRoles, importTeamRoles };