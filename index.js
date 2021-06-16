let arrayFrases = ["isabel linda","joao delicia","thor bravo"];
let tempo = 15000;

function pegar(numer) {
  const tela = document.getElementById("tela")
  tela.innerHTML += numer
}
function limpar() {
  const text = document.getElementById("tela")
  const editedText = text.innerHTML.slice(0, -1) //'abcde'
  text.innerHTML = editedText
}
function space() {
  document.querySelector('#tela').innerHTML += '  '
}
function deletartudo() {
  document.getElementById("tela").innerHTML = ""
}
function iniciarJogo(){
  let tamanhoDoArray = arrayFrases.length
  let numeroAleatorio = Math.floor(Math.random() * tamanhoDoArray);
  let fraseAleatoria = arrayFrases[numeroAleatorio];
  let fraseHtml = document.getElementById("frase")
  for(let i = 0; i < 1; i++){
       let insercao = ""
       insercao += `<p class="pe">${fraseAleatoria}</p>`
    fraseHtml.innerHTML = insercao    
  }
  setTimeout (() =>  {
    alert ("Tempo esgotado");
    document.querySelector(".pe").innerText =  ""
  }, tempo)
}
function btEnviar(){
    comparar()
}
function comparar(){
  const conteudoFrase = document.querySelector(".pe").innerText
  const conteudoDiv = document.getElementById("tela").innerText
       if(conteudoFrase === conteudoDiv){
            alert("Acertou");
            clearTimeout(tempo)
            console.log(tempo)
       }
       else{
           alert("Errou")
       }
}


