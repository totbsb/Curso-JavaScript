function getPreco (imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}` 
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20 //Para não dar erro no console.log(getPreco())
global.desc = 0.1 //Para não dar erro no console.log(getPreco())

console.log(getPreco()) //chamando a função diretamente
console.log(produto.getPreco()) //chamando a função através de um objeto

const carro = { preco: 49990, desc: 0.2}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//Pelo método call e pelo método Apply temos como passar os parâmetros para a função
// O primeiro sempre é o contexto. do segundo em diante são os demais parâmetros. Serve para os dois métodos, Call e Apply
console.log(getPreco.call(carro,0.17,"$"))
console.log(getPreco.apply(carro, [0.17, '$'])) //pelo Apply deve ser passado através de um Array


// Pode ser o próprio objeto global
console.log(getPreco.call(global,0.17,"$"))