const needle = require('needle')

const  url='https://pokeapi.co/api/v2/type'
needle('get', url)
      .then((response)=>{
        response.body.results .forEach(element=>{
          console.log(`Tipo: ${element.name}`)
          console.log(`----------------------`)
      })
      })
      .catch()


      