const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums){
    if (x == 5){
        break // SAI DO LAÇO MAIS PROXIMO, DESVIANDO O FLUXO
    }
    console.log(`x---> ${x} = ${nums[x]}`)
}

console.log(`\n`)

for (y in nums){
    if (y == 5){
        continue // INTERROMPE A REPETIÇÃO CORRENTE, MAS CONTINUA NO LAÇO
    }
    console.log(`y---> ${y} = ${nums[y]}`)
}


// usando rotulo --- EVITE USAR

externo: for (let a in nums){

    for (let b in nums){

        if (a == 2 && b == 3){
            break externo
        }
        console.log(`par = ${a}, ${b}`) 
        
    }
}


