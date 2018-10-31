// Método for... of

// Percorrendo cada letra de uma String
for (let letra of "Cod3r") {
     console.log(letra)
 }

const assuntosEcma = ['Map', 'Set', 'Promise']

// Percorrendo um array. usando o 'in' ele retorna o índice
for (let i in assuntosEcma) {
     console.log(i) // Retorna 0, 1 e 2
 }

 // Percorre o array e devolve os valores quando usando o 'of'
 for (let assunto of assuntosEcma) {
     console.log(assunto)
 }

 const assuntosMap = new Map ([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
 ])

 // Percorrendo um Map com 'of' retornando um array pra cada [chave - valor]
 for (let assunto of assuntosMap) {
     console.log(assunto)
 }

  // Percorrendo um Map com 'of' retornando somente as chaves
 for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

  // Percorrendo um Map com 'of' retornando somente os valores
for (let valor of assuntosMap.values()) {
    console.log(valor)
}

// Usando o destructuring para retirar chaves e valores separados
for (let [ch,vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

// Percorrendo um Set com o 'of'
const s = new Set(['a','b','c'])
for (let letra of s) {
    console.log(letra) 
}

