const pilotos = ['Vettel','Alonso', 'Raikkonen','Massa']

pilotos.pop() //Retira o último valor. No caso, 'Massa'
console.log(pilotos)

pilotos.push('Verstappen') //Incluir um valor
console.log(pilotos)

pilotos.shift() //Remove o primeiro da lista
console.log(pilotos)

pilotos.unshift('Hamilton') //Inclui um valor no início da lista
console.log(pilotos)

pilotos.splice(2,0, 'Bottas','Massa') //inclui os dois elementos na posição 2, sem deletar ninguém (0)
console.log(pilotos)

pilotos.splice(3,1) //Retira um registro na terceira posição, no caso 'Massa'
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //Tira um pedaço do array. No caso a partir da posição '2'
console.log(algunsPilotos1)

//Novo array a partir da posição 1 até o 3, ou seja, anterior ao passado como segundo atributo
const algunsPilotos2 = pilotos.slice(1,4)  // Não entra o registro [4], somente [1], [2] e [3]

console.log(algunsPilotos2)