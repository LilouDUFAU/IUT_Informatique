#ifndef OUTILS_H
#define OUTILS_H

#include <time.h>
class Outils
{
    /// ATTRIBUTS -non-
    /// METHODES
public:
    // CONSTRUCTEUR -non-
    // DESTRUCTEUR -non-
    // ENCAPSULATION -non-
    // METHODES USUELLES -non-
    // METHODE SPECIFIQUE : anneeActuelle
    // Méthode de classe qui retourne l’année actuelle
    static short int anneeActuelle()
    {
        time_t timer;       // stocke l’heure actuelle
        struct tm *newTime; // pointe sur une structure
        // demande l'heure que l’on récupère à l’adresse de timer
        time(&timer);
        newTime = localtime(&timer);      // décompose timer dans 1 structure
        return (newTime->tm_year + 1900); // retourne l’heure actuelle
    }

protected: // -non-
private:   // -non-
};
#endif