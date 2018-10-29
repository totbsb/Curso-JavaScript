//Criando um tipo de Objeto e um tipo de função
console.log(typeof Object) // É uma função
console.log(typeof new Object()) //É um objeto. A palavra 'new' chama o construtor, sendo os '()' opcionais

//usando o conceito acima para uma classe criada por mim
const Cliente = function() {}
console.log(typeof Cliente) // É uma função
console.log(typeof new Cliente) // É um objeto

//usando o conceito para uma classe de fato, 
class Produto {} //ES 2015 (ES6)
console.log(typeof Produto) //É uma função, criada como 'classe' 
console.log(typeof new Produto) //É um objeto