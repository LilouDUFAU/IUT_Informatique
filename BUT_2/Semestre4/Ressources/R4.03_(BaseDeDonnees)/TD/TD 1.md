## Partie 1 
Question 1 : Créer la table EMP-OBJ (NumEmp, NomComplet, Salaire, Coordonnee) sachant que l'attribut Coordonnee est un type composé de : Ville, Cp, Telephone et Fax.

```sql 
CREATE OR REPLACE TYPE t_coord AS OBJECT ( Ville VARCHAR2(50) , CP NUMBER(6) , Telephone VARCHAR2(14) , Fax VARCHAR2(10) );

CREATE TABLE EMP_OBJ
(
NumEmp NUMBER PRIMARY KEY , 
NomComplet VARCHAR2(100) , 
Salaire NUMBER ,  
Coordonnee t_coord ,
);
```

___ 
Question 2 : Insérez les données suivantes dans la table EMP-OBJ

```sql 
INSERT INTO EMP_OBJ VALUES ( 14, 'XAVIER Richard', NULL,t_coord ( 'Lyon', 69000, '0472546585', NULL ) );


INSERT INTO EMP_OBJ VALUES ( 15, 'NICOLLE Chris', NULL,t_coord ( 'Paris', 75000, NULL, NULL ) );
```

___ 
Question 3 : Mettez à jour les données suivantes dans la table EMP-OBJ

```sql
UPDATE EMP_OBJ E SET E.Salaire = 30000, E.Coordonnee.ville = 'Anglet', E.Coordonnee.Cp = 64600, E.Coordonnee.Telephone = NULL WHERE E.NumEmp=14;


UPDATE EMP_OBJ E SET E.Salaire = 20000, E.Coordonnee.Ville = 'Anglet', E.Coordonnee.Cp = 64600, E.Coordonnee.Telephone = '0698088989' WHERE E.NumEmp=15;
```

<span style="background:#98fb98">OU ALORS</span>

```sql
UPDATE EMP_OBJ E SET E.Salaire = 30000, t_coord ('Anglet', 64600, NULL, E.Coordonnee.Fax) WHERE E.NumEmp=14;


UPDATE EMP_OBJ E SET E.Salaire = 20000, t_coord ('Anglet', 64600, '0698088989', E.Coordonnee.Fax) WHERE E.NumEmp=15;
```

___
Question 4 : À l'aide d'une procédure à créer, insérez les données de la table EMP créé lors du semestre précédent (TD4)
``Employe (NumEmp, Nom, Prenom, Salaire, Ville, CodePostal, Telephone, Fax, #DeptId);``
``Dept (DeptId, Nom);``

```sql
CREATE OR REPLACE PROCEDURE MIGRATION_EMP_OBJ AS 
	NEW_ID EMPLOYE_R.NumEmp%TYPE;
	MAX_ID NUMBER;
	CURSOR TAB_EMP IS SELECT * FROM EMPLOYE_R;

  BEGIN
    SELECT MAX(NumEmp) INTO MAX_ID FROM EMPLOYE_R;
    FOR EMP IN TAB_EMP LOOP
      NEW_ID := EMP.NumEmp;
      IF EMP.NumEmp <= MAX_ID THEN
        MAX_ID := MAX_ID+1;
        NEW_ID := MAX_ID;
      END IF;
      
      INSERT INTO EMP_OBJ VALUES (NEW_ID, EMP.Nom ||' '|| EMP.Prenom, EMP.Salaire, t_coord(EMP.Ville, EMP.Cp, EMP.Tel, NULL));
    END LOOP;
    COMMIT;	
  END;
```
___ 
Question 4* : Vérifier si nom et prenom existe, si c'est le cas, on insert pas

```sql
CREATE OR REPLACE PROCEDURE MIGRATION_EMP_OBJ AS 
    NEW_ID EMPLOYE_R.NumEmp%TYPE;
    MAX_ID NUMBER;
  NOMCOMP VARCHAR2(100);
  NB_NOMCOMPLET NUMBER;
    CURSOR TAB_EMP IS SELECT * FROM EMPLOYE_R;

  BEGIN
    SELECT MAX(NumEmp) INTO MAX_ID FROM EMP_OBJ;
    
    FOR EMP IN TAB_EMP LOOP
      NEW_ID := EMP.NumEmp;
      IF EMP.NumEmp <= MAX_ID THEN
        MAX_ID := MAX_ID+1;
        NEW_ID := MAX_ID;
      END IF;
      
      NOMCOMP := EMP.Nom || ' ' ||EMP.Prenom;
      SELECT COUNT(*) INTO NB_NOMCOMPLET FROM EMP_OBJ E WHERE E.NomComplet = NOMCOMP;

      IF NB_NOMCOMPLET > 0 THEN
        DBMS_OUTPUT.PUT_LINE(NOMCOMP || ' existe deja en bd');
      ELSE 
        INSERT INTO EMP_OBJ VALUES (NEW_ID, EMP.Nom ||' '|| EMP.Prenom, EMP.Salaire, t_coord(EMP.Ville, EMP.Cp, EMP.Tel, NULL));
      END IF; 
    END LOOP;
    COMMIT;    
  END;
```
___
Question 5 : Donnez la liste de villes (sans redondance) des employés
```sql
SELECT DISTINCT(E.Coordonnee.Ville)
FROM EMP_OBJ E;
```

___
Question 6 : Donnez la liste des personnes qui n'ont pas un numéro de téléphone
```sql
SELECT E.NomComplet, E.Coordonnee.Telephone AS Telephone
FROM EMP_OBJ E
WHERE E.Coordonnee.Telephone IS NOT NULL;
```

___
Question 7 : Ajoutez un numéro de téléphone et un numéro de fax à XAVIER
```sql
UPDATE EMP_OBJ  E SET E.Coordonnee.Telephone = '0607080901', E.Coordonnee.Fax = 123456 WHERE E.NUMEMP = 14;
```

___
Question  8 : Supprimez la ville, le Cp et le tel de NICOLLE Chris
```sql
UPDATE EMP_OBJ E SET E.Coordonnee.Ville = NULL, E.Coordonnee.Cp = NULL, E.Coordonnee.Tel = NULL WHERE E.NomComplet = 'NICOLLE Chris';
```

___ 
## Partie 2 
Question 1 : Faire le nécessaire afin de créer le schéma de la BDD suivante :
- **Article**
```sql
CREATE TABLE Article (
	NoArticle VARCHAR2(4) PRIMARY KEY NOT NULL,
	Description VARCHAR2(150),
	Couleur VARCHAR2(50),
	Categorie VARCHAR2(50),
	Prix NUMBER,
	Stock INT
	);
```
- **Client**
```sql
CREATE OR REPLACE TYPE t_panier AS OBJECT (Cmde INT);

CREATE OR REPLACE TYPE tab_panier AS TABLE OF t_panier;

CREATE SEQUENCE seq_no_client START WITH 1 INCREMENT BY 1;

CREATE TABLE Client (
	NoClient INT DEFAULT seq_no_client.NEXTVAL PRIMARY KEY ,
	NomClient VARCHAR2(50),
	Ville VARCHAR2(150),
	Panier tab_panier
) NESTED TABLE Panier STORE AS Panier_store ;
```
- **Commande**
```sql
CREATE OR REPLACE TYPE t_details AS OBJECT (Art VARCHAR2(50), QteCmde INT);

CREATE OR REPLACE TYPE tab_details AS TABLE OF t_details;

CREATE SEQUENCE seq_no_cmde START WITH 101 INCREMENT BY 1;

CREATE TABLE Commande (
	NoCmde INT PRIMARY KEY NOT NULL seq_no_cmde.NEXTVAL,
	DateCmd DATE DEFAULT SYSDATE,
	Details tab_details
) NESTED TABLE Details STORE As Details_store ;
```
___
Question 2 : Remplir les tables selon l'annexe A
 - **Article**
```sql
INSERT INTO Article VALUES ('A1','MacPro','Rouge','Apple',1.50,500);
INSERT INTO Article VALUES ('A2','MacPro Air','Blanc','Apple',1.50,800);
INSERT INTO Article VALUES ('A3','MacPro Server','Noir','Apple',2.00,1000);
INSERT INTO Article VALUES ('A4','Dell','Jaune','PC',1500,1);
INSERT INTO Article VALUES ('A5','HP','Bleu','Apple',10.00,200);
INSERT INTO Article VALUES ('A6','Acer','Gris','Autre',10.00,25);
INSERT INTO Article VALUES ('A7','Sony','Noir','PC',120,300);
```
- **Client**
```sql
INSERT INTO Client VALUES (1,'BARTH Florent','Anglet',tab_panier(t_panier(101), t_panier(106), t_panier(107)));
INSERT INTO Client VALUES (2,'FREE Marc','Lyon',tab_panier(t_panier(102)));
INSERT INTO Client VALUES (3,'POISSON Christophe','Lille',tab_panier(t_panier(103), t_panier(104)));
INSERT INTO Client VALUES (4,'BLAKE Johne','Metz',tab_panier(t_panier(105)));
INSERT INTO Client VALUES (5,'DUPONT Jean','Paris',tab_panier(t_panier(NULL)));
```
- **Commande**
```sql
INSERT INTO Commande VALUES (101, TO_DATE('10-10-2008','DD-MM-YYYY'), tab_details( t_details('A1',5), t_details('A2',6), t_details('A3',4));

INSERT INTO Commande VALUES (102, TO_DATE('12-11-2007','DD-MM-YYYY'), tab_details( t_details('A4',2));

INSERT INTO Commande VALUES (103, TO_DATE('13-2-2008','DD-MM-YYYY'), tab_details( t_details('A5',3), t_details('A1',2));
 
INSERT INTO Commande VALUES (104, TO_DATE('12-12-2006','DD-MM-YYYY'), tab_details( t_details('A2',1));

INSERT INTO Commande VALUES (105, TO_DATE('01-05-2008','DD-MM-YYYY'), tab_details( t_details('A3',2));

INSERT INTO Commande VALUES (106, TO_DATE('02-02-2008','DD-MM-YYYY'), tab_details( t_details('A6',3));

INSERT INTO Commande VALUES (107, TO_DATE('03-06-2005','DD-MM-YYYY'), tab_details( t_details('A4',2));
```
___
Question 3 :
1- Afficher le numéro, description, prix, qtecmde et montant des articles d'une commande dont le numéro est saisi par l'utilisateur
```sql
SELECT 
    c.NoCmde, a.NoArticle, a.Description, a.Prix, d.QteCmde, (a.Prix * d.QteCmde) AS Montant 
FROM Commande c, 
    TABLE(c.Details) d 
    JOIN Article a ON d.Art = a.NoArticle 
WHERE c.NoCmde = :num_commande;
```
2- Afficher la quantité totale des commandes
```sql
SELECT 
    SUM(d.QteCmde) AS QuantiteTotale 
FROM Commande c, 
TABLE(c.Details) d;
```
3- Afficher le numéro et nom des clients ayant passé des commandes contenant des articles de couleur 'rouge'
```sql
SELECT DISTINCT cl.NomClient
FROM Client cl,TABLE (cl.Panier) p, Commande c, TABLE (c.details) d, Article a
WHERE a.Couleur = 'Rouge' 
AND a.NoArticle = d.Art
AND c.NoCmde = p.Cmde;
```
4- Afficher le numéro de chaque commande et la quantité totale de ses articles
```sql
SELECT c.NoCmde AS NumeroCommande, SUM(d.QteCmde) AS QuantiteTotale 
FROM Commande c, 
TABLE(c.Details) d  
GROUP BY c.NoCmde;
```
4*- Calculer pour chaque commande la somme totale gagnée
```sql
SELECT c.NoCmde, SUM(a.Prix * d.QteCmde) AS Total
FROM Commande c,
TABLE(c.Details) d
JOIN Article a ON d.Art = a.NoArt
GROUP BY c.NoCmde;
```

5- Supprimer l'article 4 de toutes les commandes
```sql
UPDATE Commande c 
SET Details = ( 
    SELECT CAST( 
        MULTISET( 
            SELECT * FROM TABLE(c.Details) d 
            WHERE d.Art != 'A4' 
	        ) AS tab_details 
    ) FROM DUAL 
);
```
