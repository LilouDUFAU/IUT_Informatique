import java.util.*;

public class Client {

    /////////////////////////////////////
    ///////////// Attributs /////////////
    /////////////////////////////////////
    private string _nom;
    private string _telephone;
    private Table _maTable;

    /////////////////////////////////////
    //////////// Constructeur ///////////
    /////////////////////////////////////
    public Client(string, string);

    /////////////////////////////////////
    ////////////// Getters //////////////
    /////////////////////////////////////
    public string getNom() {
        return _nom;
    }
    public string getTelephone(){
        return _telephone;
    }
    public Table get_maTable() {
        return _maTable;
    }

    /////////////////////////////////////
    ////////////// Getters //////////////
    /////////////////////////////////////
    public void setNom(string){
        this._nom = _nom;
    }
    public void setTelepone(string){
        this._telephone = _telephone;
    }
    public void set_maTable(Table _maTable) {
        this._maTable = _maTable;
    }

    /////////////////////////////////////
    ///////// Methodes usuelles /////////
    /////////////////////////////////////
    public string toString(){
        if (_maTable != null) {
            return "Numero de la table est" + _numTable ;
        }
        return "Le client " + _nom +  "possede le numero de telephone: " + _telephone;
    }

    boolean equals(Object o){
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Client client = (Client) o;
        return Object.equals(_nom, client._nom) && Object.equals(_telephone,client._telephone);
    }

    /////////////////////////////////////
    /////// Methodes specifiques ////////
    /////////////////////////////////////
    public void lierMaTable(Table laTable){
        if (laTable != null){
            this.delierMaTable();
            laTable.delierMonClient();
        }
        this.setMaTable(laTable);
        laTable.setMonClient(this);
        system.out.println("Liee avec succes\n");
    }
    public void delierMaTable(){
        if (_maTable != null){
            this._maTable.setMonClient(null);
            this.set_maTable(null);
        }
        system.out.println("Deliee avec succes\n");
    }

}