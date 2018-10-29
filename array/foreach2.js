Array.prototype.forEach2 = function(callback) { //Criando uma função no prototype do Array
    for (let i=0;i < this.length;i++) { //Percorrer todo o array
        
        callback(this[i],i,this) //valor atual, índice, array completo
    }
}


const aprovados = ['Agatha','Aldo','Daniel','Raquel'] //cria o array de aprovados

//Essa função de callback tem os 3 atributos, na ordem(valor, índice, Array completo)
aprovados.forEach2(function(nome,indice) { //passa uma função de callback para agir com cada elemento do Array
    console.log(`${indice + 1}) ${nome}`) //Template String formatando a saída
})
  
