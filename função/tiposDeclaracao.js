//Roda a linha abaixo porque as funções declaradas (function declaration) são carregadas antes pelo interpretador do JavaScript
console.log(soma(3,4))

// Essa linha gera erro porque deve ficar depois da function expression 'sub'
//console.log(sub(3,4))

// Essa gera erro porque deve ficar depois da named function expression 'mult'
//console.log(mult(3*4))


// function declaration - tradicional
function soma (x,y) {
    return x +y
}

//function expression - função anônima atribuída para uma variável 
const sub = function (x, y) { //pode ser const ou let
    return x - y
}

//named function expression
const mult = function mult(x,y) { //além da constante, coloca o nome na função. Não é muito usado, talvez facilite o debug
    return x * y
}

console.log(sub(3,4))
console.log(mult(3,4))