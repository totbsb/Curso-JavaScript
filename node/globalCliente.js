require ('./global') //chamando o arquivo global.js

console.log(MinhaApp.saudacao()) //Chamando a função criada no global.js

MinhaApp.nome = 'Eita!'  // Mudando uma variável no objeto global

console.log(MinhaApp.nome) //Verificando a mudança anterior