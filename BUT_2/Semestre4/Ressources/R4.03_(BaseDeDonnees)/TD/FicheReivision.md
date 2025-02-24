creation de type :
```sql
CREATE OR REPLACE TYPE t_nomType AS OBJECT ( attributs ) ;
```
___
creation de tab de type :
```sql 
CREATE OR REPLACE tab_nomTab AS TABLE OF t_nomType;
```
___
creation de table avec un type :
```sql 
CREATE TABLE nomTable (
 	attributs 1,
 	attributs 2,
 	attributs ...,
 	nomAttribut t_nomType ) ;
```

___
creation de table avec un tab de type :
```sql
CREATE TABLE nomTable (
 	attributs 1,
 	attributs 2,
 	attributs ...,
	nomAttribut tab_nomTab ) NESTED TABLE nomAttribut STORE AS nomAttribut_store;
```
___
insertion de valeurs avec un type :
```sql
INSERT INTO nomTable VALUES ( …., t_nomType (….));
```

___
insertion de valeurs avec un tab de type :
```sql 
INSERT INTO nomTable VALUES (…., tab_nomTab(t_nomType(….),t_nomType(….));
```


select de type :
```sql
SELECT T.nomAttribut.nomAttribut AS …
FROM nomTable T
WHERE ….;
```

select de tab de type :
```sql
SELECT T.attribut, A.attribut
FROM nomTable T, TABLE (T.nomAttribut) A
JOIN …
WHERE …
```

