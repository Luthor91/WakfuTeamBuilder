import { updateRolesPanel, updateRolesSummary } from '../update/roleContainers.js';
import { updateSlotOrder, updateTeamContainer } from '../update/teamContainer.js';
import { setTeamRoles } from '../dataModel/team.js';
import { updateGauges } from '../update/gauge.js';

function updateAll() {
    const l_teamRoles = updateSlotOrder();
    setTeamRoles(l_teamRoles);
    updateTeamContainer();
    updateRolesPanel();
    updateRolesSummary();
    updateGauges();
}

export { updateAll };