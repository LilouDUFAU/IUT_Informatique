public class TesterStrategie {
    public static void main(String[] args) {
        ClasseUtilisantStrategie objetX = new ClasseUtilisantStrategie();
        IStrategie maStrategie;

        // Utilisation de la stratégie 1
        maStrategie = new StrategieConcrete1();
        objetX.setLaStrategie(maStrategie);
        objetX.operationMetier();

        // Utilisation de la stratégie 2
        maStrategie = new StrategieConcrete2();
        objetX.setLaStrategie(maStrategie);
        objetX.operationMetier();
    }
}
