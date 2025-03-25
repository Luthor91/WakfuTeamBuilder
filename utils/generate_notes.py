import pandas as pd
import os
import shutil
import gspread
from google.oauth2.service_account import Credentials

# Define the keys for the Notes dictionary
NOTES_KEYS = {
    "DPT": ["Melee", "Ranged", "Area", "Single_Target", "Constant", "Burst"],
    "Support": ["Heal", "Shield", "Placeur", "Buff_MP", "Buff_AP", "Buff_DI", "Protection"],
    "Entrave": ["Rall_MP", "Rall_AP", "Rall_DI", "Rall_Resistance", "Boringness"],
    "Team_Support": ["Support_Area", "Support_Heal", "Support_Shield", "Support_Single_Target", "Support_Melee", "Support_Ranged"]
}

EXCEL_ID = "11OnqMQkiQ_dymwbhPrwnQzVzRrugPcWs4upTTumQ9Rs"
CLIENT_SECRET_FILE = "client_secrets.json"
LOCAL_EXCEL_PATH = "utils/datas/Wak'Team.xlsx"
JS_FILE_PATH = 'docs/js/dataModel/class.js'
JS_BACKUP_PATH = 'utils/backup/utils_package.js.backup'


def authorize_google_sheets():
    try:
        scopes = [
            'https://www.googleapis.com/auth/spreadsheets',
            'https://www.googleapis.com/auth/drive'
        ]

        creds = Credentials.from_service_account_file('utils/' + CLIENT_SECRET_FILE, scopes=scopes)
        client = gspread.authorize(creds)
        print("Connexion établie avec succès à Google Sheets")
        return client
    except Exception as e:
        print(f"Erreur d'authentification Google Sheets: {type(e).__name__} - {str(e)}")
        raise

def read_google_sheet(client):
    try:
        print(f"Ouverture de la feuille avec l'ID: {EXCEL_ID}")
        sheet = client.open_by_key(EXCEL_ID).worksheet('Notes')
        print(f"Feuille trouvée : {sheet.title}")
        data = sheet.get_all_records()
        return pd.DataFrame(data)
    except Exception as e:
        print(f"Erreur de lecture de la feuille Google Sheets: {type(e).__name__} - {str(e)}")
        raise

def read_local_excel():
    try:
        print(f"Lecture du fichier Excel local : {LOCAL_EXCEL_PATH}")
        data = pd.read_excel(LOCAL_EXCEL_PATH, sheet_name='Notes')
        print("Lecture réussie depuis le fichier Excel local")
        return data
    except Exception as e:
        print(f"Erreur de lecture du fichier Excel local: {type(e).__name__} - {str(e)}")
        raise

def backup_js_file():
    try:
        shutil.copy2(JS_FILE_PATH, JS_BACKUP_PATH)
        print(f"Une sauvegarde a été créée à {JS_BACKUP_PATH}")
    except Exception as e:
        print(f"Erreur lors de la sauvegarde du fichier JS: {type(e).__name__} - {str(e)}")
        raise

try:
    try:
        # Tenter d'accéder à Google Sheets
        client = authorize_google_sheets()
        df = read_google_sheet(client)
    except Exception:
        print("Échec de l'accès à Google Sheets, tentative de récupération du fichier local.")
        # Si l'accès échoue, utiliser le fichier Excel local
        df = read_local_excel()

    class_data = {"Classes": {}}

    for index, row in df.iterrows():
        try:
            if pd.isna(row.iloc[0]):
                continue

            class_voie = str(row.iloc[0]).split('.')
            if len(class_voie) < 2:
                continue
            class_name, voie_name = class_voie[0], class_voie[1]

            if class_name not in class_data["Classes"]:
                class_data["Classes"][class_name] = {"Voies": {}}

            notes_structure = {category: {key: 0 for key in keys} for category, keys in NOTES_KEYS.items()}

            for col, value in zip(df.columns[1:], row.iloc[1:]):
                try:
                    value = 0 if pd.isna(value) or value == ' ' else float(value)
                    for category, keys in NOTES_KEYS.items():
                        if col in keys:
                            notes_structure[category][col] = value
                            break
                except ValueError:
                    print(f"Erreur de conversion de la valeur '{value}' en float pour la colonne '{col}'")
                    notes_structure[category][col] = 0

            class_data["Classes"][class_name]["Voies"][voie_name] = {"Notes": notes_structure}
        except Exception as e:
            print(f"Erreur lors du traitement de la ligne {index + 1}: {type(e).__name__} - {str(e)}")

    if not os.path.exists(JS_FILE_PATH):
        raise FileNotFoundError(f"Le fichier {JS_FILE_PATH} n'existe pas")
    backup_js_file()

except Exception as e:
    print(f"Erreur principale: {type(e).__name__} - {str(e)}")
