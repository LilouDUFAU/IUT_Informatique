#include "SportifMenteur.h"

SportifMenteur::SportifMenteur(string leNom, string lePrenom, int lAnneeNaiss, string leTuteur) : Sportif(leNom, lePrenom, lAnneeNaiss)
{
    this->setTuteur(leTuteur);
}

SportifMenteur::~SportifMenteur() {}

//////////////////////////////////////////////////
///////////////GETTEURS ET SETTEURS///////////////
//////////////////////////////////////////////////

// Getteurs
string SportifMenteur::getTuteur()
{
    return this->_tuteur;
}

// Setteurs
void SportifMenteur::setTuteur(string t)
{
    this->_tuteur = t;
}

//////////////////////////////////////////////////
/////////METHODES USUELLES ET SPECIFIQUES/////////
//////////////////////////////////////////////////

// Methodes usuelles
string SportifMenteur::toString()
{
    string message = this->Sportif::toString();
    message +=" et a pour tuteur " + this->getTuteur();
    return message;
}

// Methodes specifiques
int SportifMenteur::getAge()
{
    int age = this->Sportif::getAge();

    if (age >= 18)
    {
        return age;
    }
    else
    {
        return 18;
    }
}