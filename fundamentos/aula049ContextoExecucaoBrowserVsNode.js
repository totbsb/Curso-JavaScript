//// Foi utilizado no console do browser para mostrar o contexto, principalmente da palavra 'this'
//
//window // retorna o objeto window com vários atributos
//Window {}
//this // o mesmo que 'window' neste contexto
//Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
//this === window //retorna true por ser a mesma coisa
//true
//var a = "Texto"
//undefined
//window.a //visualiza a variável 'a' criada no comando anterior
//"Texto"
//var a = 123 //modifica a variável 'a'
//undefined
//window.a // mostra a variável modificada
//123
//this.a // mostra a variável modificada, usando o this
//123
//let b = 123 //declara uma variável com 'let'
//undefined
//window.b //variáveis com 'let' não vão para o objeto global, window
//undefined
//let b = 123 // não permite declarar novamente uma variável já declarada usando o 'let'
//VM177:1 Uncaught SyntaxError: Identifier 'b' has already been declared
//    at <anonymous>:1:1
//(anonymous) @ VM177:1
//this.b //não vai para o objeto global, usando o this
//undefined
//b //podemos chamar a variável diretamente, mesmo não aparecendo nas variáveis globais
//123 
//const c = 456 // o mesmo conceito de 'let' vale para 'const'
//undefined
//window.c // constantes não aparecem no objeto global
//undefined
//function f1()  { return this === window } // criando uma função para retornar a comparação this === window
//undefined
//f1() //chamando a função, retornando true
//true
//window.f1() // As funções vão para o objeto global, podendo ser acessada pelo window
//true
//this.f1() // As funções vão para o objeto global, podendo ser acessada pelo this
//true
//const f2 = () => console.log(this === window) //funções atribuídas para uma constante não vão para o objeto global
//undefined
//f2() //aqui ela roda normalmente
//VM414:1 true
//undefined
//this.f2() //funções criadas com 'const' ou 'let' não vão para o objeto global, gerando erro
//VM443:1 Uncaught TypeError: this.f2 is not a function
//    at <anonymous>:1:6
//(anonymous) @ VM443:1
//const f2 = 123 //Não permite alterar porque já existe uma constante declarada anteriormente com esse nome
//VM468:1 Uncaught SyntaxError: Identifier 'f2' has already been declared
//    at <anonymous>:1:1
//(anonymous) @ VM468:1
//f2 = 123  // Não permite atribuir para uma constante já declarada anteriormente
//VM476:1 Uncaught TypeError: Assignment to constant variable.
//    at <anonymous>:1:4
//(anonymous) @ VM476:1
////criando objeto pessoa que tem como atributo 'nome' e um 'função anônima', que retorna uma template String usando a variável nome 
//let pessoa = {nome: 'Ana', falar : function() { return `Eu sou ${this.nome}`  }}
//undefined
//pessoa.falar() //chama a função 'falar' do objeto criado anteriormente. 'this' não é window nesse caso, é da função
//"Eu sou Ana"
//this.nome //Esse this não é do objeto, é do window. Nele não tem o atributo 'nome', gerando 'undefined'
//undefined
//pessoa.verificarEscopo = function () { return this === window } //função que retorna a verificação this da função === window. 
//ƒ () { return this === window }
//pessoa.verificarEscopo() //No caso retorna 'false' porque o 'this' está no escopo da função, não sendo o 'this' do objeto //'window'
//false

let a = 3 //variaveis 'let' não vão para o contexto global
global.b = 123
this.c = 456
this.d = false
this.e = 'teste'


console.log(this.a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//local onde vão as variáveis começadas com this no contexto do arquivo. Exemplo abaixo tem o mesmo resultado
//module.exports = {e: 456, f: false, g: 'teste'}

//criando variáveis sem 'let' ou 'var' vão para o objeto 'global'. Não recomendado
abc = 3

console.log(global.abc) //mostrando pra onde foi a variavel 'abc' criada sem 'var' ou 'let'

 