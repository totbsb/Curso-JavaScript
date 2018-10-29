//Todas são funções, sendo comprovadas pelo typeof
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//Criando uma função que pode ser chamado por qualquer String, sendo declarada no prototype
String.prototype.reverse = function () {
    return this. //uso do 'this' para referenciar a String que vai chamar a função
    split(''). //a função 'split' quebra a string de acordo com o separador passado e cria um Array
    reverse(). //Inverte todos os dados de um array
    join('') //Junta os dados de um array e retorna uma string
}

//chamando a função criada acima diretamente por uma String
console.log('Escola cod3r'.reverse())

//criando uma função first para o prototype do Array
Array.prototype.first = function () {
    return this[0]
}

//chamando a função first criada dentro do protótipo do Array
console.log([0,1,2,3,4,5].first())
console.log(['a','b','c'].first())


//Sobrescrevendo uma função já existente na API do JavaScript.
//NÃO FAÇA ISSO!!!
String.prototype.toString = function() {
    return 'Lascou tudo!'
}


console.log('Escola cod3r'.reverse()) //Efeito colateral, gerando erro!