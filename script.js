const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está ouvindo uma nova música que acaba de ser lançada. Qual é a sua primeira reação?",
        alternativas: [
            {
                texto: "Adoro a batida!",
                afirmacao: "Você é apaixonado por ritmos envolventes."
            },
            {
                texto: "A letra é incrível!",
                afirmacao: "Você presta atenção nas letras e se conecta com elas."
            }
        ]
    },
    {
        enunciado: "Um amigo te convida para um show ao vivo de sua banda favorita. Como você responde?",
        alternativas: [
            {
                texto: "Claro, eu amo shows ao vivo!",
                afirmacao: "Você adora a energia dos shows ao vivo e a conexão com os artistas."
            },
            {
                texto: "Prefiro ouvir as músicas em casa.",
                afirmacao: "Você prefere a tranquilidade e o conforto de ouvir música em casa."
            }
        ]
    },
    {
        enunciado: "Você tem a oportunidade de aprender a tocar um novo instrumento musical. Qual você escolhe?",
        alternativas: [
            {
                texto: "Guitarra, para tocar solos incríveis!",
                afirmacao: "Você quer aprender guitarra para criar solos memoráveis."
            },
            {
                texto: "Piano, pela versatilidade.",
                afirmacao: "Você escolhe o piano pela sua versatilidade em diferentes estilos musicais."
            }
        ]
    },
    {
        enunciado: "Você está criando uma playlist para uma festa. Que tipo de música você inclui?",
        alternativas: [
            {
                texto: "Músicas animadas e dançantes.",
                afirmacao: "Sua playlist está cheia de músicas que fazem todos dançarem."
            },
            {
                texto: "Músicas calmas e relaxantes.",
                afirmacao: "Sua playlist tem músicas que ajudam a criar um ambiente relaxante."
            }
        ]
    },
    {
        enunciado: "Você descobre um novo artista no streaming. O que faz em seguida?",
        alternativas: [
            {
                texto: "Explora todo o álbum.",
                afirmacao: "Você gosta de ouvir o álbum inteiro para entender o trabalho do artista."
            },
            {
                texto: "Adiciona algumas músicas na sua playlist.",
                afirmacao: "Você seleciona suas faixas favoritas para adicionar à sua playlist."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Seu perfil musical é...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
