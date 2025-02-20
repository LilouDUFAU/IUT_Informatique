public class Main {
    // METHODE PRINCIPALE : main ()
    public static void main(String[] args) {
// Création d’un composantDeBase
        IComposant composantDeBase = new ComposantDeBase();
        composantDeBase.operation(); // Fait l’opération de base
        System.out.println();
// Création d’un autreComposant...
        IComposant autreComposant;
        autreComposant = composantDeBase;
// ... que l’on dote du comportement de décoration du décorateur A ...
        autreComposant = new DecorateurA_DeComposant (autreComposant);
        autreComposant.operation(); // Fait l’opération de base décorée par A
        System.out.println();
// ... et on le transforme en le dotant EN PLUS des décorations du décorateur B
        autreComposant = new DecorateurB_DeComposant (autreComposant);
        autreComposant.operation();// Fait l’opération de base décorée par A et B
    }
}
