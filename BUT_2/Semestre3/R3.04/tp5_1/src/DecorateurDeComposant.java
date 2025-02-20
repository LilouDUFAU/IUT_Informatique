public abstract class DecorateurDeComposant implements IComposant {
    //ATTRIBUT composantDecore, le composant à décorer
    public IComposant composantDecore;

    // CONSTRUCTEUR
    public DecorateurDeComposant(IComposant composant) {
        setComposantDecore(composant);
    }

    // METHODES D'ENCAPSULATION : composantDecore
    public void setComposantDecore(IComposant composant) {
        this.composantDecore = composant;
    }

    public IComposant getComposantDecore() {
        return this.composantDecore;
    }
}