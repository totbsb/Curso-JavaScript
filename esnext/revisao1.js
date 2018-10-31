// let e const  para definir variáveis
// let tem escopo de bloco
{
    var a = 2
    let b = 3
}

console.log(a)
//console.log(b) //erro porque está dentro do bloco

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)


// Destructuring
// Destructuring  em uma String ele associa a primeira letra à primeira variável e assim por diante
// '...tras' guarda um array com as demais letras passadas
const [l,e, ...tras] = "Cod3r"
console.log(l,e,tras)
// Destructuring em um array.
const [x,y] = [1,2,3] //Pegando os dois primeiros
const [z,,w] = [1,2,3] //Pegando o primeiro e o último
console.log(x,y) //primeiro e segundo
console.log(z,w) //primeiro e terceiro
// Destructuring em um objeto
const {idade: i, nome} = { nome: 'Ana', idade: 9} //busca pelo nome da chave.
console.log(i,nome) //podemos alterar o nome da variável, como exemplo o 'i' no lugar de 'idade'