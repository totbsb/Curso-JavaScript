// Objeto é uma coleção dinâmica de pares chave/valor

const produto = new Object //função construtora que gera um objeto
produto.nome = 'Cadeira' //Cria a chave 'nome' com valor 'Cadeira'
produto['Marca do produto'] = 'Generica' //Não recomendado o nome fora do padrão, começando com números, com espaços
produto.preco = 220

console.log(produto)

delete produto.preco //Deleta a chave passada, no caso o 'preco'
delete produto['Marca do produto'] //Deleta a chave passada, no caso o 'Marca do produto'
console.log(produto)

const carro = { //Criando um objeto com vários atributos aninhados, inclusive um array 'condutores'
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua abc',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    },
    {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function() {
        // ..
    }
}

//Acessando diretamente o atributo de um objeto e alterando o seu valor
carro.proprietario.endereco.numero = 1000

//Acessando o atributo de um objeto e alterando o valor, passando os nomes diretamente
carro['proprietario']['endereco']['logradouro'] = 'Av. teste'

console.log(carro)

//Podemos deletar os atributos
delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
//console.log(carro.condutores.length) //Gera erro porque foi deletada na linha anterior e retorna undefined.
