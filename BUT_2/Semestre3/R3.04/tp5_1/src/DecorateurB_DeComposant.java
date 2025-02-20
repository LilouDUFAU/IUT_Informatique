public class DecorateurB_DeComposant extends DecorateurDeComposant {
    // CONSTRUCTEUR
    public DecorateurB_DeComposant (IComposant composant) {
        super (composant);
    }
    // METHODE A DECORER AVANT et/ou APRES : opération
    public void operation () {
        System.out.println("% Prédécoration B %"); // Déco avant
        composantDecore.operation();
        System.out.println("% Postdécoration B %");// Déco après
    }
}