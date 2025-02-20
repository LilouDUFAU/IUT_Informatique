#include <stdlib.h>
#include <stdio.h>

int main()
{
    // définir les variables
    const int tablght = 1000000;
    int tab[tablght];
    int searchedElement;
    int i;
    int pid;
    //pid_t pid;

    // saisir la valeur à rechercher
    printf("Veuillez entrer une valeur à chercher");
    scanf("%d", &searchedElement);  // %d correspond au type de l'objet (ici int) 
    
    for ( i = 0; i < tablght ; i++)
    {
        tab[i]=i;
    }

    // créer le processus fils
    pid = fork();    

    // traiter les différents cas
    switch (pid)
    {
    case -1:
    printf("Impossible de créer un processus fils \n");
        exit(EXIT_FAILURE);
        break;
    
    case 0:
    
    default:
        break;
    }
}
