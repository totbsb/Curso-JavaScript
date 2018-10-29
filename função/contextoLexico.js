const valor = 'Global'

function minhaFuncao() { //A função carrega com ela o contexto que ela foi declarada.
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao(valor) //Por conta do contexto desta função, a variável 'valor' vai retornar 'GLobal'.
}


exec()