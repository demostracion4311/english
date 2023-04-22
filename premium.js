import { verbosCurs, coloresCurs , pronombresCurs} from "./ContenidoEspañolIngles/verbos.js"
import { ejecucionCurso } from "./ContenidoEspañolIngles/app.js";


const selectCurso = localStorage.getItem("selectCurso");
console.log(selectCurso)

switch (selectCurso){
  case "verbos":ejecucionCurso(verbosCurs, 20)
  break;
  case "colores":ejecucionCurso(coloresCurs,3);
  break;
  case "pronombres":ejecucionCurso(pronombresCurs,4);
  break;
  default:console.log("algo salio mal")
  break;
}






