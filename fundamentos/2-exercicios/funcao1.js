//função sem retorno

function imprimiSoma(a, b){
    console.log(a + b)
}

imprimiSoma(2, 3)
imprimiSoma(2) // soma o 1º parametro com undefined
imprimiSoma(2, 3, 5, 6, 7) // usa apenas os 2 primeiros
imprimiSoma() // soma undefined com undefined

// função com retorno

function soma(a, b = 1){ // atribuindo um valor padrao pro 2º parametro
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))