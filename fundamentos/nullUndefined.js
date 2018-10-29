//Esses exemplos foram utilizados no console do browser

//const a = {name: 'Teste'} //Criação do objeto
//undefined //Retorno do browser 
//a //chamada do objeto
//{name: "Teste"} //Retorno do browser com o objeto
//const b = a //Passagem da 'referência' para a variável 'b'
//undefined //Retorno do browser
//b.name = 'Opa' //atribuição para o atributo name pela variável 'b'
//"Opa" //Retorno do browser
// a //chamar o objeto 'a'
//{name: "Opa"} //Retorno do browser com o objeto mudado pela variável 'b' mas acessado pela variável 'a'

//let c = 3 // atribuindo um tipo primitivo
//undefined //Retorno do browser
//let d = c //Passagem do 'valor' para a variável 'd'
//undefined //Retorno do browser
//d++ //incrementar a variável 'd'
//d // mostrar o valor de 'd'
//4 // mostra o valor incrementado
//c // mostrar o valor de 'c'
//3  //mostra o valor de 'c' não afetado pela incrementação em 'd', por ser do tipo primitivo

let valor //não inicializada
console.log(valor) //retorna o valor 'undefined' porque não foi inicializada
//console.log(valor2) //retorna um erro por não ter sido declarada

valor = null //ausência de valor. Não aponta para nenhum lugar de memória
console.log(valor)  //retorna o valor 'null'

//console.log(valor.toString()) //Gera um erro porque não podemos acessar o toString de um valor null

const produto = {}
console.log(produto.preco) //retorna undefined
console.log(produto) //retorna o objeto vazio, '{}'

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined. Utilize '0' para inteiros ou 'null' para os demais
console.log(!!produto.preco) //retorna falso por dupla negação em 'undefined'
console.log(produto) // retorna o objeto com o 'undefined' no valor da chave 'preco'

delete produto.preco // retira o valor, mas não deixa com o valor 'undefined'
console.log(produto) // retorna o objeto vazio, '{}'

produto.preco = null //sem preço, utilizando de forma explícita o valor 'null'
console.log(!!produto.preco) //retorna o valor false por ser uma dupla negação de 'null'
console.log(produto) //retorna o objeto {preco: null}

