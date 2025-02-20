public class ClasseUtilisantStrategie {
    private IStrategie uneStrategie;

    public void setLaStrategie(IStrategie strategie) {
        this.uneStrategie = strategie;
    }

    public void operationMetier() {
        System.out.println("Commencement de l’opération métier");
        uneStrategie.methodeDeStrategie();
        System.out.println("Termination de l’opération métier");
    }
}
