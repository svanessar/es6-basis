let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint = 'https://rickandmortyapi.com/api/character'

const exito= (response)=>{
    const names = JSON.parse(response).results
    names.forEach((element )=>{
        console.log(`name: ${element.name}`)
        console.log(`-------------------`)
    })
//console.log(JSON.parse(response).results)
}

const fallo = (status)=>{
    console.log(status)
}


const get_data = (endpoint)=>{
   //definir una promesa para la conexion api
   let promise = new Promise((resolve, reject)=>{
    //CREAMOS EL OBJETO DE CONEXION A LA API
    let http=new XMLHttpRequest()
    //abrir una conexion
    http.open('get',endpoint)
    //enviar la solicitud(request) a la api
    http.send()
    //hacer el tratamiento de la response
    http.onload = ()=>{
        if(http.status === 200){
            resolve(http.responseText)
        }
        else{
            reject(http.status)
        } 
    }
    
   })
   return promise;
   }
   

  async function f(){
    try{
   let response = await get_data(endpoint)
   exito(response)
    }  
     catch(error){
    fallo(error)
}
}
   f()
