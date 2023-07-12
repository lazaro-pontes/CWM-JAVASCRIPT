# Função e Objeto

Um **Objeto** por baixo dos panos **é uma função**, na realidade, quando criamos um Objeto literal la no exemplo de *tipos em javascript* o que estamos fazendo é estanciar uma função. **vide**: *exercicios/objeto.js*

    console.log(typeof Object) // retorna Function
    console.log(typeof new Object) // retorna Object

Nós podemos fazer isso com funçoes que nos criamos usando a palavra reservada **new**, chamamos isso de função construtora.

## CLASS

a partir do **ECMASCRIPT 6 (ES6) DE 2015** nos temos o conceito de classe, que na verdade é uma forma diferente de escrever uma função, um atalho de syntax.

    class Produto {} // ES 2015 (ES6)
    console.log(typeof Produto) // Function
    console.log(typeof new Produto) // instancia de Produto (objeto)

## PAR Nome/Valor

objeto é uma coleção de chave valor. esse conceito permeia o javascript em todo lugar. ele esta presente também na criação de variaveis.

Variaveis e constantes tem um contexto lexico, um escopo, local onde aquele par chave/valor sera executado e visivel.

Objetos são grupos aninhados de nome/valor. E podemos aninhar Objetos, inclusive com nomes iguais aos de fora pois são contextos diferentes.

    const client = {
        nome: `Pedro`,
        idade: 33,
        peso: 90,
        endereco: {
            nome: `Rua das almas`,
            numero: 123
        }
    }

## Notação ponto

A notação ponto serve para acessarmos membros de uma função ou Objeto, tais como funções e valores.

    console.log(Math.ceil(6.45))

    const objeto_1 = {}
    objeto_1.nome = `bola`
    
    console.log(objeto_1.nome)

No exemplo acima temos o Objeto Math da api do JS e acessamos sua função que arredonda numeros para cima.
Também criamos um atributo dinamicamente no Objeto 1.
