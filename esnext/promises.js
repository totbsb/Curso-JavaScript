//

function falarDepoisDe(segundos, frase) { //tempo e a frase a ser usada
    // Promisse recebe dois parametros, "resolve" e "reject"
    // Resolve
    return new Promise ((resolve, reject) => {
        setTimeout(() => { // Um setTimeout para simular uma ação temporal
            //resolve aceita só um parâmetro. Tem que ser um objeto se quiser enviar mais atributos
            resolve(frase) //recebe a frase a partir de uma promise e "resolve"
            //reject("rejeitada") // O reject é mostrado no '.catch'
        }, segundos * 1000) // Configurando o tempo do Timeout
    })
}

falarDepoisDe(3,"Que legal!") //chama a função
// Then é chamado quando a promise conclui o 'resolve', pegando o atributo passado
.then(frase => frase.concat('?!?!?!')) 
.then(frase2 =>  frase2.concat('?!?!?!')) // O 'then' passa o resultado para o próximo 'then'
.then(frase3 => console.log(frase3))
.catch(e => console.log(e)) //executa quando der erro. Pega o que foi passado em 'reject'
