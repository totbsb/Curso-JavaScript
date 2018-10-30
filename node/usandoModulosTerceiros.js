//Instalando de forma global uma biblioteca
//No terminal deve ser digitado 'npm i -g <pacote>

// Normalmente, quando requer o lodash, coloca numa constante '_'
// Essa requisição busca o 'index.js' dentro do pacote 'lodash' da pasta 'node_modules'
const _ = require('lodash') //forma de importar o pacote instalado pelo 'npm i lodash'

//a função random retorna um valor entre os dois passados
//setInterval executa uma função de acordo com os milisegundos passados no segundo parâmetro
setInterval(() => console.log(_.random(1,5)),500)

// Usei o comando nodemon usandoModulosTerceiros.js que foi instalado de forma global
// Ele permite uma execução contínua, executando as mudanças assim que o arquivo é salvo
