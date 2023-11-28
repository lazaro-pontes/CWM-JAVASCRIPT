// formula da circunferencia 
// PI * raio²

const PI = Math.PI; // usando o Objeto Math
const pi = 3.141592; //valor literal

const raio = 10;

//apenas usando multiplicação
const operadorMultiplicação = PI * (raio * raio);

const area = PI * raio**2; // operador de exponenciação

const metodoMath = PI * Math.pow(raio, 2);

// arrendondando para apenas 3 casas após a vírgula
const areaDaCircunferencia = area.toFixed(2);

console.log(
    "o calculo da area é: " 
    + areaDaCircunferencia
    +"m²"
);