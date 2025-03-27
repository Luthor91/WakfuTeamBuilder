const IMPORTANT_ROLES = [
    "Area", "Single Target", 
    "Heal", "Shield", "Positionning", "Resurection",
    "Buff DI", "Rall Resistance"
];

const OPTIONAL_ROLES = [
    "Burst", "Ranged", "Melee", "Poison", 
    "Entity Stabilized", "Enemy Stabilized", "Allies Stabilized", "Self Stabilized", "Invulnerability",
    "Sub Shield", "Sub Heal", "Sub DPT", "Sub Tank", "Sub Positionning", "Off Tank",
    "Buff AP", "Buff MP", "Buff Resistance", "Buff Crit", "Buff PO", "Buff Parade", "Buff WP",
    "Rall AP", "Rall MP", "Rall DI", "Rall Crit", "Rall PO", "Rall Parade", "Rall WP",
    "Anti Shield", "Anti Heal"
];

const CATEGORIES = {
    'Damage Type': ["Constant", "Burst", "Single Target", "Area", "Melee", "Ranged", "Indirect"],
    'Buff': ["Buff DI", "Buff AP", "Buff MP", "Buff Resistance", "Buff Crit", "Buff PO", "Buff Parade", "Buff WP"],
    'Rall': ["Rall DI", "Rall AP", "Rall MP", "Rall Resistance", "Rall Crit", "Rall PO", "Rall Parade", "Rall WP"],
    'Sub Roles': ["Off Tank", "Sub Shield", "Sub Heal", "Sub DPT", "Sub Positionning"],
    'Specific': ["Resurection", "Anti Shield", "Anti Heal", "Enemy Stabilized", "Allies Stabilized", "Self Stabilized", "Invulnerability"]
};

const PRIORITY_ORDER = [
    ["Area", "Burst", "Ranged", "Melee"],
    ["Area", "Burst"],
    ["Area"],
    ["Burst"],
    ["Constant"]
];

const ROLES_TO_CHECK = [
    "DPT",
    "Heal",
    "Resurection",
    "Rall Resistance",
    "Shield",
    "Positionning",
];

export { IMPORTANT_ROLES, OPTIONAL_ROLES, CATEGORIES, PRIORITY_ORDER, ROLES_TO_CHECK };
