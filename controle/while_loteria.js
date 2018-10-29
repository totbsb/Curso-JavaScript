function getIntEntre(min, max) { //Retorna um valor entre os dois passados
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let min = 1
let max = 50063860
let opcao = getIntEntre(min,max) //usado no while
let cont = 0 //quantas vezes foram necessárias
let cont2 = getIntEntre(min,max)

while (opcao != cont2) {
    opcao = getIntEntre(min,max)
    cont2 = getIntEntre(min,max)
    //console.log(`Opção foi: ${opcao}`)
    cont++ //incrementa a cada loop
}

console.log(cont + 'ª opção')
console.log('Foram gastos R$'+float2moeda(cont*3.5))

function float2moeda(num) {

    x = 0;
 
    if(num<0) {
       num = Math.abs(num);
       x = 1;
    }
 
    if(isNaN(num)) num = "0";
       cents = Math.floor((num*100+0.5)%100);
 
    num = Math.floor((num*100+0.5)/100).toString();
 
    if(cents < 10) cents = "0" + cents;
       for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
          num = num.substring(0,num.length-(4*i+3))+'.'
                +num.substring(num.length-(4*i+3));
 
    ret = num + ',' + cents;
 
    if (x == 1) ret = ' - ' + ret;return ret;
 
 }