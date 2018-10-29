// Função em JS é First-Class Object (Citizens)
// Higher-order function

// Formas de utilizar as funções

// criar de forma literal
function fun1() {} //O bloco é obrigatório em qualquer função, com exceção da arrow function

// Armazenar em uma variável
const fun2 = function() { }

// Armazenar em um array
const array = [
    function (a,b) { return a + b}, //função literal na posição '0' do Array
    fun1, //função criada anteriormente
    fun2 //função criada anteriormente
]
console.log(array[0](2,3)) //chama a função armazenada no índice '0' e passa '(2,3)' como parâmetros

// Armazenar em um atributo de objeto
const obj = {} //Declara um objeto
obj.falar = function () {return 'Opa'} //inclui uma função no atributo 'falar'
console.log(obj.falar()) //chama a função do objeto


//Passar função como parâmetro
function run(fun) {
    fun() //executa a função passada no parâmetro
}
run(  
    function () {console.log('Executando...')} //Passa uma função como parâmetro
    ) 


// Uma função pode retornar/conter uma função
function soma(a,b) { // função que retorna uma função
    return function (c) { // função anônima retornada com a execução da função acima
        console.log(a + b + c)
    }
}
soma(2,3)(8) //chama a função soma com (2,3) e já passa o valor '8' para a função que retorna

const cincoMais = soma(2,3) //Forma alternativa de fazer a chamada acima
cincoMais(8) //Forma alternativa de fazer a chamada acima

