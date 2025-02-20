import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        SondeMeteo sondeMeteo = new SondeMeteo();
        Afficheur afficheur = new Afficheur(sondeMeteo);
        BaseDeDonnees baseDeDonnees = new BaseDeDonnees(sondeMeteo);

        Scanner saisie = new Scanner(System.in);

        while (true) {
            System.out.println("### SAISIR LES VALEURS POUR LA SONDE (on simule) ###");
            System.out.print("Date et heure (aaaa/mm/jj hh:mm) ? ");
            String dateHeure = saisie.nextLine();

            System.out.print("Température en °C ? ");
            double temperature = saisie.nextDouble();
            saisie.nextLine(); // Consomme la fin de ligne

            System.out.print("Pression en hPa ? ");
            double pression = saisie.nextDouble();
            saisie.nextLine(); // Consomme la fin de ligne

            sondeMeteo.setMesures(dateHeure, temperature, pression);

            System.out.println(sondeMeteo);
            System.out.println(afficheur);
            System.out.println(baseDeDonnees);
        }
    }
}
