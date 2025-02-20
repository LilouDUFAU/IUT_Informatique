/**
 * @file main.cpp
 * @author Lilou DUFAU
 * @brief
 * @version 0.1
 * @date 2024-09-16
 *
 * @copyright Copyright (c) 2024
 *
 */

//#include "Outil.h"
#include "Voiture.h"
#include "Individu.h"
#include <iostream>

using namespace std;

int main()
{
///////////////////////////////////////////////////
///////////////CREATION DES SPORTIFS///////////////
///////////////////////////////////////////////////
    Voiture voit1("RenaultClio","123AB64");
    Voiture voit2("Peugeot106","678CD96");
    Voiture voit3("CitroenPicasso","456EF75");

    Individu ind1("Dupond","Pierre");
    Individu ind2("Martin","Louis");
    Individu ind3("Durand","Marcel");


    cout<<voit1.toString()<<endl;
    cout<<voit2.toString()<<endl;
    cout<<voit3.toString()<<endl;

    cout<<endl;

    cout<<ind1.toString()<<endl;
    cout<<ind2.toString()<<endl;
    cout<<ind3.toString()<<endl;

    cout << voit1.toStringAndLink() << endl;
    voit1.setPilote(&ind2);
    
    cout << voit1.toStringAndLink() << endl;

    return 0;
}