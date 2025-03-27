const CLASS_LIST = {
    "fr": [ 
        "Feca", "Osamodas", "Enutrof", "Sram", 
        "Xelor", "Ecaflip", "Eniripsa", "Iop", 
        "Cra", "Sadida", "Sacrieur", "Pandawa", 
        "Roublard", "Zobal", "Ouginak", "Steamer",
        "Eliotrope", "Huppermage"
    ], 
    "en": [ 
        "Feca", "Osamodas", "Enutrof", "Sram", 
        "Xelor", "Ecaflip", "Eniripsa", "Iop", 
        "Cra", "Sadida", "Sacrier", "Pandawa", 
        "Rogue", "Masqueraider", "Ouginak", "Foggernaut",
        "Eliotrope", "Huppermage"
    ], 
};

const CLASS_DATA = {
    "Classes": {
        "Cra": {
            "Id": 1,
            "Image": "assets/classes/male_cra.png",
            "Voies": {
                "DPT Ranged Area": {
                    "Id": 1,
                    "Notes": {
                        "DPT": {
                            "Melee": 0,
                            "Ranged": 5,
                            "Area": 5,
                            "Single_Target": 3,
                            "Constant": 3,
                            "Burst": 4
                        },
                        "Support": {
                            "Heal": 0,
                            "Shield": 0,
                            "Placeur": 1,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Area",
                        "Burst",
                        "Ranged",
                        "Rall PO",
                        "Buff PO",
                        "Entity Stabilized",
                        "Allies Stabilized",
                        "Enemy Stabilized",
                        "Rall MP"
                    ]
                },
                "DPT Ranged Single Target": {
                    "Id": 2,
                    "Notes": {
                        "DPT": {
                            "Melee": 0,
                            "Ranged": 5,
                            "Area": 3,
                            "Single_Target": 4,
                            "Constant": 4,
                            "Burst": 3
                        },
                        "Support": {
                            "Heal": 0,
                            "Shield": 0,
                            "Placeur": 1,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Single Target",
                        "Constant",
                        "Rall PO",
                        "Buff PO",
                        "Entity Stabilized",
                        "Allies Stabilized",
                        "Enemy Stabilized",
                        "Rall MP"
                    ]
                },
                "Support Utilitaire": {
                    "Id": 3,
                    "Notes": {
                        "DPT": {
                            "Melee": 0,
                            "Ranged": 2,
                            "Area": 2,
                            "Single_Target": 2,
                            "Constant": 1,
                            "Burst": 0
                        },
                        "Support": {
                            "Heal": 0,
                            "Shield": 0,
                            "Placeur": 1,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 1,
                    "Mobility": 1,
                    "Roles": [
                        "Rall PO",
                        "Buff PO",
                        "Rall Crit",
                        "Sub Placeur",
                        "Entity Stabilized",
                        "Allies Stabilized",
                        "Enemy Stabilized",
                        "Rall MP"
                    ]
                }
            },
            "Elements": [
                "Fire",
                "Earth",
                "Air"
            ],
            "Mobility": 1
        },
        "Ecaflip": {
            "Id": 2,
            "Image": "assets/classes/male_ecaflip.png",
            "Voies": {
                "DPT Elementary": {
                    "Id": 1,
                    "Notes": {
                        "DPT": {
                            "Melee": 4,
                            "Ranged": 4,
                            "Area": 3,
                            "Single_Target": 4,
                            "Constant": 4,
                            "Burst": 3
                        },
                        "Support": {
                            "Heal": 2,
                            "Shield": 1,
                            "Placeur": 2,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Constant",
                        "Single Target",
                        "Melee",
                        "Ranged",
                        "Sub Heal",
                        "Buff Crit",
                        "Buff DI",
                        "Resurection",
                        "Buff WP",
                        "Rall WP",
                        "Rall Resistance",
                        "Self Stabilized"
                    ]
                },
                "DPT Ranged": {
                    "Id": 2,
                    "Notes": {
                        "DPT": {
                            "Melee": 0,
                            "Ranged": 4,
                            "Area": 3,
                            "Single_Target": 4,
                            "Constant": 4,
                            "Burst": 3
                        },
                        "Support": {
                            "Heal": 2,
                            "Shield": 1,
                            "Placeur": 3,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Constant",
                        "Single Target",
                        "Ranged",
                        "Sub Heal",
                        "Buff Crit",
                        "Buff DI",
                        "Resurection",
                        "Rall WP",
                        "Rall Resistance",
                        "Self Stabilized"
                    ]
                },
                "DPT Melee": {
                    "Id": 3,
                    "Notes": {
                        "DPT": {
                            "Melee": 4,
                            "Ranged": 0,
                            "Area": 2,
                            "Single_Target": 4,
                            "Constant": 4,
                            "Burst": 3
                        },
                        "Support": {
                            "Heal": 2,
                            "Shield": 1,
                            "Placeur": 3,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Constant",
                        "Single Target",
                        "Melee",
                        "Sub Heal",
                        "Buff Crit",
                        "Buff DI",
                        "Resurection",
                        "Buff WP",
                        "Rall WP",
                        "Rall Resistance",
                        "Self Stabilized"
                    ]
                },
                "Support Heal": {
                    "Id": 4,
                    "Notes": {
                        "DPT": {
                            "Melee": 2,
                            "Ranged": 2,
                            "Area": 2,
                            "Single_Target": 2,
                            "Constant": 2,
                            "Burst": 2
                        },
                        "Support": {
                            "Heal": 4,
                            "Shield": 1,
                            "Placeur": 2,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 1,
                    "Mobility": 1,
                    "Roles": [
                        "Heal",
                        "Sub Shield",
                        "Sub DPT",
                        "Buff Crit",
                        "Buff DI",
                        "Buff WP",
                        "Resurection",
                        "Buff MP",
                        "Rall WP",
                        "Rall Resistance",
                        "Self Stabilized",
                        "Invulnerability"
                    ]
                },
                "Specific Distribution Heal": {
                    "Id": 5,
                    "Notes": {
                        "DPT": {
                            "Melee": 2,
                            "Ranged": 2,
                            "Area": 2,
                            "Single_Target": 2,
                            "Constant": 2,
                            "Burst": 2
                        },
                        "Support": {
                            "Heal": 3,
                            "Shield": 2,
                            "Placeur": 2,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 1,
                    "Mobility": 1,
                    "Roles": [
                        "Heal",
                        "Sub Shield",
                        "Sub DPT",
                        "Buff Crit",
                        "Buff DI",
                        "Buff WP",
                        "Resurection",
                        "Buff MP",
                        "Rall Resistance",
                        "Rall WP",
                        "Self Stabilized",
                        "Invulnerability"
                    ]
                }
            },
            "Elements": [
                "Fire",
                "Water",
                "Earth"
            ],
            "Mobility": 1
        },
        "Eliotrope": {
            "Id": 3,
            "Image": "assets/classes/male_eliotrope.png",
            "Voies": {
                "DPT Melee": {
                    "Id": 1,
                    "Notes": {
                        "DPT": {
                            "Melee": 5,
                            "Ranged": 0,
                            "Area": 5,
                            "Single_Target": 5,
                            "Constant": 1,
                            "Burst": 5
                        },
                        "Support": {
                            "Heal": 1,
                            "Shield": 0,
                            "Placeur": 2,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Area",
                        "Single Target",
                        "Burst",
                        "Melee",
                        "Entity Stabilized"
                    ]
                },
                "DPT Elementary": {
                    "Id": 2,
                    "Notes": {
                        "DPT": {
                            "Melee": 4,
                            "Ranged": 4,
                            "Area": 4,
                            "Single_Target": 4,
                            "Constant": 1,
                            "Burst": 5
                        },
                        "Support": {
                            "Heal": 1,
                            "Shield": 0,
                            "Placeur": 2,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Area",
                        "Single Target",
                        "Burst",
                        "Ranged",
                        "Melee",
                        "Entity Stabilized"
                    ]
                },
                "DPT Ranged": {
                    "Id": 3,
                    "Notes": {
                        "DPT": {
                            "Melee": 0,
                            "Ranged": 5,
                            "Area": 3,
                            "Single_Target": 5,
                            "Constant": 1,
                            "Burst": 5
                        },
                        "Support": {
                            "Heal": 1,
                            "Shield": 0,
                            "Placeur": 2,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Area",
                        "Single Target",
                        "Burst",
                        "Ranged",
                        "Entity Stabilized"
                    ]
                },
                "Support Placeur": {
                    "Id": 4,
                    "Notes": {
                        "DPT": {
                            "Melee": 2,
                            "Ranged": 2,
                            "Area": 2,
                            "Single_Target": 2,
                            "Constant": 2,
                            "Burst": 2
                        },
                        "Support": {
                            "Heal": 1,
                            "Shield": 0,
                            "Placeur": 4,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 1,
                    "Mobility": 1,
                    "Roles": [
                        "Placeur",
                        "Buff AP",
                        "Sub Heal",
                        "Sub Shield",
                        "Entity Stabilized"
                    ]
                }
            },
            "Elements": [
                "Water",
                "Earth",
                "Air"
            ],
            "Mobility": 1
        },
        "Eniripsa": {
            "Id": 4,
            "Image": "assets/classes/male_eniripsa.png",
            "Voies": {
                "Support Heal": {
                    "Id": 1,
                    "Notes": {
                        "DPT": {
                            "Melee": 2,
                            "Ranged": 2,
                            "Area": 1,
                            "Single_Target": 3,
                            "Constant": 1,
                            "Burst": 2
                        },
                        "Support": {
                            "Heal": 5,
                            "Shield": 1,
                            "Placeur": 2,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 4,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 1,
                    "Mobility": 1,
                    "Roles": [
                        "Heal",
                        "Sub DPT",
                        "Buff DI",
                        "Buff Resistance",
                        "Buff MP",
                        "Buff PO",
                        "Rall DI",
                        "Rall Resistance",
                        "Resurection",
                        "Sub DPT",
                        "Anti Shield",
                        "Anti Heal",
                        "Invulnerability",
                        "Rall Parade"
                    ]
                },
                "DPT Indirect": {
                    "Id": 2,
                    "Notes": {
                        "DPT": {
                            "Melee": 3,
                            "Ranged": 3,
                            "Area": 1,
                            "Single_Target": 3,
                            "Constant": 2,
                            "Burst": 4
                        },
                        "Support": {
                            "Heal": 2,
                            "Shield": 0,
                            "Placeur": 2,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 4,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Poison",
                        "Single Target",
                        "Burst",
                        "Resurection",
                        "Anti Shield",
                        "Anti Heal",
                        "Rall Resistance",
                        "Invulnerability",
                        "Rall Parade"
                    ]
                },
                "Specific Distribution Heal": {
                    "Id": 3,
                    "Notes": {
                        "DPT": {
                            "Melee": 2,
                            "Ranged": 2,
                            "Area": 2,
                            "Single_Target": 2,
                            "Constant": 2,
                            "Burst": 2
                        },
                        "Support": {
                            "Heal": 4,
                            "Shield": 3,
                            "Placeur": 2,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 4,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Heal",
                        "Sub DPT",
                        "Buff DI",
                        "Buff Resistance",
                        "Buff MP",
                        "Buff PO",
                        "Rall DI",
                        "Rall Resistance",
                        "Resurection",
                        "Sub DPT",
                        "Anti Shield",
                        "Anti Heal",
                        "Invulnerability",
                        "Rall Parade"
                    ]
                }
            },
            "Elements": [
                "Fire",
                "Water",
                "Air"
            ],
            "Mobility": 1
        },
        "Enutrof": {
            "Id": 5,
            "Image": "assets/classes/male_enutrof.png",
            "Voies": {
                "Support Utilitaire": {
                    "Id": 1,
                    "Notes": {
                        "DPT": {
                            "Melee": 1,
                            "Ranged": 1,
                            "Area": 1,
                            "Single_Target": 1,
                            "Constant": 1,
                            "Burst": 1
                        },
                        "Support": {
                            "Heal": 1,
                            "Shield": 0,
                            "Placeur": 2,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 4,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 1,
                    "Mobility": 1,
                    "Roles": [
                        "Buff DI",
                        "Buff AP",
                        "Buff MP",
                        "Rall Resistance",
                        "Rall DI",
                        "Rall AP",
                        "Rall MP",
                        "Rall PO",
                        "Support Constant"
                    ]
                },
                "DPT Melee": {
                    "Id": 2,
                    "Notes": {
                        "DPT": {
                            "Melee": 5,
                            "Ranged": 0,
                            "Area": 1,
                            "Single_Target": 5,
                            "Constant": 5,
                            "Burst": 3
                        },
                        "Support": {
                            "Heal": 1,
                            "Shield": 0,
                            "Placeur": 2,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 3,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Constant",
                        "Single Target",
                        "Melee",
                        "Off Tank",
                        "Rall Resistance",
                        "Rall DI",
                        "Rall MP"
                    ]
                },
                "DPT Area": {
                    "Id": 3,
                    "Notes": {
                        "DPT": {
                            "Melee": 4,
                            "Ranged": 3,
                            "Area": 4,
                            "Single_Target": 3,
                            "Constant": 3,
                            "Burst": 3
                        },
                        "Support": {
                            "Heal": 1,
                            "Shield": 0,
                            "Placeur": 2,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 3,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Constant",
                        "Single Target",
                        "Melee",
                        "Off Tank",
                        "Rall Resistance",
                        "Rall DI",
                        "Rall MP"
                    ]
                }
            },
            "Elements": [
                "Fire",
                "Water",
                "Earth"
            ],
            "Mobility": 1
        },
        "Feca": {
            "Id": 6,
            "Image": "assets/classes/male_feca.png",
            "Voies": {
                "Support Shield": {
                    "Id": 1,
                    "Notes": {
                        "DPT": {
                            "Melee": 1,
                            "Ranged": 1,
                            "Area": 1,
                            "Single_Target": 1,
                            "Constant": 1,
                            "Burst": 1
                        },
                        "Support": {
                            "Heal": 0,
                            "Shield": 0,
                            "Placeur": 3,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 3
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 1,
                    "Mobility": 1,
                    "Roles": [
                        "Buff DI Melee",
                        "Buff Crit",
                        "Shield",
                        "Buff Resistance",
                        "Rall MP",
                        "Buff WP",
                        "Entity Stabilized",
                        "Allies Stabilized",
                        "Enemy Stabilized",
                        "Invulnerability",
                        "Support Constant"
                    ]
                },
                "DPT Glyph Ranged": {
                    "Id": 2,
                    "Notes": {
                        "DPT": {
                            "Melee": 1,
                            "Ranged": 5,
                            "Area": 5,
                            "Single_Target": 1,
                            "Constant": 1,
                            "Burst": 5
                        },
                        "Support": {
                            "Heal": 0,
                            "Shield": 0,
                            "Placeur": 3,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Poison",
                        "Area",
                        "Ranged",
                        "Buff DI Melee",
                        "Buff Resistance",
                        "Rall MP",
                        "Entity Stabilized",
                        "Allies Stabilized",
                        "Enemy Stabilized",
                        "Invulnerability"
                    ]
                }
            },
            "Elements": [
                "Fire",
                "Water",
                "Earth"
            ],
            "Mobility": 1
        },
        "Foggernaut": {
            "Id": 7,
            "Image": "assets/classes/male_foggernaut.png",
            "Voies": {
                "DPT Elementary": {
                    "Id": 1,
                    "Notes": {
                        "DPT": {
                            "Melee": 3,
                            "Ranged": 4,
                            "Area": 5,
                            "Single_Target": 3,
                            "Constant": 5,
                            "Burst": 4
                        },
                        "Support": {
                            "Heal": 0,
                            "Shield": 0,
                            "Placeur": 2,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 1
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Constant",
                        "Burst",
                        "Area",
                        "Ranged",
                        "Melee",
                        "Rall Resistance",
                        "Off Tank",
                        "Rall PO",
                        "Entity Stabilized",
                        "Rall Parade",
                        "Rall Crit",
                        "Allies Stabilized"
                    ]
                },
                "DPT Ranged": {
                    "Id": 2,
                    "Notes": {
                        "DPT": {
                            "Melee": 0,
                            "Ranged": 4,
                            "Area": 5,
                            "Single_Target": 3,
                            "Constant": 5,
                            "Burst": 4
                        },
                        "Support": {
                            "Heal": 0,
                            "Shield": 0,
                            "Placeur": 2,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 1
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Constant",
                        "Burst",
                        "Area",
                        "Ranged",
                        "Rall Resistance",
                        "Rall PO",
                        "Entity Stabilized",
                        "Rall Parade",
                        "Rall Parade",
                        "Rall Crit",
                        "Allies Stabilized"
                    ]
                },
                "DPT Melee": {
                    "Id": 3,
                    "Notes": {
                        "DPT": {
                            "Melee": 4,
                            "Ranged": 0,
                            "Area": 1,
                            "Single_Target": 4,
                            "Constant": 4,
                            "Burst": 4
                        },
                        "Support": {
                            "Heal": 0,
                            "Shield": 0,
                            "Placeur": 1,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 1
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Constant",
                        "Area",
                        "Melee",
                        "Rall Resistance",
                        "Off Tank",
                        "Rall PO",
                        "Entity Stabilized",
                        "Rall Parade",
                        "Rall Parade",
                        "Rall Crit",
                        "Allies Stabilized"
                    ]
                },
                "Support Shield": {
                    "Id": 4,
                    "Notes": {
                        "DPT": {
                            "Melee": 1,
                            "Ranged": 1,
                            "Area": 1,
                            "Single_Target": 1,
                            "Constant": 1,
                            "Burst": 1
                        },
                        "Support": {
                            "Heal": 0,
                            "Shield": 0,
                            "Placeur": 3,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 4
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 1,
                    "Mobility": 1,
                    "Roles": [
                        "Shield",
                        "Rall MP",
                        "Rall Resistance",
                        "Buff PO",
                        "Buff DI Range",
                        "Sub Placeur",
                        "Anti Heal",
                        "Entity Stabilized",
                        "Support Constant",
                        "Support Area",
                        "Rall Parade",
                        "Rall Crit",
                        "Allies Stabilized"
                    ]
                }
            },
            "Elements": [
                "Fire",
                "Water",
                "Earth",
                "Stasis"
            ],
            "Mobility": 1
        },
        "Huppermage": {
            "Id": 8,
            "Image": "assets/classes/male_huppermage.png",
            "Voies": {
                "DPT Elementary": {
                    "Id": 1,
                    "Notes": {
                        "DPT": {
                            "Melee": 4,
                            "Ranged": 4,
                            "Area": 4,
                            "Single_Target": 4,
                            "Constant": 4,
                            "Burst": 3
                        },
                        "Support": {
                            "Heal": 3,
                            "Shield": 0,
                            "Placeur": 3,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 2,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Area",
                        "Single Target",
                        "Constant",
                        "Melee",
                        "Ranged",
                        "Buff AP",
                        "Buff MP",
                        "Buff Resistance",
                        "Rall AP",
                        "Rall DI",
                        "Anti Shield",
                        "Anti Heal",
                        "Entity Stabilized",
                        "Rall Parade"
                    ]
                },
                "DPT Ranged": {
                    "Id": 2,
                    "Notes": {
                        "DPT": {
                            "Melee": 0,
                            "Ranged": 4,
                            "Area": 4,
                            "Single_Target": 4,
                            "Constant": 4,
                            "Burst": 3
                        },
                        "Support": {
                            "Heal": 3,
                            "Shield": 0,
                            "Placeur": 3,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 2,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Area",
                        "Single Target",
                        "Burst",
                        "Ranged",
                        "Buff AP",
                        "Buff MP",
                        "Buff Resistance",
                        "Rall DI",
                        "Anti Shield",
                        "Anti Heal",
                        "Entity Stabilized",
                        "Rall Parade"
                    ]
                },
                "DPT Melee": {
                    "Id": 3,
                    "Notes": {
                        "DPT": {
                            "Melee": 4,
                            "Ranged": 0,
                            "Area": 2,
                            "Single_Target": 4,
                            "Constant": 4,
                            "Burst": 3
                        },
                        "Support": {
                            "Heal": 3,
                            "Shield": 0,
                            "Placeur": 3,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 2,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Constant",
                        "Single Target",
                        "Burst",
                        "Melee",
                        "Off Tank",
                        "Buff AP",
                        "Buff MP",
                        "Buff Resistance",
                        "Rall AP",
                        "Rall DI",
                        "Anti Shield",
                        "Anti Heal",
                        "Entity Stabilized",
                        "Rall Parade"
                    ]
                },
                "Support Heal": {
                    "Id": 4,
                    "Notes": {
                        "DPT": {
                            "Melee": 2,
                            "Ranged": 2,
                            "Area": 2,
                            "Single_Target": 2,
                            "Constant": 2,
                            "Burst": 2
                        },
                        "Support": {
                            "Heal": 4,
                            "Shield": 0,
                            "Placeur": 0,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 3,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 1,
                    "Mobility": 1,
                    "Roles": [
                        "Sub DPT",
                        "Rall MP",
                        "Buff MP",
                        "Buff AP",
                        "Buff Resistance",
                        "Sub Placeur",
                        "Rall Crit",
                        "Rall AP",
                        "Rall DI",
                        "Rall PO",
                        "Buff Crit",
                        "Anti Shield",
                        "Anti Heal",
                        "Entity Stabilized",
                        "Support Burst",
                        "Support Area",
                        "Rall Parade"
                    ]
                },
                "Support Utilitaire": {
                    "Id": 5,
                    "Notes": {
                        "DPT": {
                            "Melee": 1,
                            "Ranged": 1,
                            "Area": 1,
                            "Single_Target": 1,
                            "Constant": 1,
                            "Burst": 1
                        },
                        "Support": {
                            "Heal": 2,
                            "Shield": 0,
                            "Placeur": 4,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 3,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 1,
                    "Mobility": 1,
                    "Roles": [
                        "Sub DPT",
                        "Rall MP",
                        "Buff MP",
                        "Buff AP",
                        "Buff Resistance",
                        "Sub Placeur",
                        "Rall Crit",
                        "Rall AP",
                        "Rall DI",
                        "Rall PO",
                        "Buff Crit",
                        "Anti Shield",
                        "Anti Heal",
                        "Entity Stabilized",
                        "Support Burst",
                        "Support Area",
                        "Rall Parade"
                    ]
                },
                "Specific Distribution Heal": {
                    "Id": 6,
                    "Notes": {
                        "DPT": {
                            "Melee": 2,
                            "Ranged": 2,
                            "Area": 2,
                            "Single_Target": 2,
                            "Constant": 2,
                            "Burst": 2
                        },
                        "Support": {
                            "Heal": 3,
                            "Shield": 0,
                            "Placeur": 4,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 3,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Sub DPT",
                        "Rall MP",
                        "Buff MP",
                        "Buff AP",
                        "Buff Resistance",
                        "Sub Placeur",
                        "Rall Crit",
                        "Rall AP",
                        "Rall DI",
                        "Rall PO",
                        "Buff Crit",
                        "Anti Shield",
                        "Anti Heal",
                        "Entity Stabilized",
                        "Support Burst",
                        "Support Area",
                        "Rall Parade"
                    ]
                }
            },
            "Elements": [
                "Fire",
                "Water",
                "Earth",
                "Air"
            ],
            "Mobility": 1
        },
        "Iop": {
            "Id": 9,
            "Image": "assets/classes/male_iop.png",
            "Voies": {
                "DPT Melee Single Target": {
                    "Id": 1,
                    "Notes": {
                        "DPT": {
                            "Melee": 4,
                            "Ranged": 0,
                            "Area": 1,
                            "Single_Target": 4,
                            "Constant": 4,
                            "Burst": 3
                        },
                        "Support": {
                            "Heal": 0,
                            "Shield": 0,
                            "Placeur": 1,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Constant",
                        "Single Target",
                        "Melee",
                        "Off Tank",
                        "Buff AP",
                        "Buff DI",
                        "Entity Stabilized",
                        "Allies Stabilized",
                        "Enemy Stabilized"
                    ]
                },
                "DPT Melee Area": {
                    "Id": 2,
                    "Notes": {
                        "DPT": {
                            "Melee": 4,
                            "Ranged": 0,
                            "Area": 4,
                            "Single_Target": 2,
                            "Constant": 4,
                            "Burst": 3
                        },
                        "Support": {
                            "Heal": 0,
                            "Shield": 0,
                            "Placeur": 1,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Constant",
                        "Single Target",
                        "Melee",
                        "Off Tank",
                        "Buff AP",
                        "Buff DI",
                        "Entity Stabilized",
                        "Allies Stabilized",
                        "Enemy Stabilized"
                    ]
                },
                "Support Utilitaire": {
                    "Id": 3,
                    "Notes": {
                        "DPT": {
                            "Melee": 1,
                            "Ranged": 1,
                            "Area": 1,
                            "Single_Target": 1,
                            "Constant": 1,
                            "Burst": 1
                        },
                        "Support": {
                            "Heal": 0,
                            "Shield": 0,
                            "Placeur": 1,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 1,
                    "Mobility": 1,
                    "Roles": [
                        "Buff AP",
                        "Buff DI",
                        "Sub Shield",
                        "Anti Shield",
                        "Entity Stabilized",
                        "Allies Stabilized",
                        "Enemy Stabilized"
                    ]
                }
            },
            "Elements": [
                "Fire",
                "Earth",
                "Air"
            ],
            "Mobility": 1
        },
        "Masqueraider": {
            "Id": 10,
            "Image": "assets/classes/male_masqueraider.png",
            "Voies": {
                "Support Placeur": {
                    "Id": 1,
                    "Notes": {
                        "DPT": {
                            "Melee": 1,
                            "Ranged": 1,
                            "Area": 1,
                            "Single_Target": 1,
                            "Constant": 1,
                            "Burst": 1
                        },
                        "Support": {
                            "Heal": 1,
                            "Shield": 0,
                            "Placeur": 5,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 1,
                    "Mobility": 1,
                    "Roles": [
                        "Placeur",
                        "Resurection",
                        "Sub Shield",
                        "Sub Heal",
                        "Rall WP",
                        "Buff Resistance"
                    ]
                },
                "Support Heal": {
                    "Id": 2,
                    "Notes": {
                        "DPT": {
                            "Melee": 2,
                            "Ranged": 2,
                            "Area": 2,
                            "Single_Target": 2,
                            "Constant": 2,
                            "Burst": 2
                        },
                        "Support": {
                            "Heal": 4,
                            "Shield": 0,
                            "Placeur": 5,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Heal",
                        "Resurection",
                        "Sub DPT",
                        "Sub Shield",
                        "Sub Placeur",
                        "Rall WP",
                        "Buff Resistance"
                    ]
                },
                "Support Shield": {
                    "Id": 3,
                    "Notes": {
                        "DPT": {
                            "Melee": 1,
                            "Ranged": 1,
                            "Area": 1,
                            "Single_Target": 1,
                            "Constant": 1,
                            "Burst": 1
                        },
                        "Support": {
                            "Heal": 1,
                            "Shield": 0,
                            "Placeur": 5,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 1,
                    "Mobility": 1,
                    "Roles": [
                        "Shield",
                        "Resurection",
                        "Sub Placeur",
                        "Sub Heal",
                        "Rall WP",
                        "Buff Resistance"
                    ]
                },
                "DPT Melee": {
                    "Id": 4,
                    "Notes": {
                        "DPT": {
                            "Melee": 4,
                            "Ranged": 1,
                            "Area": 2,
                            "Single_Target": 4,
                            "Constant": 1,
                            "Burst": 5
                        },
                        "Support": {
                            "Heal": 2,
                            "Shield": 0,
                            "Placeur": 3,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Melee",
                        "Resurection",
                        "Sub Heal",
                        "Rall WP",
                        "Buff Resistance"
                    ]
                },
                "Specific Distribution Heal": {
                    "Id": 5,
                    "Notes": {
                        "DPT": {
                            "Melee": 2,
                            "Ranged": 2,
                            "Area": 2,
                            "Single_Target": 2,
                            "Constant": 2,
                            "Burst": 2
                        },
                        "Support": {
                            "Heal": 3,
                            "Shield": 0,
                            "Placeur": 5,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Heal",
                        "Resurection",
                        "Sub DPT",
                        "Sub Shield",
                        "Sub Placeur",
                        "Rall WP",
                        "Buff Resistance"
                    ]
                }
            },
            "Elements": [
                "Fire",
                "Water",
                "Air"
            ],
            "Mobility": 1
        },
        "Osamodas": {
            "Id": 11,
            "Image": "assets/classes/male_osamodas.png",
            "Voies": {
                "Support Utilitaire": {
                    "Id": 1,
                    "Notes": {
                        "DPT": {
                            "Melee": 1,
                            "Ranged": 1,
                            "Area": 1,
                            "Single_Target": 1,
                            "Constant": 1,
                            "Burst": 1
                        },
                        "Support": {
                            "Heal": 2,
                            "Shield": 0,
                            "Placeur": 4,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 3,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 1,
                    "Mobility": 1,
                    "Roles": [
                        "Sub Shield",
                        "Buff AP",
                        "Buff DI",
                        "Rall Resistance",
                        "Sub Placeur",
                        "Sub Heal",
                        "Buff Crit",
                        "Buff Crit",
                        "Buff PO",
                        "Rall DI",
                        "Rall Crit",
                        "Rall Parade",
                        "Anti Heal"
                    ]
                },
                "Support Heal": {
                    "Id": 2,
                    "Notes": {
                        "DPT": {
                            "Melee": 2,
                            "Ranged": 2,
                            "Area": 2,
                            "Single_Target": 2,
                            "Constant": 2,
                            "Burst": 2
                        },
                        "Support": {
                            "Heal": 4,
                            "Shield": 0,
                            "Placeur": 4,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 3,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 1,
                    "Mobility": 1,
                    "Roles": [
                        "Heal",
                        "Sub DPT",
                        "Buff AP",
                        "Buff DI",
                        "Rall Resistance",
                        "Sub Placeur",
                        "Buff Crit",
                        "Buff Crit",
                        "Buff PO",
                        "Rall DI",
                        "Rall Crit",
                        "Rall Parade",
                        "Anti Heal"
                    ]
                },
                "Support Placeur": {
                    "Id": 3,
                    "Notes": {
                        "DPT": {
                            "Melee": 1,
                            "Ranged": 1,
                            "Area": 1,
                            "Single_Target": 1,
                            "Constant": 1,
                            "Burst": 1
                        },
                        "Support": {
                            "Heal": 2,
                            "Shield": 0,
                            "Placeur": 4,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 3,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 1,
                    "Mobility": 1,
                    "Roles": [
                        "Placeur",
                        "Buff AP",
                        "Buff DI",
                        "Rall Resistance",
                        "Sub Heal",
                        "Sub Shield",
                        "Buff Crit",
                        "Buff PO",
                        "Rall DI",
                        "Rall Crit",
                        "Rall Parade",
                        "Anti Heal"
                    ]
                },
                "DPT Invoc": {
                    "Id": 4,
                    "Notes": {
                        "DPT": {
                            "Melee": 4,
                            "Ranged": 4,
                            "Area": 4,
                            "Single_Target": 4,
                            "Constant": 4,
                            "Burst": 4
                        },
                        "Support": {
                            "Heal": 2,
                            "Shield": 0,
                            "Placeur": 3,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 1,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Constant",
                        "Single Target",
                        "Melee",
                        "Ranged",
                        "Sub Heal",
                        "Buff AP",
                        "Buff DI"
                    ]
                },
                "DPT Melee": {
                    "Id": 5,
                    "Notes": {
                        "DPT": {
                            "Melee": 5,
                            "Ranged": 0,
                            "Area": 5,
                            "Single_Target": 1,
                            "Constant": 5,
                            "Burst": 2
                        },
                        "Support": {
                            "Heal": 0,
                            "Shield": 0,
                            "Placeur": 2,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 1,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Constant",
                        "Area",
                        "Melee",
                        "Sub Heal",
                        "Buff AP",
                        "Buff DI"
                    ]
                },
                "DPT Flame": {
                    "Id": 6,
                    "Notes": {
                        "DPT": {
                            "Melee": 1,
                            "Ranged": 4,
                            "Area": 4,
                            "Single_Target": 1,
                            "Constant": 4,
                            "Burst": 4
                        },
                        "Support": {
                            "Heal": 1,
                            "Shield": 0,
                            "Placeur": 2,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 1,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Constant",
                        "Area",
                        "Melee",
                        "Sub Heal",
                        "Buff AP",
                        "Buff DI",
                        "Support Area"
                    ]
                }
            },
            "Elements": [
                "Fire",
                "Earth",
                "Air"
            ],
            "Mobility": 1
        },
        "Ouginak": {
            "Id": 12,
            "Image": "assets/classes/male_ouginak.png",
            "Voies": {
                "DPT Indirect": {
                    "Id": 1,
                    "Notes": {
                        "DPT": {
                            "Melee": 4,
                            "Ranged": 4,
                            "Area": 3,
                            "Single_Target": 1,
                            "Constant": 4,
                            "Burst": 1
                        },
                        "Support": {
                            "Heal": 0,
                            "Shield": 0,
                            "Placeur": 2,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Poison",
                        "Area",
                        "Melee",
                        "Off Tank",
                        "Entity Stabilized",
                        "Rall MP"
                    ]
                },
                "DPT Melee": {
                    "Id": 2,
                    "Notes": {
                        "DPT": {
                            "Melee": 4,
                            "Ranged": 0,
                            "Area": 2,
                            "Single_Target": 4,
                            "Constant": 3,
                            "Burst": 4
                        },
                        "Support": {
                            "Heal": 0,
                            "Shield": 0,
                            "Placeur": 2,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Single Target",
                        "Melee",
                        "Burst",
                        "Entity Stabilized",
                        "Rall MP"
                    ]
                },
                "Support Utilitaire": {
                    "Id": 3,
                    "Notes": {
                        "DPT": {
                            "Melee": 1,
                            "Ranged": 1,
                            "Area": 1,
                            "Single_Target": 1,
                            "Constant": 1,
                            "Burst": 1
                        },
                        "Support": {
                            "Heal": 0,
                            "Shield": 0,
                            "Placeur": 3,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Sub Shield",
                        "Entity Stabilized",
                        "Rall MP"
                    ]
                }
            },
            "Elements": [
                "Water",
                "Earth",
                "Air"
            ],
            "Mobility": 1
        },
        "Pandawa": {
            "Id": 13,
            "Image": "assets/classes/male_pandawa.png",
            "Voies": {
                "Support Placeur": {
                    "Id": 1,
                    "Notes": {
                        "DPT": {
                            "Melee": 1,
                            "Ranged": 1,
                            "Area": 1,
                            "Single_Target": 1,
                            "Constant": 1,
                            "Burst": 1
                        },
                        "Support": {
                            "Heal": 2,
                            "Shield": 0,
                            "Placeur": 5,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Placeur",
                        "Sub Heal",
                        "Buff DI",
                        "Buff Resistance",
                        "Buff MP",
                        "Rall MP",
                        "Rall Resistance",
                        "Entity Stabilized"
                    ]
                },
                "Support Heal": {
                    "Id": 2,
                    "Notes": {
                        "DPT": {
                            "Melee": 2,
                            "Ranged": 2,
                            "Area": 2,
                            "Single_Target": 2,
                            "Constant": 2,
                            "Burst": 2
                        },
                        "Support": {
                            "Heal": 3,
                            "Shield": 0,
                            "Placeur": 5,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 1,
                    "Mobility": 1,
                    "Roles": [
                        "Heal",
                        "Sub Placeur",
                        "Sub DPT",
                        "Buff DI",
                        "Buff Resistance",
                        "Buff MP",
                        "Rall MP",
                        "Rall Resistance",
                        "Entity Stabilized"
                    ]
                },
                "DPT Melee": {
                    "Id": 3,
                    "Notes": {
                        "DPT": {
                            "Melee": 3,
                            "Ranged": 0,
                            "Area": 3,
                            "Single_Target": 3,
                            "Constant": 3,
                            "Burst": 1
                        },
                        "Support": {
                            "Heal": 2,
                            "Shield": 0,
                            "Placeur": 4,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Melee",
                        "Buff MP",
                        "Rall MP",
                        "Rall Resistance",
                        "Entity Stabilized"
                    ]
                }
            },
            "Elements": [
                "Fire",
                "Water",
                "Earth"
            ],
            "Mobility": 1
        },
        "Rogue": {
            "Id": 14,
            "Image": "assets/classes/male_rogue.png",
            "Voies": {
                "DPT Mixed": {
                    "Id": 1,
                    "Notes": {
                        "DPT": {
                            "Melee": 4,
                            "Ranged": 4,
                            "Area": 3,
                            "Single_Target": 3,
                            "Constant": 3,
                            "Burst": 3
                        },
                        "Support": {
                            "Heal": 0,
                            "Shield": 0,
                            "Placeur": 1,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Constant",
                        "Melee",
                        "Ranged",
                        "Burst",
                        "Sub Placeur",
                        "Rall MP",
                        "Rall WP",
                        "Rall PO",
                        "Anti Heal",
                        "Anti Shield"
                    ]
                },
                "DPT Indirect": {
                    "Id": 2,
                    "Notes": {
                        "DPT": {
                            "Melee": 4,
                            "Ranged": 4,
                            "Area": 5,
                            "Single_Target": 2,
                            "Constant": 2,
                            "Burst": 5
                        },
                        "Support": {
                            "Heal": 0,
                            "Shield": 0,
                            "Placeur": 1,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Poison",
                        "Melee",
                        "Ranged",
                        "Sub Placeur",
                        "Rall MP",
                        "Rall WP",
                        "Rall PO",
                        "Anti Heal",
                        "Anti Shield"
                    ]
                },
                "Support Utilitaire": {
                    "Id": 3,
                    "Notes": {
                        "DPT": {
                            "Melee": 1,
                            "Ranged": 1,
                            "Area": 1,
                            "Single_Target": 1,
                            "Constant": 1,
                            "Burst": 1
                        },
                        "Support": {
                            "Heal": 0,
                            "Shield": 0,
                            "Placeur": 1,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 1,
                    "Mobility": 1,
                    "Roles": [
                        "Sub Placeur",
                        "Buff DI",
                        "Rall MP",
                        "Rall WP",
                        "Rall PO",
                        "Anti Heal"
                    ]
                }
            },
            "Elements": [
                "Fire",
                "Earth",
                "Air"
            ],
            "Mobility": 1
        },
        "Sacrier": {
            "Id": 15,
            "Image": "assets/classes/male_sacrier.png",
            "Voies": {
                "DPT Melee": {
                    "Id": 1,
                    "Notes": {
                        "DPT": {
                            "Melee": 5,
                            "Ranged": 1,
                            "Area": 3,
                            "Single_Target": 5,
                            "Constant": 5,
                            "Burst": 2
                        },
                        "Support": {
                            "Heal": 0,
                            "Shield": 0,
                            "Placeur": 3,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 1,
                    "Mobility": 1,
                    "Roles": [
                        "Melee",
                        "Zone",
                        "Constant",
                        "Single Target",
                        "Sub Placeur",
                        "Buff DI",
                        "Rall MP",
                        "Self Stabilized",
                        "Allies Stabilized"
                    ]
                },
                "DPT Flame": {
                    "Id": 2,
                    "Notes": {
                        "DPT": {
                            "Melee": 5,
                            "Ranged": 1,
                            "Area": 4,
                            "Single_Target": 3,
                            "Constant": 3,
                            "Burst": 4
                        },
                        "Support": {
                            "Heal": 0,
                            "Shield": 0,
                            "Placeur": 3,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Melee",
                        "Zone",
                        "Constant",
                        "Sub Placeur",
                        "Buff DI",
                        "Rall MP",
                        "Self Stabilized",
                        "Allies Stabilized"
                    ]
                },
                "Support Placeur": {
                    "Id": 3,
                    "Notes": {
                        "DPT": {
                            "Melee": 1,
                            "Ranged": 1,
                            "Area": 1,
                            "Single_Target": 1,
                            "Constant": 1,
                            "Burst": 1
                        },
                        "Support": {
                            "Heal": 0,
                            "Shield": 0,
                            "Placeur": 5,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Placeur",
                        "Buff DI",
                        "Rall MP",
                        "Self Stabilized",
                        "Allies Stabilized"
                    ]
                }
            },
            "Elements": [
                "Fire",
                "Earth",
                "Air"
            ],
            "Mobility": 1
        },
        "Sadida": {
            "Id": 16,
            "Image": "assets/classes/male_sadida.png",
            "Voies": {
                "Support Heal": {
                    "Id": 1,
                    "Notes": {
                        "DPT": {
                            "Melee": 2,
                            "Ranged": 2,
                            "Area": 2,
                            "Single_Target": 2,
                            "Constant": 2,
                            "Burst": 2
                        },
                        "Support": {
                            "Heal": 5,
                            "Shield": 0,
                            "Placeur": 3,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 5,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Heal",
                        "Sub DPT",
                        "Sub Shield",
                        "Buff DI",
                        "Rall DI",
                        "Rall MP",
                        "Rall Resistance",
                        "Resurection"
                    ]
                },
                "DPT Indirect": {
                    "Id": 2,
                    "Notes": {
                        "DPT": {
                            "Melee": 3,
                            "Ranged": 3,
                            "Area": 3,
                            "Single_Target": 2,
                            "Constant": 3,
                            "Burst": 3
                        },
                        "Support": {
                            "Heal": 2,
                            "Shield": 0,
                            "Placeur": 1,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 5,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Poison",
                        "Melee",
                        "Ranged",
                        "Area",
                        "Sub Heal",
                        "Sub Shield",
                        "Buff DI",
                        "Rall DI",
                        "Rall MP",
                        "Rall Resistance",
                        "Resurection"
                    ]
                },
                "DPT Invoc": {
                    "Id": 3,
                    "Notes": {
                        "DPT": {
                            "Melee": 3,
                            "Ranged": 3,
                            "Area": 1,
                            "Single_Target": 4,
                            "Constant": 3,
                            "Burst": 5
                        },
                        "Support": {
                            "Heal": 2,
                            "Shield": 0,
                            "Placeur": 3,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 5,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Melee",
                        "Ranged",
                        "Single Target",
                        "Sub Heal",
                        "Sub Shield",
                        "Buff DI",
                        "Rall DI",
                        "Rall MP",
                        "Rall Resistance",
                        "Resurection"
                    ]
                },
                "Specific Support Shield": {
                    "Id": 4,
                    "Notes": {
                        "DPT": {
                            "Melee": 1,
                            "Ranged": 1,
                            "Area": 1,
                            "Single_Target": 1,
                            "Constant": 1,
                            "Burst": 1
                        },
                        "Support": {
                            "Heal": 1,
                            "Shield": 0,
                            "Placeur": 3,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 5,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Shield",
                        "Sub DPT",
                        "Buff DI",
                        "Rall DI",
                        "Rall MP",
                        "Rall Resistance",
                        "Resurection"
                    ]
                },
                "Specific Distribution Heal": {
                    "Id": 5,
                    "Notes": {
                        "DPT": {
                            "Melee": 2,
                            "Ranged": 2,
                            "Area": 2,
                            "Single_Target": 2,
                            "Constant": 2,
                            "Burst": 2
                        },
                        "Support": {
                            "Heal": 3,
                            "Shield": 0,
                            "Placeur": 3,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 5,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Heal",
                        "Sub DPT",
                        "Sub Shield",
                        "Buff DI",
                        "Rall DI",
                        "Rall MP",
                        "Rall Resistance",
                        "Resurection"
                    ]
                }
            },
            "Elements": [
                "Water",
                "Earth",
                "Air"
            ],
            "Mobility": 1
        },
        "Sram": {
            "Id": 17,
            "Image": "assets/classes/male_sram.png",
            "Voies": {
                "DPT Melee": {
                    "Id": 1,
                    "Notes": {
                        "DPT": {
                            "Melee": 4,
                            "Ranged": 0,
                            "Area": 2,
                            "Single_Target": 4,
                            "Constant": 4,
                            "Burst": 2
                        },
                        "Support": {
                            "Heal": 0,
                            "Shield": 0,
                            "Placeur": 2,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Constant",
                        "Melee",
                        "Single Taget",
                        "Buff PM"
                    ]
                },
                "DPT Indirect": {
                    "Id": 2,
                    "Notes": {
                        "DPT": {
                            "Melee": 1,
                            "Ranged": 4,
                            "Area": 1,
                            "Single_Target": 3,
                            "Constant": 4,
                            "Burst": 1
                        },
                        "Support": {
                            "Heal": 0,
                            "Shield": 0,
                            "Placeur": 3,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Poison",
                        "Melee",
                        "Ranged",
                        "Sub Placeur",
                        "Buff PM"
                    ]
                },
                "Support": {
                    "Id": 3,
                    "Notes": {
                        "DPT": {
                            "Melee": 1,
                            "Ranged": 1,
                            "Area": 1,
                            "Single_Target": 1,
                            "Constant": 1,
                            "Burst": 1
                        },
                        "Support": {
                            "Heal": 0,
                            "Shield": 0,
                            "Placeur": 3,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Sub Placeur",
                        "Buff PM"
                    ]
                }
            },
            "Elements": [
                "Fire",
                "Water",
                "Air"
            ],
            "Mobility": 1
        },
        "Xelor": {
            "Id": 18,
            "Image": "assets/classes/male_xelor.png",
            "Voies": {
                "DPT Ranged": {
                    "Id": 1,
                    "Notes": {
                        "DPT": {
                            "Melee": 0,
                            "Ranged": 5,
                            "Area": 4,
                            "Single_Target": 5,
                            "Constant": 1,
                            "Burst": 4
                        },
                        "Support": {
                            "Heal": 0,
                            "Shield": 0,
                            "Placeur": 3,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Ranged",
                        "Area",
                        "Single Target",
                        "Burst",
                        "Rall AP",
                        "Buff AP",
                        "Self Stabilized"
                    ]
                },
                "DPT Indirect": {
                    "Id": 2,
                    "Notes": {
                        "DPT": {
                            "Melee": 0,
                            "Ranged": 4,
                            "Area": 3,
                            "Single_Target": 4,
                            "Constant": 2,
                            "Burst": 3
                        },
                        "Support": {
                            "Heal": 0,
                            "Shield": 0,
                            "Placeur": 3,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Ranged",
                        "Area",
                        "Single Target",
                        "Burst",
                        "Rall AP",
                        "Buff AP",
                        "Self Stabilized"
                    ]
                },
                "DPT Cog": {
                    "Id": 3,
                    "Notes": {
                        "DPT": {
                            "Melee": 1,
                            "Ranged": 4,
                            "Area": 5,
                            "Single_Target": 1,
                            "Constant": 5,
                            "Burst": 1
                        },
                        "Support": {
                            "Heal": 0,
                            "Shield": 0,
                            "Placeur": 3,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 2,
                    "Mobility": 1,
                    "Roles": [
                        "Ranged",
                        "Area",
                        "Constant",
                        "Rall AP",
                        "Buff AP",
                        "Sub Placeur",
                        "Self Stabilized"
                    ]
                },
                "Support Placeur": {
                    "Id": 4,
                    "Notes": {
                        "DPT": {
                            "Melee": 1,
                            "Ranged": 1,
                            "Area": 1,
                            "Single_Target": 1,
                            "Constant": 1,
                            "Burst": 1
                        },
                        "Support": {
                            "Heal": 1,
                            "Shield": 0,
                            "Placeur": 4,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 1,
                    "Mobility": 1,
                    "Roles": [
                        "Placeur",
                        "Rall AP",
                        "Buff AP",
                        "Rall DI",
                        "Self Stabilized",
                        "Sub DPT"
                    ]
                },
                "Support Utilitaire": {
                    "Id": 5,
                    "Notes": {
                        "DPT": {
                            "Melee": 1,
                            "Ranged": 1,
                            "Area": 1,
                            "Single_Target": 1,
                            "Constant": 1,
                            "Burst": 1
                        },
                        "Support": {
                            "Heal": 1,
                            "Shield": 0,
                            "Placeur": 4,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 0,
                            "Boringness": 0
                        },
                        "Team_Support": {
                            "Support_Area": 0,
                            "Support_Heal": 0,
                            "Support_Shield": 0,
                            "Support_Single_Target": 0,
                            "Support_Melee": 0,
                            "Support_Ranged": 0
                        }
                    },
                    "Autonomy": 1,
                    "Mobility": 1,
                    "Roles": [
                        "Placeur",
                        "Rall AP",
                        "Buff AP",
                        "Rall DI",
                        "Self Stabilized",
                        "Sub DPT"
                    ]
                }
            },
            "Elements": [
                "Fire",
                "Water",
                "Air"
            ],
            "Mobility": 1
        }
    }
};
  
export { CLASS_LIST, CLASS_DATA };