const nome = "Rebeca"
const concatenacao = "olá " + nome + " como vc está?"

const templateString = `
    olá
    ${nome},

    como você esta?
`

console.log(concatenacao, templateString)

// expressão
console.log(`1 + 1 = ${1 + 1}`)

// funções

const up = texto => texto.toUpperCase()

console.log(`ei meu mano, ${up("cuidado")}!`)
