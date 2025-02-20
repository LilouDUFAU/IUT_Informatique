public abstract class PieceComposant {
    ////////////////////ATTRIBUTES////////////////////
    private String _libelle;
    private int _price;

    ////////////////////CONSTRUCTORS / DESTRUCTORS////////////////////
    public PieceComposant() {
        _libelle = "";
        _price = 0;
    }

    //public ~PieceComposant() {}

    ////////////////////ENCAPSULATION////////////////////
    //GETTERS
    public String getLibelle(){
        return _libelle;
    }

    public int getPrice() {
        return _price;
    }

    //SETTERS
    public void setLibelle(String libelle){
        _libelle = libelle;
    }

    public void setPrice(int price){
        _price = price;
    }

    ////////////////////METHODS COMMUNES////////////////////
    public String toString(){
        return _libelle + "\t" + _price;
    }
}
