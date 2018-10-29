const notas = [6.7,7.4,9.8,8.1,7.7]

for (let i in notas) { //Exemplo para percorrer um array através do for.. in
    console.log(i,notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa) { //Exemplo para percorrer um Objeto através do for.. in
    console.log(`${atributo} = ${pessoa[atributo]}`)
}