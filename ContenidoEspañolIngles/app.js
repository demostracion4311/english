import { LeerLentoIngles,LeerNormalIngles} from "./speak.js"
import { generarNumerosUnicos } from "./numberandom.js";

export function ejecucionCurso(verbos, generarNumero,parrafoObjetivo){
  const numeros = generarNumerosUnicos(generarNumero);
  const containerObjetivo = document.getElementById("parrafo_objetivo");
  containerObjetivo.textContent=parrafoObjetivo;

  const titulo = document.querySelector(".title");
  const helpTraduction = document.querySelector(".help_traduction")
  const input = document.getElementById("bol");
  const verificar = document.querySelector(".btn_verificar");
  const contentBotonContinuar = document.querySelector(".contentBoton_continuar");
  const messegeError = document.querySelector(".error");
  const messegeSolutions = document.querySelector(".solutions");
  const corazonNumber = document.querySelector(".corazon_number");
  const continuePrompt = document.querySelector(".btn_continuar_prompt");
  const finishAnuncio = document.querySelector(".finish_container");

  let firstEnter = true;//ESTA VARIABLE ES PARA VERIFICAR EL ENTER
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
    input.disabled= true
    helpTraduction.textContent="";
    contentBotonContinuar.classList.toggle("inactive");

    let valor = input.value; //obtiene el valor que recogio del promt text del usuario

    //ESTE IF COMPARA CON EL VALOR CONVERTIDO EN MINUSCULA CON MINUSCULA DEL ARRAY VERBO INPORTADO
    if(valor.toLowerCase()===verbos[numeros[indice]][1].toLowerCase()){
      playMusic("./sound/correcto star-mc.m4a")
      barraProgreso+=100/verbos.length;
      updateProgress(barraProgreso); // Actualiza la barra de progreso al 100%
      messegeError.textContent="¡ Eres Brillante !";
      messegeSolutions.textContent="";

      indice++;
      if(indice===verbos.length){
        anuncio();
        messegeError.textContent="";
        messegeSolutions.textContent="";
        continuePrompt.addEventListener("click",salirAnuncio)
        function salirAnuncio(){
          window.history.back();

        }

      }

    }
    else{
      playMusic("./sound/incorrecto-mc.m4a")
      messegeError.textContent="¡ Esta mal tu respuesta !";
      messegeSolutions.textContent="Solucion correcta: "+verbos[numeros[indice]][1];
      cantidadVidas-=1;
      corazonNumber.textContent=cantidadVidas;
    }
  }
  // LO QUE OCURRE AL HACER CLICK EN CONTINUAR PROMPT
  continuePrompt.addEventListener("click",continuarPrompt);


  function continuarPrompt (){
    input.disabled=false;
    helpTraduction.textContent="";
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
  function anuncio(){
    finishAnuncio.classList.toggle("inactive")
  }

  // ESTE EVENTO AYUDA AL USUARIO VER LA TRADUCCION
  titulo.addEventListener("click",traduction);
  function traduction (){
    helpTraduction.textContent=verbos[numeros[indice]][1];
  }

  // Variable para verificar si es la primera vez que se presiona Enter
  // Agregar un manipulador de eventos para el evento 'keydown'
  window.addEventListener('keydown', (event) => {
    // Verificar si la tecla presionada es Enter
    if (event.key === 'Enter'|| event.keyCode === 13)  {
      // Verificar si es la primera vez que se presiona Enter
      if (firstEnter) {
        // Ejecutar la primera función
        verificarPrompt();
        // Cambiar el valor de la variable para indicar que ya se presionó Enter
        firstEnter = false;
      } else {
        // Ejecutar la segunda función
        continuarPrompt();
        firstEnter= true;
      }
    }
  });
    
}