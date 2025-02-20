#include <iostream>
using namespace std;

#include "Sportif.h"
#include "Outil.h"


class SportifMenteur:public Sportif{
    private:
        string _tuteur;
    public:
        SportifMenteur(string,string,int,string);
        ~SportifMenteur();


//////////////////////////////////////////////////
///////////////GETTEURS ET SETTEURS///////////////
//////////////////////////////////////////////////

        //Getteurs
        string getTuteur();

        //Setteurs
        void setTuteur(string);


//////////////////////////////////////////////////
/////////METHODES USUELLES ET SPECIFIQUES/////////
//////////////////////////////////////////////////

        //Methodes usuelles
        string toString();
        
        //Methodes specifiques
        int getAge();
};