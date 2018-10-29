const aprovados = ['Agatha','Aldo','Daniel','Raquel'] //cria o array de aprovados

//Essa função de callback tem os 3 atributos, na ordem(valor, índice, Array completo)
aprovados.forEach(function(nome,indice) { //passa uma função de callback para agir com cada elemento do Array
    console.log(`${indice + 1}) ${nome}`) //Template String formatando a saída
})


aprovados.forEach(nome => console.log(nome)) //Passando uma função pra pegar só o valor, sem o índice

const exibirAprovados = aprovado => console.log(aprovado) //cria a função de callback e coloca numa variável
aprovados.forEach(exibirAprovados) //passa a variável com a função como callback