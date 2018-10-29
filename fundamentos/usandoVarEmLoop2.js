const funcs = []

for(var i = 0; i < 10; i++) { //utilizando o 'var'
    funcs.push(function() { //Aqui podemos armazenar uma função anonima no array
        console.log(i)
    })
}

//Não importa o valor passado, sempre vai aparecer o valor atual de i, "10", por ser 'var'
funcs[2]()
funcs[8]()
