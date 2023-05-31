# tipos de dados em JavaScript

tipos são a forma basica de se estruturar dados em uma linguagem, Javascript veremos alguns:

## Number

este é o tipo que representa os numeros em javascript, sejam eles inteiros ou pontos flutuantes.  

o tipo Number permite que usemos algumas funções especificas para numeros.

para referencias futuras: [MDM Number JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

### Objeto Math

Math é um Object que contem varias funçoes e constantes dentro dele isso permite que realizemos operações de maneira mais precisa e rápida.

    const raio = 5.6
    const area = Math.PI * Math.pow(raio, 2)

    console.log(area)
    console.log(typeof Math) // Object

> Math.pow é a operação de potencia

para referencia futura: [MDM Math javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math)

## String

string é uma tipo que representa uma cadeia de caracteres. no *javascript* uma string pode ser delimitada de 3 formas:

- aspas duplas
- aspas simples
- simbolo de crase
