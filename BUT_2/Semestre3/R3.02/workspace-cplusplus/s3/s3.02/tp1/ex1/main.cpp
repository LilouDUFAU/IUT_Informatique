/**
 * @file main.cpp
 * @author Lilou DUFAU
 * @brief
 * @version 0.1
 * @date 2024-09-09
 *
 * @copyright Copyright (c) 2024
 *
 */

#include "Outil.h"
#include "Sportif.h"
#include "SportifMenteur.h"
#include <iostream>

using namespace std;

int main()
{

    cout << "Cette annee nous sommes en : " << Outils::anneeActuelle() << endl << endl;

///////////////////////////////////////////////////
///////////////CREATION DES SPORTIFS///////////////
///////////////////////////////////////////////////
    Sportif sportif1("DUFAU", "Lilou", 2007);
    SportifMenteur sportif2("HEUZE", "Melynda", 2000, "Priscilia");
    SportifMenteur sportif3("MARSAN", "Louis", 2010, "Enora");

    cout << sportif1.toString() << endl;
    cout << sportif2.toString() << endl;
    cout << sportif3.toString() <<endl;

    return 0;
}