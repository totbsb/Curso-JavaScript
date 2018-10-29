//Criando um novo map, com os mesmos parâmetros do map nativo
Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i=0;i < this.length;i++) { //Percorrer todo o array
       newArray.push(callback(this[i],i,this)) //valor atual, índice, array completo
    }
    return newArray //Retorna um novo array com os itens transformados
}



const carrinho = [
    '{ "nome":"Borracha", "preco": 3.45 }',
    '{ "nome":"Caderno", "preco": 13.90 }',
    '{ "nome":"Kit de Lapis", "preco": 41.22 }',
    '{ "nome":"Caneta", "preco": 7.50 }',
]


const paraObjeto = json => JSON.parse(json) //transforma o JSON para objeto
const apenasPreco = produto => produto.preco //pega somente os preços de cada objeto

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco) //aplica as duas funções anteriores
console.log(resultado)