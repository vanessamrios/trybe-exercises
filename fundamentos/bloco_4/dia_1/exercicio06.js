//EXERCÍCIO 06

let pecadexadrez = "torre";

switch (pecadexadrez.toLowerCase()) {
    case "rainha":
        console.log("Rainha -> pode ir para frente ou para trás, para direita ou para a esquerda, ou na diagonal, quantas casas quiser, mas não pode pular nenhuma outra peça");
        break;
    case "rei":
        console.log("Rei -> apenas 1 casa em qualquer direção.");
        break;
    case "peão":
        console.log("Peão -> só se movimenta para frente");
    case "cavalo":
        console.log("Cavalo -> movimento especial que parece a letra L");
        break;
    case "bispo":
        console.log("Bispo -> se movimenta na diagonal mantendo-se sempre nas casas de mesma cor que se encontrava no início do jogo")
        break;
    case "torre":
        console.log("Torre -> se movimenta para frente e para trás, para a direita e para a esquerda, quantas casas quiser, mas não pode pular nenhuma outra peça");
        break;
    default:
        console.log ("peça inválida")
        break;
}
