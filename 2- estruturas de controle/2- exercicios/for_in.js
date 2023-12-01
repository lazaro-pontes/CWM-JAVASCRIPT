const notas = [7.8, 4.9, 10, 3.0, 8.9]

for (const index in notas) {
    const nota = notas[index];

    console.log(index, nota)
}

const pessoa = {
    nome: "João",
    sobrenome: "Lazaro",
    idade: 23,
    mood: "sonolento"
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}