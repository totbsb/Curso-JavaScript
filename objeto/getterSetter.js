const sequencia = {
    _valor: 1, //convenção para demonstrar que o atributo é interno. Não é privado, por isso uma convenção
    get valor() { //Método para criar um get diretamente no objeto
        return this._valor++ },
        //Permite colocar o mesmo nome para get e set, no caso 'valor' 
    set valor(valor) { //Método para criar um set diretamente no objeto
        if (valor > this._valor) {
        this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor) //chamando o GET. Mostra o primeiro, incrementa e chama o segundo
sequencia.valor = 1000 //colocando o SET no valor
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 //Não altera porque é menor do que o passado anteriormente
console.log(sequencia.valor, sequencia.valor)