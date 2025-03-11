let G_teamRoles = Array(6).fill({ class: null, voie: null, image: null });

function initTeamRoles() {
    return Array(6).fill().map(() => ({ class: null, voie: null, image: null }));
}

function setTeamRoles(l_teamRoles) {
    G_teamRoles = l_teamRoles;
}


function getTeamRoles() {
    return G_teamRoles;
}

export { initTeamRoles, setTeamRoles, getTeamRoles };