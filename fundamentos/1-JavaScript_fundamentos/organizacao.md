# ORGANIZAÇÃO BASICA DO JAVASCRIPT

O JS é organizado em linhas (sentenças) de codigo e blocos de codigo.  
assim com em português nós organizamos um livre em que letras que forma palavras, que por sua vez formam sentenças (frases), que então formam parágrafos e assim capitulos que por fim formam um livro.  

> letras -> palavras -> frases -> parágrafos -> capitulos -> livro

essa é a forma estrutural de um livro, da mesma forma nós fazemos em JavaScript.

## senteças de codigo

usamos aspas simples ou duplas para escrever **strings**  

`console.log("sentença de código");`

em JavaScript a senteça também pode ocupar mais de uma linha, mas a quebra não pode ocorrer em qualquer ponto.

    console.log(
        'sentença de código'
    );

a virgula não é obrigatoria e podemos usar **backticks** *(crase)* para escrever **strings**  
``console.log(`sentença usando crase`)``

## Blocos de código

códigos JS também são organizados em blocos de código, que são agrupadores de sentenças, no JS esse blocos são delimitados por chaves: `{}`  

- você pode criar blocos vazios  

    {

    }

- existem blocos associados a funções:  

    function soma(a, b){  
        resultado = a + b;  
    }  

- existem blocos associados a classes:  
    class Retangulo {  
        constructor(altura, largura) {  
        this.altura = altura;  
        this.largura = largura;  
        }  
    }

- existem blocos associados a objetos:  
    var objeto_carro = {  
        modelo: X6,  
        marca: BMW,  
        cor: azul,  
        dono: JohnLaz  
    };  

- existem blocos associados a estruturas de controle:  
    if(nota >= 7) {  
        console.log('passou de ano')  
    }  

> nós podemos ter **blocos dentro de blocos**  
> não esqueça de **fechar os blocos** isso causa *Bugs*
