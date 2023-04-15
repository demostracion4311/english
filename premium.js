// import { verbos} from "./ContenidoEspañolIngles/verbos"

const verbos = [ 
 
  ["Dormir","Sleep"],
  ["Cocinar","Cook"],
  ["Leer","Read"],
  ["Practicar","Practice"],
  ["Beber","Drink"],
  ["Saltar","Jump"],
  ["Nadar","Swim"],
  ["Hablar","Talk"]
];
const titulo = document.querySelector(".title");
const input = document.getElementById("bol");

const verificar = document.querySelector(".btn_verificar");
const contentBotonContinuar = document.querySelector(".contentBoton_continuar");
const messegeError = document.querySelector(".error");
const messegeSolutions = document.querySelector(".solutions");


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

verificar.addEventListener("click",verificarPrompt);

// LO QUE OCURRE AL HACER CLICK EN VERIFICAR PROMPT
function verificarPrompt (){
  contentBotonContinuar.classList.toggle("inactive");

  let valor = input.value;
  let promptText;
  if(valor===verbos[contador][1]){
    contador++;
    barraProgreso+=10;
    updateProgress(barraProgreso); // Actualiza la barra de progreso al 100%
    messegeError.textContent="Eres un genio muchacho";
    messegeSolutions.textContent="";

    if(contador===verbos.length){
      contador=0;
    }
  }
  else{
    messegeError.textContent="Esta mal tu respuesta SONSO";
    messegeSolutions.textContent="Solucion correcta: "+verbos[contador][1];
  }
}
// LO QUE OCURRE AL HACER CLICK EN CONTINUAR PROMPT
const continuePrompt = document.querySelector(".btn_continuar_prompt");
continuePrompt.addEventListener("click",continuarPrompt);


function continuarPrompt (){
  contentBotonContinuar.classList.toggle("inactive");
  input.value="";
  titulo.textContent=verbos[contador][0];
  talk = verbos[contador][1];
  LeerNormalIngles(talk)
}

titulo.textContent=verbos[contador][0];
talk =verbos[contador][1];
LeerNormalIngles(talk)


// FUNCION DE LECTURA EN ESPAÑOL

function LeerNormal(texto) {
  // Crear una nueva instancia de SpeechSynthesisUtterance
  let speak = new SpeechSynthesisUtterance(texto);

  // Configurar idioma y velocidad
  speak.lang = "es";
  speak.rate = 1;

  // Sintetizar el texto
  speechSynthesis.speak(speak);
}
// FUNCION DE LECTURA EN INGLES
function LeerNormalIngles(texto) {
  // Crear una nueva instancia de SpeechSynthesisUtterance
  let speak = new SpeechSynthesisUtterance(texto);

  // Configurar idioma y velocidad
  speak.lang = "en";
  speak.rate = 1;

  // Sintetizar el texto
  speechSynthesis.speak(speak);
}


// BARRA DE PROGRESO
function updateProgress(progress) {
  const progressBar = document.querySelector('.progress');
  progressBar.style.width = progress + '%';
}

//  ACTIVAR DESACTIVAR  CONTENIDO DE SALIR AL HACER CLICK AL ICON SALIR
const iconSalir = document.querySelector(".icon_salir");
const  salirContent = document.querySelector(".salir_content");
const continuar = document.querySelector(".btn_continuar");

iconSalir.addEventListener("click",mostrarContenidoSalir);
continuar.addEventListener("click",mostrarContenidoSalir);
function mostrarContenidoSalir(){
  salirContent.classList.toggle("inactive");
}





