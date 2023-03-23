const verbos = [ 
  ["Trabajar","Work"],
  ["Mirar","Look"],
  ["Escuchar","Listen"],
  ["Repetir","Repeat"],
  ["Levantarse","Get up"],
  ["Almorzar","Have lunch"],
  ["Jugar","Play"],
  ["Cenar","Have dinner"],
  ["Dormir","Sleep"],
  ["Cocinar","Cook"],
  ["Leer","Read"],
  ["Practicar","Practice"],
  ["Gustar","Like"],
  ["Amor","Love"],
  ["Hacer-Domestico","Make"],
  ["Estudiar","Estudy"],
  ["Cepillarse","Brush"],
  ["Tener","Have"],
  ["Sentar","Sit"], 
  ["ir", "go"],
  ["estudiante", "students"],
  ["casa", "home"],
  ["inicio", "index"],
  ["servicio", "services"],
  ["funcion","function"],
  ["Beber","Drink"],
  ["Saltar","Jump"],
  ["Nadar","Swim"],
  ["Hablar","Talk"]
];

let a;
let b;

async function miBucleWhile(i) { 
  const elemento = document.getElementById("miElemento");
  const promesaClic = new Promise((resolver) => {
    elemento.addEventListener("click", () => {
      resolver();
    });
  });

  let condicion = true;
  while (condicion) {
    document.getElementById("spanish").innerHTML = verbos[i][0];
    document.getElementById("english").innerHTML = verbos[i][1];
    a = verbos[i][1];
    b = verbos[i][1];

    LeerNormal(verbos[i][1]);
    LeerLento(verbos[i][1]);

    // Esperar hasta que se haga clic en el elemento
    await promesaClic;

    // Modificar la condición del bucle para continuar
    condicion = false;
  }
}

async function ejecutarBucles() {
  for (let i = 0; i < verbos.length; i++) {
    await miBucleWhile(i);
  }
}

ejecutarBucles();

document.getElementById(`normal`).addEventListener("click", () => {
  LeerNormal(a);
});

document.getElementById(`lento`).addEventListener("click", () => {
  LeerLento(b);
});

  
  function LeerNormal(texto) {
    // Crear una nueva instancia de SpeechSynthesisUtterance
    let speak = new SpeechSynthesisUtterance(texto);
  
    // Configurar idioma y velocidad
    speak.lang = "en";
    speak.rate = 1;
  
    // Sintetizar el texto
    speechSynthesis.speak(speak);
  }
  
  function LeerLento(texto) {
    // Crear una nueva instancia de SpeechSynthesisUtterance
    let speak = new SpeechSynthesisUtterance(texto);
  
    // Configurar idioma y velocidad
    speak.lang = "en";
    speak.rate = -3;
  
    // Sintetizar el texto
    speechSynthesis.speak(speak);
  }
  
