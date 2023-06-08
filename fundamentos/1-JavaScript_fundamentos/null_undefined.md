# NULL & UNDEFINED

Esses conceitos passam por conceitos de atribuição por **valor** e atribuição por **referência**.

Imagine que declaramos uma **constante A** contendo um Objeto `{name: teste}` e na linha seguinte declaramos uma **constante B** que recebe a **constante A**, essa é **atribuição por referencia** pois a **constante a** não armazena o valor, mas sim o endereço na memoria onde o Objeto está armazenado, dessa forma se tentarmos alterar o valor na **constante B** o valor de **A** também sera alterado.

    const a = {name: “teste”}

    const b = a

    b.name = “outra coisa”

    console.log(a)

Mas em situaçoes que lidamos com **tipos básicos** da linguagem como *numeros*, a **logica muda** e temos uma **atribuição por valor**, nessa situação o caso anterior não se aplica, pois com valores basicos da linguagem JS **não igualamos o endereço de memoria**, mas sim temos uma **copia do valor da variavel**.

    let a = 3

    let b = a

    b++

    console.log(a, b) // valores serão independentes

Com esses conceitos em mente vamos trabalhar o conceito de **null**, a referencia que aponta pra um lugar na memoria, no caso de usar **null** isso significa que a variavel em questão não aponta pra nenhum endereço da memória.

    let valor //nao inicializada

    console.log(valor) // undefined

    valor = null // ausencia de valor

    console.log(valor) // null

Existe diferença da linha 1 para a linha 3, na **linha 1** a variavel nao foi iniciada não atribuimos valor a ela, já na **linha 3** o valor foi definido porém ele não aponta para nenhum lugar na memória.

*Não é legal atribuir undefined* deixe o *undefined* para ser algo que a propria linguagem seta quando ela entende que aquele valor não foi inicializado/não foi definido. Quando você quiser zerar uma uma variavel do tipo referencia que aponta pra um Objeto ou aponta pra uma função ai você vai colocar o nulo(NULL).

## Alguns Cuidados

Se tentarmos acessar alguma coisa de uma variavel que não aponta para nada termos erros. por exemplo se tentarmos acessar o **.toString** da variavel valor:

    valor = null
    console.log(valor.toString())

    // temos um typeError
    // pois não podemos ler a propriedade toString de algo nulo

Já no caso seguinte não temos erro pois o valor de produto não é nulo, apenas o preco que não existe no Objeto produto.

    const produto = {}
    console.log(produto.preco)

    //ja nesse caso o retorno sera undefined

> **mas se tentarmos acessar algo de Undefined ai sim teremos um erro.**

    console.log(produto.preco.a)

    //temos typeError
    //pois não da pra ler propriedades de Undefined
