# Função e Objeto

Um **Objeto** por baixo dos panos **é uma função**, na realidade, quando criamos um Objeto literal la no exemplo de *tipos em javascript* o que estamos fazendo é estanciar uma função. **vide** *exercicios/objeto.js*

    console.log(typeof Object) // retorna Function
    console.log(typeof new Object) // retorna Object

Nós podemos fazer isso com funçoes que nos criamos usando a palavra reservada **new**, chamamos isso de função construtora.

## CLASS

a partir do **ECMASCRIPT 6 (ES6) DE 2015** nos temos o conceito de classe, que na verdade é uma forma diferente de escrever uma função, um atalho de syntax.

    class Produto {} // ES 2015 (ES6)
    console.log(typeof Produto) // Function
    console.log(typeof new Produto) // instancia de Produto (objeto)
