#include "sportif.h"

Sportif::Sportif(string leNom, string lePrenom, int lAnneeNaiss)
{
    this->setPrenom(lePrenom);
    this->setNom(leNom);
    this->setAnneeNaiss(lAnneeNaiss);
}

Sportif::~Sportif(){}

//////////////////////////////////////////////////
///////////////GETTEURS ET SETTEURS///////////////
//////////////////////////////////////////////////

// Getteurs
string Sportif::getNom()
{
    return this->_nom;
}

string Sportif::getPrenom()
{
    return this->_prenom;
}

int Sportif::getAnneeNaiss()
{
    return this->_anneeNaiss;
}

// Setteurs
void Sportif::setNom(string n)
{
    this->_nom = n;
}

void Sportif::setPrenom(string p)
{
    this->_prenom = p;
}

void Sportif::setAnneeNaiss(int a)
{
    this->_anneeNaiss = a;
}


//////////////////////////////////////////////////
/////////METHODES USUELLES ET SPECIFIQUES/////////
//////////////////////////////////////////////////

// Methodes usuelles
string Sportif::toString()
{
    return this->_nom + " " + this->_prenom + " est ne(e) en : " + to_string(this->_anneeNaiss) +", est age(e) de " +to_string (this->getAge()) ;
}

// Methodes specifiques
int Sportif::getAge()
{
    return Outils::anneeActuelle() - this->_anneeNaiss;
}