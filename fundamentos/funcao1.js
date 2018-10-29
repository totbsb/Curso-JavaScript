//Função é um bloco de código, com um nome definido, podendo ser chamado futuramente
//Pode receber ou não parâmetros
//Pode ou não ter retorno

//Função sem retorno
function imprimirSoma(a,b){ //não foram declaradas as variáveis, podendo receber qualquer valor
    console.log(a + b)
}

imprimirSoma(2,3) //chamando a função e passando os valores

imprimirSoma(2) //Retorna um 'NaN' por tentar somar '2' com 'undefined'

imprimirSoma(2,3,4,5,6) //Pega os dois primeiros e simplesmente ignora o restante

imprimirSoma() //Retorna um 'NaN' por não ter atributos


//Função com retorno
function soma(a, b = 0) { //pode atribuir um valor padrão para a variável
    return a + b
}

console.log(soma(2,3)) //chama a function dentro do console.log

console.log(soma(2)) //chama a function dentro do console.log, usando o valor de b = 0 como padrão

console.log(soma()) //Retorna um NaN por tentar somar 'undefined' com '0' padrão de 'b'
