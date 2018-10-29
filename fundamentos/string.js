/* " String comum
' String comum
´´ Quando precisa de template String */

const escola = "Cod3r"

//buscar o de index 4, começando com 0
console.log(escola.charAt(4))

//buscar o de index 5, começando com 0
//Não retorna erro, mas retorna ""
console.log(escola.charAt(5))

// retorna o valor na tabela ASCII
console.log(escola.charCodeAt(3))

//retorna o valor do índice passado como parâmetro
console.log(escola.indexOf('3'))

//retorna a substring começando no índice 1
console.log(escola.substring(1))

//retorna uma substring no índice 0 com tamanho 3
console.log(escola.substring(0,3))

//Concatenar Strings
console.log('Escola '.concat(escola).concat("!"))
//usando o +
console.log('Escola '+ escola +"!")

//Fazer um replace
console.log(escola.replace(3,'e'))

//Utilizando expressões regulares, não vistas nesse curso
// Esta engloba todas as letras e dígitos pela letra 'e'
console.log(escola.replace(/\w/g, 'e'))
// Expressão regular que pega todos os dígitos e substitui pela letra 'e'
console.log(escola.replace(/\d/, 'e'))

//Separar uma string em um Array
console.log('Ana,Maria,Pedro'.split(','))
//utilizando regex para o mesmo efeito 
console.log('Ana,Maria,Pedro'.split(/,/))
