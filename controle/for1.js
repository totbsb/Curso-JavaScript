let contador = 1

while(contador <= 10) { //exemplo de while
    console.log(contador)
    contador++   
}

for(let i = 1;i<=10;i++) { //exemplo de for para o mesmo while
    console.log(i)
}

const notas = [6.7,7.4,9.8,8.1,7.7]

for(let i = 0;i < notas.length; i++) { //Colocar 'let' para não aparecer em outro lugar o 'i'
    console.log(`Notas = ${notas[i]}`)
}