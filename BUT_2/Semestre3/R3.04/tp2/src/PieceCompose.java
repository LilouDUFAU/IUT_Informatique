import java.util.ArrayList;

public class PieceCompose extends PieceComposant{
    ////////////////////ATTRIBUTES////////////////////
    //inherits de la class mere
    private ArrayList<PieceComposant> _lstPiece;

    ////////////////////CONSTRUCTORS / DESTRUCTORS////////////////////
    public PieceCompose() {
        super.setLibelle("");
        super.setPrice(0);
        _lstPiece = new ArrayList<>();
    }

    //public ~PieceCompose(){}

    ////////////////////ENCAPSULATION////////////////////
    //GETTERS
    //inherits de la class mere
    public int getPrice() {
        int res = super.getPrice();
        for (PieceComposant item : getLstPiece()) {
            res += item.getPrice();
        }
        return res;
    }

    public ArrayList<PieceComposant> getLstPiece() {
        return _lstPiece;
    }

    //SETTERS
    //inherits de la class mere
    public void setLstPiece(ArrayList<PieceComposant> lst) {
        this._lstPiece = lst;
    }

    ////////////////////METHODS COMMUNES////////////////////
    public String toString() {
        return super.toString() + "PieceCompose{" + "_lstPiece=" + _lstPiece + '}';
    }

    public boolean addPiece(PieceComposant piece) {
        if (_lstPiece.add(piece)){
            return true;
        }
        else {return false;}
    }

    public boolean removePiece(PieceComposant piece) {
        if (_lstPiece.remove(piece)){
            return true;
        }
        else {return false;}
    }

    public boolean existPiece(PieceComposant piece) {
        if (_lstPiece.contains(piece)){
            return true;
        }
        else {return false;}
    }
}
