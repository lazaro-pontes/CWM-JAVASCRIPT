# OPERADORES

## Atribuição

O operador de atribuição é o mais usado no javascript. Nós usamos o **simbolo de igual** da matematica: **=**, ele não esta fazendo uma comparação de valores, mas sim adicionando um valor a uma certa variavel ou constante.  

existem algumas variações desse operador usando operações aritmeticas:  

- atribuição aditiva
- atribuição subtrativa
- atribuição multiplicativa
- atribuição divisiva
- atribuição modular

Em todas essas variações usamos o simbolo arimetico da operação em questão seguido do operado de atribuição (**=**)  
**vide:** *exercicios/operadores.js*

## Destructuring

**Destructuring** é um operador usado para pegar dados de uma estrutura como Objetos e Arrays.  
dependendo da estrutura nós usaremos **chaves {}** ou **colchetes []**.  
vamos supor que temos um Objeto, fariamos isso:  
  
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

invés de usarmos a notação ponto para pegar dados do nome e idade usamos o **destructuring** que é um modo mais agil e pratico de criar variaveis a partir de atributos de um objeto. caso contrario teriamos que fazer isso:  

    const nome = pessoa.nome
    const idade = pessoa.idade

> com o **destructuring** fizemos tudo em uma linha só.

E caso precisemos mudar o nome das variaveis que estão no objeto? fariamos isso:  

    const { nome: n, idade: i} = pessoa
    console.log(n, i)

E no caso do *endereço* que é um objeto dentro de pessoa?  
A solução seria essa:  

    const { endereco: {logradouro, numero} } = pessoa
    console.log(logradouro, numero)

> vale lembrar que *endereço* nao sera uma variavel apenas **logradouro** e **numero**.

No caso com **Arrays** algumas coisa mudam a primeira é que usaremos **colchetes [ ]**, outra coisa que muda é que podemos pular elementos do **Array**. 

    const [n1, , n3, , n5,n6 = 0] = [10, 7, 9, 8]

**vide:** *exercicios/destructuring.js*

Outro contexto interessante para se usar **destructuring** é em funções e não so diretamente na atribuição, mas como parametro da função.  
Dessa forma podemos passar objetos para funções e fazer com que elas ja tratem dos valores da forma correta sem usar a notação ponto.

**vide** *execicios/destructuring3.js*
**vide** *execicios/destructuring4.js*

## Aritméticos

Esse são os operadores mais simples, basicamente são os mesmo da matematica comum, chamamos ele de operadores binarios pois ele usam dois operandos na hora de resolver.

**vide:** *exercicios/aritmeticos.js*

## Relacionais

Também são operadores binarios que fazem **comparação** entre **dois operandos** e **retornam True** ou **False**. Por conta da tipagem ser fraca temos que saber o que queremos comparar, se apenas os valores ou uma mais precisa que compara também o tipo do dado.  

Quais os operadores? são esses:  

- comparação de igualdade usamos **dois iguais: ==**
- comparação estritamente igual usamos **três iguais ===**
- comparação de diferença usamos **interrogação e igual !=**
- comparação estritamente diferente usamos **interrogação e dois iguais !==**
- comparação de menor que **usamos <**
- comparação de maior que **usamos >**
- comparação menor ou igual **usamos <=**
- comparação maior ou igual **usamos >=**

> CUIDADO!!! em casos que estejas comparando variaveis de referencia a comparação sempre sera falsa pois ele estara comparando endereços de memoria

## Lógicos

Para falarmos de operadores Logicos precisamos entender o conceito de tabela verdade. Os operadores logicos são AND, OR, XOR e NOT.

- **AND:**  
 Com AND para algo ser verdade os operandos tem que ser verdadeiros, ele representa o **conceito de E**, ou seja, pra eu sair hoje eu *preciso ter dinheiro E não chover*.

- **OR:**  
 Para algo ser verdade apenas um dos operandos precisa ser verdade, representa o **conceito de OU**, exemplo: pra eu sair hoje eu **preciso ter dinheiro OU ter credito no cartão**

- **XOR:**  
 Esse representa o **OU Excludente** para algo ser verdade os **operandos não podem ser iguais**

- **NOT:**  
 Esse um operador unario no qual ele inverte o valor logico de algum operando, ou seja, o que é **TRUE** vira **FALSE** e vise-versa.
