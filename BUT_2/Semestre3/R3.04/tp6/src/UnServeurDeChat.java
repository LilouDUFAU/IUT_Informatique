import java.util.ArrayList;

public class UnServeurDeChat extends Mediateur{
    //Attributs
    private String nomChat;
    private ArrayList<Utilisateur> uneListeUtilisateur;

    //Constructeur
    public UnServeurDeChat(String nomChat, ArrayList<Utilisateur> uneListeUtilisateur) {
        this.nomChat = nomChat;
        this.uneListeUtilisateur = uneListeUtilisateur;
    }

    //Encapsulation
    public String getNomChat() {
        return nomChat;
    }
    public void setNomChat(String nomChat) {
        this.nomChat = nomChat;
    }

    public ArrayList<Utilisateur> getUneListeUtilisateur() {
        return uneListeUtilisateur;
    }

    public void setUneListeUtilisateur(ArrayList<Utilisateur> uneListeUtilisateur) {
        this.uneListeUtilisateur = uneListeUtilisateur;
    }

    //Methodes
    public void diffuser (String unNomChat, Utilisateur unUtilisateur){

    }
    public void ajouter (Utilisateur unUtilisateur){
        this.uneListeUtilisateur.add(unUtilisateur);
    }
    public void retirer (Utilisateur unUtilisateur){
        this.uneListeUtilisateur.remove(unUtilisateur);
    }
    public boolean existe (Utilisateur unUtilisateur){
        return this.uneListeUtilisateur.contains(unUtilisateur);
    }
}
