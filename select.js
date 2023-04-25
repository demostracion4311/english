document.getElementById("verbo").addEventListener("click",verbos);
document.getElementById("color").addEventListener("click",colores);
document.getElementById("pronombre").addEventListener("click",pronombres);
document.getElementById("numero").addEventListener("click",numeros);

function verbos(){
    localStorage.setItem("selectCurso","verbos");
};
function colores(){
    localStorage.setItem("selectCurso","colores");
};
function pronombres(){
    localStorage.setItem("selectCurso","pronombres");
};
function numeros(){
    localStorage.setItem("selectCurso","numeros");
};
console.log("hola");