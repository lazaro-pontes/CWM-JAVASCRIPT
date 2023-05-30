let preco = 19.90;
let desconto = 0.4;

//criando um deconto de 40%
console.log(19.9 * 0.6); //forma literal

//gerando desconto com as variaveis 
let precoComDesconto = preco * (1 - desconto);

console.log(precoComDesconto);

// concatenação 
// caso o simbolo: "+", seja usado em uma string
// nao ocorrera soma, mas sim a junção do texto

let nome = 'Caderno';
let categoria = 'Papelaria';

console.log(
    "Produto: " + nome 
    +", Categoria: "+ categoria
);

//nesse exemplo abaixo o resultado não sera 40
// mas sim 3010, pois ele juntou 2 textos

let numero_1 = "30";
let numero_2 = 10;

console.log(numero_1+numero_2)