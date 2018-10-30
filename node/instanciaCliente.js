// Quando o módulo exporta um objeto, a instância é única
// Ou seja, as mudanças no contadorA refletem no contadorB por apontar para o mesmo objeto
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

// Quando o módulo exporta uma função, a instância não é única, por ser fruto de uma factory
// Ou seja, as mudanças no contadorC não refletem no contadorD
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log("Contador A: ",contadorA.valor) // Retorna 3 por conta dos incrementos anteriores
console.log("Contador B: ",contadorB.valor) // Retorna 3 por conta das ações anteriores

contadorC.inc()
contadorC.inc()
console.log("Contador C: ",contadorC.valor) // Retorna 3 por conta dos incrementos anteriores
console.log("Contador D: ",contadorD.valor) // Retorna 1 por não apontar para o mesmo objeto contadorC