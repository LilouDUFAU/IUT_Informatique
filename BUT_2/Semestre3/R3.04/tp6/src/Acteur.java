public abstract class Acteur {
    //Attributs
    private Mediateur unMediateur;

    //Encapsulation
    public Mediateur getUnMediateur() {
        return unMediateur;
    }
    public void setUnMediateur(Mediateur unMediateur) {
        this.unMediateur = unMediateur;
    }

}
