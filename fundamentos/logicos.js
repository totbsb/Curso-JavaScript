//Dois trabalhos, com as devidas condições abaixo
function compras(trabalho1,trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // Ou deve ser com dois pipes '||'
    const comprarTV50 = trabalho1 && trabalho2 // E deve ser com dois '&&'
    // const comprarTV32 = !!(trabalho1 ^ trabalho2) //bitwise xor. Forma de ver bit a bit os dois elementos para efetuar o OU exclusivo
    const comprarTV32 = trabalho1 != trabalho2 //maneira mais elegante de faze o OU exclusivo
    const manterSaudavel = !comprarSorvete //Negação de comprarSorvete

//Nova forma de retornar os atributos, incluso no ES2015
//Não precisa colocar {comprarSorvete: comprarSorvete .......} como exemplo    
return {comprarSorvete, comprarTV32, comprarTV50, manterSaudavel} //retornar um objeto com todos os valores
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))

