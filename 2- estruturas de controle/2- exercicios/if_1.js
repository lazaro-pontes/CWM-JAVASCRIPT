function soNoticiaBoa(nota){
    if(nota >= 7){
        console.log(`aprovado com: ${nota}`)
    }
}

soNoticiaBoa(7.1)
soNoticiaBoa(7)
soNoticiaBoa(6.9)

function seForVerdadeiroEuFalo(valor) {
    if (valor) {
        console.log(`o valor ${valor} resolve para verdadeiro`)
    }
}

seForVerdadeiroEuFalo()
seForVerdadeiroEuFalo(null)
seForVerdadeiroEuFalo(undefined)
seForVerdadeiroEuFalo(NaN)
seForVerdadeiroEuFalo('')
seForVerdadeiroEuFalo(0)
seForVerdadeiroEuFalo(-1)
seForVerdadeiroEuFalo(' ') //presta atenção essa string não está vazia tem um espaço
seForVerdadeiroEuFalo([])
seForVerdadeiroEuFalo([1, 3])
seForVerdadeiroEuFalo({})