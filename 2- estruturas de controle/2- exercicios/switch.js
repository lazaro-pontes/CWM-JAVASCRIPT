const imprimirResultado = function(nota){
    switch (Math.floor(nota)) {
        case 10: case 9:
            console.log("parabéns você foi destaque")
            break;
        case 8: case 7:
            console.log("você foi aprovado")    
            break;
        case 6: case 5: case 4:
            console.log("você está de recuperação")
            break;
        case 3: case 2: case 1: case 0:
            console.log("infelizmente você foi reprovado")
            break;
        default:
            console.log("nota invalida!!!")
            break;
    }
    // console.log("fim!")
}

imprimirResultado(10)
imprimirResultado(7.8)
imprimirResultado(5.9)
imprimirResultado(2)

imprimirResultado(11)
imprimirResultado(-1)
imprimirResultado("ola")