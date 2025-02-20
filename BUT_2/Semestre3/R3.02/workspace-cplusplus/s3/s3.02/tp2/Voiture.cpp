#include "Voiture.h"
#include "Individu.h"

//////////////////////////////////////////////////
//////////CONSTRUCTEURS ET DESTRUCTEURS///////////
//////////////////////////////////////////////////

// Constructeurs
Voiture::Voiture(string maMarque, string maPlaque)
{
    this->setMarque(maMarque);
    this->setPlaque(maPlaque);
    this->setPilote(nullptr);
}

Voiture::Voiture(string maMarque, string maPlaque, Individu *monPilote)
{
    this->setMarque(maMarque);
    this->setPlaque(maPlaque);
    this->setPilote(monPilote);
}

// Destructeur
Voiture::~Voiture() {}

//////////////////////////////////////////////////
////////////////GETTERS ET SETTERS////////////////
//////////////////////////////////////////////////

// getters
string Voiture::getMarque()
{
    return this->_marque;
}

string Voiture::getPlaque()
{
    return this->_plaque;
}

Individu *Voiture::getIndividu()
{
    return this->_individu;
}

// setters

void Voiture::setMarque(string m)
{
    this->_marque = m;
}

void Voiture::setPlaque(string pl)
{
    this->_plaque = pl;
}

void Voiture::setPilote(Individu *i)
{
    this->_individu = i;
}
// equivaut a majMonPilote

//////////////////////////////////////////////////
/////////METHODES USUELLES ET SPECIFIQUES/////////
//////////////////////////////////////////////////

// Methodes usuelles
string Voiture::toString()
{
    return "Voiture de la marque: " + this->getMarque() + " , immatriculee: " + this->getPlaque();
}

string Voiture::toStringAndLink()
{
    string msg = this->toString();

    if (this->getIndividu() != nullptr)
    {
        return msg + " et appartient a: " + this->getIndividu()->toString();
    }
    else
    {
        return msg;
    }
}

// Methodes specifiques
// void Voiture::majMonPilote(Individu* i){
// }

void Voiture::supprimerLien()
{
    this->setPilote(nullptr);
}

void Voiture::setMonPilote(Individu *i)
{
    if (i->getVoiture() != nullptr)
    {
        i->getVoiture()->supprimerLien();
    }
    if (this->getIndividu() != nullptr)
    {
        this->getIndividu()->supprimerLien();
    }
    i->setVoiture(this);
    this->setPilote(i);
} 