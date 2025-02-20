public class DecorateurOlives extends DecorateurDePizza{
    // Constructor
    public DecorateurOlives(IPizza pizza){
        super(pizza);
    }

    // Methode a decore avant et/ou apres
    public void afficher(){
        System.out.println("% Predecoration Olives %");
        PizzaDecore.afficher();
        System.out.println("% Postdecoration Olives %");
    }
}
