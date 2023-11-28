const peso1 = 1.0
const peso2 = Number(`2.0`) //transforma string em Number

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.890
const avaliacao2 = 6.765

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(`media -->`, media)
console.log(media.toFixed(2)) // mostra apenas 2 casa decimais
console.log(media.toString()) // tranforma Number em string
console.log(media.toString(2)) // string em binario
console.log(typeof media)

console.log(typeof Number)
