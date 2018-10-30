// Criando uma função factory que recebe nomes e retorna uma saudação pra cada um deles
// Será chamada no arquivo passandoParametrosCliente.js
module.exports  = function(...nomes) {
    return nomes.map(nome => `Boa semana ${nome}`)
}