public class SondeMeteo extends Observable {
    private String dateHeure;
    private double temperature;
    private double pression;

    public void setMesures(String dateHeure, double temperature, double pression) {
        this.dateHeure = dateHeure;
        this.temperature = temperature;
        this.pression = pression;
        notifierObservateurs();
    }

    public String getDateHeure() {
        return dateHeure;
    }

    public double getTemperature() {
        return temperature;
    }

    public double getPression() {
        return pression;
    }

    @Override
    public String toString() {
        return "SONDE METEO : Date et heure (" + dateHeure + "), Température °C (" + temperature + "), Pression hPa (" + pression + ")";
    }
}
