//declarando um objeto com '{}'. Todo objeto é uma coleção de chaves e valores
//IMPORTANTE: Objetos não são JSONS, não confundir

const prod1 = {}

// Incluindo uma chave 'nome' e o conteudo da String
prod1.nome = 'Celular Ultra Mega'
//incluindo um novo atributo 'preco' com o valor 4998.90
prod1.preco = 4998.90
// incluindo outra chave com espaço no nome dela utilizando o '[]'. Evitar atributos com espaços
prod1['Desconto Legal'] = 0.40

//Mostrando o objeto
console.log(prod1)

//Declarando direto no objeto
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2)

//Declarando objetos com objetos aninhados
const prod3 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {         //aninhar objetos
        blabla: 1,
        obj: {
            blabla:2
        }
    }
}

console.log(prod3)
