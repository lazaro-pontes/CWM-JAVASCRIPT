const getInteirosAleatoriosEntre = function (min, max){
    const valor = Math.random() * (max - min) + min

    return Math.floor(valor)
}

let numero

do {
    numero = getInteirosAleatoriosEntre(-1, 30)

    console.log(numero)
} while (numero != -1)

console.log("até mais ver...")