// trocar os valores das variaveis 
// de tal forma que X tenha o valor de Y e vise-versa

let x = 7;
let y = 45;

console.log("inicio --->", x, y)

const parOrdenado = { x: y, y: x }; //trocando posição

x = parOrdenado.x; // invocando o objeto com chave X
y = parOrdenado.y; // invocando o objeto com chave Y

console.log("inverte 1x --->", x , y);

// usando apenas variaveis
let temp = x;

x = y;
y = temp;

console.log("inverte denovo --->", x , y);

// agora usando array
[x, y] = [y, x];

console.log("agora com array --->", x , y);