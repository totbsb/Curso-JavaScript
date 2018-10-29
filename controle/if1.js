function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)       
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1) //Não executa por ser false

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log('É verdade....' + valor)
    }
}

seForVerdadeEuFalo() //Não executa por ser false
seForVerdadeEuFalo(null) //Não executa por ser false
seForVerdadeEuFalo(undefined) //Não executa por ser false
seForVerdadeEuFalo(NaN) //Não executa por ser false
seForVerdadeEuFalo('') //Não executa por ser false
seForVerdadeEuFalo(0) //Não executa por ser false
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})

