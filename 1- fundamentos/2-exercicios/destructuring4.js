function random([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}   

console.log(random([50, 40]))
console.log(random([995]))
console.log(random([, 10]))
console.log(random([]))

// console.log(random()) //erro