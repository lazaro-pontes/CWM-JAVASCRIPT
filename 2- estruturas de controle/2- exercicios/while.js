function getInteirosAleatoriosEntre(min, max) {
    const valor = Math.random() * (max - min) + min

    return Math.floor(valor)
}

let numero = 0
let contagem = 0

while (numero !== -1 && contagem !== 6){
    numero = getInteirosAleatoriosEntre(-1, 33)

    contagem++
    console.log(numero)
}

console.log("até proxima!", contagem, "numeros sorteados")