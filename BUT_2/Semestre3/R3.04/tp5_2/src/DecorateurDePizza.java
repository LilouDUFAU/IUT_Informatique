public abstract class DecorateurDePizza implements IPizza {
    // Attributes PizzaDecore, le composant a decorer
    public IPizza PizzaDecore;

    // Constructor
    public DecorateurDePizza(IPizza pizza) {
        setPizzaDecore(pizza);
    }

    // Methodes d'encapsulation
    public void setPizzaDecore(IPizza pizza) {
        this.PizzaDecore = pizza;
    }
    public IPizza getPizzaDecore() {
        return PizzaDecore;
    }
}
