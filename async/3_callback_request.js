const request = require('request')

let endpoint = 'https://pokeapi.co/api/v2/type'
const r = request(endpoint, {json: true }, function(error, response, data){
data.results.forEach(element =>{
    console.log(`tipo: ${element.name}`)
    console.log(`--------------`)
})
    
})