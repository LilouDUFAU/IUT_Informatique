public class TestPizzaDecore {
    // METHODE PRINCIPALE : main ()
    public static void main(String[] args) {

// Création d’un composantDeBase
        IPizza pizzaBasique = new PizzaDeBase();
        pizzaBasique.afficher();
        System.out.println();
// Création d’un autreComposant...
        IPizza autreComposant;
        autreComposant = pizzaBasique;
// ... que l’on dote du comportement de décoration du décorateur A ...
        autreComposant = new DecorateurChampignons(autreComposant);
        autreComposant.afficher();
        System.out.println();

// ... et on le transforme en le dotant EN PLUS des décorations du décorateur B
        autreComposant = new DecorateurOlives (autreComposant);
        autreComposant.afficher();// Fait l’opération de base décorée par A et B

        System.out.println();
    }
}