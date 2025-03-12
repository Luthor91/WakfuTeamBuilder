import { updateRolesPanel, updateRolesSummary } from '../update/roleContainers.js';
import { updateSlotOrder, updateTeamContainer } from '../update/teamContainer.js';
import { updateGauges } from '../update/gauge.js';

import { setTeamRoles } from '../dataModel/team.js';

function updateAll() {
    const teamRolesUpdated = updateSlotOrder();
    setTeamRoles(teamRolesUpdated);
    updateTeamContainer();
    updateRolesPanel();
    updateRolesSummary();
    updateGauges();
}

export { updateAll };