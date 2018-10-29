function Pessoa() {
    this.idade = 0
    const self = this //constante para guardar o this da instância atual, Pessoa
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/* .bind(this) */, 1000) // Pode usar o bind se não quiser usar o self como feito anteriormente
}

new Pessoa