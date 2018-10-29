const filhas = ['Valeskah', 'Cibalena']
const filhos = ['Washington','Uesclei']
let todos = filhas.concat(filhos) //o método concat retorna uma junção de arrays e valores passados como atributos com o array principal 
todos = todos.concat('filho',['filho2','filho3','filho4']) //anexando elementos e arrays diretamente
//quando temos matrizes (array dentro de array) ele retorna o array interno, mas não tira todas as sub-estruturas de array
todos = todos.concat([['filho5','filho6']]) //acrescenta o array ['filho5','filho6'] na variável 'todos'
console.log(todos)