// Array é variável, sem tamanho fixo

//Declarando arrays diretamente preenchidos
const valores = [7.7,8.9,6.3,9.2]

// Buscando os valores pelos índices, começando com [0]
console.log(valores[0], valores[3])

// Quando não encontra o elemento no array, retorna um valor 'undefined'
console.log(valores[4])

//atribuir um valor a um índice específico
valores[4] = 10
console.log(valores[4])

//atribuir num índice mais a frente, sem ser sequencial.
valores[10] = 11
//Retorna o array com a informação '<5 empty items>' no meio
console.log(valores)

//ver o tamanho do Array
console.log(valores.length)

//adicionar valores no array, independente dos tipos. Não é uma boa prática juntar vários tipos num mesmo array
valores.push({id:3},false,null,'teste')
console.log(valores)

//retirar o último valor do array. A função 'pop' retorna o valor retirado.
console.log(valores.pop())

console.log(valores)

//deletar um item específico, de acordo com o índice
delete valores[0]
console.log(valores)

//Retorna o tipo 'object' o qual faz parte o Array
console.log(typeof valores)