let numero = 1
{
    let numero = 2
    console.log(`dentro =`, numero)
}

console.log(`fora =`, numero)


let palavra = `run`

{
    let palavra = `dentro do bloco 1`

    {
        let palavra1 = `corra`
        console.log(`dentro -->`, palavra)
        console.log(`dentro -->`, palavra1)
    }
}

console.log(`fora -->`, palavra)

console.log(`fora -->`,palavra1)
