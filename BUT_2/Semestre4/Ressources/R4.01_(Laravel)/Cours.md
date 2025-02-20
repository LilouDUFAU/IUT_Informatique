# 🚀 Cours Laravel : Commandes Artisan et Explications

Laravel est un framework PHP puissant qui simplifie le développement d'applications web. Il repose sur une architecture **MVC (Modèle-Vue-Contrôleur)** et fournit un outil en ligne de commande appelé **Artisan**.

---

## 📌 1. Installer Laravel
Avant de commencer, assure-toi d’avoir **PHP, Composer** et une base de données installés.

### **Installation de Laravel via Composer**
```bash
composer create-project --prefer-dist laravel/laravel nom_du_projet
```
🔹 **Que fait cette commande ?** Elle crée un nouveau projet Laravel dans le dossier `nom_du_projet`.

---

## 🎯 2. Lancer le Serveur de Développement
```bash
php artisan serve
```
🔹 **Pourquoi ?** Cette commande démarre un serveur web local pour tester l’application sur **http://127.0.0.1:8000**.

---

## 🔧 3. Configuration et Clé d'Application
### **Générer la clé d’application**
```bash
php artisan key:generate
```
🔹 Cette clé est utilisée pour chiffrer les données et sécuriser l’application.

### **Effacer le cache de configuration**
```bash
php artisan config:clear
```
🔹 Si `.env` est modifié et que les changements ne sont pas pris en compte, cette commande vide le cache de configuration.

---

## 📂 4. Gérer les Modèles et Migrations (Base de Données)
### **Créer un modèle avec migration**
```bash
php artisan make:model NomModel -m
```
🔹 `NomModel` : Nom du modèle (ex : `Article`).
🔹 `-m` : Génère aussi une migration pour la base de données.

### **Créer une migration manuellement**
```bash
php artisan make:migration create_nom_table --create=nom_table
```
🔹 Génère un fichier pour créer une table dans la base de données.

### **Appliquer les migrations**
```bash
php artisan migrate
```
🔹 Applique toutes les migrations en attente.

### **Annuler la dernière migration**
```bash
php artisan migrate:rollback
```
🔹 Annule la dernière migration appliquée.

---

## 📬 5. Gérer les Contrôleurs
### **Créer un contrôleur**
```bash
php artisan make:controller NomController
```
🔹 Un contrôleur gère la logique entre la base de données et la vue.

### **Créer un contrôleur RESTful**
```bash
php artisan make:controller NomController --resource
```
🔹 Génère un contrôleur avec les méthodes CRUD (`index`, `store`, `show`, `update`, `destroy`).

---

## 📌 6. Gérer les Routes
### **Lister toutes les routes disponibles**
```bash
php artisan route:list
```
🔹 Affiche toutes les routes définies dans l’application.

---

## 🏗 7. Gérer les Vues avec Blade
### **Créer un fichier Blade**
Dans **resources/views**, crée un fichier **welcome.blade.php** et ajoute du contenu :
```html
<!DOCTYPE html>
<html>
<head>
    <title>Bienvenue</title>
</head>
<body>
    <h1>Bienvenue sur Laravel</h1>
</body>
</html>
```

---

## 🏗 8. Gérer les Factories et Seeders (Données de Test)
### **Créer un seeder**
```bash
php artisan make:seeder NomSeeder
```
🔹 Les seeders permettent d'insérer des données fictives dans la base.

### **Exécuter un seeder**
```bash
php artisan db:seed --class=NomSeeder
```
🔹 Remplit la base avec les données du fichier `NomSeeder.php`.

---

## 🎭 9. Gérer les Middleware
### **Créer un middleware**
```bash
php artisan make:middleware NomMiddleware
```
🔹 Les middlewares filtrent et gèrent les requêtes avant qu’elles atteignent les contrôleurs.

---

## 🚀 10. Nettoyage et Débogage
### **Vider le cache de l’application**
```bash
php artisan cache:clear
```
🔹 Supprime le cache pour éviter des problèmes d'affichage.

### **Vider le cache des vues compilées**
```bash
php artisan view:clear
```
🔹 Régénère les vues Blade si elles ne se mettent pas à jour.

---

## 🔥 Conclusion
Ce guide couvre les commandes Artisan essentielles pour bien débuter avec Laravel. Tu peux approfondir chaque sujet en explorant la documentation officielle ou en pratiquant. 🚀
