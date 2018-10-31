// ES8: Object.values / Object.entries

const obj = {a: 1, b: 2, c:3} //criando um objeto

console.log(Object.values(obj)) // Cria um array só com os valores
console.log(Object.entries(obj)) // Cria um array pra cada chave-valor e adiciona num array maior

// Melhorias na Notação Literal
const nome = 'Carla' 
const pessoa = {
    nome, //não precisa mais colocar "nome: nome"
    ola() {    //não precisa mais colocar "ola: function"
        return 'Oi gente!'
    }
}

console.log(pessoa.nome, pessoa.ola()) //testando o atributo e a função

// Classes
class Animal {} //Definindo uma classe vazia
class Cachorro extends Animal {  //Herança da classe Animal
    falar() { //definindo uma função
        return "Au au!" 
    }
}

console.log(new Cachorro().falar()) //chamando a função falar()