public class BaseDeDonnees extends Observateur {
    private SondeMeteo observable;
    private String dateHeure;
    private double temperature;
    private double pression;

    public BaseDeDonnees(SondeMeteo observable) {
        this.observable = observable;
        this.observable.ajouterObservateur(this);
    }

    @Override
    public void reagir() {
        this.dateHeure = observable.getDateHeure();
        this.temperature = observable.getTemperature();
        this.pression = observable.getPression();
    }

    @Override
    public String toString() {
        return "BASE DE DONNEES : Date et heure (" + dateHeure + "), Température °C (" + temperature + "), Pression hPa (" + pression + ")";
    }
}
