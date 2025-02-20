public class DecorateurChampignons extends DecorateurDePizza{
    // Constructor
    public DecorateurChampignons(IPizza pizza){
        super(pizza);
    }

    // Methode a decore avant et/ou apres
    public void afficher(){
        System.out.println("% Predecoration Champignons %");
        PizzaDecore.afficher();
        System.out.println("% Postdecoration Champignons %");
    }
}
