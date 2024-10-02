var setaDireita = window.document.getElementById("setadireita")
var Leonardo = window.document.getElementById("leonardo")
var SAMANTA = window.document.getElementById("SAMANTA")
var BRUNA = window.document.getElementById("BRUNA")
var setaEsquerda = window.document.getElementById("setaesquerda")


function RolarParaDireita() {
    Leonardo.style = "display:none"
    BRUNA.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex margin-top 55px"
}

 function RolarParaEsquerda() {
  Leonardo.style = "display:flex"
  BRUNA.style = "display:none" 
  setaDireita.style = "display:flex margin-top 55px"
  setaEsquerda.style = "display:none"
 }