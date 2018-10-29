console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null

console.log(module.exports)

//Esse objeto não vai pelo método 'require'
exports = {nome: 'Não vai ser exportado'}

//Esse objeto vai pelo método 'require', sobrescrevendo os demais
module.exports = {nome: 'Será exportado'}