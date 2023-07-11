# declaração de variaveis

Nesta parte iremos demonstrar conceitos sobre declarações de variaveis com **var** e **let**. Os principios aplicados ao **let** também se aplicam ao **const**.

## conceito de escopo

Escopo seria o local onde a variavel seria visivel/acessível. Em outras linguagens quando definimos blocos de codigo e então declaramos uma variavel essa variavel seria acessivel apenas dentro do bloco.

## Var  

Quando declaramos variaveis com **var** temos apenas dois *escopos*: **Global** e **Local**. No caso o **escopo local** seria **apenas** quando definada dentro de uma **função**.  

O grande perigo de declararmos **variaveis Globais** é apossibilidade de sobreescrita da mesma por algum descuido.

*vide exercicios: usandoVar.js*.

## Let

Já usando **let** o conceito de *Local* se aplica também em bloco onde a variavel definida com *let* sera visivel apenas dentro do bloco em questão. Caso tentemos usar uma variavel que não esteja no bloco atual o JavaScript irá procurar em blocos mais abrangentes.

Variaveis definidas com **let** tem escopo de: **GLOBAL**, **FUNÇÃO** e **BLOCO**