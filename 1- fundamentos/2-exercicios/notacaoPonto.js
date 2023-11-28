console.log(Math.ceil(6.45))

const objeto_1 = {}
objeto_1.nome = `bola`
// objeto_1[`nome`] = `bola2` //notação colchete

console.log(objeto_1.nome)

function Objeto(nome) {
    this.nome = nome
    this.exec = function() {
        console.log(`Executando...`)
    }
}

const objeto_2 = new Objeto(`cadeira`)
const objeto_3 = new Objeto(`Mesa`)

console.log(objeto_2.nome)
console.log(objeto_3.nome)

objeto_3.exec()