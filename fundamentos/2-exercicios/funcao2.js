//armazenando uma função em uma variavel

const imprimirSoma = function(a, b){
    console.log(a + b)
}

imprimirSoma(7, 9)

// Armazenando uma função arrow

const soma = (a, b) => {
    return a + b
}

console.log(soma(7, 3))

// retorno implícito

const subtracao = (a, b) => a - b
console.log(subtracao(7, 4))

// arrowFunction com apenas 1 parametro

const imprimir = a => console.log(a)
imprimir(`imprime tudo`)
