// '==' compara somente os valores
// '===' compara os valores e o tipo

console.log('01)', '1' == 1) //retorna true porque com dois iguais "==" ele não compara os tipos, somente os valores
console.log('02)', '1' === 1) //retorna false porque com três iguais "===" ele compara os tipos, no caso diferentes
console.log('03)','3' != 3) //retorna false porque não leva em conta o tipo, somente os valores
console.log('04)','3' !== 3) //retorna true porque os tipos não são iguais, sendo relevante na expressão "!=="
console.log('05)', 3 < 2) //comparação comum
console.log('06)', 3 > 2) //comparação comum
console.log('07)', 3 <= 2) //comparação comum
console.log('08)', 3 >= 2) //comparação comum

const d1 = new Date(0) //cria uma data 1970-01-01T00:00:00.000Z, referência no JavaScript
const d2 = new Date(0) //cria uma data 1970-01-01T00:00:00.000Z, referência no JavaScript
console.log('09)',d1 === d2) //Por ser comparação de endereço de memória vai ser false, independente de ser '==' ou '==='
console.log('10)',d1 == d2) //Por ser comparação de endereço de memória vai ser false, independente de ser '==' ou '==='
console.log('11)',d1.getTime() === d2.getTime()) //Retorna true porque tem o mesmo valor e o mesmo tipo o retorno de getTime()

console.log('12)', undefined == null) //Retorna true porque os dois são 'false'
console.log('13)', undefined === null) //Retorna false porque os dois não são do mesmo tipo, apenas o mesmo valor 'false'
