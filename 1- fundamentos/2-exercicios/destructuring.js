// novo a partir do ES2015

const pessoa = {
    nome: `Ana`,
    idade: 5,
    endereco: {
        logradouro: `Rua das couves`,
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado)

// fazer destructuring em objetos aninhados
const { endereco: {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero)

const { conta: {agencia, num} } = pessoa
console.log(agencia, num)
