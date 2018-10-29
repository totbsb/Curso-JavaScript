function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado e interno, não podendo ser acessado diretamente
    let velocidadeAtual = 0

    //método público
    this.acelerar = function () { // O this será responsável por tornar o método público
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidadeAtual = function () { //função para retornar um valor de uma variável local
        return velocidadeAtual
    }

}

const uno = new Carro //Não dá erro sem os '()'. Ele chama o construtor com valores padrão. Pode ser Carro()
    uno.acelerar()
    console.log(uno.getVelocidadeAtual())

    const ferrari = new Carro(350,20)
   ferrari.acelerar()
   console.log(ferrari.getVelocidadeAtual())
