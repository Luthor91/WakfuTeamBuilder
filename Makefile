PYTHON := python3
PORT := 8000

VENV := venv
EXCEL_FILE := utils/data.xlsx
PARSING_SCRIPT := utils/js/parsing.js
OUTPUT_JSON := utils/class_data.json

GIT_REPO := https://github.com/Luthor91/WakfuTeamBuilder.git

.PHONY: serve

# Commande pour démarrer
serve:
	@echo "Starting server on http://127.0.0.1:$(PORT)"
	$(PYTHON) -m http.server $(PORT)

deploy: update_data
	@git add .
	@git commit -m "update"
	@git push $(GIT_REPO)

update_data: setup_venv
	@echo "Running Parsing script..."
	node $(PARSING_SCRIPT)

# Cible pour configurer l'environnement virtuel
setup_venv:
	npm install xlsx

# Cible pour supprimer l'environnement virtuel
clean_venv:
	@echo "Removing virtual environment..."
	rm -rf $(VENV)

# Cible pour nettoyer les fichiers générés
clean:
	@echo "Cleaning up..."
	rm -rf $(VENV) $(OUTPUT_JSON)
