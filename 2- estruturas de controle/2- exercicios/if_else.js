const imprimirResultado = function (nota) {
    if(nota >= 7) {
        console.log("aprovado!!!")
    } else {
        console.log("reprovado!!!")
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado("opa") // cuidado ao confiar no usuario, pois a linguagem é fracamente tipada