//metodo axios await

const axios = require('axios')

let config = {
    method:'get',
    url:'http://ccdb.hemiola.com/characters/radicals/85?filter=gb'
}
const f = async()=>{
try{
  let response=  await axios(config)
response.data.forEach(element=>{
    console.log(`string: ${element.string}`)
    console.log(`------------------------`)
})
   

}
catch(error){
console.error(error)
}
}
f()