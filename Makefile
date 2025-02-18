PYTHON := python3
PORT := 8000

GIT_REPO := https://github.com/Luthor91/WakfuTeamBuilder.git

.PHONY: serve

# Commande pour démarrer
serve:
	@echo "Starting server on http://127.0.0.1:$(PORT)"
	$(PYTHON) -m http.server $(PORT)

deploy: 
	@git add .
	@git commit -m "update"
	@git push $(GIT_REPO)
