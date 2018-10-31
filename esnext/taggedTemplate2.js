// Criando uma função de formatação das Template Strings
function real(partes, ...valores) {  //passando a template fracionada em partes e valores
    console.log(partes) //Strings do texto de forma intercalada
    console.log(valores) //Variáveis do texto de forma intercalada. ${preco} e ${precoParcela}
    const resultado = []
    valores.forEach((valor,indice) => { //percorrendo o array de variáveis, exemplo: ${preco}
        // Se o valor for um número, formatar para 'Real', R$ XXX,XX
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        //Inclui de forma sequencial 'a parte com o índice do valor' e 'valor' com a variável trabalhada
        resultado.push(partes[indice],valor)
        //console.log(resultado)
    })
    return resultado.join('') //junta todos os valores do array para simular a Template String
}

const preco = 29.9
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`) //chamando a tag 'real' na template string