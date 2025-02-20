#include "Individu.h"
#include "Voiture.h"

//////////////////////////////////////////////////
///////////CONSTRUCTEUR ET DESTRUCTEURS///////////
//////////////////////////////////////////////////

//Constructeurs
Individu::Individu(string monNom,string monPrenom){
    this->setNom(monNom);
    this->setPrenom(monPrenom);
    this->setVoiture(nullptr);
}

//destructeur
Individu::~Individu(){}


//////////////////////////////////////////////////
////////////////GETTERS ET SETTERS////////////////
//////////////////////////////////////////////////

//Getters
string Individu::getNom(){
    return this->_nom;
}

string Individu::getPrenom(){
    return this->_prenom;
}

Voiture* Individu::getVoiture(){
    return this->_voiture;
}

//Setters
void Individu::setNom(string n){
    this->_nom=n;
}

void Individu::setPrenom(string pr){
    this->_prenom=pr;
}

void Individu::setVoiture(Voiture* v){
    this->_voiture=v;
}
// equivaut a majMaVoiture


//////////////////////////////////////////////////
/////////METHODES USUELLES ET SPECIFIQUES/////////
//////////////////////////////////////////////////

//Methodes usuelles
string Individu::toString() {
    return "Individu: " + this->getNom() +" " + this->getPrenom()  ;
}


string Individu::toStringAndLink(){
    string msg=this->toString();
    if (this->getVoiture() != nullptr)
    {
        return msg + "et conduit: "+this->getVoiture()->toString() ;
    }
    else
    {
        return msg;
    }
    
}


//Methodes specifiques
// void Individu::majMaVoiture(Voiture* v){
// }

void Individu::supprimerLien(){
    this->setVoiture(nullptr);
}

void Individu::setMaVoiture(Voiture* v){
    if (v->getIndividu() != nullptr)
    {
        v->getIndividu()->supprimerLien();
    }
    if (this->getVoiture() != nullptr)
    {
        this->getVoiture()->supprimerLien();
    }
    v->setPilote(this);
    this->setVoiture(v);
}