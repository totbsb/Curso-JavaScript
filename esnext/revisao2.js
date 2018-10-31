 // Arrow function
 const soma = (a,b) => a + b //funções arrow sempre são anônimas
 // Se tiver corpo nesta função, obrigatoriamente deve ter um return

 console.log(soma(2,3))

 // Arrow Function (this)
const lexico1 = () => console.log(this === exports) //'this' na função arrow é do módulo do node
const lexico2 = lexico1.bind({}) //Mesmo forçando a barra com o bind, não muda o 'this' da arrow function
lexico1()
lexico2()

// PArâmetros default
function log(texto = 'Node') {
    console.log(texto)
}

log() // assume o valor default, no caso "Node"
log("Texto") // O texto passado sobrepõe o valor padrão, imprimindo "Texto"

//Operador Rest (Nas funções o nome é 'rest', de juntar)
function total(...numeros) { //recebendo uma quantidade de números e criando um array com todos
    let total = 0
    numeros.forEach(n => total += n) //Percorrendo o array e somando cada valor
    return total //retorna o total deles
}
console.log(total(2,3,4,5)) //chamando a função

