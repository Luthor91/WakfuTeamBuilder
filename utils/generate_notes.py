import json
import pandas as pd

# Load the Excel file
excel_file = "./utils/Wak'Team.xlsx"
df = pd.read_excel(excel_file, sheet_name='Notes', engine='openpyxl')

# Define the keys for the Notes dictionary
NOTES_KEYS = {
    "DPT": ["Melee", "Ranged", "Area", "Single_Target", "Constant", "Burst"],
    "Support": ["Heal", "Shield", "Placeur", "Buff_MP", "Buff_AP", "Buff_DI", "Protection"],
    "Entrave": ["Rall_MP", "Rall_AP", "Rall_DI", "Rall_Resistance", "Boringness"],
    "Team_Support": ["Support_Area", "Support_Heal", "Support_Shield", "Support_Single_Target", "Support_Melee", "Support_Ranged"]
}

# Initialize the JSON structure
class_data = {
    "Classes": {}
}

# Iterate over the rows in the DataFrame
for index, row in df.iterrows():
    class_voie = row[0].split('.')
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
    for col, value in zip(df.columns[1:], row[1:]):
        if pd.isna(value):
            value = 0
        for category, keys in NOTES_KEYS.items():
            if col in keys:
                notes_structure[category][col] = value
    
    class_data["Classes"][class_name]["Voies"][voie_name] = {
        "Notes": notes_structure
    }

# Save the JSON structure to a file
with open('./utils/class_data.json', 'w') as json_file:
    json.dump(class_data, json_file, indent=4)

print("JSON file has been generated successfully.")

# Load the JavaScript file and replace the classData variable
with open('./docs/ext/utils_package.js', 'r') as js_file:
    js_content = js_file.read()

# Find the start and end of the classData variable
start_index = js_content.find('export const classData = {')
end_index = js_content.find('};', start_index) + 2

# Replace the old classData with the new one
new_js_content = js_content[:start_index] + 'export const classData = ' + json.dumps(class_data, indent=4) + ';' + js_content[end_index:]

# Save the updated JavaScript file
with open('./docs/ext/utils_package.js', 'w') as js_file:
    js_file.write(new_js_content)

print("JavaScript file has been updated successfully.")
