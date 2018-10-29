//Funções tem o método '.prototype' herdado da função 'Object'.
//Os objetos propriamente ditos possuem um atributo chamado '__proto__' que aponta para um protótipo
//As funções também possuem o atributo __proto__, além do método '.prototype'
//O atributo '__proto__' aponta como padrão para Object.prototype.
//Quando vindo de uma função construtora do usuário, aponta para a função que o construiu

function MeuObjeto() {}
console.log(MeuObjeto.prototype) //Em uma função, o método prototype retorna um Objeto, no caso 'MeuObjeto {}'
console.log(MeuObjeto.__proto__) //O atributo __proto__ dessa função retorna '[Function]'

//Quando cria usando o new, deixa o prototype como padrão apontando para o atributo prototype daquela função
//Neste caso 'MeuObjeto{}'
const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(Object.prototype)

//não funciona obj1.prototype porque obj1 não é uma função, é um objeto com o atributo __proto__
console.log(obj1.__proto__) //Retorna o valor 'MeuObjeto{}'

console.log(obj1.__proto__ === obj2.__proto__) //Retorna true, apontando para o mesmo prototipo 'Meu Objeto {}'
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome ='Anônimo' //cria um atributo dentro do prototype da função criada
MeuObjeto.prototype.falar = function() { //cria uma função dentro do prototype da função criada
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar() //chama a função herdada no prototype da função 'MeuObjeto'

obj2.nome = 'Rafael'  //muda o atributo 'nome' do objeto 
obj2.falar() //chama a função já com o nome modificado

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype //Alterando de 'Object.prototype' para 'MeuObjeto.prototype'
obj3.nome = 'Thiago'
obj3.falar()

//Resumindo tudo até agora.....
//O objeto instanciado da função construtora tem o mesmo prototype da função construtora
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)

//A variável '__proto__' das funções apontam, como padrão, para o 'Function.prototype'
console.log(MeuObjeto.__proto__ === Function.prototype)

// Os dois apontam para o Objeto maior, que não possue um prototype definido, sendo o último na hierarquia de protótipos
console.log(Function.prototype.__proto__ === Object.prototype)

// Não tem nenhum objeto após o Object.prototype, por isso retorna 'null'. Seria o último na hierarquia de protótipos
console.log(Object.prototype.__proto__  === Function.prototype.__proto__.__proto__) //ambos retornam 'null', ou seja, último na cadeia de protótipos


console.log('-------------------------')
console.log(typeof Function.prototype.prototype) //a função prototype da função prototype não é definida. É um objeto, na verdade
console.log(typeof Function.prototype.__proto__) //Comprovação da assertiva anterior
console.log(typeof Function.__proto__) // É uma função
console.log(typeof Function.__proto__.__proto__) // O protótipo dessa função anterior é um objeto
console.log(typeof MeuObjeto.prototype) //O protótipo da minha função é um objeto
console.log(typeof MeuObjeto.__proto__) //Mas o atributo __proto__ é uma função
console.log(typeof MeuObjeto.__proto__.__proto__) //E o __proto__ dessa função é um objeto
console.log(MeuObjeto.__proto__) //Demonstra que é uma função