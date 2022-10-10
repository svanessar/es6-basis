/*//let : variables 
let lenguaje="java"
//const : funciones arreglos y objetos

console.log(`i hate ${lenguaje}`);*/

import pkg from 'colors'
import { materias } from "./materias.js";
/*
materias.forEach((materia)=>{
    if(materia.tipo==='basico'){
        console.log(`instructor: ${materia.instructor}`.blue)
        console.log(`materia: ${materia.nombre}`.yellow)
    }
})

//map:construye un arreglo con base al otro
const profesores =materias.map((materia)=>{
    return materia.instructor
   
})
console.log(profesores)

//find: encontrar la primera ocurrencia (elemento)
//que cumpla con la critica dada
const PHP = materias.find((materia)=>{
    return materia.instructor === "Jonatan espitia"
})


//push: agrega una nueva materia 
materias.push({
    
        id:4,
        nombre: "ingles",
        instructor: "Paola",
        tipo: "basica",
        notas: [
           90,
           100,
           80
        ]
    
})
console.log(materias)
*/
//splice: eliminar un elemento de un arreglo

 materias.splice(0,1)

 console.log(materias); 

 materias.splice(3,2,"javaScript","cristian","Tecnica",[90,60,70])
 console.log (materias)