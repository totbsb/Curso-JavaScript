//Object.preventExtensions
//Previne que não sejam adicionados novos atributos aos objetos

const produto = Object.preventExtensions({ //cria o objeto que pode ser modificado, mas não pode adicionar
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensivel:', Object.isExtensible(produto)) //Verifica se o objeto é extensível

produto.nome = 'Borracha' //permite alteração
produto.descricao = 'Borracha escolar branca' //não permite novos atributos
delete produto.tag //permite deletar
console.log(produto)

//Object.seal (selar)
const pessoa = {nome: 'Juliana', idade: 35} //cria objeto normalmente
Object.seal(pessoa) //Não consegue adicionar nem excluir os atributos a partir de agora
console.log(pessoa)
console.log('Selado: ',Object.isSealed(pessoa)) //Verifica se está selado
pessoa.sobrenome = 'Silva' //Não adiciona o atributo por conta da selagem
delete pessoa.nome //Não permite a exclusão por conta da selagem
pessoa.idade = 29 //Permite a alteração dos dados, só não permite a inclusão/exclusão
console.log(pessoa)

//Object.freeze = Selado + valores constantes
//Já visto em exemplos anteriores

