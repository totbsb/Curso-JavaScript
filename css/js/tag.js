// Verificar por cores cada tag de forma separada
const colors = {
    p: '#38833c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}


// busca todos os elementos da página e faz uma interação com o forEach
document.querySelectorAll('.tag').forEach(elemento => {
    // guarda o nome da tag deste elemento
    const tagName = elemento.tagName.toLowerCase()
    // Altera a cor da borda do elemento
    elemento.style.borderColor = colors.get(tagName)

    // Se não estiver marcado como 'nolabel' inserir o nome da tag
    if (!elemento.classList.contains('nolabel')) {
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        //Inserir antes de qualquer elemento dentro da tag
        elemento.insertBefore(label,elemento.childNodes[0])
    }
})