#ifndef VOITURE_H
#define VOITURE_H

//#include "Outil.h"
#include <iostream>
using namespace std;

class Individu;

class Voiture{
    private:
        string _marque;
        string _plaque;
        Individu* _individu;
    public:
        Voiture(string,string);
        Voiture(string,string,Individu*);
        ~Voiture();


//////////////////////////////////////////////////
////////////////GETTERS ET SETTERS////////////////
//////////////////////////////////////////////////

        //Getters
        string getMarque();
        string getPlaque();
        Individu* getIndividu();

        //Setters
        void setMarque(string);
        void setPlaque(string);
        void setPilote(Individu*);

//////////////////////////////////////////////////
/////////METHODES USUELLES ET SPECIFIQUES/////////
//////////////////////////////////////////////////

        //Methodes usuelles
        string toString();
        string toStringAndLink();
        
        //Methodes specifiques
        // void majMonPilote(Individu*);
        void supprimerLien();
        void setMonPilote(Individu*);       
}; 

#endif