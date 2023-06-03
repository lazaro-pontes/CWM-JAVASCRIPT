# tipos de dados em JavaScript

tipos são a forma basica de se estruturar dados em uma linguagem, Javascript veremos alguns:

## Number

este é o tipo que representa os numeros em javascript, sejam eles inteiros ou ponto flutuantes.  

o tipo Number permite que usemos algumas funções especificas para numeros.

para referencias futuras: [MDN Number JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

### Objeto Math

Math é um Object que contem varias funçoes e constantes dentro dele isso permite que realizemos operações de maneira mais precisa e rápida.

    const raio = 5.6
    const area = Math.PI * Math.pow(raio, 2)

    console.log(area)
    console.log(typeof Math) // Object

> Math.pow é a operação de potencia

para referencia futura: [MDN Math javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math)

## String

string é uma tipo que representa uma cadeia de caracteres. no *javascript* uma string pode ser delimitada de 3 formas:

- aspas duplas
- aspas simples
- simbolo de crase

As Strings possuem varias funçoes associadas.

    const escola = "cod3r"

    console.log(escola.charAt(4))
    console.log(escola.charAt(5))
    console.log(escola.charCodeAt(3))
    console.log(escola.indexOf("3"))

    console.log(escola.substring(1))
    console.log(escola.substring(0, 3))

    console.log("escola ".concat(escola).concat("!"))
    console.log(escola.replace(3, "e"))

    console.log("Ana, Maria, Pedro".split(","))

explicando cada função:

- **charAt** retorna o caractere na posição tal
- **charCodeAt** retorna o codigo uniCode do caractere
- **indexOf** retorna o indice de determinado caractere
- **substring** retorna um trecho da String `(inicio, fim)`
- **concat** concatena, pode ser substituido pelo: **+**
- **replace** substitui um caractere por outro.
- **split** quebra a String em um Array dado um separador, no caso a vírgula.
- **toUpperCase** transforma a String em maiúsculo.

### Template String

É uma forma de concatenar varias strings de uma forma mais pratica e elegante, sem deixar o codigo sujo e feio com um monte de **.concat** e/ou **+**.

Ela funciona usando o **simbolo de crase** e interpola variaveis com **${}**

>``template_string = `ola ${nome_da_variavel}, happy!` ``

Dentro de template strings você pode realizar operações

>`` console.log(`1 + 1 = ${1+1}`) ``  
> resultado será: 1 + 1 = 2

Apenas o que esta entre chaves sera interpolado

Referencias futuras: [MDN String Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String)

## Boolean

O tipo boleano representa o **verdadeiro** e **falso**, mas em javascript nós temos uma serie de valores que resolvem para um desses casos.

> exemplos de casos que resolve para **VERDADEIRO**.

- numeros inteiros.
- strings preenchidas, mesmo que com 1 espaço.
- um Array vazio.
- um Objeto literal
- o tipo infinity

> exemplos de casos que resolve para **FALSO**.

- o numero 0
- string vazia
- null
- NaN
- undefined

## Array

O Array é o vetor, uma estrutura unidmensional que armazena diversos valores com um unico identificador. Por exemplo invés de criarmos diversas variaveis para armazenar as notas de todos os alunos em uma sala criamos apenas um **Array** chamado **alunos**.

O Array é uma estrutura indexada, ou seja, ela tem indices começando a partir do **0**. Em Javascript seu tamanho não é fixo e seus valores são heterogeneos, o que quer dizer que um mesmo Array pode ter varios tipos de dados diferentes.

Existem algumas maneiras de criar Arrays, uma delas é a forma literal, abrindo colchetes e separando os elementos por virgula.

Exemplo:  
> const alunos_notas = [7.9, 8.9, 3.7, 10]  
>
> console.log(alunos_notas[0], alunos_notas[3])

Os valores retornados no console serão: `7.9 10`  
Lembrando que os elementos começam do **indice 0**.

Caso você tente acessar um indice que não esteja no Array o Javascript retornará **undefined**.  
Para saber o tamanho do Array basta usar: *nome_do_Array* **.length**.

A função **.push()** adiciona elementos a um Array após a ultima posição.  

A função **.pop()** retorna o ultimo elemento do Array e remove este do Array.

para excluir um elemento do Array: **delete alunos_notas[0]**,
nesse caso teriamos excluído o valor `7.9`.

Em **JavaScript** um **Array é** do tipo **Object**

## Object

O objeto é uma coleção de pares **chave** e **valor**.  
Para criar um Objeto usamos as chaves: **{}**, existem 2 formas de declarar Objetos, a forma **dinâmica** e a **literal**.

- **FORMA DINÂMICA**

Nessa forma você declara um objeto vazio e o preenche de acordo com a necessidade e para isso usamos a notação ponto (ou seja, ponto e o nome do atributo).

    const prod1 = {}
    prod1.nome = “Iphone 14“
    prod1.preco = 5000

    console.log(prod1)

> resultado no console
> **{nome: Iphone 14, preco: 5000}**
>
> *é possivel usar indentificadores com espaço, porem isso deve ser evitado*  
> **exemplo:** prod1[“deconto legal“] = 0.40

- **FORMA LITERAL**

Nessa forma você abre as chaves e separa os pares por virgula:

    const produto = {
        nome: “Iphone 13“,
        preco: 3500
    }
