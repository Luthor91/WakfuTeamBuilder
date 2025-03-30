const fs = require('fs');
const XLSX = require('xlsx');

// Chemins des fichiers
const excelFile = "utils/datas/Wak'Team.xlsx";
const javascriptFile = "docs/js/dataModel/class.js";
const outputJavascriptFile = "docs/js/dataModel/class.js";

// Définition des clés de Notes
const NOTES_KEYS = {
    "DPT": ["Melee", "Ranged", "Area", "Single_Target", "Constant", "Burst"],
    "Support": ["Heal", "Shield", "Positioning", "Buff_MP", "Buff_AP", "Buff_DI", "Protection"],
    "Entrave": ["Rall_MP", "Rall_AP", "Rall_DI", "Rall_Resistance", "Boringness"],
    "Team_Support": ["Support_Area", "Support_Heal", "Support_Shield", "Support_Single_Target", "Support_Melee", "Support_Ranged"]
};

// Lire le fichier Excel
const workbook = XLSX.readFile(excelFile);

const sheetNotes = "Notes";
const sheetRoles = "Rôles";
const dataNotes = XLSX.utils.sheet_to_json(sheetNotes, { defval: "" });
const dataRoles = XLSX.utils.sheet_to_json(sheetRoles, { defval: "" });

// Lire le fichier JavaScript et extraire CLASS_DATA
fs.readFile(javascriptFile, 'utf8', (err, jsContent) => {
    if (err) return console.error("Erreur de lecture du fichier JavaScript:", err);

    const pattern = /const\s+CLASS_DATA\s*=\s*(\{.*?\});/s;
    const match = jsContent.match(pattern);

    if (!match) {
        return console.error("Erreur : constante CLASS_DATA introuvable dans le fichier JavaScript.");
    }

    // Nettoyer la chaîne JSON avant de la parser (enlever les trailing commas)
    let cleanJsonString = match[1]
        .replace(/,\s*(\}|\])/g, '$1');  // Enlève les virgules avant } ou ]

    let existingClassData;
    try {
        // Parser les données JSON nettoyées
        existingClassData = JSON.parse(cleanJsonString);
    } catch (e) {
        return console.error("Erreur de parsing du JSON existant :", e);
    }

    // Mise à jour des notes
    dataNotes.forEach(row => {
        let firstCol = Object.keys(row)[0];
        if (!row[firstCol]) return;

        let classVoie = String(row[firstCol]).split('.');
        if (classVoie.length < 2) return;

        let [className, voieName] = classVoie;

        if (!existingClassData["Classes"]?.[className]?.["Voies"]?.[voieName]) return;

        let notesStructure = {};
        for (let category in NOTES_KEYS) {
            notesStructure[category] = {};
            NOTES_KEYS[category].forEach(key => {
                notesStructure[category][key] = 0;
            });
        }

        Object.entries(row).forEach(([col, value]) => {
            if (col === firstCol) return;
            if (!value || value === " ") value = 0;

            let foundCategory = Object.keys(NOTES_KEYS).find(category => NOTES_KEYS[category].includes(col));
            if (foundCategory) {
                notesStructure[foundCategory][col] = parseFloat(value) || 0;
            }
        });

        // Mettre à jour uniquement les "Notes"
        existingClassData["Classes"][className]["Voies"][voieName]["Notes"] = notesStructure;
    });

    // Mise à jour des roles
    dataRoles.forEach(row => {
        let firstCol = Object.keys(row)[0];
        let secondCol = Object.keys(row)[1];
        if (!row[firstCol] || !row[secondCol]) return;
    
        let classVoie = String(row[firstCol]).split('.');
        if (classVoie.length < 2) return;
    
        let [className, voieName] = classVoie;
    
        if (!existingClassData["Classes"]?.[className]?.["Voies"]?.[voieName]) return;
    
        // Transformation de la liste de mots en tableau JSON
        let rolesList = row[secondCol].split(',').map(mot => mot.trim()).filter(mot => mot !== "");
    
        // Mise à jour des "Roles" avec la liste des mots
        existingClassData["Classes"][className]["Voies"][voieName]["Roles"] = rolesList;
    });

    // Convertir en JSON et générer un JSON propre sans trailing commas
    let newJsonData = JSON.stringify(existingClassData, null, 4);

    // Remplacer CLASS_DATA mis à jour dans le fichier JS
    const updatedJsContent = jsContent.replace(pattern, `const CLASS_DATA = ${newJsonData};`);

    // Sauvegarder le fichier JavaScript mis à jour
    fs.writeFile(outputJavascriptFile, updatedJsContent, 'utf8', err => {
        if (err) return console.error("Erreur lors de l'écriture du fichier JavaScript:", err);
        console.log("Fichier JavaScript mis à jour avec succès !");
    });
});