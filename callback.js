function llamarAlumno(alumno, callback){
    let = llamadaAlumno = `Llamando alumno: ${alumno}`
//ejecutar la funcion callback
callback(llamadaAlumno)
}
//definir  funcion callback 
const imprimir=(texto )=>{
    console.log(texto)
}
//invocar la funcion principal llamarAlumno
llamarAlumno("Vanessa Realpe", imprimir)