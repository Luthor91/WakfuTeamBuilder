# Définir la version de Python à utiliser
PYTHON := python3
PACKAGE := requests 

# Définir le port sur lequel le serveur sera lancé
PORT := 8000

# Définir l'URL du dépôt Git
GIT_REPO := https://github.com/Luthor91/aboutme.git

# Cible par défaut
.PHONY: serve freeze install update git-update

# Commande pour démarrer un serveur HTTP simple
serve:
	@echo "Starting server on http://127.0.0.1:$(PORT)"
	$(PYTHON) -m http.server $(PORT)

freeze:
	. venv/bin/activate && \
	$(PYTHON) -m pip install $(PACKAGE) && \
	$(PYTHON) -m pip freeze > requirements.txt

install:
	$(PYTHON) -m venv venv
	./venv/bin/pip install -r requirements.txt

update:
	$(PYTHON) -m venv venv
	./venv/bin/pip install -r requirements.txt
	. venv/bin/activate
	$(PYTHON) scripts/fetch_datas.py

deploy: 
	@git add .
	@git commit -m "update news data"
	@git push $(GIT_REPO)
