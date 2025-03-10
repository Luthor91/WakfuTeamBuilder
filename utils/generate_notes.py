import json
import pandas as pd
import re
import os
import shutil
import gspread
from oauth2client.service_account import ServiceAccountCredentials
from google.oauth2.service_account import Credentials
from googleapiclient.discovery import build
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
CLIENT_SECRET_FILE = "client_secrets.json"


def authorize_google_sheets():

    try:
        scopes = [
            'https://www.googleapis.com/auth/spreadsheets',
            'https://www.googleapis.com/auth/drive'
        ]

        creds = Credentials.from_service_account_file('utils/' + CLIENT_SECRET_FILE, scopes=scopes)

        # Autoriser l'accès à Google Sheets
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



def backup_js_file(js_file_path):
    try:
        backup_path = js_file_path + '.backup'
        shutil.copy2(js_file_path, backup_path)
        print(f"Une sauvegarde a été créée à {backup_path}")
    except Exception as e:
        print(f"Erreur lors de la sauvegarde du fichier JS: {type(e).__name__} - {str(e)}")
        raise

try:
    client = authorize_google_sheets()
    df = read_google_sheet(client)
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

    js_file_path = './docs/ext/utils_package.js'
    if not os.path.exists(js_file_path):
        raise FileNotFoundError(f"Le fichier {js_file_path} n'existe pas")
    backup_js_file(js_file_path)
except Exception as e:
    print(f"Erreur principale: {type(e).__name__} - {str(e)}")
