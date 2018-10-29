//Criando os objetos

// Usando a notação literal     ### Não é JSON ####
const obj1 = {}
console.log(obj1)

//Usando Object em JS (Função construtora do próprio JS)
console.log(typeof Object, //É uma function
typeof new Object) //com a palavra 'new' gera um Object
const obj2 = new Object
console.log(obj2)

//Funções construtoras personalizadas
function Produto (nome, preco, desc) { //preco e desc são variáveis privadas
    this.nome = nome //torna visível o atributo nome
    this.getPrecoComDesconto = () => { //torna o método público
        return preco * (1 - desc) 
    }
}
const p1 = new Produto('Caneta', 7.99, 0.15) //Cria um novo objeto 
const p2 = new Produto('Notebook', 2998.99, 0.25) //Cria um novo objeto 

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto()) //Chama os dois métodos, um pra cada objeto

//função factory
function criarFuncionario( nome, salarioBase, faltas) {
    return {  //Cria e retorna o objeto com todos os atributos e todas as funções deste 
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30-faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980,4) //Criando um objeto com base na função construtora
const f2 = criarFuncionario('Maria', 11400,1) //Criando um objeto com base na função construtora
console.log(f1.getSalario(),f2.getSalario()) //Chamando o método de cada objeto criado


//Object.create - Será visto mais profundamente mais a frente
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Uma função famosa que retorna Objeto com base em um JSON
const fromJSON = JSON.parse('{"info":"Sou um JSON"}') //Converte um JSON em um objeto
console.log(fromJSON.info) //acessando o 'info' presente no JSON
