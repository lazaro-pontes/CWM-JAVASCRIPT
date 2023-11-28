# CONTEXTO DE EXECUÇÃO: BROWSER VS NODE

Existem diferenças na execução de codigos no navegador e no ambiente node. por exemplo: no navegaddor temos o objeto global **Window**, que não existe no Node.

## Browser

devemos nos atentar de que variáveis criadas com **var** no navegador serão atribuidas ao objeto **window** e poderão ser acessadas de qualquer parte da aplicação. Nesse contexto o **this** será exatamente igual ao **window**.  

devemos ter cuidado ao colocar variaveis no contexto global, pois isso pode gerar um certa quantidade de conflitos e bugs, com variáveis sobreescrevendo outras.  

![console](/prints/Captura%20de%20tela%202023-10-27%20151902.png)  

> podemos acessar uma **var** com *window.a* ou *this.a*.  

Já se criarmos variáveis com **let** ou **const** elas não iram para o objeto global **window**, mesmo que estejam no contexto global.  

![functions_nomeadas](/prints/Captura%20de%20tela%202023-10-27%20153053.png)  

> funções nomeadas também irão para o **window**.  

### Fugindo do escopo global

Uma das formas de se fungir do escopo global é criando objetos. Pois a partir de um objeto o **this** é o proprio objeto.  

## Node

Se voltarmos ao node e criarmos algo como:  
  
    let a = 3

    console.log(this.a)

No console o resultado seria *undefined*, pois no Node **this** não representa o objeto **global** do Node, mas sim um cara chamado: *module.exports*.  

Dentro de NodeJS cada arquivo é um modulo, diferente da WEB onde tudo é minificado e tudo esta disputando o escopo global, no caso de Node, cada arquivo é um modulo diferente.  

Module.exports é um objeto que sera exportado e estará visivel fora do arquivo.  

Ao criar uma variavel sem palavras reservadas você tocara o objeto **global** do Node, ou seja, não faça isso!!!  

    abc = 333

    console.log(global.abc)  

**vide:** */exercicios/experimentos.js*  
