//Armazenando uma função em uma variável
const imprimirSoma = function (a,b) { //function anônima, sem nome atribuído
    console.log(a + b)
}

imprimirSoma(2,3)

//Armazenando uma função arrow (conceito novo no JavaScript) em uma variável
const soma = (a,b) => { //função arrow para o mesmo exemplo acima
    return a + b
}

console.log(soma(2,3))

//Retorno implícito. Forma reduzida de fazer uma função
const subtracao = (a,b) => a - b //Funciona quando se tem só uma sentença de código
//Chamando a function
console.log (subtracao(2,3))

//Forma reduzida, quando se tem só um atributo na function
const imprimir2 = a => console.log (a)
imprimir2('Legal!!!')

