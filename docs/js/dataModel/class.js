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
                            "Ranged": 4,
                            "Area": 4,
                            "Single_Target": 3,
                            "Constant": 3,
                            "Burst": 4
                        },
                        "Support": {
                            "Heal": 0,
                            "Shield": 0,
                            "Positioning": 1,
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
                        "Area",
                        "Ranged",
                        "Buff PO",
                        "Rall PO",
                        "Anti Heal",
                        "Enemy Stabilized",
                        "Allies Stabilized"
                    ]
                },
                "DPT Ranged Single Target": {
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
                            "Heal": 0,
                            "Shield": 0,
                            "Positioning": 1,
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
                        "Burst",
                        "Ranged",
                        "Buff PO",
                        "Rall PO",
                        "Anti Heal",
                        "Enemy Stabilized",
                        "Allies Stabilized"
                    ]
                },
                "Support Utilitary": {
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
                            "Positioning": 1,
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
                        "Buff PO",
                        "Rall PO",
                        "Sub Positioning",
                        "Anti Shield",
                        "Anti Heal",
                        "Enemy Stabilized",
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
                            "Shield": 2,
                            "Positioning": 2,
                            "Buff_MP": 4,
                            "Buff_AP": 0,
                            "Buff_DI": 2,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 3,
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
                        "Buff MP",
                        "Buff Crit",
                        "Rall Resistance",
                        "Rall WP",
                        "Buff WP",
                        "Resurection",
                        "Sub Heal",
                        "Self Stabilized",
                        "Sub Positioning"
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
                            "Shield": 2,
                            "Positioning": 3,
                            "Buff_MP": 4,
                            "Buff_AP": 0,
                            "Buff_DI": 2,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 3,
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
                        "Buff MP",
                        "Buff Crit",
                        "Rall Resistance",
                        "Resurection",
                        "Sub Heal",
                        "Self Stabilized",
                        "Sub Positioning"
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
                            "Shield": 2,
                            "Positioning": 3,
                            "Buff_MP": 4,
                            "Buff_AP": 0,
                            "Buff_DI": 2,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 3,
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
                        "Buff MP",
                        "Buff Crit",
                        "Rall Resistance",
                        "Rall WP",
                        "Buff WP",
                        "Resurection",
                        "Sub Positioning"
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
                            "Shield": 2,
                            "Positioning": 2,
                            "Buff_MP": 4,
                            "Buff_AP": 0,
                            "Buff_DI": 3,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 3,
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
                        "Buff MP",
                        "Buff Crit",
                        "Rall Resistance",
                        "Rall WP",
                        "Buff WP",
                        "Resurection",
                        "Heal"
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
                            "Positioning": 2,
                            "Buff_MP": 4,
                            "Buff_AP": 0,
                            "Buff_DI": 3,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 3,
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
                        "Buff MP",
                        "Buff Crit",
                        "Rall Resistance",
                        "Rall WP",
                        "Buff WP",
                        "Resurection",
                        "Heal",
                        "Shield"
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
                    "Id": 3,
                    "Notes": {
                        "DPT": {
                            "Melee": 4,
                            "Ranged": 0,
                            "Area": 4,
                            "Single_Target": 4,
                            "Constant": 1,
                            "Burst": 4
                        },
                        "Support": {
                            "Heal": 1,
                            "Shield": 1,
                            "Positioning": 2,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 2,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 3,
                            "Rall_AP": 4,
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
                        "Single Target",
                        "Melee",
                        "Enemy Stabilized",
                        "Allies Stabilized",
                        "Sub Positioning"
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
                            "Burst": 4
                        },
                        "Support": {
                            "Heal": 1,
                            "Shield": 1,
                            "Positioning": 2,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 3,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 3,
                            "Rall_AP": 4,
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
                        "Single Target",
                        "Melee",
                        "Ranged",
                        "Enemy Stabilized",
                        "Allies Stabilized",
                        "Sub Positioning"
                    ]
                },
                "DPT Ranged": {
                    "Id": 1,
                    "Notes": {
                        "DPT": {
                            "Melee": 0,
                            "Ranged": 4,
                            "Area": 3,
                            "Single_Target": 4,
                            "Constant": 1,
                            "Burst": 4
                        },
                        "Support": {
                            "Heal": 1,
                            "Shield": 1,
                            "Positioning": 2,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 2,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 3,
                            "Rall_AP": 4,
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
                        "Single Target",
                        "Ranged",
                        "Enemy Stabilized",
                        "Allies Stabilized",
                        "Sub Positioning"
                    ]
                },
                "Support Positioning": {
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
                            "Positioning": 4,
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
                        "Positioning",
                        "Buff AP",
                        "Sub Heal",
                        "Sub Shield",
                        "Entity Stabilized"
                    ]
                },
                "Support Heal": {
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
                            "Heal": 1,
                            "Shield": 0,
                            "Positioning": 4,
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
                        "Buff AP",
                        "Buff MP",
                        "Rall MP",
                        "Rall AP",
                        "Enemy Stabilized",
                        "Allies Stabilized"
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
                            "Heal": 4,
                            "Shield": 1,
                            "Positioning": 2,
                            "Buff_MP": 3,
                            "Buff_AP": 1,
                            "Buff_DI": 3,
                            "Protection": 2
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 4,
                            "Rall_Resistance": 2,
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
                        "Sub Positioning",
                        "Buff Resistance",
                        "Rall Resistance",
                        "Buff DI",
                        "Rall DI",
                        "Buff MP",
                        "Rall Parade",
                        "Resurection",
                        "Buff PO",
                        "Anti Heal",
                        "Anti Shield",
                        "Rall Crit"
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
                            "Shield": 1,
                            "Positioning": 2,
                            "Buff_MP": 3,
                            "Buff_AP": 0,
                            "Buff_DI": 3,
                            "Protection": 2
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 4,
                            "Rall_Resistance": 2,
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
                        "Ranged",
                        "Area",
                        "SIngle Target",
                        "Rall DI",
                        "Rall Crit",
                        "Buff Resistance",
                        "Rall Resistance",
                        "Buff DI",
                        "Buff MP",
                        "Rall Parade",
                        "Resurection",
                        "Indirect",
                        "Sub Heal",
                        "Buff PO",
                        "Anti Heal",
                        "Anti Shield"
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
                            "Positioning": 2,
                            "Buff_MP": 3,
                            "Buff_AP": 0,
                            "Buff_DI": 3,
                            "Protection": 2
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 4,
                            "Rall_Resistance": 2,
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
                        "Sub Positioning",
                        "Buff Resistance",
                        "Rall Resistance",
                        "Buff DI",
                        "Rall DI",
                        "Buff MP",
                        "Rall Parade",
                        "Resurection",
                        "Buff PO",
                        "Anti Heal",
                        "Anti Shield",
                        "Shield",
                        "Rall Crit"
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
                "Support Utilitary": {
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
                            "Positioning": 2,
                            "Buff_MP": 4,
                            "Buff_AP": 2,
                            "Buff_DI": 4,
                            "Protection": 1
                        },
                        "Entrave": {
                            "Rall_MP": 4,
                            "Rall_AP": 2,
                            "Rall_DI": 4,
                            "Rall_Resistance": 4,
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
                        "Buff PO",
                        "Rall Resistance",
                        "Rall DI",
                        "Rall MP",
                        "Sub Heal",
                        "Rall AP"
                    ]
                },
                "DPT Melee": {
                    "Id": 2,
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
                            "Heal": 1,
                            "Shield": 0,
                            "Positioning": 2,
                            "Buff_MP": 4,
                            "Buff_AP": 1,
                            "Buff_DI": 4,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 4,
                            "Rall_AP": 0,
                            "Rall_DI": 3,
                            "Rall_Resistance": 4,
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
                        "Buff DI",
                        "Buff PO",
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
                            "Positioning": 2,
                            "Buff_MP": 4,
                            "Buff_AP": 1,
                            "Buff_DI": 4,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 4,
                            "Rall_AP": 0,
                            "Rall_DI": 3,
                            "Rall_Resistance": 4,
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
                        "Single Target",
                        "Melee",
                        "Buff DI",
                        "Buff PO",
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
                            "Shield": 4,
                            "Positioning": 3,
                            "Buff_MP": 3,
                            "Buff_AP": 0,
                            "Buff_DI": 3,
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
                        "Buff Crit",
                        "Buff WP",
                        "Sub Positioning",
                        "Invulnerability",
                        "Buff Resistance",
                        "Buff MP",
                        "Buff DI",
                        "Allies Stabilized",
                        "Self Stabilized",
                        "Buff PO",
                        "Buff Parade",
                        "Enemy Stabilized"
                    ]
                },
                "DPT Glyph Ranged": {
                    "Id": 2,
                    "Notes": {
                        "DPT": {
                            "Melee": 1,
                            "Ranged": 4,
                            "Area": 4,
                            "Single_Target": 1,
                            "Constant": 1,
                            "Burst": 4
                        },
                        "Support": {
                            "Heal": 0,
                            "Shield": 0,
                            "Positioning": 3,
                            "Buff_MP": 3,
                            "Buff_AP": 0,
                            "Buff_DI": 3,
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
                        "Ranged",
                        "Constanr",
                        "Area",
                        "Indirect",
                        "Sub Positioning",
                        "Buff WP",
                        "Invulnerability",
                        "Buff Resistance",
                        "Enemy Stabilized",
                        "Allies Stabilized",
                        "Self Stabilized"
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
                            "Area": 4,
                            "Single_Target": 3,
                            "Constant": 4,
                            "Burst": 4
                        },
                        "Support": {
                            "Heal": 0,
                            "Shield": 1,
                            "Positioning": 2,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 3,
                            "Protection": 1
                        },
                        "Entrave": {
                            "Rall_MP": 3,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 3,
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
                        "Burst",
                        "Constant",
                        "Ranged",
                        "Melee",
                        "Indirect",
                        "Rall PO",
                        "Rall Parade",
                        "Rall Crit",
                        "Rall MP",
                        "Rall resistance",
                        "Buff DI",
                        "Buff PO",
                        "Enemy Stabilized",
                        "Allies Stabilized"
                    ]
                },
                "DPT Ranged": {
                    "Id": 2,
                    "Notes": {
                        "DPT": {
                            "Melee": 0,
                            "Ranged": 4,
                            "Area": 4,
                            "Single_Target": 3,
                            "Constant": 4,
                            "Burst": 4
                        },
                        "Support": {
                            "Heal": 0,
                            "Shield": 1,
                            "Positioning": 2,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 3,
                            "Protection": 1
                        },
                        "Entrave": {
                            "Rall_MP": 3,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 3,
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
                        "Burst",
                        "Constant",
                        "Ranged",
                        "Indirect",
                        "Rall PO",
                        "Rall Parade",
                        "Rall Crit",
                        "Rall MP",
                        "Rall resistance",
                        "Buff DI",
                        "Buff PO",
                        "Enemy Stabilized",
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
                            "Shield": 1,
                            "Positioning": 1,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 3,
                            "Protection": 1
                        },
                        "Entrave": {
                            "Rall_MP": 3,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 3,
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
                        "Indirect",
                        "Rall PO",
                        "Rall Parade",
                        "Rall Crit",
                        "Rall MP",
                        "Rall resistance",
                        "Buff DI",
                        "Buff PO",
                        "Enemy Stabilized",
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
                            "Shield": 4,
                            "Positioning": 3,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 3,
                            "Protection": 4
                        },
                        "Entrave": {
                            "Rall_MP": 3,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 3,
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
                        "Sub Positioning",
                        "Enemy Stabilized",
                        "Allies Stabilized",
                        "Rall MP",
                        "Rall Crit",
                        "Rall Parade",
                        "Buff DI",
                        "Buff PO",
                        "Rall PO",
                        "Rall Resistance"
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
                            "Shield": 1,
                            "Positioning": 3,
                            "Buff_MP": 3,
                            "Buff_AP": 2,
                            "Buff_DI": 2,
                            "Protection": 2
                        },
                        "Entrave": {
                            "Rall_MP": 3,
                            "Rall_AP": 3,
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
                        "Burst",
                        "Melee",
                        "Ranged",
                        "Area",
                        "SIngle Target",
                        "Buff DI",
                        "Buff Crit",
                        "Rall DI",
                        "Rall Parade",
                        "Sub Heal",
                        "Sub Positioning",
                        "Enemy Stabilized",
                        "Allies Stabilized",
                        "Self Stabilized",
                        "Rall PO",
                        "Anti Heal",
                        "Anti Shield",
                        "Buff AP",
                        "Buff MP",
                        "Buff Resistance"
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
                            "Shield": 1,
                            "Positioning": 3,
                            "Buff_MP": 3,
                            "Buff_AP": 2,
                            "Buff_DI": 2,
                            "Protection": 2
                        },
                        "Entrave": {
                            "Rall_MP": 3,
                            "Rall_AP": 3,
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
                        "Burst",
                        "Ranged",
                        "Area",
                        "SIngle Target",
                        "Buff DI",
                        "Buff Crit",
                        "Rall DI",
                        "Rall Parade",
                        "Sub Heal",
                        "Sub Positioning",
                        "Enemy Stabilized",
                        "Allies Stabilized",
                        "Self Stabilized",
                        "Rall PO",
                        "Anti Heal",
                        "Anti Shield",
                        "Buff AP",
                        "Buff MP",
                        "Buff Resistance"
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
                            "Shield": 1,
                            "Positioning": 3,
                            "Buff_MP": 3,
                            "Buff_AP": 2,
                            "Buff_DI": 2,
                            "Protection": 2
                        },
                        "Entrave": {
                            "Rall_MP": 3,
                            "Rall_AP": 3,
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
                        "Rall AP",
                        "Rall MP",
                        "Constant",
                        "Melee",
                        "Single Target",
                        "Area",
                        "Buff DI",
                        "Buff Crit",
                        "Rall DI",
                        "Rall Parade",
                        "Sub Heal",
                        "Sub Positioning",
                        "Enemy Stabilized",
                        "Allies Stabilized",
                        "Self Stabilized",
                        "Rall PO",
                        "Anti Heal",
                        "Anti Shield",
                        "Buff AP",
                        "Buff MP",
                        "Buff Resistance"
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
                            "Positioning": 0,
                            "Buff_MP": 3,
                            "Buff_AP": 2,
                            "Buff_DI": 3,
                            "Protection": 2
                        },
                        "Entrave": {
                            "Rall_MP": 3,
                            "Rall_AP": 3,
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
                        "Buff DI",
                        "Buff Crit",
                        "Rall DI",
                        "Rall Parade",
                        "Positioning",
                        "Enemy Stabilized",
                        "Allies Stabilized",
                        "Self Stabilized",
                        "Rall PO",
                        "Anti Heal",
                        "Anti Shield",
                        "Buff AP",
                        "Buff MP",
                        "Buff Resistance"
                    ]
                },
                "Support Utilitary": {
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
                            "Shield": 1,
                            "Positioning": 4,
                            "Buff_MP": 3,
                            "Buff_AP": 2,
                            "Buff_DI": 3,
                            "Protection": 3
                        },
                        "Entrave": {
                            "Rall_MP": 3,
                            "Rall_AP": 3,
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
                        "Sub Positioning",
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
                            "Shield": 2,
                            "Positioning": 4,
                            "Buff_MP": 3,
                            "Buff_AP": 2,
                            "Buff_DI": 2,
                            "Protection": 2
                        },
                        "Entrave": {
                            "Rall_MP": 3,
                            "Rall_AP": 3,
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
                        "Buff DI",
                        "Buff Crit",
                        "Rall DI",
                        "Rall Parade",
                        "Heal",
                        "Positioning",
                        "Enemy Stabilized",
                        "Allies Stabilized",
                        "Self Stabilized",
                        "Rall PO",
                        "Anti Heal",
                        "Anti Shield",
                        "Buff AP",
                        "Buff MP",
                        "Buff Resistance",
                        "Shield"
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
                            "Shield": 1,
                            "Positioning": 1,
                            "Buff_MP": 0,
                            "Buff_AP": 1,
                            "Buff_DI": 2,
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
                        "Single Target",
                        "Melee",
                        "Buff AP",
                        "Buff DI",
                        "Anti Shield",
                        "Off Tank"
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
                            "Shield": 1,
                            "Positioning": 1,
                            "Buff_MP": 0,
                            "Buff_AP": 1,
                            "Buff_DI": 2,
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
                        "Buff AP",
                        "Buff DI",
                        "Anti Shield",
                        "Off Tank"
                    ]
                },
                "Support Utilitary": {
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
                            "Shield": 1,
                            "Positioning": 1,
                            "Buff_MP": 0,
                            "Buff_AP": 4,
                            "Buff_DI": 3,
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
                    "Autonomy": 1,
                    "Mobility": 1,
                    "Roles": [
                        "Buff AP",
                        "Buff DI",
                        "Sub Shield",
                        "Anti Shield"
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
                "Support Positioning": {
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
                            "Positioning": 5,
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
                        "Positioning",
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
                            "Shield": 2,
                            "Positioning": 4,
                            "Buff_MP": 3,
                            "Buff_AP": 0,
                            "Buff_DI": 3,
                            "Protection": 2
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 4,
                            "Rall_DI": 0,
                            "Rall_Resistance": 3,
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
                        "Shield",
                        "Rall WP",
                        "Sub Positioning",
                        "Buff DI",
                        "Buff MP",
                        "Buff Crit",
                        "Resurection",
                        "Enemy Stabilized",
                        "Allies Stabilized",
                        "Self Stabilized",
                        "Rall Resistance"
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
                            "Shield": 4,
                            "Positioning": 4,
                            "Buff_MP": 3,
                            "Buff_AP": 0,
                            "Buff_DI": 3,
                            "Protection": 3
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 4,
                            "Rall_DI": 0,
                            "Rall_Resistance": 3,
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
                        "Shield",
                        "Rall WP",
                        "Positioning",
                        "Buff DI",
                        "Buff MP",
                        "Buff Crit",
                        "Resurection",
                        "Enemy Stabilized",
                        "Allies Stabilized",
                        "Self Stabilized",
                        "Rall Resistance"
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
                            "Burst": 4
                        },
                        "Support": {
                            "Heal": 2,
                            "Shield": 0,
                            "Positioning": 3,
                            "Buff_MP": 3,
                            "Buff_AP": 0,
                            "Buff_DI": 3,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 3,
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
                        "Rall WP",
                        "Sub Heal",
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
                            "Positioning": 0,
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
                        "Sub Positioning",
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
                "Support Utilitary": {
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
                            "Shield": 3,
                            "Positioning": 4,
                            "Buff_MP": 4,
                            "Buff_AP": 3,
                            "Buff_DI": 3,
                            "Protection": 2
                        },
                        "Entrave": {
                            "Rall_MP": 2,
                            "Rall_AP": 2,
                            "Rall_DI": 3,
                            "Rall_Resistance": 4,
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
                        "Sub Heal",
                        "Sub Shield",
                        "Rall MP",
                        "Sub Positioning",
                        "Rall Crit",
                        "Rall PO",
                        "Buff PO",
                        "Buff MP",
                        "Rall DI",
                        "Rall Parade",
                        "Buff Crit",
                        "Rall Resistance"
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
                            "Shield": 3,
                            "Positioning": 4,
                            "Buff_MP": 4,
                            "Buff_AP": 3,
                            "Buff_DI": 3,
                            "Protection": 2
                        },
                        "Entrave": {
                            "Rall_MP": 2,
                            "Rall_AP": 2,
                            "Rall_DI": 3,
                            "Rall_Resistance": 2,
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
                        "Heal",
                        "Sub Shield",
                        "Rall MP",
                        "Sub Positioning",
                        "Rall Crit",
                        "Rall PO",
                        "Buff PO",
                        "Buff MP",
                        "Rall DI",
                        "Rall Parade",
                        "Buff Crit",
                        "Rall Resistance"
                    ]
                },
                "Support Positioning": {
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
                            "Positioning": 4,
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
                        "Positioning",
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
                            "Shield": 1,
                            "Positioning": 3,
                            "Buff_MP": 4,
                            "Buff_AP": 3,
                            "Buff_DI": 3,
                            "Protection": 1
                        },
                        "Entrave": {
                            "Rall_MP": 2,
                            "Rall_AP": 2,
                            "Rall_DI": 1,
                            "Rall_Resistance": 2,
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
                        "Area",
                        "Melee",
                        "Ranged",
                        "Buff AP",
                        "Buff DI",
                        "Sub Heal"
                    ]
                },
                "DPT Melee": {
                    "Id": 5,
                    "Notes": {
                        "DPT": {
                            "Melee": 4,
                            "Ranged": 0,
                            "Area": 4,
                            "Single_Target": 1,
                            "Constant": 4,
                            "Burst": 2
                        },
                        "Support": {
                            "Heal": 0,
                            "Shield": 1,
                            "Positioning": 2,
                            "Buff_MP": 4,
                            "Buff_AP": 2,
                            "Buff_DI": 3,
                            "Protection": 1
                        },
                        "Entrave": {
                            "Rall_MP": 2,
                            "Rall_AP": 2,
                            "Rall_DI": 1,
                            "Rall_Resistance": 3,
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
                            "Shield": 3,
                            "Positioning": 2,
                            "Buff_MP": 4,
                            "Buff_AP": 3,
                            "Buff_DI": 3,
                            "Protection": 2
                        },
                        "Entrave": {
                            "Rall_MP": 2,
                            "Rall_AP": 2,
                            "Rall_DI": 1,
                            "Rall_Resistance": 2,
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
                        "Area",
                        "Melee",
                        "Ranged",
                        "Buff AP",
                        "Buff DI",
                        "Sub Heal",
                        "Sub Shield",
                        "Indirect"
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
                            "Positioning": 2,
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
                        "Area",
                        "Single Target",
                        "Buff DI",
                        "Anti Shield",
                        "Enemy Stabilized",
                        "Allies Stabilized",
                        "Self Stabilized",
                        "Off Tank",
                        "Indirect"
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
                            "Positioning": 2,
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
                        "Area",
                        "Single Target",
                        "Burst",
                        "Rall MP",
                        "Buff DI",
                        "Anti Shield",
                        "Enemy Stabilized",
                        "Allies Stabilized",
                        "Self Stabilized",
                        "Off Tank"
                    ]
                },
                "Support Utilitary": {
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
                            "Shield": 1,
                            "Positioning": 3,
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
                        "Sub Shield",
                        "Rall MP",
                        "Enemy Stabilized",
                        "Allies Stabilized",
                        "Self Stabilized"
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
                "Support Positioning": {
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
                            "Positioning": 5,
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
                        "Positioning",
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
                            "Positioning": 4,
                            "Buff_MP": 3,
                            "Buff_AP": 0,
                            "Buff_DI": 3,
                            "Protection": 2
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 1,
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
                        "Positioning",
                        "Enemy Stabilized",
                        "Allies Stabilized",
                        "Self Stabilized",
                        "Buff MP",
                        "Sub Heal"
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
                            "Positioning": 4,
                            "Buff_MP": 3,
                            "Buff_AP": 0,
                            "Buff_DI": 3,
                            "Protection": 1
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 0,
                            "Rall_DI": 0,
                            "Rall_Resistance": 1,
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
                        "Area",
                        "Sub Positioning",
                        "Enemy Stabilized",
                        "Allies Stabilized",
                        "Self Stabilized",
                        "Buff MP"
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
                            "Positioning": 1,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 3,
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
                        "Burst",
                        "Melee",
                        "Ranged",
                        "Area",
                        "SIngle Target",
                        "Buff DI",
                        "Rall MP"
                    ]
                },
                "DPT Indirect": {
                    "Id": 2,
                    "Notes": {
                        "DPT": {
                            "Melee": 4,
                            "Ranged": 4,
                            "Area": 4,
                            "Single_Target": 2,
                            "Constant": 2,
                            "Burst": 4
                        },
                        "Support": {
                            "Heal": 0,
                            "Shield": 0,
                            "Positioning": 1,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 3,
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
                        "Indirect",
                        "Burst",
                        "Melee",
                        "Ranged",
                        "SIngle Target",
                        "Area",
                        "Buff DI",
                        "Rall MP",
                        "Indirect"
                    ]
                },
                "Support Utilitary": {
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
                            "Positioning": 1,
                            "Buff_MP": 0,
                            "Buff_AP": 0,
                            "Buff_DI": 3,
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
                    "Autonomy": 1,
                    "Mobility": 1,
                    "Roles": [
                        "Rall MP",
                        "Rall PO",
                        "Anti Heal",
                        "Buff DI",
                        "Sub Positioning"
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
                            "Melee": 4,
                            "Ranged": 1,
                            "Area": 3,
                            "Single_Target": 4,
                            "Constant": 4,
                            "Burst": 2
                        },
                        "Support": {
                            "Heal": 0,
                            "Shield": 0,
                            "Positioning": 3,
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
                    "Autonomy": 1,
                    "Mobility": 1,
                    "Roles": [
                        "Constant",
                        "Area",
                        "Single Target",
                        "Melee",
                        "Offtank",
                        "Anti Heal",
                        "Allies Stabilized",
                        "Self Stabilized"
                    ]
                },
                "DPT Flame": {
                    "Id": 2,
                    "Notes": {
                        "DPT": {
                            "Melee": 4,
                            "Ranged": 1,
                            "Area": 4,
                            "Single_Target": 3,
                            "Constant": 3,
                            "Burst": 4
                        },
                        "Support": {
                            "Heal": 0,
                            "Shield": 0,
                            "Positioning": 3,
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
                        "Single Target",
                        "Melee",
                        "Offtank",
                        "Anti Heal",
                        "Allies Stabilized",
                        "Self Stabilized",
                        "Indirect"
                    ]
                },
                "Support Positioning": {
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
                            "Positioning": 5,
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
                        "Positioning",
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
                            "Heal": 4,
                            "Shield": 3,
                            "Positioning": 3,
                            "Buff_MP": 4,
                            "Buff_AP": 0,
                            "Buff_DI": 3,
                            "Protection": 2
                        },
                        "Entrave": {
                            "Rall_MP": 3,
                            "Rall_AP": 0,
                            "Rall_DI": 4,
                            "Rall_Resistance": 3,
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
                        "Sub Shield",
                        "Rall MP",
                        "Buff Resistance",
                        "Buff MP",
                        "Rall Resistance",
                        "Rall PO",
                        "Buff DI"
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
                            "Shield": 1,
                            "Positioning": 1,
                            "Buff_MP": 4,
                            "Buff_AP": 0,
                            "Buff_DI": 3,
                            "Protection": 1
                        },
                        "Entrave": {
                            "Rall_MP": 3,
                            "Rall_AP": 0,
                            "Rall_DI": 4,
                            "Rall_Resistance": 3,
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
                        "Burst",
                        "Ranged",
                        "Buff Resistance",
                        "Rall Resistance",
                        "Rall DI",
                        "Rall MP",
                        "Sub Shield",
                        "Resurection",
                        "Self Stabilized",
                        "Indirect"
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
                            "Burst": 4
                        },
                        "Support": {
                            "Heal": 2,
                            "Shield": 1,
                            "Positioning": 3,
                            "Buff_MP": 4,
                            "Buff_AP": 0,
                            "Buff_DI": 3,
                            "Protection": 1
                        },
                        "Entrave": {
                            "Rall_MP": 3,
                            "Rall_AP": 0,
                            "Rall_DI": 4,
                            "Rall_Resistance": 3,
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
                        "Ranged",
                        "Buff Resistance",
                        "Rall Resistance",
                        "Rall DI",
                        "Rall MP",
                        "Sub Shield",
                        "Resurection",
                        "Self Stabilized",
                        "Sub Heal",
                        "Buff DI"
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
                            "Shield": 3,
                            "Positioning": 3,
                            "Buff_MP": 4,
                            "Buff_AP": 0,
                            "Buff_DI": 3,
                            "Protection": 2
                        },
                        "Entrave": {
                            "Rall_MP": 3,
                            "Rall_AP": 0,
                            "Rall_DI": 4,
                            "Rall_Resistance": 3,
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
                        "Rall MP",
                        "Buff Resistance",
                        "Buff MP",
                        "Rall Resistance",
                        "Rall PO",
                        "Buff DI"
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
                            "Shield": 3,
                            "Positioning": 3,
                            "Buff_MP": 4,
                            "Buff_AP": 0,
                            "Buff_DI": 3,
                            "Protection": 2
                        },
                        "Entrave": {
                            "Rall_MP": 3,
                            "Rall_AP": 0,
                            "Rall_DI": 4,
                            "Rall_Resistance": 3,
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
                        "Shield",
                        "Rall MP",
                        "Buff Resistance",
                        "Buff MP",
                        "Rall Resistance",
                        "Rall PO",
                        "Buff DI"
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
                            "Positioning": 2,
                            "Buff_MP": 4,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 1,
                            "Rall_AP": 1,
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
                        "Single Target",
                        "Buff MP",
                        "Rall AP"
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
                            "Positioning": 3,
                            "Buff_MP": 4,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 1,
                            "Rall_AP": 3,
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
                        "Ranged",
                        "Area",
                        "Buff MP",
                        "Rall AP",
                        "Indirect"
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
                            "Positioning": 3,
                            "Buff_MP": 4,
                            "Buff_AP": 0,
                            "Buff_DI": 0,
                            "Protection": 0
                        },
                        "Entrave": {
                            "Rall_MP": 1,
                            "Rall_AP": 3,
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
                        "Rall AP",
                        "Buff MP",
                        "Sub Positioning"
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
                            "Ranged": 4,
                            "Area": 4,
                            "Single_Target": 4,
                            "Constant": 1,
                            "Burst": 4
                        },
                        "Support": {
                            "Heal": 0,
                            "Shield": 0,
                            "Positioning": 3,
                            "Buff_MP": 0,
                            "Buff_AP": 4,
                            "Buff_DI": 0,
                            "Protection": 1
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 4,
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
                        "Single Target",
                        "Ranged",
                        "Buff AP",
                        "Sub Positioning",
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
                            "Positioning": 3,
                            "Buff_MP": 0,
                            "Buff_AP": 4,
                            "Buff_DI": 0,
                            "Protection": 1
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 4,
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
                        "Single Target",
                        "Ranged",
                        "Buff AP",
                        "Rall AP",
                        "Sub Positioning",
                        "Self Stabilized",
                        "Indirect"
                    ]
                },
                "DPT Cog": {
                    "Id": 3,
                    "Notes": {
                        "DPT": {
                            "Melee": 1,
                            "Ranged": 4,
                            "Area": 4,
                            "Single_Target": 1,
                            "Constant": 4,
                            "Burst": 1
                        },
                        "Support": {
                            "Heal": 0,
                            "Shield": 0,
                            "Positioning": 3,
                            "Buff_MP": 0,
                            "Buff_AP": 4,
                            "Buff_DI": 0,
                            "Protection": 1
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 4,
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
                        "Single Target",
                        "Ranged",
                        "Buff AP",
                        "Rall AP",
                        "Sub Positioning",
                        "Self Stabilized",
                        "Indirect"
                    ]
                },
                "Support Positioning": {
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
                            "Positioning": 4,
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
                        "Positioning",
                        "Rall AP",
                        "Buff AP",
                        "Rall DI",
                        "Self Stabilized",
                        "Sub DPT"
                    ]
                },
                "Support Utilitary": {
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
                            "Positioning": 4,
                            "Buff_MP": 0,
                            "Buff_AP": 4,
                            "Buff_DI": 0,
                            "Protection": 2
                        },
                        "Entrave": {
                            "Rall_MP": 0,
                            "Rall_AP": 4,
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
                        "Positioning",
                        "Self Stabilized"
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