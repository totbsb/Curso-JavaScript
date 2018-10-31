const sequence = {
    _id: 1, // atributo interno
    get id() {return this._id++} // Retornando o próximo valor quando for chamado
}

// Banco de dados provisório
const produtos = {} // A 'chave' será o próprio ID do produto e 'valor' será o preço

function salvarProduto(produto) { 
    // Caso o produto não tenha id atribui um sequence.id
    if (!produto.id) produto.id = sequence.id
    //adiciona um produto com o sequence atribuído
    produtos[produto.id] = produto 
    return produto // Retorna o id
}

function getProduto(id) {
    return produtos[id] || {} //Passa o id e busca em produtos, caso negativo retorna {}
}

function getProdutos() {
    //console.log(produtos[1].nome) //Forma de localizar um produto específico e um atributo 
    return Object.values(produtos) //Retorna uma lista de produtos, sem o ID
}

function excluirProduto(id) {
    const produto = produtos[id] // Guarda o objeto para retornar o valor deletado
    delete produtos[id] // Retira do objeto o valor passado
    return produto // Retorna o produto deletado
}

// Exportando as funções para ser visível para outros módulos
module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto }