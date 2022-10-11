import { materias } from "./materias.js";



 materias.splice( 0,1, 
    {
     id:1,
     nombre:"javascript",
     instructor:"cristian",
     tipo: "tecnica",
     notas: [
      60,
      90,
      80]
     })

    
     console.log(materias)
   