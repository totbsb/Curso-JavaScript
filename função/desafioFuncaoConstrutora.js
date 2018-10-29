//Criar objetos através de uma Função Factory

function Pessoa(nome) {
    this.nome = nome
    this.falar = function() {
        console.log(`Meu nome é ${nome}`)
    }
    
}

const p1 = new Pessoa('João')
p1.falar()

function criarPessoa (nome) {
    return {
        nome,
        falar(nome) {
            return console.log(`Meu nome é ${this.nome}`)
        }
    }
}

criarPessoa('João').falar()



function criarPessoa2 (nome) {
    return {
        nome,
        falar: () => { 
            console.log(`Meu nome é ${nome}`) //na arrow function não é necessário o this
        }
    }
}

criarPessoa2('João').falar()

/* class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`) //precisa do this para acessar a variável do objeto criado
    }
}
 */