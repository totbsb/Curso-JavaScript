//Três maneiras diferentes de exportar um atributo para outros modulos do Node
//A forma correta deve ser 'module.exports = {}', passando um objeto com as informações
this.ola = 'Fala pessoal' 
exports.bemVindo = 'Bem vindo ao Node!'
module.exports.ateLogo = 'Até o próximo exemplo'

//Demonstração de igualdade entre os três objetos
//console.log((this === exports) === (exports === module.exports) === (this === module.exports))