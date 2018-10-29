let dobro = function (a) {
    return 2 * a
}

dobro = (a) => { //função arrow para o caso anterior
    return 2 * a 
}

dobro = a => 2 * a //Return implícito. forma bem reduzida, quando tem um atributo e só uma sentença
console.log(dobro(Math.PI))

let ola = function () { //Forma tradicional da function
    return 'Olá' 
}

ola = () => 'Olá' //Função arrow, com retorno implícito, e reduzida
console.log(ola())

