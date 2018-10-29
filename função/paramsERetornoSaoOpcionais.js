function area(largura, altura) {
    const area = largura *  altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m².`)
    } else {
        return area
    }
}

console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2,3,17,22,44))
console.log(area(5,5)) //imprime 'undefined' porque não tem retorno para 'area > 20'
area(5,5) //Este imprime a mensagem que está na função