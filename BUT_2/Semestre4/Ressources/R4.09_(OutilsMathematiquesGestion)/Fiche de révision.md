**Fiche de Synthèse : Outils Mathématiques de Gestion**
## 1. La Valeur et le Temps

### Capitalisation et Actualisation

- **Capitalisation** : Calculer combien vaudra une somme d’argent dans le futur en tenant compte des intérêts.
- **Actualisation** : Déterminer la valeur actuelle d’une somme future.

### Intérêts Simples et Composés

- **Intérêts simples** : Calculés uniquement sur le capital initial.
    - _Formule_ : VA = C (1 + n * t)
    - _Exemple_ : 100 € placés à 2% pendant 3 ans → 100 * (1 + 3 * 0.02) = 106 €
- **Intérêts composés** : Calculés sur le capital et les intérêts précédents.
    - _Formule_ : VA = C (1 + t)^n
    - _Exemple_ : 100 € à 2% pendant 3 ans → 100 * (1.02)^3 = 106.12 €

## 2. Conversion des Taux

- **Taux proportionnel** (intérêts simples) : taux divise par le nombre de périodes.
    - _Exemple_ : taux annuel de 6% → taux mensuel proportionnel = 6% / 12 = 0.5% par mois.
- **Taux équivalent** (intérêts composés) :
    - _Formule_ : (1 + téq)^k = (1 + t)^1
    - _Exemple_ : taux annuel de 6% → taux mensuel équivalent = (1.06)^(1/12) - 1 ≈ 0.487%.

## 3. Placement d'une Somme d'Argent

- **Valeur acquise** : VA = C (1 + t)^n
- **Valeur actuelle** : C = VA / (1 + t)^n
- **Durée de placement** : n = log(VA / C) / log(1 + t)

## 4. Placement d'une Suite de Sommes Constantes

- **Valeur acquise d'une suite** :
    - _Formule_ : VA = a * [(1 + t)^n - 1] / t
    - _Exemple_ : 1000 € placés chaque année à 3% pendant 5 ans.
- **Valeur actuelle d'une rente** :
    - _Formule_ : C = a * [1 - (1 + t)^-n] / t
    - _Exemple_ : Combien placer chaque année pour obtenir 50 000 € en 10 ans à 4% ?

## 5. Remboursement d'Emprunt

- **Emprunt à annuités constantes** :
    - _Annuité_ : A = C * t / [1 - (1 + t)^-n]
    - _Tableau d’amortissement_ avec calcul des intérêts et du capital restant.
- **Emprunt in fine** : Intérêts payés chaque période, capital remboursé en une seule fois à la fin.

## 6. Rentabilité des Investissements

- **Valeur actuelle nette (VAN)** : VAN = ∑ (flux actualisés) - capital investi.
- **Taux de rentabilité interne (TRI)** : taux où la VAN est nulle.
- **Délai de récupération** : Nombre de périodes nécessaires pour couvrir l'investissement.
- **Indice de profitabilité** : ∑ (flux actualisés) / capital investi.

---

**Exercices avec Corrections**

### Exercice 1 : Intérêts Simples et Composés

1. Pierre place 5000 € à 4% pendant 5 ans.
    - a) Calculer les intérêts simples.
    - b) Calculer les intérêts composés.

_Correction :_

- a) VA = 5000 * (1 + 5 * 0.04) = 6000 €.
- b) VA = 5000 * (1.04)^5 = 6083.26 €.

### Exercice 2 : Taux Proportionnel et Equivalent

2. Un taux annuel de 8% est donné.
    - a) Calculer le taux mensuel proportionnel.
    - b) Calculer le taux mensuel équivalent.

_Correction :_

- a) 8% / 12 = 0.667% par mois.
- b) (1.08)^(1/12) - 1 ≈ 0.643% par mois.

### Exercice 3 : Emprunt à Annuités Constantes

3. Un emprunt de 20 000 € sur 5 ans à 6% d’intérêt annuel.
    - a) Calculer l’annuité.
    - b) Déterminer le capital restant après 3 ans.

_Correction :_

- a) A = 20000 * 0.06 / [1 - (1.06)^-5] = 4752.06 €.
- b) CRD après 3 ans : 20000 * (1.06)^3 - 4752.06 * [(1.06)^3 - 1] / 0.06 = 8 897.84 €.

### Exercice 4 : VAN et TRI

4. Un projet coûte 50 000 € et génère 15 000 € par an pendant 4 ans. Taux d’actualisation = 5%.
    - a) Calculer la VAN.
    - b) Trouver le TRI.

_Correction :_

- a) VAN = ∑ (15000 / (1.05)^t) - 50000 ≈ 5678.63 €.
- b) TRI par interpolation ≈ 7.2%.

Ces exercices et leurs corrections te permettront de bien t'entraîner pour l'examen !