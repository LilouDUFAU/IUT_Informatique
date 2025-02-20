import java.util.*;

public class Table {

    /////////////////////////////////////
    ///////////// Attributs /////////////
    /////////////////////////////////////
    private string _numTable;
    private Client _monClient;

    /////////////////////////////////////
    //////////// Constructeur ///////////
    /////////////////////////////////////
    public Table(string);

    /////////////////////////////////////
    ////////////// Getters //////////////
    /////////////////////////////////////
    public string getNumTable() {
        return _numTable;
    }

    /////////////////////////////////////
    ////////////// Getters //////////////
    /////////////////////////////////////
    public void setNumTable(string){
        this._nom = _numTable;
    }

    /////////////////////////////////////
    ///////// Methodes usuelles /////////
    /////////////////////////////////////
    public string toString(){
        if (_monClient != null){
            return "Le client " + _nom +  "possede le numero de telephone: " + _telephone;
        }
        return "Numero de la table est" + _numTable ;
    }

    boolean equals(Object o){
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Table table = (Table) o;
        return Object.equals(_numTable, table._numTable) ;
    }

    /////////////////////////////////////
    /////// Methodes specifiques ////////
    /////////////////////////////////////
    public void lierMonClient(Client leClient){
        if (leClient != null){
            this.delierMonClient();
            leClient.delierMaTable();
        }
        this.setMonClient(leClient);
        leClient.setMaTable(this);
        system.out.println("Liee avec succes\n");
    }
    public void delierMonClient(){
        if (_monClient != null){
            this._monClient.setMaTable(null);
            this.set_monClient(null);
        }
        system.out.println("Deliee avec succes\n");
    }

}