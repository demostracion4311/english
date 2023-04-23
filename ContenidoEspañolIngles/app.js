import { LeerLentoIngles,LeerNormalIngles} from "./speak.js"
import { generarNumerosUnicos } from "./numberandom.js";

export function ejecucionCurso(verbos, generarNumero){
    const numeros = generarNumerosUnicos(generarNumero);
    console.log(numeros)

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
  
      let valor = input.value; //obtiene el valor que recogio del promt text del usuario
  
      //ESTE IF COMPARA CON EL VALOR CONVERTIDO EN MINUSCULA CON MINUSCULA DEL ARRAY VERBO INPORTADO
      if(valor.toLowerCase()===verbos[numeros[indice]][1].toLowerCase()){
        playMusic("./sound/correcto star-mc.m4a")
        barraProgreso+=5;
        updateProgress(barraProgreso); // Actualiza la barra de progreso al 100%
        messegeError.textContent="Eres un genio muchacho";
        messegeSolutions.textContent="";

        indice++;
        if(indice===verbos.length){
          window.history.back();
        }
  
  
      }
      else{
        playMusic("./sound/incorrecto-mc.m4a")
        messegeError.textContent="Esta mal tu respuesta SONSO";
        messegeSolutions.textContent="Solucion correcta: "+verbos[numeros[indice]][1];
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
      console.log(numeros[indice])
      titulo.textContent=verbos[numeros[indice]][0];
      talk = verbos[numeros[indice]][1];
      LeerNormalIngles(talk)
  
    }
  
    titulo.textContent=verbos[numeros[indice]][0];
    talk =verbos[numeros[indice]][1];
    LeerNormalIngles(talk)
  
  
  
  
  
    // BARRA DE PROGRESO
    function updateProgress(progress) {
      const progressBar = document.querySelector('.progress');
      progressBar.style.width = progress + '%';
    }
  
    //  ACTIVAR DESACTIVAR  CONTENIDO DE SALIR AL HACER CLICK AL ICON SALIR
    const iconSalir = document.querySelector(".icon_salir");
    const  salirContent = document.querySelector(".salir_content");
    const continuar = document.querySelector(".btn_continuar");
    const abandonar = document.querySelector(".btn_abandonar");
  
    iconSalir.addEventListener("click",mostrarContenidoSalir);
    continuar.addEventListener("click",mostrarContenidoSalir);
    function mostrarContenidoSalir(){
      salirContent.classList.toggle("inactive");
    }
    // FUNCION PARA VOLVER HACIA ATRAS EN LA PAGINA DE APP
    abandonar.addEventListener("click",volverPage);
    function volverPage(){
      window.history.back();
    }
    function playMusic(musicURL) {
      var audio = new Audio(musicURL);
      audio.play();
    }
    
}