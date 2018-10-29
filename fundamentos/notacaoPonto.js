//Utilizando o "." para acessar uma função definida no objeto
console.log(Math.ceil(6.1)) //arredondar para cima

//Utilizando o "." para acessar os atributos de um objeto
const obj1 ={}
obj1.nome = 'Bola' //criar dinamicamente um atributo dentro do objeto
//obj1['nome'] = 'Bola2' //alternativa para incluir o primeiro
console.log(obj1.nome)


function Obj(nome) {
    this.nome = nome //recebe o atributo passado pra função e o torna público, podendo ser usado
    this.exec = function() { //pode ser uma função também
        console.log('Exec...')
    }
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()