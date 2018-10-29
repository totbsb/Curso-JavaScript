let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
//utilizando o '!' antes ele nega a expressão, retornando o boolean correspondente.

//Considera '1' como verdadeiro e, após a negação, '0' como falso
console.log(!isAtivo)

//utilizando o '!!' antes ele nega e renega a expressão, retornando o boolean correspondente.
//Considera '1' como verdadeiro. após negar (ir para '0') e renegar a expressão (retornar para '1'), fica como verdadeiro
console.log(!!isAtivo)

console.log('os verdadeiros...')
//todos inteiros com '!!' são considerados verdadeiros, com exceção do '0'
console.log(!!-2)
console.log(!!3)
//Strings, tirando as vazias,(''), com '!!' são considerados verdadeiros
console.log(!!' ')
//Arrays com '!!' são considerados verdadeiros
console.log(!![])
//Objetos com '!!' são considerados verdadeiros
console.log(!!{})
//Tipo 'infinity' com '!!' são considerados verdadeiros
console.log(!!Infinity)
//Primeiro ele faz a atribuição, depois nega duas vezes. Se fosse '0' no lugar de 'true' retornaria 'false'
// Não confundir com o resultado da operação, com sucesso ou não
console.log(!!(isAtivo = true))

console.log('os falsos....')
// Negativa dupla no zero gera 'false'
console.log(!!0)
// Negativa dupla numa string vazia gera 'false'
console.log(!!'')
// Negativa dupla no valor 'null' gera 'false'
console.log(!!null)

// Negativa dupla no valor 'NaN' gera 'false'
console.log(!!NaN)

// Negativa dupla no valor 'undefined' gera 'false'
console.log(!!undefined)

// Primeiro ele faz a atribuição, depois nega duas vezes. Se fosse '0' no lugar de 'true' retornaria 'false'
// Não confundir com o resultado da operação, com sucesso ou não
console.log(!!(isAtivo = false))


//Somente pra finalizar
console.log('pra finalizar....')
//Expressão lógica usando o 'ou' -> ||
//Retorna verdadeiro (negação dupla '!!') por conta do último atributo, 'abc'
console.log(!!('' || null || 0 || 'abc'))
//Retorna o último atributo verdadeiro, 'abc'
console.log(('' || null || 0 || 'abc'))

//O termo condicional é utilizado para padronizar retorno de valores, como abaixo:
//Retorno 'Desconhecido'
let nome = ''
console.log(nome || 'Desconhecido')
//Retorno 'Thiago'
nome = 'Thiago'
console.log(nome || 'Desconhecido')
