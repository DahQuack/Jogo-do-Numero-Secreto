//Variaveis e console
let numerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerador();
let tentativas = 1;
console.log(numeroSecreto);

//função de textos
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirTextoInicial() {
    exibirTextoNaTela("h1", "O Jogo do Número Secreto");
    exibirTextoNaTela("p", `Escolha um número entre 1 e ${numeroLimite}`);
}

exibirTextoInicial()

//função de verificação
function verificarChute() {
    let chute = document.querySelector("input").value;
        // acerto, informa o número de tentativas e permite reiniciar o jogo
    if(chute == numeroSecreto){
        exibirTextoNaTela("h1", "PARABÉNS! Você acertou!");
        document.getElementById("reiniciar").removeAttribute("disabled");
        if(tentativas == 1){
            exibirTextoNaTela("p", `Você é menos idiota que eu pensei! Só precisou de ${tentativas} tentativa!- Pera, tu acertou de primeira?!`);
        } else {
            exibirTextoNaTela("p", `Você é menos idiota que eu pensei! Só precisou de ${tentativas} tentativas! Mas poderia ter sido de prima ai em..`)
        }
        // Erro + Aumenta o número de tentativas
    } else {
        if(chute < numeroSecreto) {
            exibirTextoNaTela("p", `Burro! Você errou. O número era maior que ${chute}!`);
        } else {
            exibirTextoNaTela("p", `Burro! Você errou. O número era menor que ${chute}!`);
        }
        tentativas++;
        limparCampo()
        console.log(tentativas);
    } 
}

// função de limpar campo

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

//Gerador de número aleatório
function gerador() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1 );
    let listadenumeros = numerosSorteados.length;
    if (listadenumeros == numeroLimite) {
        numerosSorteados = [];
    }

    if (numerosSorteados.includes(numeroEscolhido)) {
        return gerador();
    } else {
        numerosSorteados.push(numeroEscolhido);
        console.log(numerosSorteados)
        return numeroEscolhido;
    }
}

// função de reiniciar o jogo
function reiniciarJogo() {
    numeroSecreto = gerador();
    limparCampo();
    tentativas = 1;
    exibirTextoInicial();
    console.log(numeroSecreto)
    document.getElementById("reiniciar").setAttribute("disabled", true);
}