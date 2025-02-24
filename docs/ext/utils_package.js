export const classData = {
  "Classes": {
    "Cra": {
      "Id": 1,
      "Image": "assets/male_cra.png",
      "Voies": {
        "DPT Ranged Area": {
          "Id": 1,
          "Notes": {
            "DPT": {
              "Melee": 0,
              "Ranged": 2,
              "Area": 2,
              "Single_Target": 0,
              "Constant": 0,
              "Burst": 1
            },
            "Support": {
              "Heal": 0,
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
              "Rall_DI": 0,
              "Rall_Resistance": 0,
              "Boringness": 0
            },
            "Team_Support": {
              "Support_Area": 1,
              "Support_Heal": 0,
              "Support_Shield": 0,
              "Support_Single_Target": 0,
              "Support_Melee": 0,
              "Support_Ranged": 1
            }
          },
          "Autonomy": 2,
          "Mobility": 1,
          "Roles": ["Area", "Burst", "Ranged", "Rall PO", "Buff PO", "Entity Stabilized"]
        },
        "DPT Ranged Single Target": {
          "Id": 2,
          "Notes": {
            "DPT": {
              "Melee": 0,
              "Ranged": 2,
              "Area": 0,
              "Single_Target": 2,
              "Constant": 1,
              "Burst": 0
            },
            "Support": {
              "Heal": 0,
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
              "Rall_DI": 0,
              "Rall_Resistance": 0,
              "Boringness": 0
            },
            "Team_Support": {
              "Support_Area": 0,
              "Support_Heal": 0,
              "Support_Shield": 0,
              "Support_Single_Target": 1,
              "Support_Melee": 0,
              "Support_Ranged": 1
            }
          },
          "Autonomy": 2,
          "Mobility": 1,
          "Roles": ["Single Target", "Constant", "Rall PO", "Buff PO", "Entity Stabilized"]
        },
        "Support": {
          "Id": 3,
          "Notes": {
            "DPT": {
              "Melee": 0,
              "Ranged": 0,
              "Area": 0,
              "Single_Target": 0,
              "Constant": 0,
              "Burst": 0
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
              "Support_Single_Target": 1,
              "Support_Melee": 0,
              "Support_Ranged": 1
            }
          },
          "Autonomy": 1,
          "Mobility": 1,
          "Roles": ["Rall PO", "Buff PO", "Rall Crit", "Sub Placeur", "Entity Stabilized"]
        }
      },
      "Elements": ["Fire", "Earth", "Air"],
      "Mobility": 1
    },
    "Ecaflip": {
      "Id": 2,
      "Image": "assets/male_ecaflip.png",
      "Voies": {
        "DPT Elementary": {
          "Id": 1,
          "Notes": {
            "DPT": {
              "Melee": 1,
              "Ranged": 1,
              "Area": 0,
              "Single_Target": 2,
              "Constant": 2,
              "Burst": 0
            },
            "Support": {
              "Heal": 1,
              "Shield": 0,
              "Placeur": 0,
              "Buff_MP": 0,
              "Buff_AP": 0,
              "Buff_DI": 1,
              "Protection": 0
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
              "Support_Heal": 1,
              "Support_Shield": 0,
              "Support_Single_Target": 1,
              "Support_Melee": 1,
              "Support_Ranged": 1
            }
          },
          "Autonomy": 2,
          "Mobility": 1,
          "Roles": ["Constant", "Single Target", "Melee", "Ranged", "Sub Heal", "Buff Crit", "Buff DI", "Resurection", "Buff WP", "Rall Resistance", "Self Stabilized"]
        },
        "DPT Ranged": {
          "Id": 2,
          "Notes": {
            "DPT": {
              "Melee": 0,
              "Ranged": 2,
              "Area": 0,
              "Single_Target": 2,
              "Constant": 2,
              "Burst": 0
            },
            "Support": {
              "Heal": 1,
              "Shield": 0,
              "Placeur": 0,
              "Buff_MP": 0,
              "Buff_AP": 0,
              "Buff_DI": 1,
              "Protection": 0
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
              "Support_Heal": 1,
              "Support_Shield": 0,
              "Support_Single_Target": 1,
              "Support_Melee": 0,
              "Support_Ranged": 1
            }
          },
          "Autonomy": 2,
          "Mobility": 1,
          "Roles": ["Constant", "Single Target", "Ranged", "Sub Heal", "Buff Crit", "Buff DI", "Resurection", "Rall Resistance", "Self Stabilized"]
        },
        "DPT Melee": {
          "Id": 3,
          "Notes": {
            "DPT": {
              "Melee": 2,
              "Ranged": 0,
              "Area": 0,
              "Single_Target": 2,
              "Constant": 2,
              "Burst": 0
            },
            "Support": {
              "Heal": 1,
              "Shield": 0,
              "Placeur": 0,
              "Buff_MP": 0,
              "Buff_AP": 0,
              "Buff_DI": 1,
              "Protection": 0
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
              "Support_Heal": 1,
              "Support_Shield": 0,
              "Support_Single_Target": 1,
              "Support_Melee": 1,
              "Support_Ranged": 0
            }
          },
          "Autonomy": 2,
          "Mobility": 1,
          "Roles": ["Constant", "Single Target", "Melee", "Sub Heal", "Buff Crit", "Buff DI", "Resurection", "Buff WP", "Rall Resistance", "Self Stabilized"]
        },
        "Support Heal": {
          "Id": 4,
          "Notes": {
            "DPT": {
              "Melee": 0,
              "Ranged": 0,
              "Area": 0,
              "Single_Target": 1,
              "Constant": 0,
              "Burst": 0
            },
            "Support": {
              "Heal": 2,
              "Shield": 1,
              "Placeur": 0,
              "Buff_MP": 1,
              "Buff_AP": 0,
              "Buff_DI": 1,
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
              "Support_Heal": 2,
              "Support_Shield": 1,
              "Support_Single_Target": 1,
              "Support_Melee": 0,
              "Support_Ranged": 0
            }
          },
          "Autonomy": 1,
          "Mobility": 1,
          "Roles": ["Heal", "Sub Shield", "Sub DPT", "Buff Crit", "Buff DI", "Buff WP", "Resurection", "Buff MP", "Rall Resistance", "Self Stabilized", "Invulnerability"]
        }
      },
      "Elements": ["Fire", "Water", "Earth"],
      "Mobility": 1
    },
    "Eliotrope": {
      "Id": 3,
      "Image": "assets/male_eliotrope.png",
      "Voies": {
        "DPT Elementary": {
          "Id": 1,
          "Notes": {
            "DPT": {
              "Melee": 1,
              "Ranged": 1,
              "Area": 2,
              "Single_Target": 2,
              "Constant": 0,
              "Burst": 2
            },
            "Support": {
              "Heal": 0,
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
              "Rall_DI": 0,
              "Rall_Resistance": 0,
              "Boringness": 0
            },
            "Team_Support": {
              "Support_Area": 1,
              "Support_Heal": 0,
              "Support_Shield": 0,
              "Support_Single_Target": 1,
              "Support_Melee": 1,
              "Support_Ranged": 1
            }
          },
          "Autonomy": 2,
          "Mobility": 1,
          "Roles": ["Area", "Single Target", "Burst", "Ranged", "Melee", "Entity Stabilized"]
        },
        "DPT Ranged": {
          "Id": 2,
          "Notes": {
            "DPT": {
              "Melee": 0,
              "Ranged": 2,
              "Area": 2,
              "Single_Target": 2,
              "Constant": 0,
              "Burst": 2
            },
            "Support": {
              "Heal": 0,
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
              "Rall_DI": 0,
              "Rall_Resistance": 0,
              "Boringness": 0
            },
            "Team_Support": {
              "Support_Area": 1,
              "Support_Heal": 0,
              "Support_Shield": 0,
              "Support_Single_Target": 1,
              "Support_Melee": 0,
              "Support_Ranged": 1
            }
          },
          "Autonomy": 2,
          "Mobility": 1,
          "Roles": ["Area", "Single Target", "Burst", "Ranged", "Entity Stabilized"]
        },
        "DPT Melee": {
          "Id": 3,
          "Notes": {
            "DPT": {
              "Melee": 2,
              "Ranged": 0,
              "Area": 2,
              "Single_Target": 2,
              "Constant": 0,
              "Burst": 2
            },
            "Support": {
              "Heal": 0,
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
              "Rall_DI": 0,
              "Rall_Resistance": 0,
              "Boringness": 0
            },
            "Team_Support": {
              "Support_Area": 1,
              "Support_Heal": 0,
              "Support_Shield": 0,
              "Support_Single_Target": 1,
              "Support_Melee": 1,
              "Support_Ranged": 0
            }
          },
          "Autonomy": 2,
          "Mobility": 1,
          "Roles": ["Area", "Single Target", "Burst", "Melee", "Entity Stabilized"]
        },
        "Support Placeur": {
        "Id": 4,
        "Notes": {
          "DPT": {
            "Melee": 0,
            "Ranged": 0,
            "Area": 0,
            "Single_Target": 0,
            "Constant": 0,
            "Burst": 0
          },
          "Support": {
            "Heal": 0,
            "Shield": 1,
            "Placeur": 2,
            "Buff_MP": 0,
            "Buff_AP": 1,
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
            "Support_Shield": 1,
            "Support_Single_Target": 1,
            "Support_Melee": 0,
            "Support_Ranged": 0
          }
        },
        "Autonomy": 1,
        "Mobility": 1,
        "Roles": ["Placeur", "Buff AP", "Sub Heal", "Sub Shield", "Entity Stabilized"]
      }
    },
    "Elements": ["Water", "Earth", "Air"],
    "Mobility": 1
    },
   "Eniripsa": {
    "Id": 4,
    "Image": "assets/male_eniripsa.png",
    "Voies": {
      "Support Heal": {
        "Id": 1,
        "Notes": {
          "DPT": {
            "Melee": 0,
            "Ranged": 0,
            "Area": 0,
            "Single_Target": 1,
            "Constant": 0,
            "Burst": 0
          },
          "Support": {
            "Heal": 2,
            "Shield": 0,
            "Placeur": 0,
            "Buff_MP": 1,
            "Buff_AP": 0,
            "Buff_DI": 2,
            "Protection": 2
          },
          "Entrave": {
            "Rall_MP": 0,
            "Rall_AP": 0,
            "Rall_DI": 1,
            "Rall_Resistance": 1,
            "Boringness": 0
          },
          "Team_Support": {
            "Support_Area": 1,
            "Support_Heal": 2,
            "Support_Shield": 0,
            "Support_Single_Target": 1,
            "Support_Melee": 0,
            "Support_Ranged": 0
          }
        },
        "Autonomy": 1,
        "Mobility": 1,
        "Roles": ["Heal", "Sub DPT", "Buff DI", "Buff Resistance", "Buff MP", "Buff PO", "Rall DI", "Rall Resistance", "Resurection", "Sub DPT", "Anti Shield", "Anti Heal", "Invulnerability", "Rall Parade"]
      },
      "DPT Indirect": {
        "Id": 2,
        "Notes": {
          "DPT": {
            "Melee": 0,
            "Ranged": 1,
            "Area": 0,
            "Single_Target": 2,
            "Constant": 0,
            "Burst": 2
          },
          "Support": {
            "Heal": 0,
            "Shield": 0,
            "Placeur": 0,
            "Buff_MP": 0,
            "Buff_AP": 0,
            "Buff_DI": 0,
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
            "Support_Single_Target": 1,
            "Support_Melee": 0,
            "Support_Ranged": 1
          }
        },
        "Autonomy": 2,
        "Mobility": 1,
        "Roles": ["Indirect", "Single Target", "Burst", "Resurection", "Anti Shield", "Anti Heal", "Rall Resistance", "Invulnerability", "Rall Parade"]
      }
    },
    "Elements": ["Fire", "Water", "Air"],
    "Mobility": 1
    },
    "Enutrof": {
    "Id": 5,
    "Image": "assets/male_enutrof.png",
    "Voies": {
      "Support": {
        "Id": 1,
        "Notes": {
          "DPT": {
            "Melee": 0,
            "Ranged": 0,
            "Area": 0,
            "Single_Target": 0,
            "Constant": 0,
            "Burst": 0
          },
          "Support": {
            "Heal": 0,
            "Shield": 0,
            "Placeur": 0,
            "Buff_MP": 1,
            "Buff_AP": 1,
            "Buff_DI": 2,
            "Protection": 1
          },
          "Entrave": {
            "Rall_MP": 1,
            "Rall_AP": 1,
            "Rall_DI": 1,
            "Rall_Resistance": 1,
            "Boringness": 0
          },
          "Team_Support": {
            "Support_Area": 0,
            "Support_Heal": 0,
            "Support_Shield": 0,
            "Support_Single_Target": 1,
            "Support_Melee": 0,
            "Support_Ranged": 0
          }
        },
        "Autonomy": 1,
        "Mobility": 1,
        "Roles": ["Buff DI", "Buff AP", "Buff MP", "Rall Resistance", "Rall DI", "Rall AP", "Rall MP", "Rall PO", "Support Constant"]
      },
      "DPT Melee": {
        "Id": 2,
        "Notes": {
          "DPT": {
            "Melee": 2,
            "Ranged": 0,
            "Area": 0,
            "Single_Target": 2,
            "Constant": 2,
            "Burst": 0
          },
          "Support": {
            "Heal": 0,
            "Shield": 0,
            "Placeur": 0,
            "Buff_MP": 0,
            "Buff_AP": 0,
            "Buff_DI": 0,
            "Protection": 1
          },
          "Entrave": {
            "Rall_MP": 1,
            "Rall_AP": 0,
            "Rall_DI": 1,
            "Rall_Resistance": 1,
            "Boringness": 0
          },
          "Team_Support": {
            "Support_Area": 0,
            "Support_Heal": 0,
            "Support_Shield": 0,
            "Support_Single_Target": 0,
            "Support_Melee": 1,
            "Support_Ranged": 0
          }
        },
        "Autonomy": 2,
        "Mobility": 1,
        "Roles": ["Constant", "Single Target", "Melee", "Off Tank", "Rall Resistance", "Rall DI", "Rall MP"]
      }
    },
    "Elements": ["Fire", "Water", "Earth"],
    "Mobility": 1
    },
    "Feca": {
    "Id": 6,
    "Image": "assets/male_feca.png",
    "Voies": {
      "Support Shield": {
        "Id": 1,
        "Notes": {
          "DPT": {
            "Melee": 0,
            "Ranged": 0,
            "Area": 0,
            "Single_Target": 0,
            "Constant": 0,
            "Burst": 0
          },
          "Support": {
            "Heal": 0,
            "Shield": 2,
            "Placeur": 0,
            "Buff_MP": 0,
            "Buff_AP": 0,
            "Buff_DI": 2,
            "Protection": 2
          },
          "Entrave": {
            "Rall_MP": 1,
            "Rall_AP": 0,
            "Rall_DI": 0,
            "Rall_Resistance": 0,
            "Boringness": 0
          },
          "Team_Support": {
            "Support_Area": 1,
            "Support_Heal": 0,
            "Support_Shield": 2,
            "Support_Single_Target": 1,
            "Support_Melee": 1,
            "Support_Ranged": 0
          }
        },
        "Autonomy": 1,
        "Mobility": 1,
        "Roles": ["Buff DI Melee", "Buff Crit", "Shield", "Buff Resistance", "Rall MP", "Buff WP", "Entity Stabilized", "Invulnerability", "Support Constant"]
      },
      "DPT Ranged": {
        "Id": 2,
        "Notes": {
          "DPT": {
            "Melee": 0,
            "Ranged": 2,
            "Area": 2,
            "Single_Target": 0,
            "Constant": 0,
            "Burst": 0
          },
          "Support": {
            "Heal": 0,
            "Shield": 0,
            "Placeur": 0,
            "Buff_MP": 0,
            "Buff_AP": 0,
            "Buff_DI": 1,
            "Protection": 1
          },
          "Entrave": {
            "Rall_MP": 1,
            "Rall_AP": 0,
            "Rall_DI": 0,
            "Rall_Resistance": 1,
            "Boringness": 0
          },
          "Team_Support": {
            "Support_Area": 1,
            "Support_Heal": 0,
            "Support_Shield": 0,
            "Support_Single_Target": 0,
            "Support_Melee": 0,
            "Support_Ranged": 1
          }
        },
        "Autonomy": 2,
        "Mobility": 1,
        "Roles": ["Indirect", "Area", "Ranged", "Buff DI Melee", "Buff Resistance", "Rall MP", "Entity Stabilized", "Invulnerability"]
      }
    },
    "Elements": ["Fire", "Water", "Earth"],
    "Mobility": 1
    },
    "Foggernaut": {
    "Id": 7,
    "Image": "assets/male_foggernaut.png",
    "Voies": {
      "DPT Elementary": {
        "Id": 1,
        "Notes": {
          "DPT": {
            "Melee": 1,
            "Ranged": 1,
            "Area": 2,
            "Single_Target": 0,
            "Constant": 2,
            "Burst": 0
          },
          "Support": {
            "Heal": 0,
            "Shield": 0,
            "Placeur": 0,
            "Buff_MP": 0,
            "Buff_AP": 0,
            "Buff_DI": 0,
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
            "Support_Area": 1,
            "Support_Heal": 0,
            "Support_Shield": 0,
            "Support_Single_Target": 0,
            "Support_Melee": 1,
            "Support_Ranged": 1
          }
        },
        "Autonomy": 2,
        "Mobility": 1,
        "Roles": ["Constant", "Area", "Ranged", "Melee", "Rall Resistance", "Off Tank", "Rall PO", "Entity Stabilized", "Rall Parade"]
      },
      "DPT Burst": {
        "Id": 2,
        "Notes": {
          "DPT": {
            "Melee": 1,
            "Ranged": 1,
            "Area": 2,
            "Single_Target": 0,
            "Constant": 0,
            "Burst": 2
          },
          "Support": {
            "Heal": 0,
            "Shield": 0,
            "Placeur": 0,
            "Buff_MP": 0,
            "Buff_AP": 0,
            "Buff_DI": 0,
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
            "Support_Area": 1,
            "Support_Heal": 0,
            "Support_Shield": 0,
            "Support_Single_Target": 0,
            "Support_Melee": 1,
            "Support_Ranged": 1
          }
        },
        "Autonomy": 2,
        "Mobility": 1,
        "Roles": ["Burst", "Area", "Ranged", "Melee", "Rall Resistance", "Rall PO", "Entity Stabilized", "Rall Parade"]
      },
      "DPT Ranged": {
        "Id": 3,
        "Notes": {
          "DPT": {
            "Melee": 0,
            "Ranged": 2,
            "Area": 2,
            "Single_Target": 0,
            "Constant": 2,
            "Burst": 0
          },
          "Support": {
            "Heal": 0,
            "Shield": 0,
            "Placeur": 0,
            "Buff_MP": 0,
            "Buff_AP": 0,
            "Buff_DI": 0,
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
            "Support_Area": 1,
            "Support_Heal": 0,
            "Support_Shield": 0,
            "Support_Single_Target": 0,
            "Support_Melee": 0,
            "Support_Ranged": 1
          }
        },
        "Autonomy": 2,
        "Mobility": 1,
        "Roles": ["Constant", "Area", "Ranged", "Rall Resistance", "Rall PO", "Entity Stabilized", "Rall Parade"]
      },
      "DPT Melee": {
        "Id": 4,
        "Notes": {
          "DPT": {
            "Melee": 2,
            "Ranged": 0,
            "Area": 2,
            "Single_Target": 0,
            "Constant": 2,
            "Burst": 0
          },
          "Support": {
            "Heal": 0,
            "Shield": 0,
            "Placeur": 0,
            "Buff_MP": 0,
            "Buff_AP": 0,
            "Buff_DI": 0,
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
            "Support_Area": 1,
            "Support_Heal": 0,
            "Support_Shield": 0,
            "Support_Single_Target": 0,
            "Support_Melee": 1,
            "Support_Ranged": 0
          }
        },
        "Autonomy": 2,
        "Mobility": 1,
        "Roles": ["Constant", "Area", "Melee", "Rall Resistance", "Off Tank", "Rall PO", "Entity Stabilized", "Rall Parade"]
      },
      "Support": {
        "Id": 5,
        "Notes": {
          "DPT": {
            "Melee": 0,
            "Ranged": 0,
            "Area": 0,
            "Single_Target": 0,
            "Constant": 0,
            "Burst": 0
          },
          "Support": {
            "Heal": 0,
            "Shield": 2,
            "Placeur": 1,
            "Buff_MP": 0,
            "Buff_AP": 0,
            "Buff_DI": 1,
            "Protection": 1
          },
          "Entrave": {
            "Rall_MP": 1,
            "Rall_AP": 0,
            "Rall_DI": 0,
            "Rall_Resistance": 1,
            "Boringness": 0
          },
          "Team_Support": {
            "Support_Area": 2,
            "Support_Heal": 0,
            "Support_Shield": 2,
            "Support_Single_Target": 0,
            "Support_Melee": 0,
            "Support_Ranged": 1
          }
        },
        "Autonomy": 1,
        "Mobility": 1,
        "Roles": ["Shield", "Rall MP", "Rall Resistance", "Buff PO", "Buff DI Range", "Sub Placeur", "Anti Heal", "Entity Stabilized", "Support Constant", "Support Area", "Rall Parade"]
      }
    },
    "Elements": ["Fire", "Water", "Earth", "Stasis"],
    "Mobility": 1
    },
    "Huppermage": {
    "Id": 8,
    "Image": "assets/male_huppermage.png",
    "Voies": {
      "DPT Elementary": {
        "Id": 1,
        "Notes": {
          "DPT": {
            "Melee": 1,
            "Ranged": 1,
            "Area": 2,
            "Single_Target": 2,
            "Constant": 2,
            "Burst": 0
          },
          "Support": {
            "Heal": 0,
            "Shield": 0,
            "Placeur": 0,
            "Buff_MP": 1,
            "Buff_AP": 1,
            "Buff_DI": 0,
            "Protection": 1
          },
          "Entrave": {
            "Rall_MP": 0,
            "Rall_AP": 1,
            "Rall_DI": 1,
            "Rall_Resistance": 0,
            "Boringness": 0
          },
          "Team_Support": {
            "Support_Area": 1,
            "Support_Heal": 0,
            "Support_Shield": 0,
            "Support_Single_Target": 1,
            "Support_Melee": 1,
            "Support_Ranged": 1
          }
        },
        "Autonomy": 2,
        "Mobility": 1,
        "Roles": ["Area", "Single Target", "Constant", "Melee", "Ranged", "Buff AP", "Buff MP", "Buff Resistance", "Rall AP", "Rall DI", "Anti Shield", "Anti Heal", "Entity Stabilized", "Rall Parade"]
      },
      "DPT Ranged": {
        "Id": 2,
        "Notes": {
          "DPT": {
            "Melee": 0,
            "Ranged": 2,
            "Area": 2,
            "Single_Target": 2,
            "Constant": 0,
            "Burst": 2
          },
          "Support": {
            "Heal": 0,
            "Shield": 0,
            "Placeur": 0,
            "Buff_MP": 1,
            "Buff_AP": 1,
            "Buff_DI": 0,
            "Protection": 1
          },
          "Entrave": {
            "Rall_MP": 0,
            "Rall_AP": 0,
            "Rall_DI": 1,
            "Rall_Resistance": 0,
            "Boringness": 0
          },
          "Team_Support": {
            "Support_Area": 1,
            "Support_Heal": 0,
            "Support_Shield": 0,
            "Support_Single_Target": 1,
            "Support_Melee": 0,
            "Support_Ranged": 1
          }
        },
        "Autonomy": 2,
        "Mobility": 1,
        "Roles": ["Area", "Single Target", "Burst", "Ranged", "Buff AP", "Buff MP", "Buff Resistance", "Rall DI", "Anti Shield", "Anti Heal", "Entity Stabilized", "Rall Parade"]
      },
      "DPT Melee": {
        "Id": 3,
        "Notes": {
          "DPT": {
            "Melee": 2,
            "Ranged": 0,
            "Area": 0,
            "Single_Target": 2,
            "Constant": 2,
            "Burst": 2
          },
          "Support": {
            "Heal": 0,
            "Shield": 0,
            "Placeur": 0,
            "Buff_MP": 1,
            "Buff_AP": 1,
            "Buff_DI": 0,
            "Protection": 1
          },
          "Entrave": {
            "Rall_MP": 0,
            "Rall_AP": 1,
            "Rall_DI": 1,
            "Rall_Resistance": 0,
            "Boringness": 0
          },
          "Team_Support": {
            "Support_Area": 0,
            "Support_Heal": 0,
            "Support_Shield": 0,
            "Support_Single_Target": 1,
            "Support_Melee": 1,
            "Support_Ranged": 0
          }
        },
        "Autonomy": 2,
        "Mobility": 1,
        "Roles": ["Constant", "Single Target", "Burst", "Melee", "Off Tank", "Buff AP", "Buff MP", "Buff Resistance", "Rall AP", "Rall DI", "Anti Shield", "Anti Heal", "Entity Stabilized", "Rall Parade"]
      },
      "Support": {
        "Id": 4,
        "Notes": {
          "DPT": {
            "Melee": 0,
            "Ranged": 0,
            "Area": 0,
            "Single_Target": 1,
            "Constant": 0,
            "Burst": 1
          },
          "Support": {
            "Heal": 0,
            "Shield": 0,
            "Placeur": 1,
            "Buff_MP": 2,
            "Buff_AP": 2,
            "Buff_DI": 0,
            "Protection": 1
          },
          "Entrave": {
            "Rall_MP": 1,
            "Rall_AP": 1,
            "Rall_DI": 1,
            "Rall_Resistance": 0,
            "Boringness": 0
          },
          "Team_Support": {
            "Support_Area": 2,
            "Support_Heal": 0,
            "Support_Shield": 0,
            "Support_Single_Target": 1,
            "Support_Melee": 0,
            "Support_Ranged": 0
          }
        },
        "Autonomy": 1,
        "Mobility": 1,
        "Roles": ["Sub DPT", "Rall MP", "Buff MP", "Buff AP", "Buff Resistance", "Sub Placeur", "Rall Crit", "Rall AP", "Rall DI", "Rall PO", "Buff Crit", "Anti Shield", "Anti Heal", "Entity Stabilized", "Support Burst", "Support Area", "Rall Parade"]
      }
    },
    "Elements": ["Fire", "Water", "Earth", "Air"],
    "Mobility": 1
    },
    "Iop": {
    "Id": 9,
    "Image": "assets/male_iop.png",
    "Voies": {
      "DPT Melee": {
        "Id": 1,
        "Notes": {
          "DPT": {
            "Melee": 2,
            "Ranged": 0,
            "Area": 0,
            "Single_Target": 2,
            "Constant": 2,
            "Burst": 0
          },
          "Support": {
            "Heal": 0,
            "Shield": 0,
            "Placeur": 0,
            "Buff_MP": 0,
            "Buff_AP": 1,
            "Buff_DI": 1,
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
            "Support_Melee": 1,
            "Support_Ranged": 0
          }
        },
        "Autonomy": 2,
        "Mobility": 1,
        "Roles": ["Constant", "Single Target", "Melee", "Off Tank", "Buff AP", "Buff DI", "Entity Stabilized"]
      },
      "Support": {
        "Id": 2,
        "Notes": {
          "DPT": {
            "Melee": 0,
            "Ranged": 0,
            "Area": 0,
            "Single_Target": 0,
            "Constant": 0,
            "Burst": 0
          },
          "Support": {
            "Heal": 0,
            "Shield": 1,
            "Placeur": 0,
            "Buff_MP": 0,
            "Buff_AP": 2,
            "Buff_DI": 2,
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
            "Support_Shield": 1,
            "Support_Single_Target": 1,
            "Support_Melee": 0,
            "Support_Ranged": 0
          }
        },
        "Autonomy": 1,
        "Mobility": 1,
        "Roles": ["Buff AP", "Buff DI", "Sub Shield", "Anti Shield", "Entity Stabilized"]
      }
    },
    "Elements": ["Fire", "Earth", "Air"],
    "Mobility": 1
    },
    "Masqueraider": {
    "Id": 10,
    "Image": "assets/male_masqueraider.png",
    "Voies": {
      "DPT Melee": {
        "Id": 1,
        "Notes": {
          "DPT": {
            "Melee": 0,
            "Ranged": 2,
            "Area": 2,
            "Single_Target": 0,
            "Constant": 0,
            "Burst": 1
          },
          "Support": {
            "Heal": 0,
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
            "Rall_DI": 0,
            "Rall_Resistance": 0,
            "Boringness": 0
          },
          "Team_Support": {
            "Support_Area": 1,
            "Support_Heal": 0,
            "Support_Shield": 0,
            "Support_Single_Target": 0,
            "Support_Melee": 0,
            "Support_Ranged": 1
          }
        },
        "Autonomy": 2,
        "Mobility": 1,
        "Roles": ["Melee", "Resurection", "Sub Heal", "Rall WP", "Buff Resistance"]
      },
      "Support Heal": {
        "Id": 2,
        "Notes": {
          "DPT": {
            "Melee": 0,
            "Ranged": 2,
            "Area": 0,
            "Single_Target": 2,
            "Constant": 1,
            "Burst": 0
          },
          "Support": {
            "Heal": 0,
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
            "Rall_DI": 0,
            "Rall_Resistance": 0,
            "Boringness": 0
          },
          "Team_Support": {
            "Support_Area": 0,
            "Support_Heal": 0,
            "Support_Shield": 0,
            "Support_Single_Target": 1,
            "Support_Melee": 0,
            "Support_Ranged": 1
          }
        },
        "Autonomy": 2,
        "Mobility": 1,
        "Roles": ["Heal", "Resurection", "Sub DPT", "Sub Shield", "Sub Placeur", "Rall WP", "Buff Resistance"]

      },
      "Support Shield": {
        "Id": 3,
        "Notes": {
          "DPT": {
            "Melee": 0,
            "Ranged": 0,
            "Area": 0,
            "Single_Target": 0,
            "Constant": 0,
            "Burst": 0
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
            "Support_Single_Target": 1,
            "Support_Melee": 0,
            "Support_Ranged": 1
          }
        },
        "Autonomy": 1,
        "Mobility": 1,
        "Roles": ["Shield", "Resurection", "Sub Placeur", "Sub Heal", "Rall WP", "Buff Resistance"]

      },
      "Support Placeur": {
       "Id": 4,
        "Notes": {
          "DPT": {
            "Melee": 0,
            "Ranged": 0,
            "Area": 0,
            "Single_Target": 0,
            "Constant": 0,
            "Burst": 0
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
            "Support_Single_Target": 1,
            "Support_Melee": 0,
            "Support_Ranged": 1
          }
        },
        "Autonomy": 1,
        "Mobility": 1,
        "Roles": ["Placeur", "Resurection", "Sub Shield", "Sub Heal", "Rall WP", "Buff Resistance"]


      }
    },
    "Elements": ["Fire", "Water", "Air"],
    "Mobility": 1
    },
    "Osamodas": {
      "Id": 11,
      "Image": "assets/male_osamodas.png",
      "Voies": {
        "DPT Invoc": {
          "Id": 1,
          "Notes": {
            "DPT": {
              "Melee": 1,
              "Ranged": 1,
              "Area": 0,
              "Single_Target": 2,
              "Constant": 2,
              "Burst": 0
            },
            "Support": {
              "Heal": 1,
              "Shield": 0,
              "Placeur": 0,
              "Buff_MP": 0,
              "Buff_AP": 0,
              "Buff_DI": 1,
              "Protection": 0
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
              "Support_Heal": 1,
              "Support_Shield": 0,
              "Support_Single_Target": 1,
              "Support_Melee": 1,
              "Support_Ranged": 1
            }
          },
          "Autonomy": 2,
          "Mobility": 1,
          "Roles": ["Constant", "Single Target", "Melee", "Ranged", "Sub Heal", "Buff AP", "Buff DI"]
        },
        "DPT Melee": {
          "Id": 2,
          "Notes": {
            "DPT": {
              "Melee": 0,
              "Ranged": 2,
              "Area": 0,
              "Single_Target": 2,
              "Constant": 2,
              "Burst": 0
            },
            "Support": {
              "Heal": 1,
              "Shield": 0,
              "Placeur": 0,
              "Buff_MP": 0,
              "Buff_AP": 0,
              "Buff_DI": 1,
              "Protection": 0
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
              "Support_Heal": 1,
              "Support_Shield": 0,
              "Support_Single_Target": 1,
              "Support_Melee": 0,
              "Support_Ranged": 1
            }
          },
          "Autonomy": 2,
          "Mobility": 1,
          "Roles": ["Constant", "Area", "Melee", "Sub Heal", "Buff AP", "Buff DI"]

        },
        "DPT Flame": {
          "Id": 3,
          "Notes": {
            "DPT": {
              "Melee": 2,
              "Ranged": 0,
              "Area": 0,
              "Single_Target": 2,
              "Constant": 2,
              "Burst": 0
            },
            "Support": {
              "Heal": 1,
              "Shield": 0,
              "Placeur": 0,
              "Buff_MP": 0,
              "Buff_AP": 0,
              "Buff_DI": 1,
              "Protection": 0
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
              "Support_Heal": 1,
              "Support_Shield": 0,
              "Support_Single_Target": 1,
              "Support_Melee": 1,
              "Support_Ranged": 0
            }
          },
          "Autonomy": 2,
          "Mobility": 1,
          "Roles": ["Constant", "Area", "Melee", "Sub Heal", "Buff AP", "Buff DI", "Support Area"]
        },
        "Support Heal": {
          "Id": 4,
          "Notes": {
            "DPT": {
              "Melee": 0,
              "Ranged": 0,
              "Area": 0,
              "Single_Target": 1,
              "Constant": 0,
              "Burst": 0
            },
            "Support": {
              "Heal": 2,
              "Shield": 1,
              "Placeur": 0,
              "Buff_MP": 1,
              "Buff_AP": 0,
              "Buff_DI": 1,
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
              "Support_Heal": 2,
              "Support_Shield": 1,
              "Support_Single_Target": 1,
              "Support_Melee": 0,
              "Support_Ranged": 0
            }
          },
          "Autonomy": 1,
          "Mobility": 1,
          "Roles": ["Heal", "Sub DPT", "Buff AP", "Buff DI", "Rall Resistance", "Sub Placeur", "Buff Crit"]
        },
        "Support Placeur": {
          "Id": 5,
          "Notes": {
            "DPT": {
              "Melee": 0,
              "Ranged": 0,
              "Area": 0,
              "Single_Target": 1,
              "Constant": 0,
              "Burst": 0
            },
            "Support": {
              "Heal": 2,
              "Shield": 1,
              "Placeur": 0,
              "Buff_MP": 1,
              "Buff_AP": 0,
              "Buff_DI": 1,
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
              "Support_Heal": 2,
              "Support_Shield": 1,
              "Support_Single_Target": 1,
              "Support_Melee": 0,
              "Support_Ranged": 0
            }
          },
          "Autonomy": 1,
          "Mobility": 1,
          "Roles": ["Placeur", "Buff AP", "Buff DI", "Rall Resistance", "Sub Heal", "Sub Shield", "Buff Crit"]
        },
        "Support Shield": {
          "Id": 6,
          "Notes": {
            "DPT": {
              "Melee": 0,
              "Ranged": 0,
              "Area": 0,
              "Single_Target": 1,
              "Constant": 0,
              "Burst": 0
            },
            "Support": {
              "Heal": 2,
              "Shield": 1,
              "Placeur": 0,
              "Buff_MP": 1,
              "Buff_AP": 0,
              "Buff_DI": 1,
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
              "Support_Heal": 2,
              "Support_Shield": 1,
              "Support_Single_Target": 1,
              "Support_Melee": 0,
              "Support_Ranged": 0
            }
          },
          "Autonomy": 1,
          "Mobility": 1,
          "Roles": ["Shield", "Buff AP", "Buff DI", "Rall Resistance", "Sub Placeur", "Sub Heal", "Buff Crit"]

        }
      },
      "Elements": ["Fire", "Earth", "Air"],
      "Mobility": 1
    },
    "Ouginak": {
      "Id": 12,
      "Image": "assets/male_ouginak.png",
      "Voies": {
        "DPT Indirect": {
          "Id": 1,
          "Notes": {
            "DPT": {
              "Melee": 1,
              "Ranged": 1,
              "Area": 2,
              "Single_Target": 2,
              "Constant": 0,
              "Burst": 2
            },
            "Support": {
              "Heal": 0,
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
              "Rall_DI": 0,
              "Rall_Resistance": 0,
              "Boringness": 0
            },
            "Team_Support": {
              "Support_Area": 1,
              "Support_Heal": 0,
              "Support_Shield": 0,
              "Support_Single_Target": 1,
              "Support_Melee": 1,
              "Support_Ranged": 1
            }
          },
          "Autonomy": 2,
          "Mobility": 1,
          "Roles": ["Indirect", "Area", "Melee", "Off Tank", "Entity Stabilized", "Rall MP"]
        },
        "DPT Melee": {
          "Id": 2,
          "Notes": {
            "DPT": {
              "Melee": 0,
              "Ranged": 2,
              "Area": 2,
              "Single_Target": 2,
              "Constant": 0,
              "Burst": 2
            },
            "Support": {
              "Heal": 0,
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
              "Rall_DI": 0,
              "Rall_Resistance": 0,
              "Boringness": 0
            },
            "Team_Support": {
              "Support_Area": 1,
              "Support_Heal": 0,
              "Support_Shield": 0,
              "Support_Single_Target": 1,
              "Support_Melee": 0,
              "Support_Ranged": 1
            }
          },
          "Autonomy": 2,
          "Mobility": 1,
          "Roles": ["Single Target", "Melee", "Burst", "Entity Stabilized", "Rall MP"]

        },
        "Support": {
          "Id": 3,
          "Notes": {
            "DPT": {
              "Melee": 2,
              "Ranged": 0,
              "Area": 2,
              "Single_Target": 2,
              "Constant": 0,
              "Burst": 2
            },
            "Support": {
              "Heal": 0,
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
              "Rall_DI": 0,
              "Rall_Resistance": 0,
              "Boringness": 0
            },
            "Team_Support": {
              "Support_Area": 1,
              "Support_Heal": 0,
              "Support_Shield": 0,
              "Support_Single_Target": 1,
              "Support_Melee": 1,
              "Support_Ranged": 0
            }
          },
          "Autonomy": 2,
          "Mobility": 1,
          "Roles": ["Sub Shield", "Entity Stabilized", "Rall MP"]

        }
    },
    "Elements": ["Water", "Earth", "Air"],
    "Mobility": 1
    },
    "Pandawa": {
    "Id": 13,
    "Image": "assets/male_pandawa.png",
    "Voies": {
      "Support Heal": {
        "Id": 1,
        "Notes": {
          "DPT": {
            "Melee": 0,
            "Ranged": 0,
            "Area": 0,
            "Single_Target": 1,
            "Constant": 0,
            "Burst": 0
          },
          "Support": {
            "Heal": 2,
            "Shield": 0,
            "Placeur": 0,
            "Buff_MP": 1,
            "Buff_AP": 0,
            "Buff_DI": 2,
            "Protection": 2
          },
          "Entrave": {
            "Rall_MP": 0,
            "Rall_AP": 0,
            "Rall_DI": 1,
            "Rall_Resistance": 1,
            "Boringness": 0
          },
          "Team_Support": {
            "Support_Area": 1,
            "Support_Heal": 2,
            "Support_Shield": 0,
            "Support_Single_Target": 1,
            "Support_Melee": 0,
            "Support_Ranged": 0
          }
        },
        "Autonomy": 1,
        "Mobility": 1,
        "Roles": ["Heal", "Sub Placeur", "Sub DPT", "Buff DI", "Buff Resistance", "Buff MP", "Rall MP", "Rall Resistance", "Entity Stabilized"]
      },
      "DPT Melee": {
        "Id": 2,
        "Notes": {
          "DPT": {
            "Melee": 0,
            "Ranged": 1,
            "Area": 0,
            "Single_Target": 2,
            "Constant": 0,
            "Burst": 2
          },
          "Support": {
            "Heal": 0,
            "Shield": 0,
            "Placeur": 0,
            "Buff_MP": 0,
            "Buff_AP": 0,
            "Buff_DI": 0,
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
            "Support_Single_Target": 1,
            "Support_Melee": 0,
            "Support_Ranged": 1
          }
        },
        "Autonomy": 2,
        "Mobility": 1,
        "Roles": ["Melee", "Buff MP", "Rall MP", "Rall Resistance", "Entity Stabilized"]
      },
      "Support Placeur": {
        "Id": 3,
        "Notes": {
          "DPT": {
            "Melee": 0,
            "Ranged": 1,
            "Area": 0,
            "Single_Target": 2,
            "Constant": 0,
            "Burst": 2
          },
          "Support": {
            "Heal": 0,
            "Shield": 0,
            "Placeur": 0,
            "Buff_MP": 0,
            "Buff_AP": 0,
            "Buff_DI": 0,
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
            "Support_Single_Target": 1,
            "Support_Melee": 0,
            "Support_Ranged": 1
          }
        },
        "Autonomy": 2,
        "Mobility": 1,
        "Roles": ["Placeur", "Sub Heal", "Buff DI", "Buff Resistance", "Buff MP", "Rall MP", "Rall Resistance", "Entity Stabilized"]

      }
    },
    "Elements": ["Fire", "Water", "Earth"],
    "Mobility": 1
    },
    "Rogue": {
    "Id": 14,
    "Image": "assets/male_rogue.png",
    "Voies": {
      "Support": {
        "Id": 1,
        "Notes": {
          "DPT": {
            "Melee": 0,
            "Ranged": 0,
            "Area": 0,
            "Single_Target": 0,
            "Constant": 0,
            "Burst": 0
          },
          "Support": {
            "Heal": 0,
            "Shield": 0,
            "Placeur": 0,
            "Buff_MP": 1,
            "Buff_AP": 1,
            "Buff_DI": 2,
            "Protection": 1
          },
          "Entrave": {
            "Rall_MP": 1,
            "Rall_AP": 1,
            "Rall_DI": 1,
            "Rall_Resistance": 1,
            "Boringness": 0
          },
          "Team_Support": {
            "Support_Area": 0,
            "Support_Heal": 0,
            "Support_Shield": 0,
            "Support_Single_Target": 1,
            "Support_Melee": 0,
            "Support_Ranged": 0
          }
        },
        "Autonomy": 1,
        "Mobility": 1,
        "Roles": ["Sub Placeur", "Buff DI", "Rall MP", "Rall WP", "Rall PO", "Anti Heal"]
      },
      "DPT Melee": {
        "Id": 2,
        "Notes": {
          "DPT": {
            "Melee": 2,
            "Ranged": 0,
            "Area": 0,
            "Single_Target": 2,
            "Constant": 2,
            "Burst": 0
          },
          "Support": {
            "Heal": 0,
            "Shield": 0,
            "Placeur": 0,
            "Buff_MP": 0,
            "Buff_AP": 0,
            "Buff_DI": 0,
            "Protection": 1
          },
          "Entrave": {
            "Rall_MP": 1,
            "Rall_AP": 0,
            "Rall_DI": 1,
            "Rall_Resistance": 1,
            "Boringness": 0
          },
          "Team_Support": {
            "Support_Area": 0,
            "Support_Heal": 0,
            "Support_Shield": 0,
            "Support_Single_Target": 0,
            "Support_Melee": 1,
            "Support_Ranged": 0
          }
        },
        "Autonomy": 2,
        "Mobility": 1,
        "Roles": ["Melee", "Ranged", "Burst", "Sub Placeur", "Rall MP", "Rall WP", "Rall PO", "Anti Heal", "Anti Shield"]
      },
      "DPT Indirect": {
        "Id": 3,
        "Notes": {
          "DPT": {
            "Melee": 2,
            "Ranged": 0,
            "Area": 0,
            "Single_Target": 2,
            "Constant": 2,
            "Burst": 0
          },
          "Support": {
            "Heal": 0,
            "Shield": 0,
            "Placeur": 0,
            "Buff_MP": 0,
            "Buff_AP": 0,
            "Buff_DI": 0,
            "Protection": 1
          },
          "Entrave": {
            "Rall_MP": 1,
            "Rall_AP": 0,
            "Rall_DI": 1,
            "Rall_Resistance": 1,
            "Boringness": 0
          },
          "Team_Support": {
            "Support_Area": 0,
            "Support_Heal": 0,
            "Support_Shield": 0,
            "Support_Single_Target": 0,
            "Support_Melee": 1,
            "Support_Ranged": 0
          }
        },
        "Autonomy": 2,
        "Mobility": 1,
        "Roles": ["Indirect", "Melee", "Ranged", "Sub Placeur", "Rall MP", "Rall WP", "Rall PO", "Anti Heal", "Anti Shield"]
      }
    },
    "Elements": ["Fire", "Earth", "Air"],
    "Mobility": 1
    },
    "Sacrier": {
    "Id": 15,
    "Image": "assets/male_sacrier.png",
    "Voies": {
      "DPT Melee": {
        "Id": 1,
        "Notes": {
          "DPT": {
            "Melee": 0,
            "Ranged": 0,
            "Area": 0,
            "Single_Target": 0,
            "Constant": 0,
            "Burst": 0
          },
          "Support": {
            "Heal": 0,
            "Shield": 2,
            "Placeur": 0,
            "Buff_MP": 0,
            "Buff_AP": 0,
            "Buff_DI": 2,
            "Protection": 2
          },
          "Entrave": {
            "Rall_MP": 1,
            "Rall_AP": 0,
            "Rall_DI": 0,
            "Rall_Resistance": 0,
            "Boringness": 0
          },
          "Team_Support": {
            "Support_Area": 1,
            "Support_Heal": 0,
            "Support_Shield": 2,
            "Support_Single_Target": 1,
            "Support_Melee": 1,
            "Support_Ranged": 0
          }
        },
        "Autonomy": 1,
        "Mobility": 1,
        "Roles": ["Melee", "Constant", "Sub Placeur", "Buff DI", "Rall MP", "Self Stabilized", "Allies Stabilized"]
      
      },
      "DPT Flame": {
        "Id": 2,
        "Notes": {
          "DPT": {
            "Melee": 0,
            "Ranged": 2,
            "Area": 2,
            "Single_Target": 0,
            "Constant": 0,
            "Burst": 0
          },
          "Support": {
            "Heal": 0,
            "Shield": 0,
            "Placeur": 0,
            "Buff_MP": 0,
            "Buff_AP": 0,
            "Buff_DI": 1,
            "Protection": 1
          },
          "Entrave": {
            "Rall_MP": 1,
            "Rall_AP": 0,
            "Rall_DI": 0,
            "Rall_Resistance": 1,
            "Boringness": 0
          },
          "Team_Support": {
            "Support_Area": 1,
            "Support_Heal": 0,
            "Support_Shield": 0,
            "Support_Single_Target": 0,
            "Support_Melee": 0,
            "Support_Ranged": 1
          }
        },
        "Autonomy": 2,
        "Mobility": 1,
        "Roles": ["Melee", "Zone", "Constant", "Sub Placeur", "Buff DI", "Rall MP", "Self Stabilized", "Allies Stabilized"]
      },
      "Support Placeur": {
        "Id": 3,
        "Notes": {
          "DPT": {
            "Melee": 0,
            "Ranged": 2,
            "Area": 2,
            "Single_Target": 0,
            "Constant": 0,
            "Burst": 0
          },
          "Support": {
            "Heal": 0,
            "Shield": 0,
            "Placeur": 0,
            "Buff_MP": 0,
            "Buff_AP": 0,
            "Buff_DI": 1,
            "Protection": 1
          },
          "Entrave": {
            "Rall_MP": 1,
            "Rall_AP": 0,
            "Rall_DI": 0,
            "Rall_Resistance": 1,
            "Boringness": 0
          },
          "Team_Support": {
            "Support_Area": 1,
            "Support_Heal": 0,
            "Support_Shield": 0,
            "Support_Single_Target": 0,
            "Support_Melee": 0,
            "Support_Ranged": 1
          }
        },
        "Autonomy": 2,
        "Mobility": 1,
        "Roles": ["Placeur", "Buff DI", "Rall MP", "Self Stabilized", "Allies Stabilized"]
      }
    },
    "Elements": ["Fire", "Earth", "Air"],
    "Mobility": 1
    },
    "Sadida": {
    "Id": 16,
    "Image": "assets/male_sadida.png",
    "Voies": {
      "DPT Invoc": {
        "Id": 1,
        "Notes": {
          "DPT": {
            "Melee": 1,
            "Ranged": 1,
            "Area": 2,
            "Single_Target": 0,
            "Constant": 2,
            "Burst": 0
          },
          "Support": {
            "Heal": 0,
            "Shield": 0,
            "Placeur": 0,
            "Buff_MP": 0,
            "Buff_AP": 0,
            "Buff_DI": 0,
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
            "Support_Area": 1,
            "Support_Heal": 0,
            "Support_Shield": 0,
            "Support_Single_Target": 0,
            "Support_Melee": 1,
            "Support_Ranged": 1
          }
        },
        "Autonomy": 2,
        "Mobility": 1,
        "Roles": ["Melee", "Ranged", "Single Target", "Sub Heal", "Sub Shield", "Buff DI", "Rall DI", "Rall MP", "Rall Resistance"]
      },
      "DPT Indirect": {
        "Id": 2,
        "Notes": {
          "DPT": {
            "Melee": 1,
            "Ranged": 1,
            "Area": 2,
            "Single_Target": 0,
            "Constant": 0,
            "Burst": 2
          },
          "Support": {
            "Heal": 0,
            "Shield": 0,
            "Placeur": 0,
            "Buff_MP": 0,
            "Buff_AP": 0,
            "Buff_DI": 0,
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
            "Support_Area": 1,
            "Support_Heal": 0,
            "Support_Shield": 0,
            "Support_Single_Target": 0,
            "Support_Melee": 1,
            "Support_Ranged": 1
          }
        },
        "Autonomy": 2,
        "Mobility": 1,
        "Roles": ["Indirect", "Melee", "Ranged", "Area", "Sub Heal", "Sub Shield", "Buff DI", "Rall DI", "Rall MP", "Rall Resistance"]
      },
      "Support Heal": {
        "Id": 3,
        "Notes": {
          "DPT": {
            "Melee": 0,
            "Ranged": 2,
            "Area": 2,
            "Single_Target": 0,
            "Constant": 2,
            "Burst": 0
          },
          "Support": {
            "Heal": 0,
            "Shield": 0,
            "Placeur": 0,
            "Buff_MP": 0,
            "Buff_AP": 0,
            "Buff_DI": 0,
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
            "Support_Area": 1,
            "Support_Heal": 0,
            "Support_Shield": 0,
            "Support_Single_Target": 0,
            "Support_Melee": 0,
            "Support_Ranged": 1
          }
        },
        "Autonomy": 2,
        "Mobility": 1,
        "Roles": ["Heal", "Sub DPT", "Sub Shield", "Buff DI", "Rall DI", "Rall MP", "Rall Resistance"]
      },
      "Support Shield": {
        "Id": 4,
        "Notes": {
          "DPT": {
            "Melee": 2,
            "Ranged": 0,
            "Area": 2,
            "Single_Target": 0,
            "Constant": 2,
            "Burst": 0
          },
          "Support": {
            "Heal": 0,
            "Shield": 0,
            "Placeur": 0,
            "Buff_MP": 0,
            "Buff_AP": 0,
            "Buff_DI": 0,
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
            "Support_Area": 1,
            "Support_Heal": 0,
            "Support_Shield": 0,
            "Support_Single_Target": 0,
            "Support_Melee": 1,
            "Support_Ranged": 0
          }
        },
        "Autonomy": 2,
        "Mobility": 1,
        "Roles": ["Shield", "Sub DPT", "Buff DI", "Rall DI", "Rall MP", "Rall Resistance"]
      }
    },
    "Elements": ["Water", "Earth", "Air"],
    "Mobility": 1
    },
    "Sram": {
    "Id": 17,
    "Image": "assets/male_sram.png",
    "Voies": {
      "DPT Melee": {
        "Id": 1,
        "Notes": {
          "DPT": {
            "Melee": 1,
            "Ranged": 1,
            "Area": 2,
            "Single_Target": 2,
            "Constant": 2,
            "Burst": 0
          },
          "Support": {
            "Heal": 0,
            "Shield": 0,
            "Placeur": 0,
            "Buff_MP": 1,
            "Buff_AP": 1,
            "Buff_DI": 0,
            "Protection": 1
          },
          "Entrave": {
            "Rall_MP": 0,
            "Rall_AP": 1,
            "Rall_DI": 1,
            "Rall_Resistance": 0,
            "Boringness": 0
          },
          "Team_Support": {
            "Support_Area": 1,
            "Support_Heal": 0,
            "Support_Shield": 0,
            "Support_Single_Target": 1,
            "Support_Melee": 1,
            "Support_Ranged": 1
          }
        },
        "Autonomy": 2,
        "Mobility": 1,
        "Roles": ["Melee", "Single Taget", "Buff PM"]
      },
      "DPT Indirect": {
        "Id": 2,
        "Notes": {
          "DPT": {
            "Melee": 0,
            "Ranged": 2,
            "Area": 2,
            "Single_Target": 2,
            "Constant": 0,
            "Burst": 2
          },
          "Support": {
            "Heal": 0,
            "Shield": 0,
            "Placeur": 0,
            "Buff_MP": 1,
            "Buff_AP": 1,
            "Buff_DI": 0,
            "Protection": 1
          },
          "Entrave": {
            "Rall_MP": 0,
            "Rall_AP": 0,
            "Rall_DI": 1,
            "Rall_Resistance": 0,
            "Boringness": 0
          },
          "Team_Support": {
            "Support_Area": 1,
            "Support_Heal": 0,
            "Support_Shield": 0,
            "Support_Single_Target": 1,
            "Support_Melee": 0,
            "Support_Ranged": 1
          }
        },
        "Autonomy": 2,
        "Mobility": 1,
        "Roles": ["Indirect", "Melee", "Ranged", "Sub Placeur", "Buff PM"]
      },
      "Support": {
        "Id": 3,
        "Notes": {
          "DPT": {
            "Melee": 2,
            "Ranged": 0,
            "Area": 0,
            "Single_Target": 2,
            "Constant": 2,
            "Burst": 2
          },
          "Support": {
            "Heal": 0,
            "Shield": 0,
            "Placeur": 0,
            "Buff_MP": 1,
            "Buff_AP": 1,
            "Buff_DI": 0,
            "Protection": 1
          },
          "Entrave": {
            "Rall_MP": 0,
            "Rall_AP": 1,
            "Rall_DI": 1,
            "Rall_Resistance": 0,
            "Boringness": 0
          },
          "Team_Support": {
            "Support_Area": 0,
            "Support_Heal": 0,
            "Support_Shield": 0,
            "Support_Single_Target": 1,
            "Support_Melee": 1,
            "Support_Ranged": 0
          }
        },
        "Autonomy": 2,
        "Mobility": 1,
        "Roles": ["Sub Placeur", "Buff PM"]
      }
    },
    "Elements": ["Fire", "Water", "Air"],
    "Mobility": 1
    },
    "Xelor": {
    "Id": 18,
    "Image": "assets/male_xelor.png",
    "Voies": {
      "DPT Ranged": {
        "Id": 1,
        "Notes": {
          "DPT": {
            "Melee": 2,
            "Ranged": 0,
            "Area": 0,
            "Single_Target": 2,
            "Constant": 2,
            "Burst": 0
          },
          "Support": {
            "Heal": 0,
            "Shield": 0,
            "Placeur": 0,
            "Buff_MP": 0,
            "Buff_AP": 1,
            "Buff_DI": 1,
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
            "Support_Melee": 1,
            "Support_Ranged": 0
          }
        },
        "Autonomy": 2,
        "Mobility": 1,
        "Roles": ["Ranged", "Area", "Single Target", "Burst", "Rall AP", "Buff AP", "Self Stabilized"]

      },
      "DPT Cog": {
        "Id": 2,
        "Notes": {
          "DPT": {
            "Melee": 2,
            "Ranged": 0,
            "Area": 0,
            "Single_Target": 2,
            "Constant": 2,
            "Burst": 0
          },
          "Support": {
            "Heal": 0,
            "Shield": 0,
            "Placeur": 0,
            "Buff_MP": 0,
            "Buff_AP": 1,
            "Buff_DI": 1,
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
            "Support_Melee": 1,
            "Support_Ranged": 0
          }
        },
        "Autonomy": 2,
        "Mobility": 1,
        "Roles": ["Ranged", "Area", "Constant", "Rall AP", "Buff AP", "Sub Placeur", "Self Stabilized"]
      },
      "Support": {
        "Id": 3,
        "Notes": {
          "DPT": {
            "Melee": 0,
            "Ranged": 0,
            "Area": 0,
            "Single_Target": 0,
            "Constant": 0,
            "Burst": 0
          },
          "Support": {
            "Heal": 0,
            "Shield": 1,
            "Placeur": 0,
            "Buff_MP": 0,
            "Buff_AP": 2,
            "Buff_DI": 2,
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
            "Support_Shield": 1,
            "Support_Single_Target": 1,
            "Support_Melee": 0,
            "Support_Ranged": 0
          }
        },
        "Autonomy": 1,
        "Mobility": 1,
        "Roles": ["Placeur", "Rall AP", "Buff AP", "Rall DI", "Self Stabilized", "Sub DPT"]
      }
    },
    "Elements": ["Fire", "Water", "Air"],
    "Mobility": 1
    },
  }
}

export const LANGUAGES = {
  FR: 'fr',
  EN: 'en'
};


export const TRANSLATIONS = {
  // Titres
  TEAM_BUILDER: {
      fr: 'Team Builder Wakfu',
      en: 'Wakfu Team Builder'
  },
  ROLES_CHOICE: {
      fr: 'Choix des rôles',
      en: 'Roles choice'
  },
  TEAM_COMPOSITION: {
      fr: 'Composition d\'équipe',
      en: 'Team composition'
  },
  TEAM_ROLES: {
      fr: 'Rôles d\'équipe',
      en: 'Team Roles'
  },
  ROLES_SUMMARY: {
      fr: 'Résumé des rôles',
      en: 'Summary of Roles'
  },

  // Messages d'avertissement
  DPT_SUPPORT_WARNING: {
      fr: 'Nombre de DPT supérieur aux Supports',
      en: 'Number of DPT greater than Supports'
  },
  MISSING_ELEMENTS: {
      fr: 'Manque d\'élément(s)',
      en: 'Lack of element(s)'
  },
  MULTI_ELEMENTS: {
      fr: 'DPT Multi Éléments',
      en: 'DPT Multi Elements'
  },
  NEED_STABILIZED: {
      fr: 'Besoin d\'une classe pouvant Stabiliser',
      en: 'Need Stabilized Class'
  },

  // Légende
  ROLE_FILLED: {
      fr: 'Rôle rempli par l\'équipe',
      en: 'Role filled by the team'
  },
  ROLE_IMPORTANT_MISSING: {
      fr: 'Rôle important non pris par l\'équipe',
      en: 'Important role not taken by the team'
  },
  ROLE_OPTIONAL_MISSING: {
      fr: 'Rôle optionnel non pris par l\'équipe',
      en: 'Optional role not taken by the team'
  },

  // Interface
  CHOOSE_ROLE: {
      fr: 'Choisir le rôle principal',
      en: 'Choose main role'
  },
  SIMP_MODE: {
      fr: 'Mode Simp : ',
      en: 'Simp Mode : '
  },
  ON: {
      fr: 'ACTIVÉ',
      en: 'ON'
  },
  OFF: {
      fr: 'DÉSACTIVÉ',
      en: 'OFF'
  },
  CLOSE: {
      fr: 'Fermer',
      en: 'Close'
  },

  // Damage types
  MELEE: {
      fr: 'Mêlée',
      en: 'Melee'
  },
  RANGED: {
      fr: 'Distance',
      en: 'Ranged'
  }
};


export function translate(key, language) {
  if (!TRANSLATIONS[key]) {
      console.warn(`Missing translation key: ${key}`);
      return key;
  }
  return TRANSLATIONS[key][language] || TRANSLATIONS[key]['en'];
}