document.getElementById("verbo").addEventListener("click",verbos);
document.getElementById("color").addEventListener("click",colores);
document.getElementById("pronombre").addEventListener("click",pronombres);

function verbos(){
    localStorage.setItem("selectCurso","verbos");
};
function colores(){
    localStorage.setItem("selectCurso","colores");
};
function pronombres(){
    localStorage.setItem("selectCurso","pronombres");
};
console.log("hola");