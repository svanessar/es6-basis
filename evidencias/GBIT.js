//metodo needle promises
const needle = require('needle')

const  url='https://api.gbif.org/v1/occurrence/search?year=1800,1899'
needle('get', url)
      .then((response)=>{
        response.body.results .forEach(element=>{
          console.log(`especies: ${element.species}`)
          console.log(`----------------------`)
      })
      })
      .catch()
