let contador = 1

while (contador <= 10){
    console.log(`contador: ${contador}`)

    contador++
}

for(let i = 1; i <= 10; i++){
    console.log(`I: ${i}`)

}

let notas = [6.5, 7.0, 8.9, 10, 8.9]

for (let index = 0; index < notas.length; index++) {
    const nota = notas[index];
    
    console.log(`nota: ${nota}`)
}