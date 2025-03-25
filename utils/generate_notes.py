import json
import pandas as pd
import re
import os
import shutil
import gspread
from oauth2client.service_account import ServiceAccountCredentials
from pydrive.auth import GoogleAuth
from pydrive.drive import GoogleDrive
import requests
from io import BytesIO

# Define the keys for the Notes dictionary
NOTES_KEYS = {
    "DPT": ["Melee", "Ranged", "Area", "Single_Target", "Constant", "Burst"],
    "Support": ["Heal", "Shield", "Placeur", "Buff_MP", "Buff_AP", "Buff_DI", "Protection"],
    "Entrave": ["Rall_MP", "Rall_AP", "Rall_DI", "Rall_Resistance", "Boringness"],
    "Team_Support": ["Support_Area", "Support_Heal", "Support_Shield", "Support_Single_Target", "Support_Melee", "Support_Ranged"]
}

EXCEL_ID = "11OnqMQkiQ_dymwbhPrwnQzVzRrugPcWs4upTTumQ9Rs"
_CLIENT_SECRET_FILE = "client_secret_650187062460-un92ukls0vjbi9b2l6l1v4m0i6om6hod.apps.googleusercontent.com.json"
CLIENT_SECRET_FILE = "client_secrets.json"

def get_data_from_gspread():
    """Try to access Google Sheets and return data."""
    try:
        # Configurer l'authentification
        scope = ['https://spreadsheets.google.com/feeds', 'https://www.googleapis.com/auth/drive']
        creds = ServiceAccountCredentials.from_json_keyfile_name('utils/' + CLIENT_SECRET_FILE, scope)
        client = gspread.authorize(creds)

        # Ouvrir la feuille
        sheet = client.open_by_key(EXCEL_ID).worksheet('Notes')
        data = sheet.get_all_records()
        return pd.DataFrame(data)
    except Exception as e:
        print(f"Erreur lors de l'accès à Google Sheets : {e}")
        return None

def get_data_from_local_excel():
    """Return data from the local Excel file."""
    try:
        local_excel_path = 'utils/datas/Wak\'Team.xlsx'
        df = pd.read_excel(local_excel_path)
        print(f"Fichier local '{local_excel_path}' chargé avec succès.")
        return df
    except Exception as e:
        print(f"Erreur lors de la lecture du fichier Excel local : {e}")
        return None


# Tenter de récupérer les données depuis Google Sheets
df = get_data_from_gspread()

# Si l'accès à Google Sheets échoue, récupérer les données depuis le fichier local
if df is None:
    df = get_data_from_local_excel()

# Vérifier si les données sont disponibles
if df is not None:
    # Initialize the JSON structure
    class_data = {
        "Classes": {}
    }

    # Iterate over the rows in the DataFrame
    for index, row in df.iterrows():
        # Utiliser iloc pour accéder à la première colonne
        if pd.isna(row.iloc[0]):
            continue

        class_voie = str(row.iloc[0]).split('.')
        if len(class_voie) < 2:
            continue
        class_name = class_voie[0]
        voie_name = class_voie[1]

        if class_name not in class_data["Classes"]:
            class_data["Classes"][class_name] = {
                "Voies": {}
            }

        # Initialize the Notes structure with default values
        notes_structure = {category: {key: 0 for key in keys} for category, keys in NOTES_KEYS.items()}

        # Update the Notes structure with values from the DataFrame
        for col, value in zip(df.columns[1:], row.iloc[1:]):
            if pd.isna(value) or value == ' ':
                value = 0
                
            # Determine which category this column belongs to
            found_category = None
            for category, keys in NOTES_KEYS.items():
                if col in keys:
                    found_category = category
                    break
                    
            if found_category:
                try:
                    notes_structure[found_category][col] = float(value)
                except ValueError:
                    print(f"Warning: Could not convert value '{value}' to float for column '{col}'")
                    notes_structure[found_category][col] = 0
            else:
                print(f"Warning: Column '{col}' not found in any category")

        if voie_name not in class_data["Classes"][class_name]["Voies"]:
            class_data["Classes"][class_name]["Voies"][voie_name] = {}

        class_data["Classes"][class_name]["Voies"][voie_name]["Notes"] = notes_structure

    # Lire le fichier JavaScript
    js_file_path = 'docs/js/dataModel/class.js'
    if not os.path.exists(js_file_path):
        raise FileNotFoundError(f"Le fichier {js_file_path} n'existe pas")

    # Faire une sauvegarde du fichier original
    backup_path = js_file_path + '.backup'
    shutil.copy2(js_file_path, backup_path)
    print(f"Une sauvegarde a été créée à {backup_path}")

    with open(js_file_path, 'r', encoding='utf-8') as js_file:
        js_content = js_file.read()

    # Compteur de modifications
    modifications_count = 0

    # Stratégie de remplacement direct des Notes en utilisant la position entre "Id" et "Autonomy"
    for class_name, class_info in class_data["Classes"].items():
        for voie_name, voie_info in class_info["Voies"].items():
            # Convertir la structure Notes en chaîne formatée pour JavaScript
            # Utiliser l'indentation et le formatage correspondant à votre fichier
            notes_js = json.dumps(voie_info["Notes"], indent=4)
            # Ajuster le formatage pour correspondre au style du fichier JS
            notes_js = notes_js.replace('"', "'")

            # Créer un modèle regex pour trouver la section entre Id et Autonomy
            pattern = re.compile(
                r'(["\']' + re.escape(class_name) + r'["\'][^{]*?{[^{]*?["\']Voies["\'][^{]*?{[^{]*?["\']' + 
                re.escape(voie_name) + r'["\'][^{]*?{[^{]*?["\']Id["\'][^,]*?,\s*?["\']Notes["\']:?\s*?{)([\s\S]*?)(["\']Autonomy["\'])', 
                re.DOTALL
            )

            match = pattern.search(js_content)
            if match:
                note_section = match.group(2)
                open_braces = 1
                close_braces = 0
                end_pos = 0

                for i, char in enumerate(note_section):
                    if char == '{':
                        open_braces += 1
                    elif char == '}':
                        close_braces += 1
                    if open_braces == close_braces:
                        end_pos = i + 1
                        break

                if end_pos > 0:
                    notes_section_to_replace = note_section[:end_pos]
                    if notes_section_to_replace.strip().endswith('}'):
                        updated_content = js_content[:match.start(2)] + notes_js[1:-1] + '}, ' + js_content[match.start(3)-1:]
                        js_content = updated_content
                        modifications_count += 1
                        print(f"Section Notes pour {class_name}.{voie_name} mise à jour")

                    else:
                        print(f"Avertissement: La section Notes pour {class_name}.{voie_name} ne se termine pas correctement")
                else:
                    print(f"Avertissement: Impossible de déterminer la fin de la section Notes pour {class_name}.{voie_name}")
            else:
                alt_pattern = re.compile(
                    r'(["\']' + re.escape(class_name) + r'["\'].*?["\']Voies["\'].*?["\']' + 
                    re.escape(voie_name) + r'["\'].*?["\']Notes["\']:?\s*?{)([\s\S]*?)(},?\s*?["\']Autonomy["\'])', 
                    re.DOTALL
                )

                alt_match = alt_pattern.search(js_content)
                if alt_match:
                    updated_content = js_content[:alt_match.start(2)] + notes_js[1:-1] + js_content[alt_match.end(2)-2:]
                    js_content = updated_content
                    modifications_count += 1
                    print(f"Section Notes pour {class_name}.{voie_name} mise à jour (pattern alternatif)")
                else:
                    print(f"Avertissement: Section Notes pour {class_name}.{voie_name} non trouvée")
    
    # Réécriture du fichier avec les modifications
    with open(js_file_path, 'w', encoding='utf-8') as js_file:
        js_file.write(js_content)
