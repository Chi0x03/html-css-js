#include <stdio.h>
#include <stdlib.h>

typedef struct bosta{
    char *nome;
    struct bosta *next;
} Bosta;

Bosta *nova_bosta(char *valor){
    Bosta *tmp = (Bosta*)malloc(sizeof(Bosta));
    tmp->nome = valor;
    tmp->next = NULL;
    return tmp;
}

void mostra_lista(Bosta *n){
    int i = 0;
    while (n != NULL) {
        printf("%i:%s -> ", i, n->nome);
        n = n->next;
        i++;
    }
    puts("[nada]");
}

int main(void){
    Bosta *cu = nova_bosta("merda");
    Bosta *cu2 = nova_bosta("bosta");
    Bosta *cu3 = nova_bosta("mijo");

    cu->next = cu2;
    cu2->next = cu3;
    cu3->next = NULL;

    // printf("fodase %s\n", cu->nome);
    mostra_lista(cu);

    return 0;
}