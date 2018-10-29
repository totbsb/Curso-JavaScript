// No JSON não tem a função presente nos objetos do JavaScript, apenas os dados
// Toda string e todos as chaves devem ficar entre aspas duplas

const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma () {
        return a + b + c
    }
}

console.log(JSON.stringify(obj)) //Na transformação para o JSON, a função 'soma()' não é passada 

//console.log(JSON.parse("{ a: 1, b: 2, c: 3}")) //Deu erro, não está no formato certo
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3}")) //Deu erro, não está no formato certo
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}')) //Esse está correto, sendo delimitado por aspas simples e os atributos entre ""
console.log(JSON.parse('{ "a": 1, "b": 2, "c": [], "d" : {}}')) //Válido também
