import java.util.ArrayList;

public abstract class Observable {
    private ArrayList<Observateur> mesObservateurs = new ArrayList<>();

    public void ajouterObservateur(Observateur obs) {
        mesObservateurs.add(obs);
    }

    public void supprimerObservateur(Observateur obs) {
        mesObservateurs.remove(obs);
    }

    protected void notifierObservateurs() {
        for (Observateur obs : mesObservateurs) {
            obs.reagir();
        }
    }
}
