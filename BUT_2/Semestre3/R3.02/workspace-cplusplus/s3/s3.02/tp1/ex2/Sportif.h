#ifndef SPORTIF_H
#define SPORTIF_H

#include "Outil.h"
#include <iostream>
using namespace std;




class Sportif{
    private:
        string _prenom;
        string _nom;
        int _anneeNaiss;
    public:
        Sportif(string,string,int);
        virtual ~Sportif();


//////////////////////////////////////////////////
///////////////GETTEURS ET SETTEURS///////////////
//////////////////////////////////////////////////

        //Getteurs
        string getPrenom();
        string getNom();
        int getAnneeNaiss();

        //Setteurs
        void setPrenom(string);
        void setNom(string);
        void setAnneeNaiss(int);


//////////////////////////////////////////////////
/////////METHODES USUELLES ET SPECIFIQUES/////////
//////////////////////////////////////////////////

        //Methodes usuelles
        string toString();
        
        //Methodes specifiques
        virtual int getAge();
};

#endif