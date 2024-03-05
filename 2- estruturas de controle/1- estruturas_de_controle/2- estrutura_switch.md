# ESTRURURA DE CONTROLE: SWITCH

Com o **switch** seria como se estivessemos encadiando vários **if/else --- else/if()**  

Uma estrurura bem mais organizada para multi-seleções  

## estrutura do bloco switch()

- palavra reservada **switch**

- parenteses com o valor a ser selecionado

- bloco de codigo associado aos **cases** *(não brigatorio o uso das chaves)*  

- palavra reservada **case** seguida pelo valor do seletor  

- **bloco** associado ao **case** específico  

- palavra reservada **break** para **sair do bloco case**  

- palavra reservada **default** para definir um **valor padrão** a ser retornado  

## EXEMPLO  

```JAVASCRIPT
    const imprimirResultado = function(nota){
    switch (Math.floor(nota)) {
        case 10: case 9:
            console.log("parabéns você foi destaque")
            break;
        case 8: case 7:
            console.log("você foi aprovado")    
            break;
        case 6: case 5: case 4:
            console.log("você está de recuperação")
            break;
        case 3: case 2: case 1: case 0:
            console.log("infelizmente você foi reprovado")
            break;
        default:
            console.log("nota invalida!!!")
            break;
    }
    // console.log("fim!")
}
```  
