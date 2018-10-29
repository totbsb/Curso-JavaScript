//Cadeia de protótipos (prototype chain)
//Criar avô-pai-filho

Object.prototype.attr0 = '0' //Não faça, pode impactar na estrutura toda, mexendo no prototype de todos os objetos 
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B',attr3: '3'}
const filho = {__proto__: pai, attr3: 'C'}

console.log(filho.atrr1) //Retorna o atributo do avo, mesmo puxando do filho
console.log(filho.attr0) //Retorna a variável herdada na ordem: filho->pai->avo->Object.prototype(apontado como padrão por todos)
console.log(filho.attr3) //O escopo mais próximo é de 'filho', por isso não mostra o valor attr3 de 'pai'
console.log(
    filho.attr0, //vindo de Object.prototype
    filho.attr1, //vindo de avo
    filho.attr2, //vindo de pai
    filho.attr3 //vindo de filho
)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing, sombreando o valor definido na classe carro
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` //palavra super para chamar o método do Objeto pai
    }
}

console.log(ferrari) //mostra a principio somente os atributos do objeto, sem os atributos do objeto pai

Object.setPrototypeOf(ferrari,carro) //cria a herança (prototipo) no objeto filho e aponta para o objeto pai
Object.setPrototypeOf(volvo,carro) //similar ao comando anterior

volvo.acelerarMais(100) //função herdada
ferrari.acelerarMais(300) //função herdada

console.log(volvo.status()) //chama a função, mostrando de forma diferente por conta do sombreamento (sobrescrita) da function
console.log(ferrari.status()) //chama a função do objeto pai, no caso 'carro'

console.log(ferrari)