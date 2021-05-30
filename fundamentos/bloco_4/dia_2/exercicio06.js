let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
numerosimpares = 0

for(let index = 0; index < numbers.length; index+=1) {
    if((numbers[index] % 2) === 1) {
        numerosimpares = numerosimpares + 1;
    }
}

if(numerosimpares === 0) {
    console.log("Nenhuma valor ímpar encontrado")
} else {
    console.log(numerosimpares);
}



