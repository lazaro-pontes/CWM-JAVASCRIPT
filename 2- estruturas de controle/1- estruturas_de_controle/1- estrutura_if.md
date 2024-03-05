# ESTRUTURA DE CONTROLE: if()

Como ja vimos no outro capitulo de Boolean, varias expressoes podem ser transformadas em **true** ou **false**


## estrutura do bloco IF:

- palavra reservada **if**
- pareteses com a condição a ser validada
- bloco associado caso o resultado seja **true**

> if (valor){ senteça de codigo caso **true**}
> *vide:* exercicios/if.js

Quando temos estruturas de controle podemos selecionar certas sentenças de codigo  
para serem executadas caso uma codição seja satisfeita. Diferente do fluxo comum que cada sentença  
é executada na ordem em que foi escrita. As estruturas de controle serve para direcionar o fluxo de dados.

como ja vimos na parte de boolean, certos valores retonam **true** ou **false**, dessa forma podemos passar  
certos valores dentro do condicional do **if** e automaticamente ele irá converter em boolean.

> olhe a pasta exercicios

## ALGUNS CUIDADOS COM O BLOCO IF

O bloco **IF** pode ser usado sem expressamente digitar as chaves: **{}**  
mas ao usar dessa forma apenas a primeira expressão sera considerada

>vide: exercicios/if_2.js (aula 78)

## IF/ELSE:

blocos **if** tambem tem podem ter outro bloco associado chamado **else** esse bloco é retornado  
caso a expressão entre parenteses sseja falsa, em inglês literalmente que dizer: **senão**

muito cuidado com o fato de **javascript** ser fracamente tipado, isso faz com que caso o valor que seja passado seja
aceito, porém entendido como **boolean** poderá haver bugs, é o caso de passarmos **strings** em codigos que esperam **NUMBER**
