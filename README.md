Ce document fournit les instructions nécessaires pour utiliser le `Makefile` afin d'exécuter la page web en local.

## Prérequis

Avant de commencer, assurez-vous d'avoir les outils suivants installés sur votre machine :

- **[Git](https://git-scm.com/)** : Pour cloner le dépôt.
- **[Make](https://www.gnu.org/software/make/)** : Pour exécuter les commandes définies dans le `Makefile`.
- **[Python](https://www.python.org/)** : Python doit être installé pour exécuter un serveur local.

## Cloner le Dépôt

Clonez ce dépôt en utilisant Git :

```bash
git clone https://github.com/Luthor91/WakfuTeamBuilder.git
cd WakfuTeamBuilder
```

## Utilisation du Makefile
Le Makefile fourni dans ce projet est configuré pour lancer un serveur local pour servir les fichiers de la page web. Voici la commande disponible :

```bash
make serve
```

## Accéder à la Page Web
Une fois le serveur démarré, ouvrez votre navigateur web et allez à l'adresse suivante :

[http://127.0.0.1:8000](http://127.0.0.1:8000/)
