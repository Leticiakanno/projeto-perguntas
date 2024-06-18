const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ao se deparar com uma nova tecnologia avançada, capaz de responder todas as suas perguntas e criar imagens e áudios ultra-realistas, qual foi sua primeira reação?",
        alternativas: [
            {
                texto: "Isso é impressionante!",
                afirmacao: "Ficou fascinado com o potencial da tecnologia e quer explorar como ela pode melhorar a vida diária."
            },
            {
                texto: "Isso é perturbador!",
                afirmacao: "Inicialmente, sentiu receio em relação ao que essa tecnologia poderia significar."
            }
        ]
    },
    {
        enunciado: "Após aprender sobre Inteligência Artificial na escola, sua professora de tecnologia pede que você escreva um trabalho sobre seu uso em sala de aula. Qual abordagem você escolhe?",
        alternativas: [
            {
                texto: "Utiliza ferramentas de busca baseadas em IA para encontrar informações relevantes e explicar de forma acessível.",
                afirmacao: "Usou IA para obter informações úteis e facilitar a compreensão do tema."
            },
            {
                texto: "Baseia seu trabalho em discussões com colegas e pesquisa pessoal, sem depender diretamente da IA.",
                afirmacao: "Sentiu-se mais confortável usando seus próprios recursos para escrever o trabalho."
            }
        ]
    },
    {
        enunciado: "Durante um debate sobre o impacto da IA no futuro do trabalho, qual é sua posição?",
        alternativas: [
            {
                texto: "Defende que a IA pode criar novas oportunidades de emprego e aprimorar habilidades humanas.",
                afirmacao: "Está impulsionando a inovação em IA e busca abrir novos caminhos profissionais com essa tecnologia."
            },
            {
                texto: "Preocupa-se com o impacto negativo da IA na perda de empregos e defende a proteção dos trabalhadores.",
                afirmacao: "Sua preocupação com as pessoas motivou-o a criar um grupo de estudo sobre o uso ético da IA."
            }
        ]
    },
    {
        enunciado: "Após um debate, você precisa criar uma imagem que represente sua visão sobre a IA. Como você procede?",
        alternativas: [
            {
                texto: "Cria uma imagem usando software tradicional de design, como o Paint.",
                afirmacao: "Percebeu que muitas pessoas ainda não dominam ferramentas digitais e decidiu compartilhar seus conhecimentos."
            },
            {
                texto: "Cria uma imagem usando um gerador de imagens baseado em IA.",
                afirmacao: "Acelerou a criação de trabalhos usando geradores de imagem e começou a ensinar outros a usar essas ferramentas."
            }
        ]
    },
    {
        enunciado: "Em um trabalho de biologia em grupo, descobre que um membro usou IA para produzir o texto. O que você faz?",
        alternativas: [
            {
                texto: "Acha aceitável usar o texto gerado pela IA, pois contribuiu com os comandos para sua criação.",
                afirmacao: "Infelizmente, começou a depender demais da IA para todas as tarefas, perdendo parte de sua autonomia."
            },
            {
                texto: "Revisa o trabalho para incluir suas perspectivas pessoais e garantir originalidade.",
                afirmacao: "Entende que a IA reflete orientações predefinidas e que é essencial contribuir com ideias pessoais para um trabalho autêntico."
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
