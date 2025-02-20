public class Utilisateur extends Acteur{
    //Attributs
    private String nom;

    //Constructeur
    public Utilisateur(String nom){
        this.nom = nom;
    }

    //Encapsulation
    public String getNom(){
        return nom;
    }
    public void setNom(String nom){
        this.nom = nom;
    }
}
