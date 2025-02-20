#ifndef INDIVIDU_H
#define INDIVIDU_H

//#include "Outil.h"
#include <iostream>
using namespace std;


class Voiture;


class Individu{
    private:
        string _nom;
        string _prenom;
        Voiture* _voiture;
    public:
        Individu(string,string);
        Individu(string,string,Voiture*);
        ~Individu();

//////////////////////////////////////////////////
////////////////GETTERS ET SETTERS////////////////
//////////////////////////////////////////////////

        //Getters
        string getNom();
        string getPrenom();
        Voiture* getVoiture();

        //Setters
        void setNom(string);
        void setPrenom(string);
        void setVoiture(Voiture*);

//////////////////////////////////////////////////
/////////METHODES USUELLES ET SPECIFIQUES/////////
//////////////////////////////////////////////////

        //Methodes usuelles
        string toString();
        string toStringAndLink();
        
        //Methodes specifiques
        // void majMaVoiture(Voiture*);
        void supprimerLien();
        void setMaVoiture(Voiture*);
        
       
};

#endif