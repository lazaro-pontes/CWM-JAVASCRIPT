# tipos de dados em JavaScript

tipos são a forma basica de se estruturar dados em uma linguagem, Javascript veremos alguns:

## Number

este é o tipo que representa os numeros em javascript, sejam eles inteiros ou pontos flutuantes.  

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
- **substring** retorna um trecho da String (inicio, fim)
- **concat** concatena, pode ser substituido pelo: **+**
- **replace** substitui um caractere por outro
- **split** quebra a String em um Array dado um separador
- **toUpperCase** transforma a String em maiúsculo

### Template String

É uma forma de concatenar varias strings de uma forma mais pratica e elegante, sem deixar o codigo sujo e feio com um monte de **.concat** e **+**.

Ela funciona usando o **simbode de crase** e interpola variaveis com **${}**

>``template_string = `ola ${nome_da_variavel}, happy!` ``

Dentro de template strings você pode realizar operações

>`` console.log(`1 + 1 = ${1+1}`) ``  
> resultado será: 1 + 1 = 2

Apenas o que esta entre chaves sera interpolado

Referencias futuras: [MDN String Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String)

