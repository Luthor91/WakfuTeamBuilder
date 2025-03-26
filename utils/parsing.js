const fs = require('fs');
const XLSX = require('xlsx');

// Chemins des fichiers
const excelFile = "utils/datas/Wak'Team.xlsx";
const javascriptFile = "docs/js/dataModel/class.js";

// Définition des clés de Notes
const NOTES_KEYS = {
    "DPT": ["Melee", "Ranged", "Area", "Single_Target", "Constant", "Burst"],
    "Support": ["Heal", "Shield", "Placeur", "Buff_MP", "Buff_AP", "Buff_DI", "Protection"],
    "Entrave": ["Rall_MP", "Rall_AP", "Rall_DI", "Rall_Resistance", "Boringness"],
    "Team_Support": ["Support_Area", "Support_Heal", "Support_Shield", "Support_Single_Target", "Support_Melee", "Support_Ranged"]
};

// Lire le fichier Excel
const workbook = XLSX.readFile(excelFile);
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const data = XLSX.utils.sheet_to_json(sheet, { defval: "" });

let classData = { "Classes": {} };

data.forEach(row => {
    let firstCol = Object.keys(row)[0];
    if (!row[firstCol]) return;

    let classVoie = String(row[firstCol]).split('.');
    if (classVoie.length < 2) return;

    let [className, voieName] = classVoie;

    if (!classData["Classes"][className]) {
        classData["Classes"][className] = { "Voies": {} };
    }

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

    if (!classData["Classes"][className]["Voies"][voieName]) {
        classData["Classes"][className]["Voies"][voieName] = {};
    }

    classData["Classes"][className]["Voies"][voieName]["Notes"] = notesStructure;
});

// Lire le fichier JavaScript et remplacer la constante
fs.readFile(javascriptFile, 'utf8', (err, jsContent) => {
    if (err) return console.error("Erreur de lecture du fichier JavaScript:", err);

    const pattern = /const\s+CLASS_DATA\s*=\s*(\{.*?\});/s;
    const match = jsContent.match(pattern);

    if (match) {
        const newJsonData = JSON.stringify(classData, null, 4);
        const updatedJsContent = jsContent.replace(pattern, `const CLASS_DATA = ${newJsonData};`);

        fs.writeFile(javascriptFile, updatedJsContent, 'utf8', err => {
            if (err) return console.error("Erreur lors de l'écriture du fichier JavaScript:", err);
            console.log("Fichier JavaScript mis à jour avec succès !");
        });
    } else {
        console.error("Erreur : constante CLASS_DATA introuvable dans le fichier JavaScript.");
    }
});