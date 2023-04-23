import { verbosCurs, coloresCurs , pronombresCurs} from "./ContenidoEspañolIngles/verbos.js"
import { ejecucionCurso } from "./ContenidoEspañolIngles/app.js";


const selectCurso = localStorage.getItem("selectCurso");
console.log(selectCurso)

switch (selectCurso){
  case "verbos":ejecucionCurso(verbosCurs, verbosCurs.length, "Escribe el siguiente verbo en ingles:")
  break;
  case "colores":ejecucionCurso(coloresCurs,coloresCurs.length,"Escribe el siguiente color en ingles:");
  break;
  case "pronombres":ejecucionCurso(pronombresCurs,pronombresCurs.length,"Escribe el siguiente pronombre en ingles:");
  break;
  default:console.log("algo salio mal")
  break;
}






