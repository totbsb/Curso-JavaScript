class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { //Forma de definir o prototipo da classe(função internamente)
    constructor(sobrenome,profissao = 'Professor') {
        super(sobrenome) //Chama o constructor da classe pai, passando o parâmetro
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva') //chama o constructor da classe Pai
    }
}

const filho = new Filho  //cria o novo objeto 'filho'
console.log(filho)