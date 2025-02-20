#include <iostream>
using namespace std;

#include <list>
#include <utility>
#include <map>

void listeSimple();
void listePairs();
void leMap();
// void vector();

int main(void)
{
    cout << "listeSimple : " << endl;
    listeSimple();
    cout << endl;
    cout << "listePair : " << endl;
    listePairs();
    cout << endl;
    // vector();
    cout << "map : " << endl;
    leMap();
    cout << endl;
    return 0;
}

void listeSimple()
{
    typedef list<string> ListeS;
    ListeS uneListeS;
    uneListeS.push_back(ListeS::value_type("Pantxika"));
    uneListeS.push_back(ListeS::value_type("Yann"));
    uneListeS.push_back(ListeS::value_type("Philippe"));
    uneListeS.push_back(ListeS::value_type("Patrick"));

    ListeS::iterator iterateurListeS;
    iterateurListeS = uneListeS.begin();

    while (iterateurListeS != uneListeS.end())
    {
        cout << *iterateurListeS << endl;
        iterateurListeS++;
    }
}

void listePairs()
{
    typedef pair<string, string> pairS;
    typedef list<pairS> listeP;
    listeP uneListeP;

    uneListeP.push_back(listeP::value_type(pairS(pairS::first_type("Pantxika"), pairS::second_type("06.01.01.01.01"))));
    uneListeP.push_back(listeP::value_type(pairS(pairS::first_type("Yann"), pairS::second_type("06.02.02.02.02"))));
    uneListeP.push_back(listeP::value_type(pairS(pairS::first_type("Philippe"), pairS::second_type("06.03.03.03.03"))));
    uneListeP.push_back(listeP::value_type(pairS(pairS::first_type("Patrick"), pairS::second_type("06.04.04.04.04"))));

    listeP::iterator iterateurListeP;
    iterateurListeP = uneListeP.begin();

    while (iterateurListeP != uneListeP.end())
    {
        cout << iterateurListeP->first << " " << iterateurListeP->second << endl;
        iterateurListeP++;
    }
}

void leMap()
{
    typedef map<string, string> Annuaire;
    Annuaire unAnnuaire;
    typedef Annuaire::iterator IterateurAnnuaire;
    pair<IterateurAnnuaire, bool> ResultatInsert;

    ResultatInsert = unAnnuaire.insert(Annuaire::value_type("Pantxika","06.01.01.01.01"));
    // ResultatInsert = unAnnuaire.insert(Annuaire::value_type("Pantxika","06.01.01.01.01"));

    if (ResultatInsert.second == true)
    {
        cout << "Insertion BIEN realisee" << endl;
    }
    else
    {
        cout << "Insertion MAL realisee" << endl;
        ResultatInsert = unAnnuaire.insert(Annuaire::value_type("Pantxika","06.01.01.01.01"));
        if (ResultatInsert.second == true)
        {
            cout << "Insertion BIEN realisee" << endl;
        }
        else{
            cout << "Insertion MAL realisee" << endl;            
        }       
    }

    ResultatInsert = unAnnuaire.insert(Annuaire::value_type("Yann","06.02.02.02.02"));
    ResultatInsert = unAnnuaire.insert(Annuaire::value_type("Philippe","06.03.03.03.03"));
    ResultatInsert = unAnnuaire.insert(Annuaire::value_type("Patrick","06.04.04.04.04"));

    IterateurAnnuaire unIterateur;
    unIterateur = unAnnuaire.begin();

    while (unIterateur!= unAnnuaire.end())
    {
        cout << "Numero de telephone : " << unIterateur->second << endl;
        unIterateur ++;
    }
    
    
}
