# TRATAMENTO DE ERRO  

Em javascript usamos 3 palavras para tratar erros, são ela:  **try**, **catch**, **throw**.

**vide:** *exercicios/erro.js*

Existem certos codigos que sabemos que podem gerar erro, nesses casos podemos usar o **TRY/CATCH**

## TRY

É um bloco de codigo que dentro dele tem um codigo que pode gerar algum tipo de erro. Gerando um erro e se você quiser tratar esse erro você associa ao **TRY** um bloco **CATCH**.

## CATCH

É um bloco de codigo que trata o erro de tudo que está no **try** mas não conseguiu ser executado, o **try** tenta rodar as senteça de codigo caso gere um exceção ele envia ao **catch**.  

O bloco **catch** recebe um parametro, que é justamente o erro que foi enviado do **TRY**.

## THROW

É uma palavra reservada usada para lançar um erro no console. Com o **THROW** você pode lançar um *new Error()*, um *numero*, um valor *booleano*, uma *string* ou um *objeto*.

## FINALLY

É um bloco chamado independente de ter erro ou não. Você pode utilizar a cláusula **finally** para fazer seu script falhar graciosamente quando uma exceção ocorrer; por exemplo, você pode precisar liberar um recurso que seu script possui vinculado.

O exemplo seguinte abre um aquivo e então executa declarações que utilizam o arquivo (server-side JavaScript permite que você acesse arquivos). Se uma exceção for lançada enquanto o arquivo estiver aberto, a cláusula finally fecha o arquivo antes que o script falhe.

    openMyFile();
        try {
          // vincula o recurso
            writeMyFile(theData);
        } finally {
        closeMyFile(); // sempre fecha o recurso
        }

**vide:** *exercicios/erro.js*
