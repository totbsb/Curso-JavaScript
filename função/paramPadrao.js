//estrategia 1 para gerar valor padrão

function soma1(a, b, c) {
    a = a || 1 //utiliza o || para trazer um valor padrão
    b = b || 1
    c = c || 1

    return a + b + c
}

console.log(soma1())
console.log(soma1(3))
console.log(soma1(1,2,3))
console.log(soma1(0,0,0)) // não terá o retorno esperado, já que '0' torna 'false' na expressão de '||'

//estrategia 2, 3 e 4 para gerar valor padrão

function soma2(a, b, c) {
    a = a != undefined ? a : 1 // Verifica se a é diferente de undefined ou null, retornando 'a' ou '1'
    b = 1 in arguments ? b : 1 // Arg[1] existe? se sim, 'b', se não, '1'
    c = isNaN(c) ? 1 : c // Verifica se 'c' é NotANumber. se sim, '1', se não, 'c'
    return a + b + c
}

console.log(soma2())
console.log(soma2(3))
console.log(soma2(1,2,3))
console.log(soma2(0,0,0)) // Terá o retorno esperado

// valor padrão do es2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3())
console.log(soma3(3))
console.log(soma3(1,2,3))
console.log(soma3(0,0,0))