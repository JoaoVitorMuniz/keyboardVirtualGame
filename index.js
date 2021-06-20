let arrayFrases = ["to eat", "spend money","just a little bit","bed","One dog and one cat","One kiss in your mouth","My dog pess a lot"
,"hustle castle","nothin"];
let time
let i = 0
let caps = false
console.log(caps)

function pegar(numer) {
  const tela = document.getElementById("tela")
  if(caps){
    tela.innerHTML += numer.toUpperCase()
   
}else{

    tela.innerHTML += numer
}

}
function capslock(){
 
  caps = caps ? false : true
  console.log(caps)
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

function comparar() {
  const conteudoFrase = document.querySelector("#frase").innerText
  const conteudoDiv = document.getElementById("tela").innerText
  if (conteudoFrase === conteudoDiv) {
    stopCronometro();
    alert("Acertou");
    document.getElementById("frase").innerText = " "
    document.getElementById("timer").removeAttribute("class", "timer");
    document.getElementById("tela").innerText = "  "
    contagemRegressiva();
  } else {
    alert("Errou")
    document.querySelector("#frase").innerText = "  "
    document.getElementById("tela").innerText = "  "
  }
}
function primeiroJogar() {
      contagemRegressiva();
   }
function frase(){
  document.getElementById("frase").innerHTML = arrayFrases[i]
  i++
}

function stopCronometro() {
  clearTimeout(time);
}

function contagemRegressiva(){
    document.getElementById("contagemReg").innerText = "3"
    setTimeout(() => {
      document.getElementById("contagemReg").innerText = "2"
      setTimeout(() => {
        document.getElementById("contagemReg").innerText = "1"
        setTimeout(()=>{
          document.getElementById("contagemReg").innerText = " "
        },1000)
      }, 1000)
    }, 1000)
   setTimeout(()=>{
       frase();
   },3000)
  setTimeout(()=>{
    document.getElementById("timer").setAttribute("class", "timer");
  },3000)
    time = setTimeout(() =>{
      alert("TEMPO ESGOTADO")
      document.getElementById("frase").innerText = " "
      document.getElementById("tela").innerText = "  "

    },18000)

    setTimeout(()=>{

      document.getElementById("timer").removeAttribute("class", "timer");
    },18000)
}
