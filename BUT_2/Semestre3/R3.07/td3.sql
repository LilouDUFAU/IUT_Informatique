-- Query SQL

CREATE TABLE DEPT (
    NUMDEP INT PRIMARY KEY NOT NULL,
    NOMDEP VARCHAR2(100),
    NOMLOC VARCHAR2(100)
);

CREATE TABLE EMP (
    NUMEMP INT PRIMARY KEY NOT NULL,
    NOMCOMPLET VARCHAR2(100),
    PROFFESSION VARCHAR2(100),
    CHEF INT,
    SALAIRE INT,
    NUMDEP INT FOREIGN KEY REFERENCES DEPT(NUMDEP)
);

INSERT INTO DEPT (1,"RECHERCHE","DIJON");
INSERT INTO DEPT (2,"DEVELOPPEMENT","NEW-YORK");
INSERT INTO DEPT (3,"FACTURATION","PARIS");
INSERT INTO DEPT (4,"DIRECTION","LONDRES");


INSERT INTO EMP (1,"BARTH Florent","CHEF DE PROJET",3,13000,2);
INSERT INTO EMP (2,"XAVIER Richard","CHERCHEUR",3,21000,1);
INSERT INTO EMP (3,"NICOLLE Chris","CHERCHEUR",,25000,1);

--------------------------------------------------------------------------
-- PL/SQL

-- Le nom du premier employe ayant l'ID 1
DECLARE
    NOM VARCHAR2(255);
BEGIN 
    SELECT NOMCOMPLET INTO NOM FROM EMP WHERE NUMEMP = 1;
END

-- Le nom et la profession du premier employe ayant l'ID 1
DECLARE
    NOM VARCHAR2(100);
    PROFESSION VARCHAR2(100);
BEGIN 
    SELECT NOMCOMPLET,PROFESSION INTO NOM,PROFESSION FROM EMP WHERE NUMEMP = 1;
END

-- PARTIE A) initiation PL/SQL
-- 2 commenter et corriger les erreurs
-- 3 remplacer le message d'erreur

DECLARE
    -- declaration d'une variable N de type INT
    N INT(2);
    -- declaration d'un curseur
    CURSOR EMPLOYES IS
    SELECT NUMEMP,NOMCOMPLET,SALAIRE FROM EMP;
    -- declaration d'une variable NEWSAL du meme type que salaire
    NEWSAL EMP.SALAIRE%TYPE;
    -- declaration d'une variable EMPV de type EXCEPTION
    EMPV EXCEPTION;
BEGIN
    -- liste des instruction que l'on souhaite executer
    SELECT COUNT(*) INTO N FROM EMP;
    -- si aucun employe 
    IF N=0 THEN
    -- on renvoie une erreur
    RAISE EMPV;
END IF;
    -- pour chaque employe dans le curseur employe
FOR EMPLOYE IN EMPLOYES LOOP
    -- affectation de 50€ de + au salaire de chaque employe dans la boucle 
    NEWSAL :=EMPLOYE.SALAIRE+50;
    -- mise a jour + modifiaction du salaire de l'emlpoye 
    UPDATE EMP SET SALAIRE=NEWSAL WHERE NUMEMP = EMPLOYE.NUMEMP;
END LOOP;
COMMIT;
    -- enregistre les changements effectues dans le bloc begin
EXCEPTION
    -- bloc de traitement des erreurs/exceptions
    WHEN EMPV THEN
        DBMS_OUTPUT.PUT_LINE('TABLE EMP VIDE');
END;

-- 4 
-- curseur = recordset


-- questions supplementaires:
    -- on souhaite afficher le salaire des employes ayant le chef numero 3 
    -- sous la forme : L'employe 'NOMCOMPLET' a un salaire de 'SALAIRE' €.
DECLARE
    CURSOR EMPLOYES IS
    SELECT NOMCOMPLET,SALAIRE FROM EMP WHERE CHEF = 3 ;
    NOM EMP.NOMCOMPLET%TYPE;
    SALAIRE EMP.SALAIRE%TYPE;
BEGIN
    FOR EMPLOYE IN EMPLOYES LOOP
        NOM := EMPLOYE.NOMCOMPLET;
        SALAIRE := EMPLOYE.SALAIRE;
        DBMS_OUTPUT.PUT_LINE("L'employe" & NOM & "a un salaire de " & SALAIRE & "€");
    END LOOP;
END;

-- PARTIE B) Vos premiers pas avec PL/SQL
-- 7 
CREATE OR REPLACE FUNCTION SALAIRE_EMPLOYE(NOM_EMP VARCHAR2) RETURN INT IS
    SALAIRE INT;
BEGIN
    SELECT SALAIRE INTO SALAIRE FROM EMP WHERE NOMCOMPLET = NOM_EMP;
    RETURN SALAIRE;
END;
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Aucun employe ne correspond au nom' || NOM_EMP);
END;


--7*
CREATE OR REPLACE FUNCTION SALAIRE_EMPLOYE(NOM_EMP VARCHAR2) RETURN VARCHAR2 IS
    NUMERO INT;
    POSTE EMP.PROFFESSION%TYPE;
    SALAIRE INT;
BEGIN
    SELECT NUMEMP,PROFFESSION,SALAIRE INTO NUMERO,POSTE,SALAIRE FROM EMP WHERE NOMCOMPLET = NOM_EMP;
    RETURN 'NUMERO = ' || NUMERO || ', POSTE = ' || POSTE || ', SALAIRE = ' || SALAIRE;
END;
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Aucun employe ne correspond au nom' || NOM_EMP);
END;

-- PARTIE C) Approfondissement
--8
CREATE OR REPLACE PROCEDURE AFFECTER_EMP_DEPT(NOM_EMP VARCHAR2, DEPT VARCHAR2) IS
    NUMERO INT;
BEGIN
    SELECT NUMEMP INTO NUMERO FROM EMP WHERE NOMCOMPLET = NOM_EMP;
    UPDATE EMP SET NUMDEP = DEPT WHERE NUMEMP = NUMERO;
END;
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Aucun employe ne correspond au nom' || NOM_EMP);
END;

--9 (+1ptn)
CREATE OR REPLACE FUNCTION EXIST_EMP(NOM_EMP VARCHAR2) RETURN BOOLEAN IS
    N INT;
BEGIN
    SELECT COUNT(*) INTO N FROM EMP WHERE NOMCOMPLET = NOM_EMP;
    IF N = 0 THEN
        RETURN false;
    ELSE
        RETURN TRUE;
    END IF;
END;

--10
CREATE OR REPLACE FUNCTION APP_EMP_DEPT(NOM_EMP VARCHAR2, DEPT VARCHAR2) RETURN VARCHAR2 IS
    NUMERO INT;
    DEPT_EMP INT;
BEGIN
    SELECT NUMEMP INTO NUMERO FROM EMP WHERE NOMCOMPLET = NOM_EMP;
    SELECT NUMDEP INTO DEPT_EMP FROM EMP WHERE NUMEMP = NUMERO;
    IF DEPT_EMP = DEPT THEN
        RETURN 'cet employé appartient au département ' || DEPT;
    END IF;
END;
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('cet employé n’appartient pas au département ' || DEPT);
END;

--11
CREATE OR REPLACE PROCEDURE MAJ_EMP IS
    CURSOR EMPLOYES IS
    SELECT NUMEMP,SALAIRE,NUMDEP FROM EMP;
    SALAIRE INT;
    NUMERO INT;
    DEPT_EMP INT;
    MOYENNE INT;
BEGIN
    FOR EMPLOYE IN EMPLOYES LOOP
        NUMERO := EMPLOYE.NUMEMP;
        SALAIRE := EMPLOYE.SALAIRE;
        DEPT_EMP := EMPLOYE.NUMDEP;
        IF DEPT_EMP = 1 THEN
            UPDATE EMP SET SALAIRE = SALAIRE - 200 WHERE NUMEMP = NUMERO;
        ELSIF DEPT_EMP = 2 THEN
            UPDATE EMP SET SALAIRE = SALAIRE + 40 WHERE NUMEMP = NUMERO;
        ELSIF DEPT_EMP = 3 THEN
            SELECT AVG(SALAIRE) INTO MOYENNE FROM EMP WHERE NUMDEP = 3;
            UPDATE EMP SET SALAIRE = MOYENNE WHERE NUMEMP = NUMERO;
        ELSIF DEPT_EMP = 4 THEN
            UPDATE EMP SET SALAIRE = SALAIRE * 2 WHERE NUMEMP = NUMERO;
        END IF;
    END LOOP;
END;
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Aucun employe ne correspond au nom' || NOM_EMP);
END;

--12
CREATE OR REPLACE PROCEDURE MAJ_SALAIRE_DEPT(NOM_DEPT VARCHAR2) IS
    DEPT_EMP INT;
    MOYENNE INT;
BEGIN
    SELECT NUMDEP INTO DEPT_EMP FROM DEPT WHERE NOMDEP = NOM_DEPT;
    SELECT AVG(SALAIRE) INTO MOYENNE FROM EMP WHERE NUMDEP = DEPT_EMP;
    FOR EMPLOYE IN EMPLOYES LOOP
        UPDATE EMP SET SALAIRE = SALAIRE + (SALAIRE * 0.1) WHERE NUMDEP = DEPT_EMP;
    END LOOP;
END;
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Aucun departement ne correspond au nom' || NOM_DEPT);
END;

--13
CREATE OR REPLACE PROCEDURE MAJ_SALAIRE_COND(NOM_DEPT VARCHAR2, POURCENTAGE INT) IS
    DEPT_EMP INT;
    MOYENNE INT;
BEGIN
    SELECT NUMDEP INTO DEPT_EMP FROM DEPT WHERE NOMDEP = NOM_DEPT;
    SELECT AVG(SALAIRE) INTO MOYENNE FROM EMP WHERE NUMDEP = DEPT_EMP;
    FOR EMPLOYE IN EMPLOYES LOOP
        IF EMPLOYE.SALAIRE < MOYENNE THEN
            UPDATE EMP SET SALAIRE = SALAIRE + (SALAIRE * (POURCENTAGE / 100)) WHERE NUMDEP = DEPT_EMP;
        END IF;
    END LOOP;
END;
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Aucun departement ne correspond au nom' || NOM_DEPT);
END;




CREATE OR REPLACE PROCEDURE CurseurFilms (p_annee INT) AS
    CURSOR MonCurseur (v_annee INTEGER) IS
        SELECT idF,titre,prenom,nom
        FROM Film, Artiste
        WHERE idMES = idArtiste
        AND annee = v_annee;
    v_monCurseur MonCurseur%ROWTYPE;
BEGIN
    OPEN MonCurseur(p_annee);
    LOOP
        FETCH MonCurseur INTO v_monCurseur;
        EXIT WHEN MonCurseur%NOTFOUND;
        DBMS_OUTPUT.PUT_LINE('Film : ' || v_monCurseur.titre || ' de ' || v_monCurseur.prenom || ' ' || v_monCurseur.nom);
    END LOOP;
    CLOSE MonCurseur;
END CurseurFilms;

-- optional
EXCEPTION


-- exemple similaire mais avec une fonction
CREATE OR REPLACE FUNCTION FilmsAnnee (p_annee INT) RETURN VARCHAR2 AS
    CURSOR MonCurseur (v_annee INTEGER) IS
        SELECT idF,titre,prenom,nom
        FROM Film, Artiste
        WHERE idMES = idArtiste
        AND annee = v_annee;
    v_monCurseur MonCurseur%ROWTYPE;
    v_resultat VARCHAR2(255);
BEGIN
    OPEN MonCurseur(p_annee);
    LOOP
        FETCH MonCurseur INTO v_monCurseur;
        EXIT WHEN MonCurseur%NOTFOUND;
        v_resultat := v_resultat || 'Film : ' || v_monCurseur.titre || ' de ' || v_monCurseur.prenom || ' ' || v_monCurseur.nom || CHR(10);
    END LOOP;
    CLOSE MonCurseur;
    RETURN v_resultat;
END FilmsAnnee;

-- optional
EXCEPTION


