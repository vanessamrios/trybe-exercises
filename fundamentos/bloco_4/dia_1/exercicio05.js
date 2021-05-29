//EXERCÍCO 05 

let anguloa = 60;
let angulob = 60;
let anguloc = 60;

let somaangulos = (anguloa + angulob + anguloc);

if (somaangulos === 180) {
    console.log(true);
} else if (anguloa >= 180 || angulob >= 180 || anguloc >= 180) {
    console.log("erro: ângulo inválido");
} else if (anguloa <= 0 || angulob <= 0 || anguloc <= 0) {
    console.log("erro: ângulo inválido");
} else {
    console.log(false);
}
