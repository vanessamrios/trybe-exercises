// // EXERCÍCIO 01

// let a = 1
// let b = 2

// console.log (a + b);
// console.log (a -b);
// console.log (a * b);
// console.log (a /b);
// console.log(a % b);

// //EXERCÍCIO 02

// let numeroa = 2
// let numerob = 4

// if(numeroa > numerob) {
//     console.log(numeroa)
// } else {
//     console.log(numerob)
// // }

// // EXERCÍCIO 03

// let a = 30;
// let b = 40;
// let c = 50;

// if (a > b && a > c) {

//     console.log (a + " é maior que " + b + " e " + c);

// } else if (b > a && b > c) {

//     console.log (b + " é maior que " + a + " e " + c)

// } else {
//     console.log (c + " é maior que " + b + " e " + a)
// }

// EXERCÍCIO 04

// let a = -2

// if (a > 0) {
//     console.log ("positive")
// } else if (a < 0) {
//     console.log ("negative")
// } else {
//     console.log("zero")
// }

//EXERCÍCO 05 

// let anguloa = 60;
// let angulob = 60;
// let anguloc = 60;

// let somaangulos = (anguloa + angulob + anguloc);

// if (somaangulos === 180) {
//     console.log(true);
// } else if (anguloa >= 180 || angulob >= 180 || anguloc >= 180) {
//     console.log("erro: ângulo inválido");
// } else if (anguloa <= 0 || angulob <= 0 || anguloc <= 0) {
//     console.log("erro: ângulo inválido");
// } else {
//     console.log(false);
// }

//EXERCÍCIO 06

// let pecadexadrez = "torre";

// switch (pecadexadrez.toLowerCase()) {
//     case "rainha":
//         console.log("Rainha -> pode ir para frente ou para trás, para direita ou para a esquerda, ou na diagonal, quantas casas quiser, mas não pode pular nenhuma outra peça");
//         break;
//     case "rei":
//         console.log("Rei -> apenas 1 casa em qualquer direção.");
//         break;
//     case "peão":
//         console.log("Peão -> só se movimenta para frente");
//     case "cavalo":
//         console.log("Cavalo -> movimento especial que parece a letra L");
//         break;
//     case "bispo":
//         console.log("Bispo -> se movimenta na diagonal mantendo-se sempre nas casas de mesma cor que se encontrava no início do jogo")
//         break;
//     case "torre":
//         console.log("Torre -> se movimenta para frente e para trás, para a direita e para a esquerda, quantas casas quiser, mas não pode pular nenhuma outra peça");
//         break;
//     default:
//         console.log ("peça inválida")
//         break;
//}

// EXERCÍCIO 07

// let nota = 0;

// notaValida = nota >= 0 && nota <=100;

// if (notaValida) {
//     if (nota >= 90) {
//         console.log("A");
//     } else if (nota >= 80) {
//         console.log("B");
//     } else if (nota >= 70) {
//         console.log("C");
//     } else if (nota >= 60) {
//         console.log("D");
//     } else if (nota >= 50) {
//         console.log("E");
//     } else {
//         console.log("F");
//     }
// } else {
//     console.log("Nota inválida!");
// }

// EXERCÍCIO 08

// let a = 3;
// let b = 3;
// let c = 5;

// let temPar = (a % 2 === 0 || b % 2 === 0 || c % 2 === 0);

// console.log(temPar);

// EXERCÍCIO 09

// let a = 4;
// let b = 2;
// let c = 2;

// let temImpar = (a % 2 === 1 || b % 2 === 1 || c % 2 === 1);

// console.log(temImpar);

// // EXERCÍCIO 10

// let custo = 15;
// let venda = 22;
// let impostoSobreCusto = (custo * 0.20)

// let custoTotal = custo + impostoSobreCusto

// let lucro = (venda - custoTotal);

// console.log(lucro*1000);

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



