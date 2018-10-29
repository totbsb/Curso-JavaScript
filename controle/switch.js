const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) { //trabalha com valores, não necessariamente booleano
        case 10: //Se não tiver nada na frente, executa o próximo case válido
        //aqui vai rodar o console.log('Quadro de Honra') do case posterior
        case 9:
            console.log('Quadro de Honra')
            break //Se não colocar o break, ele retorna todas as ações abaixo da condição válida
        case 8: case 7: //Não pode ser intervalo, deve ser caso a caso
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default: //Não precisa ser no final
            console.log('Nota inválida')    
            break
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(5)
imprimirResultado(2)
imprimirResultado(-1)
imprimirResultado(11)
