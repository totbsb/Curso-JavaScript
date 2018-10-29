const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')    
    }
}

imprimirResultado(10)
imprimirResultado(6)
//Cuidado com a entrada da função, por ser fracamente tipada
imprimirResultado('Epa!') //aparece o valor de 'false' na função, ou seja, 'Reprovado!'