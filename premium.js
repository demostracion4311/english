import { verbos} from "./ContenidoEspañolIngles/verbos.js"


const titulo = document.querySelector(".title");
const input = document.getElementById("bol");

const verificar = document.querySelector(".btn_verificar");
const contentBotonContinuar = document.querySelector(".contentBoton_continuar");
const messegeError = document.querySelector(".error");
const messegeSolutions = document.querySelector(".solutions");

const corazonNumber = document.querySelector(".corazon_number");


let indice = 0;//indice para controlar el indice de los array
let barraProgreso = 0;// para aumnetar la barra de progreso
let cantidadVidas = 5; // para determinar la cantidad de vida que le resta
corazonNumber.textContent=cantidadVidas;
updateProgress(barraProgreso); // Actualiza la barra de progreso al 50%


//sonido en parlante
let talk;
const volumenNormal = document.querySelector(".volumen");
volumenNormal.addEventListener("click",decir);
function decir(){
  LeerNormalIngles(talk)
}
const volumenLento = document.querySelector(".volumenLento");
volumenLento.addEventListener("click",decirLento);
function decirLento(){
  LeerLentoIngles(talk)
}

verificar.addEventListener("click",verificarPrompt);

// LO QUE OCURRE AL HACER CLICK EN VERIFICAR PROMPT
function verificarPrompt (){
  contentBotonContinuar.classList.toggle("inactive");

  let valor = input.value;
  let promptText;
  if(valor.toLowerCase()===verbos[indice][1].toLowerCase()){
    indice++;
    barraProgreso+=5;
    updateProgress(barraProgreso); // Actualiza la barra de progreso al 100%
    messegeError.textContent="Eres un genio muchacho";
    messegeSolutions.textContent="";

    if(indice===verbos.length){
      indice=0;
    }
  }
  else{
    messegeError.textContent="Esta mal tu respuesta SONSO";
    messegeSolutions.textContent="Solucion correcta: "+verbos[indice][1];
    cantidadVidas-=1;
    corazonNumber.textContent=cantidadVidas;
  }
}
// LO QUE OCURRE AL HACER CLICK EN CONTINUAR PROMPT
const continuePrompt = document.querySelector(".btn_continuar_prompt");
continuePrompt.addEventListener("click",continuarPrompt);


function continuarPrompt (){
  contentBotonContinuar.classList.toggle("inactive");
  input.value="";
  titulo.textContent=verbos[indice][0];
  talk = verbos[indice][1];
  LeerNormalIngles(talk)
}

titulo.textContent=verbos[indice][0];
talk =verbos[indice][1];
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
// FUNCION DE LECTURA EN INGLES NORMAL
function LeerNormalIngles(texto) {
  // Crear una nueva instancia de SpeechSynthesisUtterance
  let speak = new SpeechSynthesisUtterance(texto);

  // Configurar idioma y velocidad
  speak.lang = "en";
  speak.rate = 1;

  // Sintetizar el texto
  speechSynthesis.speak(speak);
}
// FUNCION DE LECTURA EN INGLES LENTO
function LeerLentoIngles(texto) {
  // Crear una nueva instancia de SpeechSynthesisUtterance
  let speak = new SpeechSynthesisUtterance(texto);

  // Configurar idioma y velocidad
  speak.lang = "en";
  speak.rate = -5;

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





