const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' //Operador ternário. Condição + '?' + condição true + ":" + condição false

/* forma alternativa da função acima, usando corpo {}
cont resultado = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}
*/
console.log(resultado(7.1)) //chamando a função arrow acima, junto com operador ternário
console.log(resultado(6.7)) //chamando a função arrow acima, junto com operador ternário 

const status = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
console.log(status(5))
