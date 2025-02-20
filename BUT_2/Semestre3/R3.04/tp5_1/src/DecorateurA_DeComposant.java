public class DecorateurA_DeComposant extends DecorateurDeComposant {
    // CONSTRUCTEUR
    public DecorateurA_DeComposant (IComposant composant) {
        super (composant);
    }
    // METHODE A DECORER AVANT et/ou APRES : opération
    public void operation () {
        System.out.println("# Prédécoration A #"); // Déco avant
        composantDecore.operation();
        System.out.println("# Postdécoration A #");// Déco après
    }
}