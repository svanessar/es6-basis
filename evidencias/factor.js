const axios = require('axios')

let config = {
    method:'get',
    url:'https://newton.now.sh/api/v2/factor/x^2-1'
}
const f = async()=>{
try{
  let response=  await axios(config)
console.log('resultado: ' +response.data.result)
   

}
catch(error){
console.error(error)
}
}
f()
