Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota){
    
    if (nota.entre(9, 10)){
        console.log("Parabéns você foi destaque!!!")
    
    } else if (nota.entre(7, 8.999)){
        console.log("Aluno aprovado.")

    }else if (nota.entre(4, 6.999)){
        console.log("Você está de recuperação!")

    }else if (nota.entre(0, 3.999)){
        console.log("Infelizmente você está automaticamente reprovado!!!")

    }else {
        console.log("Nota Inválida!!!")
    }
}


imprimirResultado(9.5)
imprimirResultado(8)
imprimirResultado(6.5)
imprimirResultado(3)
imprimirResultado(-1)
imprimirResultado(11)
