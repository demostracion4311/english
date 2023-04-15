const verbos = [
  ["Trabajar", "Work"],
  ["Mirar", "Look"],
  ["Escuchar", "Listen"],
  ["Repetir", "Repeat"],
  ["Jugar", "play"],
];
const titulo = document.querySelector(".title");
const input = document.getElementById("bol");

const verificar = document.querySelector(".boton");
const messegeError = document.querySelector(".error");

let contador = 0;
let barraProgreso = 0;
updateProgress(barraProgreso); // Actualiza la barra de progreso al 50%


//sonido en parlante
let talk;
const volumen = document.querySelector(".volumen");
volumen.addEventListener("click",decir);
function decir(){
  LeerNormalIngles(talk)
}

verificar.addEventListener("click",Mostrar);

function Mostrar (){
  barraProgreso+=10;
  updateProgress(barraProgreso); // Actualiza la barra de progreso al 100%

  let valor = input.value;
  if(valor===verbos[contador][1]){
    contador++;
    //hace que le input se vuelva vacio
    input.value="";
    if(contador===verbos.length){
      contador=0;
    }

  }

  else{
    console.log("NO ESTA bien");
    input.value="";
    let error = messegeError.textContent="Esta mal tu respuesta";
  }
  titulo.textContent=verbos[contador][0];
  talk = verbos[contador][1];
  LeerNormalIngles(talk)


}

titulo.textContent=verbos[contador][0];
talk =verbos[contador][1];
LeerNormalIngles(talk)




function LeerNormal(texto) {
  // Crear una nueva instancia de SpeechSynthesisUtterance
  let speak = new SpeechSynthesisUtterance(texto);

  // Configurar idioma y velocidad
  speak.lang = "es";
  speak.rate = 1;

  // Sintetizar el texto
  speechSynthesis.speak(speak);
}
function LeerNormalIngles(texto) {
  // Crear una nueva instancia de SpeechSynthesisUtterance
  let speak = new SpeechSynthesisUtterance(texto);

  // Configurar idioma y velocidad
  speak.lang = "en";
  speak.rate = 1;

  // Sintetizar el texto
  speechSynthesis.speak(speak);
}



/*BARRA DE PROGRESO */
function updateProgress(progress) {
  const progressBar = document.querySelector('.progress');
  progressBar.style.width = progress + '%';
}





