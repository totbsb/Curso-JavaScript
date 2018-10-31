// 'Set' não aceita repetição e não é indexado

const times = new Set() // Criando um novo Set
times.add('Vasco') // Adicionando os registros
times.add('Flamengo') // Adicionando os registros
times.add('Santa Cruz') // Adicionando os registros
times.add('Palmeiras') // Adicionando os registros
times.add('Internacional') // Adicionando os registros
times.add('Corinthians') // Adicionando os registros

console.log(times) 
console.log(times.size) // Tamanho do Set
times.delete('Palmeiras')  //Retirando itens
console.log(times.has('Palmeiras')) // Verificação de registro

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas'] // Não será incluido 'Lucas' duas vezes
const nomesSet = new Set(nomes) // Criação do Set
console.log(nomesSet) 