PYTHON := python3.11
PORT := 8000

PATH_SRC := utils/src/js
EXCEL_FILE := utils/data.xlsx
PARSING_SCRIPT := "$(PATH_SRC)/parsing.js"
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

update_data:
	@echo "Running Parsing script..."
	node $(PARSING_SCRIPT)

# Cible pour configurer l'environnement virtuel
setup_npm:
	cd $(PATH_SRC) && npm install xlsx

# Cible pour nettoyer les fichiers générés
clean:
	@echo "Cleaning up..."