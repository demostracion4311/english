// FUNCION DE LECTURA EN INGLES NORMAL
export function LeerNormalIngles(texto) {
    // Crear una nueva instancia de SpeechSynthesisUtterance
    let speak = new SpeechSynthesisUtterance(texto);
  
    // Configurar idioma y velocidad
    speak.lang = "en";
    speak.rate = 1;
  
    // Sintetizar el texto
    speechSynthesis.speak(speak);
  }
  // FUNCION DE LECTURA EN INGLES LENTO
 export function LeerLentoIngles(texto) {
    // Crear una nueva instancia de SpeechSynthesisUtterance
    let speak = new SpeechSynthesisUtterance(texto);
  
    // Configurar idioma y velocidad
    speak.lang = "en";
    speak.rate = -7;
  
    // Sintetizar el texto
    speechSynthesis.speak(speak);
  }