/**
 * Classe : Main
 * Objectif : Mettre en �vidence les probl�mes li�s � la diff�rence entre l'objet et son adresse
 *
 * 1. Cr�er un pointeur c'est diff�rent que de cr�er un objet
 * 2. Cas de l'objet r�f�renc� par deux pointeurs
 * 3. Cr�er un objet � l'identique d'un objet mod�le : constructeur par recopie
 *
 * 4. Comparer deux pointeurs versus comparer deux objets
 *  4.a Comparer 2 pointeurs
 *  4.b Comparer 2 objets => la m�thode boolean equals(objetModele)
 *
 * 5. Param�tres des fonctions et m�thodes : seule la valeur de la variable est transmise
 *  5.a Param�tre "type primitif"
 *  	=> modifications de la variable sans effet au niveau appelant
 *  5.b Param�tre "pointeur"
 *  	=> modification de la r�f�rence sans effet au niveau appelant
 *      => modification de l'objet r�f�renc� avec effet au niveau appelant
 * @version 2.0
 * @author Lopist�guy Philippe
 * @date jj/mm/aa
 */
public class Main {

/** 1.ATTRIBUTS              -non- **/
/** 2.CONSTRUCTEURS          -non- **/
/** 3.METHODES ENCAPSULATION -non- **/
/** 4.METHODES USUELLES      -non- **/

    /** 5.METHODES SPECIFIQUES : modifierLeParametreDeTypePrimitifInt, modifierLeParametreAdresse, modifierObjetPointeParLeParametre **/

    static public void modifierLeParametreDeTypePrimitifInt (int entierRecu) {
        System.out.println ("... je recois l'entier "+ entierRecu +" et l'augmente de 1");
        entierRecu++;  // incr�mentation
        System.out.println ("... pour moi il vaut "+ entierRecu +" et la fonction se termine");
    }

    static public void modifierLeParametreAdresse (Ingredient ingredient1) {
        System.out.println ("... je recois l'adresse de l'ingredient "+ingredient1.toString());
        Ingredient unNouveau;
        unNouveau = new Ingredient ("vin", 40); // Cr�e unNouveau ingredient
        System.out.println ("... je cree un nouvel ingredient "+ unNouveau.toString());
        ingredient1 = unNouveau;
        System.out.println ("... le parametre recu pointe sur ce nouvel ingredient "+ingredient1.toString()+" et la fonction se termine");
    }

    static public void modifierObjetPointeParLeParametre (Ingredient ingredient1) {
        System.out.println ("... je recois l'adresse de l'ingredient "+ingredient1.toString());
        ingredient1.set_quantite(0);
        System.out.println ("... je modifie la quantite "+ ingredient1.toString()+" et la fonction se termine");
    }

    /** 6.METHODE PRINCIPALE: main() **/
    public static void main(String[] args) {

        /* 1. Cr�er un pointeur c'est diff�rent que de cr�er un objet
         * - un pointeur est capable de stocker l'adresse d'un objet
         * - un objet est cr�� par un 'new'
         * - un 'new' retourne l'adresse de l'objet cr��
         * => on r�cup�re l'adresse dans un pointeur
         */
        System.out.println("\n1. Creer un pointeur c'est different que de creer un objet");
        // **** // On cr�e le pointeur ingredient10,
        Ingredient ingredient10;

        // **** // On cr�e l'objet <"lait",10> et le pointeur ingredient10 r�cup�re l'adresse de l'objet <"lait",10>
        ingredient10 = new Ingredient("lait",10);

        // **** // On affiche la valeur de ingredient10
        System.out.println("L'ingredient 10 contient :" +ingredient10);

        /* 2. Cas de l'objet reference par deux pointeurs
         *  a. declarer 2 pointeurs
         *  b. creer un objet et garder son @ dans le 1er pointeur
         *  c. copier cette @ dans // **** le 2eme pointeur
         *  d. afficher l'objet que pointeur le 1er et le 2eme pointeur
         *  e. modifier l'objet via le 2eme pointeur & constater la modification
         *  f. afficher l'objet pointe par chacun de ces 2 pointeurs
         * => les modifications de l'objet via le 1er pointeur ont affect� les valeurs
         *    de l'objet point� par le 2eme pointeur. Normal ! c'est le m�me objet
         */
        System.out.println("\n2. Cas de l'objet reference par deux pointeurs");
        // **** // a. cr�ation d'un 1er pointeur ingredient21
        Ingredient ingredient21;
        // **** // a. cr�ation d'un 2eme pointeur ingredient22
        Ingredient ingredient22;
        // **** // b. le 1er pointe sur new objet <"sel", 21>
        ingredient21 = new Ingredient("sel",21);
        // **** // c. copier l'@ de l'objet dans le 2�me pointeur
        ingredient22 = ingredient21;
        // **** // d. affichage via 1er pointeur
        System.out.println("ingredient 21 avant : "+ingredient21);
        // **** // d. affichage via 2�me pointeur
        System.out.println("ingredient 22 avant : "+ingredient22);
        // **** // e. modifier l'objet via le 1er pointeur
        ingredient21.set_libelle("sucre");
        // **** // f. affichage via 1er pointeur
        System.out.println("ingredient 21 apres : "+ingredient21);
        // **** //    et 2�me pointeur
        System.out.println("ingredient 22 apres : "+ingredient22);


        /* 3. Cr�er un objet � l'identique d'un objet mod�le : constructeur par recopie
         *   a. �crire un constructeur avec un objet mod�le en param�tre (cf. classe Ingredients)
         *   b. cr�er un 1er objet r�f�renc� par un 1er pointeur
         *   c. cr�er un 2eme objet (sur la base du 1er objet) r�f�renc� par un 2�me pointeur
         *   d. constater que les 2 pointeurs se r�f�rent � des objets de m�me valeur
         *   e. modifier le premier objet
         *   f. constater que chaque pointeur se r�f�re � des objets de valeurs diff�rentes
         * => Constructeur par recopie
         */
        System.out.println("\n3. Creer un objet a l'identique d'un objet modele : constructeur par recopie");
        // a. est d�j� fait : soyez tranquilles...
        // **** // b. cr�e le 1er pointeur    ingredient31
        Ingredient ingredient31;
        // **** // b. le 1er pointeur prend l'@ d'un ouvel objet <"milk", 31>
        ingredient31 = new Ingredient("milk",31);
        // **** // c. cr�e le 2�me pointeur   ingredient32
        Ingredient ingredient32;
        // **** // c. le 2�me pointeur prend l'@ du 2�me objet qui est construit sur la base du 1er objet, cad construit par recopie
        ingredient32 = new Ingredient(ingredient31);
        // **** // d. affichage de ce que pointe    ingredient31
        System.out.println("ingredient31 avant : "+ingredient31);
        // **** // d. affichage de ce que pointe    ingredient32
        System.out.println("ingredient32 avant : "+ingredient32);
        // **** // e. modification de l'un des 2 objets
        ingredient32.set_quantite(32);
        // **** // f. affichage de ce que pointent ingredient31 et ingredient32
        System.out.println("ingredient31 apres : "+ingredient31);
        System.out.println("ingredient32 apres : "+ingredient32);

		/* 4. Comparer deux pointeurs versus comparer deux objets
		 *  4.a Commparer 2 pointeurs
		 *      a. cr�er un objet r�f�renc� par un pointeur
		 *      b. copier le pointeur dans un second pointeur
		        c. observer qu'ils sont �gaux (ils r�f�rencent le m�me objet)
		 *  4.b Comparer 2 objets
		 *      a. cr�er et initialiser un premier objet r�f�renc� par un 1er pointeur
		 *      b. cr�er et initialiser (aux m�me valeurs) un second objet r�f�renc� par un 2�me pointeur
		 *      c. comparer les pointeurs et constater qu'ils sont diff�rentss alors que les 2 objets r�f�renc�s sont identiques
		 * 	d. (c'est d�j� fait) surcharger la m�thode "static public boolean equals(objetModele)" (cf. classe Ingredients) de sorte
		 *      � ce que l'objet consid�r� compare ses attributs � ceux de l'objet mod�le et retourne vrai en cas d'�galit�s
		 */
        System.out.println("\n4. Comparer deux pointeurs versus comparer deux objets");
        System.out.println("   4.a Comparer deux pointeurs : pointeurs egaux");
        // **** // a. cr�er un objet <"salt", 41> point� par ingredient41
        Ingredient ingredient41= new Ingredient("salt",41);
        // **** // b. copier le pointeur dans un second pointeur ingredient42
        Ingredient ingredient42 = ingredient41;
        // **** // c. observer que ingredient41 et ingredien42 sont �gaux : utiliser un if
        if (ingredient41==ingredient42){
            System.out.println("ingredient41 et ingredient42 sont egaux !");
        }

        System.out.println("\n   4.b Comparer deux objets => la methode boolean equals(objetModele)");
        // **** // a. cr�er un objet point� par ingredient43 aux valeurs <"vin", 49>
            Ingredient ingredient43 = new Ingredient("vin",49);
        // **** // b. cr�er un 2�me objet point� par ingredient44 aux m�mes valeurs <"vin", 49>
        Ingredient ingredient44 = new Ingredient(ingredient43);
        // **** // c. observer diff�rence d'adresse des objets, mais m�mes valeurs : utiliser des if
        if (ingredient43.equals(ingredient44)){
            System.out.println("ingredient43 et ingredient44 sont egaux !");
        }
        else {System.out.println("ingredient43 et ingredient44 sont differents !");}

        /* 5. Param�tres des fonctions et m�thodes : c'est la valeur de la variable qui est transmise
         *   5.a Param�tre "type primitif" => modifications de la variable sans effet au niveau appelant
         */
        System.out.println("\n5. Param�tres des fonctions et m�thodes : c'est la valeur de la variable qui est transmise");
        System.out.println("     5.a Param�tre type primitif => modifications de la variable sans effet au niveau appelant");
        int unEntier = 20;
        System.out.println ("La valeur de unEntier "+unEntier+" est transmise a la fonction"); // avant  20
        // **** appeler : modifierLeParametreDeTypePrimitifInt (int);
        modifierLeParametreDeTypePrimitifInt(20);
        System.out.println ("La valeur de unEntier "+unEntier+" et est INCHANGE apres la fonction"); // apr�s 20 inchang� !!!!

        //  5.b Param�tre "pointeur" => modification de la r�f�rence sans effet au niveau appelant
        System.out.println("\n     5.b Parametre pointeur => modification de la reference sans effet au niveau appelant");
        Ingredient ingredient00 = new Ingredient ("huile", 10);
        System.out.println ("La valeur de l'ingredient "+ingredient00.toString()+" est transmise � la fonction"); // avant <huile,10>
        // **** appeler : modifierLeParametreAdresse (Ingredients);
        modifierLeParametreAdresse(ingredient21);
        System.out.println ("La valeur de l'ingredient "+ingredient00.toString()+" apres la fonction INCHANGE"); // apr�s <huile,10> inchang� !!!!

        //  5.c Param�tre "pointeur" => modification de l'objet r�f�renc� avec effet au niveau appelant
        System.out.println("\n     5.c Parametre pointeur => modification de l'objet avec effet au niveau appelant");
        Ingredient ingredient11 = new Ingredient ("the", 11);
        System.out.println ("La valeur de l'objet pointe "+ingredient11.toString()+" est transmise a la fonction"); // avant <th�,10>
        // **** appeler : modifierObjetPointeParLeParametre (Ingredients);
        System.out.println ("La valeur de l'objet pointe "+ingredient11.toString()+" apres la fonction C H A N G E"); // apr�s <vin,40> inchang� !!!!
    }
}