**Fiche de Cours : TD/TP Angular - Principes Fondamentaux**

# **Étape 1 : Prérequis et Installation**

- **Installation de NodeJS et Npm** (si nécessaire) : [https://nodejs.org/en/](https://nodejs.org/en/)
- **Installation d'Angular CLI** :
    
    ```sh
    npm install --location=global @angular/cli
    ```
    

# **Étape 2 : Création d'un Projet Angular**

- **Créer un projet Angular** :
    
    ```sh
    ng new AnguCD --style=scss --skip-tests=true --no-standalone
    ```
    
- **Ouvrir le projet dans VS Code**
- **Lancer le serveur de développement** :
    
    ```sh
    cd AnguCD
    ng serve
    ```
    
    Accéder à l’application via : [http://localhost:4200](http://localhost:4200/)

# **Étape 3 : Création de Composants**

- **Créer un composant** :
    
    ```sh
    ng generate component CD
    ```
    
    Fichiers créés :
    - `cd.component.html` (template)
    - `cd.component.scss` (style)
    - `cd.component.ts` (code TypeScript)
- **Créer un composant Header** :
    
    ```sh
    ng generate component header
    ```
    
- **Modifier `app.component.html`** pour intégrer les composants :
    
    ```html
    <app-header></app-header>
    <app-cd></app-cd>
    ```
    

# **Étape 4 : Gestion des Données et Dynamisation**

- **Créer un modèle CD** :
    
    1. **Créer un dossier `models/` dans `src/app/`**
    2. **Créer un fichier `cd.model.ts` et ajouter le modèle :**
        
        ```typescript
        export class CD {
          constructor(
            public id: number,
            public title: string,
            public artist: string,
            public quantity: number
          ) {}
        }
        ```
        
- **Créer un composant ListCD** :
    
    ```sh
    ng generate component ListCD
    ```
    
    > Angular convertira automatiquement `ListCD` en `list-cd`.
    
- **Initialiser les données dans `list-cd.component.ts`** :
    
    ```typescript
    import { Component, OnInit } from '@angular/core';
    import { CD } from '../models/cd.model';
    
    @Component({
      selector: 'app-list-cd',
      templateUrl: './list-cd.component.html',
      styleUrls: ['./list-cd.component.scss']
    })
    export class ListCDComponent implements OnInit {
      listcd: CD[] = [];
    
      ngOnInit() {
        this.listcd = [
          new CD(1, 'Album A', 'Artiste X', 10),
          new CD(2, 'Album B', 'Artiste Y', 5),
          new CD(3, 'Album C', 'Artiste Z', 0)
        ];
      }
    }
    ```
    

# **Étape 5 : Affichage Dynamique avec les Directives Angular**

- **Modifier `list-cd.component.html` pour afficher les CDs** :
    
    ```html
    <div class="list-cd">
      <ng-container *ngFor="let unCd of listcd">
        <app-cd *ngIf="unCd.quantity > 0" [Cd]="unCd"></app-cd>
      </ng-container>
    </div>
    ```
    
- **Modifier `cd.component.ts` pour récupérer les données en entrée** :
    
    ```typescript
    import { Component, Input } from '@angular/core';
    import { CD } from '../models/cd.model';
    
    @Component({
      selector: 'app-cd',
      templateUrl: './cd.component.html',
      styleUrls: ['./cd.component.scss']
    })
    export class CDComponent {
      @Input() Cd!: CD;
    }
    ```
    
- **Modifier `cd.component.html` pour afficher les infos du CD** :
    
    ```html
    <div class="cd">
      <h2>{{ Cd.title | uppercase }}</h2>
      <p>Artiste : {{ Cd.artist }}</p>
      <p>Quantité : {{ Cd.quantity }}</p>
      <button (click)="onAddCD()">Ajouter un CD</button>
    </div>
    ```
    
- **Ajouter la méthode `onAddCD` dans `cd.component.ts`** :
    
    ```typescript
    onAddCD() {
      this.Cd.quantity++;
    }
    ```
    

# **Étape 6 : Stylisation et Finalisation**

- **Appliquer du style dans `list-cd.component.scss`** :
    
    ```scss
    .list-cd {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
    ```
    
- **Appliquer du style dans `cd.component.scss`** :
    
    ```scss
    .cd {
      border: 1px solid #ccc;
      padding: 10px;
      text-align: center;
    }
    ```
    

# **Résumé des Commandes Principales**

| Commande                                                              | Description             |
| --------------------------------------------------------------------- | ----------------------- |
| `npm install --location=global @angular/cli`                          | Installer Angular CLI   |
| `ng new <nomDuProjet> --style=scss --skip-tests=true --no-standalone` | Créer un projet Angular |
| `cd <nomDuProjet> && ng serve`                                        | Lancer l’application    |
| `ng generate component <nomDuComposant>`                              | Générer un composant    |
| `ng build`                                                            | Compiler le projet      |
| `ng test`                                                             | Lancer les tests        |
