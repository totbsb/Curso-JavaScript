// Exemplo de callback no browser

//document aponta para a tela do browser.
document.getElementsByTagName('body')[0].onclick = function (e) { //Retorna um array de 'bodys'
    console.log('O evento ocorreu!')
} 

// Depois de lançar a função no browser, ele chama essa função em cada click no browser