import { updateRolesPanel, updateRolesSummary } from '../update/roleContainers.js';
import { updateSlotOrder, updateTeamContainer } from '../update/teamContainer.js';
import { G_teamRoles, setTeamRoles } from '../dataModel/team.js';
import { updateGauges } from '../update/gauge.js';

function updateAll() {
    const teamRolesUpdated = updateSlotOrder();
    setTeamRoles(teamRolesUpdated);
    updateTeamContainer();
    updateRolesPanel();
    updateRolesSummary();
    updateGauges();
}

export { updateAll };