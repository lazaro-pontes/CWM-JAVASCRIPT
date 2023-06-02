let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

console.log(`os VERDADEIROS...`)

console.log(!!3)
console.log(!!-1)
console.log(!!` `)
console.log(!!`texto`)
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log(`os FALSOS...`)

console.log(!!0)
console.log(``)
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log(`pra finalizar...`)

console.log(!!(`` || null || 0 || `hello` || 333)) // no fim é true

/* em expressoes como na de cima o valor retornado
 * sera o primeiro valor VERDADEIRO encontrado. 
 * exemplo abaixo no dia a dia
*/

let nome = lazaro
console.log(nome || `desconhecido`)