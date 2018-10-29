function teste1(num) {
    if (num > 7)
        console.log("Teste1: " + num) //Quando não tem bloco {} Ele roda só a primeira sentença
        
        console.log('Final') //Essa vai rodar, independente do if anterior
}

teste1(6) //Vai aparecer a mensagem 'Final' por não ter {} no if
teste1(8)

function teste2(num) {
    if (num > 7); { // O ";" finaliza o if antes de entrar no bloco posterior. Não usar com as estruturas de controle
        console.log("Teste2: " + num)
    }
}

teste2(6)
teste2(8)