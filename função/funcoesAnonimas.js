const soma = function (x ,y) { //função anônima
    return x + y
} 

const imprimirResultado = function (a, b, operacao = soma) { //padrão 'soma' se não passar nada
    console.log(operacao(a, b)) //chama a função em 'operacao'
}

imprimirResultado(3,4)
imprimirResultado(3,4,soma) //redundante, por ser soma o valor padrão
imprimirResultado(3,4,function (x,y) { //passando uma função anônima diretamente
    return x -y
})

imprimirResultado(3,4, (x, y) => x * y) //passando uma arrow function como parâmetro

const pessoa = {
    falar: function () { //atributo 'falar' recebe uma função anônima
        console.log('Opa')
    }
}

pessoa.falar() //chama a função 'falar' do objeto 'pessoa'