public class PieceSimple extends PieceComposant {
    ////////////////////ATTRIBUTES////////////////////
    //inherits de la class mere

    ////////////////////CONSTRUCTORS / DESTRUCTORS////////////////////
    public PieceSimple() {
        super.setLibelle("");
        super.setPrice(0);
    }

    //public ~PieceSimple() {}

    ////////////////////ENCAPSULATION////////////////////
    //GETTERS
    //inherits de la class mere
    public int getPrice() {
        return super.getPrice();
    }
    //SETTERS
    //inherits de la class mere

    ////////////////////METHODS COMMUNES////////////////////
    public String toString(){
        return super.toString();
    }
}
