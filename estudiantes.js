let colors = require('colors');
const g1 = ["laura",
            "carlos", 
            "ana"
           ]
const g2 =["enrique",
           "jairos", 
           "valeria"
]
const g3 =[
         ...g1,"diana",
         ...g2, "duvan"
]
const estudiantes ={
    id:1 ,
    nombre: `Vanessa`,
    apellido: `Realpe`,
    identificacion: 1080260370,
    amigos: g3
}
console.log(estudiantes)
 