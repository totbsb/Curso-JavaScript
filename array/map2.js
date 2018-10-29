const carrinho = [
    '{ "nome":"Borracha", "preco": 3.45 }',
    '{ "nome":"Caderno", "preco": 13.90 }',
    '{ "nome":"Kit de Lapis", "preco": 41.22 }',
    '{ "nome":"Caneta", "preco": 7.50 }',
]

//Retornar um array apenas com os preços - Versão Thiago
retornapreco = function (carrinho) {
    let arrayPreco = []
    for (let i in carrinho) {
        arrayPreco.push(JSON.parse(carrinho[i]).preco)
    }
    return arrayPreco
}
console.log(retornapreco(carrinho))

//Como deveria ser, já que não foi usado o 'map' na versão anterior
const paraObjeto = json => JSON.parse(json) //transforma o JSON para objeto
const apenasPreco = produto => produto.preco //pega somente os preços de cada objeto

const resultado = carrinho.map(paraObjeto).map(apenasPreco) //aplica as duas funções anteriores
console.log(resultado)