let a = 3

globalThis.b = 123

this.c = 456
this.d = false
this.e = "teste"

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)


//criando uma variavel maluca: sem var ou let
abc = 3 //não faça isso!!!
console.log(global.abc)

//geralmente em Node vemos assim nos arquivos
module.exports = {f: 765, g: 293, h: "testando"}
