const registros = [
    { data: `2023-07-13`, qtd: 12 },
    { data: `2023-07-14`, qtd: 30 },
    { data: `2023-07-13`, qtd: 4 },
    { data: `2023-07-14`, qtd: 98 },
    { data: `2023-07-12`, qtd: 4 },
    { data: `2023-07-12`, qtd: 8 },
    { data: `2023-07-12`, qtd: 31 },
    { data: `2023-07-15`, qtd: 74 },
    { data: `2023-07-13`, qtd: 12 },
    { data: `2023-07-12`, qtd: 1 },
    { data: `2023-07-17`, qtd: 3 },
    { data: `2023-07-16`, qtd: 35 }
]

// função de agrupamento
function agrupar(registros) {


    return registros.reduce((acumulador, registro) => {
        //console.log(acumulador, registro)

        const data = registro.data
        const quantidade = registro.qtd

        acumulador[data] = (acumulador[data] || 0) + quantidade

        return acumulador
    }, {})
}

console.log(agrupar(registros))

