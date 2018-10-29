const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13,
    endereco: { //inseri o campo endereço por conta própria para ver o comportamento desse objeto nas funções abaixo
        Rua: 'Av. Teste',
        numero: 5
    }
}

console.log(Object.keys(pessoa)) //Puxar todas as chaves do objeto
console.log(Object.values(pessoa)) //Puxar todas os valores do objeto

//Puxar todas as chaves e os valores em formato de Array, criando um array pra cada par chave-valor
console.log(Object.entries(pessoa))

//Percorre o array criado e retorna cada chave [0] e valor [1] do elemento passado (pessoa)
Object.entries(pessoa).forEach(e => {   
    console.log(`${e[0]}: ${e[1]}`)
});

//Alternativa para percorrer o array criado e retorna cada chave [0] e valor [1] do elemento passado (pessoa)
Object.entries(pessoa).forEach(([chave,valor]) => {   
    console.log(`${chave}: ${valor}`)
});


//Criado por Thiago, fora dos vídeos
const teste = Object.entries(pessoa)[3][1] //Pega o objeto endereço que está presente no array
console.log(Object.entries(teste)[1][1]) //Converte em Array e pega o atributo 'numero' desse objeto
//Mesmo que as linhas anteriores, só que em uma instrução só e sem a criação da constante 'teste'
console.log(Object.entries( Object.entries(pessoa)[3][1] )[1][1])

//Definir a propriedade de um objeto, algumas caracteristicas
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //define se o objeto pode ser listado, por exemplo no comando 'keys' e 'values' de Object
    //Similar ao freeze o atributo 'writable'
    writable: true, //define se o atributo pode ser reescrito posteriormente.
    value: '01/01/2019' //valor padrão para o atributo. Se a reescrita estiver false, esse valor será fixo
})

pessoa.dataNascimento ='01/01/2017' //Efeito somente se writable: true nas propriedades do Objeto
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))

//Object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = { b: 2}
const o2 = {c: 3, a: 4}
//Concatena todos os objetos, sobrescrevendo o valor para chaves de mesmo nome
const obj = Object.assign(dest, o1, o2) //a variável 'a' de 'dest' foi sobrescrita pela 'a' de 'o2' 

console.log(obj)

Object.freeze(obj) //Congela o objeto, não permitindo a alteração posterior
obj.c = 1234 //Tentativa falha de alteração, por conta do freeze
console.log(obj)
