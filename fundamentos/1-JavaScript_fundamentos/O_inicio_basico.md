# BASICO SOBRE JS

## Comentário

comentário serve pra documentar uma escolha.  
Existem comentários de bloco e de linha.

    //tudo que esta nessa linha nao sera processado


    //console.log <-- isso nao sera exibido no console

    /*isso sim -->*/ console.log("essa é uma forma nova de escrever um comentario")

    /* desse modo tudo que estiver 
    entre as barras é comentado, 
    se chama comentario de bloco*/

> faça comentários que tenham sentido e que acrescentem algo.  
> Preze pelo codigo legivel ao invés de um comentario que explica o trecho de codigo.

## VAR, LET e CONST

em JavaScript temos algumas palavras reservadas para criar variaveis:
> var, let, const

A anatomia da criação de variaveis é assim:

- PALAVRA RESERVADA (**var, let, const**)
- NOME DA VARIAVEL
- SIMBOLO DE ATRIBUIÇÃO (em JS é o igual: **=** )
- VALOR DA VARIAVEL

> var a = 4  
> let b = 5  
> const c = 7  

existem diferenças entre as palavras reservadas.  

**const** define constantes, ou seja, elas não podem ser alteradas durante a execução, **var** e **let** definem variaveis comuns, porém **let** é a **forma mais moderna**.

> **defina nomes claros paras suas variaveis.**  
> evite usar nomes genéricos e siglas.

### exemplo

    var a = 3
    let b = 4

    var a = 30
    let b = 40

    console.log(a, b)

> o codigo acima gera um erro, pois não podemos re-declarar uma **let** o correto seria o abaixo:

    var a = 3
    let b = 4

    var a = 30
    
    b = 40

    console.log(a, b)

> **var** tem um comportamento estranho por isso não devemos usar, ele permite re-declaração.

podemos atribuir novos valores as variaveis comuns

    a = 300
    b = 400

    console.log(a,b)

ja quando temos uma constante isso não é possivel, gera um erro:

    const c = 5 
    c = 50

    console.log(c)

## Tipagem fraca

a tipagem fraca significar que não precisamos definir o tipo de dado da variavel, ou seja, ela tem tipagem dinâmica, mas tipagem fraca nao significa que ela não tem tipos, apenas que uma variavel aceita vários tipos.

### exemplo de tipo fraco

![print de exemplo](/prints/Captura%20de%20tela%20de%202023-05-31%2005-45-06.png)
