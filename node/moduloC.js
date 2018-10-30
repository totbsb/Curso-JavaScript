const moduloA = require('./moduloA') //Importando o arquivo para este módulo. O '.js' é opcional
const moduloB = require('./moduloB') //Importando o arquivo para este módulo. O '.js' é opcional

//Chamando as variáveis dos outros módulos
console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloB.bomDia)

//chamando a função de outro módulo
console.log(moduloB.boaNoite())

//Demonstrando o objeto passado pelos módulos 
console.log(moduloB)
console.log(moduloA)