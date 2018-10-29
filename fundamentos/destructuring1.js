//novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade} = pessoa //forma de extrair, desestruturar, os dados do objeto
console.log(nome,idade)

const { nome: n, idade: i} = pessoa //extrair as informações do objeto Pessoa e jogar em variáveis, no caso "n" e "i"
console.log(n,i)

const {sobrenome, bemHumorada = true} = pessoa //Duas variáveis inexistentes, sendo que a última será 'true', caso não encontre no objeto
console.log(sobrenome,bemHumorada) //undefined para a primeira, 'true' para a segunda. Não gera erro

const { endereco: {logradouro, numero, cep } } = pessoa //acessando atributos de atributos no objeto
console.log(logradouro, numero, cep) //Retorna os dois primeiros e o último vira undefined

//const { conta: { ag, num } } = pessoa // Dá erro, porque não tem destructure de um objeto filho inexistente. Se 
//console.log(ag, num) //não executa por conta do erro na linha anterior 