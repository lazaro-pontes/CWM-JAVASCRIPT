function random({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const objeto = {max: 30, min: 3}

console.log(random(objeto))
console.log(random({ min: 745 }))
console.log(random({}))

// console.log(random()) //erro