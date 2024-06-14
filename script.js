const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
   {
       enunciado: "qual seria sua reação se todo o material fisico (material de estudo) fosse substituído por apostilas virtuais, qual seria sua reação?",
       alternativas: [
           {
               texto: "Isso é assustador!",
               afirmacao: "afirmação"
           },
           {
               texto: "Isso é horrivel!",
               afirmacao: "afirmação"
           }
       ]
   },
   {
       enunciado: "voce faz uso do chat gpt?",
       alternativas: [
           {
               texto: "sim.",
               afirmacao: "afirmação"
           },
           {
               texto: "não.",
               afirmacao: "afirmação"
           }
       ]
   },
   {
       enunciado: "o auxilio da inteligencia artificial pode modificar o verdadeiro significado das pesquisas feitas pelo ser humano?",
       alternativas: [
           {
               texto: "sim, pois a IA nao tem embasamento cientifico.",
               afirmacao: "afirmação"
           },
           {
               texto: "nao, ela apenas mostra fontes de pesquisa.",
               afirmacao: "afirmação"
           }
       ]
   },
   {
       enunciado: "vc acha ético ultilizar IA na criação de trabalhos escolares?",
       alternativas: [
           {
               texto: "sim, não há nada de errado nisso.",
               afirmacao: "afirmação"
           },
           {
               texto: "não, pois nós temos capacidade de fazer isso sozinhos.",
               afirmacao: "afirmação"
           }
       ]
   },
   {
       enunciado: "as artes geradas por IA podem ser consideradas artes renomadas? ",
       alternativas: [
           {
               texto: "sim.",
               afirmacao: "afirmação"
           },
           {
               texto: "não.",
               afirmacao: "afirmação"
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
