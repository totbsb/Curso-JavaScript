//Pessoa aponta para um endereço de memória '123' (exemplo), que aponta para o objeto {...}
//pessoa -> 123 -> {...}
const pessoa = {nome: 'Joao'} //Pessoa é uma constante, ou seja, aponta sempre para o mesmo endereço de memória
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'} //Gera erro porque não pode atribuir outro objeto para a constante pessoa
Object.freeze(pessoa) //Congela o objeto, não permitindo alteração. Torna o objeto, como um todo, constante

//Não vai alterar porque o objeto está congelado, freeze
pessoa.nome = 'Maria'  //Sem efeito
pessoa.end = 'Rua ABC' //Sem efeito
delete pessoa.nome //Sem efeito

console.log(pessoa)

//Criação de um objeto constante 
const pessoaConstante = Object.freeze({nome: 'João'})
console.log(pessoaConstante)