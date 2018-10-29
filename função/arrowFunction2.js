function Pessoa() {
    this.idade = 0
    //setInterval serve para criar um temporizador na aplicação
    setInterval(() => { //Arrow function fixa o this no contexto léxico em que é declarado
        this.idade++
        console.log(this.idade)
    }/* .bind(this) */, 1000) // Não precisa usar o bind porque foi usada uma arrow function
}

new Pessoa