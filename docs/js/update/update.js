import { updateRolesPanel, updateRolesSummary } from '../update/roleContainers.js';
import { updateSlotOrder, updateTeamContainer } from '../update/teamContainer.js';
import { setTeamRoles } from '../dataModel/team.js';
import { updateGauges } from '../update/gauge.js';
import { saveTeamToLocalStorage } from '../storage/localStorage.js';

function updateAll() {
    const teamRolesUpdated = updateSlotOrder();
    setTeamRoles(teamRolesUpdated);
    saveTeamToLocalStorage();

    updateTeamContainer();
    updateRolesPanel();
    updateRolesSummary();
    updateGauges();
}

export { updateAll };