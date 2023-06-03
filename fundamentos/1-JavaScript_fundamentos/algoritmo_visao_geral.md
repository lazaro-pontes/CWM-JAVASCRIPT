# ALGORITMO

Algoritmo é uma sequência de passos. não necessariamente está ligado a desenvolvimento de software.

> ## exemplo de algoritmo pra chegar na Estação:
>
>   1. sair de casa.
>   2. trancar a porta.
>   3. andar até a ponte.
>   4. atravessar a rua.
>   5. andar até a praça de alimentação.
>   6. cruzar a praça.
>   7. chegar na Estação.

## TEM REPETIÇÃO

você pode repetir uma sequència de passos.  
> imagine que tu tens uma pilha de documentos pra assinar, esse seria o fluxo:  

![fluxograma de repetição](/prints/Captura%20de%20tela%20de%202023-05-24%2002-53-56.png)

eventualmente teremos algoritmos que repetirão passos ou até mesmo pular passos dependendo de condições serem satisfeitas.  

![fluxo de repetição](/prints/Captura%20de%20tela%20de%202023-05-24%2003-34-37.png)

## TEM DECISÃO

Além de repetir você também pode escolher passos em detrimento de outros ou até não fazer nada.

> imagine que temos um algoritmo para notas de alunos

![fluxograma de notas](/prints/Captura%20de%20tela%20de%202023-05-24%2003-43-06.png)

fica claro a partir desse fluxograma que apenas um dos passos sera executado, **aprovado** ou **reprovado**, nunca os dois juntos, pois o valor da nota diz qual lado da logica ele vai.

### Mais sobre decisão:

![mais sobre decisão](/prints/Captura%20de%20tela%20de%202023-05-24%2003-50-21.png)


## ALGORITMOS NA VIDA

- trajeto de casa para o trabalho
- almoço  
    >almoço geralmente terá um quantidade indeterminada de passos, juntamente com uma estrutura de repetição.  
    > Ex: tem comida no prato? se sim: colherada, senão fim
- receita de bolo
    > um classico, pois nele nós temos os **ingredientes** que seriam os **dados**, o passo a passo e estruturas de repetição
- SEDEX ou PAC
- 2³


### Algoritmo de vestir *(versão 1.0)*

> CUECA -> MEIAS -> SAPATO -> CALÇA -> CAMISA

esse algoritmo funciona porém não é o mais eficiente, pois colocar a calça ja de sapato atrasa um pouco né.

### Algoritmo de vestir *(versão 2.0)*

> CALÇA -> MEIAS -> SAPATO -> CUECA -> CAMISA

Já nessa versão teremos um Bug, pois o usuario iria parecer o superman com a calça por baixo da cueca

### Algoritmo de vestir *(versão 3.0)*

> CUECA -> CALÇA -> MEIAS -> SAPATO -> CAMISA

versão mais otimizada e correta.  
A ordem dos passos importa não apenas quais passos.

## REPRESENTAÇÃO

- fluxograma
- linguagem natural
    > portugues, ingles, espanhol...
- linguagem artificial
    > JavaScript, PHP, C#, GO...
- pseudo-linguagem
    > 1. Algoritmo "SomaDoisValores"
    > 2. **declare**
    > 3.    *soma*, *a*, *b:* inteiro
    > 4. **inicio**
    > 5. escreva(**"digite dois números"**)
    > 6. leia (**a,b**)
    > 7. *soma* <-- **a+b**
    > 8. escreva(**soma**)
    > 9. FIM