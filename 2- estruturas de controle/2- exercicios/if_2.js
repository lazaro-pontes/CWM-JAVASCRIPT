//estranhezas do JS muito cuidado

function teste1(numero) {
    if (numero > 7) //if pode ser escrito sem chaves porem apenas a 1º sentença sera considerada
        console.log(numero)
        console.log("final")
}

teste1(4)
teste1(8)

function teste2(numero) {
    if (numero > 7); { // cuidado com ; ele determina o fim de uma sentença
        console.log(numero)
    }
}

teste2(5)
teste2(8)