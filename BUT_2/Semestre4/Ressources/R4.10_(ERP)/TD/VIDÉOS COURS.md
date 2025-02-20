## VIDÉO 1 (Ma petite entreprise)

- **activité** : mesurable par : CA / nb unités produites / nb client
- augmentation volume activité = objectif principal d'une organisation en dev

- **performance** : mesurable par : résultat net / nb usagers satisfaits

- pour bonne croissance d'une organisation : activité et perf = en adéquation (augmentation act pas au détriment de la perf)

1. Toute petite organisation
2. Petite et moyenne organisation
	![[Pasted image 20250205081001.png]]
- règne du **management direct**
3. Organisation de taille intermédiaire
![[Pasted image 20250205081241.png]]

![[Pasted image 20250205081334.png]]
Donc problème de rentabilité et de qualité de services

Pour que mon **OTI** devienne une **GO** : 
- **révolution managériale**
- **standardisation des processus**
- **visions métiers transversales**

- **BPM** : Business processus management
	- permet de :
		- gérer l'entreprise de façon transversale pour casser l'isolement vertical
		- standardiser les processus de gestion pour vérifier les écarts entre le modèle cible et l'existant 
		- rendre + efficace la communication managériale en adoptant un langage commun
![[Pasted image 20250205082046.png]]

Pourquoi se lancer dans un projet de cartographie des processus :
- favoriser la formalisation et la communication
- améliorer efficacité perf et qualité
- être + réactif et agile face aux changements
- aligner le S.I sur les besoins stratégiques
- respecter les obligations règlementaires
- favoriser la collaboration inter organisationnelle
___
## VIDÉO 2 (BPM)

-  **processus** : ensemble d'activité corrélées ou interactives qui transforment des éléments d'entrée en éléments de sortie
![[Pasted image 20250205083248.png]]
- **ressource** : 
	- moyen informationnel, financier ou matériel
	- produite par une autre activité interne ou externe
	- pas de transformation
- **acteur** : 
	- personne, entité organisationnelle ou application
	- réalise une ou plusieurs activités
- **résultat** : 
	- concrétisation partielle ou finale convergeant vers l'objectif
	- évènement, ressource ou entrée pour une autre activité
- **évènement** : 
	- influence le déroulement d'une activité
	- pas de traitement, d'utilisation de ressources, de résultat


- **processus** : 
	- décrire les activités de l'entreprise selon une approche managériale et transversale
	- s'intéresse aux :
		- **objectifs**
		- **résultats**
		- **moyens**
- **procédure** : 
	- décrire comment accomplir un activité avec un niveau précis de détail opérationnel
	- s'intéresse au :
		- **mode opératoire**

- processus **opérationnels** (spécifiques au métier) :
	- cœur de métier de l'organisation
	- activité créatrice de valeur ajoutée
- processus **support** (+/- génériques) :
	- soutien les processus opérationnels
	- apport indirect de valeur
- processus **pilotage** :
	- qualité et performance
Pas d'indépendance entre les 3 types de processus mais une transversalité et collaboration

- **BPM** : Business Process M*

- business process management 
	- modéliser, piloter, optimiser les processus métier
	- accroitre :
		- efficacité
		- agilité
		- robustesse
- business process model
	- activité de cartographie / modélisation
	- à laide dune notation graphique comme BPMN
___
## VIDÉO 3 (BPMN)

- BPMN : Business Process Model Annotation  

1. Histoire et objectifs
	- V1 : 2004 BPMI (Business Process Model initiative)
	- V1* : 2008 OMG (Object Management Groupe)
	- Objectifs
		- expression commune des processus
		- implémentation et exécution
	- **V2.0.1 : 2013**
2. Modélisation des processus
	- Model 1 :
		- Diagramme d'orchestration
			![[Pasted image 20250205085935.png]]
	- Model 2 :
		- Diagramme de collaboration
			![[Pasted image 20250205090020.png]]
	- Model 3 : (moins utilisé)
		- Diagramme de conversation
	- Model 4 : (moins utilisé)
		- Diagramme de chorégraphie
	Pour décrire les différents modèles, BPMN définie des spécifications formelles en utilisant :
	- des symboles graphiques
	- une syntaxe
	- une sémantique
	- des règles d'usage
	pour garantir l'homogénéité dans l'expression et l'interprétation des modèles
	
	On va distinguer les processus : 
	- Organisationnel vs Exécutable
	- Existant vs Cible
	- Intra vs Inter organisationnel
3. Exécution des processus
	Le processus organisationnel (niveau métier), peut être transcrit en processus **exécutable** ou **applicatif** (niveau technique)
	![[Pasted image 20250205090852.png]]
	- BPEL : Business Process Execution Language
4. Les avantages de BPMN
	OMG propose une notation :
	- lisible, intuitive, flexible, évolutive
	- formelle, rigoureuse, exécutable
	- vivante, ouverte
___
## VIDÉO 4 (BPMN Les concepts de base)

1. Les activités
	- activité : action avec un début et une fin
		- représentée par un **rectangle aux bords arrondis**
		- 2 types d'activités 
			- tâches (atomique) réalisable par :
				- personne
				- machine
				- application
			- sous processus (re décomposable)
2. Les flux de séquences
	- formalisés par des flèches reliant deux concepts dans une logique d'ordonnancement (origine → destination)
3. Les évènements
	- décrivent quelque chose qui se passe et qui va :
		- déclencher
		- interrompre
		- influencer
		le déroulement du processus
	- 3 types d'évènements :
		- début
		- fin
		- intermédiaires
	- représenté par un cercle :
		- bordure fine → début
		- bordure épaisse → fin
		- bordure double → intermédiaires
	- comme activité, évènement ordonnancer par flux de séquence
**VOIR EXO APPLICATION (VSC → exo1.drawio)**
___
## VIDÉO 5 (BPMN Les jetons et instances)

1. La notion de **jetons**
	- **jeton** parcours le flux de séquence du processus en passant d'éléments en éléments
	- évènements **début** : génère un ou plusieurs jetons
	- évènements **fin** : consomme un ou plusieurs jetons
	- tant qu'il y a un jetons dans un processus, ce dernier n'est pas achevé
2. La notion d'**instance**
	- **instance** : chaque exécution du processus 
	- quand évènement de début déclenché, nouvelle instanciation du processus générée : **instanciation du modèle** 
___
## VIDÉO 6 (BPMN Les passerelles 1/2)
- représentée par un losange 
- contrôle du flux d'orchestration
- création de chemins parallèles ou alternatifs
![[Pasted image 20250207094427.png]]
- passerelle exclusive (losange avec une croix ou vide) (par défaut)
	- créer des chemins alternatifs dans un processus
	- utilisée de 2 façons
		- en mode division
			- diviser les flux en plusieurs chemins exclusifs
				![[Pasted image 20250207094641.png]]
			- basée sur une donnée connue en amont
				- rechercher
				- demander
				- calculer
				- décider
			- chemin par défaut : représenté avec un trait oblique sur le flux
		- en mode réunion des flux
			![[Pasted image 20250207095021.png]]
			- on peut quand même relier les flux sur une action mais pas recommandé
___
## VIDÉO 7 (BPMN Les évènements 1/2)
- on peut préciser la nature de l'évènement dans le cercle
- évènements de **début**
	- type **catch** (processus = destinataire)
	- **message** → enveloppe (démarre suite à un message de l'extérieur d'un processus)
	- **timer** → horloge (date / heure / périodicité)
	- **condition** → document rempli de texte (déclenchement d'un processus suivant une condition)
	- **multiple** → pentagone (un seul évènement démarre le processus) (voir ex)
	- **multiple parallèle** → + (tous les évènements démarrent le processus) (voir ex)
- évènements de **fin**
	- type **throw** (processus = émetteur)
	- **message** → enveloppe (envoie vers un autre processus)
- évènements **intermédiaires**
	- certains de type **catch** et d'autres de type **throw**
	- si de type throw, évènement déclenché par processus
	- si de type catch, processus en attente de l'évènement
	- **timer** →horloge (modélise délais d'attente / échéance entre 2 activités)
	- **message** → enveloppe (si envoie, enveloppe pleine, si réception, enveloppe vide)
	- **condition** → document (condition vraie pour poursuivre)
- cas particulier : évènements de type lien
	- élément d'aide graphique + qu'un véritable évènement
	- représenté par → pleine ou vide (fonctionne par paire, lien cible, flèche vide, lien source, flèche pleine)
___
## VIDÉO 8 (BPMN Les passerelles 2/2)
- passerelles parallèles (losange avec un +)
	- gère des flux de séquence en parallèle
	- en mode division (facultative, possible de diviser directement à partir de l'activité)
		- routes parallèles et fais continué le flux sur l'ensemble des chemins
	- en mode réunion
		- permet de synchroniser plusieurs chemins
		- passerelle attends tous les jetons de chaque chemin pour les réunir en un seul jetons
- passerelles inclusives (losange avec un rond)
	- en mode division
		- mixe entre exclusive et parallèle
		- peut générer flux parallèle uniquement si ils répondent à certaines conditions
		- le flux pourra continuer sur une, certaines ou toutes les branches
		- jetons généré pour toutes les conditions valides (initie éventuellement des routes parallèles)
	- en mode réunion
		- sert à fusionner une combinaison de chemins alternatifs et parallèles
		- synchroniser les flux en entrée qui ont été activés par un jeton
- passerelles exclusives évènementielles (losange avec pentagone dans cercle à double bordure) (voir ex)
	- exclusive : test conditions basé sur informations
	- ici, test conditions basé sur évènements
	- sert pour mettre le processus en attente de différents évènements
	- les flux en sorti de cette passerelle doivent chacun représenter un évènement intermédiaire de type **catch**
	- le premier évènement déclenché déterminera le chemin pris pour la suite du processus, les autres chemins pourront pas être suivis
___
## VIDÉO 9 (BPMN Les évènements 2/2)
- on peut lier un évènement **intermédiaire** de type **catch** directement sur l'**activité** = **évènement de frontière** (**flux d'exception**)
	- déclenchement de l'évènement durant l'activité aura des conséquence sur le comportement du processus (soit il interrompt l'activité en cours soit il ne l'interrompt pas) si pas interrompu bordure de l'évènement en **points tillés** 
- autres types évènements:
	- signal (triangle)
	- escalade (triangle flèche)
	- erreur (éclair)
	- annulation (croix vide)
	- compensation (double triangle)
___
## VIDÉO 10 (BPMN Les tâches)
- type d'activité qui ne peut être décomposée (atomique)
- réalisé par un acteur (humain et/ou application)
- en haut a gauche on peut ajouter un pictogramme pour dire sa nature
- **catch** → enveloppe vide (réception d'un message)
- **throw** → enveloppe pleine (émission d'un message)
- **utilisateur** → humain (réalisé par acteur humain interagissant avec un application informatique) humain + application
- **manuelle** → main (fait appel a aucune application ou moteur d'exécution informatique) humain seul
- **service** → engrenage (automatique, sans intervention humaine) résultats attendus
- **script** → script (automatisé mais construit spécifiquement pour la gestion du processus) définition du comportement
- **règle métier** → tableau (fais le lien avec un moteur de règles métier) décision DMN (desision model annotation)
- libellé d'une tâche = verbe
___
## VIDÉO 11 (BPMN Les sous processus)
- type d'activité composée (peut elle même être décrite suivant une séquence d'activité)
- **version réduite** : en bas au centre du rectangle un carré avec un +
- **version étendue** : on voit chaque activité du processus
![[Pasted image 20250210104036.png]]
- un sous processus peut intégrer lui aussi un sous processus
- processus parent = processus directement de niveau supérieur
- mieux vaut se limiter à 2 ou 3 niveaux maximum
- le libellé d'un sous processus est idéalement un nom (ex. préparer commande → préparation commande)
-  le flux de séquence ne peut pas passer au delà de la bordure du sous-processus
- les flux entrant et sortant sont connectés à la bordure
![[Pasted image 20250210104645.png]]
- le sous processus doit avoir un évènement de début et un ou plusieurs évènements de fin → l'évènement de début ne doit **pas avoir de symbole** car il symbolise la continuité du flux avec l'évènement parent
- sous processus utilisé quand il est nécessaire de décrire le comportement d'une activité à un niveau plus fin de détails
-  les sous processus servent donc à :
	- simplifier le processus pour un meilleure visualisation
	- modéliser le processus dans une approche top-down
	- modéliser une séquence d'activités impactée par le même évènement
___
## VIDÉO 12 (BPMN Les types de sous processus)
1. Les activités appelées
	- bordure **fine** : usage unique
	- bordure **épaisse** : usage réutilisable
	- pareil pour la tâche : épaisse = tâche globale
2. Les SSP parallèles et AD-HOC
	- sous processus **parallèle** :
		- toutes les activités démarrent en parallèles et peuvent être réalisées dans n'importe quel ordre **MAIS** elles doivent être toutes terminées pour terminer le processus
	- sous processus **AD-HOC** (avec un ~)
		- toutes les activités n'ont pas besoins d'être réalisées pour terminer le processus, il se termine quand l'acteur exécutant le processus décide qu'il est terminé (structure informelle d'activité → plus difficile d'automatiser le workflow)
3. Les SSP évènementielles
	- spécifiquement conçu pour pouvoir être instancier grâce à un évènement donné
	- leur comportement entrainent des exceptions par rapport aux règles générales des sous processus
	- pas de flux entrant ni sortant car ce sous processus est déclenché par un évènement spécifique
	- peut contenir un seul évènement déclencheur dont il faut spécifier la nature par le marqueur correspondant
	- peut ne pas se produire ou se produire une ou plusieurs fois
	- peut ou pas interrompre le processus principal
	- bordure en point tillés tout comme les évènement intermédiaires de frontière
	- dans son format réduit on inscrit en haut à gauche un marqueur spécifiant le type d'évènement déclencheur
___
## VIDÉO 13 (BPMN Boucle et multi instance)
1. Les activités "boucles" (en bas au centre flèche de boucle)
	- permet de **spécifier une répétition basée sur la vérification d'une condition** (quand condition fausse → passe à la suite sinon continue la boucle)
	- pour éviter boucle infini → **donner un nombre maximal d'itérations**
	- meilleure lisibilité → préciser la condition et l'éventuel plafond en **commentaire** de l'activité
2. Les activités multi-instances
	- permet d'exécuter une activité **un nombre de fois défini** (mis en commentaire)
	- les instances peuvent s'exécuter en **parallèle** (en même temps → **|||**  en bas au centre)
	- les instances peuvent s'exécuter en **séquence** (les unes après les autres → **||| à l'horizontal** en bas au centre)
	- dans le cas d'un sous processus, 2 marqueurs → celui de la boucle ou de la multi-instance et celui du sous processus (carre avec un +)
___
## VIDÉO 14 (BPMN Les couloirs et piscines)
3. Les piscines
	- représentation graphique d'un participant dans une collaboration qui peut faire référence à un **processus**
	- participant peut être **entité** ou **rôle**
	- **piscine** = boîte rectangulaire avec a gauche le nom du processus ou de l'entité/du rôle
		![[Pasted image 20250212172646.png]]
		![[Pasted image 20250212172704.png]]
	- piscine peut contenir explicitement le flux de séquence
		- peut être assimilée à un **conteneur de processus**
	- piscine peut aussi être représentée en tant que **boîte noire (vide)** → processus pas décrit + comportement compris de manière implicite
	- piscine peut être représentée horizontalement ou verticalement
	- on peut appliqué le même principe qu'aux multi instances (cf. juste au dessus) aux piscines et donc **||| en bas au centre**
	- ex. service de restauration
		![[Pasted image 20250212173737.png]]
4. Les couloirs
	- permet de représenter les **rôles** et les **responsabilités** dans un processus
	- **couloir** = **sous partition d'une piscine** représenté par un boîte rectangulaire
		![[Pasted image 20250212173626.png]]
	- utilisé pour organiser/catégoriser les activités au sein d'une piscine
	- peut être représentée horizontalement ou verticalement
	- ex. définir deux services
		![[Pasted image 20250212173827.png]]
	- quand on utilise les couloirs **ATTENTION** :
		- activité doit appartenir à **un et un seul couloir**
	- **couloir** = subdivision optionnel de la piscine pour présenter les **participants** du **processus**
	- possible de modéliser des **sous couloirs** :
		![[Pasted image 20250212174050.png]]
___
## VIDÉO 15 (BPMN Les flux de messages)
- **diagramme de collaboration** = collaboration entre 2 processus (échange entre 2 piscines ou plus)
- **flux de séquence ne peut pas sortir d'une piscine**
- **flux de message ne peut pas être interne à une piscine**
	![[Pasted image 20250212174347.png]]
- tous les évènements de flux ne peuvent pas émetteur ou destinataire de flux de messages
- **émetteur** = soit évènement message en émission de fin ou intermédiaire, soit une activité, une tâche ou un sous processus, soit une piscine de type boîte noire
- **récepteur** = pareil mais évènement de type catch de début ou intermédiaire
- ex .
	![[Pasted image 20250212174915.png]]
	ici la piscine du client est de type boîte noire
- les jetons ne circulent pas à travers les flux de message
- **un flux de message ne peut pas se substituer à un flux de séquence**
___
## VIDÉO 16 (BPMN Les artefacts et objets de données)
1. Les artefacts
	- **commentaire** → possède un lien d'association avec l'activité commentée
	- **regroupement** → rassembler graphiquement un ensemble d'éléments ayant une relation sémantique (n'a aucun impact sur le comportement du processus) → entouré de rectangle à bouts arrondis et point tillés
	- pas de contrainte de positionnement au regard des piscines (peut donc être inter piscines)
	- ex. 
		![[Pasted image 20250212180431.png]]
	- **artefacts** = précision/information supplémentaire graphique ou textuelle ajoutée au diagramme
	- on peut ajouter des artefacts personnalisés
	- ex.
		![[Pasted image 20250212180728.png]]
		ici l'artefact de type **terminal mobile** a été ajouté
2. Les objets de données
	-  objet de données →  **page cornée** avec en dessous de l'objet le son nom et potentiellement son état entre []
	- banque de donnée → **cylindre** formalise l'utilisation des données qui persistent en dehors du processus
	- objet de données = rattaché avec un lien d'association (flèche + points tillés) 
		- quand l'association pointe vers l'objet il s'agit d'une sortie (ajout ou modification de l'objet)
		- quand l'association pointe vers l'élément du flux il s'agit d'une entrée (consultation de l'objet)
	- ex.
		![[Pasted image 20250212181600.png]]
	- les objets de données **alourdissent** le diagramme donc utiliser si ça apporte un **réel intérêts à la modélisation et limiter au strict essentiel**
	- il est possible de spécifier une collection d'objet avec → **|||** en bas au centre de l'objet, c'est utile quand une activité créée ou manipule **plusieurs occurrence de l'objet**
___
## MÉMENTO BPMN
![[Pasted image 20250212182154.png]]