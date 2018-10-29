let comparaComThis = function (param) {
    console.log(this === param)
}
//Retorna true porque no Runtime do NODE o escopo global é o principal
comparaComThis(global) 

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) //Retorna False porque foi usado o bind para 'obj' na linha anterior
comparaComThis(obj) //retorna true por conta do bind(obj) passado anteriormente

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)  //Funções arrows adotam o valor de this como o contexto léxico
comparaComThisArrow(module.exports) //Retornará true porque o this é o módulo do Node que estamos

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) //Retorna falso porque o bind não tem efeito numa arrow function
comparaComThisArrow(module.exports) //Retorna true, independente do bind para 'obj'