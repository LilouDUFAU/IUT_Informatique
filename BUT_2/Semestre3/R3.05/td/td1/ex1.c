#include <stdlib.h>
#include <stdio.h>

int main()
{
    printf("A\n");
    fork();
    printf("B\n");
    fork();
    printf("C\n");
    exit(EXIT_SUCESS);
}