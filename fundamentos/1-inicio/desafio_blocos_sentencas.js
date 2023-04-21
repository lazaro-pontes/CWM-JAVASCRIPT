//desafio 
//escrever os numeros pares e impas de 1 - 10

/*
 //bloco impar
 
 1
 3
 5
 7
 9

//bloco par

 2 
 4
 6
 8
 10
*/

//bloco dos impar
console.log("\n bloco dos impares")

for(i = 1; i < 10 ; i++){
    const resto_da_Divisao = (i % 2); 

    //se o resto da divisão for true ( ou seja => 1 )
    //significa que ele é ímpar

    if (resto_da_Divisao) {
        console.log('|',i, '|')
    }

}

//bloco dos numeros pares
console.log("\n numeros pares")

for(i=1; i < 11; i++ ) {
    const resto_da_Divisao = (i % 2)

    
    //se o resto da divisão for false 
    //    ( ou seja diferente de 1 )

    //significa que ele é par

    if(!resto_da_Divisao) {

        console.log('|', i, '|')
    }
}