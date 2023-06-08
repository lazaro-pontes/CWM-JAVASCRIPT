# FUNÇÃO

Em javaScript quase tudo é função:

- Object
- class

Fazendo analogia com a receita de bolo a função seria o verbo, uma ação, ela executa um processo baseado nas senteças de codigo, a função define um bloco associado de codigo delimitado por chaves. Ou seja uma função nada mais é que um trecho de codigo em que foi dado um nome a ele e você pode re-usar onde quiser dentro do programa.

Uma função como em uma receita de bolo recebe os ingredientes (**dados de entrada**) e no corpo da função (**bloco de codigo**) você fara todo passo a passo da receita (**senteças de codigo**) e no final teremos o bolo (**retorno da função**).

## Anatomia das funções

- palavra reservada **function**
- nome da função
- parametros (*definido por parenteses* e separado por vírgula)
- corpo da função (*definido por chaves*)

`function soma(a, b){return a + b}`  
`console.log(soma(3, 3))`

Também podemos armazenar funçoes em variaveis

- palavra reservada pra variavel (**var, let, const**)
- nome da variavel
- função anônima

`const imprimirSoma = function(a, b){console.log(a + b)}`  
`imprimirSoma(3, 7)`

Outra forma é a ArrowFunction uma forma reduzida de escrever funções:

- palavra reservada para variavel
- nome da variavel
- atribui os parenteses (**parametros**)
- igual e maior que (**=>**)
- corpo da função

`const soma = (a, b) => {return a + b}`

> obs: nas arrowFunctions podemos ter o retorno implícito
> quando tivermos apenas uma linha no corpo da função
> omitindo as chaves como temos abaixo

`const subtracao = (a, b) => a - b`
