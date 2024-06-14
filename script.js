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
