// EXERCÍCIO 11

let salarioBruto = 3000.00;

let salarioBase;

if(salarioBruto <= 1556.94) {
    salarioBase = (salarioBruto - (salarioBruto * 0.08));
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salarioBase = (salarioBruto - (salarioBruto * 0.09));
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    salarioBase = (salarioBruto - (salarioBruto * 0.11));
} else {
    salarioBase = (salarioBruto - 570.88);
}

//console.log(salarioBase);

let descontoIR;

if(salarioBase <= 1903.98) {
    descontoIR = 0;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    descontoIR = ((salarioBase * 0.075) - 142.80);
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    descontoIR = ((salarioBase * 0.15) - 354.80);
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    descontoIR = ((salarioBase * 0.225) - 636.13);
} else {
    descontoIR = ((salarioBase * 0.275) - 869.36);
}

//console.log(descontoIR);

let salarioLiquido = (salarioBase - descontoIR)

console.log(salarioLiquido);
